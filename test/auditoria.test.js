import { test } from "node:test";
import assert from "node:assert/strict";
import { verificarHistorico, hashHistorico } from "../src/auditoria/integridade.js";
import { eProcessoAcertos, pageHinkley } from "../src/auditoria/evidencia.js";
import { executarAutoteste } from "../src/auditoria/autoteste.js";
import { gerarJogos } from "../src/quantico/otimizador.js";
import { ajustarPopularidade } from "../src/quantico/popularidade.js";
import { HISTORICO } from "../src/dados/historico.js";
import { rng, embaralhar } from "../src/estatistica/matematica.js";

const R = HISTORICO.map(h => ({ concurso: h.concurso, data: h.data, resultado: h.dezenas }));

test("integridade: histórico oficial íntegro; detecta duplicado, ausente e dezena inválida", () => {
  const v = verificarHistorico(R);
  assert.equal(v.graves, 0);
  const ruim = [...R.slice(0, 10), R[5], { ...R[11], resultado: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] }];
  const tipos = verificarHistorico(ruim).problemas.map(p => p.tipo);
  assert.ok(tipos.includes("duplicado") && tipos.includes("ausente") && tipos.includes("dezenas"), tipos.join(","));
  assert.notEqual(hashHistorico(R), hashHistorico([...R.slice(0, -1), { ...R.at(-1), resultado: [...R.at(-1).resultado].reverse() }]));
});

test("e-processo: falso positivo ≤ 5% sob o acaso, mesmo olhando a cada concurso; detecta vantagem real", () => {
  const r = rng(8);
  const acertos = vies => { const s = new Set(embaralhar(Array.from({ length: 25 }, (_, i) => i + 1), r).slice(0, 15)); const jogo = Array.from({ length: 15 }, (_, i) => i + 1); let a = jogo.filter(n => s.has(n)).length; if (vies && r() < vies) a = Math.min(15, a + 1); return a; };
  let rejeicoes = 0;
  for (let k = 0; k < 200; k++) if (eProcessoAcertos(Array.from({ length: 1000 }, () => acertos(0))).rejeitaEm != null) rejeicoes++;
  assert.ok(rejeicoes / 200 <= 0.06, `taxa ${rejeicoes / 200}`);
  assert.ok(eProcessoAcertos(Array.from({ length: 2000 }, () => acertos(0.3))).rejeitaEm != null);
  assert.ok(pageHinkley(Array.from({ length: 1000 }, () => acertos(0) - 9)).length <= 1);
});

test("autoteste científico: 6/6", async () => {
  const r = await executarAutoteste();
  assert.equal(r.aprovados, r.total, r.testes.filter(t => !t.ok).map(t => `${t.nome}: ${t.detalhe}`).join(" | "));
});

test("reprodutibilidade: mesma seed, mesmos jogos", () => {
  const modelo = ajustarPopularidade(HISTORICO), ultimo = HISTORICO.at(-1).dezenas;
  const a = gerarJogos({ quantidade: 3, modelo, ultimo, semente: 123, iteracoes: 5000 });
  const b = gerarJogos({ quantidade: 3, modelo, ultimo, semente: 123, iteracoes: 5000 });
  const c = gerarJogos({ quantidade: 3, modelo, ultimo, semente: 124, iteracoes: 5000 });
  assert.deepEqual(a, b);
  assert.notDeepEqual(a, c);
});

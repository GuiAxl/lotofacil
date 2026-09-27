import { test } from "node:test";
import assert from "node:assert/strict";
import { relatorio, auc, brier, neweyWest, phaseShift, portfolioAleatorio } from "../src/estatistica/metricas.js";
import { placarDiario, registrarNoDiario, validarPrevisao } from "../src/estatistica/laboratorio.js";
import { estimarProximo, aplicarCorrecoes } from "../src/ui/estado.js";
import { rng, embaralhar, calibrarSoma15, logit } from "../src/estatistica/matematica.js";
import { simular, governanca, contrafactual, prever, explicarDezena } from "../src/quantico/motor.js";

const sorteio = r => embaralhar(Array.from({ length: 25 }, (_, i) => i + 1), r).slice(0, 15);

test("AUC e Brier: nulo dá 0,5 e 0,24; previsão perfeita dá 1", () => {
  const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const nulo = new Array(26).fill(0.6);
  assert.equal(auc(nulo, s), 0.5);
  assert.ok(Math.abs(brier(nulo, s) - 0.24) < 1e-12);
  const perfeita = Array.from({ length: 26 }, (_, n) => (n <= 15 ? 0.99 : 0.01));
  assert.equal(auc(perfeita, s), 1);
});

test("relatório: previsões sem informação ficam no nulo; previsões informativas aparecem", () => {
  const r = rng(3);
  const semInfo = [], comInfo = [];
  for (let i = 0; i < 600; i++) {
    const s = sorteio(r);
    const pr = [0, ...calibrarSoma15(Array.from({ length: 25 }, () => logit(0.6) + (r() - 0.5) * 0.2))];
    const jogo = Array.from({ length: 25 }, (_, k) => k + 1).sort((a, b) => pr[b] - pr[a]).slice(0, 15);
    semInfo.push({ probs: pr, sorteio: s, jogo, acertos: jogo.filter(x => s.includes(x)).length });
    const pi = [0, ...calibrarSoma15(Array.from({ length: 25 }, (_, k) => logit(0.6) + (s.includes(k + 1) ? 0.4 : -0.4) + (r() - 0.5)))];
    const jogo2 = Array.from({ length: 25 }, (_, k) => k + 1).sort((a, b) => pi[b] - pi[a]).slice(0, 15);
    comInfo.push({ probs: pi, sorteio: s, jogo: jogo2, acertos: jogo2.filter(x => s.includes(x)).length });
  }
  const a = relatorio(semInfo), b = relatorio(comInfo);
  assert.ok(Math.abs(a.auc - 0.5) < 0.02, `auc ${a.auc}`);
  assert.ok(Math.abs(a.zNW) < 3);
  assert.ok(a.phaseShift.p > 0.01);
  assert.ok(b.auc > 0.6 && b.ganhoBrier > 0 && b.zNW > 3 && b.phaseShift.p < 0.05);
});

test("Newey-West e portfólio aleatório", () => {
  const r = rng(9);
  const x = Array.from({ length: 2000 }, () => r() - 0.5);
  const ep = neweyWest(x);
  assert.ok(ep > 0.004 && ep < 0.01, `ep ${ep}`);
  const p = portfolioAleatorio(3, { sorteios: 5000 });
  assert.ok(Math.abs(p.media - 9) < 0.05 && p.melhor > 9.8 && p.melhor < 10.3);
});

test("arquivo de previsões: congela a primeira e reavalia após correção", async () => {
  const jogo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const probs = [0, ...new Array(25).fill(0.6)];
  assert.deepEqual(validarPrevisao({ jogo, probs }), []);
  assert.equal(validarPrevisao({ jogo: [1, 1, 2], probs: null }).length, 1);
  const r1 = await registrarNoDiario({ concurso: 10, motor: "x", jogo, probs });
  await new Promise(r => setTimeout(r, 5));
  const r2 = await registrarNoDiario({ concurso: 10, motor: "x", jogo: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] });
  const oficial = [{ concurso: 10, data: "01/01/2026", resultado: jogo }];
  const placar = res => placarDiario([r2, r1], new Map(res.map(r => [r.concurso, r.resultado])));
  assert.equal(placar(oficial).x.media, 15, "vale a primeira previsão");
  const corrigido = aplicarCorrecoes(oficial, { 10: { resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 18, 19, 20] } });
  assert.equal(placar(corrigido).x.media, 10, "reavaliada após a correção");
  assert.ok(Math.abs(placar(oficial).x.ganhoBrier) < 1e-9);
});

test("próximo concurso: segue os dias da semana com sorteio recente", async () => {
  const { HISTORICO } = await import("../src/dados/historico.js");
  const R = HISTORICO.map(h => ({ concurso: h.concurso, data: h.data, resultado: h.dezenas }));
  // Até o 3500 não havia sorteio aos domingos: depois de um sábado, vem segunda.
  const ate = R.slice(0, 3500);
  const prox = estimarProximo(ate);
  assert.equal(prox.concurso, 3501);
  assert.equal(prox.data, R[3500].data);
  const sabado = [{ concurso: 1, data: "26/09/2026" }, ...Array.from({ length: 12 }, (_, i) => ({ concurso: 2 + i, data: `${String(14 + i).padStart(2, "0")}/09/2026` })).filter(r => new Date(Date.UTC(2026, 8, +r.data.slice(0, 2))).getUTCDay() !== 0)];
  sabado.sort((a, b) => a.data.localeCompare(b.data));
  assert.equal(estimarProximo([...sabado.slice(1), { concurso: 99, data: "26/09/2026" }]).data, "28/09/2026");
});

test("quântico v2: governança, explicação e contrafactual coerentes", () => {
  const r = rng(4);
  const base = Array.from({ length: 900 }, () => sorteio(r).sort((a, b) => a - b));
  const plantado = base.map((d, i) => (i > 0 && base[i - 1].includes(2) && !d.includes(1) ? [...d.slice(1), 1].sort((a, b) => a - b) : d));
  const res = simular(plantado, { aquecimento: 100 });
  const gov = governanca(res.estado);
  assert.ok(gov.some(g => g.status === "Champion"), JSON.stringify(gov.map(g => g.status)));
  const p = prever(res.estado);
  const soma = explicarDezena(p, 1).reduce((s, l) => s + l.contribuicao, 0);
  assert.ok(Math.abs(soma - (p.probs[1] - 0.6)) < 1e-9);
  assert.equal(contrafactual(res.estado).length, 9);
});

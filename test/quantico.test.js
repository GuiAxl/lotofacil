import { test } from "node:test";
import assert from "node:assert/strict";
import { HISTORICO } from "../src/dados/historico.js";
import { gerarLaudo } from "../src/quantico/laudo.js";
import { simular } from "../src/quantico/motor.js";
import { ajustarPopularidade, avaliarPopularidade } from "../src/quantico/popularidade.js";
import { gerarJogos, retornoEsperado, fechamento } from "../src/quantico/otimizador.js";
import { pQuiQuadrado, pAcertos } from "../src/quantico/distribuicoes.js";
import { rng, embaralhar, media } from "../src/estatistica/matematica.js";

const aleatorios = (n, semente) => { const r = rng(semente); return Array.from({ length: n }, () => embaralhar(Array.from({ length: 25 }, (_, i) => i + 1), r).slice(0, 15).sort((a, b) => a - b)); };

test("histórico completo: 3789 concursos válidos e em ordem", () => {
  assert.equal(HISTORICO.length, 3789);
  HISTORICO.forEach((h, i) => { assert.equal(h.concurso, i + 1); assert.equal(new Set(h.dezenas).size, 15); });
  assert.deepEqual(HISTORICO[3765].dezenas, [1, 2, 3, 5, 8, 9, 11, 13, 14, 16, 17, 19, 21, 23, 24]);
});

test("distribuições: χ² e hipergeométrica", () => {
  assert.ok(Math.abs(pQuiQuadrado(36.415, 24) - 0.05) < 0.002);
  let s = 0; for (let k = 0; k <= 15; k++) s += pAcertos(k);
  assert.ok(Math.abs(s - 1) < 1e-9);
  assert.ok(Math.abs(pAcertos(11) - 0.0877) < 0.0005);
});

test("laudo calibrado: sorteios aleatórios não acusam desvio (e o χ² de frequência tem média ≈ 24)", () => {
  const stats = [];
  for (let s = 1; s <= 12; s++) {
    const l = gerarLaudo(aleatorios(1500, s).map(d => ({ dezenas: d, concurso: 0 })));
    stats.push(Number(l.testes[0].estatistica.match(/χ² = ([\d.]+)/)[1]));
    assert.ok(l.desvios <= 1, `semente ${s}: ${l.desvios} desvios`);
  }
  const m = media(stats);
  assert.ok(m > 18 && m < 30, `média χ² ${m}`);
});

test("motor quântico: acaso fica sem confiança; padrão plantado é encontrado", () => {
  const acaso = simular(aleatorios(1200, 5), { aquecimento: 100 });
  assert.ok(acaso.pontos.at(-1).valor < 0.7, `confiança no acaso ${acaso.pontos.at(-1).valor}`);
  const base = aleatorios(1200, 6);
  const plantado = base.map((d, i) => (i > 0 && base[i - 1].includes(2) && !d.includes(1) ? [...d.slice(1), 1].sort((a, b) => a - b) : d));
  const r = simular(plantado, { aquecimento: 100 });
  assert.ok(r.pontos.at(-1).valor > 0.95, `confiança no plantado ${r.pontos.at(-1).valor}`);
  assert.ok(media(r.acertos) > media(acaso.acertos));
});

test("popularidade: jogo aleatório ≈ 1, modelo melhora a validação", () => {
  const m = ajustarPopularidade(HISTORICO);
  assert.ok(m.validacao.r2Modelo > m.validacao.r2Base);
  const ult = HISTORICO.at(-1).dezenas;
  const indices = aleatorios(400, 9).map(j => avaliarPopularidade(m, j, ult).indice);
  const med = media(indices);
  assert.ok(med > 0.9 && med < 1.1, `média ${med}`);
});

test("gerador respeita fixos/excluídos e melhora o retorno esperado", () => {
  const modelo = ajustarPopularidade(HISTORICO), ultimo = HISTORICO.at(-1).dezenas;
  const jogos = gerarJogos({ quantidade: 3, modelo, ultimo, fixos: [7, 13], excluidos: [1, 25], iteracoes: 8000, semente: 4 });
  jogos.forEach(j => { assert.equal(j.length, 15); assert.ok(j.includes(7) && j.includes(13)); assert.ok(!j.includes(1) && !j.includes(25)); });
  const medioAleat = media(aleatorios(200, 2).map(j => retornoEsperado(j, { modelo, ultimo, preco: 3.5 }).valor));
  const medioGerado = media(jogos.map(j => retornoEsperado(j, { modelo, ultimo, preco: 3.5 }).valor));
  assert.ok(medioGerado > medioAleat, `${medioGerado} vs ${medioAleat}`);
});

test("fechamento 18 dezenas / 14 pontos: garantia verificada em todos os 816 cenários", async () => {
  const f = await fechamento(Array.from({ length: 18 }, (_, i) => i + 1), 14);
  assert.equal(f.cenarios, 816);
  assert.ok(f.verificado);
  assert.ok(f.jogos.length <= 26, `${f.jogos.length} jogos`);
});

test("Boltzmann: não inventa interação no acaso e acha interação plantada", async () => {
  const { criarBoltzmann, aprenderBoltzmann, acoplamentosFortes } = await import("../src/quantico/boltzmann.js");
  const acaso = aleatorios(1200, 21);
  const b1 = criarBoltzmann();
  acaso.forEach((d, t) => aprenderBoltzmann(b1, d, acaso[t - 1] || null));
  const a1 = acoplamentosFortes(b1);
  assert.ok(a1.nJ + a1.nK <= 2, `${a1.nJ} + ${a1.nK}`);
  const plant = acaso.map((d, t) => (t > 0 && acaso[t - 1].includes(4) && !d.includes(3) ? [...d.filter(x => x !== d.find(v => v > 5)), 3].sort((a, b) => a - b) : d));
  const b2 = criarBoltzmann();
  plant.forEach((d, t) => aprenderBoltzmann(b2, d, plant[t - 1] || null));
  const k = acoplamentosFortes(b2).K[0];
  assert.deepEqual([k.de, k.para], [4, 3]);
  assert.ok(k.valor > 0.5);
});

test("annealing quântico simulado: portfólio válido e não pior que o clássico na média", async () => {
  const { gerarPortfolio } = await import("../src/quantico/otimizador.js");
  const modelo = ajustarPopularidade(HISTORICO), ultimo = HISTORICO.at(-1).dezenas;
  let q = 0, c = 0;
  for (let s = 1; s <= 3; s++) {
    const r = gerarPortfolio({ quantidade: 6, modelo, ultimo, semente: s, metodo: "ambos", iteracoes: 15000 });
    r.jogos.forEach(j => assert.equal(new Set(j).size, 15));
    q += r.energias.quantico; c += r.energias.classico;
  }
  assert.ok(q <= c + 0.05, `quântico ${q} × clássico ${c}`);
});

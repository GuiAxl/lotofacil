import { test } from "node:test";
import assert from "node:assert/strict";
import { HISTORICO } from "../src/dados/historico.js";
import { simular, prever, pesosMistura } from "../src/quantico/motor.js";
import { jogosAstrais } from "../src/estatistica/motor.js";
import { estimarProximo } from "../src/ui/estado.js";
import { rng, embaralhar, media } from "../src/estatistica/matematica.js";

const aleatorios = (n, semente) => { const r = rng(semente); return Array.from({ length: n }, () => embaralhar(Array.from({ length: 25 }, (_, i) => i + 1), r).slice(0, 15).sort((a, b) => a - b)); };

test("histórico completo: 3789 concursos válidos e em ordem", () => {
  assert.equal(HISTORICO.length, 3789);
  HISTORICO.forEach((h, i) => { assert.equal(h.concurso, i + 1); assert.equal(new Set(h.dezenas).size, 15); });
  assert.deepEqual(HISTORICO[3765].dezenas, [1, 2, 3, 5, 8, 9, 11, 13, 14, 16, 17, 19, 21, 23, 24]);
});

test("motor de números: acaso fica sem confiança; padrão plantado é encontrado", () => {
  const acaso = simular(aleatorios(1200, 5), { aquecimento: 100 });
  assert.ok(prever(acaso.estado).confianca < 0.7, `confiança no acaso ${prever(acaso.estado).confianca}`);
  const base = aleatorios(1200, 6);
  const plantado = base.map((d, i) => (i > 0 && base[i - 1].includes(2) && !d.includes(1) ? [...d.slice(1), 1].sort((a, b) => a - b) : d));
  const r = simular(plantado, { aquecimento: 100 });
  assert.ok(prever(r.estado).confianca > 0.95, `confiança no plantado ${prever(r.estado).confianca}`);
  assert.ok(media(r.acertos) > media(acaso.acertos));
  assert.equal(prever(r.estado).jogo.length, 15);
});

test("motor de números: registros por concurso só usam o passado", () => {
  const S = aleatorios(400, 9), trocado = [...S.slice(0, 300), ...aleatorios(100, 10)];
  const a = simular(S, { aquecimento: 100 }).registros.find(r => r.t === 300);
  const b = simular(trocado, { aquecimento: 100 }).registros.find(r => r.t === 300);
  assert.deepEqual(a.jogo, b.jogo);
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

test("evolui ou sai: especialista muito pior que o acaso sai da mistura e volta quando melhora", () => {
  const e = simular(aleatorios(300, 6), { aquecimento: 100, guardarRegistros: false }).estado;
  const i = e.especialistas.findIndex(x => x.familia === "pares");
  const nulo = e.especialistas.find(x => x.nulo);
  e.especialistas[i].perda = nulo.perda + 3;
  assert.equal(pesosMistura(e)[i], 0);
  e.especialistas[i].perda = nulo.perda + 0.5;
  assert.ok(pesosMistura(e)[i] > 0);
});

test("motor astral: jogo de cada concurso só usa mapas anteriores", () => {
  const S = aleatorios(60, 3);
  const concursos = S.map((d, i) => ({ concurso: i + 1, resultado: d, chaves: [`s${i % 7}`, `t${i % 3}`] }));
  const a = jogosAstrais(concursos), b = jogosAstrais(concursos.map((c, i) => (i >= 40 ? { ...c, resultado: S[(i + 5) % 60] } : c)));
  assert.deepEqual(a.get(41).jogo, b.get(41).jogo);
  assert.equal(a.get(41).treino, 40);
  assert.equal(a.size, 60);
});

test("próximo concurso: segue os dias da semana com sorteio recente", () => {
  const R = HISTORICO.map(h => ({ concurso: h.concurso, data: h.data, resultado: h.dezenas }));
  const prox = estimarProximo(R.slice(0, 3500));
  assert.equal(prox.concurso, 3501);
  assert.equal(prox.data, R[3500].data);
});

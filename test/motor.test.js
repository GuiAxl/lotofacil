import { test } from "node:test";
import assert from "node:assert/strict";
import { simular, testePermutacao, criarEstado, registrar, prever } from "../src/estatistica/motor.js";
import { media, hipergeometrica, qValoresBH, pBinomialBicaudal } from "../src/estatistica/matematica.js";
import { historicoSintetico } from "./sintetico.js";

test("hipergeométrica soma 1 e tem média 9", () => {
  let s = 0, m = 0;
  for (let k = 0; k <= 15; k++) { s += hipergeometrica(k); m += k * hipergeometrica(k); }
  assert.ok(Math.abs(s - 1) < 1e-9);
  assert.ok(Math.abs(m - 9) < 1e-9);
});

test("BH e binomial se comportam", () => {
  assert.deepEqual(qValoresBH([0.01, 0.04, 0.03]).map(x => +x.toFixed(3)), [0.03, 0.04, 0.04]);
  assert.ok(pBinomialBicaudal(6, 10) > 0.99);
  assert.ok(pBinomialBicaudal(20, 20) < 1e-3);
});

test("sem vazamento: o resultado do próprio concurso não altera sua previsão", () => {
  const h = historicoSintetico({ n: 60, sinalPlantado: true });
  const e = criarEstado();
  h.slice(0, 59).forEach(c => registrar(e, c));
  const alvo = h[59];
  const a = prever(e, alvo, "astral").jogo;
  const b = prever(e, { ...alvo, resultado: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] }, "astral").jogo;
  assert.deepEqual(a, b);
});

test("acaso puro: mistura não confia nos sinais e permutação não acusa nada", async () => {
  for (const semente of [3, 5]) {
    const h = historicoSintetico({ n: 320, semente });
    const r = simular(h);
    const m = media(r.porMotor.astral.acertos);
    assert.ok(m > 8.6 && m < 9.4, `média ${m}`);
    assert.ok(r.trilha.at(-1).pesoAstral < 0.5, `peso astral ${r.trilha.at(-1).pesoAstral}`);
    const perm = await testePermutacao(h, { n: 40 });
    assert.ok(perm.p.ganhoPerda > 0.05, `p ${perm.p.ganhoPerda}`);
  }
});

test("sinal plantado: mistura passa a confiar nos sinais e a permutação confirma", async () => {
  const h = historicoSintetico({ n: 320, sinalPlantado: true, semente: 5 });
  const r = simular(h);
  assert.ok(r.trilha.at(-1).pesoAstral > 0.9, `peso astral ${r.trilha.at(-1).pesoAstral}`);
  assert.ok(r.perda.uniforme > r.perda.astral);
  const perm = await testePermutacao(h, { n: 40 });
  assert.ok(perm.p.ganhoPerda < 0.05, `p ${perm.p.ganhoPerda}`);
});

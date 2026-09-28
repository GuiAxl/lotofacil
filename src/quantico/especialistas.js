// Especialistas do Motor Ω. Cada um recebe as características de um concurso
// (26 dezenas × K) e devolve 25 probabilidades que somam 15; depois aprende
// com o resultado. Todos são online (test-then-learn) e determinísticos.
import { K, IDX } from "./banco.js";
import { criarBoltzmann, marginais, aprenderBoltzmann } from "./boltzmann.js";
import { calibrarSoma15, logit, rng } from "../estatistica/matematica.js";

const L0 = logit(0.6);
const linha = (X, t, n) => (t * 26 + n) * K;

// ── Nulo: 60% para todas.
export function nulo() {
  return { tipo: "nulo", prever: () => new Array(26).fill(0.6), aprender() {} };
}

// ── Regressão logística online (pesos compartilhados entre as dezenas) sobre
// um subconjunto de características. AdaGrad + L2.
export function logistico(feats, { lr = 0.03, l2 = 0.001 } = {}) {
  const w = new Float64Array(feats.length), g2 = new Float64Array(feats.length).fill(1e-8);
  let b = 0, gb = 1e-8;
  const logits = (X, t) => {
    const s = [];
    for (let n = 1; n <= 25; n++) { const o = linha(X, t, n); let z = L0 + b; feats.forEach((k, i) => { z += w[i] * X[o + k]; }); s.push(z); }
    return s;
  };
  return {
    tipo: "logistico", feats, lr, l2, w,
    prever(X, t) { return [0, ...calibrarSoma15(logits(X, t))]; },
    aprender(X, t, sorteado, p) {
      const g = new Float64Array(feats.length);
      let gbias = 0;
      for (let n = 1; n <= 25; n++) {
        const e = p[n] - (sorteado.has(n) ? 1 : 0), o = linha(X, t, n);
        feats.forEach((k, i) => { g[i] += e * X[o + k]; });
        gbias += e;
      }
      feats.forEach((_, i) => { g[i] += l2 * w[i] * 25; g2[i] += g[i] * g[i]; w[i] -= (lr / Math.sqrt(g2[i])) * g[i]; });
      gb += gbias * gbias; b -= (lr / Math.sqrt(gb)) * gbias;
    },
  };
}

// ── Rede neural online (MLP 1 camada oculta, tanh) sobre todas as
// características: captura efeitos não lineares e interações entre sinais.
export function neural({ ocultos = 10, lr = 0.01, l2 = 0.0005, semente = 31 } = {}) {
  const r = rng(semente), H = ocultos;
  const W1 = Array.from({ length: H }, () => Float64Array.from({ length: K }, () => (r() - 0.5) * 0.2));
  const b1 = new Float64Array(H), W2 = Float64Array.from({ length: H }, () => (r() - 0.5) * 0.02);
  const g1 = Array.from({ length: H }, () => new Float64Array(K).fill(1e-8)), gb1 = new Float64Array(H).fill(1e-8), g2 = new Float64Array(H).fill(1e-8);
  let b2 = 0, gb2 = 1e-8;
  const frente = (X, o) => {
    const a = new Float64Array(H);
    for (let h = 0; h < H; h++) { let s = b1[h]; for (let k = 0; k < K; k++) s += W1[h][k] * X[o + k]; a[h] = Math.tanh(s); }
    let z = L0 + b2;
    for (let h = 0; h < H; h++) z += W2[h] * a[h];
    return { a, z };
  };
  return {
    tipo: "neural",
    prever(X, t) { const s = []; for (let n = 1; n <= 25; n++) s.push(frente(X, linha(X, t, n)).z); return [0, ...calibrarSoma15(s)]; },
    aprender(X, t, sorteado, p) {
      const dW1 = Array.from({ length: H }, () => new Float64Array(K)), db1 = new Float64Array(H), dW2 = new Float64Array(H);
      let db2 = 0;
      for (let n = 1; n <= 25; n++) {
        const o = linha(X, t, n), { a } = frente(X, o), e = p[n] - (sorteado.has(n) ? 1 : 0);
        db2 += e;
        for (let h = 0; h < H; h++) {
          dW2[h] += e * a[h];
          const d = e * W2[h] * (1 - a[h] * a[h]);
          db1[h] += d;
          for (let k = 0; k < K; k++) dW1[h][k] += d * X[o + k];
        }
      }
      for (let h = 0; h < H; h++) {
        dW2[h] += l2 * W2[h] * 25; g2[h] += dW2[h] ** 2; W2[h] -= (lr / Math.sqrt(g2[h])) * dW2[h];
        gb1[h] += db1[h] ** 2; b1[h] -= (lr / Math.sqrt(gb1[h])) * db1[h];
        for (let k = 0; k < K; k++) { const d = dW1[h][k] + l2 * W1[h][k] * 25; g1[h][k] += d * d; W1[h][k] -= (lr / Math.sqrt(g1[h][k])) * d; }
      }
      gb2 += db2 * db2; b2 -= (lr / Math.sqrt(gb2)) * db2;
    },
  };
}

// ── Regime (BOCPD): a probabilidade preditiva do detector bayesiano de
// mudança de regime de cada dezena, com escala aprendida (logística sobre ela
// e sobre a frequência de longo prazo, que é o regime "sem mudança").
export function regime() {
  const esp = logistico([IDX.bocpd, IDX.zTudo], { lr: 0.01, l2: 0.01 });
  return { ...esp, tipo: "regime" };
}

// ── Máquina de Boltzmann dinâmica (Ising): interações entre dezenas no mesmo
// sorteio e do sorteio anterior para o atual.
export function boltzmann(ctx) {
  const b = criarBoltzmann();
  let cache = null; // marginais já calculadas na previsão do mesmo concurso
  return {
    tipo: "boltzmann", maquina: b,
    prever(X, t) { const m = marginais(b, ctx.sorteios[t - 1] || null); cache = { t, m }; return [0, ...Array.from(m).slice(1)]; },
    aprender(X, t) { aprenderBoltzmann(b, ctx.sorteios[t], ctx.sorteios[t - 1] || null, cache?.t === t ? cache.m : null); },
  };
}

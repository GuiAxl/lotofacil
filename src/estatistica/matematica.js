// Funções matemáticas puras usadas pelo motor e pela validação.

export const P0 = 0.6; // 15 de 25: chance de qualquer número sair num concurso
export const logit = p => Math.log(p / (1 - p));
export const sigmoid = x => 1 / (1 + Math.exp(-x));
export const media = a => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : NaN);
export function desvio(a) {
  if (a.length < 2) return NaN;
  const m = media(a);
  return Math.sqrt(a.reduce((s, v) => s + (v - m) ** 2, 0) / (a.length - 1));
}

// Gerador pseudoaleatório determinístico (mulberry32).
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function embaralhar(lista, rand) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const LOG_FAT = [0];
const logFat = n => { for (let i = LOG_FAT.length; i <= n; i++) LOG_FAT[i] = LOG_FAT[i - 1] + Math.log(i); return LOG_FAT[n]; };
const logComb = (n, k) => logFat(n) - logFat(k) - logFat(n - k);
export const comb = (n, k) => (k < 0 || k > n ? 0 : Math.round(Math.exp(logComb(n, k))));

// Probabilidade de k acertos com um jogo de 15 (distribuição hipergeométrica).
export const hipergeometrica = k => (k < 5 || k > 15 ? 0 : Math.exp(logComb(15, k) + logComb(10, 15 - k) - logComb(25, 15)));
export const DP_ACERTOS_ACASO = Math.sqrt(15 * 0.6 * 0.4 * (10 / 24)); // ≈ 0,949

// p-valor binomial exato bicaudal (método da soma das probabilidades ≤ observada).
export function pBinomialBicaudal(k, n, p = P0) {
  if (n === 0) return 1;
  const lp = Math.log(p), lq = Math.log(1 - p);
  const pmf = i => Math.exp(logComb(n, i) + i * lp + (n - i) * lq);
  const obs = pmf(k) * (1 + 1e-7);
  let soma = 0;
  for (let i = 0; i <= n; i++) { const v = pmf(i); if (v <= obs) soma += v; }
  return Math.min(1, soma);
}
// p-valor binomial unicaudal superior P(X ≥ k).
export function pBinomialSuperior(k, n, p = P0) {
  let soma = 0;
  for (let i = k; i <= n; i++) soma += Math.exp(logComb(n, i) + i * Math.log(p) + (n - i) * Math.log(1 - p));
  return Math.min(1, soma);
}

// Benjamini–Hochberg: devolve os q-valores na mesma ordem dos p-valores.
export function qValoresBH(pValores) {
  const n = pValores.length;
  const ordem = pValores.map((p, i) => [p, i]).sort((a, b) => a[0] - b[0]);
  const q = new Array(n);
  let minimo = 1;
  for (let r = n - 1; r >= 0; r--) {
    const [p, i] = ordem[r];
    minimo = Math.min(minimo, (p * n) / (r + 1));
    q[i] = minimo;
  }
  return q;
}

// Ajusta um deslocamento c para que a soma das probabilidades seja 15
// (o sorteio sempre tem exatamente 15 números).
export function calibrarSoma15(logits) {
  // Newton no deslocamento c: f(c) = Σ σ(x + c) − 15, f'(c) = Σ σ(1 − σ).
  let c = 0;
  for (let it = 0; it < 30; it++) {
    let s = 0, d = 0;
    for (const x of logits) { const q = sigmoid(x + c); s += q; d += q * (1 - q); }
    const passo = (s - 15) / Math.max(d, 1e-9);
    c -= Math.max(-5, Math.min(5, passo));
    if (Math.abs(passo) < 1e-10) break;
  }
  return logits.map(x => sigmoid(x + c));
}

export const acertos = (jogo, resultado) => { const r = new Set(resultado); return jogo.filter(n => r.has(n)).length; };
export const top15 = (valores, desempate = null) => {
  const idx = Array.from({ length: 25 }, (_, i) => i + 1);
  idx.sort((a, b) => (valores[b] - valores[a]) || (desempate ? desempate[b] - desempate[a] : 0) || a - b);
  return idx.slice(0, 15).sort((a, b) => a - b);
};

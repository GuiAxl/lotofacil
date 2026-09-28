// Banco de características do Motor Ω. Para cada concurso t e cada dezena n,
// calcula ~26 características usando SOMENTE os concursos anteriores a t.
// Escalas teóricas (z-scores sob o acaso), sem usar dados futuros para
// normalizar. Inclui BOCPD (detecção bayesiana de mudança de regime) por dezena.

export const CARACTERISTICAS = [
  { id: "z5", nome: "Frequência últimos 5 (z)" }, { id: "z10", nome: "Frequência últimos 10 (z)" },
  { id: "z20", nome: "Frequência últimos 20 (z)" }, { id: "z50", nome: "Frequência últimos 50 (z)" },
  { id: "z100", nome: "Frequência últimos 100 (z)" }, { id: "z200", nome: "Frequência últimos 200 (z)" },
  { id: "z500", nome: "Frequência últimos 500 (z)" }, { id: "zTudo", nome: "Frequência no histórico todo (z)" },
  { id: "ema05", nome: "Média exponencial lenta (z)" }, { id: "ema10", nome: "Média exponencial média (z)" },
  { id: "ema20", nome: "Média exponencial rápida (z)" }, { id: "momentum", nome: "Momentum (rápida − lenta)" },
  { id: "ultimo", nome: "Saiu no último concurso" }, { id: "penultimo", nome: "Saiu no penúltimo" },
  { id: "atraso", nome: "Atraso (log)" }, { id: "atrasoRaro", nome: "Raridade do atraso (surpresa)" },
  { id: "sequencia", nome: "Sequência de presenças" },
  { id: "markov1", nome: "Markov ordem 1" }, { id: "markov2", nome: "Markov ordem 2" }, { id: "hazard", nome: "Hazard empírico do atraso" },
  { id: "pares", nome: "Afinidade de pares com o último" }, { id: "vizinhos", nome: "Vizinhos (n±1) no último" },
  { id: "linha", nome: "Linha do volante (20, z)" }, { id: "coluna", nome: "Coluna do volante (20, z)" },
  { id: "knn", nome: "Similaridade histórica KNN (z)" }, { id: "bocpd", nome: "Regime (BOCPD)" },
];
export const K = CARACTERISTICAS.length;
export const IDX = Object.fromEntries(CARACTERISTICAS.map((c, i) => [c.id, i]));
const JANELAS = [5, 10, 20, 50, 100, 200, 500];
const P0 = 0.6, VAR0 = 0.24;
const popcount = x => { x -= (x >>> 1) & 0x55555555; x = (x & 0x33333333) + ((x >>> 2) & 0x33333333); return (((x + (x >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24; };
const logit = p => Math.log(p / (1 - p));

// BOCPD (Adams & MacKay, 2007) para uma sequência Bernoulli por dezena, com
// prior Beta(6, 4) (média 60%) e hazard constante. Run-length truncado.
function criarBOCPD(R = 300, hazard = 1 / 400) {
  const mk = () => ({ P: new Float64Array(R + 1), A: new Float64Array(R + 1), B: new Float64Array(R + 1) });
  const b = { cur: mk(), nxt: mk(), R, H: hazard, n: 1 };
  b.cur.P[0] = 1; b.cur.A[0] = 6; b.cur.B[0] = 4;
  return b;
}
function idadeBOCPD(b) {
  let e = 0;
  for (let r = 0; r < b.n; r++) e += b.cur.P[r] * r;
  return e;
}
function preditivaBOCPD(b) {
  const { P, A, B } = b.cur;
  let p = 0;
  for (let r = 0; r < b.n; r++) p += P[r] * (A[r] / (A[r] + B[r]));
  return p;
}
// Um passo do BOCPD. Devolve a probabilidade de ter havido mudança de regime.
function atualizarBOCPD(b, y) {
  const { R, H } = b, c = b.cur, x = b.nxt;
  const nn = Math.min(b.n + 1, R + 1);
  x.P.fill(0, 0, nn);
  let cp = 0;
  for (let r = 0; r < b.n; r++) {
    const pr = c.A[r] / (c.A[r] + c.B[r]);
    const m = c.P[r] * (y ? pr : 1 - pr);
    cp += m * H;
    const k = Math.min(r + 1, R);
    if (k < R || x.P[k] === 0) { x.A[k] = c.A[r] + y; x.B[k] = c.B[r] + 1 - y; }
    x.P[k] += m * (1 - H);
  }
  x.P[0] = cp; x.A[0] = 6; x.B[0] = 4;
  let s = 0;
  for (let r = 0; r < nn; r++) s += x.P[r];
  for (let r = 0; r < nn; r++) x.P[r] /= s;
  b.cur = x; b.nxt = c; b.n = nn;
  return cp / s;
}

// Constrói o banco para uma lista de sorteios (cada um com 15 dezenas).
// X tem T+1 linhas: a linha T são as características do PRÓXIMO concurso.
// Índice: [(t*26 + n)*K + k].
export function construirBanco(sorteios) {
  const T = sorteios.length;
  const X = new Float32Array((T + 1) * 26 * K);
  const idadeRegime = new Float32Array(26);
  const C = Array.from({ length: 26 }, () => new Int32Array(T + 1)); // prefixos de presença
  const linhaP = Array.from({ length: 5 }, () => new Int32Array(T + 1)), colP = Array.from({ length: 5 }, () => new Int32Array(T + 1));
  const ema = [0.05, 0.1, 0.2].map(() => new Float64Array(26).fill(P0));
  const ultimoVisto = new Int32Array(26).fill(-1), seq = new Int32Array(26);
  const trans1 = Array.from({ length: 26 }, () => [[0, 0], [0, 0]]), trans2 = Array.from({ length: 26 }, () => [[0, 0], [0, 0], [0, 0], [0, 0]]);
  const MAXG = 15, hazard = Array.from({ length: MAXG + 1 }, () => [0, 0]);
  const cooc = Array.from({ length: 26 }, () => new Float64Array(26)), cont = new Float64Array(26);
  const mascaras = new Int32Array(T), conjuntos = sorteios.map(d => new Set(d));
  const bocpd = Array.from({ length: 26 }, () => criarBOCPD());
  const mudanca = new Float32Array(T * 26); // probabilidade de mudança de regime por dezena
  const suav = ([v, s], f = 20) => (s + f * P0) / (v + f);
  const emaSd = a => Math.sqrt((VAR0 * a) / (2 - a));

  for (let t = 0; t <= T; t++) {
    const ult = conjuntos[t - 1], pen = conjuntos[t - 2];
    // KNN: vizinhos mais parecidos com o último sorteio; o que veio depois deles.
    const knn = new Float64Array(26);
    let nViz = 0;
    if (t > 60) {
      const alvo = mascaras[t - 1], cand = [];
      for (let i = Math.max(0, t - 1501); i < t - 1; i++) cand.push((popcount(mascaras[i] & alvo) << 16) | i);
      cand.sort((a, b) => b - a);
      nViz = Math.min(40, cand.length);
      for (let k = 0; k < nViz; k++) for (const n of sorteios[(cand[k] & 0xffff) + 1]) knn[n]++;
    }
    const j20 = Math.min(20, t);
    for (let n = 1; n <= 25; n++) {
      const o = (t * 26 + n) * K;
      JANELAS.forEach((w, k) => {
        const ww = Math.min(w, t);
        X[o + k] = ww ? ((C[n][t] - C[n][t - ww]) / ww - P0) / Math.sqrt(VAR0 / ww) : 0;
      });
      X[o + IDX.zTudo] = t ? (C[n][t] / t - P0) / Math.sqrt(VAR0 / t) : 0;
      X[o + IDX.ema05] = (ema[0][n] - P0) / emaSd(0.05);
      X[o + IDX.ema10] = (ema[1][n] - P0) / emaSd(0.1);
      X[o + IDX.ema20] = (ema[2][n] - P0) / emaSd(0.2);
      X[o + IDX.momentum] = (ema[2][n] - ema[0][n]) / emaSd(0.2);
      X[o + IDX.ultimo] = ult ? (ult.has(n) ? 1 : -1.5) * 0.8 : 0;
      X[o + IDX.penultimo] = pen ? (pen.has(n) ? 1 : -1.5) * 0.8 : 0;
      const gap = ultimoVisto[n] < 0 ? 0 : t - 1 - ultimoVisto[n];
      X[o + IDX.atraso] = (Math.log1p(gap) - 0.45) * 2;
      X[o + IDX.atrasoRaro] = (gap * Math.log(1 / 0.4) - 0.6) / 1.2; // −log P(atraso ≥ gap) centrado
      X[o + IDX.sequencia] = (Math.min(seq[n], 10) - 1.5) / 1.5;
      if (ult) X[o + IDX.markov1] = (suav(trans1[n][ult.has(n) ? 1 : 0]) - P0) * 12;
      if (pen) X[o + IDX.markov2] = (suav(trans2[n][(pen.has(n) ? 2 : 0) + (ult.has(n) ? 1 : 0)]) - P0) * 12;
      if (t > 20) X[o + IDX.hazard] = (suav(hazard[Math.min(gap, MAXG)], 50) - P0) * 12;
      if (ult && t > 20) {
        let s = 0, m = 0;
        for (const j of ult) { if (j === n || !cont[j]) continue; s += cooc[n][j] / cont[j] - 14 / 24; m++; }
        X[o + IDX.pares] = m ? (s / m) * 25 : 0;
        const viz = (n > 1 && ult.has(n - 1) ? 1 : 0) + (n < 25 && ult.has(n + 1) ? 1 : 0), nv = (n > 1) + (n < 25);
        X[o + IDX.vizinhos] = (viz - nv * P0) / Math.sqrt(nv * VAR0);
      }
      if (j20) {
        const l = Math.floor((n - 1) / 5), c = (n - 1) % 5;
        X[o + IDX.linha] = ((linhaP[l][t] - linhaP[l][t - j20]) / (j20 * 5) - P0) / Math.sqrt(VAR0 / (j20 * 5));
        X[o + IDX.coluna] = ((colP[c][t] - colP[c][t - j20]) / (j20 * 5) - P0) / Math.sqrt(VAR0 / (j20 * 5));
      }
      if (nViz) X[o + IDX.knn] = (knn[n] / nViz - P0) / Math.sqrt(VAR0 / nViz);
      X[o + IDX.bocpd] = (logit(Math.min(0.95, Math.max(0.05, preditivaBOCPD(bocpd[n])))) - logit(P0)) * 6;
    }
    if (t === T) break;
    // ── Atualiza com o sorteio t (só depois de montar as características de t).
    const d = sorteios[t], s = conjuntos[t];
    for (let n = 1; n <= 25; n++) {
      const y = s.has(n) ? 1 : 0;
      C[n][t + 1] = C[n][t] + y;
      ema.forEach((e, k) => { e[n] += [0.05, 0.1, 0.2][k] * (y - e[n]); });
      if (ult) { const tr = trans1[n][ult.has(n) ? 1 : 0]; tr[0]++; tr[1] += y; }
      if (pen) { const tr = trans2[n][(pen.has(n) ? 2 : 0) + (ult.has(n) ? 1 : 0)]; tr[0]++; tr[1] += y; }
      if (t > 0) { const g = ultimoVisto[n] < 0 ? MAXG : Math.min(MAXG, t - 1 - ultimoVisto[n]); hazard[g][0]++; hazard[g][1] += y; }
      mudanca[t * 26 + n] = atualizarBOCPD(bocpd[n], y);
    }
    for (let l = 0; l < 5; l++) { linhaP[l][t + 1] = linhaP[l][t]; colP[l][t + 1] = colP[l][t]; }
    for (const n of d) {
      linhaP[Math.floor((n - 1) / 5)][t + 1]++; colP[(n - 1) % 5][t + 1]++;
      cont[n]++;
      seq[n] = ultimoVisto[n] === t - 1 ? seq[n] + 1 : 1;
      ultimoVisto[n] = t;
      for (const j of d) if (j !== n) cooc[n][j]++;
    }
    for (let n = 1; n <= 25; n++) if (!s.has(n)) seq[n] = 0;
    mascaras[t] = d.reduce((m, n) => m | (1 << (n - 1)), 0);
  }
  for (let n = 1; n <= 25; n++) idadeRegime[n] = idadeBOCPD(bocpd[n]);
  return { X, T, mudanca, idadeRegime, conjuntos, sorteios };
}

export const linhaX = (banco, t, n) => banco.X.subarray((t * 26 + n) * K, (t * 26 + n + 1) * K);

// Modelo de popularidade: quanto o público joga combinações parecidas com
// um jogo. Todas as 3.268.760 combinações têm a MESMA chance de sair; o que
// muda entre elas é com quantas pessoas você divide o prêmio de 14 e 15.
//
// Método: em cada concurso, o número de ganhadores de 14 pontos depende de
// quantas apostas foram feitas (medido pelos ganhadores de 11, uma faixa
// quase insensível a padrão) e de quão "popular" era a combinação sorteada.
// Uma regressão log-linear (ridge) de log(ganhadores 14) sobre log(ganhadores
// 11) e características do padrão isola o efeito da popularidade.
import { rng, embaralhar } from "../estatistica/matematica.js";

export const TRACOS = [
  { id: "consecutivos", nome: "Pares de números consecutivos" },
  { id: "maiorSequencia", nome: "Maior sequência (ex.: 5-6-7-8)" },
  { id: "pares", nome: "Quantidade de pares" },
  { id: "moldura", nome: "Números na moldura do volante" },
  { id: "primos", nome: "Quantidade de primos" },
  { id: "repetidosUltimo", nome: "Repetidos do último resultado" },
  { id: "linhasCheias", nome: "Linhas cheias no volante" },
  { id: "colunasCheias", nome: "Colunas cheias no volante" },
  { id: "soma", nome: "Soma das dezenas" },
  { id: "baixos", nome: "Números de 1 a 12" },
  ...Array.from({ length: 25 }, (_, i) => ({ id: `n${i + 1}`, nome: `Contém o ${String(i + 1).padStart(2, "0")}` })),
];
const PRIMOS = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23]);

export function tracos(jogo, ultimo = null) {
  const n = [...jogo].sort((a, b) => a - b), s = new Set(n);
  let cons = 0, run = 1, maior = 1;
  for (let i = 1; i < n.length; i++) {
    if (n[i] === n[i - 1] + 1) { cons++; run++; maior = Math.max(maior, run); } else run = 1;
  }
  let linhas = 0, colunas = 0;
  for (let r = 0; r < 5; r++) { let ok = true; for (let c = 1; c <= 5; c++) if (!s.has(r * 5 + c)) ok = false; if (ok) linhas++; }
  for (let c = 1; c <= 5; c++) { let ok = true; for (let r = 0; r < 5; r++) if (!s.has(r * 5 + c)) ok = false; if (ok) colunas++; }
  const soma = n.reduce((a, b) => a + b, 0);
  return [
    cons - 7, maior - 4, n.filter(x => x % 2 === 0).length - 7.2, n.filter(x => x <= 5 || x >= 21 || x % 5 === 0 || x % 5 === 1).length - 9.6,
    n.filter(x => PRIMOS.has(x)).length - 5.4, ultimo ? n.filter(x => ultimo.includes(x)).length - 9 : 0,
    linhas, colunas, (soma - 195) / 18, n.filter(x => x <= 12).length - 7.2,
    ...Array.from({ length: 25 }, (_, i) => (s.has(i + 1) ? 1 : 0) - 0.6),
  ];
}

function resolverRidge(X, y, lambda, semPenalidade = 2) {
  const p = X[0].length;
  const A = Array.from({ length: p }, () => new Float64Array(p + 1));
  X.forEach((x, k) => {
    for (let i = 0; i < p; i++) { A[i][p] += x[i] * y[k]; for (let j = 0; j < p; j++) A[i][j] += x[i] * x[j]; }
  });
  for (let i = semPenalidade; i < p; i++) A[i][i] += lambda * X.length;
  for (let c = 0; c < p; c++) {
    let piv = c;
    for (let r = c + 1; r < p; r++) if (Math.abs(A[r][c]) > Math.abs(A[piv][c])) piv = r;
    [A[c], A[piv]] = [A[piv], A[c]];
    for (let r = 0; r < p; r++) if (r !== c) { const f = A[r][c] / A[c][c]; for (let k = c; k <= p; k++) A[r][k] -= f * A[c][k]; }
  }
  return A.map((r, i) => r[p] / r[i]);
}

export function ajustarPopularidade(historico, opcoes = {}) {
  const { janela = 1000, lambda = 0.002 } = opcoes;
  const linhas = [];
  for (let i = Math.max(1, historico.length - janela); i < historico.length; i++) {
    const h = historico[i], pr = h.premios;
    if (!pr || !pr.g14 || !pr.g11) continue;
    linhas.push({ x: [1, Math.log(pr.g11), ...tracos(h.dezenas, historico[i - 1].dezenas)], y: Math.log(pr.g14), h });
  }
  const corte = Math.floor(linhas.length * 0.8);
  const r2 = (w, ini, fim, k) => {
    const L = linhas.slice(ini, fim), my = L.reduce((a, l) => a + l.y, 0) / L.length;
    let ss = 0, st = 0;
    L.forEach(l => { const pr = l.x.slice(0, k).reduce((s, v, i) => s + v * w[i], 0); ss += (l.y - pr) ** 2; st += (l.y - my) ** 2; });
    return 1 - ss / st;
  };
  const treino = linhas.slice(0, corte);
  const wBase = resolverRidge(treino.map(l => l.x.slice(0, 2)), treino.map(l => l.y), 0);
  const wTreino = resolverRidge(treino.map(l => l.x), treino.map(l => l.y), lambda);
  const validacao = { r2Base: r2(wBase, corte, linhas.length, 2), r2Modelo: r2(wTreino, corte, linhas.length, linhas[0].x.length) };
  const w = resolverRidge(linhas.map(l => l.x), linhas.map(l => l.y), lambda);

  // Faixa observada de cada traço nos sorteios reais (percentis 0,5%–99,5%).
  // Fora dela o modelo estaria extrapolando: o valor é limitado e marcado.
  const nT = TRACOS.length;
  const faixas = Array.from({ length: nT }, (_, k) => {
    const v = linhas.map(l => l.x[k + 2]).sort((a, b) => a - b);
    return [v[Math.floor(v.length * 0.005)], v[Math.ceil(v.length * 0.995) - 1]];
  });

  // Normaliza: índice 1,00 = popularidade média de um jogo aleatório.
  const r = rng(99), amostra = [];
  const ultimo = historico[historico.length - 1].dezenas;
  for (let i = 0; i < 4000; i++) amostra.push(contribuicao({ w, faixas }, embaralhar(Array.from({ length: 25 }, (_, j) => j + 1), r).slice(0, 15), ultimo).valor);
  const mediaLog = Math.log(amostra.reduce((a, v) => a + Math.exp(v), 0) / amostra.length);

  // Prêmios recentes (últimos 100 concursos) para estimar o rateio.
  const recentes = historico.slice(-100).map(h => h.premios).filter(Boolean);
  const pote14 = recentes.reduce((a, p) => a + p.g14 * p.r14, 0) / recentes.length;
  const g14Medio = recentes.reduce((a, p) => a + p.g14, 0) / recentes.length;
  const com15 = recentes.filter(p => p.g15 > 0);
  const pote15 = com15.reduce((a, p) => a + p.g15 * p.r15, 0) / Math.max(1, com15.length);
  const g15Medio = recentes.reduce((a, p) => a + p.g15, 0) / recentes.length;
  const ultimoPremio = recentes[recentes.length - 1];

  return {
    w, faixas, mediaLog, validacao, n: linhas.length,
    premios: { pote14, g14Medio, pote15, g15Medio, r11: ultimoPremio.r11, r12: ultimoPremio.r12, r13: ultimoPremio.r13 },
    efeitos: TRACOS.map((t, i) => ({ ...t, efeito: w[i + 2] })),
  };
}

function contribuicao(modelo, jogo, ultimo) {
  const t = tracos(jogo, ultimo);
  let valor = 0, fora = 0;
  t.forEach((v, i) => {
    const [min, max] = modelo.faixas[i];
    if (v < min - 1e-9 || v > max + 1e-9) fora++;
    valor += Math.min(max, Math.max(min, v)) * modelo.w[i + 2];
  });
  return { valor, fora };
}

// Índice de popularidade: 1,00 = média; 1,30 = 30% mais gente joga parecido.
// `extrapolado` indica que o jogo tem traços fora do que já foi sorteado
// (a estimativa vira um limite inferior e é pouco confiável).
export function avaliarPopularidade(modelo, jogo, ultimo) {
  const { valor, fora } = contribuicao(modelo, jogo, ultimo);
  return { indice: Math.exp(valor - modelo.mediaLog), extrapolado: fora > 0, tracosFora: fora };
}


// Prêmio esperado (R$) de 14 e 15 pontos SE este jogo acertar, dado o índice.
export function premioEsperado(modelo, indice) {
  const { pote14, g14Medio, pote15, g15Medio } = modelo.premios;
  const lambda15 = g15Medio * indice;
  const fracao15 = lambda15 > 1e-9 ? (1 - Math.exp(-lambda15)) / lambda15 : 1; // E[1/(1+Poisson(λ))]
  return { r14: pote14 / (g14Medio * indice + 1), r15: pote15 * fracao15 };
}

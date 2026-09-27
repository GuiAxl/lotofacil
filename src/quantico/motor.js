// Motor Quântico (estatístico, sem astrologia).
//
// Para cada concurso, calcula características de CADA dezena a partir só do
// passado, agrupadas em famílias (frequência, tendência, memória, Markov,
// pares, similaridade histórica, estrutura do volante). Cada família alimenta
// modelos de regressão logística online (pesos compartilhados entre as 25
// dezenas) que competem numa mistura bayesiana com o modelo nulo (60% para
// todas). O desempenho antigo é esquecido aos poucos (meia-vida ≈ 350
// concursos), então a mistura segue o que funciona AGORA.
import { calibrarSoma15, logit, rng, embaralhar, top15 } from "../estatistica/matematica.js";

export const CARACTERISTICAS = [
  { id: "f10", nome: "Frequência nos últimos 10" },
  { id: "f30", nome: "Frequência nos últimos 30" },
  { id: "f100", nome: "Frequência nos últimos 100" },
  { id: "f500", nome: "Frequência nos últimos 500" },
  { id: "fTudo", nome: "Frequência no histórico todo" },
  { id: "ema", nome: "Média móvel exponencial" },
  { id: "momentum", nome: "Momentum (EMA curta − EMA longa)" },
  { id: "ultimo", nome: "Saiu no último concurso" },
  { id: "atraso", nome: "Atraso (concursos sem sair)" },
  { id: "sequencia", nome: "Sequência de presenças seguidas" },
  { id: "markov1", nome: "Markov ordem 1 (transição da própria dezena)" },
  { id: "markov2", nome: "Markov ordem 2 (últimos 2 estados)" },
  { id: "hazard", nome: "Pressão do atraso (hazard empírico)" },
  { id: "pares", nome: "Afinidade de pares com o último sorteio" },
  { id: "knn", nome: "Similaridade histórica (KNN)" },
  { id: "linha", nome: "Nível da linha do volante (últimos 20)" },
  { id: "coluna", nome: "Nível da coluna do volante (últimos 20)" },
];
const IDX = Object.fromEntries(CARACTERISTICAS.map((c, i) => [c.id, i]));
const K = CARACTERISTICAS.length;

export const FAMILIAS = [
  { id: "nulo", nome: "Nulo (acaso puro, 60%)", usa: [] },
  { id: "freqLonga", nome: "Frequência de longo prazo", usa: ["f500", "fTudo"] },
  { id: "freqCurta", nome: "Frequência recente (\"quentes\")", usa: ["f10", "f30", "f100"] },
  { id: "tendencia", nome: "Tendência (EMA, momentum)", usa: ["ema", "momentum"] },
  { id: "memoria", nome: "Memória (último, atraso, sequência)", usa: ["ultimo", "atraso", "sequencia"] },
  { id: "markov", nome: "Markov e hazard", usa: ["markov1", "markov2", "hazard"] },
  { id: "pares", nome: "Pares", usa: ["pares"] },
  { id: "similaridade", nome: "Similaridade histórica (KNN)", usa: ["knn"] },
  { id: "volante", nome: "Estrutura do volante (linha, coluna)", usa: ["linha", "coluna"] },
  { id: "todos", nome: "Todas as características", usa: CARACTERISTICAS.map(c => c.id) },
];
export const FAMILIAS_SINAL = FAMILIAS.filter(f => f.usa.length).map(f => f.id);
const TAXAS = [0.003, 0.02];
export const ESQUECIMENTO = 0.998;
const JANELA_KNN = 1500, VIZINHOS_KNN = 40, MAX_GAP = 12;

const popcount = x => { x -= (x >>> 1) & 0x55555555; x = (x & 0x33333333) + ((x >>> 2) & 0x33333333); return (((x + (x >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24; };

export function criarEstado(familiasAtivas = null) {
  const ativa = f => !f.usa.length || !familiasAtivas || familiasAtivas.has(f.id);
  return {
    t: 0, historico: [], mascaras: [],
    cont: new Float64Array(26), ultimoVisto: new Int32Array(26).fill(-1), seq: new Int32Array(26),
    cooc: Array.from({ length: 26 }, () => new Float64Array(26)),
    emaLenta: new Float64Array(26).fill(0.6), emaMedia: new Float64Array(26).fill(0.6), emaRapida: new Float64Array(26).fill(0.6),
    // Markov por dezena: trans1[n][estadoAnterior] = [vezes, saiu]; trans2 com 4 estados.
    trans1: Array.from({ length: 26 }, () => [[0, 0], [0, 0]]),
    trans2: Array.from({ length: 26 }, () => [[0, 0], [0, 0], [0, 0], [0, 0]]),
    hazard: Array.from({ length: MAX_GAP + 1 }, () => [0, 0]),
    modelos: FAMILIAS.filter(ativa).flatMap(f => (f.usa.length
      ? TAXAS.map(lr => ({ familia: f.id, lr, usa: f.usa.map(u => IDX[u]), w: new Float64Array(K + 1), g2: new Float64Array(K + 1).fill(1e-8), perda: 0, perdaTotal: 0 }))
      : [{ familia: f.id, nulo: true, perda: 0, perdaTotal: 0 }])),
  };
}

function freqJanela(estado, n, janela) {
  const h = estado.historico, ini = Math.max(0, h.length - janela);
  if (h.length - ini < 1) return 0;
  let c = 0;
  for (let i = ini; i < h.length; i++) if (h[i].has(n)) c++;
  return c / (h.length - ini) - 0.6;
}
const taxaSuavizada = ([vezes, saiu], forca = 20) => (saiu + forca * 0.6) / (vezes + forca) - 0.6;
const gapDe = (estado, n) => (estado.ultimoVisto[n] < 0 ? MAX_GAP : Math.min(MAX_GAP, estado.t - 1 - estado.ultimoVisto[n]));

// Matriz 26 × K de características (linha n), escaladas para ordem ~1.
export function caracteristicas(estado) {
  const X = Array.from({ length: 26 }, () => new Float64Array(K));
  const h = estado.historico, t = estado.t, ultimo = h[t - 1], penultimo = h[t - 2];

  // KNN: concursos passados mais parecidos com o último; olha o que veio DEPOIS deles.
  const knn = new Float64Array(26);
  if (t > 60) {
    const alvo = estado.mascaras[t - 1], cand = [];
    for (let i = Math.max(0, t - 1 - JANELA_KNN); i < t - 1; i++) cand.push([popcount(estado.mascaras[i] & alvo), i]);
    cand.sort((a, b) => b[0] - a[0]);
    const viz = cand.slice(0, VIZINHOS_KNN);
    for (const [, i] of viz) for (const n of h[i + 1]) knn[n]++;
    for (let n = 1; n <= 25; n++) knn[n] = knn[n] / viz.length - 0.6;
  }
  // Linhas e colunas do volante nos últimos 20.
  const linhaC = new Float64Array(5), colC = new Float64Array(5), j20 = Math.min(20, t);
  for (let i = t - j20; i < t; i++) for (const n of h[i]) { linhaC[Math.floor((n - 1) / 5)]++; colC[(n - 1) % 5]++; }

  for (let n = 1; n <= 25; n++) {
    const x = X[n];
    x[IDX.f10] = freqJanela(estado, n, 10) * 3;
    x[IDX.f30] = freqJanela(estado, n, 30) * 5;
    x[IDX.f100] = freqJanela(estado, n, 100) * 8;
    x[IDX.f500] = freqJanela(estado, n, 500) * 15;
    x[IDX.fTudo] = t ? (estado.cont[n] / t - 0.6) * 25 : 0;
    x[IDX.ema] = (estado.emaMedia[n] - 0.6) * 5;
    x[IDX.momentum] = (estado.emaRapida[n] - estado.emaLenta[n]) * 4;
    x[IDX.ultimo] = ultimo ? (ultimo.has(n) ? 0.4 : -0.6) : 0;
    x[IDX.atraso] = Math.log1p(estado.ultimoVisto[n] < 0 ? 0 : t - 1 - estado.ultimoVisto[n]) - 0.4;
    x[IDX.sequencia] = Math.min(estado.seq[n], 10) / 3 - 0.8;
    if (ultimo) x[IDX.markov1] = taxaSuavizada(estado.trans1[n][ultimo.has(n) ? 1 : 0]) * 10;
    if (penultimo) x[IDX.markov2] = taxaSuavizada(estado.trans2[n][(penultimo.has(n) ? 2 : 0) + (ultimo.has(n) ? 1 : 0)]) * 10;
    if (t > 20) x[IDX.hazard] = taxaSuavizada(estado.hazard[gapDe(estado, n)], 50) * 10;
    if (ultimo && t > 20) {
      let s = 0, m = 0;
      for (const j of ultimo) { if (j === n || !estado.cont[j]) continue; s += estado.cooc[n][j] / estado.cont[j] - 14 / 24; m++; }
      x[IDX.pares] = m ? (s / m) * 20 : 0;
    }
    x[IDX.knn] = knn[n] * 6;
    if (j20) {
      x[IDX.linha] = (linhaC[Math.floor((n - 1) / 5)] / (j20 * 5) - 0.6) * 8;
      x[IDX.coluna] = (colC[(n - 1) % 5] / (j20 * 5) - 0.6) * 8;
    }
  }
  return X;
}

function probsModelo(mod, X) {
  if (mod.nulo) return new Array(26).fill(0.6);
  const s = [];
  for (let n = 1; n <= 25; n++) {
    let z = mod.w[K];
    for (const k of mod.usa) z += mod.w[k] * X[n][k];
    s.push(logit(0.6) + z);
  }
  return [0, ...calibrarSoma15(s)];
}

function perdaLog(p, sorteado) {
  let s = 0;
  for (let n = 1; n <= 25; n++) { const q = Math.min(1 - 1e-9, Math.max(1e-9, p[n])); s -= sorteado.has(n) ? Math.log(q) : Math.log(1 - q); }
  return s;
}

// Prior: 50% para "é acaso" (nulo) e 50% repartido entre os modelos com padrão.
// `excluir` remove uma família (contrafactual) e renormaliza.
export function pesosMistura(estado, excluir = null) {
  const ativos = estado.modelos.map(m => m.familia !== excluir);
  const M = ativos.filter(Boolean).length;
  const min = Math.min(...estado.modelos.filter((_, i) => ativos[i]).map(m => m.perda));
  const w = estado.modelos.map((m, i) => (ativos[i] ? (m.nulo ? 0.5 : 0.5 / Math.max(1, M - 1)) * Math.exp(-(m.perda - min)) : 0));
  const soma = w.reduce((a, b) => a + b, 0);
  return w.map(x => x / soma);
}

export function pesosPorFamilia(estado, excluir = null) {
  const w = pesosMistura(estado, excluir), porFamilia = {};
  estado.modelos.forEach((m, i) => { porFamilia[m.familia] = (porFamilia[m.familia] || 0) + w[i]; });
  return porFamilia;
}

export function prever(estado, X = caracteristicas(estado), { excluir = null } = {}) {
  const pesos = pesosMistura(estado, excluir);
  const p = new Array(26).fill(0);
  const porFamilia = {};
  estado.modelos.forEach((m, i) => {
    if (pesos[i] < 1e-7) return;
    const pm = probsModelo(m, X);
    const f = (porFamilia[m.familia] ||= { peso: 0, p: new Array(26).fill(0) });
    f.peso += pesos[i];
    for (let n = 1; n <= 25; n++) { p[n] += pesos[i] * pm[n]; f.p[n] += pesos[i] * pm[n]; }
  });
  const familias = pesosPorFamilia(estado, excluir);
  return { probs: p, jogo: top15(p), confianca: 1 - (familias.nulo || 0), familias, porFamilia };
}

// Quanto cada família empurra a probabilidade de uma dezena (soma = p − 60%).
export function explicarDezena(previsao, n) {
  return Object.entries(previsao.porFamilia)
    .map(([familia, f]) => ({ familia, peso: f.peso, contribuicao: f.p[n] - f.peso * 0.6 }))
    .sort((a, b) => Math.abs(b.contribuicao) - Math.abs(a.contribuicao));
}

// Contrafactual leave-one-family-out: probabilidade de cada dezena se a
// família fosse ignorada hoje.
export function contrafactual(estado, X = caracteristicas(estado)) {
  const base = prever(estado, X);
  return FAMILIAS_SINAL.filter(f => estado.modelos.some(m => m.familia === f)).map(f => {
    const sem = prever(estado, X, { excluir: f });
    const deltas = Array.from({ length: 26 }, (_, n) => (n ? base.probs[n] - sem.probs[n] : 0));
    const trocas = base.jogo.filter(n => !sem.jogo.includes(n)).length;
    return { familia: f, deltas, trocasNoJogo: trocas, maiorDelta: Math.max(...deltas.map(Math.abs)) };
  });
}

// Governança: status de cada família pela vantagem sobre o nulo (em nats de
// perda logarítmica) — recente (com esquecimento) e acumulada.
export function governanca(estado) {
  const nulo = estado.modelos.find(m => m.nulo);
  const linhas = FAMILIAS_SINAL.map(f => {
    const ms = estado.modelos.filter(m => m.familia === f);
    if (!ms.length) return { familia: f, status: "Desativada" };
    const melhor = ms.reduce((a, b) => (b.perda < a.perda ? b : a));
    return { familia: f, vantagemRecente: nulo.perda - melhor.perda, vantagemTotal: nulo.perdaTotal - Math.min(...ms.map(m => m.perdaTotal)) };
  });
  const ativas = linhas.filter(l => l.status !== "Desativada");
  const campea = ativas.reduce((a, b) => (b.vantagemRecente > (a?.vantagemRecente ?? -Infinity) ? b : a), null);
  for (const l of ativas) {
    l.status = l === campea && l.vantagemRecente > 2 ? "Champion"
      : l.vantagemRecente > 0 ? "Challenger"
      : l.vantagemRecente > -2 ? "Watch" : "Quarantine";
  }
  return linhas;
}

// Aprende com um sorteio (depois de ele ter sido previsto).
export function registrar(estado, dezenas, X = caracteristicas(estado)) {
  const sorteado = new Set(dezenas);
  for (const m of estado.modelos) {
    const p = probsModelo(m, X);
    const l = perdaLog(p, sorteado);
    m.perda = ESQUECIMENTO * m.perda + l;
    m.perdaTotal += l;
    if (m.nulo) continue;
    const g = new Float64Array(K + 1);
    for (let n = 1; n <= 25; n++) {
      const erro = p[n] - (sorteado.has(n) ? 1 : 0);
      for (const k of m.usa) g[k] += erro * X[n][k];
    }
    for (const k of m.usa) {
      m.g2[k] += g[k] * g[k];
      m.w[k] -= (m.lr / Math.sqrt(m.g2[k])) * g[k] * Math.sqrt(estado.t + 1) * 0.05;
    }
  }
  // Estatísticas de transição (antes de atualizar ultimoVisto).
  const t = estado.t, ultimo = estado.historico[t - 1], penultimo = estado.historico[t - 2];
  for (let n = 1; n <= 25; n++) {
    const y = sorteado.has(n) ? 1 : 0;
    if (ultimo) { const tr = estado.trans1[n][ultimo.has(n) ? 1 : 0]; tr[0]++; tr[1] += y; }
    if (penultimo) { const tr = estado.trans2[n][(penultimo.has(n) ? 2 : 0) + (ultimo.has(n) ? 1 : 0)]; tr[0]++; tr[1] += y; }
    if (t > 0) { const hz = estado.hazard[gapDe(estado, n)]; hz[0]++; hz[1] += y; }
    estado.emaLenta[n] += 0.05 * (y - estado.emaLenta[n]);
    estado.emaMedia[n] += 0.1 * (y - estado.emaMedia[n]);
    estado.emaRapida[n] += 0.2 * (y - estado.emaRapida[n]);
  }
  for (const n of dezenas) {
    estado.cont[n]++;
    estado.seq[n] = estado.ultimoVisto[n] === t - 1 ? estado.seq[n] + 1 : 1;
    estado.ultimoVisto[n] = t;
    for (const j of dezenas) if (j !== n) estado.cooc[n][j]++;
  }
  for (let n = 1; n <= 25; n++) if (!sorteado.has(n)) estado.seq[n] = 0;
  estado.historico.push(sorteado);
  estado.mascaras.push(dezenas.reduce((m, n) => m | (1 << (n - 1)), 0));
  estado.t++;
}

// Replay cronológico test-then-learn: prevê cada concurso só com o passado,
// guarda a previsão e depois aprende com o resultado.
export function simular(sorteios, opcoes = {}) {
  const { aquecimento = 200, concursos = null, familiasAtivas = null, guardarRegistros = true } = opcoes;
  const estado = criarEstado(familiasAtivas);
  const acertos = [], pontos = [], registros = [];
  let perdaMistura = 0, perdaNula = 0, n = 0;
  sorteios.forEach((dezenas, i) => {
    const X = caracteristicas(estado);
    if (i >= aquecimento) {
      const prev = prever(estado, X);
      const s = new Set(dezenas);
      const a = prev.jogo.filter(x => s.has(x)).length;
      acertos.push(a);
      perdaMistura += perdaLog(prev.probs, s);
      perdaNula += perdaLog(new Array(26).fill(0.6), s);
      n++;
      if (guardarRegistros) registros.push({ concurso: concursos ? concursos[i] : i + 1, probs: prev.probs, sorteio: dezenas, jogo: prev.jogo, acertos: a });
      if (i % 20 === 0) pontos.push({ rotulo: concursos ? concursos[i] : i + 1, valor: prev.confianca, familias: prev.familias });
    }
    registrar(estado, dezenas, X);
  });
  return { acertos, ganho: n ? (perdaNula - perdaMistura) / n : 0, perdaMistura, perdaNula, n, pontos, registros, estado };
}

// Teste de padrão temporal: embaralha a ORDEM dos sorteios (destrói memória,
// quentes/frios, pares com o último, Markov, KNN) mas mantém a frequência global.
export async function testeTemporal(sorteios, opcoes = {}) {
  const { n = 30, semente = 7, onProgresso, aquecimento } = opcoes;
  const real = simular(sorteios, { aquecimento, guardarRegistros: false });
  const r = rng(semente), nulos = [];
  for (let i = 0; i < n; i++) {
    nulos.push(simular(embaralhar(sorteios, r), { aquecimento, guardarRegistros: false }).ganho);
    if (onProgresso) { onProgresso(i + 1, n); await new Promise(res => setTimeout(res, 0)); }
  }
  return { ganhoReal: real.ganho, nulos, p: (nulos.filter(g => g >= real.ganho).length + 1) / (n + 1) };
}

// Scanner de ablação: roda o replay inteiro sem cada família e compara com o
// motor completo. Família que ao sair MELHORA o resultado está atrapalhando.
export async function scannerAblacao(sorteios, opcoes = {}) {
  const { onProgresso, aquecimento = 200 } = opcoes;
  const resumo = r => ({ ganho: r.ganho, acertos: r.acertos.reduce((a, b) => a + b, 0) / r.n, recentes: r.acertos.slice(-500).reduce((a, b) => a + b, 0) / Math.min(500, r.n) });
  const base = resumo(simular(sorteios, { aquecimento, guardarRegistros: false }));
  const linhas = [];
  for (let i = 0; i < FAMILIAS_SINAL.length; i++) {
    const f = FAMILIAS_SINAL[i];
    const sem = resumo(simular(sorteios, { aquecimento, guardarRegistros: false, familiasAtivas: new Set(FAMILIAS_SINAL.filter(x => x !== f)) }));
    linhas.push({ familia: f, ...sem, deltaGanho: base.ganho - sem.ganho, deltaAcertos: base.acertos - sem.acertos, deltaRecentes: base.recentes - sem.recentes });
    if (onProgresso) { onProgresso(i + 1, FAMILIAS_SINAL.length); await new Promise(res => setTimeout(res, 0)); }
  }
  // deltaGanho > 0: a família ajuda (tirá-la piora); < 0: atrapalha.
  return { base, linhas: linhas.sort((a, b) => b.deltaGanho - a.deltaGanho) };
}

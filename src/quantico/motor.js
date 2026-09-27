// Motor Quântico (estatístico, sem astrologia).
//
// Para cada concurso, calcula ~9 características de CADA número a partir só
// do passado: frequência em janelas (10/30/100/500/todas), saiu no último,
// atraso, sequência de presenças e afinidade de pares com o último sorteio.
// Famílias de modelos (regressão logística online com pesos compartilhados
// entre os 25 números) usam subconjuntos dessas características e competem
// numa mistura bayesiana com o modelo nulo (todo número 60%). O peso de cada
// família na mistura mostra, com os próprios dados, qual padrão ajuda — se
// algum ajuda.
import { calibrarSoma15, sigmoid, logit, rng, embaralhar, top15 } from "../estatistica/matematica.js";

export const CARACTERISTICAS = [
  { id: "f10", nome: "Frequência nos últimos 10" },
  { id: "f30", nome: "Frequência nos últimos 30" },
  { id: "f100", nome: "Frequência nos últimos 100" },
  { id: "f500", nome: "Frequência nos últimos 500" },
  { id: "fTudo", nome: "Frequência no histórico todo" },
  { id: "ultimo", nome: "Saiu no último concurso" },
  { id: "atraso", nome: "Atraso (concursos sem sair)" },
  { id: "sequencia", nome: "Sequência de presenças seguidas" },
  { id: "pares", nome: "Afinidade de pares com o último sorteio" },
];
const IDX = Object.fromEntries(CARACTERISTICAS.map((c, i) => [c.id, i]));
const K = CARACTERISTICAS.length;

export const FAMILIAS = [
  { id: "nulo", nome: "Nulo (acaso puro, 60%)", usa: [] },
  { id: "freqLonga", nome: "Frequência de longo prazo", usa: ["f500", "fTudo"] },
  { id: "freqCurta", nome: "Frequência recente (\"quentes\")", usa: ["f10", "f30", "f100"] },
  { id: "memoria", nome: "Memória (último, atraso, sequência)", usa: ["ultimo", "atraso", "sequencia"] },
  { id: "pares", nome: "Pares", usa: ["pares"] },
  { id: "todos", nome: "Todas as características", usa: CARACTERISTICAS.map(c => c.id) },
];
const TAXAS = [0.003, 0.02];
// Esquecimento: a perda de cada modelo é descontada a cada concurso, para a
// mistura refletir o desempenho RECENTE (meia-vida ≈ 350 concursos). Um viés
// que existiu no passado e sumiu deixa de ser seguido.
export const ESQUECIMENTO = 0.998;

export function criarEstado() {
  return {
    t: 0, historico: [],
    cont: new Float64Array(26), ultimoVisto: new Int32Array(26).fill(-1), seq: new Int32Array(26),
    cooc: Array.from({ length: 26 }, () => new Float64Array(26)),
    modelos: FAMILIAS.flatMap(f => (f.usa.length ? TAXAS.map(lr => ({ familia: f.id, lr, usa: f.usa.map(u => IDX[u]), w: new Float64Array(K + 1), g2: new Float64Array(K + 1).fill(1e-8), perda: 0, perdaTotal: 0 })) : [{ familia: f.id, nulo: true, perda: 0, perdaTotal: 0 }])),
  };
}

function freqJanela(estado, n, janela) {
  const h = estado.historico, ini = Math.max(0, h.length - janela);
  if (h.length - ini < 1) return 0;
  let c = 0;
  for (let i = ini; i < h.length; i++) if (h[i].has(n)) c++;
  return c / (h.length - ini) - 0.6;
}

// Matriz 26 × K de características (linha n), escaladas para ordem ~1.
export function caracteristicas(estado) {
  const X = Array.from({ length: 26 }, () => new Float64Array(K));
  const h = estado.historico, ultimo = h[h.length - 1];
  for (let n = 1; n <= 25; n++) {
    const x = X[n];
    x[IDX.f10] = freqJanela(estado, n, 10) * 3;
    x[IDX.f30] = freqJanela(estado, n, 30) * 5;
    x[IDX.f100] = freqJanela(estado, n, 100) * 8;
    x[IDX.f500] = freqJanela(estado, n, 500) * 15;
    x[IDX.fTudo] = estado.t ? (estado.cont[n] / estado.t - 0.6) * 25 : 0;
    x[IDX.ultimo] = ultimo ? (ultimo.has(n) ? 0.4 : -0.6) : 0;
    const atraso = estado.ultimoVisto[n] < 0 ? 0 : estado.t - 1 - estado.ultimoVisto[n];
    x[IDX.atraso] = Math.log1p(atraso) - 0.4;
    x[IDX.sequencia] = Math.min(estado.seq[n], 10) / 3 - 0.8;
    if (ultimo && estado.t > 20) {
      let s = 0, m = 0;
      for (const j of ultimo) { if (j === n || !estado.cont[j]) continue; s += estado.cooc[n][j] / estado.cont[j] - 14 / 24; m++; }
      x[IDX.pares] = m ? (s / m) * 20 : 0;
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

// Prior: 50% para "é acaso" (modelo nulo) e 50% repartido entre os modelos
// com padrão. Os pesos posteriores vêm da perda logarítmica (descontada).
export function pesosMistura(estado) {
  const M = estado.modelos.length;
  const prior = estado.modelos.map(m => (m.nulo ? 0.5 : 0.5 / (M - 1)));
  const min = Math.min(...estado.modelos.map(m => m.perda));
  const w = estado.modelos.map((m, i) => prior[i] * Math.exp(-(m.perda - min)));
  const soma = w.reduce((a, b) => a + b, 0);
  return w.map(x => x / soma);
}

export function pesosPorFamilia(estado) {
  const w = pesosMistura(estado), porFamilia = {};
  estado.modelos.forEach((m, i) => { porFamilia[m.familia] = (porFamilia[m.familia] || 0) + w[i]; });
  return porFamilia;
}

export function prever(estado, X = caracteristicas(estado)) {
  const pesos = pesosMistura(estado);
  const p = new Array(26).fill(0);
  estado.modelos.forEach((m, i) => {
    if (pesos[i] < 1e-6) return;
    const pm = probsModelo(m, X);
    for (let n = 1; n <= 25; n++) p[n] += pesos[i] * pm[n];
  });
  const confianca = 1 - (pesosPorFamilia(estado).nulo || 0);
  return { probs: p, jogo: top15(p), confianca, familias: pesosPorFamilia(estado) };
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
    // Gradiente AdaGrad da perda logística, com pesos compartilhados.
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
  // Atualiza as contagens.
  for (const n of dezenas) {
    estado.cont[n]++;
    estado.seq[n] = estado.ultimoVisto[n] === estado.t - 1 ? estado.seq[n] + 1 : 1;
    estado.ultimoVisto[n] = estado.t;
    for (const j of dezenas) if (j !== n) estado.cooc[n][j]++;
  }
  for (let n = 1; n <= 25; n++) if (!sorteado.has(n)) estado.seq[n] = 0;
  estado.historico.push(sorteado);
  estado.t++;
}

// Simulação cronológica sobre o histórico: prevê cada concurso só com o
// passado, depois aprende com ele.
export function simular(sorteios, opcoes = {}) {
  const { aquecimento = 200, concursos = null } = opcoes;
  const estado = criarEstado();
  const acertos = [], confiancas = [], pontos = [];
  let perdaMistura = 0, perdaNula = 0, n = 0;
  sorteios.forEach((dezenas, i) => {
    const X = caracteristicas(estado);
    if (i >= aquecimento) {
      const prev = prever(estado, X);
      const s = new Set(dezenas);
      acertos.push(prev.jogo.filter(x => s.has(x)).length);
      perdaMistura += perdaLog(prev.probs, s);
      perdaNula += perdaLog(new Array(26).fill(0.6), s);
      n++;
      confiancas.push(prev.confianca);
      if (i % 20 === 0) pontos.push({ rotulo: concursos ? concursos[i] : i + 1, valor: prev.confianca, familias: prev.familias });
    }
    registrar(estado, dezenas, X);
  });
  return { acertos, ganho: n ? (perdaNula - perdaMistura) / n : 0, perdaMistura, perdaNula, n, pontos, estado };
}

// Permutação: embaralha a ORDEM dos sorteios. Isso destrói qualquer padrão
// temporal (memória, quentes/frios, pares com o último) mas mantém a
// frequência global. Se o ganho real não supera o das ordens embaralhadas,
// não há padrão temporal aproveitável.
export async function testeTemporal(sorteios, opcoes = {}) {
  const { n = 30, semente = 7, onProgresso, aquecimento } = opcoes;
  const real = simular(sorteios, { aquecimento });
  const r = rng(semente), nulos = [];
  for (let i = 0; i < n; i++) {
    nulos.push(simular(embaralhar(sorteios, r), { aquecimento }).ganho);
    if (onProgresso) { onProgresso(i + 1, n); await new Promise(res => setTimeout(res, 0)); }
  }
  return { ganhoReal: real.ganho, nulos, p: (nulos.filter(g => g >= real.ganho).length + 1) / (n + 1) };
}

// Motor de previsão. Tudo é incremental e cronológico: cada concurso é
// previsto só com o que veio ANTES dele, e só depois o resultado entra no
// aprendizado. Não existe caminho no código em que um resultado influencie
// a previsão do próprio concurso.
//
// Motor "Astral": conjunto de aprendizes de regressão logística online
// (FTRL-Proximal, com L1 para esparsidade), um por configuração de
// regularização, mais dois modelos de referência: "nulo" (todo número 60%)
// e "só frequência" (sem sinais astrais). As previsões são combinadas por
// mistura bayesiana: cada modelo pesa exp(−perda logarítmica acumulada).
// Se os sinais astrais não ajudam, a mistura migra sozinha para os modelos
// de referência — o sistema não consegue se enganar.
import { P0, logit, sigmoid, rng, embaralhar, calibrarSoma15, acertos, top15, media } from "./matematica.js";

export const MOTORES = {
  astral: { nome: "Astral", descricao: "Mistura bayesiana de aprendizes online (regressão logística FTRL) que usam os sinais do mapa, competindo com modelos sem sinal." },
  frequencia: { nome: "Frequência", descricao: "Controle sem astrologia: os 15 números que mais saíram até o concurso anterior." },
  aleatorio: { nome: "Aleatório", descricao: "Controle: 15 números sorteados (semente = nº do concurso)." },
};

export const APRENDIZES = [
  { id: "nulo", nome: "Nulo (60%)", fixo: true, astral: false },
  { id: "f1", nome: "Só frequência · lento", alpha: 0.005, l1: 0, l2: 1, semSinais: true, astral: false },
  { id: "f2", nome: "Só frequência · moderado", alpha: 0.02, l1: 0, l2: 1, semSinais: true, astral: false },
  { id: "f3", nome: "Só frequência · rápido", alpha: 0.05, l1: 0, l2: 1, semSinais: true, astral: false },
  { id: "f4", nome: "Só frequência · muito rápido", alpha: 0.1, l1: 0, l2: 1, semSinais: true, astral: false },
  { id: "c1", nome: "Contraste · cético", contraste: true, pi1: 0.01, kappa: 20, lambda: 0.5, astral: true },
  { id: "c2", nome: "Contraste · cético, forte", contraste: true, pi1: 0.01, kappa: 20, lambda: 1, astral: true },
  { id: "c3", nome: "Contraste · aberto", contraste: true, pi1: 0.05, kappa: 20, lambda: 0.5, astral: true },
  { id: "c4", nome: "Contraste · aberto, forte", contraste: true, pi1: 0.05, kappa: 20, lambda: 1, astral: true },
  { id: "l1", nome: "Logística FTRL · moderada", alpha: 0.05, l1: 10, l2: 1, astral: true },
  { id: "l2", nome: "Logística FTRL · rápida", alpha: 0.1, l1: 10, l2: 1, astral: true },
  { id: "l3", nome: "Logística FTRL · esparsa", alpha: 0.1, l1: 20, l2: 1, astral: true },
];
const BETA = 1;
const BIAS = "__bias";

function criarAprendiz(cfg) { return { ...cfg, tab: new Map(), perda: 0 }; }

// Peso FTRL de uma coordenada a partir de (z, n).
function pesoFTRL(a, z, nAcc, l1) {
  if (Math.abs(z) <= l1) return 0;
  return -(z - Math.sign(z) * l1) / ((BETA + Math.sqrt(nAcc)) / a.alpha + a.l2);
}

// ── Aprendiz de contraste bayesiano ─────────────────────────────────────
// Para cada sinal ativo e cada número, compara a taxa COM o sinal contra a
// taxa SEM o sinal (no mesmo histórico). A diferença recebe uma
// probabilidade de ser real (fator de Bayes beta-binomial contra "sem
// diferença"); o peso do sinal é essa probabilidade × a diferença em log-odds.
// Sinais que apenas coincidem com um efeito verdadeiro têm contraste ~0.
const MIN_DIAS_CONTRASTE = 5;
function lgamma(x) {
  const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327108149727e-7];
  x -= 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
export function pesoContraste(h, d, hTot, dTot, pi1, kappa) {
  const d0 = dTot - d;
  if (d < MIN_DIAS_CONTRASTE || d0 < MIN_DIAS_CONTRASTE) return { peso: 0, prob: 0 };
  const b = (hTot - h + 10 * P0) / (d0 + 10);
  const a1 = kappa * b, b1 = kappa * (1 - b);
  const logBF = lgamma(h + a1) + lgamma(d - h + b1) - lgamma(d + kappa) - (lgamma(a1) + lgamma(b1) - lgamma(kappa)) - (h * Math.log(b) + (d - h) * Math.log(1 - b));
  const prob = 1 / (1 + Math.exp(Math.log(1 - pi1) - Math.log(pi1) - Math.min(logBF, 50)));
  return { peso: prob * (logit((h + a1) / (d + kappa)) - logit(b)), prob };
}
function somaContraste(estado, chaves, pi1, kappa) {
  const chaveCache = `${pi1}|${kappa}`;
  const cache = estado.cacheContraste;
  if (cache.versao === estado.versao && cache.chaves === chaves && cache.porConfig.has(chaveCache)) return cache.porConfig.get(chaveCache);
  if (cache.versao !== estado.versao || cache.chaves !== chaves) { cache.versao = estado.versao; cache.chaves = chaves; cache.porConfig = new Map(); }
  const S = new Array(26).fill(0);
  for (const chave of chaves) {
    const c = estado.sinais.get(chave);
    if (!c) continue;
    for (let n = 1; n <= 25; n++) S[n] += pesoContraste(c.hits[n], c.dias, estado.hitsMapas[n], estado.nMapas, pi1, kappa).peso;
  }
  cache.porConfig.set(chaveCache, S);
  return S;
}

function logitsAprendiz(a, chaves, estado) {
  const s = new Array(26).fill(0);
  if (a.fixo) { for (let n = 1; n <= 25; n++) s[n] = logit(P0); return s; }
  if (a.contraste) {
    const S = somaContraste(estado, chaves, a.pi1, a.kappa);
    for (let n = 1; n <= 25; n++) s[n] = logit((estado.hitsMapas[n] + 20 * P0) / (estado.nMapas + 20)) + a.lambda * S[n];
    return s;
  }
  const lista = a.semSinais ? [BIAS] : [BIAS, ...chaves];
  for (const chave of lista) {
    const t = a.tab.get(chave);
    if (!t) continue;
    const l1 = chave === BIAS ? 0 : a.l1;
    for (let n = 1; n <= 25; n++) s[n] += pesoFTRL(a, t[n], t[26 + n], l1);
  }
  return s;
}

function atualizarAprendiz(a, chaves, resultado, estado) {
  if (a.fixo || a.contraste) return;
  const r = new Set(resultado);
  const s = logitsAprendiz(a, chaves, estado);
  const lista = a.semSinais ? [BIAS] : [BIAS, ...chaves];
  for (const chave of lista) {
    let t = a.tab.get(chave);
    if (!t) { t = new Float64Array(52); a.tab.set(chave, t); }
    const l1 = chave === BIAS ? 0 : a.l1;
    for (let n = 1; n <= 25; n++) {
      const g = sigmoid(s[n]) - (r.has(n) ? 1 : 0);
      const w = pesoFTRL(a, t[n], t[26 + n], l1);
      const sig = (Math.sqrt(t[26 + n] + g * g) - Math.sqrt(t[26 + n])) / a.alpha;
      t[n] += g - sig * w;
      t[26 + n] += g * g;
    }
  }
}

function probsAprendiz(a, chaves, estado) {
  const s = logitsAprendiz(a, chaves, estado);
  return [0, ...calibrarSoma15(s.slice(1))];
}

function perdaLog(p, resultado) {
  const r = new Set(resultado);
  let s = 0;
  for (let n = 1; n <= 25; n++) { const q = Math.min(1 - 1e-9, Math.max(1e-9, p[n])); s -= r.has(n) ? Math.log(q) : Math.log(1 - q); }
  return s;
}

export function criarEstado() {
  return {
    sinais: new Map(), freq: new Float64Array(26), nResultados: 0, nMapas: 0, hitsMapas: new Float64Array(26),
    aprendizes: APRENDIZES.map(criarAprendiz), versao: 0, cacheContraste: { versao: -1, chaves: null, porConfig: new Map() },
  };
}

// Pesos da mistura bayesiana. Com soReferencia = true, considera só os
// modelos sem sinais astrais (a "referência" contra a qual o Astral compete).
// "Evolui ou sai": aprendiz astral mais de 2 nats pior que o nulo no
// desempenho acumulado sai da mistura (segue aprendendo em sombra).
const emQuarentena = (estado, a) => a.astral && a.perda - estado.aprendizes[0].perda > 2;
export function pesosMistura(estado, soReferencia = false) {
  const ativo = a => (!soReferencia || !a.astral) && !emQuarentena(estado, a);
  const min = Math.min(...estado.aprendizes.filter(ativo).map(a => a.perda));
  const w = estado.aprendizes.map(a => (ativo(a) ? Math.exp(-(a.perda - min)) : 0));
  const soma = w.reduce((x, y) => x + y, 0);
  return w.map(x => x / soma);
}

function probsMistura(estado, chaves, soReferencia = false) {
  const pesos = pesosMistura(estado, soReferencia);
  const p = new Array(26).fill(0);
  estado.aprendizes.forEach((a, i) => {
    if (pesos[i] < 1e-6) return;
    const pa = probsAprendiz(a, chaves, estado);
    for (let n = 1; n <= 25; n++) p[n] += pesos[i] * pa[n];
  });
  return { p, pesos };
}

// Aprende com um concurso já sorteado (depois de ele ter sido previsto).
export function registrar(estado, concurso) {
  const { resultado } = concurso;
  if (!resultado) return;
  const chaves = concurso.chaves || [];
  if (concurso.chaves) {
    for (const a of estado.aprendizes) a.perda += perdaLog(probsAprendiz(a, chaves, estado), resultado);
    estado.nMapas++;
    for (const n of resultado) estado.hitsMapas[n]++;
    for (const chave of chaves) {
      let c = estado.sinais.get(chave);
      if (!c) { c = { dias: 0, hits: new Int32Array(26) }; estado.sinais.set(chave, c); }
      c.dias++;
      for (const n of resultado) c.hits[n]++;
    }
  }
  for (const a of estado.aprendizes) atualizarAprendiz(a, chaves, resultado, estado);
  estado.versao++;
  for (const n of resultado) estado.freq[n]++;
  estado.nResultados++;
}

function frequencias(estado) {
  const f = new Array(26).fill(0);
  for (let n = 1; n <= 25; n++) f[n] = estado.nResultados ? estado.freq[n] / estado.nResultados : P0;
  return f;
}

export function prever(estado, concurso, motor) {
  const chaves = concurso.chaves || [];
  const freq = frequencias(estado);
  if (motor === "aleatorio") {
    const r = rng(Number(concurso.concurso) || 1);
    return { jogo: embaralhar(Array.from({ length: 25 }, (_, i) => i + 1), r).slice(0, 15).sort((a, b) => a - b) };
  }
  if (motor === "frequencia") return { jogo: top15(freq), valores: freq };
  // astral
  const { p, pesos } = probsMistura(estado, chaves);
  const pesoAstral = estado.aprendizes.reduce((s, a, i) => s + (a.astral ? pesos[i] : 0), 0);
  return { jogo: top15(p, freq), valores: p, pesos, pesoAstral };
}

// Contribuição de cada sinal ativo para um número, no aprendiz astral de
// maior peso na mistura (o que "mais manda" hoje).
export function explicarNumero(estado, chaves, numero) {
  const pesos = pesosMistura(estado);
  let melhor = -1;
  estado.aprendizes.forEach((a, i) => { if (a.astral && (melhor < 0 || pesos[i] > pesos[melhor])) melhor = i; });
  const a = estado.aprendizes[melhor];
  return chaves
    .map(chave => {
      const c = estado.sinais.get(chave);
      let peso = 0, prob = null;
      if (a.contraste) {
        if (c) ({ peso, prob } = pesoContraste(c.hits[numero], c.dias, estado.hitsMapas[numero], estado.nMapas, a.pi1, a.kappa));
        peso *= a.lambda;
      } else {
        const t = a.tab.get(chave);
        peso = t ? pesoFTRL(a, t[numero], t[26 + numero], a.l1) : 0;
      }
      return { chave, peso, prob, dias: c?.dias || 0, hits: c?.hits[numero] || 0 };
    })
    .filter(x => Math.abs(x.peso) > 1e-4)
    .sort((x, y) => Math.abs(y.peso) - Math.abs(x.peso));
}

// Simulação cronológica completa: a única medida honesta de desempenho.
export function simular(concursos, opcoes = {}) {
  const { minTreino = 30, motores = Object.keys(MOTORES) } = opcoes;
  const ordenados = [...concursos].sort((a, b) => a.concurso - b.concurso);
  const estado = criarEstado();
  const saida = Object.fromEntries(motores.map(m => [m, { acertos: [], concursos: [], registros: [] }]));
  const perda = { astral: 0, referencia: 0, uniforme: 0, n: 0 };
  const trilha = [];
  for (const c of ordenados) {
    if (c.resultado && c.chaves && estado.nMapas >= minTreino) {
      for (const m of motores) {
        const prev = prever(estado, c, m);
        const a = acertos(prev.jogo, c.resultado);
        saida[m].acertos.push(a);
        saida[m].concursos.push(c.concurso);
        // Registro para as métricas científicas (probabilidades só no Astral).
        saida[m].registros.push({ concurso: c.concurso, probs: m === "astral" ? prev.valores : null, sorteio: c.resultado, jogo: prev.jogo, acertos: a });
        if (m === "astral") {
          perda.astral += perdaLog(prev.valores, c.resultado);
          perda.uniforme += perdaLog(new Array(26).fill(P0), c.resultado);
          perda.referencia += perdaLog(probsMistura(estado, [], true).p, c.resultado);
          perda.n++;
          trilha.push({ concurso: c.concurso, pesoAstral: prev.pesoAstral });
        }
      }
    }
    registrar(estado, c);
  }
  return { porMotor: saida, perda, trilha, estado };
}

// Teste de permutação: embaralha os resultados entre os dias que têm mapa
// (os mapas ficam onde estão) e roda a simulação inteira de novo.
export async function testePermutacao(concursos, opcoes = {}) {
  const { n = 200, semente = 2026, onProgresso, minTreino } = opcoes;
  const motores = ["astral"];
  const estat = r => ({
    astral: media(r.porMotor.astral.acertos),
    ganhoPerda: r.perda.n ? (r.perda.referencia - r.perda.astral) / r.perda.n : 0,
  });
  const obs = estat(simular(concursos, { minTreino, motores }));
  const comMapa = concursos.filter(c => c.resultado && c.chaves);
  const rand = rng(semente);
  const nulos = [];
  for (let i = 0; i < n; i++) {
    const emb = embaralhar(comMapa.map(c => c.resultado), rand);
    const troca = new Map(comMapa.map((c, j) => [c.concurso, emb[j]]));
    const versao = concursos.map(c => (troca.has(c.concurso) ? { ...c, resultado: troca.get(c.concurso) } : c));
    nulos.push(estat(simular(versao, { minTreino, motores })));
    if (onProgresso && (i % 5 === 4 || i === n - 1)) { onProgresso(i + 1, n); await new Promise(r => setTimeout(r, 0)); }
  }
  const pValor = campo => (nulos.filter(x => x[campo] >= obs[campo]).length + 1) / (n + 1);
  return { observado: obs, nulos, p: { astral: pValor("astral"), ganhoPerda: pValor("ganhoPerda") }, n };
}

// Estado treinado só com concursos ANTERIORES a `limite` (para prever `limite`).
export function treinarAte(concursos, limite) {
  const estado = criarEstado();
  for (const c of [...concursos].sort((a, b) => a.concurso - b.concurso)) {
    if (c.concurso >= limite) break;
    registrar(estado, c);
  }
  return estado;
}

export function preverTodos(estado, concurso) {
  return Object.fromEntries(Object.keys(MOTORES).map(m => [m, prever(estado, concurso, m)]));
}

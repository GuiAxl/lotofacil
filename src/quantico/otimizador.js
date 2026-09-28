// Otimizador de jogos.
//
// 1) Gerador por recozimento simulado (simulated annealing — a versão clássica
//    do "annealing quântico"): busca um conjunto de jogos que minimiza a
//    popularidade (menos gente dividindo o prêmio), espalha os jogos entre si
//    (menos sobreposição) e, SE o motor preditivo tiver confiança, puxa para
//    os números com maior probabilidade.
// 2) Avaliação exata do retorno esperado em R$ (probabilidades hipergeométricas)
//    e Monte Carlo para métricas do conjunto.
// 3) Fechamento: dado um grupo de 16–20 dezenas, o menor conjunto de jogos que
//    garante k pontos se os 15 sorteados estiverem no grupo — com verificação
//    exaustiva de todos os cenários.
import { rng, embaralhar } from "../estatistica/matematica.js";
import { pAcertos, comb } from "./distribuicoes.js";
import { avaliarPopularidade, premioEsperado } from "./popularidade.js";

const popcount = x => { x -= (x >>> 1) & 0x55555555; x = (x & 0x33333333) + ((x >>> 2) & 0x33333333); return (((x + (x >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24; };
const mascara = jogo => jogo.reduce((m, n) => m | (1 << (n - 1)), 0);
const deMascara = m => { const r = []; for (let i = 0; i < 25; i++) if (m & (1 << i)) r.push(i + 1); return r; };

// Retorno esperado de um jogo de 15 (valor exato, sem simulação).
export function retornoEsperado(jogo, { modelo, ultimo, preco }) {
  const pop = avaliarPopularidade(modelo, jogo, ultimo);
  const pe = premioEsperado(modelo, pop.indice);
  const tabela = { 11: modelo.premios.r11, 12: modelo.premios.r12, 13: modelo.premios.r13, 14: pe.r14, 15: pe.r15 };
  let valor = 0;
  const porFaixa = {};
  for (let k = 11; k <= 15; k++) { porFaixa[k] = pAcertos(k) * tabela[k]; valor += porFaixa[k]; }
  return { valor, porReal: valor / preco, porFaixa, tabela, ...pop };
}

// Problema de otimização do portfólio: energia de cada jogo (popularidade,
// traços fora do observado e, se o motor tiver confiança, probabilidades) +
// penalidade de sobreposição entre jogos.
function montarProblema({ modelo, ultimo, probs = null, confianca = 0, fixos = [], excluidos = [], sobreposicaoMax = 10, quantidade }) {
  const livres = Array.from({ length: 25 }, (_, i) => i + 1).filter(n => !fixos.includes(n) && !excluidos.includes(n));
  if (fixos.length > 15 || fixos.length + livres.length < 15) throw new Error("Combinação de fixos/excluídos impossível");
  const pesoMotor = probs ? Math.max(0, confianca - 0.5) * 2 : 0;
  const cache = new Map();
  const energiaJogo = jogo => {
    const m = mascara(jogo);
    if (cache.has(m)) return cache.get(m);
    const pop = avaliarPopularidade(modelo, jogo, ultimo);
    let e = Math.log(pop.indice) + 0.5 * pop.tracosFora;
    if (pesoMotor) for (const n of jogo) e -= pesoMotor * Math.log(probs[n] / 0.6) * 3;
    if (cache.size > 200000) cache.clear();
    cache.set(m, e);
    return e;
  };
  const sobre = (a, b) => 0.3 * Math.max(0, popcount(a & b) - sobreposicaoMax);
  return { livres, fixos, quantidade, energiaJogo, sobre };
}

function portfolioInicial(pb, r) {
  return Array.from({ length: pb.quantidade }, () => [...pb.fixos, ...embaralhar(pb.livres, r).slice(0, 15 - pb.fixos.length)].sort((a, b) => a - b));
}
function energiaPortfolio(pb, jogos) {
  const ms = jogos.map(mascara);
  let e = jogos.reduce((a, j) => a + pb.energiaJogo(j), 0);
  for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) e += pb.sobre(ms[i], ms[j]);
  return e;
}
function propor(pb, jogos, g, r) {
  const trocaveis = jogos[g].filter(n => !pb.fixos.includes(n));
  const fora = pb.livres.filter(n => !jogos[g].includes(n));
  if (!trocaveis.length || !fora.length) return null;
  const sai = trocaveis[Math.floor(r() * trocaveis.length)], entra = fora[Math.floor(r() * fora.length)];
  return jogos[g].map(n => (n === sai ? entra : n)).sort((a, b) => a - b);
}
function deltaClassico(pb, jogos, ms, g, novo) {
  const mNovo = mascara(novo);
  let d = pb.energiaJogo(novo) - pb.energiaJogo(jogos[g]);
  for (let j = 0; j < jogos.length; j++) if (j !== g) d += pb.sobre(mNovo, ms[j]) - pb.sobre(ms[g], ms[j]);
  return d;
}

// Recozimento simulado clássico.
function recozimentoClassico(pb, { iteracoes, r }) {
  const jogos = portfolioInicial(pb, r), ms = jogos.map(mascara);
  let E = energiaPortfolio(pb, jogos), melhor = { jogos: jogos.map(j => [...j]), E };
  const T0 = 0.5, T1 = 0.002;
  for (let it = 0; it < iteracoes; it++) {
    const T = T0 * (T1 / T0) ** (it / iteracoes);
    const g = Math.floor(r() * pb.quantidade), novo = propor(pb, jogos, g, r);
    if (!novo) continue;
    const d = deltaClassico(pb, jogos, ms, g, novo);
    if (d <= 0 || r() < Math.exp(-d / T)) {
      jogos[g] = novo; ms[g] = mascara(novo); E += d;
      if (E < melhor.E - 1e-12) melhor = { jogos: jogos.map(j => [...j]), E };
    }
  }
  return melhor;
}

// Annealing quântico simulado (Monte Carlo de integral de caminho,
// decomposição de Suzuki-Trotter): P réplicas do portfólio formam uma "fatia
// de tempo imaginário" cada; réplicas vizinhas são acopladas por
// J⊥ = −(P·T/2)·ln tanh(Γ/(P·T)), onde Γ é o campo transversal. Com Γ alto as
// réplicas exploram livremente (tunelamento); Γ → 0 faz todas convergirem.
// O acoplamento conta a concordância de spins entre as réplicas:
// Σ sᵢsᵢ' = 4·(dezenas em comum) − 35 por jogo.
function annealingQuantico(pb, { iteracoes, r, replicas = 8, T = 0.001, gama0 = 1, gama1 = 0.002 }) {
  const P = replicas;
  const reps = Array.from({ length: P }, () => portfolioInicial(pb, r));
  const ms = reps.map(j => j.map(mascara));
  const Ec = reps.map(j => energiaPortfolio(pb, j));
  let melhor = { jogos: reps[0].map(j => [...j]), E: Ec[0] };
  Ec.forEach((e, p) => { if (e < melhor.E) melhor = { jogos: reps[p].map(j => [...j]), E: e }; });
  const concordancia = (a, b) => 4 * popcount(a & b) - 35;
  const passos = Math.max(1, iteracoes);
  for (let it = 0; it < passos; it++) {
    const gama = gama0 * (gama1 / gama0) ** (it / passos);
    const Jp = -(P * T / 2) * Math.log(Math.tanh(gama / (P * T)));
    for (let p = 0; p < P; p++) {
      const g = Math.floor(r() * pb.quantidade), novo = propor(pb, reps[p], g, r);
      if (!novo) continue;
      const mNovo = mascara(novo);
      const dC = deltaClassico(pb, reps[p], ms[p], g, novo);
      const ant = (p - 1 + P) % P, prox = (p + 1) % P;
      const dQ = -Jp * (concordancia(mNovo, ms[ant][g]) + concordancia(mNovo, ms[prox][g]) - concordancia(ms[p][g], ms[ant][g]) - concordancia(ms[p][g], ms[prox][g]));
      const d = dC / P + dQ;
      if (d <= 0 || r() < Math.exp(-d / T)) {
        reps[p][g] = novo; ms[p][g] = mNovo; Ec[p] += dC;
        if (Ec[p] < melhor.E - 1e-12) melhor = { jogos: reps[p].map(j => [...j]), E: Ec[p] };
      }
    }
  }
  return polir(pb, melhor);
}

// Polimento final: descida gulosa (melhor troca de uma dezena) até não haver melhoria.
function polir(pb, { jogos, E }) {
  jogos = jogos.map(j => [...j]);
  const ms = jogos.map(mascara);
  for (let volta = 0; volta < 50; volta++) {
    let melhorD = -1e-12, melhorMov = null;
    for (let g = 0; g < jogos.length; g++) for (const sai of jogos[g]) {
      if (pb.fixos.includes(sai)) continue;
      for (const entra of pb.livres) {
        if (jogos[g].includes(entra)) continue;
        const novo = jogos[g].map(n => (n === sai ? entra : n)).sort((a, b) => a - b);
        const d = deltaClassico(pb, jogos, ms, g, novo);
        if (d < melhorD) { melhorD = d; melhorMov = { g, novo }; }
      }
    }
    if (!melhorMov) break;
    jogos[melhorMov.g] = melhorMov.novo; ms[melhorMov.g] = mascara(melhorMov.novo); E += melhorD;
  }
  return { jogos, E };
}

// Gera o portfólio. metodo: "quantico" (padrão), "classico" ou "ambos" (roda
// os dois e fica com a menor energia).
export function gerarPortfolio(opcoes) {
  const { quantidade = 5, iteracoes = 30000, semente = Date.now() % 1e9, metodo = "ambos" } = opcoes;
  const pb = montarProblema({ ...opcoes, quantidade });
  const resultados = {};
  if (metodo !== "classico") resultados.quantico = annealingQuantico(pb, { iteracoes: Math.round(iteracoes / 4), r: rng(semente), ...(opcoes.sqa || {}) });
  if (metodo !== "quantico") resultados.classico = polir(pb, recozimentoClassico(pb, { iteracoes, r: rng(semente + 1) }));
  const [vencedor, res] = Object.entries(resultados).sort((a, b) => a[1].E - b[1].E)[0];
  return { jogos: res.jogos, energia: res.E, metodo: vencedor, energias: Object.fromEntries(Object.entries(resultados).map(([k, v]) => [k, v.E])) };
}

// Compatibilidade: devolve só os jogos (recozimento clássico).
export function gerarJogos(opcoes) {
  return gerarPortfolio({ ...opcoes, metodo: "classico" }).jogos;
}

// Monte Carlo do conjunto: chance de algum prêmio e distribuição do melhor jogo.
export function simularConjunto(jogos, { sorteios = 50000, semente = 3 } = {}) {
  const r = rng(semente), ms = jogos.map(mascara);
  const melhor = new Array(16).fill(0);
  let algumPremio = 0, premiosPorSorteio = 0;
  const base = Array.from({ length: 25 }, (_, i) => i);
  for (let s = 0; s < sorteios; s++) {
    for (let i = 0; i < 15; i++) { const j = i + Math.floor(r() * (25 - i)); [base[i], base[j]] = [base[j], base[i]]; }
    let d = 0;
    for (let i = 0; i < 15; i++) d |= 1 << base[i];
    let top = 0, premiados = 0;
    for (const m of ms) { const k = popcount(m & d); if (k > top) top = k; if (k >= 11) premiados++; }
    melhor[top]++;
    if (premiados) algumPremio++;
    premiosPorSorteio += premiados;
  }
  return { algumPremio: algumPremio / sorteios, melhor: melhor.map(x => x / sorteios), premiosPorSorteio: premiosPorSorteio / sorteios };
}

// Fechamento (covering design) com verificação exaustiva.
export async function fechamento(grupo, garantia, { semente = 11, amostraCandidatos = null, onProgresso } = {}) {
  const m = grupo.length;
  if (m < 15 || m > 20) throw new Error("O grupo precisa ter de 15 a 20 dezenas");
  if (garantia < 11 || garantia > 15) throw new Error("Garantia entre 11 e 15");
  // Todos os subconjuntos de 15 do grupo (cenários e candidatos).
  const subs = [];
  const idx = Array.from({ length: 15 }, (_, i) => i);
  for (;;) {
    subs.push(idx.reduce((acc, i) => acc | (1 << (grupo[i] - 1)), 0));
    let i = 14;
    while (i >= 0 && idx[i] === m - 15 + i) i--;
    if (i < 0) break;
    idx[i]++;
    for (let j = i + 1; j < 15; j++) idx[j] = idx[j - 1] + 1;
  }
  const r = rng(semente);
  const coberto = new Uint8Array(subs.length);
  let restantes = subs.length;
  const escolhidos = [];
  while (restantes > 0) {
    // Candidatos: amostra aleatória + vizinhos de um cenário ainda descoberto.
    const pendentes = [];
    for (let i = 0; i < subs.length && pendentes.length < 50; i++) if (!coberto[i]) pendentes.push(subs[i]);
    const cand = new Set(pendentes);
    const nAmostra = Math.min(amostraCandidatos ?? (subs.length > 5000 ? 250 : 1500), subs.length);
    for (let i = 0; i < nAmostra; i++) cand.add(subs[Math.floor(r() * subs.length)]);
    let melhorC = null, melhorGanho = -1;
    for (const c of cand) {
      let ganho = 0;
      for (let i = 0; i < subs.length; i++) if (!coberto[i] && popcount(c & subs[i]) >= garantia) ganho++;
      if (ganho > melhorGanho) { melhorGanho = ganho; melhorC = c; }
    }
    escolhidos.push(melhorC);
    for (let i = 0; i < subs.length; i++) if (!coberto[i] && popcount(melhorC & subs[i]) >= garantia) { coberto[i] = 1; restantes--; }
    if (onProgresso) { onProgresso(subs.length - restantes, subs.length, escolhidos.length); await new Promise(res => setTimeout(res, 0)); }
  }
  // Remove jogos redundantes: um jogo sai se todo cenário que ele cobre
  // também é coberto por outro jogo.
  const cobertura = new Int32Array(subs.length);
  const cobre = escolhidos.map(c => { const l = []; for (let i = 0; i < subs.length; i++) if (popcount(c & subs[i]) >= garantia) { l.push(i); cobertura[i]++; } return l; });
  for (let i = escolhidos.length - 1; i >= 0; i--) {
    if (cobre[i].every(k => cobertura[k] >= 2)) { cobre[i].forEach(k => cobertura[k]--); escolhidos.splice(i, 1); cobre.splice(i, 1); }
  }
  const verificado = subs.every(s => escolhidos.some(c => popcount(c & s) >= garantia));
  return {
    jogos: escolhidos.map(deMascara), cenarios: subs.length, verificado,
    // Chance de a condição da garantia acontecer (os 15 sorteados dentro do grupo).
    chanceCondicao: comb(m, 15) / comb(25, 15),
  };
}

// Motor Ω (Quântico) — estatística pura, sem astrologia.
//
// Arquitetura:
//   banco de 26 características (z-scores teóricos, BOCPD por dezena)
//     → especialistas: logística por família, rede neural online, regime
//       (BOCPD), máquina de Boltzmann dinâmica (Ising) e especialistas
//       EVOLUÍDOS por algoritmo genético com walk-forward aninhado
//     → meta-aprendizado Fixed-Share (segue o melhor especialista mesmo com
//       mudança de regime), com prior de 50% no acaso
//     → "evolui ou sai": quarentena automática de quem fica > 2 nats pior
//       que o acaso (segue aprendendo em sombra e pode voltar).
// Tudo test-then-learn: cada concurso é previsto só com o passado.
import { construirBanco, IDX, CARACTERISTICAS } from "./banco.js";
import { nulo, logistico, neural, regime, boltzmann } from "./especialistas.js";
import { evoluir, descreverGenoma } from "./evolucao.js";
import { top15 } from "../estatistica/matematica.js";

const F = ids => ids.map(id => IDX[id]);
export const FAMILIAS = [
  { id: "nulo", nome: "Nulo (acaso puro, 60%)" },
  { id: "freqLonga", nome: "Frequência de longo prazo", feats: F(["z500", "zTudo"]) },
  { id: "freqCurta", nome: "Frequência recente (\"quentes\")", feats: F(["z5", "z10", "z20", "z50", "z100"]) },
  { id: "tendencia", nome: "Tendência (EMAs, momentum)", feats: F(["ema05", "ema10", "ema20", "momentum"]) },
  { id: "memoria", nome: "Memória (último, atraso, sequência)", feats: F(["ultimo", "penultimo", "atraso", "atrasoRaro", "sequencia"]) },
  { id: "markov", nome: "Markov e hazard", feats: F(["markov1", "markov2", "hazard"]) },
  { id: "pares", nome: "Pares e vizinhança", feats: F(["pares", "vizinhos"]) },
  { id: "similaridade", nome: "Similaridade histórica (KNN)", feats: F(["knn"]) },
  { id: "volante", nome: "Estrutura do volante", feats: F(["linha", "coluna"]) },
  { id: "todos", nome: "Logística com todas as características", feats: CARACTERISTICAS.map((_, i) => i) },
  { id: "regime", nome: "Regimes (BOCPD)" },
  { id: "boltzmann", nome: "Máquina de Boltzmann (Ising)" },
  { id: "neural", nome: "Rede neural online" },
  { id: "evolucao", nome: "Especialistas evoluídos (genético)" },
];
export const FAMILIAS_SINAL = FAMILIAS.filter(f => f.id !== "nulo").map(f => f.id);

export const ESQUECIMENTO = 0.998;
export const LIMITE_QUARENTENA = 2;
const ALFA_FIXED_SHARE = 0.002;
const PASSO_EVOLUCAO = 300, INICIO_EVOLUCAO = 600, MAX_EVOLUIDOS = 4;

function perdaLog(p, s) {
  let l = 0;
  for (let n = 1; n <= 25; n++) { const q = Math.min(1 - 1e-9, Math.max(1e-9, p[n])); l -= s.has(n) ? Math.log(q) : Math.log(1 - q); }
  return l;
}

export function criarEstado(familiasAtivas = null, ctx = { sorteios: [] }, banco = null) {
  const ativa = id => id === "nulo" || !familiasAtivas || familiasAtivas.has(id);
  const esp = [];
  const add = (familia, nome, obj) => esp.push({ familia, nome, esp: obj, logw: 0, perda: 0, perdaTotal: 0, nulo: familia === "nulo", criadoEm: 0 });
  for (const f of FAMILIAS) {
    if (!ativa(f.id) || f.id === "evolucao") continue;
    if (f.id === "nulo") add("nulo", f.nome, nulo());
    else if (f.feats) add(f.id, f.nome, logistico(f.feats, f.id === "todos" ? { lr: 0.01, l2: 0.02 } : { lr: 0.01, l2: 0.001 }));
    else if (f.id === "regime") add("regime", f.nome, regime());
    else if (f.id === "boltzmann") add("boltzmann", f.nome, boltzmann(ctx));
    else if (f.id === "neural") add("neural", f.nome, neural());
  }
  // Prior: 50% no acaso, 50% repartido entre os especialistas com sinal.
  const M = esp.length;
  esp.forEach(e => { e.logw = Math.log(e.nulo ? 0.5 : 0.5 / Math.max(1, M - 1)); });
  return { especialistas: esp, t: 0, ctx, banco, evolui: ativa("evolucao"), evolucoes: [] };
}

export const emQuarentena = (estado, e) => {
  if (e.nulo) return false;
  const n = estado.especialistas.find(x => x.nulo);
  return e.perda - n.perda > LIMITE_QUARENTENA;
};

export function pesosMistura(estado, excluir = null) {
  const es = estado.especialistas;
  const ok = es.map(e => e.familia !== excluir && !emQuarentena(estado, e));
  const max = Math.max(...es.filter((_, i) => ok[i]).map(e => e.logw));
  const w = es.map((e, i) => (ok[i] ? Math.exp(e.logw - max) : 0));
  const s = w.reduce((a, b) => a + b, 0);
  return w.map(x => x / s);
}

function previsoesIndividuais(estado, t) {
  return estado.especialistas.map(e => e.esp.prever(estado.banco.X, t));
}

function combinar(estado, preds, excluir = null) {
  const pesos = pesosMistura(estado, excluir);
  const p = new Array(26).fill(0), porFamilia = {};
  estado.especialistas.forEach((e, i) => {
    const f = (porFamilia[e.familia] ||= { peso: 0, p: new Array(26).fill(0) });
    f.peso += pesos[i];
    if (pesos[i] < 1e-9) return;
    for (let n = 1; n <= 25; n++) { p[n] += pesos[i] * preds[i][n]; f.p[n] += pesos[i] * preds[i][n]; }
  });
  const familias = {};
  for (const [f, v] of Object.entries(porFamilia)) familias[f] = v.peso;
  return { probs: p, jogo: top15(p), confianca: 1 - (familias.nulo || 0), familias, porFamilia };
}

// Previsão do próximo concurso (linha t = estado.t do banco).
export function prever(estado, { excluir = null } = {}) {
  return combinar(estado, previsoesIndividuais(estado, estado.t), excluir);
}

// Aprende com o concurso t (depois de previsto): Fixed-Share + treino de cada especialista.
function aprender(estado, t, preds) {
  const s = estado.banco.conjuntos[t];
  const es = estado.especialistas;
  es.forEach((e, i) => {
    const l = perdaLog(preds[i], s);
    e.logw -= l;
    e.perda = ESQUECIMENTO * e.perda + l;
    e.perdaTotal += l;
    e.esp.aprender(estado.banco.X, t, s, preds[i]);
  });
  // Fixed-Share (Herbster & Warmuth): mistura com o prior a cada passo, o que
  // permite trocar rapidamente de especialista quando o regime muda.
  const max = Math.max(...es.map(e => e.logw));
  const w = es.map(e => Math.exp(e.logw - max));
  const soma = w.reduce((a, b) => a + b, 0), M = es.length;
  es.forEach((e, i) => {
    const prior = e.nulo ? 0.5 : 0.5 / Math.max(1, M - 1);
    e.logw = Math.log((1 - ALFA_FIXED_SHARE) * (w[i] / soma) + ALFA_FIXED_SHARE * prior);
  });
  estado.t = t + 1;
}

// Ciclo de evolução genética no concurso t.
function cicloEvolucao(estado, t, concursos) {
  const vivos = estado.especialistas.filter(e => e.familia === "evolucao");
  const r = evoluir({ X: estado.banco.X, conjuntos: estado.banco.conjuntos, t, elite: vivos.map(v => v.genoma) });
  const nulo = estado.especialistas.find(e => e.nulo);
  const promovidos = [];
  for (const p of r.promovidos) {
    const desc = descreverGenoma(p.g);
    if (vivos.some(v => v.nome === desc)) continue;
    // Entra em "período de prova": 1% do peso total, e perda inicial igual à do nulo.
    const max = Math.max(...estado.especialistas.map(e => e.logw));
    estado.especialistas.push({ familia: "evolucao", nome: desc, genoma: p.g, esp: p.esp, logw: max + Math.log(0.01), perda: nulo.perda, perdaTotal: 0, nuloNoNascimento: nulo.perdaTotal, criadoEm: t });
    promovidos.push({ nome: desc, treino: p.treino, validacao: p.validacao });
  }
  // Limite de evoluídos vivos: saem os que estão em quarentena e, se sobrar
  // gente demais, os de pior desempenho recente.
  let evoluidos = estado.especialistas.filter(e => e.familia === "evolucao");
  const removidos = [];
  const tirar = e => { estado.especialistas = estado.especialistas.filter(x => x !== e); removidos.push(e.nome); };
  evoluidos.filter(e => emQuarentena(estado, e)).forEach(tirar);
  evoluidos = estado.especialistas.filter(e => e.familia === "evolucao").sort((a, b) => a.perda - b.perda);
  evoluidos.slice(MAX_EVOLUIDOS).forEach(tirar);
  estado.evolucoes.push({
    concurso: concursos ? concursos[t] : t + 1, avaliados: r.avaliados,
    melhor: { nome: descreverGenoma(r.melhor.g), treino: r.melhor.treino, validacao: r.melhor.validacao },
    promovidos, removidos, rejeitados: r.rejeitados.map(x => ({ nome: descreverGenoma(x.g), treino: x.treino, validacao: x.validacao })),
    vivos: estado.especialistas.filter(e => e.familia === "evolucao").length,
  });
}

// Replay completo. Versão por etapas: `passo()` processa um concurso; a
// versão síncrona roda tudo, a assíncrona cede a interface a cada bloco.
function iniciarReplay(sorteios, opcoes) {
  const { aquecimento = 200, concursos = null, familiasAtivas = null, guardarRegistros = true, banco = null } = opcoes;
  const ctx = { sorteios };
  const bancoUsado = banco || construirBanco(sorteios);
  const estado = criarEstado(familiasAtivas, ctx, bancoUsado);
  const res = {
    acertos: [], registros: [], perdaMistura: 0, perdaNula: 0, n: 0, estado,
  };
  const T = sorteios.length;
  const passo = t => {
    const preds = previsoesIndividuais(estado, t);
    if (t >= aquecimento) {
      const prev = combinar(estado, preds);
      const s = bancoUsado.conjuntos[t];
      const a = prev.jogo.filter(x => s.has(x)).length;
      res.acertos.push(a);
      res.perdaMistura += perdaLog(prev.probs, s);
      res.perdaNula += perdaLog(new Array(26).fill(0.6), s);
      res.n++;
      if (guardarRegistros) res.registros.push({ t, concurso: concursos ? concursos[t] : t + 1, probs: prev.probs, sorteio: sorteios[t], jogo: prev.jogo, acertos: a, confianca: prev.confianca });
    }
    aprender(estado, t, preds);
    if (estado.evolui && t + 1 >= INICIO_EVOLUCAO && (t + 1 - INICIO_EVOLUCAO) % PASSO_EVOLUCAO === 0) cicloEvolucao(estado, t + 1, concursos);
  };
  const fim = () => { res.ganho = res.n ? (res.perdaNula - res.perdaMistura) / res.n : 0; return res; };
  return { passo, fim, T };
}

export function simular(sorteios, opcoes = {}) {
  const r = iniciarReplay(sorteios, opcoes);
  for (let t = 0; t < r.T; t++) r.passo(t);
  return r.fim();
}

export async function simularAsync(sorteios, opcoes = {}) {
  const { onProgresso } = opcoes;
  const r = iniciarReplay(sorteios, opcoes);
  for (let t = 0; t < r.T; t++) {
    r.passo(t);
    if (t % 150 === 149) { onProgresso?.(t + 1, r.T); await new Promise(res => setTimeout(res, 0)); }
  }
  onProgresso?.(r.T, r.T);
  return r.fim();
}

// Evolução automática de especialistas (AutoML genético com walk-forward aninhado).
//
// Genoma = subconjunto de 1–6 características + taxa de aprendizado + L2.
// Em cada checkpoint do replay: a população é avaliada no bloco de TREINO
// (passado recente), os melhores cruzam e sofrem mutação por algumas gerações,
// e os finalistas só são PROMOVIDOS se também ganharem do acaso no bloco de
// VALIDAÇÃO logo depois (nunca visto na seleção). Quem não passa, não entra.
import { K, CARACTERISTICAS } from "./banco.js";
import { logistico } from "./especialistas.js";
import { rng } from "../estatistica/matematica.js";

const LRS = [0.01, 0.03, 0.1], L2S = [0, 0.001, 0.01];

export const descreverGenoma = g => `${g.feats.map(k => CARACTERISTICAS[k].id).join("+")} · lr ${g.lr}${g.l2 ? ` · L2 ${g.l2}` : ""}`;
const chave = g => `${[...g.feats].sort((a, b) => a - b).join(",")}|${g.lr}|${g.l2}`;

function aleatorio(r) {
  const n = 1 + Math.floor(r() * 4), feats = new Set();
  while (feats.size < n) feats.add(Math.floor(r() * K));
  return { feats: [...feats], lr: LRS[Math.floor(r() * 3)], l2: L2S[Math.floor(r() * 3)] };
}
function mutar(g, r) {
  const f = new Set(g.feats);
  const op = r();
  if (op < 0.35 && f.size < 6) f.add(Math.floor(r() * K));
  else if (op < 0.6 && f.size > 1) f.delete([...f][Math.floor(r() * f.size)]);
  else { if (f.size > 1) f.delete([...f][Math.floor(r() * f.size)]); f.add(Math.floor(r() * K)); }
  return { feats: [...f], lr: r() < 0.3 ? LRS[Math.floor(r() * 3)] : g.lr, l2: r() < 0.3 ? L2S[Math.floor(r() * 3)] : g.l2 };
}
function cruzar(a, b, r) {
  const todas = [...new Set([...a.feats, ...b.feats])];
  const feats = todas.filter(() => r() < 0.6);
  if (!feats.length) feats.push(todas[Math.floor(r() * todas.length)]);
  return { feats: feats.slice(0, 6), lr: r() < 0.5 ? a.lr : b.lr, l2: r() < 0.5 ? a.l2 : b.l2 };
}

// Replay test-then-learn de um genoma entre t0 e t1; devolve o ganho sobre o
// nulo (nats/concurso) em cada bloco e o especialista já treinado até t1.
function avaliar(g, X, conjuntos, t0, tMeio, t1) {
  const esp = logistico(g.feats, { lr: g.lr, l2: g.l2 });
  let gTreino = 0, gVal = 0;
  const lnulo1 = Math.log(0.6), lnulo0 = Math.log(0.4);
  for (let t = t0; t < t1; t++) {
    const p = esp.prever(X, t), s = conjuntos[t];
    let ganho = 0;
    for (let n = 1; n <= 25; n++) ganho += s.has(n) ? Math.log(p[n]) - lnulo1 : Math.log(1 - p[n]) - lnulo0;
    if (t < tMeio) gTreino += ganho; else gVal += ganho;
    esp.aprender(X, t, s, p);
  }
  return { treino: gTreino / (tMeio - t0), validacao: gVal / (t1 - tMeio), esp };
}

// Um ciclo de evolução no concurso t. `elite` = genomas já vivos (sobrevivem
// se continuarem bons).
export function evoluir({ X, conjuntos, t, janela = 600, validacao = 150, populacao = 18, geracoes = 3, elite = [], semente = 1 }) {
  const r = rng(semente * 7919 + t);
  const t0 = Math.max(0, t - janela), tMeio = t - validacao;
  const vistos = new Map();
  const aval = g => { const k = chave(g); if (!vistos.has(k)) vistos.set(k, { g, ...avaliar(g, X, conjuntos, t0, tMeio, t) }); return vistos.get(k); };
  let pop = [...elite, ...Array.from({ length: populacao - elite.length }, () => aleatorio(r))].map(aval);
  for (let ger = 0; ger < geracoes; ger++) {
    pop.sort((a, b) => b.treino - a.treino);
    const pais = pop.slice(0, 6);
    const filhos = [];
    while (filhos.length < populacao - pais.length) {
      const a = pais[Math.floor(r() * pais.length)].g, b = pais[Math.floor(r() * pais.length)].g;
      filhos.push(r() < 0.5 ? mutar(a, r) : mutar(cruzar(a, b, r), r));
    }
    pop = [...pais, ...filhos.map(aval)];
  }
  pop.sort((a, b) => b.treino - a.treino);
  // Promoção: precisa ganhar do acaso no treino E na validação (fora da seleção).
  const promovidos = pop.filter(x => x.treino > 0 && x.validacao > 0).slice(0, 3);
  return { avaliados: vistos.size, melhor: pop[0], promovidos, rejeitados: pop.slice(0, 3).filter(x => !promovidos.includes(x)) };
}

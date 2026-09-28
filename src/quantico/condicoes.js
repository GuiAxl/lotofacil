// Evidência condicional "o que saiu antes → o que saiu agora".
// Para cada concurso t e cada dezena n, lista as condições em que a dezena
// estava ANTES do sorteio (atraso, sequência, frequência nos últimos 10,
// padrão dos 3 últimos, vizinhos, pares com o sorteio anterior e o penúltimo,
// atraso próprio da dezena) e mede, só com os concursos anteriores a t, quanto
// cada condição fez a dezena sair acima ou abaixo da sua própria taxa.
// Tudo é sequencial (test-then-learn): nenhuma conta usa o concurso t ou depois.

const CAP = 8;
export const GRUPOS = [
  { id: "atraso", nome: "Atraso (concursos sem sair)", tam: CAP + 1, rotulo: v => (v === CAP ? `atraso ≥ ${CAP}` : `atraso ${v}`) },
  { id: "sequencia", nome: "Sequência (concursos seguidos saindo)", tam: CAP + 1, rotulo: v => (v === CAP ? `saiu ≥ ${CAP} seguidos` : `saiu ${v} seguido(s)`) },
  { id: "f10", nome: "Frequência nos últimos 10", tam: 11, rotulo: v => `${v}/10 nos últimos 10` },
  { id: "padrao", nome: "Padrão dos 3 últimos", tam: 8, rotulo: v => `padrão ${[4, 2, 1].map(b => (v & b ? "●" : "○")).join("")} (anterior→3º)` },
  { id: "vizinhos", nome: "Vizinhos (n±1) no anterior", tam: 3, rotulo: v => `${v} vizinho(s) no anterior` },
  { id: "par1", nome: "Par: dezena m no anterior → n", tam: 625, rotulo: v => `${String((v % 25) + 1).padStart(2, "0")} saiu no anterior` },
  { id: "par2", nome: "Par: dezena m no penúltimo → n", tam: 625, rotulo: v => `${String((v % 25) + 1).padStart(2, "0")} saiu no penúltimo` },
  { id: "dezAtraso", nome: "Atraso próprio da dezena", tam: 25 * (CAP + 1), rotulo: v => `esta dezena com atraso ${v % (CAP + 1) === CAP ? `≥ ${CAP}` : v % (CAP + 1)}` },
];
const OFF = [];
{ let o = 0; for (const g of GRUPOS) { OFF.push(o); o += g.tam; } OFF.push(o); }
export const NCOND = OFF[GRUPOS.length];
export const NHIPOTESES = NCOND;
// Limiar de Bonferroni bicaudal a 5% para todas as condições.
export const Z_LIMIAR = 4.2;
export const CANDIDATAS = 20, Z_CONFIRMA = 2.81;
const SHRINK = 60; // prior: lift 0 com peso de ~250 observações (variância 0,24)

function novoEstado() {
  return {
    t: 0, res: new Float64Array(NCOND), vr: new Float64Array(NCOND), n: new Int32Array(NCOND), k: new Int32Array(NCOND),
    presencas: new Float64Array(26), atraso: new Int32Array(26).fill(0), seq: new Int32Array(26),
  };
}
const copiar = e => ({ t: e.t, res: e.res.slice(), vr: e.vr.slice(), n: e.n.slice(), k: e.k.slice(), presencas: e.presencas.slice(), atraso: e.atraso.slice(), seq: e.seq.slice() });

// Taxa sequencial da dezena (prior Beta(12, 8), média 60%).
const taxaDezena = (e, n) => (e.presencas[n] + 12) / (e.t + 20);

// Índices das condições ativas da dezena n antes do concurso t.
function condicoesAtivas(e, S, n) {
  const t = e.t, ant = t > 0 ? S[t - 1] : null, pen = t > 1 ? S[t - 2] : null;
  const a = Math.min(e.atraso[n], CAP), s = Math.min(e.seq[n], CAP);
  let f10 = 0, pad = 0;
  for (let j = 1; j <= 10 && t - j >= 0; j++) if (S[t - j].has(n)) { f10++; if (j <= 3) pad |= 1 << (3 - j); }
  const idx = [OFF[0] + a, OFF[1] + s, OFF[2] + f10, OFF[3] + pad];
  if (ant) {
    idx.push(OFF[4] + (ant.has(n - 1) ? 1 : 0) + (ant.has(n + 1) ? 1 : 0));
    for (const m of ant) if (m !== n) idx.push(OFF[5] + (n - 1) * 25 + (m - 1));
  }
  if (pen) for (const m of pen) if (m !== n) idx.push(OFF[6] + (n - 1) * 25 + (m - 1));
  idx.push(OFF[7] + (n - 1) * (CAP + 1) + a);
  return idx;
}

function aprender(e, S) {
  const t = e.t, sorteio = S[t];
  for (let n = 1; n <= 25; n++) {
    const pb = taxaDezena(e, n), y = sorteio.has(n) ? 1 : 0;
    for (const c of condicoesAtivas(e, S, n)) { e.res[c] += y - pb; e.vr[c] += pb * (1 - pb); e.n[c]++; e.k[c] += y; }
  }
  for (let n = 1; n <= 25; n++) {
    if (sorteio.has(n)) { e.presencas[n]++; e.atraso[n] = 0; e.seq[n]++; } else { e.atraso[n]++; e.seq[n] = 0; }
  }
  e.t++;
}

const grupoDe = c => { let g = 0; while (c >= OFF[g + 1]) g++; return g; };
const zDe = (e, c) => (e.vr[c] > 0 ? e.res[c] / Math.sqrt(e.vr[c]) : 0);
const liftDe = (e, c) => e.res[c] / (e.vr[c] + SHRINK * 0.24);
// Lift de cada grupo = média dos lifts das condições ativas dele (os pares
// ativam até 14 condições da mesma dezena; somar contaria a mesma evidência 14×).
function liftsPorGrupo(e, cs) {
  const soma = new Float64Array(GRUPOS.length), cont = new Int32Array(GRUPOS.length);
  for (const c of cs) { const g = grupoDe(c); soma[g] += liftDe(e, c); cont[g]++; }
  for (let g = 0; g < GRUPOS.length; g++) if (cont[g]) soma[g] /= cont[g];
  return soma;
}

// Varredor com fotografias a cada 100 concursos: o estado "antes do concurso t"
// é reconstruído a partir da fotografia mais próxima.
export function criarVarredor(sorteios) {
  const S = sorteios.map(d => new Set(d));
  const fotos = [];
  const e = novoEstado();
  for (let t = 0; t < S.length; t++) { if (t % 100 === 0) fotos.push(copiar(e)); aprender(e, S); }
  const estadoEm = t => {
    const f = copiar(fotos[Math.min(fotos.length - 1, Math.floor(t / 100))]);
    while (f.t < t) aprender(f, S);
    return f;
  };
  return { S, estadoEm, final: e };
}

// Por que cada dezena saiu (ou não) no concurso t, com o que se sabia antes.
export function explicarConcurso(varredor, t) {
  const e = varredor.estadoEm(t), S = varredor.S, sorteio = S[t];
  return Array.from({ length: 25 }, (_, i) => {
    const n = i + 1, pb = taxaDezena(e, n);
    const conds = condicoesAtivas(e, S, n).map(c => {
      const g = grupoDe(c);
      return { grupo: GRUPOS[g].id, nomeGrupo: GRUPOS[g].nome, descricao: GRUPOS[g].rotulo(c - OFF[g]), vezes: e.n[c], taxa: e.n[c] ? e.k[c] / e.n[c] : NaN, excesso: e.n[c] ? e.res[c] / e.n[c] : 0, z: zDe(e, c), lift: liftDe(e, c) };
    }).sort((a, b) => Math.abs(b.z) - Math.abs(a.z));
    const logit = Math.log(pb / (1 - pb)) + liftsPorGrupo(e, condicoesAtivas(e, S, n)).reduce((s, l) => s + l, 0);
    return { n, saiu: sorteio ? sorteio.has(n) : null, taxaDezena: pb, pCondicional: 1 / (1 + Math.exp(-logit)), conds, maisForte: conds[0], acimaDoLimiar: conds.filter(c => Math.abs(c.z) > Z_LIMIAR).length };
  });
}

// Varredura completa: descoberta na 1ª parte do histórico (as 20 mais fortes
// viram candidatas), confirmação na 2ª,
// e ganho sequencial (nats) de cada grupo usado como previsor contra a taxa
// da própria dezena. Assíncrona para não travar a tela.
export async function varrerSinais(sorteios, { fracaoDescoberta = 0.6, aoProgresso } = {}) {
  const S = sorteios.map(d => new Set(d)), T = S.length, corte = Math.floor(T * fracaoDescoberta);
  const e = novoEstado();
  const parte = [0, 1].map(() => ({ res: new Float64Array(NCOND), vr: new Float64Array(NCOND), n: new Int32Array(NCOND) }));
  const G = GRUPOS.length, ganho = Array.from({ length: G }, () => [0, 0]), ganhoTodos = [0, 0];
  const ll = (p, y) => (y ? Math.log(p) : Math.log(1 - p));
  const calibra = z => {
    let c = 0;
    for (let it = 0; it < 25; it++) { let s = 0, d = 0; for (let n = 1; n <= 25; n++) { const q = 1 / (1 + Math.exp(-(z[n] + c))); s += q; d += q * (1 - q); } const p = (s - 15) / d; c -= p; if (Math.abs(p) < 1e-9) break; }
    return c;
  };
  for (let t = 0; t < T; t++) {
    if (t >= 20) {
      const o = t < corte ? 0 : 1, base = new Float64Array(26), zs = Array.from({ length: G + 1 }, () => new Float64Array(26)), ativas = [];
      for (let n = 1; n <= 25; n++) {
        const pb = taxaDezena(e, n), l0 = Math.log(pb / (1 - pb)), cs = condicoesAtivas(e, S, n);
        base[n] = pb; ativas[n] = cs;
        for (let g = 0; g <= G; g++) zs[g][n] = l0;
        const lg = liftsPorGrupo(e, cs);
        for (let g = 0; g < G; g++) { zs[g][n] += lg[g]; zs[G][n] += lg[g]; }
      }
      for (let g = 0; g <= G; g++) {
        const c = calibra(zs[g]);
        let d = 0;
        for (let n = 1; n <= 25; n++) { const y = S[t].has(n) ? 1 : 0, q = 1 / (1 + Math.exp(-(zs[g][n] + c))); d += ll(q, y) - ll(base[n], y); }
        if (g < G) ganho[g][o] += d; else ganhoTodos[o] += d;
      }
      for (let n = 1; n <= 25; n++) {
        const y = S[t].has(n) ? 1 : 0, pb = base[n];
        for (const c of ativas[n]) { parte[o].res[c] += y - pb; parte[o].vr[c] += pb * (1 - pb); parte[o].n[c]++; }
      }
    }
    aprender(e, S);
    if (t % 250 === 0) { aoProgresso?.(t / T); await new Promise(r => setTimeout(r, 0)); }
  }
  const z = (p, c) => (p.vr[c] > 0 ? p.res[c] / Math.sqrt(p.vr[c]) : 0);
  const Phi = x => { const t = 1 / (1 + 0.2316419 * Math.abs(x)), d = 0.3989423 * Math.exp(-x * x / 2), q = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return x > 0 ? 1 - q : q; };
  const todas = [];
  for (let c = 0; c < NCOND; c++) if (parte[0].n[c] >= 100 && parte[1].n[c] >= 60) {
    const g = grupoDe(c), z1 = z(parte[0], c), z2 = z(parte[1], c);
    todas.push({ c, g, descricao: GRUPOS[g].rotulo(c - OFF[g]), dezena: g >= 5 ? Math.floor((c - OFF[g]) / (g === 7 ? CAP + 1 : 25)) + 1 : null, z1, z2, e1: parte[0].res[c] / parte[0].n[c], e2: parte[1].res[c] / parte[1].n[c], p1: 2 * (1 - Phi(Math.abs(z1))) });
  }
  // Benjamini–Hochberg na descoberta.
  const ord = todas.map((h, i) => [h.p1, i]).sort((a, b) => a[0] - b[0]);
  let min = 1;
  for (let r = ord.length - 1; r >= 0; r--) { min = Math.min(min, (ord[r][0] * ord.length) / (r + 1)); todas[ord[r][1]].q1 = min; }
  const correl = A => {
    if (A.length < 3) return NaN;
    const m1 = A.reduce((s, h) => s + h.z1, 0) / A.length, m2 = A.reduce((s, h) => s + h.z2, 0) / A.length;
    let a = 0, b = 0, d = 0;
    for (const h of A) { a += (h.z1 - m1) * (h.z2 - m2); b += (h.z1 - m1) ** 2; d += (h.z2 - m2) ** 2; }
    return a / Math.sqrt(b * d);
  };
  // Dois estágios: as CANDIDATAS mais fortes da descoberta viram hipóteses
  // pré-registradas; na confirmação, teste unicaudal no mesmo sentido com
  // Bonferroni sobre as candidatas (5% / 20 → z > 2,81).
  const candidatas = new Set([...todas].sort((a, b) => Math.abs(b.z1) - Math.abs(a.z1)).slice(0, CANDIDATAS).filter(h => Math.abs(h.z1) > 2));
  const confirmada = h => candidatas.has(h) && Math.sign(h.z2) === Math.sign(h.z1) && Math.abs(h.z2) > Z_CONFIRMA;
  const grupos = GRUPOS.map((gr, g) => {
    const A = todas.filter(h => h.g === g);
    return {
      id: gr.id, nome: gr.nome, hipoteses: A.length, descobertas: A.filter(h => candidatas.has(h)).length, confirmadas: A.filter(confirmada).length,
      correlacao: correl(A), ganhoDescoberta: ganho[g][0], ganhoConfirmacao: ganho[g][1],
    };
  });
  const destaques = [...candidatas].map(h => ({ ...h, grupo: GRUPOS[h.g].nome, confirmada: confirmada(h) }));
  aoProgresso?.(1);
  return { T, corte, grupos, destaques, hipoteses: todas.length, correlacaoGeral: correl(todas), ganhoTodos, confirmadas: todas.filter(confirmada).length };
}

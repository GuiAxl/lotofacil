// Descoberta de sinais: tabela sinal × número sobre o histórico, com
// p-valor exato, q-valor (FDR), replicação entre metades e — o principal —
// a PROBABILIDADE DE SER REAL de cada célula, por um modelo "spike-and-slab"
// empírico: cada célula é ruído (taxa = 60%) ou efeito real (taxa ~ Beta
// centrada em 60%). A fração de efeitos reais e a dispersão deles são
// estimadas dos próprios dados. Sem sinal no histórico, tudo tende a ~0%.
import { P0, pBinomialBicaudal, qValoresBH } from "./matematica.js";

const GRADE_PI = [0.0005, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2];
const GRADE_KAPPA = [4, 8, 16, 32, 64];
export const HIPER_NULO = { pi1: GRADE_PI[0], kappa: GRADE_KAPPA[GRADE_KAPPA.length - 1] };

function lgamma(x) {
  const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327108149727e-7];
  x -= 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
const TABELAS = new Map();
function tabela(kappa, max) {
  let t = TABELAS.get(kappa);
  if (!t || t.max < max) {
    const tam = Math.max(max, 512) * 2, a = kappa * P0, b = kappa * (1 - P0);
    t = { max: tam, la: new Float64Array(tam + 1), lb: new Float64Array(tam + 1), lk: new Float64Array(tam + 1), base: lgamma(a) + lgamma(b) - lgamma(kappa) };
    for (let i = 0; i <= tam; i++) { t.la[i] = lgamma(i + a); t.lb[i] = lgamma(i + b); t.lk[i] = lgamma(i + kappa); }
    TABELAS.set(kappa, t);
  }
  return t;
}
const LP = Math.log(P0), LQ = Math.log(1 - P0);

// log do fator de Bayes "efeito real" contra "ruído" para h acertos em d dias.
export function logFatorBayes(h, d, kappa) {
  const t = tabela(kappa, d);
  return t.la[h] + t.lb[d - h] - t.lk[d] - t.base - (h * LP + (d - h) * LQ);
}
export function probReal(h, d, hiper) {
  const x = Math.log(hiper.pi1) + logFatorBayes(h, d, hiper.kappa), y = Math.log(1 - hiper.pi1);
  return 1 / (1 + Math.exp(y - x));
}
export const taxaEncolhida = (h, d, hiper) => (h + hiper.kappa * P0) / (d + hiper.kappa);

// Máxima verossimilhança de (π₁, κ) numa grade.
export function ajustarHiper(celulas) {
  if (!celulas.length) return HIPER_NULO;
  let melhor = null;
  for (const kappa of GRADE_KAPPA) {
    const lbf = celulas.map(([h, d]) => Math.min(50, logFatorBayes(h, d, kappa)));
    for (const pi1 of GRADE_PI) {
      let ll = 0;
      for (const v of lbf) ll += Math.log(pi1 * Math.exp(v) + 1 - pi1);
      if (!melhor || ll > melhor.ll) melhor = { pi1, kappa, ll };
    }
  }
  return { pi1: melhor.pi1, kappa: melhor.kappa };
}

export function contarSinais(concursos) {
  const comMapa = concursos.filter(c => c.resultado && c.chaves).sort((a, b) => a.concurso - b.concurso);
  const meio = Math.floor(comMapa.length / 2);
  const cont = new Map();
  comMapa.forEach((c, i) => {
    for (const chave of c.chaves) {
      let x = cont.get(chave);
      if (!x) { x = { dias: 0, hits: new Int32Array(26), dias1: 0, hits1: new Int32Array(26), ultimo: null }; cont.set(chave, x); }
      x.dias++;
      if (i < meio) x.dias1++;
      for (const n of c.resultado) { x.hits[n]++; if (i < meio) x.hits1[n]++; }
    }
  });
  return { cont, nMapas: comMapa.length };
}

export function descobrirSinais(concursos, opcoes = {}) {
  const { minDias = 8 } = opcoes;
  const { cont, nMapas } = contarSinais(concursos);
  const celulas = [];
  for (const x of cont.values()) if (x.dias >= minDias) for (let n = 1; n <= 25; n++) celulas.push([x.hits[n], x.dias]);
  const hiper = ajustarHiper(celulas);
  const linhas = [];
  for (const [chave, x] of cont) {
    if (x.dias < minDias) continue;
    for (let n = 1; n <= 25; n++) {
      const hits = x.hits[n];
      const d2 = x.dias - x.dias1, h2 = hits - x.hits1[n];
      const t1 = x.dias1 ? x.hits1[n] / x.dias1 : null, t2 = d2 ? h2 / d2 : null;
      linhas.push({
        chave, numero: n, dias: x.dias, hits, taxa: hits / x.dias,
        p: pBinomialBicaudal(hits, x.dias),
        encolhida: taxaEncolhida(hits, x.dias, hiper),
        probReal: probReal(hits, x.dias, hiper),
        taxa1: t1, taxa2: t2,
        replica: t1 != null && t2 != null && x.dias1 >= 4 && d2 >= 4 && t1 !== P0 && Math.sign(t1 - P0) === Math.sign(t2 - P0),
      });
    }
  }
  const q = qValoresBH(linhas.map(l => l.p));
  linhas.forEach((l, i) => { l.q = q[i]; });
  linhas.sort((a, b) => b.probReal - a.probReal || a.p - b.p);
  return {
    linhas, hiper, nMapas, nTestes: linhas.length,
    abaixo005: linhas.filter(l => l.p < 0.05).length,
    esperadoAcaso: linhas.length * 0.05,
    sobrevivemFDR: linhas.filter(l => l.q < 0.1).length,
    provaveis: linhas.filter(l => l.probReal >= 0.5).length,
  };
}

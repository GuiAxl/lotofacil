// Métricas científicas para avaliar previsões concurso a concurso.
//
// Entrada: uma lista cronológica de registros { probs: [_, p1..p25], sorteio:
// [15 dezenas], acertos } — probs é a probabilidade prevista para cada dezena
// ANTES do sorteio. Todas as comparações são contra o modelo nulo (60% para
// cada dezena, 9 acertos esperados).
import { rng } from "./matematica.js";
import { eProcessoAcertos, eProcessoVerossimilhanca, pageHinkley } from "../auditoria/evidencia.js";

const P0 = 0.6;
const media = a => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : NaN);

export function brier(probs, sorteio) {
  const s = new Set(sorteio);
  let b = 0;
  for (let n = 1; n <= 25; n++) b += (probs[n] - (s.has(n) ? 1 : 0)) ** 2;
  return b / 25;
}
export function logloss(probs, sorteio) {
  const s = new Set(sorteio);
  let l = 0;
  for (let n = 1; n <= 25; n++) { const q = Math.min(1 - 1e-9, Math.max(1e-9, probs[n])); l -= s.has(n) ? Math.log(q) : Math.log(1 - q); }
  return l / 25;
}
// AUC de ranqueamento: chance de uma dezena sorteada ter recebido
// probabilidade maior que uma não sorteada (0,5 = sem informação).
export function auc(probs, sorteio) {
  const s = new Set(sorteio);
  let pares = 0, bons = 0;
  for (let a = 1; a <= 25; a++) if (s.has(a)) for (let b = 1; b <= 25; b++) if (!s.has(b)) {
    pares++;
    bons += probs[a] > probs[b] ? 1 : probs[a] === probs[b] ? 0.5 : 0;
  }
  return bons / pares;
}

const BRIER_NULO = P0 * (1 - P0); // 0,24
const LOGLOSS_NULO = -(P0 * Math.log(P0) + (1 - P0) * Math.log(1 - P0)); // 0,673

// Calibração: agrupa as previsões por faixa de probabilidade e compara com a
// frequência observada. ECE/MCE = erro médio/máximo; inclinação e intercepto
// por regressão logística de y sobre logit(p) (ideal: 1 e 0).
export function calibracao(registros, nFaixas = 8) {
  const pares = [];
  for (const r of registros) { const s = new Set(r.sorteio); for (let n = 1; n <= 25; n++) pares.push([r.probs[n], s.has(n) ? 1 : 0]); }
  const ps = pares.map(p => p[0]).sort((a, b) => a - b);
  const cortes = Array.from({ length: nFaixas - 1 }, (_, i) => ps[Math.floor(((i + 1) / nFaixas) * ps.length)]);
  const faixas = Array.from({ length: nFaixas }, () => ({ n: 0, somaP: 0, somaY: 0 }));
  for (const [p, y] of pares) {
    let k = 0;
    while (k < cortes.length && p > cortes[k]) k++;
    faixas[k].n++; faixas[k].somaP += p; faixas[k].somaY += y;
  }
  const f = faixas.filter(x => x.n).map(x => ({ previsto: x.somaP / x.n, observado: x.somaY / x.n, n: x.n }));
  const total = pares.length;
  const ece = f.reduce((s, x) => s + (x.n / total) * Math.abs(x.previsto - x.observado), 0);
  const mce = Math.max(...f.map(x => Math.abs(x.previsto - x.observado)));
  // Newton para y ~ σ(a + b·(logit p − logit 0,6))
  const lp0 = Math.log(P0 / (1 - P0));
  let a = 0, b = 1;
  for (let it = 0; it < 25; it++) {
    let ga = 0, gb = 0, haa = 0, hab = 0, hbb = 0;
    for (const [p, y] of pares) {
      const x = Math.log(p / (1 - p)) - lp0;
      const q = 1 / (1 + Math.exp(-(lp0 + a + b * x)));
      const w = q * (1 - q);
      ga += q - y; gb += (q - y) * x; haa += w; hab += w * x; hbb += w * x * x;
    }
    const det = haa * hbb - hab * hab;
    if (Math.abs(det) < 1e-12) break;
    a -= (hbb * ga - hab * gb) / det;
    b -= (haa * gb - hab * ga) / det;
  }
  const amplitude = ps[Math.floor(ps.length * 0.95)] - ps[Math.floor(ps.length * 0.05)];
  return { faixas: f, ece, mce, inclinacao: b, intercepto: a, nitidez: amplitude };
}

// Janelas móveis do delta de acertos (acertos − 9).
export function janelasMoveis(deltas, tamanho) {
  if (deltas.length < tamanho) return null;
  const medias = [];
  let s = deltas.slice(0, tamanho).reduce((a, b) => a + b, 0);
  medias.push(s / tamanho);
  for (let i = tamanho; i < deltas.length; i++) { s += deltas[i] - deltas[i - tamanho]; medias.push(s / tamanho); }
  return { tamanho, pior: Math.min(...medias), melhor: Math.max(...medias), taxaPositiva: medias.filter(m => m > 0).length / medias.length, serie: medias };
}

// Erro-padrão de Newey-West (robusto a autocorrelação) para a média.
export function neweyWest(x) {
  const n = x.length, m = media(x);
  const L = Math.floor(4 * (n / 100) ** (2 / 9));
  let v = x.reduce((s, y) => s + (y - m) ** 2, 0) / n;
  for (let l = 1; l <= L; l++) {
    let c = 0;
    for (let i = l; i < n; i++) c += (x[i] - m) * (x[i - l] - m);
    v += 2 * (1 - l / (L + 1)) * (c / n);
  }
  return Math.sqrt(Math.max(v, 0) / n);
}

// Bootstrap em blocos móveis: intervalo de 95% para a média de x.
export function bootstrapBlocos(x, { bloco = 20, reps = 1000, semente = 5 } = {}) {
  const n = x.length, r = rng(semente), medias = [];
  if (n < bloco * 2) return null;
  for (let k = 0; k < reps; k++) {
    let s = 0, c = 0;
    while (c < n) { const ini = Math.floor(r() * (n - bloco + 1)); for (let j = 0; j < bloco && c < n; j++, c++) s += x[ini + j]; }
    medias.push(s / n);
  }
  medias.sort((a, b) => a - b);
  return [medias[Math.floor(reps * 0.025)], medias[Math.floor(reps * 0.975)]];
}

// Phase-shift adversarial: desloca (circularmente) a série de resultados em
// relação aos jogos previstos. Se o motor tem informação real, o desempenho
// alinhado supera o das versões deslocadas.
export function phaseShift(jogos, sorteios, { deslocamentos = 200, semente = 13 } = {}) {
  const n = jogos.length, r = rng(semente);
  const acertosCom = off => { let s = 0; for (let i = 0; i < n; i++) { const d = new Set(sorteios[(i + off) % n]); s += jogos[i].filter(x => d.has(x)).length; } return s / n; };
  const real = acertosCom(0);
  const nulos = [];
  for (let k = 0; k < deslocamentos; k++) nulos.push(acertosCom(1 + Math.floor(r() * (n - 1))));
  return { real, mediaNula: media(nulos), p: (nulos.filter(v => v >= real).length + 1) / (deslocamentos + 1), vitorias: nulos.filter(v => real > v).length / deslocamentos };
}

export function drawdownMaximo(deltas) {
  let acum = 0, pico = 0, dd = 0;
  for (const d of deltas) { acum += d; pico = Math.max(pico, acum); dd = Math.max(dd, pico - acum); }
  return { drawdown: dd, final: acum };
}

// Relatório completo.
export function relatorio(registros, opcoes = {}) {
  const n = registros.length;
  if (!n) return null;
  const temProbs = registros.every(r => r.probs);
  const deltas = registros.map(r => r.acertos - 9);
  const quartis = [0, 1, 2, 3].map(q => media(deltas.slice(Math.floor((q * n) / 4), Math.floor(((q + 1) * n) / 4))));
  const nw = neweyWest(deltas);
  const out = {
    n,
    acertosMedios: 9 + media(deltas),
    delta: media(deltas), erroPadraoNW: nw, zNW: media(deltas) / nw,
    icBootstrap: bootstrapBlocos(deltas, opcoes),
    taxaDeltaPositivo: deltas.filter(d => d > 0).length / n,
    taxaDeltaNaoNegativo: deltas.filter(d => d >= 0).length / n,
    melhor: Math.max(...registros.map(r => r.acertos)), pior: Math.min(...registros.map(r => r.acertos)),
    quartis, piorQuartil: Math.min(...quartis),
    janelas: [20, 50, 100].map(t => janelasMoveis(deltas, t)).filter(Boolean),
    ...drawdownMaximo(deltas),
  };
  if (temProbs) {
    const brs = registros.map(r => brier(r.probs, r.sorteio)), lls = registros.map(r => logloss(r.probs, r.sorteio));
    const br = media(brs), ll = media(lls);
    const aucs = registros.map(r => auc(r.probs, r.sorteio));
    const ic = serie => bootstrapBlocos(serie, opcoes);
    const icBrier = ic(brs.map(b => 1 - b / BRIER_NULO)), icLog = ic(lls.map(l => LOGLOSS_NULO - l)), icAuc = ic(aucs);
    Object.assign(out, {
      brier: br, ganhoBrier: 1 - br / BRIER_NULO, icGanhoBrier: icBrier,
      logloss: ll, ganhoLogloss: LOGLOSS_NULO - ll, icGanhoLogloss: icLog, icAuc,
      auc: media(aucs), aucRecente: media(aucs.slice(-100)), aucMediana: [...aucs].sort((a, b) => a - b)[Math.floor(n / 2)],
      calibracao: calibracao(registros),
    });
  }
  // Evidência sequencial (válida a qualquer momento) e drift.
  const ea = eProcessoAcertos(registros.map(r => r.acertos));
  out.eAcertos = { e: ea.e, max: ea.max, rejeitaEm: ea.rejeitaEm };
  if (temProbs) { const ev = eProcessoVerossimilhanca(registros); out.eVeross = { e: ev.e, max: ev.maxE, rejeitaEm: ev.rejeitaEm }; }
  const alarmes = pageHinkley(deltas);
  out.drift = { alarmes: alarmes.length, ultimo: alarmes.length ? { ...alarmes[alarmes.length - 1], concurso: registros[alarmes[alarmes.length - 1].indice].concurso } : null };
  if (registros.every(r => r.jogo)) out.phaseShift = phaseShift(registros.map(r => r.jogo), registros.map(r => r.sorteio));
  return out;
}

// Portfólio aleatório de k jogos: acertos médios e média do melhor jogo.
export function portfolioAleatorio(k, { sorteios = 20000, semente = 21 } = {}) {
  const r = rng(semente);
  let somaMedia = 0, somaMelhor = 0;
  const base = Array.from({ length: 25 }, (_, i) => i + 1);
  const sorteia = () => { const a = [...base]; for (let i = 0; i < 15; i++) { const j = i + Math.floor(r() * (25 - i)); [a[i], a[j]] = [a[j], a[i]]; } return new Set(a.slice(0, 15)); };
  for (let s = 0; s < sorteios; s++) {
    const d = sorteia();
    let soma = 0, melhor = 0;
    for (let j = 0; j < k; j++) { const g = sorteia(); let h = 0; for (const x of g) if (d.has(x)) h++; soma += h; melhor = Math.max(melhor, h); }
    somaMedia += soma / k; somaMelhor += melhor;
  }
  return { media: somaMedia / sorteios, melhor: somaMelhor / sorteios };
}

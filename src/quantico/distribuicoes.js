// Distribuições para os testes do Laudo e do motor.

function lgamma(x) {
  const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327108149727e-7];
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lgamma(1 - x);
  x -= 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

// Função gama incompleta regularizada superior Q(a, x).
function gamaQ(a, x) {
  if (x <= 0) return 1;
  if (x < a + 1) {
    let soma = 1 / a, termo = soma;
    for (let n = 1; n < 500; n++) { termo *= x / (a + n); soma += termo; if (Math.abs(termo) < Math.abs(soma) * 1e-14) break; }
    return Math.max(0, 1 - soma * Math.exp(-x + a * Math.log(x) - lgamma(a)));
  }
  let b = x + 1 - a, c = 1 / 1e-300, d = 1 / b, h = d;
  for (let i = 1; i < 500; i++) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300;
    c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 1e-14) break;
  }
  return Math.min(1, Math.exp(-x + a * Math.log(x) - lgamma(a)) * h);
}

export const pQuiQuadrado = (estatistica, gl) => gamaQ(gl / 2, estatistica / 2);

// Normal padrão.
export function phi(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp(-z * z / 2);
  const p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z > 0 ? 1 - p : p;
}
export const pNormalBicaudal = z => 2 * (1 - phi(Math.abs(z)));

const LOG_FAT = [0];
export const logFat = n => { for (let i = LOG_FAT.length; i <= n; i++) LOG_FAT[i] = LOG_FAT[i - 1] + Math.log(i); return LOG_FAT[n]; };
export const comb = (n, k) => (k < 0 || k > n ? 0 : Math.exp(logFat(n) - logFat(k) - logFat(n - k)));

// P(exatamente k acertos) para um jogo de m números (15 a 20) contra o sorteio de 15.
export const pAcertos = (k, m = 15) => (comb(m, k) * comb(25 - m, 15 - k)) / comb(25, 15);

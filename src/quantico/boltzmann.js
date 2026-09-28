// Máquina de Boltzmann dinâmica (modelo de Ising) para a Lotofácil.
//
// O sorteio é um vetor de spins x ∈ {0,1}^25 com exatamente 15 ligados.
// Energia (log-probabilidade não normalizada), dado o sorteio anterior y:
//   log P(x | y) = Σ h_i x_i + Σ_{i<j} J_ij x_i x_j + Σ_{i,j} K_ij x_i y_j − log Z(y)
// h = propensão de cada dezena, J = interação entre dezenas do MESMO sorteio,
// K = influência de uma dezena do sorteio anterior sobre o atual.
// É o mesmo Hamiltoniano de Ising que os computadores de annealing quântico
// minimizam.
// Aprendizado online determinístico: gradiente de campo médio com correção de
// resposta linear para a restrição de soma 15, AdaGrad por parâmetro e L1
// proximal (acoplamentos esparsos: só sobrevive o que tem evidência).

const sig = z => 1 / (1 + Math.exp(-z));

export function criarBoltzmann({ alfa = 0.1, c = 3, l2 = 1, lrH = 0.02 } = {}) {
  const M = () => Array.from({ length: 26 }, () => new Float64Array(26));
  return {
    h: new Float64Array(26), J: M(), K: M(),
    gH: new Float64Array(26).fill(1e-8), zJ: M(), nJ: M(), zK: M(), nK: M(),
    alfa, c, l2, lrH, t: 0,
  };
}

function campoExterno(b, y) {
  const f = new Float64Array(26);
  for (let i = 1; i <= 25; i++) {
    let s = b.h[i];
    if (y) for (const j of y) s += b.K[i][j];
    f[i] = s;
  }
  return f;
}

// Marginais por campo médio com a restrição Σ m = 15 (multiplicador μ).
export function marginais(b, y) {
  const ext = campoExterno(b, y);
  const m = new Float64Array(26).fill(0.6);
  for (let it = 0; it < 25; it++) {
    const campo = new Float64Array(26);
    for (let i = 1; i <= 25; i++) {
      let s = ext[i];
      for (let j = 1; j <= 25; j++) if (j !== i) s += b.J[i][j] * m[j];
      campo[i] = s;
    }
    let lo = -30, hi = 30;
    for (let q = 0; q < 50; q++) {
      const mu = (lo + hi) / 2;
      let soma = 0;
      for (let i = 1; i <= 25; i++) soma += sig(campo[i] + mu);
      if (soma > 15) hi = mu; else lo = mu;
    }
    const mu = (lo + hi) / 2;
    let mudou = 0;
    for (let i = 1; i <= 25; i++) { const novo = 0.5 * m[i] + 0.5 * sig(campo[i] + mu); mudou += Math.abs(novo - m[i]); m[i] = novo; }
    if (mudou < 1e-7) break;
  }
  return m;
}

// FTRL-Proximal com limiar ADAPTATIVO: o peso só sai do zero quando o
// gradiente acumulado |z| passa de c·√n (n = soma dos quadrados), ou seja,
// quando a evidência daquele acoplamento passa num teste t online.
function ftrl(b, W, Z, N, i, j, gPerda) {
  const n0 = N[i][j], w = W[i][j];
  const sigma = (Math.sqrt(n0 + gPerda * gPerda) - Math.sqrt(n0)) / b.alfa;
  Z[i][j] += gPerda - sigma * w;
  N[i][j] = n0 + gPerda * gPerda;
  const z = Z[i][j], n = N[i][j], limiar = b.c * Math.sqrt(n);
  return Math.abs(z) <= limiar ? 0 : -(z - Math.sign(z) * limiar) / ((1 + Math.sqrt(n)) / b.alfa + b.l2);
}

// Aprende com o sorteio x (dado o anterior y). Gradiente da log-verossimilhança
// = estatística dos dados − estatística do modelo; as do modelo vêm do campo
// médio com correção de resposta linear para a restrição de soma 15:
// ⟨x_i x_j⟩ ≈ m_i m_j − v_i v_j / Σ v   (v = m(1 − m)).
export function aprenderBoltzmann(b, x, y, mPronto = null) {
  const m = mPronto || marginais(b, y);
  const xs = new Set(x);
  const v = new Float64Array(26);
  let V = 0;
  for (let i = 1; i <= 25; i++) { v[i] = m[i] * (1 - m[i]); V += v[i]; }
  for (let i = 1; i <= 25; i++) {
    const xi = xs.has(i) ? 1 : 0, g = xi - m[i];
    b.gH[i] += g * g;
    b.h[i] += (b.lrH / Math.sqrt(b.gH[i])) * g;
    if (y) for (const j of y) b.K[i][j] = ftrl(b, b.K, b.zK, b.nK, i, j, -g);
    for (let j = i + 1; j <= 25; j++) {
      const gJ = (xi && xs.has(j) ? 1 : 0) - (m[i] * m[j] - (v[i] * v[j]) / V);
      b.J[i][j] = b.J[j][i] = ftrl(b, b.J, b.zJ, b.nJ, i, j, -gJ);
    }
  }
  b.t++;
}

// Acoplamentos mais fortes (para a interface).
export function acoplamentosFortes(b, quantos = 8) {
  const J = [], K = [];
  for (let i = 1; i <= 25; i++) for (let j = 1; j <= 25; j++) {
    if (j > i && b.J[i][j]) J.push({ a: i, b: j, valor: b.J[i][j] });
    if (b.K[i][j]) K.push({ de: j, para: i, valor: b.K[i][j] });
  }
  J.sort((x, y) => Math.abs(y.valor) - Math.abs(x.valor));
  K.sort((x, y) => Math.abs(y.valor) - Math.abs(x.valor));
  return { J: J.slice(0, quantos), K: K.slice(0, quantos), nJ: J.length, nK: K.length, h: Array.from(b.h) };
}

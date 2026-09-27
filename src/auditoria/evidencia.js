// Evidência sequencial válida a qualquer momento (e-values / e-processos) e
// detecção de drift.
//
// Um e-processo E_t é uma "aposta contra o acaso": sob a hipótese nula (o
// motor não sabe nada), seu valor esperado é 1 em qualquer momento. Por isso
// dá para olhar o placar TODO DIA sem inflar o falso positivo: se E_t passar
// de 1/α (20 para α = 5%), há evidência — válida mesmo com espiadas repetidas.

const LAMBDAS = [0.005, 0.01, 0.02, 0.04, 0.08];

// Betting e-process sobre acertos: sob o nulo E[acertos] = 9 e acertos ≥ 0,
// então 1 + λ(acertos − 9) ≥ 1 − 9λ > 0 para λ < 1/9 e tem média 1.
// Mistura uniforme de λ (unilateral: aposta em "acerta mais que 9").
export function eProcessoAcertos(acertos, alfa = 0.05) {
  const ln = LAMBDAS.map(() => 0);
  const trajetoria = [];
  let rejeitaEm = null, max = 1;
  acertos.forEach((a, i) => {
    LAMBDAS.forEach((l, k) => { ln[k] += Math.log(1 + l * (a - 9)); });
    const e = ln.reduce((s, v) => s + Math.exp(v), 0) / LAMBDAS.length;
    trajetoria.push(e);
    max = Math.max(max, e);
    if (rejeitaEm == null && e >= 1 / alfa) rejeitaEm = i;
  });
  return { e: trajetoria[trajetoria.length - 1] ?? 1, max, rejeitaEm, trajetoria, limiar: 1 / alfa };
}

// E-processo por verossimilhança: razão entre a probabilidade que o motor
// deu ao resultado real e a que o nulo (60%) daria. É exatamente
// exp(ganho acumulado de log-loss) — válido porque cada previsão usa só o passado.
export function eProcessoVerossimilhanca(registros, alfa = 0.05) {
  let lnE = 0, rejeitaEm = null, maxLn = 0;
  const trajetoria = [];
  registros.forEach((r, i) => {
    const s = new Set(r.sorteio);
    for (let n = 1; n <= 25; n++) {
      const q = Math.min(1 - 1e-9, Math.max(1e-9, r.probs[n]));
      lnE += s.has(n) ? Math.log(q / 0.6) : Math.log((1 - q) / 0.4);
    }
    trajetoria.push(lnE);
    maxLn = Math.max(maxLn, lnE);
    if (rejeitaEm == null && lnE >= Math.log(1 / alfa)) rejeitaEm = i;
  });
  return { lnE, e: Math.exp(lnE), maxE: Math.exp(maxLn), rejeitaEm, trajetoria, limiar: 1 / alfa };
}

// Page-Hinkley: detecta queda (ou alta) persistente na média de uma série.
// λ = 60 calibrado: ≈ 0,45 alarme falso a cada 3.600 concursos aleatórios e
// detecta um ganho real de +0,4 acerto em ~100–300 concursos.
export function pageHinkley(x, { delta = 0.05, lambda = 60 } = {}) {
  let media = 0, n = 0, mT = 0, minT = 0, maxT = 0, mT2 = 0;
  const alarmes = [];
  x.forEach((v, i) => {
    n++; media += (v - media) / n;
    mT += v - media - delta; minT = Math.min(minT, mT);
    mT2 += v - media + delta; maxT = Math.max(maxT, mT2);
    if (mT - minT > lambda) { alarmes.push({ indice: i, direcao: "alta" }); mT = 0; minT = 0; }
    if (maxT - mT2 > lambda) { alarmes.push({ indice: i, direcao: "queda" }); mT2 = 0; maxT = 0; }
  });
  return alarmes;
}

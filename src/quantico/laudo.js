// Laudo de aleatoriedade: bateria de testes sobre o histórico completo.
// Cada teste compara o que aconteceu com o que um sorteio perfeitamente
// aleatório (15 de 25, sem reposição, independente entre concursos) produz.
// Um desvio só é "detectado" depois da correção de Bonferroni sobre a bateria.
import { pQuiQuadrado, pNormalBicaudal, comb } from "./distribuicoes.js";

const P = 0.6;

// χ² correto para contagens de 25 números sorteados 15 a 15 sem reposição:
// a matriz de covariância por sorteio é 0,25·I − 0,01·J, então no subespaço
// de soma zero a variância é 0,25·N por número (24 graus de liberdade).
function quiFrequencia(contagens, n) {
  let s = 0;
  for (let i = 1; i <= 25; i++) s += (contagens[i] - n * P) ** 2;
  return s / (0.25 * n);
}

function contar(sorteios) {
  const c = new Array(26).fill(0);
  for (const d of sorteios) for (const x of d) c[x]++;
  return c;
}

export function gerarLaudo(historico, opcoes = {}) {
  const { tamanhoBloco = 500 } = opcoes;
  const S = historico.map(h => h.dezenas);
  const N = S.length;
  const testes = [];
  const add = t => testes.push(t);

  // 1) Frequência de cada número no histórico inteiro.
  const cont = contar(S);
  const chiF = quiFrequencia(cont, N);
  const zs = Array.from({ length: 25 }, (_, i) => ({ numero: i + 1, contagem: cont[i + 1], z: (cont[i + 1] - N * P) / Math.sqrt(0.25 * N) }));
  add({
    id: "frequencia", nome: "Frequência dos 25 números (histórico inteiro)",
    estatistica: `χ² = ${chiF.toFixed(1)} (24 gl, esperado ≈ 24)`, p: pQuiQuadrado(chiF, 24),
    detalhe: { porNumero: zs },
    explicacao: "Se algum número sai mais que os outros de forma consistente, este teste acusa.",
  });

  // 2) Frequência por época (blocos de concursos) — detecta viés temporário.
  const blocos = [];
  for (let i = 0; i < N; i += tamanhoBloco) {
    const b = S.slice(i, i + tamanhoBloco);
    if (b.length < 100) continue;
    const chi = quiFrequencia(contar(b), b.length);
    blocos.push({ de: historico[i].concurso, ate: historico[Math.min(i + tamanhoBloco, N) - 1].concurso, chi, p: pQuiQuadrado(chi, 24) });
  }
  const piorBloco = blocos.reduce((a, b) => (b.p < a.p ? b : a), blocos[0]);
  add({
    id: "epocas", nome: `Frequência por época (${blocos.length} blocos de ${tamanhoBloco})`,
    estatistica: `pior bloco: ${piorBloco.de}–${piorBloco.ate}, χ² = ${piorBloco.chi.toFixed(1)}`,
    p: Math.min(1, piorBloco.p * blocos.length), detalhe: { blocos },
    explicacao: "Procura um período em que algum número foi favorecido (ex.: troca de equipamento). O p já está corrigido pelo número de blocos.",
  });

  // 3) Repetição do concurso anterior (esperado: 9, distribuição hipergeométrica).
  const reps = [];
  for (let i = 1; i < N; i++) { const a = new Set(S[i - 1]); reps.push(S[i].filter(x => a.has(x)).length); }
  const faixa = Array.from({ length: 11 }, (_, i) => i + 5);
  const espRep = k => (comb(15, k) * comb(10, 15 - k)) / comb(25, 15);
  let chiR = 0, gl = -1;
  const distRep = faixa.map(k => ({ k, obs: reps.filter(r => r === k).length, esp: espRep(k) * reps.length }));
  // agrupa caudas com esperado < 5
  const grupos = [];
  let acc = { obs: 0, esp: 0 };
  for (const d of distRep) { acc.obs += d.obs; acc.esp += d.esp; if (acc.esp >= 5) { grupos.push(acc); acc = { obs: 0, esp: 0 }; } }
  if (acc.esp > 0) { grupos[grupos.length - 1].obs += acc.obs; grupos[grupos.length - 1].esp += acc.esp; }
  grupos.forEach(g => { chiR += (g.obs - g.esp) ** 2 / g.esp; gl++; });
  const mediaRep = reps.reduce((a, b) => a + b, 0) / reps.length;
  add({
    id: "repeticao", nome: "Repetição de dezenas do concurso anterior",
    estatistica: `média ${mediaRep.toFixed(3)} (esperado 9,000) · χ² = ${chiR.toFixed(1)} (${gl} gl)`, p: pQuiQuadrado(chiR, gl),
    detalhe: { distribuicao: distRep },
    explicacao: "Se o sorteio tivesse memória, a quantidade de números repetidos fugiria da distribuição teórica.",
  });

  // 4) Soma das dezenas (média 195, desvio 18,03 por sorteio).
  const somas = S.map(d => d.reduce((a, b) => a + b, 0));
  const mediaSoma = somas.reduce((a, b) => a + b, 0) / N;
  const varTeorica = 15 * 52 * (10 / 24);
  const zSoma = (mediaSoma - 195) / Math.sqrt(varTeorica / N);
  const varObs = somas.reduce((s, v) => s + (v - mediaSoma) ** 2, 0) / (N - 1);
  const zVar = (varObs / varTeorica - 1) / Math.sqrt(2 / (N - 1));
  add({
    id: "soma", nome: "Soma das dezenas",
    estatistica: `média ${mediaSoma.toFixed(2)} (esperado 195) · desvio ${Math.sqrt(varObs).toFixed(2)} (esperado ${Math.sqrt(varTeorica).toFixed(2)})`,
    p: Math.min(1, 2 * Math.min(pNormalBicaudal(zSoma), pNormalBicaudal(zVar))),
    explicacao: "Números altos ou baixos favorecidos deslocariam a soma.",
  });

  // 5) Ímpares por sorteio (13 ímpares e 12 pares no volante).
  const espImpar = k => (comb(13, k) * comb(12, 15 - k)) / comb(25, 15);
  const impares = S.map(d => d.filter(x => x % 2).length);
  let chiI = 0, glI = -1;
  for (let k = 3; k <= 13; k++) {
    const e = espImpar(k) * N, o = impares.filter(x => x === k).length;
    if (e >= 5) { chiI += (o - e) ** 2 / e; glI++; }
  }
  add({ id: "paridade", nome: "Quantidade de ímpares por sorteio", estatistica: `χ² = ${chiI.toFixed(1)} (${glI} gl)`, p: pQuiQuadrado(chiI, glI), explicacao: "Compara com a distribuição exata (13 ímpares, 12 pares)." });

  // 6) Pares de números que saem juntos (300 pares).
  const juntos = Array.from({ length: 26 }, () => new Array(26).fill(0));
  for (const d of S) for (let i = 0; i < 15; i++) for (let j = i + 1; j < 15; j++) juntos[d[i]][d[j]]++;
  const pPar = (15 * 14) / (25 * 24);
  let maxZ = 0, parMax = null, chiP = 0;
  for (let a = 1; a <= 25; a++) for (let b = a + 1; b <= 25; b++) {
    const z = (juntos[a][b] - N * pPar) / Math.sqrt(N * pPar * (1 - pPar));
    chiP += z * z;
    if (Math.abs(z) > Math.abs(maxZ)) { maxZ = z; parMax = [a, b]; }
  }
  const pMaxPar = Math.min(1, pNormalBicaudal(maxZ) * 300);
  add({
    id: "pares", nome: "Pares de números que saem juntos",
    estatistica: `par mais desviante: ${parMax[0]}–${parMax[1]} (z = ${maxZ.toFixed(2)})`, p: pMaxPar,
    explicacao: "Procura duplas que saem juntas mais (ou menos) do que o acaso explica. O p já está corrigido pelos 300 pares.",
  });

  // 7) Memória por número: autocorrelação da presença (defasagens 1 a 5).
  const pres = n => S.map(d => (d.includes(n) ? 1 : 0));
  let somaZ2 = 0, maxAuto = { z: 0 };
  for (let n = 1; n <= 25; n++) {
    const x = pres(n), m = x.reduce((a, b) => a + b, 0) / N;
    const v = x.reduce((s, y) => s + (y - m) ** 2, 0);
    for (let lag = 1; lag <= 5; lag++) {
      let c = 0;
      for (let i = lag; i < N; i++) c += (x[i] - m) * (x[i - lag] - m);
      const r = c / v, z = r * Math.sqrt(N);
      somaZ2 += z * z;
      if (Math.abs(z) > Math.abs(maxAuto.z)) maxAuto = { z, numero: n, lag };
    }
  }
  add({
    id: "memoria", nome: "Memória de cada número (autocorrelação, 125 testes)",
    estatistica: `Σz² = ${somaZ2.toFixed(1)} (esperado 125) · maior: nº ${maxAuto.numero}, defasagem ${maxAuto.lag}, z = ${maxAuto.z.toFixed(2)}`,
    p: pQuiQuadrado(somaZ2, 125),
    explicacao: "Se sair hoje mudasse a chance de sair amanhã (ou daqui a 5 concursos), apareceria aqui.",
  });

  // 8) Atrasos: tempo entre aparições de cada número (geométrica, p = 0,6).
  let chiA = 0, glA = 0;
  const maxGap = 6;
  const obsGap = new Array(maxGap + 1).fill(0);
  let totalGaps = 0;
  for (let n = 1; n <= 25; n++) {
    let ultimo = -1;
    S.forEach((d, i) => { if (d.includes(n)) { if (ultimo >= 0) { const g = Math.min(i - ultimo, maxGap); obsGap[g]++; totalGaps++; } ultimo = i; } });
  }
  for (let g = 1; g <= maxGap; g++) {
    const e = totalGaps * (g < maxGap ? P * (1 - P) ** (g - 1) : (1 - P) ** (maxGap - 1));
    chiA += (obsGap[g] - e) ** 2 / e; glA++;
  }
  add({ id: "atrasos", nome: "Atrasos (intervalo entre aparições)", estatistica: `χ² = ${chiA.toFixed(1)} (${glA - 1} gl)`, p: pQuiQuadrado(chiA, glA - 1), explicacao: "Número \"atrasado\" não fica mais provável: o intervalo segue a distribuição geométrica se o sorteio não tem memória." });

  const k = testes.length;
  testes.forEach(t => { t.pCorrigido = Math.min(1, t.p * k); t.desvio = t.pCorrigido < 0.05; });
  return { testes, nConcursos: N, desvios: testes.filter(t => t.desvio).length, blocos };
}

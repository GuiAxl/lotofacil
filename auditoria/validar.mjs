// Auditoria out-of-sample do motor v12 com o histórico embutido no próprio arquivo.
// Uso: npm run auditoria  (ou: node auditoria/validar.mjs --permutacoes 200)
//
// Responde uma única pergunta: o jogo gerado acerta mais do que um jogo
// aleatório (esperado = 9,00 acertos) quando o motor NÃO vê o resultado
// que está tentando prever?
import * as m from "./.gerado/motor.mjs";

const args = process.argv.slice(2);
const nPerm = Number(args[args.indexOf("--permutacoes") + 1]) || 100;

const H = m.HISTORICO_INICIAL;
const ds = H.filter(h => m.mapaInterpretavel(h) && m.resultadoValido(h.resultado))
  .sort(m.compararHistoricoCronologico);
const media = a => a.reduce((s, v) => s + v, 0) / a.length;
const dp = a => { const x = media(a); return Math.sqrt(a.reduce((s, v) => s + (v - x) ** 2, 0) / (a.length - 1)); };
const acertos = (jogo, resultado) => jogo.filter(n => resultado.includes(n)).length;
const fmt = (x, d = 3) => x.toFixed(d);
const comb = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };
const hiper = k => comb(15, k) * comb(10, 15 - k) / comb(25, 15);

console.log(`Concursos no histórico: ${H.length} | com mapa + resultado: ${ds.length}\n`);

// 1) Vazamento: jogos salvos no backup vs. o que o motor gera sem ver o resultado.
console.log("1) VAZAMENTO DE DADOS NOS JOGOS SALVOS");
const salvos = ds.filter(h => h.jogoGerado?.length === 15).map(h => acertos(h.jogoGerado, h.resultado));
const statsCompletas = m.analisarCorrelacaoDireta(H).achados;
const comVazamento = ds.map(h => {
  const { planetas, cuspides } = m.obterMapaInterpretado(h);
  return acertos(m.top15PorPontuacao(m.analisarMapa(planetas, cuspides, statsCompletas)), h.resultado);
});
const base = m.construirBaseDecisao(H);
const loo = ds.map(h => {
  const r = m.gerarItemComDuasSugestoes(base, h);
  return [acertos(r.jogoGerado, h.resultado), acertos(r.jogoGeradoAlt, h.resultado)];
});
console.log(`  jogoGerado salvo no backup ........ ${fmt(media(salvos))} (n=${salvos.length})`);
console.log(`  stats incluindo o próprio dia ..... ${fmt(media(comVazamento))}  ← vazamento`);
console.log(`  leave-one-out atual do app (A/B) .. ${fmt(media(loo.map(x => x[0])))} / ${fmt(media(loo.map(x => x[1])))}  (ainda usa dias FUTUROS)\n`);

// 2) Rolling: cada concurso previsto só com o que veio antes dele.
console.log("2) PREVISÃO REAL (rolling: treina só no passado, prevê o próximo)");
const hitsA = [], hitsB = [];
for (let i = 30; i < ds.length; i++) {
  const st = m.analisarCorrelacaoDireta(ds.slice(0, i)).achados;
  const { planetas, cuspides } = m.obterMapaInterpretado(ds[i]);
  const sc = m.analisarMapa(planetas, cuspides, st);
  hitsA.push(acertos(m.top15PorPontuacao(sc), ds[i].resultado));
  hitsB.push(acertos(m.top15Formula70(sc), ds[i].resultado));
}
const se = dp(hitsA) / Math.sqrt(hitsA.length);
console.log(`  Motor A: ${fmt(media(hitsA))}  Motor B: ${fmt(media(hitsB))}  acaso: 9.000  (n=${hitsA.length}, z_A=${fmt((media(hitsA) - 9) / se, 2)})`);
console.log("  acertos | Motor A | esperado por acaso");
for (let k = 5; k <= 14; k++) {
  const obs = hitsA.filter(x => x === k).length, esp = hiper(k) * hitsA.length;
  if (obs || esp >= 0.5) console.log(`  ${String(k).padStart(7)} | ${String(obs).padStart(7)} | ${fmt(esp, 1).padStart(6)}`);
}
console.log();

// 3) Comparações múltiplas.
console.log("3) COMPARAÇÕES MÚLTIPLAS");
const mc = m.avaliarMultiplasComparacoes(H);
console.log(`  testes: ${mc.totalAchados} | |z|≥1,96: ${mc.sobrevivemPadrao} (esperado só por acaso ≈ ${Math.round(mc.totalAchados * 0.05)}) | Bonferroni: ${mc.sobrevivemBonferroni}\n`);

// 4) Permutação: embaralha resultados entre dias, mantém os mapas.
console.log(`4) TESTE DE PERMUTAÇÃO (walk-forward 5 janelas, ${nPerm} embaralhamentos)`);
const real = m.rodarWalkForward(H, 5).mediaGeral;
let seed = 7;
const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
const nulos = [];
for (let p = 0; p < nPerm; p++) {
  const res = ds.map(x => x.resultado);
  for (let i = res.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [res[i], res[j]] = [res[j], res[i]]; }
  nulos.push(m.rodarWalkForward(ds.map((x, i) => ({ ...x, resultado: res[i] })), 5).mediaGeral);
}
const pValor = (nulos.filter(v => v >= real).length + 1) / (nPerm + 1);
console.log(`  real: ${fmt(real)} | nulo: média ${fmt(media(nulos))}, dp ${fmt(dp(nulos))} | p-valor: ${fmt(pValor)}`);
console.log(pValor < 0.05 ? "  → acima do acaso" : "  → indistinguível do acaso");

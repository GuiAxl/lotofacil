// Autoteste científico: prova, com dados cujo resultado já sabemos, que o
// motor não inventa sinal, encontra sinal quando ele existe, não vaza o
// futuro e é determinístico. Roda no próprio navegador.
import { simular, prever } from "../quantico/motor.js";
import { relatorio } from "../estatistica/metricas.js";
import { rng, embaralhar } from "../estatistica/matematica.js";
import { hash53 } from "./integridade.js";

export function historicoSintetico({ n = 800, semente = 1, tipo = "acaso" } = {}) {
  const r = rng(semente);
  const base = Array.from({ length: n }, () => embaralhar(Array.from({ length: 25 }, (_, i) => i + 1), r).slice(0, 15).sort((a, b) => a - b));
  if (tipo === "acaso") return base;
  if (tipo === "memoria") {
    // A dezena 1 sai SE E SÓ SE a 2 saiu no concurso anterior. A frequência
    // da dezena 1 continua 60%: o padrão é puramente temporal.
    const out = [base[0]];
    for (let i = 1; i < n; i++) {
      let d = [...base[i]];
      const deveSair = out[i - 1].includes(2);
      if (deveSair && !d.includes(1)) { const sai = d[Math.floor(r() * 15)]; d = [...d.filter(x => x !== sai), 1]; }
      if (!deveSair && d.includes(1)) { const livres = Array.from({ length: 25 }, (_, k) => k + 1).filter(x => !d.includes(x) && x !== 1); d = [...d.filter(x => x !== 1), livres[Math.floor(r() * livres.length)]]; }
      out.push(d.sort((a, b) => a - b));
    }
    return out;
  }
  if (tipo === "viesFrequencia") // dezenas 1–3 sorteadas com mais chance
    return base.map(d => {
      let x = [...d];
      for (const alvo of [1, 2, 3]) if (!x.includes(alvo) && r() < 0.35) { const outros = x.filter(y => y > 3); const sai = outros[Math.floor(r() * outros.length)]; x = [...x.filter(y => y !== sai), alvo]; }
      return x.sort((a, b) => a - b);
    });
  return base;
}

const assinatura = res => hash53(res.registros.map(r => r.jogo.join(",") + ":" + r.probs.slice(1).map(p => p.toFixed(6)).join(",")).join("|"));

export async function executarAutoteste(onProgresso) {
  const testes = [];
  const passo = async (nome, descricao, fn) => {
    const t0 = Date.now();
    let ok = false, detalhe = "";
    try { [ok, detalhe] = fn(); } catch (e) { detalhe = `erro: ${e.message}`; }
    testes.push({ nome, descricao, ok, detalhe, ms: Date.now() - t0 });
    if (onProgresso) { onProgresso(testes.length); await new Promise(r => setTimeout(r, 0)); }
  };
  await passo("Controle negativo (acaso puro)", "Histórico 100% aleatório: o motor não pode acusar padrão.", () => {
    const res = simular(historicoSintetico({ semente: 11 }), { aquecimento: 100 });
    const rel = relatorio(res.registros), conf = prever(res.estado).confianca;
    return [conf < 0.8 && Math.abs(rel.zNW) < 3 && rel.phaseShift.p > 0.01, `confiança ${(conf * 100).toFixed(0)}%, z ${rel.zNW.toFixed(2)}, phase-shift p ${rel.phaseShift.p.toFixed(2)}`];
  });
  await passo("Placebo (ordem embaralhada)", "Histórico real com a ordem dos concursos embaralhada: padrões temporais precisam sumir.", () => {
    const res = simular(embaralhar(historicoSintetico({ semente: 12, tipo: "memoria" }), rng(5)), { aquecimento: 100 });
    const conf = prever(res.estado).confianca;
    return [conf < 0.9, `confiança ${(conf * 100).toFixed(0)}% (o padrão plantado foi destruído pelo embaralhamento)`];
  });
  await passo("Controle positivo (memória plantada)", "Padrão temporal plantado de propósito: o motor precisa encontrar.", () => {
    const res = simular(historicoSintetico({ semente: 13, tipo: "memoria" }), { aquecimento: 100 });
    const rel = relatorio(res.registros), conf = prever(res.estado).confianca;
    return [conf > 0.95 && rel.auc > 0.51, `confiança ${(conf * 100).toFixed(0)}%, AUC ${rel.auc.toFixed(3)}, acertos ${rel.acertosMedios.toFixed(3)}`];
  });
  await passo("Controle positivo (viés de frequência)", "Três dezenas favorecidas: o motor precisa encontrar.", () => {
    const res = simular(historicoSintetico({ semente: 14, tipo: "viesFrequencia" }), { aquecimento: 100 });
    const p = prever(res.estado);
    return [p.confianca > 0.95 && [1, 2, 3].every(n => p.jogo.includes(n)), `confiança ${(p.confianca * 100).toFixed(0)}%, 1–3 no jogo: ${[1, 2, 3].every(n => p.jogo.includes(n)) ? "sim" : "não"}`];
  });
  await passo("Vazamento de dados", "Alterar concursos FUTUROS não pode mudar nenhuma previsão do passado.", () => {
    const h = historicoSintetico({ semente: 15, n: 500 });
    const alterado = [...h.slice(0, 400), ...historicoSintetico({ semente: 99, n: 100 })];
    const a = simular(h, { aquecimento: 100 }).registros.slice(0, 300), b = simular(alterado, { aquecimento: 100 }).registros.slice(0, 300);
    const iguais = a.every((r, i) => r.probs.every((p, k) => p === b[i].probs[k]));
    return [iguais, iguais ? "as 300 previsões anteriores à alteração ficaram idênticas" : "previsões do passado mudaram"];
  });
  await passo("Determinismo", "Rodar duas vezes com os mesmos dados dá exatamente o mesmo resultado.", () => {
    const h = historicoSintetico({ semente: 16, n: 400 });
    const h1 = assinatura(simular(h, { aquecimento: 100 })), h2 = assinatura(simular(h, { aquecimento: 100 }));
    return [h1 === h2, `assinatura ${h1}`];
  });
  return { testes, aprovados: testes.filter(t => t.ok).length, total: testes.length, em: new Date().toISOString() };
}

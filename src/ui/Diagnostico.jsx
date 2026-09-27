// Diagnóstico científico de um replay (usado pelo motor Astral e pelo Quântico).
import { useState } from "react";
import { T, Card, Metrica, Tabela, Aviso } from "./base.jsx";
import { dec, pct } from "./estado.js";

function Calibracao({ cal }) {
  const [hover, setHover] = useState(null);
  const valores = cal.faixas.flatMap(f => [f.previsto, f.observado]);
  const min = Math.min(0.5, ...valores) - 0.01, max = Math.max(0.7, ...valores) + 0.01;
  const W = 260, H = 200, pad = 30;
  const x = v => pad + ((v - min) / (max - min)) * (W - pad - 8), y = v => H - pad - ((v - min) / (max - min)) * (H - pad - 8);
  const ticks = [min, (min + max) / 2, max].map(v => Math.round(v * 100) / 100);
  return (
    <div style={{ position: "relative", maxWidth: 360 }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%" }}>
        {ticks.map(v => <g key={v}>
          <line x1={x(v)} x2={x(v)} y1={8} y2={H - pad} stroke={T.borderSoft} />
          <line x1={pad} x2={W - 8} y1={y(v)} y2={y(v)} stroke={T.borderSoft} />
          <text x={x(v)} y={H - pad + 14} fill={T.textMuted} fontSize="9" textAnchor="middle">{pct(v)}</text>
          <text x={pad - 4} y={y(v) + 3} fill={T.textMuted} fontSize="9" textAnchor="end">{pct(v)}</text>
        </g>)}
        <line x1={x(min)} y1={y(min)} x2={x(max)} y2={y(max)} stroke={T.textMuted} strokeDasharray="4 3" />
        <polyline fill="none" stroke={T.serie1} strokeWidth="2" points={cal.faixas.map(f => `${x(f.previsto)},${y(f.observado)}`).join(" ")} />
        {cal.faixas.map((f, i) => <circle key={i} cx={x(f.previsto)} cy={y(f.observado)} r={hover === i ? 6 : 4.5} fill={T.serie1} stroke={T.surface} strokeWidth="2" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} />)}
        <text x={(W + pad) / 2} y={H - 2} fill={T.textSoft} fontSize="9.5" textAnchor="middle">probabilidade prevista</text>
      </svg>
      {hover != null && <div style={{ position: "absolute", top: 0, right: 0, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 8px", fontSize: 11.5, color: T.text }}>
        previsto {pct(cal.faixas[hover].previsto, 1)} · observado {pct(cal.faixas[hover].observado, 1)} · {cal.faixas[hover].n.toLocaleString("pt-BR")} casos
      </div>}
      <div style={{ fontSize: 11.5, color: T.textSoft }}>Linha tracejada = calibração perfeita (o que o motor diz = o que acontece).</div>
    </div>
  );
}

export default function Diagnostico({ rel, titulo = "Diagnóstico científico" }) {
  if (!rel) return null;
  // "Sinal" só quando os indicadores concordam — inclusive o e-processo, que
  // é válido mesmo olhando o placar a cada concurso.
  const sinal = rel.zNW > 2 && rel.phaseShift?.p < 0.05 && (rel.ganhoLogloss == null || rel.ganhoLogloss > 0) && (rel.eAcertos.rejeitaEm != null || rel.eVeross?.rejeitaEm != null);
  return (
    <Card titulo={titulo}>
      <Aviso tom={sinal ? "bom" : "alerta"}>
        {sinal
          ? "Os indicadores concordam: há vantagem estatística sobre o acaso neste replay."
          : "Os indicadores não mostram vantagem confiável sobre o acaso: z robusto, phase-shift, AUC e e-processos não concordam."}
      </Aviso>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <Metrica rotulo="Δ acertos por concurso" valor={`${rel.delta >= 0 ? "+" : ""}${dec(rel.delta, 3)}`} detalhe={rel.icBootstrap ? `IC95% bootstrap ${dec(rel.icBootstrap[0], 3)} a ${dec(rel.icBootstrap[1], 3)}` : ""} />
        <Metrica rotulo="z robusto (Newey-West)" valor={dec(rel.zNW, 2)} tom={rel.zNW > 2 ? "bom" : undefined} detalhe="> 2 para ser relevante" />
        {rel.ganhoBrier != null && <Metrica rotulo="Ganho de Brier" valor={`${dec(rel.ganhoBrier * 100, 3)}%`} tom={sinal ? "bom" : undefined} detalhe={rel.icGanhoBrier ? `IC95% ${dec(rel.icGanhoBrier[0] * 100, 3)}% a ${dec(rel.icGanhoBrier[1] * 100, 3)}%` : "sobre o nulo (0,24)"} />}
        {rel.ganhoLogloss != null && <Metrica rotulo="Ganho de log-loss" valor={dec(rel.ganhoLogloss * 1000, 3)} detalhe={rel.icGanhoLogloss ? `milinats/dezena · IC95% ${dec(rel.icGanhoLogloss[0] * 1000, 3)} a ${dec(rel.icGanhoLogloss[1] * 1000, 3)}` : "milinats por dezena"} tom={sinal ? "bom" : undefined} />}
        {rel.auc != null && <Metrica rotulo="AUC (ranqueamento)" valor={dec(rel.auc, 4)} detalhe={`${rel.icAuc ? `IC95% ${dec(rel.icAuc[0], 3)}–${dec(rel.icAuc[1], 3)} · ` : ""}recente ${dec(rel.aucRecente, 4)} · 0,5 = acaso`} />}
        <Metrica rotulo="E-processo (acertos)" valor={dec(rel.eAcertos.e, 2)} detalhe={`máximo ${dec(rel.eAcertos.max, 1)} · evidência ≥ 20`} tom={rel.eAcertos.rejeitaEm != null ? "bom" : undefined} />
        {rel.eVeross && <Metrica rotulo="E-processo (verossimilhança)" valor={rel.eVeross.e < 1000 ? dec(rel.eVeross.e, 2) : rel.eVeross.e.toExponential(1)} detalhe={`máximo ${dec(rel.eVeross.max, 1)} · evidência ≥ 20`} tom={rel.eVeross.rejeitaEm != null ? "bom" : undefined} />}
        {rel.phaseShift && <Metrica rotulo="Phase-shift" valor={`p ${dec(rel.phaseShift.p, 3)}`} detalhe={`vence ${pct(rel.phaseShift.vitorias)} dos desalinhados`} tom={rel.phaseShift.p < 0.05 ? "bom" : undefined} />}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <div>
          <Tabela colunas={[
            { id: "nome", titulo: "Robustez" },
            { id: "valor", titulo: "", alinhar: "right", mono: true },
          ]} linhas={[
            { __id: 1, nome: "Concursos avaliados", valor: rel.n.toLocaleString("pt-BR") },
            { __id: 2, nome: "Quartis temporais (Δ acertos)", valor: rel.quartis.map(q => dec(q, 3)).join(" · ") },
            { __id: 3, nome: "Pior quartil", valor: dec(rel.piorQuartil, 3) },
            ...rel.janelas.map(j => ({ __id: `j${j.tamanho}`, nome: `Janela móvel de ${j.tamanho}: pior | melhor`, valor: `${dec(j.pior, 2)} | ${dec(j.melhor, 2)} (${pct(j.taxaPositiva)} positivas)` })),
            { __id: 4, nome: "Máximo drawdown acumulado", valor: `${dec(rel.drawdown, 0)} acertos` },
            { __id: 41, nome: "Alarmes de drift (Page-Hinkley)", valor: rel.drift.alarmes ? `${rel.drift.alarmes} · último: ${rel.drift.ultimo.direcao} no ${rel.drift.ultimo.concurso}` : "nenhum" },
            { __id: 5, nome: "Concursos com Δ > 0 / Δ ≥ 0", valor: `${pct(rel.taxaDeltaPositivo)} / ${pct(rel.taxaDeltaNaoNegativo)}` },
            { __id: 6, nome: "Melhor / pior resultado", valor: `${rel.melhor} / ${rel.pior}` },
            ...(rel.calibracao ? [
              { __id: 7, nome: "Calibração ECE / MCE", valor: `${dec(rel.calibracao.ece * 100, 2)}% / ${dec(rel.calibracao.mce * 100, 2)}%` },
              { __id: 8, nome: "Inclinação / intercepto (ideal 1 / 0)", valor: `${dec(rel.calibracao.inclinacao, 2)} / ${dec(rel.calibracao.intercepto, 3)}` },
              { __id: 9, nome: "Nitidez (amplitude 5–95%)", valor: pct(rel.calibracao.nitidez, 2) },
            ] : []),
          ]} />
        </div>
        {rel.calibracao && <Calibracao cal={rel.calibracao} />}
      </div>
    </Card>
  );
}

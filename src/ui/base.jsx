import { useState } from "react";
import { formatarNum, pct, dec } from "./estado.js";
import { hipergeometrica } from "../estatistica/matematica.js";

export const T = {
  bg: "#0A0D16", surface: "#141826", surface2: "#1B2033", border: "#2A3049", borderSoft: "#20263A",
  gold: "#D4AF5F", goldSoft: "#D4AF5F22", goldText: "#E8C878",
  text: "#ECEAF3", textSoft: "#B7B5C6", textMuted: "#7D7B91",
  serie1: "#3987e5", serie2: "#d95926",
  bom: "#3FB27F", bomSoft: "#3FB27F22", alerta: "#E0A93B", alertaSoft: "#E0A93B22", ruim: "#E26D6D", ruimSoft: "#E26D6D22",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  sans: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  serif: "'Cormorant Garamond', Georgia, serif",
};

export function Card({ children, style, titulo, acao }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 16, marginBottom: 14, ...style }}>
      {(titulo || acao) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          {titulo && <div style={{ fontFamily: T.serif, fontSize: 20, color: T.goldText }}>{titulo}</div>}
          {acao}
        </div>
      )}
      {children}
    </div>
  );
}

export function Botao({ children, onClick, variante = "primario", disabled, pequeno, style, title }) {
  const v = {
    primario: { background: T.gold, color: "#1A1408", border: `1px solid ${T.gold}` },
    secundario: { background: "transparent", color: T.goldText, border: `1px solid ${T.gold}66` },
    discreto: { background: T.surface2, color: T.textSoft, border: `1px solid ${T.border}` },
    perigo: { background: "transparent", color: T.ruim, border: `1px solid ${T.ruim}66` },
  }[variante];
  return (
    <button title={title} onClick={onClick} disabled={disabled}
      style={{ ...v, borderRadius: 9, padding: pequeno ? "5px 10px" : "9px 16px", fontSize: pequeno ? 12 : 13.5, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: T.sans, ...style }}>
      {children}
    </button>
  );
}

export function Chip({ children, tom = "neutro", title }) {
  const cores = {
    neutro: [T.surface2, T.textSoft, T.border], ouro: [T.goldSoft, T.goldText, `${T.gold}55`],
    bom: [T.bomSoft, T.bom, `${T.bom}55`], alerta: [T.alertaSoft, T.alerta, `${T.alerta}55`], ruim: [T.ruimSoft, T.ruim, `${T.ruim}55`],
  }[tom];
  return <span title={title} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: cores[0], color: cores[1], border: `1px solid ${cores[2]}`, borderRadius: 999, padding: "2px 9px", fontSize: 11.5, fontWeight: 600, whiteSpace: "nowrap" }}>{children}</span>;
}

export function Rotulo({ children }) {
  return <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: T.textMuted, marginBottom: 6, fontWeight: 600 }}>{children}</div>;
}

export const estiloInput = { width: "100%", boxSizing: "border-box", background: T.bg, color: T.text, border: `1px solid ${T.border}`, borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: T.sans, outline: "none" };

export function Bolinhas({ numeros, destaque, tamanho = 26, onClick }) {
  const set = destaque ? new Set(destaque) : null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {numeros.map(n => {
        const acerto = set?.has(n);
        return (
          <span key={n} onClick={onClick ? () => onClick(n) : undefined}
            style={{ width: tamanho, height: tamanho, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: T.mono, fontSize: tamanho * 0.42, fontWeight: 700,
              cursor: onClick ? "pointer" : "default",
              background: set ? (acerto ? T.bom : T.surface2) : T.goldSoft, color: set ? (acerto ? "#08140E" : T.textMuted) : T.goldText,
              border: `1px solid ${set ? (acerto ? T.bom : T.border) : `${T.gold}55`}` }}>
            {formatarNum(n)}
          </span>
        );
      })}
    </div>
  );
}

export function Metrica({ rotulo, valor, detalhe, tom }) {
  const cor = { bom: T.bom, ruim: T.ruim, alerta: T.alerta }[tom] || T.text;
  return (
    <div style={{ background: T.surface2, border: `1px solid ${T.borderSoft}`, borderRadius: 11, padding: "10px 12px", minWidth: 120, flex: "1 1 120px" }}>
      <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 3 }}>{rotulo}</div>
      <div style={{ fontFamily: T.mono, fontSize: 21, fontWeight: 700, color: cor }}>{valor}</div>
      {detalhe && <div style={{ fontSize: 11, color: T.textSoft, marginTop: 2 }}>{detalhe}</div>}
    </div>
  );
}

// Probabilidade de cada número (1–25), com a linha de referência de 60%.
export function BarrasProbabilidade({ probs, jogo, onSelecionar, selecionado }) {
  const [hover, setHover] = useState(null);
  const escolhidos = new Set(jogo || []);
  // Escala centrada em 60%, ajustada ao maior desvio (mínimo ±2 pontos),
  // para diferenças pequenas ficarem visíveis — o tooltip mostra o valor real.
  const desvioMax = Math.max(0.02, ...probs.slice(1).filter(Number.isFinite).map(p => Math.abs(p - 0.6))) * 1.15;
  const max = 0.6 + desvioMax, min = 0.6 - desvioMax;
  const y = v => 100 - ((v - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ position: "relative", height: 150, display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, alignItems: "end", paddingTop: 6 }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: `${y(0.6)}%`, borderTop: `1px dashed ${T.textMuted}`, pointerEvents: "none" }}>
        </div>
        {Array.from({ length: 25 }, (_, i) => i + 1).map(n => {
          const p = probs[n];
          const topo = y(Math.max(p, 0.6)), base = y(Math.min(p, 0.6));
          return (
            <div key={n} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(null)} onClick={() => onSelecionar?.(n)}
              style={{ position: "relative", height: "100%", cursor: "pointer" }}>
              <div style={{ position: "absolute", left: "15%", right: "15%", top: `${topo}%`, height: `${Math.max(1.5, base - topo)}%`,
                background: escolhidos.has(n) ? T.serie1 : T.textMuted, opacity: selecionado && selecionado !== n ? 0.45 : 1,
                borderRadius: p >= 0.6 ? "4px 4px 0 0" : "0 0 4px 4px" }} />
              {hover === n && (
                <div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 8px", fontSize: 11.5, color: T.text, whiteSpace: "nowrap", zIndex: 5, fontFamily: T.mono }}>
                  nº {formatarNum(n)} · {pct(p, 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, marginTop: 4 }}>
        {Array.from({ length: 25 }, (_, i) => i + 1).map(n => (
          <div key={n} style={{ textAlign: "center", fontFamily: T.mono, fontSize: 10, color: escolhidos.has(n) ? T.text : T.textMuted, fontWeight: escolhidos.has(n) ? 700 : 400 }}>{formatarNum(n)}</div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11.5, color: T.textSoft, flexWrap: "wrap" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie1, borderRadius: 2, marginRight: 5 }} />escolhido (top 15)</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.textMuted, borderRadius: 2, marginRight: 5 }} />fora do jogo</span>
        <span><span style={{ display: "inline-block", width: 14, borderTop: `1px dashed ${T.textMuted}`, marginRight: 5, verticalAlign: "middle" }} />60% (acaso) · escala ±{pct(desvioMax, 1)}</span>
      </div>
    </div>
  );
}

// Distribuição de acertos observada × esperada pelo acaso (hipergeométrica).
export function DistribuicaoAcertos({ acertos }) {
  const [hover, setHover] = useState(null);
  const n = acertos.length;
  const faixa = Array.from({ length: 10 }, (_, i) => i + 5);
  const obs = faixa.map(k => acertos.filter(a => a === k).length);
  const esp = faixa.map(k => hipergeometrica(k) * n);
  const max = Math.max(1, ...obs, ...esp);
  return (
    <div>
      <div style={{ display: "flex", gap: 14, fontSize: 11.5, color: T.textSoft, marginBottom: 8 }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie1, borderRadius: 2, marginRight: 5 }} />observado</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie2, borderRadius: 2, marginRight: 5 }} />esperado por acaso</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${faixa.length}, 1fr)`, gap: 6, height: 130, alignItems: "end" }}>
        {faixa.map((k, i) => (
          <div key={k} onMouseEnter={() => setHover(k)} onMouseLeave={() => setHover(null)} style={{ position: "relative", height: "100%", display: "flex", gap: 2, alignItems: "flex-end", justifyContent: "center" }}>
            <div style={{ width: "40%", height: `${(obs[i] / max) * 100}%`, background: T.serie1, borderRadius: "4px 4px 0 0", minHeight: obs[i] ? 2 : 0 }} />
            <div style={{ width: "40%", height: `${(esp[i] / max) * 100}%`, background: T.serie2, borderRadius: "4px 4px 0 0", minHeight: esp[i] >= 0.05 ? 2 : 0 }} />
            {hover === k && (
              <div style={{ position: "absolute", bottom: "100%", background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 8px", fontSize: 11.5, whiteSpace: "nowrap", zIndex: 5, color: T.text }}>
                {k} acertos · observado {obs[i]} · esperado {dec(esp[i], 1)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${faixa.length}, 1fr)`, gap: 6, marginTop: 4 }}>
        {faixa.map(k => <div key={k} style={{ textAlign: "center", fontSize: 11, color: T.textMuted, fontFamily: T.mono }}>{k}</div>)}
      </div>
    </div>
  );
}

// Linha simples (0–1) com tooltip por ponto.
export function LinhaTempo({ pontos, rotuloY = "" }) {
  const [hover, setHover] = useState(null);
  if (!pontos.length) return <div style={{ color: T.textMuted, fontSize: 13 }}>Sem dados ainda.</div>;
  const W = 600, H = 120, px = i => (pontos.length === 1 ? W / 2 : (i / (pontos.length - 1)) * W), py = v => H - v * H;
  const d = pontos.map((p, i) => `${i ? "L" : "M"}${px(i).toFixed(1)},${py(p.valor).toFixed(1)}`).join(" ");
  return (
    <div style={{ position: "relative" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: 130, overflow: "visible" }} preserveAspectRatio="none"
        onMouseLeave={() => setHover(null)}
        onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); const i = Math.round(((e.clientX - r.left) / r.width) * (pontos.length - 1)); setHover(Math.max(0, Math.min(pontos.length - 1, i))); }}>
        {[0, 0.5, 1].map(v => <line key={v} x1={0} x2={W} y1={py(v)} y2={py(v)} stroke={T.borderSoft} strokeWidth={1} vectorEffect="non-scaling-stroke" />)}
        <path d={d} fill="none" stroke={T.serie1} strokeWidth={2} vectorEffect="non-scaling-stroke" />
        {hover != null && <line x1={px(hover)} x2={px(hover)} y1={0} y2={H} stroke={T.textMuted} strokeWidth={1} vectorEffect="non-scaling-stroke" />}
      </svg>
      {hover != null && (
        <div style={{ position: "absolute", top: 0, left: `${(px(hover) / W) * 100}%`, transform: "translateX(-50%)", background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 8px", fontSize: 11.5, color: T.text, whiteSpace: "nowrap", pointerEvents: "none" }}>
          concurso {pontos[hover].rotulo} · {rotuloY} {pct(pontos[hover].valor)}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: T.textMuted, fontFamily: T.mono }}>
        <span>{pontos[0].rotulo}</span><span>{pontos[pontos.length - 1].rotulo}</span>
      </div>
    </div>
  );
}

export function Tabela({ colunas, linhas, vazio = "Nada para mostrar." }) {
  if (!linhas.length) return <div style={{ color: T.textMuted, fontSize: 13, padding: 8 }}>{vazio}</div>;
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
        <thead>
          <tr>{colunas.map(c => <th key={c.id} style={{ textAlign: c.alinhar || "left", padding: "7px 8px", color: T.textMuted, fontWeight: 600, borderBottom: `1px solid ${T.border}`, whiteSpace: "nowrap", fontSize: 11.5 }}>{c.titulo}</th>)}</tr>
        </thead>
        <tbody>
          {linhas.map((l, i) => (
            <tr key={l.__id ?? i} style={{ borderBottom: `1px solid ${T.borderSoft}` }}>
              {colunas.map(c => <td key={c.id} style={{ padding: "7px 8px", textAlign: c.alinhar || "left", color: T.text, fontFamily: c.mono ? T.mono : T.sans, verticalAlign: "top" }}>{c.render ? c.render(l) : l[c.id]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Aviso({ tom = "alerta", children }) {
  const c = { alerta: [T.alertaSoft, T.alerta], ruim: [T.ruimSoft, T.ruim], bom: [T.bomSoft, T.bom], info: [T.goldSoft, T.goldText] }[tom];
  return <div style={{ background: c[0], border: `1px solid ${c[1]}55`, color: T.text, borderRadius: 10, padding: "9px 12px", fontSize: 13, marginBottom: 10, lineHeight: 1.45 }}>{children}</div>;
}

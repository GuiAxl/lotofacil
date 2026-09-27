import { useState } from "react";
import { T, Card, Botao, Aviso, Rotulo, estiloInput } from "./base.jsx";
import { mesclarComInicial } from "./estado.js";

export default function AbaBackup({ app, acoes }) {
  const [texto, setTexto] = useState("");
  const [msg, setMsg] = useState(null);
  const exportado = JSON.stringify(app);

  const baixar = () => {
    try {
      const url = URL.createObjectURL(new Blob([exportado], { type: "application/json" }));
      const a = document.createElement("a");
      a.href = url; a.download = `lotofacil-astro-v13-${new Date().toISOString().slice(0, 10)}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch { setMsg({ tom: "alerta", txt: "Download bloqueado aqui. Copie o texto abaixo." }); }
  };
  const copiar = async () => {
    try { await navigator.clipboard.writeText(exportado); setMsg({ tom: "bom", txt: "Backup copiado." }); }
    catch { setMsg({ tom: "alerta", txt: "Não consegui copiar. Selecione o texto abaixo manualmente." }); }
  };
  const importar = () => {
    try {
      const obj = JSON.parse(texto);
      if (!obj || !Array.isArray(obj.resultados)) throw new Error("Formato inválido");
      acoes.substituirTudo(mesclarComInicial(obj));
      setMsg({ tom: "bom", txt: "Backup restaurado." }); setTexto("");
    } catch (e) { setMsg({ tom: "ruim", txt: `Não foi possível importar: ${e.message}` }); }
  };

  return (
    <>
      {msg && <Aviso tom={msg.tom}>{msg.txt}</Aviso>}
      <Card titulo="Exportar">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Tudo: resultados, mapas, hipóteses e diário. Guarde uma cópia depois de importar muitos mapas.</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Botao onClick={baixar}>Baixar .json</Botao>
          <Botao variante="secundario" onClick={copiar}>Copiar</Botao>
        </div>
        <textarea readOnly rows={4} value={exportado} style={{ ...estiloInput, fontFamily: T.mono, fontSize: 11, marginTop: 10 }} />
      </Card>
      <Card titulo="Restaurar">
        <Rotulo>Cole um backup do v13</Rotulo>
        <textarea rows={6} value={texto} onChange={e => setTexto(e.target.value)} style={{ ...estiloInput, fontFamily: T.mono, fontSize: 11 }} />
        <div style={{ marginTop: 10 }}><Botao disabled={!texto.trim()} onClick={importar}>Restaurar (substitui o atual)</Botao></div>
      </Card>
      <Card titulo="Configuração do motor">
        <label style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: T.text, cursor: "pointer" }}>
          <input type="checkbox" checked={app.config.usarLentos} onChange={e => acoes.config({ usarLentos: e.target.checked })} />
          <span>Usar sinais de corpos lentos (signo/grau/dignidade de Júpiter a Plutão, Nodo, Lilith, Quíron).<br />
            <span style={{ color: T.textMuted }}>Desligado por padrão: ficam meses iguais, então 100 dias seguidos contam como 1 observação de verdade, e isso engana a estatística.</span></span>
        </label>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12, fontSize: 13, color: T.text }}>
          Mapas de treino antes de começar a medir:
          <select value={app.config.minTreino} onChange={e => acoes.config({ minTreino: Number(e.target.value) })} style={{ background: T.bg, color: T.text, border: `1px solid ${T.border}`, borderRadius: 8, padding: "6px 8px" }}>
            {[20, 30, 50, 80].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </Card>
      <Card titulo="Zerar">
        <Botao variante="perigo" onClick={() => { if (confirm("Apagar mapas, hipóteses e diário? Os resultados oficiais embutidos continuam.")) acoes.zerar(); }}>Apagar tudo que foi adicionado</Botao>
      </Card>
    </>
  );
}

import { useState } from "react";
import { T, Card, Botao, Aviso, Rotulo, estiloInput } from "./base.jsx";
import { mesclarComInicial } from "./estado.js";

export default function AbaBackup({ app, acoes }) {
  const [texto, setTexto] = useState("");
  const [msg, setMsg] = useState(null);
  const [confirmar, setConfirmar] = useState(false);
  const exportado = JSON.stringify({ versao: app.versao, resultados: app.resultados.filter(r => r.adicionadoEm), mapas: app.mapas, correcoes: app.correcoes, config: app.config });

  const baixar = () => {
    try {
      const url = URL.createObjectURL(new Blob([exportado], { type: "application/json" }));
      const a = document.createElement("a");
      a.href = url; a.download = `lotofacil-astro-${new Date().toISOString().slice(0, 10)}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch { setMsg({ tom: "alerta", txt: "Download bloqueado aqui. Use Copiar." }); }
  };
  const copiar = async () => {
    try { await navigator.clipboard.writeText(exportado); setMsg({ tom: "bom", txt: "Backup copiado." }); }
    catch { setMsg({ tom: "alerta", txt: "Não consegui copiar. Selecione o texto abaixo manualmente." }); }
  };
  const importar = () => {
    try {
      const obj = JSON.parse(texto);
      if (!obj || (!obj.mapas && !Array.isArray(obj.resultados))) throw new Error("formato inválido");
      acoes.substituirTudo(mesclarComInicial(obj));
      setMsg({ tom: "bom", txt: `Backup restaurado: ${Object.keys(obj.mapas || {}).length} mapas.` }); setTexto("");
    } catch (e) { setMsg({ tom: "ruim", txt: `Não foi possível importar: ${e.message}` }); }
  };
  const lerArquivo = e => { const f = e.target.files?.[0]; if (f) f.text().then(setTexto); };

  return (
    <>
      {msg && <Aviso tom={msg.tom}>{msg.txt}</Aviso>}
      <Card titulo="Exportar">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Mapas (com data e hora) e sorteios que você adicionou.</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Botao onClick={baixar}>Baixar arquivo</Botao>
          <Botao variante="secundario" onClick={copiar}>Copiar</Botao>
        </div>
      </Card>
      <Card titulo="Importar">
        <input type="file" accept=".json,application/json" onChange={lerArquivo} style={{ color: T.textSoft, fontSize: 13, marginBottom: 10 }} />
        <Rotulo>ou cole o backup</Rotulo>
        <textarea rows={5} value={texto} onChange={e => setTexto(e.target.value)} style={{ ...estiloInput, fontFamily: T.mono, fontSize: 11 }} />
        <div style={{ marginTop: 10 }}><Botao disabled={!texto.trim()} onClick={importar}>Importar (substitui o atual)</Botao></div>
      </Card>
      <Card titulo="Apagar mapas">
        {!confirmar
          ? <Botao variante="perigo" onClick={() => setConfirmar(true)}>Apagar todos os mapas</Botao>
          : <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: T.ruim }}>Apagar {Object.keys(app.mapas).length} mapas?</span>
              <Botao variante="perigo" onClick={() => { acoes.apagarMapas(); setConfirmar(false); setMsg({ tom: "bom", txt: "Mapas apagados." }); }}>Confirmar</Botao>
              <Botao variante="discreto" onClick={() => setConfirmar(false)}>Cancelar</Botao>
            </div>}
      </Card>
    </>
  );
}

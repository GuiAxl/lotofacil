import { useState, useMemo } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, Tabela, Aviso, Metrica, estiloInput } from "./base.jsx";
import { interpretarMapa, parseNumeros, validarResultado } from "./estado.js";
import { dividirMapasEmLote } from "../astro/parser.js";

export default function AbaHistorico({ app, acoes, abrirConcurso }) {
  const [novo, setNovo] = useState({ concurso: "", data: "", numeros: "" });
  const [lote, setLote] = useState("");
  const [relatorioLote, setRelatorioLote] = useState(null);
  const [filtro, setFiltro] = useState("todos");
  const [limite, setLimite] = useState(40);

  const numerosNovo = parseNumeros(novo.numeros);
  const jaExisteOficial = app.resultados.some(r => r.concurso === Number(novo.concurso));
  const podeSalvar = Number(novo.concurso) > 0 && !jaExisteOficial && validarResultado(numerosNovo) && /^\d{2}\/\d{2}\/\d{4}$/.test(novo.data);
  const [corrigindo, setCorrigindo] = useState(null); // { concurso, numeros, motivo }
  const numerosCorrecao = corrigindo ? parseNumeros(corrigindo.numeros) : [];
  const correcoes = Object.entries(app.correcoes || {});

  const linhas = useMemo(() => {
    const porConcurso = new Map(app.resultados.map(r => [r.concurso, r]));
    const todos = new Set([...porConcurso.keys(), ...Object.keys(app.mapas).map(Number)]);
    return [...todos].sort((a, b) => b - a).map(c => {
      const r = porConcurso.get(c);
      const m = app.mapas[c];
      return { __id: c, concurso: c, data: r?.data || m?.data || "", resultado: r?.resultado, corrigido: r?.corrigido, mapa: m, get leitura() { return m ? interpretarMapa(m.texto) : null; } };
    });
  }, [app.resultados, app.mapas]);

  const filtradas = linhas.filter(l => filtro === "todos" || (filtro === "comMapa" && l.mapa) || (filtro === "semMapa" && !l.mapa) || (filtro === "comErro" && l.leitura && !l.leitura.mapa.completo));
  const nMapas = linhas.filter(l => l.mapa).length, nOk = linhas.filter(l => l.leitura?.mapa.completo).length;

  const analisarLote = () => {
    const blocos = dividirMapasEmLote(lote);
    setRelatorioLote(blocos.map(b => {
      const { mapa, sinais } = interpretarMapa(b.texto);
      return { ...b, completo: mapa.completo, avisos: mapa.avisos.length, sinais: sinais.length, jaExiste: !!app.mapas[b.concurso] };
    }));
  };
  const importarLote = () => {
    acoes.importarMapas(relatorioLote.map(b => ({ concurso: b.concurso, texto: b.texto })));
    setRelatorioLote(null); setLote("");
  };

  return (
    <>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <Metrica rotulo="Concursos com resultado" valor={app.resultados.length} />
        <Metrica rotulo="Mapas salvos" valor={nMapas} />
        <Metrica rotulo="Mapas completos" valor={nOk} tom={nOk === nMapas ? "bom" : "alerta"} detalhe="só estes entram no motor" />
      </div>

      <Card titulo="Adicionar resultado">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
          <div><Rotulo>Concurso</Rotulo><input style={estiloInput} value={novo.concurso} onChange={e => setNovo({ ...novo, concurso: e.target.value.replace(/\D/g, "") })} /></div>
          <div><Rotulo>Data</Rotulo><input style={estiloInput} placeholder="dd/mm/aaaa" value={novo.data} onChange={e => setNovo({ ...novo, data: e.target.value })} /></div>
        </div>
        <div style={{ marginTop: 10 }}>
          <Rotulo>15 dezenas ({numerosNovo.length}/15)</Rotulo>
          <input style={{ ...estiloInput, fontFamily: T.mono }} placeholder="01 02 04 05 …" value={novo.numeros} onChange={e => setNovo({ ...novo, numeros: e.target.value })} />
        </div>
        {numerosNovo.length > 0 && <div style={{ marginTop: 8 }}><Bolinhas numeros={numerosNovo} tamanho={24} /></div>}
        <div style={{ marginTop: 10 }}>
          <Botao disabled={!podeSalvar} onClick={() => { acoes.salvarResultado(Number(novo.concurso), novo.data, numerosNovo); setNovo({ concurso: "", data: "", numeros: "" }); }}>Salvar resultado</Botao>
          {jaExisteOficial && <div style={{ fontSize: 12.5, color: T.alerta, marginTop: 6 }}>Este concurso já existe. Para mudar o resultado, use "Corrigir" na lista abaixo.</div>}
        </div>
      </Card>

      <Card titulo="Importar mapas em lote">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 8, lineHeight: 1.5 }}>
          Cole vários mapas em inglês, cada um precedido de uma linha com o número do concurso: <code style={{ fontFamily: T.mono, color: T.goldText }}>#3650</code>, <code style={{ fontFamily: T.mono, color: T.goldText }}>Concurso 3650</code> ou <code style={{ fontFamily: T.mono, color: T.goldText }}>3650:</code>
        </div>
        <textarea rows={8} value={lote} onChange={e => { setLote(e.target.value); setRelatorioLote(null); }} style={{ ...estiloInput, fontFamily: T.mono, fontSize: 12 }} placeholder={"#3650\nSun in Aries 10°12’, in 6th House\n…\n\n#3651\n…"} />
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <Botao variante="secundario" disabled={!lote.trim()} onClick={analisarLote}>Conferir</Botao>
          {relatorioLote?.length > 0 && <Botao onClick={importarLote}>Importar {relatorioLote.length} mapas</Botao>}
        </div>
        {relatorioLote && (
          <div style={{ marginTop: 12 }}>
            {!relatorioLote.length && <Aviso>Nenhum cabeçalho de concurso encontrado.</Aviso>}
            <Tabela colunas={[
              { id: "concurso", titulo: "Concurso", mono: true },
              { id: "status", titulo: "Leitura", render: l => (l.completo ? <Chip tom="bom">completo</Chip> : <Chip tom="ruim">incompleto</Chip>) },
              { id: "avisos", titulo: "Avisos", alinhar: "right", mono: true },
              { id: "sinais", titulo: "Sinais", alinhar: "right", mono: true },
              { id: "ja", titulo: "", render: l => (l.jaExiste ? <Chip tom="alerta">substitui o salvo</Chip> : null) },
            ]} linhas={relatorioLote.map(l => ({ ...l, __id: l.concurso }))} />
          </div>
        )}
      </Card>

      {corrigindo && (
        <Card titulo={`Corrigir o concurso ${corrigindo.concurso}`}>
          <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 8 }}>A correção fica registrada com motivo e data, o resultado original é preservado, e todo o aprendizado, o placar e o diário são recalculados.</div>
          <Rotulo>Dezenas corretas ({numerosCorrecao.length}/15)</Rotulo>
          <input style={{ ...estiloInput, fontFamily: T.mono }} value={corrigindo.numeros} onChange={e => setCorrigindo({ ...corrigindo, numeros: e.target.value })} />
          <div style={{ marginTop: 8 }}><Rotulo>Motivo</Rotulo><input style={estiloInput} value={corrigindo.motivo} placeholder="ex.: conferido no site da Caixa" onChange={e => setCorrigindo({ ...corrigindo, motivo: e.target.value })} /></div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <Botao disabled={!validarResultado(numerosCorrecao) || !corrigindo.motivo.trim() || numerosCorrecao.join() === (app.resultados.find(r => r.concurso === corrigindo.concurso)?.resultado || []).join()} onClick={() => { acoes.corrigirResultado(corrigindo.concurso, numerosCorrecao, corrigindo.motivo.trim()); setCorrigindo(null); }}>Aplicar correção</Botao>
            <Botao variante="discreto" onClick={() => setCorrigindo(null)}>Cancelar</Botao>
          </div>
        </Card>
      )}
      {correcoes.length > 0 && (
        <Card titulo="Correções aplicadas">
          <Tabela colunas={[
            { id: "concurso", titulo: "Concurso", mono: true },
            { id: "de", titulo: "Original → corrigido", render: l => <div><div style={{ fontFamily: T.mono, fontSize: 12, color: T.textMuted, textDecoration: "line-through" }}>{(l.original || []).join(" ")}</div><div style={{ fontFamily: T.mono, fontSize: 12 }}>{l.resultado.join(" ")}</div></div> },
            { id: "motivo", titulo: "Motivo", render: l => <div>{l.motivo}<div style={{ fontSize: 11, color: T.textMuted }}>{new Date(l.em).toLocaleString("pt-BR")}</div></div> },
            { id: "x", titulo: "", render: l => <Botao pequeno variante="perigo" onClick={() => acoes.removerCorrecao(l.concurso)}>Desfazer</Botao> },
          ]} linhas={correcoes.map(([c, v]) => ({ __id: c, concurso: Number(c), ...v }))} />
        </Card>
      )}

      <Card titulo="Concursos" acao={
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {[["todos", "Todos"], ["comMapa", "Com mapa"], ["semMapa", "Sem mapa"], ["comErro", "Mapa com erro"]].map(([id, r]) => (
            <Botao key={id} pequeno variante={filtro === id ? "secundario" : "discreto"} onClick={() => setFiltro(id)}>{r}</Botao>
          ))}
        </div>
      }>
        <Tabela colunas={[
          { id: "concurso", titulo: "Concurso", mono: true },
          { id: "data", titulo: "Data", mono: true },
          { id: "resultado", titulo: "Resultado", render: l => (l.resultado ? <div><Bolinhas numeros={l.resultado} tamanho={21} />{l.corrigido && <div style={{ marginTop: 4 }}><Chip tom="alerta">corrigido</Chip></div>}</div> : <Chip tom="ouro">aguardando</Chip>) },
          { id: "mapa", titulo: "Mapa", render: l => (!l.mapa ? <span style={{ color: T.textMuted }}>—</span> : l.leitura.mapa.completo ? <Chip tom={l.leitura.mapa.avisos.length ? "alerta" : "bom"}>{l.leitura.mapa.avisos.length ? `${l.leitura.mapa.avisos.length} avisos` : "✓"}</Chip> : <Chip tom="ruim">erro</Chip>) },
          { id: "acoes", titulo: "", render: l => (
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {l.resultado && <Botao pequeno variante="discreto" onClick={() => setCorrigindo({ concurso: l.concurso, numeros: l.resultado.join(" "), motivo: "" })}>Corrigir</Botao>}
              <Botao pequeno variante="discreto" onClick={() => abrirConcurso(l.concurso)}>{l.mapa ? "Abrir" : "Colar mapa"}</Botao>
              {l.mapa && <Botao pequeno variante="perigo" onClick={() => { if (confirm(`Remover o mapa do concurso ${l.concurso}?`)) acoes.removerMapa(l.concurso); }}>Remover mapa</Botao>}
            </div>
          ) },
        ]} linhas={filtradas.slice(0, limite)} />
        {filtradas.length > limite && <div style={{ textAlign: "center", marginTop: 10 }}><Botao variante="discreto" pequeno onClick={() => setLimite(limite + 60)}>Mostrar mais ({filtradas.length - limite})</Botao></div>}
      </Card>
    </>
  );
}

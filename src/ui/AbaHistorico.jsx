import { useState, useMemo } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, Metrica, Tabela, Aviso, estiloInput } from "./base.jsx";
import { interpretarMapa, dec } from "./estado.js";
import { dividirMapasEmLote } from "../astro/parser.js";

const corAcertos = a => (a == null ? T.textMuted : a >= 11 ? T.bom : a >= 9 ? T.goldText : T.textSoft);

function CartaoConcurso({ item, abrir, remover }) {
  const [aberto, setAberto] = useState(false);
  const [confirmar, setConfirmar] = useState(false);
  const { concurso, data, hora, resultado, jogo, acertos, completo } = item;
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 14px", marginBottom: 8 }}>
      <div onClick={() => setAberto(!aberto)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, cursor: "pointer", flexWrap: "wrap" }}>
        <div>
          <span style={{ fontFamily: T.serif, fontSize: 18, color: T.text }}>Concurso {concurso}</span>
          <span style={{ color: T.textMuted, fontSize: 12, marginLeft: 8 }}>{data || "sem data"}{hora ? ` · ${hora}` : ""}</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {!completo && <Chip tom="ruim">mapa incompleto</Chip>}
          {completo && acertos == null && <Chip tom="ouro">aguardando sorteio</Chip>}
          {acertos != null && <span style={{ fontFamily: T.mono, fontSize: 16, fontWeight: 700, color: corAcertos(acertos) }}>{acertos} <span style={{ fontSize: 11.5, fontWeight: 400, color: T.textMuted, fontFamily: T.sans }}>acertos</span></span>}
          <span style={{ color: T.textMuted }}>{aberto ? "▴" : "▾"}</span>
        </div>
      </div>
      {aberto && (
        <div style={{ marginTop: 12 }}>
          {jogo && <><Rotulo>Jogo do motor</Rotulo><Bolinhas numeros={jogo} destaque={resultado} tamanho={26} /></>}
          {resultado && <div style={{ marginTop: 10 }}><Rotulo>Sorteio</Rotulo><Bolinhas numeros={resultado} tamanho={26} /></div>}
          <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
            <Botao pequeno variante="discreto" onClick={() => abrir(concurso)}>Abrir mapa</Botao>
            {!confirmar
              ? <Botao pequeno variante="perigo" onClick={() => setConfirmar(true)}>Remover mapa</Botao>
              : <><Botao pequeno variante="perigo" onClick={() => remover(concurso)}>Confirmar remoção</Botao><Botao pequeno variante="discreto" onClick={() => setConfirmar(false)}>Cancelar</Botao></>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AbaHistorico({ app, acoes, astral, abrir }) {
  const [lote, setLote] = useState("");
  const [relatorio, setRelatorio] = useState(null);

  const itens = useMemo(() => {
    const porConcurso = new Map(app.resultados.map(r => [r.concurso, r]));
    return Object.entries(app.mapas).map(([k, m]) => {
      const c = Number(k), r = porConcurso.get(c), a = astral.get(c);
      return { concurso: c, data: m.data || r?.data || "", hora: m.hora || "", resultado: r?.resultado || null, jogo: a?.jogo || null, acertos: a?.acertos ?? null, completo: interpretarMapa(m.texto).mapa.completo };
    }).sort((a, b) => b.concurso - a.concurso);
  }, [app.mapas, app.resultados, astral]);

  const comAcerto = itens.filter(i => i.acertos != null);
  const media = comAcerto.length ? comAcerto.reduce((s, i) => s + i.acertos, 0) / comAcerto.length : null;
  const melhor = comAcerto.length ? Math.max(...comAcerto.map(i => i.acertos)) : null;
  const onzeMais = comAcerto.filter(i => i.acertos >= 11).length;

  const conferir = () => setRelatorio(dividirMapasEmLote(lote).map(b => ({ ...b, completo: interpretarMapa(b.texto).mapa.completo, jaExiste: !!app.mapas[b.concurso] })));
  const importar = () => { acoes.importarMapas(relatorio.map(b => ({ concurso: b.concurso, texto: b.texto }))); setRelatorio(null); setLote(""); };

  return (
    <>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <Metrica rotulo="Mapas" valor={itens.length} />
        <Metrica rotulo="Média de acertos" valor={media == null ? "—" : dec(media, 2)} />
        <Metrica rotulo="Melhor" valor={melhor ?? "—"} tom={melhor >= 11 ? "bom" : undefined} />
        <Metrica rotulo="11 ou mais" valor={onzeMais} tom={onzeMais ? "bom" : undefined} />
      </div>

      {!itens.length && <Aviso tom="info">Nenhum mapa salvo ainda. Salve mapas na aba Mapa Horário ou importe vários de uma vez abaixo.</Aviso>}
      {itens.map(i => <CartaoConcurso key={i.concurso} item={i} abrir={abrir} remover={acoes.removerMapa} />)}

      <details style={{ marginTop: 16 }}>
        <summary style={{ cursor: "pointer", color: T.textSoft, fontSize: 13 }}>Importar vários mapas de uma vez</summary>
        <Card style={{ marginTop: 10 }}>
          <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 8 }}>Cada mapa precedido do número do concurso: <code style={{ fontFamily: T.mono, color: T.goldText }}>#3650</code>, <code style={{ fontFamily: T.mono, color: T.goldText }}>Concurso 3650</code> ou <code style={{ fontFamily: T.mono, color: T.goldText }}>3650:</code></div>
          <textarea rows={8} value={lote} onChange={e => { setLote(e.target.value); setRelatorio(null); }} style={{ ...estiloInput, fontFamily: T.mono, fontSize: 12 }} placeholder={"#3650\nSun in Aries 10°12’, in 6th House\n…"} />
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <Botao variante="secundario" disabled={!lote.trim()} onClick={conferir}>Conferir</Botao>
            {relatorio?.length > 0 && <Botao onClick={importar}>Importar {relatorio.length} mapas</Botao>}
          </div>
          {relatorio && (
            <div style={{ marginTop: 12 }}>
              {!relatorio.length && <Aviso>Nenhum número de concurso encontrado.</Aviso>}
              <Tabela colunas={[
                { id: "concurso", titulo: "Concurso", mono: true },
                { id: "st", titulo: "Leitura", render: l => (l.completo ? <Chip tom="bom">completo</Chip> : <Chip tom="ruim">incompleto</Chip>) },
                { id: "ja", titulo: "", render: l => (l.jaExiste ? <Chip tom="alerta">substitui o salvo</Chip> : null) },
              ]} linhas={relatorio.map(l => ({ ...l, __id: l.concurso }))} />
            </div>
          )}
        </Card>
      </details>
    </>
  );
}

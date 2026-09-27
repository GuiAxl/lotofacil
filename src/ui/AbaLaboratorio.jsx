import { useState, useMemo } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, Aviso, estiloInput } from "./base.jsx";
import { parseNumeros, pct, dec } from "./estado.js";
import { avaliarHipotese } from "../estatistica/laboratorio.js";

const TOM_STATUS = { confirmada: "bom", rejeitada: "ruim", "em teste": "ouro" };

function BarraSPRT({ av }) {
  const { llr, limiteA, limiteB } = av;
  const pos = Math.max(0, Math.min(100, ((llr - limiteB) / (limiteA - limiteB)) * 100));
  const zero = ((0 - limiteB) / (limiteA - limiteB)) * 100;
  return (
    <div>
      <div style={{ position: "relative", height: 10, borderRadius: 999, background: `linear-gradient(90deg, ${T.ruimSoft}, ${T.surface2} ${zero}%, ${T.bomSoft})`, border: `1px solid ${T.border}` }}>
        <div style={{ position: "absolute", left: `${zero}%`, top: -3, bottom: -3, width: 1, background: T.textMuted }} />
        <div style={{ position: "absolute", left: `calc(${pos}% - 6px)`, top: -3, width: 12, height: 14, borderRadius: 4, background: T.gold }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: T.textMuted, marginTop: 3 }}>
        <span>rejeitar</span><span>evidência acumulada: {dec(llr, 2)}</span><span>confirmar</span>
      </div>
    </div>
  );
}

export default function AbaLaboratorio({ app, concursos, meta, acoes }) {
  const [form, setForm] = useState({ sinal: "", numeros: "", direcao: "mais", efeito: "8", nota: "" });
  const opcoes = useMemo(() => [...meta.values()].filter(m => !m.lento).sort((a, b) => a.rotulo.localeCompare(b.rotulo)), [meta]);
  const avaliacoes = useMemo(() => app.hipoteses.map(h => ({ h, av: avaliarHipotese(h, concursos) })), [app.hipoteses, concursos]);
  const numeros = parseNumeros(form.numeros);
  const sinalValido = meta.has(form.sinal);

  const criar = async () => {
    await acoes.criarHipotese({ sinal: form.sinal, rotuloSinal: meta.get(form.sinal).rotulo, numeros, direcao: form.direcao, efeito: Number(form.efeito) / 100, origem: "manual", nota: form.nota });
    setForm({ sinal: "", numeros: "", direcao: "mais", efeito: "8", nota: "" });
  };

  return (
    <>
      <Card titulo="Laboratório de hipóteses">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55 }}>
          Uma hipótese é escrita <b style={{ color: T.goldText }}>antes</b> de ver os dados que vão julgá-la. Ela fica congelada (data + hash) e só é avaliada
          em concursos sorteados <b style={{ color: T.goldText }}>a partir do dia seguinte</b> ao registro. O teste sequencial de Wald acumula evidência a cada
          sorteio e decide sozinho quando confirmar (5% de falso positivo) ou rejeitar (20% de falso negativo). É o jeito honesto de testar uma regra
          da doutrina ou um achado da aba Sinais.
        </div>
      </Card>

      <Card titulo="Nova hipótese">
        <Rotulo>Sinal</Rotulo>
        <input list="lista-sinais" style={estiloInput} value={form.sinal} onChange={e => setForm({ ...form, sinal: e.target.value })} placeholder="Digite para buscar (ex.: lua|foraDeCurso)" />
        <datalist id="lista-sinais">{opcoes.map(o => <option key={o.chave} value={o.chave}>{o.rotulo}</option>)}</datalist>
        {form.sinal && <div style={{ fontSize: 12.5, marginTop: 4, color: sinalValido ? T.goldText : T.ruim }}>{sinalValido ? meta.get(form.sinal).rotulo : "Sinal ainda não visto em nenhum mapa salvo"}</div>}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, marginTop: 10 }}>
          <div><Rotulo>Números</Rotulo><input style={{ ...estiloInput, fontFamily: T.mono }} value={form.numeros} onChange={e => setForm({ ...form, numeros: e.target.value })} placeholder="ex.: 5 10 13" /></div>
          <div><Rotulo>Direção</Rotulo>
            <select style={estiloInput} value={form.direcao} onChange={e => setForm({ ...form, direcao: e.target.value })}>
              <option value="mais">saem MAIS que 60%</option><option value="menos">saem MENOS que 60%</option>
            </select>
          </div>
          <div><Rotulo>Efeito mínimo (pontos %)</Rotulo><input style={estiloInput} value={form.efeito} onChange={e => setForm({ ...form, efeito: e.target.value.replace(/[^\d]/g, "") })} /></div>
        </div>
        <div style={{ marginTop: 10 }}><Rotulo>Nota (opcional)</Rotulo><input style={estiloInput} value={form.nota} onChange={e => setForm({ ...form, nota: e.target.value })} placeholder="De onde veio a ideia" /></div>
        <div style={{ marginTop: 12 }}><Botao disabled={!sinalValido || !numeros.length || !(Number(form.efeito) >= 2 && Number(form.efeito) <= 35)} onClick={criar}>Congelar hipótese</Botao></div>
      </Card>

      {!avaliacoes.length && <Aviso tom="info">Nenhuma hipótese ainda. Crie uma acima ou use "Pré-registrar" na aba Sinais.</Aviso>}
      {avaliacoes.slice().reverse().map(({ h, av }) => (
        <Card key={h.id}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
            <div>
              <div style={{ fontWeight: 600, color: T.text }}>{h.rotuloSinal}</div>
              <div style={{ fontSize: 12.5, color: T.textSoft }}>números saem {h.direcao === "mais" ? "mais" : "menos"} que 60% (efeito ≥ {Math.round(h.efeito * 100)} pontos)</div>
            </div>
            <div style={{ display: "flex", gap: 5, alignItems: "flex-start", flexWrap: "wrap" }}>
              <Chip tom={TOM_STATUS[av.status]}>{av.status}{av.decididaNo ? ` no ${av.decididaNo}` : ""}</Chip>
              <Chip title={`hash ${h.hash}`}>desde {h.criadaEm.slice(0, 10).split("-").reverse().join("/")}</Chip>
              <Chip>{h.origem}</Chip>
            </div>
          </div>
          <Bolinhas numeros={h.numeros} tamanho={22} />
          <div style={{ margin: "12px 0" }}><BarraSPRT av={av} /></div>
          <div style={{ fontSize: 12.5, color: T.textSoft }}>
            {av.tentativas
              ? <>Avaliada em {av.concursos.length} concursos futuros · {av.acertos}/{av.tentativas} saídas ({pct(av.taxa)}) · p = {dec(av.pValor, 3)}</>
              : "Aguardando sorteios futuros em que este sinal esteja ativo (com mapa e resultado)."}
            {h.nota && <div style={{ marginTop: 4, color: T.textMuted }}>{h.nota}</div>}
          </div>
          <div style={{ marginTop: 10 }}><Botao pequeno variante="perigo" onClick={() => { if (confirm("Arquivar (apagar) esta hipótese?")) acoes.removerHipotese(h.id); }}>Arquivar</Botao></div>
        </Card>
      ))}
    </>
  );
}

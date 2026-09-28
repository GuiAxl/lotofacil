import { useState, useEffect, useMemo } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, Tabela, Aviso, estiloInput } from "./base.jsx";
import { interpretarMapa, parseNumeros, validarResultado, estimarProximo, dec } from "./estado.js";
import { nomePonto, nomeSigno, PONTOS_OBRIGATORIOS, TIPO_CASA } from "../astro/constantes.js";
import { dignidade, classeVelocidade } from "../astro/sinais.js";
import { treinarAte, prever } from "../estatistica/motor.js";
import { acertos } from "../estatistica/matematica.js";

const ROTULO_DIGNIDADE = { domicilio: "domicílio", exaltacao: "exaltação", peregrino: "peregrino", exilio: "exílio", queda: "queda" };
const ROTULO_VEL = { rapido: "rápido", medio: "médio", lento: "lento", estacionario: "estacionário", retrogrado: "retrógrado" };

function LeituraMapa({ leitura }) {
  const { mapa } = leitura;
  const linhas = PONTOS_OBRIGATORIOS.filter(id => mapa.pontos[id]).map(id => {
    const p = mapa.pontos[id];
    return {
      __id: id, ponto: nomePonto(id), signo: nomeSigno(p.signo), grau: `${p.grau}°${String(p.minutos).padStart(2, "0")}'`,
      casa: p.casa ? `${p.casa} (${TIPO_CASA[p.casa]})` : "—",
      dig: ROTULO_DIGNIDADE[dignidade(id, p.signo)] || "",
      vel: [ROTULO_VEL[classeVelocidade(p, id)], p.velocidade?.razao ? `${dec(p.velocidade.razao)}×` : null].filter(Boolean).join(" · "),
      r: p.retrogrado ? "℞" : "",
    };
  });
  return (
    <>
      {mapa.avisos.map((a, i) => <Aviso key={i} tom={a.nivel === "erro" ? "ruim" : "alerta"}>{a.msg}{a.linha && <div style={{ fontFamily: T.mono, fontSize: 11.5, color: T.textSoft, marginTop: 3 }}>{a.linha}</div>}</Aviso>)}
      <Tabela colunas={[
        { id: "ponto", titulo: "Ponto" }, { id: "signo", titulo: "Signo" }, { id: "grau", titulo: "Grau", mono: true },
        { id: "casa", titulo: "Casa" }, { id: "dig", titulo: "Dignidade" }, { id: "vel", titulo: "Velocidade" }, { id: "r", titulo: "" },
      ]} linhas={linhas} />
    </>
  );
}

export default function AbaMapa({ app, concursos, acoes, inicial }) {
  const proximo = estimarProximo(app.resultados);
  const [numero, setNumero] = useState(String(inicial ?? proximo.concurso));
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [sorteioTxt, setSorteioTxt] = useState("");
  const [texto, setTexto] = useState("");
  const [msg, setMsg] = useState(null);

  const nConc = Number(numero);
  const oficial = app.resultados.find(r => r.concurso === nConc) || null;
  const salvo = app.mapas[nConc];

  useEffect(() => {
    const m = app.mapas[nConc];
    if (m) setTexto(m.texto);
    setHora(m?.hora || "");
    setData(m?.data || app.resultados.find(r => r.concurso === nConc)?.data || (nConc === proximo.concurso ? proximo.data : ""));
    setSorteioTxt("");
  }, [nConc]);

  const leitura = useMemo(() => (texto.trim() ? interpretarMapa(texto) : null), [texto]);
  const sorteioDigitado = parseNumeros(sorteioTxt);
  const resultado = oficial?.resultado || (validarResultado(sorteioDigitado) ? sorteioDigitado : null);

  // Jogo do motor astral para este mapa, treinado só com os concursos anteriores.
  const jogo = useMemo(() => {
    if (!leitura?.mapa.completo || !nConc) return null;
    const estado = treinarAte(concursos, nConc);
    const chaves = leitura.sinais.filter(s => app.config.usarLentos || !s.lento).map(s => s.chave);
    return { ...prever(estado, { concurso: nConc, chaves }, "astral"), treino: estado.nMapas };
  }, [leitura, nConc, concursos, app.config.usarLentos]);

  const podeSalvar = texto.trim() && nConc > 0 && (!sorteioTxt.trim() || oficial || validarResultado(sorteioDigitado)) && (!data || /^\d{2}\/\d{2}\/\d{4}$/.test(data));
  const salvar = () => {
    acoes.salvarMapa(nConc, texto, data, hora);
    if (!oficial && validarResultado(sorteioDigitado)) acoes.salvarResultado(nConc, data, sorteioDigitado);
    setMsg("Salvo."); setTimeout(() => setMsg(null), 2500);
  };

  const a = jogo && resultado ? acertos(jogo.jogo, resultado) : null;

  return (
    <>
      <Card titulo="Mapa horário">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 10 }}>
          <div><Rotulo>Concurso</Rotulo><input style={estiloInput} value={numero} onChange={e => setNumero(e.target.value.replace(/\D/g, ""))} /></div>
          <div><Rotulo>Data</Rotulo><input style={estiloInput} value={data} placeholder="dd/mm/aaaa" onChange={e => setData(e.target.value)} /></div>
          <div><Rotulo>Hora</Rotulo><input style={estiloInput} value={hora} placeholder="20:00" onChange={e => setHora(e.target.value)} /></div>
        </div>
        <Rotulo>Sorteio {oficial ? "(já registrado)" : `(opcional · ${sorteioDigitado.length}/15)`}</Rotulo>
        {oficial
          ? <div style={{ marginBottom: 10 }}><Bolinhas numeros={oficial.resultado} tamanho={24} /></div>
          : <input style={{ ...estiloInput, fontFamily: T.mono, marginBottom: 10 }} placeholder="01 02 04 05 …" value={sorteioTxt} onChange={e => setSorteioTxt(e.target.value)} />}
        <Rotulo>Mapa (em inglês)</Rotulo>
        <textarea value={texto} onChange={e => setTexto(e.target.value)} rows={9} placeholder={"Sun in Aries 23°59’, in 6th House\nMoon in Pisces 7°27’, in 4th House\n…"}
          style={{ ...estiloInput, fontFamily: T.mono, fontSize: 12, resize: "vertical" }} />
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Botao onClick={salvar} disabled={!podeSalvar}>Salvar</Botao>
          {salvo && <Chip>mapa salvo</Chip>}
          {leitura && (leitura.mapa.completo ? <Chip tom="bom">✓ mapa completo</Chip> : <Chip tom="ruim">mapa incompleto</Chip>)}
          {msg && <span style={{ color: T.bom, fontSize: 13 }}>{msg}</span>}
        </div>
      </Card>

      {jogo && (
        <Card titulo={`Jogo do concurso ${nConc}`} acao={a != null && <Chip tom={a >= 11 ? "bom" : a >= 9 ? "ouro" : "neutro"}>{a} acertos</Chip>}>
          <Bolinhas numeros={jogo.jogo} destaque={resultado} tamanho={32} />
          <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>Motor astral · aprendeu com {jogo.treino} mapa(s) anteriores a este concurso.</div>
        </Card>
      )}

      {leitura && (
        <details style={{ marginBottom: 14 }}>
          <summary style={{ cursor: "pointer", color: T.textSoft, fontSize: 13, padding: "4px 0" }}>Leitura do mapa ({Object.keys(leitura.mapa.pontos).length} pontos · {leitura.sinais.length} sinais)</summary>
          <div style={{ marginTop: 10 }}><LeituraMapa leitura={leitura} /></div>
        </details>
      )}
    </>
  );
}

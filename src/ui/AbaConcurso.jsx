import { useState, useEffect, useMemo } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, BarrasProbabilidade, Tabela, Aviso, Metrica, estiloInput } from "./base.jsx";
import { interpretarMapa, formatarNum, pct, dec, estimarProximo } from "./estado.js";
import { nomePonto, nomeSigno, PONTOS_OBRIGATORIOS, TIPO_CASA } from "../astro/constantes.js";
import { dignidade, classeVelocidade } from "../astro/sinais.js";
import { MOTORES, APRENDIZES, treinarAte, preverTodos, explicarNumero, pesosMistura } from "../estatistica/motor.js";
import { acertos } from "../estatistica/matematica.js";

const ROTULO_DIGNIDADE = { domicilio: "domicílio", exaltacao: "exaltação", peregrino: "peregrino", exilio: "exílio", queda: "queda" };
const ROTULO_VEL = { rapido: "rápido", medio: "médio", lento: "lento", estacionario: "estacionário", retrogrado: "retrógrado" };

function PreviaMapa({ leitura }) {
  const { mapa, sinais } = leitura;
  const [aberto, setAberto] = useState(null);
  const grupos = useMemo(() => {
    const g = {};
    sinais.forEach(s => (g[s.grupo] ||= []).push(s));
    return Object.entries(g);
  }, [sinais]);
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
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
        {mapa.completo ? <Chip tom="bom">✓ mapa completo</Chip> : <Chip tom="ruim">✗ mapa incompleto (não entra no motor)</Chip>}
        <Chip>{Object.keys(mapa.pontos).length} pontos</Chip>
        <Chip>{mapa.aspectos.filter(a => a.consistente).length} aspectos válidos</Chip>
        <Chip tom={mapa.temVelocidades ? "bom" : "alerta"}>{mapa.temVelocidades ? "com velocidades" : "sem velocidades"}</Chip>
        <Chip tom="ouro">{sinais.length} sinais</Chip>
      </div>
      {mapa.avisos.map((a, i) => <Aviso key={i} tom={a.nivel === "erro" ? "ruim" : "alerta"}>{a.msg}{a.linha && <div style={{ fontFamily: T.mono, fontSize: 11.5, color: T.textSoft, marginTop: 3 }}>{a.linha}</div>}</Aviso>)}
      <Tabela colunas={[
        { id: "ponto", titulo: "Ponto" }, { id: "signo", titulo: "Signo" }, { id: "grau", titulo: "Grau", mono: true },
        { id: "casa", titulo: "Casa" }, { id: "dig", titulo: "Dignidade" }, { id: "vel", titulo: "Velocidade" }, { id: "r", titulo: "" },
      ]} linhas={linhas} />
      <div style={{ marginTop: 14 }}>
        <Rotulo>Sinais ativos neste mapa</Rotulo>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {grupos.map(([g, lista]) => (
            <Botao key={g} pequeno variante={aberto === g ? "secundario" : "discreto"} onClick={() => setAberto(aberto === g ? null : g)}>{g} · {lista.length}</Botao>
          ))}
        </div>
        {aberto && (
          <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 5 }}>
            {grupos.find(([g]) => g === aberto)[1].map(s => <Chip key={s.chave} tom={s.lento ? "neutro" : "ouro"} title={s.lento ? "Sinal de corpo lento: fora do motor por padrão" : s.chave}>{s.rotulo}</Chip>)}
          </div>
        )}
      </div>
    </>
  );
}

export default function AbaConcurso({ app, concursos, meta, acoes, simulacao, inicial }) {
  const proximoEstimado = estimarProximo(app.resultados);
  const [numero, setNumero] = useState(String(inicial ?? proximoEstimado.concurso));
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");
  const [previsao, setPrevisao] = useState(null);
  const [calculando, setCalculando] = useState(false);
  const [numSel, setNumSel] = useState(null);
  const [msg, setMsg] = useState(null);

  const nConc = Number(numero);
  const resultado = app.resultados.find(r => r.concurso === nConc)?.resultado || null;
  const salvo = app.mapas[nConc];

  useEffect(() => {
    // Só troca o texto se este concurso já tem mapa salvo: não apaga um mapa colado antes de digitar o número.
    if (app.mapas[nConc]) setTexto(app.mapas[nConc].texto);
    setData(app.mapas[nConc]?.data || app.resultados.find(r => r.concurso === nConc)?.data || (nConc === proximoEstimado.concurso ? proximoEstimado.data : ""));
    setPrevisao(null); setNumSel(null);
  }, [nConc]);

  const leitura = useMemo(() => (texto.trim() ? interpretarMapa(texto) : null), [texto]);
  const jaRegistrado = app.diario.some(d => d.concurso === nConc);

  const gerar = () => {
    if (!leitura?.mapa.completo) return;
    setCalculando(true);
    setTimeout(() => {
      const estado = treinarAte(concursos, nConc);
      const chaves = leitura.sinais.filter(s => app.config.usarLentos || !s.lento).map(s => s.chave);
      const alvo = { concurso: nConc, chaves };
      // Contexto novo (OOD): sinais deste mapa com pouca ou nenhuma história.
      const novos = chaves.filter(k => (estado.sinais.get(k)?.dias || 0) < 5).length;
      setPrevisao({ estado, chaves, porMotor: preverTodos(estado, alvo), treino: estado.nMapas, novidade: chaves.length ? novos / chaves.length : 0 });
      setCalculando(false);
    }, 30);
  };

  const salvarMapa = () => {
    acoes.salvarMapa(nConc, texto, data);
    setMsg("Mapa salvo."); setTimeout(() => setMsg(null), 2500);
  };

  const registrar = async () => {
    await acoes.registrarDiario(nConc, previsao.porMotor);
    setMsg("Jogos registrados no diário (com data, hora e hash)."); setTimeout(() => setMsg(null), 3500);
  };

  const astral = previsao?.porMotor.astral;
  const explicacao = previsao && numSel ? explicarNumero(previsao.estado, previsao.chaves, numSel).slice(0, 10) : null;
  const pesos = previsao ? pesosMistura(previsao.estado) : null;

  return (
    <>
      <Card titulo="Mapa do concurso">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 10 }}>
          <div><Rotulo>Concurso</Rotulo><input style={estiloInput} value={numero} onChange={e => setNumero(e.target.value.replace(/\D/g, ""))} /></div>
          <div><Rotulo>Data (dd/mm/aaaa){nConc === proximoEstimado.concurso ? " · estimada" : ""}</Rotulo><input style={estiloInput} value={data} placeholder="27/09/2026" onChange={e => setData(e.target.value)} /></div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, flexWrap: "wrap" }}>
            {resultado ? <Chip tom="bom">resultado conhecido</Chip> : <Chip tom="ouro">sorteio futuro</Chip>}
            {salvo && <Chip>mapa salvo</Chip>}
          </div>
        </div>
        <Rotulo>Cole o mapa (em inglês)</Rotulo>
        <textarea value={texto} onChange={e => setTexto(e.target.value)} rows={10} placeholder={"Sun in Aries 23°59’, in 6th House\nMoon in Pisces 7°27’, in 4th House\n…"}
          style={{ ...estiloInput, fontFamily: T.mono, fontSize: 12, resize: "vertical" }} />
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Botao onClick={salvarMapa} disabled={!texto.trim() || !nConc}>Salvar mapa</Botao>
          <Botao variante="secundario" onClick={gerar} disabled={!leitura?.mapa.completo || calculando}>{calculando ? "Calculando…" : "Gerar previsão"}</Botao>
          {msg && <span style={{ color: T.bom, fontSize: 13 }}>{msg}</span>}
        </div>
      </Card>

      {leitura && <Card titulo="Leitura do mapa"><PreviaMapa leitura={leitura} /></Card>}

      {previsao && (
        <Card titulo="Previsão" acao={<Chip>treinado com {previsao.treino} mapas anteriores</Chip>}>
          {previsao.treino < app.config.minTreino && <Aviso>Ainda há poucos mapas no histórico ({previsao.treino}). O motor precisa de dados para aprender; por enquanto ele fica perto do acaso.</Aviso>}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
            <Metrica rotulo="Confiança nos sinais astrais" valor={pct(astral.pesoAstral)} detalhe="peso dos modelos com sinais na mistura" tom={astral.pesoAstral > 0.5 ? "bom" : undefined} />
            <Metrica rotulo="Sinais usados" valor={previsao.chaves.length} />
            <Metrica rotulo="Contexto novo" valor={pct(previsao.novidade)} detalhe="sinais com menos de 5 dias de história" tom={previsao.novidade > 0.3 ? "alerta" : undefined} />
            <Metrica rotulo="Acerto esperado (Astral)" valor={dec(astral.jogo.reduce((s, n) => s + astral.valores[n], 0), 2)} detalhe="soma das probabilidades dos 15 (acaso = 9,00)" />
          </div>
          <Rotulo>Probabilidade de cada número (Astral) — clique para ver os sinais</Rotulo>
          <BarrasProbabilidade probs={astral.valores} jogo={astral.jogo} onSelecionar={setNumSel} selecionado={numSel} />
          {explicacao && (
            <div style={{ marginTop: 14 }}>
              <Rotulo>Por que o nº {formatarNum(numSel)} — {pct(astral.valores[numSel], 1)}</Rotulo>
              <Tabela vazio="Nenhum sinal desloca este número hoje: ele está no valor de base." colunas={[
                { id: "chave", titulo: "Sinal", render: l => meta.get(l.chave)?.rotulo || l.chave },
                { id: "peso", titulo: "Efeito", alinhar: "right", mono: true, render: l => <span style={{ color: l.peso > 0 ? T.bom : T.ruim }}>{l.peso > 0 ? "+" : ""}{dec(l.peso, 3)}</span> },
                { id: "prob", titulo: "Prob. real", alinhar: "right", mono: true, render: l => (l.prob == null ? "—" : pct(l.prob)) },
                { id: "hist", titulo: "Histórico", alinhar: "right", mono: true, render: l => `${l.hits}/${l.dias}` },
              ]} linhas={explicacao} />
            </div>
          )}
          <div style={{ marginTop: 18 }}>
            {Object.entries(previsao.porMotor).map(([m, p]) => (
              <div key={m} style={{ padding: "10px 0", borderTop: `1px solid ${T.borderSoft}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 600, color: m === "astral" ? T.goldText : T.text }}>{MOTORES[m].nome}</span>
                  {resultado && <Chip tom={acertos(p.jogo, resultado) >= 11 ? "bom" : "neutro"}>{acertos(p.jogo, resultado)} acertos (retroativo)</Chip>}
                </div>
                <Bolinhas numeros={p.jogo} destaque={resultado} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12 }}>
            {resultado
              ? <Aviso tom="info">Este concurso já tem resultado: os acertos acima são retroativos e não contam no placar prospectivo.</Aviso>
              : <Botao onClick={registrar} disabled={jaRegistrado}>{jaRegistrado ? "Já registrado no diário" : "Registrar jogos no diário (antes do sorteio)"}</Botao>}
          </div>
          <details style={{ marginTop: 14 }}>
            <summary style={{ cursor: "pointer", color: T.textSoft, fontSize: 13 }}>Peso de cada modelo na mistura</summary>
            <Tabela colunas={[
              { id: "nome", titulo: "Modelo" },
              { id: "tipo", titulo: "Usa sinais?", render: l => (l.astral ? "sim" : "não") },
              { id: "peso", titulo: "Peso", alinhar: "right", mono: true, render: l => pct(l.peso, 1) },
            ]} linhas={APRENDIZES.map((a, i) => ({ __id: a.id, nome: a.nome, astral: a.astral, peso: pesos[i] }))} />
          </details>
        </Card>
      )}
      {!previsao && simulacao && <div style={{ color: T.textMuted, fontSize: 12.5, textAlign: "center" }}>Cole um mapa completo e toque em "Gerar previsão". A previsão usa só concursos anteriores a este.</div>}
    </>
  );
}

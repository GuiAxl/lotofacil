// Aba Quântico: motor estatístico sem astrologia sobre o histórico completo.
import { useState, useMemo, useEffect } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, BarrasProbabilidade, Tabela, Aviso, Metrica, LinhaTempo, estiloInput } from "./base.jsx";
import { parseNumeros, pct, dec, formatarNum } from "./estado.js";
import { HISTORICO } from "../dados/historico.js";
import { gerarLaudo } from "../quantico/laudo.js";
import { simular, prever, testeTemporal, FAMILIAS } from "../quantico/motor.js";
import { ajustarPopularidade, avaliarPopularidade, premioEsperado } from "../quantico/popularidade.js";
import { gerarJogos, retornoEsperado, simularConjunto, fechamento } from "../quantico/otimizador.js";
import { media } from "../estatistica/matematica.js";

const reais = v => (v == null || !Number.isFinite(v) ? "—" : v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: v < 10 ? 2 : 0 }));
const SECOES = [["laudo", "Laudo"], ["previsao", "Previsão"], ["popularidade", "Popularidade"], ["gerador", "Gerador"], ["fechamento", "Fechamento"]];

function Laudo({ sorteios }) {
  const laudo = useMemo(() => gerarLaudo(sorteios), [sorteios]);
  const freq = laudo.testes[0].detalhe.porNumero;
  const maxZ = Math.max(3, ...freq.map(f => Math.abs(f.z)));
  return (
    <>
      <Aviso tom={laudo.desvios ? "alerta" : "bom"}>
        {laudo.desvios
          ? `${laudo.desvios} teste(s) acusaram desvio do acaso em ${laudo.nConcursos.toLocaleString("pt-BR")} concursos, já com correção para múltiplos testes. Veja abaixo se o desvio ainda existe nos concursos recentes.`
          : `Todos os testes são compatíveis com um sorteio perfeitamente aleatório em ${laudo.nConcursos.toLocaleString("pt-BR")} concursos.`}
      </Aviso>
      <Card titulo="Bateria de testes">
        <Tabela colunas={[
          { id: "nome", titulo: "Teste", render: l => <div><div>{l.nome}</div><div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 2 }}>{l.explicacao}</div></div> },
          { id: "estatistica", titulo: "Medida", render: l => <span style={{ fontFamily: T.mono, fontSize: 12 }}>{l.estatistica}</span> },
          { id: "p", titulo: "p corrigido", alinhar: "right", mono: true, render: l => (l.pCorrigido < 0.001 ? "<0,001" : dec(l.pCorrigido, 3)) },
          { id: "v", titulo: "", render: l => (l.desvio ? <Chip tom="alerta">desvio</Chip> : <Chip tom="bom">acaso</Chip>) },
        ]} linhas={laudo.testes.map(t => ({ ...t, __id: t.id }))} />
      </Card>
      <Card titulo="Frequência de cada número (desvio em relação ao esperado)">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, height: 120, alignItems: "center", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", borderTop: `1px solid ${T.textMuted}` }} />
          {freq.slice().sort((a, b) => a.numero - b.numero).map(f => (
            <div key={f.numero} title={`nº ${formatarNum(f.numero)}: saiu ${f.contagem}× (z = ${dec(f.z, 2)})`} style={{ position: "relative", height: "100%" }}>
              <div style={{ position: "absolute", left: "18%", right: "18%", background: Math.abs(f.z) > 1.96 ? T.serie2 : T.serie1,
                ...(f.z >= 0 ? { bottom: "50%", height: `${(f.z / maxZ) * 50}%`, borderRadius: "4px 4px 0 0" } : { top: "50%", height: `${(-f.z / maxZ) * 50}%`, borderRadius: "0 0 4px 4px" }) }} />
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, marginTop: 4 }}>
          {Array.from({ length: 25 }, (_, i) => <div key={i} style={{ textAlign: "center", fontFamily: T.mono, fontSize: 10, color: T.textMuted }}>{formatarNum(i + 1)}</div>)}
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11.5, color: T.textSoft, flexWrap: "wrap" }}>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie1, borderRadius: 2, marginRight: 5 }} />dentro do esperado (|z| &lt; 1,96)</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie2, borderRadius: 2, marginRight: 5 }} />fora (|z| ≥ 1,96)</span>
        </div>
      </Card>
      <Card titulo="Frequência por época">
        <Tabela colunas={[
          { id: "faixa", titulo: "Concursos", mono: true, render: l => `${l.de}–${l.ate}` },
          { id: "chi", titulo: "χ² (24 gl)", alinhar: "right", mono: true, render: l => dec(l.chi, 1) },
          { id: "p", titulo: "p", alinhar: "right", mono: true, render: l => dec(l.p, 4) },
          { id: "v", titulo: "", render: l => (l.p < 0.05 / laudo.blocos.length ? <Chip tom="alerta">viés</Chip> : l.p < 0.05 ? <Chip>fraco</Chip> : <Chip tom="bom">uniforme</Chip>) },
        ]} linhas={laudo.blocos.map(b => ({ ...b, __id: b.de }))} />
        <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>Um viés que existiu em uma época e sumiu depois não serve para prever o próximo sorteio.</div>
      </Card>
    </>
  );
}

function Previsao({ sorteios, concursos, proximo, acoes }) {
  const [res, setRes] = useState(null);
  const [perm, setPerm] = useState(null);
  const [prog, setProg] = useState(null);
  const [registrado, setRegistrado] = useState(false);
  useEffect(() => { const t = setTimeout(() => setRes(simular(sorteios, { concursos })), 50); return () => clearTimeout(t); }, [sorteios]);
  if (!res) return <Card><div style={{ color: T.textSoft }}>Treinando o motor em {sorteios.length.toLocaleString("pt-BR")} concursos (cada um previsto só com o passado)…</div></Card>;
  const prox = prever(res.estado);
  const blocos = [];
  for (let i = 0; i < res.acertos.length; i += 500) {
    const xs = res.acertos.slice(i, i + 500), m = media(xs);
    blocos.push({ __id: i, de: concursos[200 + i], ate: concursos[Math.min(200 + i + 499, concursos.length - 1)], media: m, z: (m - 9) / (0.949 / Math.sqrt(xs.length)) });
  }
  const rodarPerm = async n => { setPerm(null); setProg([0, n]); const r = await testeTemporal(sorteios, { n, onProgresso: (i, t) => setProg([i, t]) }); setPerm(r); setProg(null); };
  return (
    <>
      <Card titulo="Motor preditivo">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Seis famílias de modelos competem numa mistura bayesiana: frequência de longo prazo, números "quentes", memória (último, atraso, sequência),
          pares e todas juntas, contra o <b style={{ color: T.goldText }}>modelo nulo</b> (acaso puro). Cada concurso é previsto só com o passado. O desempenho antigo
          vai sendo esquecido (meia-vida ≈ 350 concursos), então um viés que já sumiu deixa de ser seguido.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Metrica rotulo="Confiança em padrões hoje" valor={pct(prox.confianca)} detalhe="50% = não sei; perto de 100% = padrão forte" tom={prox.confianca > 0.9 ? "bom" : undefined} />
          <Metrica rotulo="Acertos médios (todo o histórico)" valor={dec(media(res.acertos), 3)} detalhe={`${res.acertos.length.toLocaleString("pt-BR")} concursos · acaso = 9,000`} />
          <Metrica rotulo="Acertos médios (últimos 500)" valor={dec(media(res.acertos.slice(-500)), 3)} detalhe="o que vale para hoje" />
        </div>
      </Card>
      <Card titulo="Desempenho por época">
        <Tabela colunas={[
          { id: "faixa", titulo: "Concursos", mono: true, render: l => `${l.de}–${l.ate}` },
          { id: "media", titulo: "Acertos médios", alinhar: "right", mono: true, render: l => dec(l.media, 3) },
          { id: "z", titulo: "z vs acaso", alinhar: "right", mono: true, render: l => <span style={{ color: l.z > 2 ? T.bom : T.text }}>{dec(l.z, 2)}</span> },
        ]} linhas={blocos} />
      </Card>
      <Card titulo="Peso de cada família hoje">
        <Tabela colunas={[
          { id: "nome", titulo: "Família" },
          { id: "peso", titulo: "Peso na mistura", alinhar: "right", mono: true, render: l => pct(l.peso, 1) },
          { id: "barra", titulo: "", render: l => <div style={{ width: 140, height: 8, background: T.surface2, borderRadius: 4 }}><div style={{ width: `${l.peso * 100}%`, height: "100%", background: l.id === "nulo" ? T.textMuted : T.serie1, borderRadius: 4 }} /></div> },
        ]} linhas={FAMILIAS.map(f => ({ __id: f.id, id: f.id, nome: f.nome, peso: prox.familias[f.id] || 0 }))} />
      </Card>
      <Card titulo="Confiança em padrões ao longo do histórico">
        <LinhaTempo rotuloY="confiança" pontos={res.pontos} />
      </Card>
      <Card titulo={`Próximo concurso (${proximo})`}>
        <BarrasProbabilidade probs={prox.probs} jogo={prox.jogo} />
        <div style={{ marginTop: 12 }}><Bolinhas numeros={prox.jogo} /></div>
        {prox.confianca < 0.9 && <Aviso tom="info">Com confiança abaixo de 90%, estas diferenças de probabilidade são ruído: qualquer jogo tem a mesma chance. Use o Gerador para ganhar no rateio.</Aviso>}
        <div style={{ marginTop: 10 }}>
          <Botao variante="secundario" disabled={registrado} onClick={async () => { await acoes.registrarDiarioMotor(proximo, "quantico", prox.jogo); setRegistrado(true); }}>{registrado ? "Registrado no diário" : "Registrar no diário"}</Botao>
        </div>
      </Card>
      <Card titulo="Teste de padrão temporal">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Embaralha a ordem dos concursos (destrói qualquer memória, "quentes" e pares, mas mantém a frequência global) e treina tudo de novo. Cada rodada leva alguns segundos.</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[10, 20, 50].map(n => <Botao key={n} variante="discreto" disabled={!!prog} onClick={() => rodarPerm(n)}>{n} embaralhamentos</Botao>)}
          {prog && <Chip tom="ouro">rodando {prog[0]}/{prog[1]}</Chip>}
        </div>
        {perm && <Aviso tom={perm.p < 0.05 ? "bom" : "alerta"}>Ganho real {dec(perm.ganhoReal * 1000, 3)} milinats/concurso · embaralhados: média {dec(media(perm.nulos) * 1000, 3)} · p = {dec(perm.p, 3)} — {perm.p < 0.05 ? "há padrão temporal além da frequência." : "nenhum padrão temporal (memória, quentes/frios, pares) além do que a frequência já explica."}</Aviso>}
      </Card>
    </>
  );
}

function Popularidade({ modelo, ultimo }) {
  const [jogoTxt, setJogoTxt] = useState("");
  const jogo = parseNumeros(jogoTxt);
  const efeitos = modelo.efeitos.slice().sort((a, b) => Math.abs(b.efeito) - Math.abs(a.efeito)).slice(0, 14);
  const maxE = Math.max(...efeitos.map(e => Math.abs(e.efeito)));
  const aval = jogo.length === 15 ? avaliarPopularidade(modelo, jogo, ultimo) : null;
  const pe = aval ? premioEsperado(modelo, aval.indice) : null;
  return (
    <>
      <Card titulo="Todas as combinações têm a mesma chance">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55 }}>
          Existem 3.268.760 combinações e cada uma tem exatamente 1 chance nesse total de sair. Nenhum filtro (soma, pares, "quentes") muda isso.
          O que muda é <b style={{ color: T.goldText }}>com quantas pessoas você divide</b> o prêmio de 14 e 15 pontos. Este modelo aprende, com os ganhadores
          de cada concurso, quais padrões o público mais joga.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Metrica rotulo="Concursos no ajuste" valor={modelo.n} />
          <Metrica rotulo="R² fora da amostra (só volume)" valor={dec(modelo.validacao.r2Base, 3)} />
          <Metrica rotulo="R² fora da amostra (com padrões)" valor={dec(modelo.validacao.r2Modelo, 3)} tom="bom" detalhe="o padrão do jogo explica parte dos ganhadores" />
        </div>
      </Card>
      <Card titulo="O que torna um jogo popular">
        {efeitos.map(e => (
          <div key={e.id} style={{ display: "grid", gridTemplateColumns: "minmax(140px, 1fr) 2fr 60px", gap: 8, alignItems: "center", padding: "4px 0", fontSize: 12.5 }}>
            <span>{e.nome}</span>
            <div style={{ position: "relative", height: 10 }}>
              <div style={{ position: "absolute", left: "50%", top: -2, bottom: -2, width: 1, background: T.textMuted }} />
              <div style={{ position: "absolute", top: 0, height: "100%", background: e.efeito > 0 ? T.serie2 : T.serie1, borderRadius: 3,
                ...(e.efeito > 0 ? { left: "50%", width: `${(e.efeito / maxE) * 50}%` } : { right: "50%", width: `${(-e.efeito / maxE) * 50}%` }) }} />
            </div>
            <span style={{ fontFamily: T.mono, textAlign: "right", color: T.textSoft }}>{e.efeito > 0 ? "+" : ""}{dec(e.efeito * 100, 1)}%</span>
          </div>
        ))}
        <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11.5, color: T.textSoft, flexWrap: "wrap" }}>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie2, borderRadius: 2, marginRight: 5 }} />mais gente joga (prêmio dividido)</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie1, borderRadius: 2, marginRight: 5 }} />menos gente joga</span>
        </div>
      </Card>
      <Card titulo="Avaliar um jogo">
        <input style={{ ...estiloInput, fontFamily: T.mono }} placeholder="15 dezenas" value={jogoTxt} onChange={e => setJogoTxt(e.target.value)} />
        {aval && (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <Metrica rotulo="Índice de popularidade" valor={dec(aval.indice, 2)} detalhe="1,00 = jogo médio" tom={aval.indice < 0.8 ? "bom" : aval.indice > 1.2 ? "ruim" : undefined} />
            <Metrica rotulo="14 pontos (se acertar)" valor={reais(pe.r14)} />
            <Metrica rotulo="15 pontos (se acertar)" valor={reais(pe.r15)} />
          </div>
        )}
        {aval?.extrapolado && <Aviso>Este jogo tem {aval.tracosFora} característica(s) fora do que já foi sorteado; a estimativa é pouco confiável.</Aviso>}
      </Card>
    </>
  );
}

function Gerador({ modelo, ultimo, previsaoMotor }) {
  const [cfg, setCfg] = useState({ quantidade: "5", fixos: "", excluidos: "", sobreposicao: "10", preco: "3,50", usarMotor: false });
  const [res, setRes] = useState(null);
  const [rodando, setRodando] = useState(false);
  const preco = Number(cfg.preco.replace(",", ".")) || 3.5;
  const gerar = () => {
    setRodando(true);
    setTimeout(() => {
      try {
        const jogos = gerarJogos({
          quantidade: Math.min(50, Math.max(1, Number(cfg.quantidade) || 5)), modelo, ultimo,
          fixos: parseNumeros(cfg.fixos), excluidos: parseNumeros(cfg.excluidos), sobreposicaoMax: Number(cfg.sobreposicao) || 10,
          probs: cfg.usarMotor ? previsaoMotor?.probs : null, confianca: cfg.usarMotor ? previsaoMotor?.confianca : 0,
        });
        const avaliados = jogos.map(j => ({ jogo: j, ...retornoEsperado(j, { modelo, ultimo, preco }) }));
        setRes({ avaliados, conjunto: simularConjunto(jogos), erro: null });
      } catch (e) { setRes({ erro: e.message }); }
      setRodando(false);
    }, 30);
  };
  const referencia = useMemo(() => retornoEsperado([3, 6, 7, 9, 12, 13, 14, 16, 17, 18, 19, 21, 22, 24, 25], { modelo, ultimo, preco }), [modelo, ultimo, preco]);
  return (
    <>
      <Card titulo="Gerador por recozimento simulado">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Busca, entre milhões de combinações, jogos com <b style={{ color: T.goldText }}>baixa popularidade</b> (prêmio dividido com menos gente) e pouco sobrepostos entre si.
          O método é o recozimento simulado, a versão clássica do annealing quântico: aceita pioras no começo para escapar de mínimos locais e vai "esfriando" até convergir.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
          <div><Rotulo>Quantidade de jogos</Rotulo><input style={estiloInput} value={cfg.quantidade} onChange={e => setCfg({ ...cfg, quantidade: e.target.value.replace(/\D/g, "") })} /></div>
          <div><Rotulo>Fixos</Rotulo><input style={{ ...estiloInput, fontFamily: T.mono }} value={cfg.fixos} placeholder="ex.: 7 13" onChange={e => setCfg({ ...cfg, fixos: e.target.value })} /></div>
          <div><Rotulo>Excluídos</Rotulo><input style={{ ...estiloInput, fontFamily: T.mono }} value={cfg.excluidos} placeholder="ex.: 1 25" onChange={e => setCfg({ ...cfg, excluidos: e.target.value })} /></div>
          <div><Rotulo>Máx. dezenas em comum</Rotulo><input style={estiloInput} value={cfg.sobreposicao} onChange={e => setCfg({ ...cfg, sobreposicao: e.target.value.replace(/\D/g, "") })} /></div>
          <div><Rotulo>Preço da aposta (R$)</Rotulo><input style={estiloInput} value={cfg.preco} onChange={e => setCfg({ ...cfg, preco: e.target.value })} /></div>
        </div>
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginTop: 12, cursor: "pointer" }}>
          <input type="checkbox" checked={cfg.usarMotor} onChange={e => setCfg({ ...cfg, usarMotor: e.target.checked })} />
          Considerar o motor preditivo (só pesa se a confiança dele passar de 50%; hoje: {previsaoMotor ? pct(previsaoMotor.confianca) : "calculando"})
        </label>
        <div style={{ marginTop: 12 }}><Botao onClick={gerar} disabled={rodando}>{rodando ? "Otimizando…" : "Gerar jogos"}</Botao></div>
      </Card>
      {res?.erro && <Aviso tom="ruim">{res.erro}</Aviso>}
      {res?.avaliados && (
        <>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
            <Metrica rotulo="Retorno esperado por R$ (gerados)" valor={dec(media(res.avaliados.map(a => a.porReal)), 3)} tom="bom" detalhe={`jogo médio: ${dec(referencia.porReal, 3)}`} />
            <Metrica rotulo="Custo" valor={reais(res.avaliados.length * preco)} />
            <Metrica rotulo="Chance de algum prêmio" valor={pct(res.conjunto.algumPremio, 1)} detalhe="por concurso (≥ 11 em algum jogo)" />
            <Metrica rotulo="Chance de 14+ em algum" valor={pct(res.conjunto.melhor[14] + res.conjunto.melhor[15], 3)} />
          </div>
          <Aviso tom="info">Retorno abaixo de R$ 1,00 por real significa que, na média, a aposta perde dinheiro, como toda loteria. Os jogos gerados perdem menos que um jogo comum porque dividem menos o prêmio quando acertam.</Aviso>
          <Card titulo="Jogos">
            {res.avaliados.map((a, i) => (
              <div key={i} style={{ padding: "10px 0", borderTop: i ? `1px solid ${T.borderSoft}` : "none" }}>
                <Bolinhas numeros={a.jogo} />
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                  <Chip tom={a.indice < 0.8 ? "bom" : "neutro"}>popularidade {dec(a.indice, 2)}</Chip>
                  <Chip>14 pts ≈ {reais(a.tabela[14])}</Chip>
                  <Chip>15 pts ≈ {reais(a.tabela[15])}</Chip>
                  <Chip tom="ouro">retorno {dec(a.porReal, 3)} por R$</Chip>
                  {a.extrapolado && <Chip tom="alerta">fora do observado</Chip>}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10 }}><Botao pequeno variante="discreto" onClick={() => navigator.clipboard?.writeText(res.avaliados.map(a => a.jogo.map(formatarNum).join(" ")).join("\n"))}>Copiar jogos</Botao></div>
          </Card>
        </>
      )}
    </>
  );
}

function Fechamento({ modelo }) {
  const [grupoTxt, setGrupoTxt] = useState("");
  const [garantia, setGarantia] = useState(14);
  const [preco, setPreco] = useState("3,50");
  const [res, setRes] = useState(null);
  const [prog, setProg] = useState(null);
  const grupo = parseNumeros(grupoTxt);
  const valido = grupo.length >= 16 && grupo.length <= 20;
  const rodar = async () => {
    setRes(null); setProg([0, 1, 0]);
    try { setRes(await fechamento(grupo, garantia, { onProgresso: (a, b, n) => setProg([a, b, n]) })); }
    catch (e) { setRes({ erro: e.message }); }
    setProg(null);
  };
  const p = Number(preco.replace(",", ".")) || 3.5;
  return (
    <>
      <Card titulo="Fechamento com garantia">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Escolha de 16 a 20 dezenas. O sistema encontra poucos jogos de 15 que garantem a pontuação escolhida <b style={{ color: T.goldText }}>se os 15 números sorteados estiverem entre as suas dezenas</b>,
          e confere a garantia em todos os cenários possíveis.
        </div>
        <Rotulo>Suas dezenas ({grupo.length})</Rotulo>
        <input style={{ ...estiloInput, fontFamily: T.mono }} value={grupoTxt} onChange={e => setGrupoTxt(e.target.value)} placeholder="ex.: 01 02 03 … (16 a 20)" />
        <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div><Rotulo>Garantia</Rotulo>
            <select style={{ ...estiloInput, width: "auto" }} value={garantia} onChange={e => setGarantia(Number(e.target.value))}>
              {[11, 12, 13, 14].map(g => <option key={g} value={g}>{g} pontos</option>)}
            </select>
          </div>
          <div><Rotulo>Preço (R$)</Rotulo><input style={{ ...estiloInput, width: 90 }} value={preco} onChange={e => setPreco(e.target.value)} /></div>
          <Botao disabled={!valido || !!prog} onClick={rodar}>{prog ? `Calculando… ${pct(prog[0] / prog[1])} · ${prog[2]} jogos` : "Calcular fechamento"}</Botao>
        </div>
        {grupo.length === 20 && garantia === 14 && !prog && <div style={{ fontSize: 12, color: T.textMuted, marginTop: 6 }}>20 dezenas com garantia de 14 leva alguns segundos e passa de 500 jogos.</div>}
      </Card>
      {res?.erro && <Aviso tom="ruim">{res.erro}</Aviso>}
      {res?.jogos && (
        <Card titulo={`${res.jogos.length} jogos`} acao={res.verificado ? <Chip tom="bom">✓ garantia verificada em {res.cenarios.toLocaleString("pt-BR")} cenários</Chip> : <Chip tom="ruim">falha na verificação</Chip>}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
            <Metrica rotulo="Custo" valor={reais(res.jogos.length * p)} />
            <Metrica rotulo="Chance da condição" valor={`1 em ${Math.round(1 / res.chanceCondicao).toLocaleString("pt-BR")}`} detalhe="os 15 sorteados dentro das suas dezenas" />
          </div>
          {res.jogos.slice(0, 60).map((j, i) => <div key={i} style={{ padding: "5px 0" }}><Bolinhas numeros={j} tamanho={22} /></div>)}
          {res.jogos.length > 60 && <div style={{ color: T.textMuted, fontSize: 12.5, marginTop: 6 }}>+ {res.jogos.length - 60} jogos (use Copiar)</div>}
          <div style={{ marginTop: 10 }}><Botao pequeno variante="discreto" onClick={() => navigator.clipboard?.writeText(res.jogos.map(j => j.map(formatarNum).join(" ")).join("\n"))}>Copiar jogos</Botao></div>
        </Card>
      )}
    </>
  );
}

export default function AbaQuantico({ app, acoes }) {
  const [secao, setSecao] = useState("laudo");
  // Todos os resultados: oficiais (com prêmios) + concursos novos adicionados à mão.
  const { sorteios, concursos, historicoLaudo } = useMemo(() => {
    const lista = [...app.resultados].sort((a, b) => a.concurso - b.concurso);
    return { sorteios: lista.map(r => r.resultado), concursos: lista.map(r => r.concurso), historicoLaudo: lista.map(r => ({ concurso: r.concurso, dezenas: r.resultado })) };
  }, [app.resultados]);
  const modelo = useMemo(() => ajustarPopularidade(HISTORICO), []);
  const ultimo = sorteios[sorteios.length - 1];
  const proximo = concursos[concursos.length - 1] + 1;
  const [previsaoMotor, setPrevisaoMotor] = useState(null);
  useEffect(() => { if (secao === "gerador" && !previsaoMotor) setTimeout(() => setPrevisaoMotor(prever(simular(sorteios).estado)), 50); }, [secao]);

  return (
    <>
      <Card>
        <div style={{ fontFamily: T.serif, fontSize: 22, color: T.goldText }}>Motor Quântico</div>
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginTop: 4 }}>
          Estatística pura, sem astrologia, sobre os {sorteios.length.toLocaleString("pt-BR")} concursos da Lotofácil. Primeiro verifica se o sorteio tem algum viés (Laudo),
          depois tenta prever sem se enganar (Previsão) e, por fim, otimiza o que de fato muda o seu retorno: com quantos você divide o prêmio (Popularidade e Gerador)
          e quanto você garante gastando pouco (Fechamento).
        </div>
      </Card>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
        {SECOES.map(([id, nome]) => <Botao key={id} pequeno variante={secao === id ? "secundario" : "discreto"} onClick={() => setSecao(id)}>{nome}</Botao>)}
      </div>
      {secao === "laudo" && <Laudo sorteios={historicoLaudo} />}
      {secao === "previsao" && <Previsao sorteios={sorteios} concursos={concursos} proximo={proximo} acoes={acoes} />}
      {secao === "popularidade" && <Popularidade modelo={modelo} ultimo={ultimo} />}
      {secao === "gerador" && <Gerador modelo={modelo} ultimo={ultimo} previsaoMotor={previsaoMotor} />}
      {secao === "fechamento" && <Fechamento modelo={modelo} />}
    </>
  );
}

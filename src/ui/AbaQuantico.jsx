// Aba Quântico: motor estatístico sem astrologia sobre o histórico completo.
import { useState, useMemo, useEffect } from "react";
import { T, Card, Botao, Chip, Rotulo, Bolinhas, BarrasProbabilidade, Tabela, Aviso, Metrica, LinhaTempo, estiloInput } from "./base.jsx";
import { parseNumeros, pct, dec, formatarNum, estimarProximo } from "./estado.js";
import { HISTORICO } from "../dados/historico.js";
import { gerarLaudo } from "../quantico/laudo.js";
import { simularAsync, prever, testeTemporal, scannerAblacao, governanca, contrafactual, explicarDezena, explicarEscolha, redundanciaFamilias, resumoMudancas, inspecionar, FAMILIAS, FAMILIAS_SINAL, BASELINES } from "../quantico/motor.js";
import { ajustarPopularidade, avaliarPopularidade, premioEsperado } from "../quantico/popularidade.js";
import { gerarPortfolio, retornoEsperado, simularConjunto, fechamento } from "../quantico/otimizador.js";
import { media } from "../estatistica/matematica.js";
import { relatorio } from "../estatistica/metricas.js";
import Diagnostico from "./Diagnostico.jsx";

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

const STATUS_TOM = { Champion: "bom", Challenger: "ouro", Watch: "neutro", Quarantine: "ruim", Desativada: "neutro" };
const nomeFamilia = id => FAMILIAS.find(f => f.id === id)?.nome || id;

function MapaEvidencias({ previsao, selecionada, onSelecionar }) {
  const familias = Object.keys(previsao.porFamilia).filter(f => f !== "nulo");
  const contrib = (f, n) => previsao.porFamilia[f].p[n] - previsao.porFamilia[f].peso * 0.6;
  const max = Math.max(1e-6, ...familias.flatMap(f => Array.from({ length: 25 }, (_, i) => Math.abs(contrib(f, i + 1)))));
  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: `minmax(120px, 170px) repeat(25, minmax(18px, 1fr))`, gap: 2, fontSize: 11, minWidth: 560 }}>
        <div />
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} onClick={() => onSelecionar(i + 1)} style={{ textAlign: "center", fontFamily: T.mono, cursor: "pointer", color: selecionada === i + 1 ? T.goldText : T.textMuted, fontWeight: selecionada === i + 1 ? 700 : 400 }}>{formatarNum(i + 1)}</div>
        ))}
        {familias.map(f => [
          <div key={f} style={{ color: T.textSoft, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: 4 }} title={nomeFamilia(f)}>{nomeFamilia(f)}</div>,
          ...Array.from({ length: 25 }, (_, i) => {
            const v = contrib(f, i + 1), a = Math.min(1, Math.abs(v) / max);
            return <div key={`${f}${i}`} onClick={() => onSelecionar(i + 1)} title={`${nomeFamilia(f)} · nº ${formatarNum(i + 1)}: ${v >= 0 ? "+" : ""}${dec(v * 100, 3)} pontos %`}
              style={{ height: 18, borderRadius: 3, cursor: "pointer", background: v >= 0 ? T.serie2 : T.serie1, opacity: 0.12 + a * 0.88, outline: selecionada === i + 1 ? `1px solid ${T.gold}` : "none" }} />;
          }),
        ])}
      </div>
      <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11.5, color: T.textSoft, flexWrap: "wrap" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie2, borderRadius: 2, marginRight: 5 }} />empurra a dezena para cima</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie1, borderRadius: 2, marginRight: 5 }} />empurra para baixo</span>
        <span>intensidade = tamanho do efeito (escala relativa ±{dec(max * 100, 3)} pontos %)</span>
      </div>
    </div>
  );
}

// Máquina do tempo: um concurso por vez. O motor só enxerga o que saiu ANTES
// dele; aqui se vê o passado que ele usou, a previsão, o que saiu e quem acertou.
function MaquinaDoTempo({ res, sorteios, concursos }) {
  const regs = res.registros;
  const [i, setI] = useState(regs.length - 1);
  const [ordem, setOrdem] = useState("prob");
  const reg = regs[Math.max(0, Math.min(regs.length - 1, i))];
  if (!reg) return null;
  const t = reg.t, saiu = new Set(reg.sorteio), jogoSet = new Set(reg.jogo);
  const antes = sorteios.slice(Math.max(0, t - 10), t).map((d, k) => ({ concurso: concursos[Math.max(0, t - 10) + k], set: new Set(d) }));
  const ranking = Array.from({ length: 25 }, (_, k) => k + 1).sort((a, b) => reg.probs[b] - reg.probs[a]);
  const posicao = n => ranking.indexOf(n) + 1;
  // Contexto de cada dezena calculado só com o passado.
  const ctx = Array.from({ length: 25 }, (_, k) => {
    const n = k + 1;
    let atraso = 0;
    for (let j = t - 1; j >= 0 && !sorteios[j].includes(n); j--) atraso++;
    const f10 = sorteios.slice(Math.max(0, t - 10), t).filter(d => d.includes(n)).length;
    return { n, anterior: t > 0 && sorteios[t - 1].includes(n), atraso, f10, prob: reg.probs[n], pos: posicao(n), saiu: saiu.has(n), noJogo: jogoSet.has(n) };
  });
  const ordenado = [...ctx].sort((a, b) => (ordem === "prob" ? b.prob - a.prob : ordem === "saiu" ? (b.saiu - a.saiu) || (b.prob - a.prob) : a.n - b.n));
  const posMediaSorteadas = ctx.filter(c => c.saiu).reduce((a, c) => a + c.pos, 0) / 15;
  let aucPar = 0;
  for (const a of ctx) if (a.saiu) for (const b of ctx) if (!b.saiu) aucPar += a.prob > b.prob ? 1 : a.prob === b.prob ? 0.5 : 0;
  const repetidas = ctx.filter(c => c.saiu && c.anterior).length;
  const quem = Object.entries(reg.contrib).map(([f, c]) => {
    let sim = 0, nao = 0;
    for (let n = 1; n <= 25; n++) saiu.has(n) ? (sim += c[n]) : (nao += c[n]);
    return { familia: f, placar: sim / 15 - nao / 10 };
  }).sort((a, b) => b.placar - a.placar);
  const vizinhos = regs.slice(Math.max(0, i - 25), i + 26);
  return (
    <Card titulo="Máquina do tempo · concurso a concurso">
      <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Para cada concurso o motor só enxerga o que saiu <b style={{ color: T.goldText }}>antes</b> dele. Escolha um concurso e veja o passado que ele usou, o que previu, o que saiu e quem apontou certo.</div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
        <Botao pequeno variante="discreto" onClick={() => setI(Math.max(0, i - 1))}>◀</Botao>
        <input style={{ ...estiloInput, width: 90, fontFamily: T.mono }} value={reg.concurso} onChange={e => { const c = Number(e.target.value.replace(/\D/g, "")); const k = regs.findIndex(r => r.concurso === c); if (k >= 0) setI(k); }} />
        <Botao pequeno variante="discreto" onClick={() => setI(Math.min(regs.length - 1, i + 1))}>▶</Botao>
        <input type="range" min={0} max={regs.length - 1} value={i} onChange={e => setI(Number(e.target.value))} style={{ flex: "1 1 200px" }} />
      </div>
      <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 44, marginBottom: 14 }}>
        {vizinhos.map(r => (
          <div key={r.concurso} onClick={() => setI(regs.indexOf(r))} title={`${r.concurso}: ${r.acertos} acertos`}
            style={{ flex: 1, cursor: "pointer", height: `${((r.acertos - 5) / 8) * 100}%`, minHeight: 3, borderRadius: "3px 3px 0 0", background: r === reg ? T.gold : r.acertos >= 11 ? T.bom : r.acertos >= 9 ? T.serie1 : T.textMuted }} />
        ))}
      </div>

      <Rotulo>O que saiu antes do concurso {reg.concurso} (últimos 10 — é isto que o motor enxerga)</Rotulo>
      <div style={{ overflowX: "auto", marginBottom: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: `52px repeat(25, minmax(16px, 1fr))`, gap: 2, fontSize: 10, minWidth: 480 }}>
          <div />
          {Array.from({ length: 25 }, (_, k) => <div key={k} style={{ textAlign: "center", fontFamily: T.mono, color: saiu.has(k + 1) ? T.goldText : T.textMuted, fontWeight: saiu.has(k + 1) ? 700 : 400 }}>{formatarNum(k + 1)}</div>)}
          {antes.map(a => [
            <div key={a.concurso} style={{ fontFamily: T.mono, color: T.textMuted }}>{a.concurso}</div>,
            ...Array.from({ length: 25 }, (_, k) => <div key={`${a.concurso}${k}`} style={{ height: 14, borderRadius: 3, background: a.set.has(k + 1) ? T.serie1 : T.surface2 }} />),
          ])}
          <div style={{ fontFamily: T.mono, color: T.goldText, fontWeight: 700 }}>{reg.concurso}</div>
          {Array.from({ length: 25 }, (_, k) => <div key={`r${k}`} title={saiu.has(k + 1) ? "saiu" : ""} style={{ height: 14, borderRadius: 3, background: saiu.has(k + 1) ? T.gold : "transparent", border: `1px solid ${saiu.has(k + 1) ? T.gold : T.border}` }} />)}
        </div>
        <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 4 }}>Azul = saiu naquele concurso · dourado = resultado do concurso {reg.concurso} (o motor NÃO via esta linha ao prever).</div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
        <Metrica rotulo="Acertos do jogo previsto" valor={reg.acertos} tom={reg.acertos >= 11 ? "bom" : reg.acertos < 9 ? "ruim" : undefined} detalhe="acaso = 9" />
        <Metrica rotulo="Posição média das sorteadas" valor={dec(posMediaSorteadas, 1)} detalhe="no ranking do motor · acaso = 13,0" tom={posMediaSorteadas < 12 ? "bom" : undefined} />
        <Metrica rotulo="AUC deste concurso" valor={dec(aucPar / 150, 3)} detalhe="0,5 = acaso" />
        <Metrica rotulo="Repetiram do anterior" valor={repetidas} detalhe="esperado 9" />
        <Metrica rotulo="Confiança na hora" valor={pct(reg.confianca)} />
      </div>
      <Rotulo>Jogo previsto (verde = acertou)</Rotulo>
      <Bolinhas numeros={reg.jogo} destaque={reg.sorteio} />

      <div style={{ marginTop: 14 }}>
        <Rotulo>Quem apontou para o que saiu</Rotulo>
        <Tabela colunas={[
          { id: "familia", titulo: "Família", render: l => nomeFamilia(l.familia) },
          { id: "placar", titulo: "Empurrou as sorteadas − as não sorteadas", alinhar: "right", mono: true, render: l => <span style={{ color: l.placar > 0 ? T.bom : l.placar < 0 ? T.ruim : T.text }}>{l.placar >= 0 ? "+" : ""}{dec(l.placar * 100, 4)} p.p.</span> },
          { id: "v", titulo: "", render: l => (Math.abs(l.placar) < 1e-7 ? <Chip>sem peso</Chip> : l.placar > 0 ? <Chip tom="bom">apontou certo</Chip> : <Chip tom="ruim">apontou errado</Chip>) },
        ]} linhas={quem.map(q => ({ ...q, __id: q.familia }))} />
      </div>

      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Rotulo>Cada dezena: o que se sabia antes × o que aconteceu</Rotulo>
          <div style={{ display: "flex", gap: 4 }}>
            {[["prob", "por probabilidade"], ["saiu", "sorteadas primeiro"], ["n", "por dezena"]].map(([k, r]) => <Botao key={k} pequeno variante={ordem === k ? "secundario" : "discreto"} onClick={() => setOrdem(k)}>{r}</Botao>)}
          </div>
        </div>
        <Tabela colunas={[
          { id: "n", titulo: "Dezena", mono: true, render: l => formatarNum(l.n) },
          { id: "ant", titulo: "Saiu no anterior?", render: l => (l.anterior ? "sim" : "não") },
          { id: "atraso", titulo: "Atraso", alinhar: "right", mono: true },
          { id: "f10", titulo: "Nos últimos 10", alinhar: "right", mono: true, render: l => `${l.f10}/10` },
          { id: "prob", titulo: "Prob. prevista", alinhar: "right", mono: true, render: l => pct(l.prob, 2) },
          { id: "pos", titulo: "Posição", alinhar: "right", mono: true, render: l => `${l.pos}º${l.noJogo ? " · no jogo" : ""}` },
          { id: "saiu", titulo: "Saiu?", render: l => (l.saiu ? <Chip tom={l.noJogo ? "bom" : "alerta"}>saiu{l.noJogo ? "" : " (fora do jogo)"}</Chip> : <Chip>não</Chip>) },
        ]} linhas={ordenado.map(c => ({ ...c, __id: c.n }))} />
      </div>
    </Card>
  );
}

function PainelOmega({ ins }) {
  const bz = ins.boltzmann;
  const maxIdade = Math.max(1, ...ins.regimes.map(r => r.idade));
  return (
    <>
      <Card titulo="Especialistas ativos">
        <Tabela colunas={[
          { id: "nome", titulo: "Especialista", render: l => <div><div>{l.familia === "evolucao" ? "🧬 " : ""}{l.nome}</div>{l.familia === "evolucao" && <div style={{ fontSize: 11, color: T.textMuted }}>criado no concurso {l.criadoEm}</div>}</div> },
          { id: "peso", titulo: "Peso", alinhar: "right", mono: true, render: l => pct(l.peso, 1) },
          { id: "vant", titulo: "Vantagem recente", alinhar: "right", mono: true, render: l => (l.familia === "nulo" ? "—" : `${l.vantagemRecente >= 0 ? "+" : ""}${dec(l.vantagemRecente, 2)} nats`) },
          { id: "st", titulo: "", render: l => (l.quarentena ? <Chip tom="ruim">quarentena</Chip> : l.familia === "nulo" ? <Chip>referência</Chip> : l.vantagemRecente > 0 ? <Chip tom="bom">à frente</Chip> : <Chip>atrás</Chip>) },
        ]} linhas={ins.especialistas.map((e, i) => ({ ...e, __id: i }))} />
      </Card>
      <Card titulo="Evolução genética">
        <div style={{ fontSize: 12.5, color: T.textSoft, marginBottom: 8 }}>A cada 300 concursos, uma população de modelos é avaliada nos 450 concursos anteriores, cruza, sofre mutação e só é promovida se também vencer o acaso nos 150 seguintes (validação nunca usada na seleção). No máximo 4 evoluídos vivos; os piores ou em quarentena saem.</div>
        <Tabela vazio="O primeiro ciclo acontece a partir do concurso 600 do replay." colunas={[
          { id: "concurso", titulo: "Ciclo", mono: true },
          { id: "avaliados", titulo: "Genomas", alinhar: "right", mono: true },
          { id: "melhor", titulo: "Melhor no treino", render: l => <div><div style={{ fontFamily: T.mono, fontSize: 11.5 }}>{l.melhor.nome}</div><div style={{ fontSize: 11, color: T.textMuted }}>treino {dec(l.melhor.treino * 1000, 2)} · validação {dec(l.melhor.validacao * 1000, 2)} milinats</div></div> },
          { id: "prom", titulo: "Promovidos", render: l => (l.promovidos.length ? l.promovidos.map(p => <div key={p.nome} style={{ fontFamily: T.mono, fontSize: 11, color: T.bom }}>+ {p.nome}</div>) : <span style={{ color: T.textMuted }}>nenhum passou</span>) },
          { id: "rem", titulo: "Removidos", render: l => (l.removidos.length ? l.removidos.map(p => <div key={p} style={{ fontFamily: T.mono, fontSize: 11, color: T.ruim }}>− {p}</div>) : "—") },
        ]} linhas={ins.evolucoes.slice().reverse().map((e, i) => ({ ...e, __id: i }))} />
      </Card>
      <Card titulo="Máquina de Boltzmann (modelo de Ising)">
        <div style={{ fontSize: 12.5, color: T.textSoft, marginBottom: 8 }}>Cada acoplamento só "acende" quando passa num teste de evidência online (|z| &gt; 3√n). Acoplamento positivo = as dezenas tendem a sair juntas; temporal = uma dezena no sorteio anterior muda a chance de outra no atual.</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
          <Metrica rotulo="Acoplamentos entre dezenas" valor={bz ? bz.nJ : "—"} detalhe="de 300 possíveis" />
          <Metrica rotulo="Acoplamentos temporais" valor={bz ? bz.nK : "—"} detalhe="de 625 possíveis" />
        </div>
        {bz && (bz.nJ + bz.nK === 0
          ? <Aviso tom="info">Nenhuma interação passou no teste: no histórico, nenhuma dupla de dezenas sai junta (ou se evita), e nenhuma dezena influencia o sorteio seguinte, além do acaso.</Aviso>
          : <Tabela colunas={[
            { id: "tipo", titulo: "Tipo" }, { id: "desc", titulo: "Dezenas", mono: true }, { id: "valor", titulo: "Força", alinhar: "right", mono: true, render: l => `${l.valor >= 0 ? "+" : ""}${dec(l.valor, 3)}` },
          ]} linhas={[...bz.J.map((j, i) => ({ __id: `j${i}`, tipo: "mesmo sorteio", desc: `${formatarNum(j.a)} ↔ ${formatarNum(j.b)}`, valor: j.valor })), ...bz.K.map((k, i) => ({ __id: `k${i}`, tipo: "sorteio anterior → atual", desc: `${formatarNum(k.de)} → ${formatarNum(k.para)}`, valor: k.valor }))]} />)}
      </Card>
      <Card titulo="Regimes por dezena (BOCPD)">
        <div style={{ fontSize: 12.5, color: T.textSoft, marginBottom: 8 }}>Idade estimada do comportamento atual de cada dezena (em concursos, até 300). Barra curta = o detector acredita que a dezena mudou de comportamento recentemente.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, alignItems: "end", height: 90 }}>
          {ins.regimes.map(r => <div key={r.numero} title={`nº ${formatarNum(r.numero)}: regime com ~${Math.round(r.idade)} concursos`} style={{ height: `${(r.idade / maxIdade) * 100}%`, background: r.idade < 0.7 * maxIdade ? T.serie2 : T.serie1, borderRadius: "3px 3px 0 0" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, marginTop: 3 }}>{ins.regimes.map(r => <div key={r.numero} style={{ textAlign: "center", fontFamily: T.mono, fontSize: 9.5, color: T.textMuted }}>{formatarNum(r.numero)}</div>)}</div>
        <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11.5, color: T.textSoft, flexWrap: "wrap" }}>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie2, borderRadius: 2, marginRight: 5 }} />regime jovem (mudou há pouco)</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: T.serie1, borderRadius: 2, marginRight: 5 }} />regime estável</span>
        </div>
      </Card>
    </>
  );
}

function Previsao({ sorteios, concursos, proximo, acoes }) {
  const [ativas, setAtivas] = useState(() => new Set(FAMILIAS_SINAL));
  const [base, setBase] = useState(null);      // motor completo
  const [config, setConfig] = useState(null);  // motor com a configuração do centro de controle
  const [calculando, setCalculando] = useState(false);
  const [perm, setPerm] = useState(null);
  const [scan, setScan] = useState(null);
  const [prog, setProg] = useState(null);
  const [dezena, setDezena] = useState(null);
  const [registrado, setRegistrado] = useState(false);
  const [carga, setCarga] = useState(null);
  useEffect(() => {
    let vivo = true;
    setBase(null); setConfig(null); setCarga([0, sorteios.length]);
    simularAsync(sorteios, { concursos, onProgresso: (a, b) => vivo && setCarga([a, b]) }).then(r => { if (vivo) { setBase(r); setCarga(null); } });
    return () => { vivo = false; };
  }, [sorteios]);
  const inspecao = useMemo(() => (config || base ? inspecionar(config || base) : null), [config, base]);
  const atual = config || base;
  const rel = useMemo(() => (atual ? relatorio(atual.registros) : null), [atual]);
  const redundancia = useMemo(() => (atual ? redundanciaFamilias(atual) : null), [atual]);
  const mudancas = useMemo(() => (atual ? resumoMudancas(atual) : null), [atual]);
  if (!atual) return (
    <Card titulo="Treinando o Motor Ω">
      <div style={{ color: T.textSoft, fontSize: 13, marginBottom: 10 }}>Replay test-then-learn em {sorteios.length.toLocaleString("pt-BR")} concursos: banco de características, BOCPD, máquina de Boltzmann, rede neural e ciclos de evolução genética, cada concurso previsto só com o passado.</div>
      {carga && <div style={{ height: 8, background: T.surface2, borderRadius: 4 }}><div style={{ width: `${(carga[0] / carga[1]) * 100}%`, height: "100%", background: T.gold, borderRadius: 4, transition: "width .2s" }} /></div>}
      {carga && <div style={{ fontSize: 12, color: T.textMuted, marginTop: 6, fontFamily: T.mono }}>{carga[0].toLocaleString("pt-BR")} / {carga[1].toLocaleString("pt-BR")}</div>}
    </Card>
  );

  const prox = prever(atual.estado);
  const gov = governanca(atual.estado);
  const cf = dezena ? contrafactual(atual.estado) : null;
  const blocos = [];
  for (let i = 0; i < atual.acertos.length; i += 500) {
    const xs = atual.acertos.slice(i, i + 500), m = media(xs);
    blocos.push({ __id: i, de: concursos[200 + i], ate: concursos[Math.min(200 + i + 499, concursos.length - 1)], media: m, z: (m - 9) / (0.949 / Math.sqrt(xs.length)) });
  }
  const aplicar = async () => {
    if (ativas.size === FAMILIAS_SINAL.length) { setConfig(null); return; }
    setCalculando(true);
    setConfig(await simularAsync(sorteios, { concursos, familiasAtivas: ativas }));
    setCalculando(false);
  };
  const rodarPerm = async n => { setPerm(null); setProg(["perm", 0, n]); const r = await testeTemporal(sorteios, { n, onProgresso: (i, t) => setProg(["perm", i, t]) }); setPerm(r); setProg(null); };
  const rodarScan = async () => { setScan(null); setProg(["scan", 0, FAMILIAS_SINAL.length]); const r = await scannerAblacao(sorteios, { onProgresso: (i, t) => setProg(["scan", i, t]) }); setScan(r); setProg(null); };
  const proxBase = config ? prever(base.estado) : null;

  return (
    <>
      <Card titulo="Motor Ω" acao={config ? <Chip tom="alerta">configuração de teste ativa</Chip> : null}>
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Banco de 26 características em z-score, <b style={{ color: T.goldText }}>detecção bayesiana de mudança de regime</b> (BOCPD) por dezena,
          <b style={{ color: T.goldText }}> máquina de Boltzmann dinâmica</b> (modelo de Ising: interações entre dezenas e de um sorteio para o seguinte),
          <b style={{ color: T.goldText }}> rede neural online</b> e <b style={{ color: T.goldText }}>especialistas criados por evolução genética</b>, promovidos só se
          passarem na validação fora da amostra. Tudo combinado por meta-aprendizado <i>Fixed-Share</i> contra o modelo nulo, com quarentena automática de quem
          fica pior que o acaso. Cada concurso é previsto só com o passado.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Metrica rotulo="Confiança em padrões hoje" valor={pct(prox.confianca)} detalhe="50% = não sei; perto de 100% = padrão forte" tom={prox.confianca > 0.9 ? "bom" : undefined} />
          <Metrica rotulo="Acertos médios (todo o replay)" valor={dec(media(atual.acertos), 3)} detalhe={`${atual.acertos.length.toLocaleString("pt-BR")} concursos · acaso = 9,000`} />
          <Metrica rotulo="Acertos médios (últimos 500)" valor={dec(media(atual.acertos.slice(-500)), 3)} detalhe="o que vale para hoje" />
        </div>
      </Card>

      <Card titulo="Centro de controle">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Desligue famílias e recalcule para comparar com o motor completo. O teste não altera nada salvo.</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {FAMILIAS_SINAL.map(f => (
            <label key={f} style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 12.5, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 8, padding: "5px 9px", cursor: "pointer" }}>
              <input type="checkbox" checked={ativas.has(f)} onChange={e => { const n = new Set(ativas); e.target.checked ? n.add(f) : n.delete(f); setAtivas(n); }} />
              {nomeFamilia(f)}
            </label>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          <Botao onClick={aplicar} disabled={calculando}>{calculando ? "Recalculando…" : "Aplicar e recalcular"}</Botao>
          <Botao variante="discreto" onClick={() => { setAtivas(new Set(FAMILIAS_SINAL)); setConfig(null); }}>Reativar todas</Botao>
        </div>
        {config && (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <Metrica rotulo="Δ acertos médios (config − completo)" valor={dec(media(config.acertos) - media(base.acertos), 4)} />
            <Metrica rotulo="Δ ganho de informação" valor={dec((config.ganho - base.ganho) * 1000, 3)} detalhe="milinats por concurso" />
            <Metrica rotulo="Dezenas iguais no próximo jogo" valor={`${prox.jogo.filter(n => proxBase.jogo.includes(n)).length}/15`} />
          </div>
        )}
      </Card>

      <Card titulo="Governança das famílias">
        <Tabela colunas={[
          { id: "familia", titulo: "Família", render: l => nomeFamilia(l.familia) },
          { id: "status", titulo: "Status", render: l => <Chip tom={STATUS_TOM[l.status]}>{l.status}</Chip> },
          { id: "rec", titulo: "Vantagem recente", alinhar: "right", mono: true, render: l => (l.vantagemRecente == null ? "—" : `${l.vantagemRecente >= 0 ? "+" : ""}${dec(l.vantagemRecente, 1)} nats`) },
          { id: "tot", titulo: "Vantagem acumulada", alinhar: "right", mono: true, render: l => (l.vantagemTotal == null ? "—" : `${l.vantagemTotal >= 0 ? "+" : ""}${dec(l.vantagemTotal, 1)} nats`) },
          { id: "peso", titulo: "Peso hoje", alinhar: "right", mono: true, render: l => pct(prox.familias[l.familia] || 0, 1) },
        ]} linhas={gov.map(g => ({ ...g, __id: g.familia }))} />
        <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 6 }}>Champion: melhor família com vantagem recente &gt; 2 nats (fator de Bayes &gt; 7) sobre o acaso · Challenger: vantagem positiva · Watch: empate com o acaso · Quarantine: mais de 2 nats pior que o acaso, fora da mistura, aprendendo em sombra até melhorar ("evolui ou sai").</div>
      </Card>

      <MaquinaDoTempo res={atual} sorteios={sorteios} concursos={concursos} />

      {inspecao && <PainelOmega ins={inspecao} />}

      <Card titulo="Comparação com baselines permanentes">
        <Tabela colunas={[
          { id: "nome", titulo: "Método" },
          { id: "media", titulo: "Acertos médios", alinhar: "right", mono: true, render: l => dec(l.media, 4) },
          { id: "rec", titulo: "Últimos 500", alinhar: "right", mono: true, render: l => dec(l.recentes, 3) },
          { id: "dif", titulo: "Quântico − método", alinhar: "right", mono: true, render: l => (l.id === "quantico" ? "—" : `${l.dif >= 0 ? "+" : ""}${dec(l.dif, 4)}`) },
          { id: "z", titulo: "z (pareado)", alinhar: "right", mono: true, render: l => (l.id === "quantico" ? "—" : dec(l.z, 2)) },
        ]} linhas={[{ id: "quantico", nome: "Quântico (mistura)", xs: atual.acertos }, ...Object.entries(BASELINES).map(([id, nome]) => ({ id, nome, xs: atual.acertosBaseline[id] }))].map(l => {
          const d = atual.acertos.map((a, i) => a - l.xs[i]), md = media(d);
          const sd = Math.sqrt(d.reduce((s2, v) => s2 + (v - md) ** 2, 0) / Math.max(1, d.length - 1));
          return { ...l, __id: l.id, media: media(l.xs), recentes: media(l.xs.slice(-500)), dif: md, z: sd ? md / (sd / Math.sqrt(d.length)) : 0 };
        })} />
        <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 6 }}>Todos avaliados no mesmo replay, concurso a concurso, com o mesmo passado. z pareado &gt; 2 indicaria que o Quântico supera o método.</div>
      </Card>

      {mudancas && (
        <Card titulo={`O que mudou desde o concurso ${concursos[concursos.length - 1]}`}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
            <Metrica rotulo="Confiança" valor={`${pct(mudancas.confiancaAntes)} → ${pct(mudancas.confiancaDepois)}`} />
            <Metrica rotulo="Entraram no jogo" valor={mudancas.entraram.length ? mudancas.entraram.map(formatarNum).join(" ") : "—"} />
            <Metrica rotulo="Saíram do jogo" valor={mudancas.sairam.length ? mudancas.sairam.map(formatarNum).join(" ") : "—"} />
          </div>
          <div style={{ fontSize: 13, color: T.textSoft }}>
            Famílias que mais mudaram de peso: {mudancas.familias.filter(f => f.familia !== "nulo").slice(0, 3).map(f => `${nomeFamilia(f.familia)} (${f.delta >= 0 ? "+" : ""}${dec(f.delta * 100, 2)} p.p.)`).join(" · ")}.
            {" "}Dezenas que mais mudaram de probabilidade: {mudancas.maioresMudancas.map(m => `${formatarNum(m.numero)} (${m.delta >= 0 ? "+" : ""}${dec(m.delta * 100, 3)} p.p.)`).join(" · ")}.
          </div>
        </Card>
      )}

      <Diagnostico rel={rel} titulo="Diagnóstico científico · Quântico" />

      {redundancia && (
        <Card titulo="Redundância entre famílias">
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: `minmax(120px, 160px) repeat(${redundancia.familias.length}, minmax(34px, 1fr))`, gap: 2, fontSize: 11, minWidth: 480 }}>
              <div />
              {redundancia.familias.map(f => <div key={f} title={nomeFamilia(f)} style={{ textAlign: "center", color: T.textMuted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.slice(0, 5)}</div>)}
              {redundancia.familias.map((f, i) => [
                <div key={f} style={{ color: T.textSoft, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{nomeFamilia(f)}</div>,
                ...redundancia.matriz[i].map((c, j) => <div key={`${i}${j}`} title={`${nomeFamilia(f)} × ${nomeFamilia(redundancia.familias[j])}: correlação ${dec(c, 2)}`} style={{ height: 22, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: T.mono, fontSize: 10, color: T.text, background: c >= 0 ? T.serie2 : T.serie1, opacity: i === j ? 0.25 : 0.15 + Math.min(1, Math.abs(c)) * 0.85 }}>{i === j ? "" : dec(c, 1)}</div>),
              ])}
            </div>
          </div>
          <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>
            Correlação entre o que as famílias preveem (últimos 800 concursos). Acima de 0,7 = dizem praticamente a mesma coisa.
            {(() => { const pares = []; redundancia.familias.forEach((a, i) => redundancia.familias.forEach((b, j) => { if (j > i && b !== "todos" && a !== "todos" && redundancia.matriz[i][j] > 0.7) pares.push(`${nomeFamilia(a)} ~ ${nomeFamilia(b)}`); })); return pares.length ? ` Redundantes: ${pares.join("; ")}.` : ""; })()}
          </div>
        </Card>
      )}

      <Card titulo="Mapa de evidências por dezena">
        <MapaEvidencias previsao={prox} selecionada={dezena} onSelecionar={setDezena} />
        {dezena && (
          <div style={{ marginTop: 14 }}>
            <Rotulo>Nº {formatarNum(dezena)} · probabilidade {pct(prox.probs[dezena], 2)}</Rotulo>
            {(() => { const e = explicarEscolha(prox, dezena); return (
              <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 8 }}>
                {e.entrou ? "Entrou no jogo" : "Ficou fora do jogo"}: {e.posicao}ª posição, {e.margem >= 0 ? "acima" : "abaixo"} do corte (entre a 15ª e a 16ª) por {dec(Math.abs(e.margem) * 100, 4)} p.p.
                {e.familias.length ? ` Quem mais pesou: ${e.familias.map(f => `${nomeFamilia(f.familia)} (${f.contribuicao >= 0 ? "+" : ""}${dec(f.contribuicao * 100, 4)})`).join(", ")}.` : ""}
                {Math.abs(e.margem) < 0.002 ? " A margem é minúscula: na prática, empate com as vizinhas." : ""}
              </div>
            ); })()}
            <Tabela colunas={[
              { id: "familia", titulo: "Família", render: l => nomeFamilia(l.familia) },
              { id: "peso", titulo: "Peso", alinhar: "right", mono: true, render: l => pct(l.peso, 1) },
              { id: "contrib", titulo: "Contribuição", alinhar: "right", mono: true, render: l => <span style={{ color: l.contribuicao > 0 ? T.bom : l.contribuicao < 0 ? T.ruim : T.text }}>{l.contribuicao >= 0 ? "+" : ""}{dec(l.contribuicao * 100, 4)} p.p.</span> },
              { id: "cf", titulo: "Sem esta família", alinhar: "right", mono: true, render: l => { const c = cf.find(x => x.familia === l.familia); return c ? pct(prox.probs[dezena] - c.deltas[dezena], 2) : "—"; } },
            ]} linhas={explicarDezena(prox, dezena).filter(l => l.familia !== "nulo").map(l => ({ ...l, __id: l.familia }))} />
            <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 6 }}>"Sem esta família" é o contrafactual leave-one-family-out: a probabilidade se a família fosse ignorada hoje.</div>
          </div>
        )}
      </Card>

      <Card titulo="Desempenho por época">
        <Tabela colunas={[
          { id: "faixa", titulo: "Concursos", mono: true, render: l => `${l.de}–${l.ate}` },
          { id: "media", titulo: "Acertos médios", alinhar: "right", mono: true, render: l => dec(l.media, 3) },
          { id: "z", titulo: "z vs acaso", alinhar: "right", mono: true, render: l => <span style={{ color: l.z > 2 ? T.bom : T.text }}>{dec(l.z, 2)}</span> },
        ]} linhas={blocos} />
      </Card>
      <Card titulo="Confiança em padrões ao longo do histórico">
        <LinhaTempo rotuloY="confiança" pontos={atual.pontos} />
      </Card>

      <Card titulo={`Próximo concurso (${proximo.concurso}${proximo.data ? ` · ${proximo.data} estimada` : ""})`}>
        <BarrasProbabilidade probs={prox.probs} jogo={prox.jogo} onSelecionar={setDezena} selecionado={dezena} />
        <div style={{ marginTop: 12 }}><Bolinhas numeros={prox.jogo} /></div>
        {prox.confianca < 0.9 && <Aviso tom="info">Com confiança abaixo de 90%, estas diferenças de probabilidade são ruído: qualquer jogo tem a mesma chance. Use o Gerador para ganhar no rateio.</Aviso>}
        <div style={{ marginTop: 10 }}>
          <Botao variante="secundario" disabled={registrado || !!config} title={config ? "Volte ao motor completo para registrar" : ""} onClick={async () => { await acoes.registrarDiarioMotor(proximo.concurso, "quantico", prox.jogo, prox.probs); setRegistrado(true); }}>{registrado ? "Registrado no arquivo" : "Registrar no arquivo de previsões"}</Botao>
        </div>
      </Card>

      <Card titulo="Testes adversariais">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>
          <b style={{ color: T.goldText }}>Padrão temporal:</b> embaralha a ordem dos concursos (destrói memória, Markov, KNN e tendências; mantém a frequência global) e treina tudo de novo.
          <br /><b style={{ color: T.goldText }}>Scanner de ablação:</b> roda o replay inteiro sem cada família. Família que ao sair melhora o resultado está atrapalhando. Leva cerca de um minuto.
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[10, 20].map(n => <Botao key={n} variante="discreto" disabled={!!prog} onClick={() => rodarPerm(n)}>Temporal · {n} embaralhamentos</Botao>)}
          <Botao variante="discreto" disabled={!!prog} onClick={rodarScan}>Scanner de ablação</Botao>
          {prog && <Chip tom="ouro">{prog[0] === "perm" ? "embaralhando" : "ablação"} {prog[1]}/{prog[2]}</Chip>}
        </div>
        {perm && <Aviso tom={perm.p < 0.05 ? "bom" : "alerta"}>Ganho real {dec(perm.ganhoReal * 1000, 3)} milinats/concurso · embaralhados: média {dec(media(perm.nulos) * 1000, 3)} · p = {dec(perm.p, 3)}: {perm.p < 0.05 ? "há padrão temporal além da frequência." : "nenhum padrão temporal além do que a frequência já explica."}</Aviso>}
        {scan && (
          <div style={{ marginTop: 12 }}>
            <Tabela colunas={[
              { id: "familia", titulo: "Sem a família", render: l => nomeFamilia(l.familia) },
              { id: "dg", titulo: "Ela contribui (ganho)", alinhar: "right", mono: true, render: l => `${l.deltaGanho >= 0 ? "+" : ""}${dec(l.deltaGanho * 1000, 3)}` },
              { id: "da", titulo: "Δ acertos", alinhar: "right", mono: true, render: l => `${l.deltaAcertos >= 0 ? "+" : ""}${dec(l.deltaAcertos, 4)}` },
              { id: "dr", titulo: "Δ últimos 500", alinhar: "right", mono: true, render: l => `${l.deltaRecentes >= 0 ? "+" : ""}${dec(l.deltaRecentes, 3)}` },
              { id: "v", titulo: "", render: l => (l.deltaGanho > 0.0001 ? <Chip tom="bom">ajuda</Chip> : l.deltaGanho < -0.0001 ? <Chip tom="alerta">atrapalha</Chip> : <Chip>neutra</Chip>) },
            ]} linhas={scan.linhas.map(l => ({ ...l, __id: l.familia }))} />
            {scan.linhas.some(l => l.deltaGanho < -0.0001) && (
              <div style={{ marginTop: 10 }}>
                <Botao pequeno variante="secundario" onClick={() => setAtivas(new Set(FAMILIAS_SINAL.filter(f => !scan.linhas.find(l => l.familia === f && l.deltaGanho < -0.0001))))}>Sugestão: desligar as que atrapalham (depois "Aplicar e recalcular")</Botao>
              </div>
            )}
          </div>
        )}
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
  const [cfg, setCfg] = useState({ quantidade: "5", fixos: "", excluidos: "", sobreposicao: "10", preco: "3,50", usarMotor: false, semente: "", metodo: "ambos" });
  const [res, setRes] = useState(null);
  const [rodando, setRodando] = useState(false);
  const preco = Number(cfg.preco.replace(",", ".")) || 3.5;
  const gerar = () => {
    setRodando(true);
    setTimeout(() => {
      try {
        // Seed registrado: a mesma seed + mesma configuração + mesmo histórico = mesmos jogos.
        const semente = Number(cfg.semente) || Math.floor(Math.random() * 1e9);
        const port = gerarPortfolio({
          semente, metodo: cfg.metodo,
          quantidade: Math.min(50, Math.max(1, Number(cfg.quantidade) || 5)), modelo, ultimo,
          fixos: parseNumeros(cfg.fixos), excluidos: parseNumeros(cfg.excluidos), sobreposicaoMax: Number(cfg.sobreposicao) || 10,
          probs: cfg.usarMotor ? previsaoMotor?.probs : null, confianca: cfg.usarMotor ? previsaoMotor?.confianca : 0,
        });
        const jogos = port.jogos;
        const avaliados = jogos.map(j => ({ jogo: j, ...retornoEsperado(j, { modelo, ultimo, preco }) }));
        setRes({ avaliados, conjunto: simularConjunto(jogos), erro: null, semente, metodo: port.metodo, energias: port.energias });
      } catch (e) { setRes({ erro: e.message }); }
      setRodando(false);
    }, 30);
  };
  const referencia = useMemo(() => retornoEsperado([3, 6, 7, 9, 12, 13, 14, 16, 17, 18, 19, 21, 22, 24, 25], { modelo, ultimo, preco }), [modelo, ultimo, preco]);
  return (
    <>
      <Card titulo="Gerador · annealing quântico">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Busca, entre milhões de combinações, jogos com <b style={{ color: T.goldText }}>baixa popularidade</b> (prêmio dividido com menos gente) e pouco sobrepostos entre si.
          O otimizador principal é o <b style={{ color: T.goldText }}>annealing quântico simulado</b> (Monte Carlo de integral de caminho): 8 réplicas do portfólio acopladas por um
          campo transversal que diminui aos poucos, o que permite "tunelar" entre soluções. Ele concorre com o recozimento clássico e fica o de menor energia.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
          <div><Rotulo>Quantidade de jogos</Rotulo><input style={estiloInput} value={cfg.quantidade} onChange={e => setCfg({ ...cfg, quantidade: e.target.value.replace(/\D/g, "") })} /></div>
          <div><Rotulo>Fixos</Rotulo><input style={{ ...estiloInput, fontFamily: T.mono }} value={cfg.fixos} placeholder="ex.: 7 13" onChange={e => setCfg({ ...cfg, fixos: e.target.value })} /></div>
          <div><Rotulo>Excluídos</Rotulo><input style={{ ...estiloInput, fontFamily: T.mono }} value={cfg.excluidos} placeholder="ex.: 1 25" onChange={e => setCfg({ ...cfg, excluidos: e.target.value })} /></div>
          <div><Rotulo>Máx. dezenas em comum</Rotulo><input style={estiloInput} value={cfg.sobreposicao} onChange={e => setCfg({ ...cfg, sobreposicao: e.target.value.replace(/\D/g, "") })} /></div>
          <div><Rotulo>Preço da aposta (R$)</Rotulo><input style={estiloInput} value={cfg.preco} onChange={e => setCfg({ ...cfg, preco: e.target.value })} /></div>
          <div><Rotulo>Otimizador</Rotulo>
            <select style={estiloInput} value={cfg.metodo} onChange={e => setCfg({ ...cfg, metodo: e.target.value })}>
              <option value="ambos">Quântico + clássico (melhor dos dois)</option>
              <option value="quantico">Annealing quântico simulado</option>
              <option value="classico">Recozimento clássico</option>
            </select>
          </div>
          <div><Rotulo>Seed (vazio = nova)</Rotulo><input style={{ ...estiloInput, fontFamily: T.mono }} value={cfg.semente} placeholder="aleatória" onChange={e => setCfg({ ...cfg, semente: e.target.value.replace(/\D/g, "") })} /></div>
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
          <Card titulo="Exposição e sobreposição">
            <Rotulo>Em quantos jogos cada dezena aparece</Rotulo>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, alignItems: "end", height: 70 }}>
              {Array.from({ length: 25 }, (_, i) => { const c = res.avaliados.filter(a => a.jogo.includes(i + 1)).length; return <div key={i} title={`nº ${formatarNum(i + 1)}: ${c} de ${res.avaliados.length} jogos`} style={{ height: `${(c / res.avaliados.length) * 100}%`, minHeight: c ? 2 : 0, background: T.serie1, borderRadius: "3px 3px 0 0" }} />; })}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(25, 1fr)", gap: 2, marginTop: 3 }}>{Array.from({ length: 25 }, (_, i) => <div key={i} style={{ textAlign: "center", fontFamily: T.mono, fontSize: 9.5, color: T.textMuted }}>{formatarNum(i + 1)}</div>)}</div>
            {res.avaliados.length > 1 && res.avaliados.length <= 12 && (
              <div style={{ marginTop: 12 }}>
                <Rotulo>Dezenas em comum entre os jogos</Rotulo>
                <div style={{ display: "grid", gridTemplateColumns: `28px repeat(${res.avaliados.length}, 30px)`, gap: 2, fontSize: 11, fontFamily: T.mono }}>
                  <div />{res.avaliados.map((_, j) => <div key={j} style={{ textAlign: "center", color: T.textMuted }}>J{j + 1}</div>)}
                  {res.avaliados.map((a, i) => [<div key={`r${i}`} style={{ color: T.textMuted }}>J{i + 1}</div>, ...res.avaliados.map((b, j) => { const c = a.jogo.filter(n => b.jogo.includes(n)).length; return <div key={`${i}${j}`} style={{ textAlign: "center", padding: "3px 0", borderRadius: 3, background: i === j ? T.surface2 : T.serie2, opacity: i === j ? 0.5 : 0.25 + (c / 15) * 0.75, color: T.text }}>{i === j ? "—" : c}</div>; })])}
                </div>
              </div>
            )}
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>Otimizador vencedor: <b style={{ color: T.goldText }}>{res.metodo === "quantico" ? "annealing quântico simulado" : "recozimento clássico"}</b>{Object.keys(res.energias).length > 1 ? ` (energia quântico ${dec(res.energias.quantico, 3)} · clássico ${dec(res.energias.classico, 3)}; menor é melhor)` : ""}. Seed desta geração: <span style={{ fontFamily: T.mono, color: T.goldText }}>{res.semente}</span> · repita com a mesma seed para obter os mesmos jogos.</div>
          </Card>
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
  const proximo = estimarProximo(app.resultados);
  const [previsaoMotor, setPrevisaoMotor] = useState(null);
  useEffect(() => { if (secao === "gerador" && !previsaoMotor) simularAsync(sorteios).then(r => setPrevisaoMotor(prever(r.estado))); }, [secao]);

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

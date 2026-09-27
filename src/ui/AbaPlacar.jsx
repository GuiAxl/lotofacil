import { useState, useMemo } from "react";
import { T, Card, Botao, Chip, Tabela, Aviso, Metrica, DistribuicaoAcertos, LinhaTempo } from "./base.jsx";
import { pct, dec } from "./estado.js";
import { MOTORES, testePermutacao } from "../estatistica/motor.js";
import { media, desvio, DP_ACERTOS_ACASO } from "../estatistica/matematica.js";
import { placarDiario } from "../estatistica/laboratorio.js";

export default function AbaPlacar({ app, concursos, simulacao, calculando }) {
  const [perm, setPerm] = useState(null);
  const [progresso, setProgresso] = useState(null);
  const [nPerm, setNPerm] = useState(50);

  const resultadosPorConcurso = useMemo(() => new Map(app.resultados.map(r => [r.concurso, r.resultado])), [app.resultados]);
  const diario = useMemo(() => placarDiario(app.diario, resultadosPorConcurso), [app.diario, resultadosPorConcurso]);

  const rodarPerm = async () => {
    setPerm(null); setProgresso([0, nPerm]);
    const r = await testePermutacao(concursos, { n: nPerm, minTreino: app.config.minTreino, onProgresso: (i, n) => setProgresso([i, n]) });
    setPerm(r); setProgresso(null);
  };

  const linhasMotores = simulacao ? Object.entries(simulacao.porMotor).map(([m, v]) => {
    const n = v.acertos.length, mm = media(v.acertos);
    const ep = n > 1 ? desvio(v.acertos) / Math.sqrt(n) : NaN;
    return { __id: m, motor: MOTORES[m].nome, n, media: mm, ic: [mm - 1.96 * ep, mm + 1.96 * ep], z: (mm - 9) / (DP_ACERTOS_ACASO / Math.sqrt(n)), max: n ? Math.max(...v.acertos) : null, onze: v.acertos.filter(a => a >= 11).length };
  }) : [];
  const nAvaliados = simulacao?.porMotor.astral.acertos.length || 0;
  const ganho = simulacao?.perda.n ? (simulacao.perda.referencia - simulacao.perda.astral) / simulacao.perda.n : null;
  const pesoFinal = simulacao?.trilha.at(-1)?.pesoAstral;

  const veredito = !simulacao || nAvaliados < 20 ? null
    : perm ? (perm.p.ganhoPerda < 0.05
      ? { tom: "bom", txt: `Sinal detectado: o motor Astral prevê melhor que ${Math.round((1 - perm.p.ganhoPerda) * 100)}% das versões com resultados embaralhados (p = ${dec(perm.p.ganhoPerda, 3)}). Continue acumulando concursos e confira no placar prospectivo.` }
      : { tom: "alerta", txt: `Sem sinal detectável até aqui: o motor com os dados reais não supera as versões com resultados embaralhados (p = ${dec(perm.p.ganhoPerda, 2)}). Mais mapas aumentam o poder do teste.` })
    : { tom: "info", txt: "Rode o teste de permutação para saber se o desempenho é sinal ou acaso." };

  return (
    <>
      <Card titulo="Placar honesto (simulação cronológica)" acao={calculando && <Chip tom="ouro">recalculando…</Chip>}>
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Cada concurso com mapa é previsto usando <b style={{ color: T.goldText }}>só os concursos anteriores</b>, exatamente como aconteceria na vida real,
          e só depois o resultado entra no aprendizado. Frequência e Aleatório são controles sem astrologia: o Astral só tem valor se ficar acima deles.
        </div>
        {!simulacao && <div style={{ color: T.textMuted }}>Calculando…</div>}
        {simulacao && nAvaliados === 0 && <Aviso tom="info">Ainda não há concursos avaliáveis: é preciso ter pelo menos {app.config.minTreino} mapas com resultado para treinar antes de começar a medir.</Aviso>}
        {simulacao && nAvaliados > 0 && (
          <>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
              <Metrica rotulo="Concursos avaliados" valor={nAvaliados} />
              <Metrica rotulo="Astral · média de acertos" valor={dec(media(simulacao.porMotor.astral.acertos), 3)} detalhe="acaso = 9,000" tom={media(simulacao.porMotor.astral.acertos) > 9.2 ? "bom" : undefined} />
              <Metrica rotulo="Ganho de informação" valor={dec(ganho, 4)} detalhe="nats/concurso sobre os modelos sem sinal" tom={ganho > 0 ? "bom" : "ruim"} />
              <Metrica rotulo="Confiança atual nos sinais" valor={pct(pesoFinal)} detalhe="peso dos modelos astrais" />
            </div>
            <Tabela colunas={[
              { id: "motor", titulo: "Motor" },
              { id: "media", titulo: "Média", alinhar: "right", mono: true, render: l => dec(l.media, 3) },
              { id: "ic", titulo: "IC 95%", alinhar: "right", mono: true, render: l => `${dec(l.ic[0], 2)} – ${dec(l.ic[1], 2)}` },
              { id: "z", titulo: "z vs acaso", alinhar: "right", mono: true, render: l => dec(l.z, 2) },
              { id: "onze", titulo: "≥ 11", alinhar: "right", mono: true, render: l => `${l.onze} (${pct(l.onze / l.n)})` },
              { id: "max", titulo: "Máx.", alinhar: "right", mono: true },
            ]} linhas={linhasMotores} />
            <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 6 }}>Por acaso, ≥ 11 acertos acontece em 10,6% dos jogos.</div>
          </>
        )}
      </Card>

      {simulacao && nAvaliados > 0 && (
        <>
          <Card titulo="Teste de permutação">
            <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 10 }}>
              Embaralha os resultados entre os dias (os mapas ficam onde estão) e roda a simulação inteira de novo, várias vezes. Se não existe ligação
              entre mapa e resultado, o motor real fica no meio dessas versões embaralhadas.
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <select value={nPerm} onChange={e => setNPerm(Number(e.target.value))} style={{ background: T.bg, color: T.text, border: `1px solid ${T.border}`, borderRadius: 8, padding: "7px 9px" }}>
                {[20, 50, 100, 200].map(n => <option key={n} value={n}>{n} embaralhamentos</option>)}
              </select>
              <Botao onClick={rodarPerm} disabled={!!progresso}>{progresso ? `Rodando… ${progresso[0]}/${progresso[1]}` : "Rodar teste"}</Botao>
            </div>
            {perm && (
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <Metrica rotulo="p · ganho de informação" valor={dec(perm.p.ganhoPerda, 3)} tom={perm.p.ganhoPerda < 0.05 ? "bom" : undefined} detalhe="principal" />
                <Metrica rotulo="p · acertos Astral" valor={dec(perm.p.astral, 3)} tom={perm.p.astral < 0.05 ? "bom" : undefined} />
                <Metrica rotulo="p · acertos Legado v12" valor={dec(perm.p.legado, 3)} tom={perm.p.legado < 0.05 ? "bom" : undefined} />
              </div>
            )}
          </Card>
          {veredito && <Aviso tom={veredito.tom}>{veredito.txt}</Aviso>}
          <Card titulo="Distribuição de acertos · Astral">
            <DistribuicaoAcertos acertos={simulacao.porMotor.astral.acertos} />
          </Card>
          <Card titulo="Confiança do sistema nos sinais ao longo do tempo">
            <LinhaTempo rotuloY="peso astral" pontos={simulacao.trilha.map(t => ({ rotulo: t.concurso, valor: t.pesoAstral }))} />
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 6 }}>Sobe quando os modelos com sinais do mapa passam a prever melhor que os modelos sem sinal.</div>
          </Card>
        </>
      )}

      <Card titulo="Placar prospectivo (diário)">
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Só jogos registrados antes do sorteio. É a prova definitiva.</div>
        <Tabela vazio="Nenhum jogo registrado ainda. Na aba Concurso, gere a previsão de um sorteio futuro e registre." colunas={[
          { id: "motor", titulo: "Motor", render: l => MOTORES[l.__id]?.nome || (l.__id === "quantico" ? "Quântico" : l.__id) },
          { id: "jogos", titulo: "Registrados", alinhar: "right", mono: true },
          { id: "apurados", titulo: "Apurados", alinhar: "right", mono: true },
          { id: "media", titulo: "Média", alinhar: "right", mono: true, render: l => dec(l.media, 2) },
          { id: "ult", titulo: "Últimos", render: l => l.lista.slice(-6).map(x => `${x.concurso}: ${x.acertos}`).join(" · ") },
        ]} linhas={Object.entries(diario).map(([m, l]) => ({ ...l, __id: m }))} />
      </Card>
    </>
  );
}

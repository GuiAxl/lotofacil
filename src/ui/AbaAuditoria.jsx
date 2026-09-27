// Centro de auditoria: saúde científica, integridade dos dados, autoteste,
// linha do tempo de alterações, manifesto/exportações e glossário.
import { useState, useMemo } from "react";
import { T, Card, Botao, Chip, Tabela, Aviso, Metrica } from "./base.jsx";
import { verificarHistorico, linhaDoTempo } from "../auditoria/integridade.js";
import { executarAutoteste } from "../auditoria/autoteste.js";
import { placarDiario } from "../estatistica/laboratorio.js";
import { VERSAO, VERSAO_MOTORES } from "../versao.js";

const GLOSSARIO = [
  ["Test-then-learn (replay)", "Cada concurso é previsto só com os concursos anteriores; só depois o resultado entra no aprendizado. É como o sistema funcionaria na vida real."],
  ["Modelo nulo", "A hipótese de que o sorteio é aleatório: cada dezena tem 60% de chance e um jogo acerta 9 em média."],
  ["Brier / log-loss", "Medem o erro das probabilidades previstas. Ganho positivo = o motor previu melhor que o nulo."],
  ["AUC", "Chance de uma dezena sorteada ter recebido probabilidade maior que uma não sorteada. 0,5 = sem informação."],
  ["Calibração (ECE)", "Diferença média entre o que o motor diz (ex.: 62%) e o que acontece. Perto de 0 = calibrado."],
  ["z Newey-West", "Quantos erros-padrão a vantagem está acima de zero, corrigindo autocorrelação. Acima de 2 começa a ser relevante."],
  ["Bootstrap em blocos", "Reamostra trechos do histórico para obter um intervalo de confiança honesto."],
  ["Phase-shift", "Desalinha previsões e resultados de propósito. Se o motor alinhado não vence os desalinhados, não há informação."],
  ["E-processo / e-value", "Placar de evidência que pode ser consultado a qualquer momento sem inflar falso positivo. Acima de 20 = evidência (5%)."],
  ["Teste de permutação", "Embaralha resultados (ou a ordem) e treina de novo. Se o real não supera os embaralhados, é acaso."],
  ["Ablação", "Tira uma família e roda tudo de novo, para medir quanto ela realmente contribui."],
  ["Contrafactual", "Como ficaria a probabilidade de uma dezena se uma família fosse ignorada hoje."],
  ["Governança", "Champion/Challenger/Watch/Quarantine: status de cada família pela vantagem recente sobre o acaso."],
  ["Mistura bayesiana", "Todos os modelos votam com peso proporcional ao quanto previram bem (com esquecimento do passado)."],
  ["FDR", "Controle da proporção de falsas descobertas quando se fazem milhares de testes."],
  ["SPRT", "Teste sequencial do Laboratório: decide confirmar ou rejeitar uma hipótese assim que há evidência suficiente."],
  ["Popularidade", "Quanto o público joga combinações parecidas. Não muda a chance de ganhar; muda com quantos você divide o prêmio."],
  ["Controle negativo / placebo", "Dados sem sinal (ou com o sinal destruído) em que o motor NÃO pode acusar nada."],
  ["Controle positivo", "Dados com um sinal plantado de propósito, que o motor PRECISA encontrar."],
];

function baixar(nome, conteudo, tipo) {
  try {
    const url = URL.createObjectURL(new Blob([conteudo], { type: tipo }));
    const a = document.createElement("a");
    a.href = url; a.download = nome; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch { return false; }
}

export default function AbaAuditoria({ app, concursos, acoes, hashHist }) {
  const [rodando, setRodando] = useState(null);
  const [msg, setMsg] = useState(null);
  const verif = useMemo(() => verificarHistorico(app.resultados), [app.resultados]);
  const eventos = useMemo(() => linhaDoTempo(app), [app]);
  const auto = app.autoteste;
  const nMapas = concursos.filter(c => c.chaves).length;
  const resPorConcurso = useMemo(() => new Map(app.resultados.map(r => [r.concurso, r.resultado])), [app.resultados]);
  const placar = useMemo(() => placarDiario(app.diario, resPorConcurso), [app.diario, resPorConcurso]);
  const previsoesSemManifesto = app.diario.filter(d => !d.manifesto).length;

  const indicadores = [
    { nome: "Integridade dos dados", ok: verif.integro, texto: verif.integro ? `${verif.n.toLocaleString("pt-BR")} concursos sem problema grave` : `${verif.graves} problema(s) grave(s)` },
    { nome: "Autoteste científico", ok: auto ? auto.aprovados === auto.total : null, texto: auto ? `${auto.aprovados}/${auto.total} em ${new Date(auto.em).toLocaleDateString("pt-BR")}` : "ainda não executado" },
    { nome: "Reprodutibilidade", ok: previsoesSemManifesto === 0, texto: previsoesSemManifesto ? `${previsoesSemManifesto} previsão(ões) antiga(s) sem manifesto` : "toda previsão tem manifesto e hash" },
    { nome: "Correções manuais", ok: true, texto: `${Object.keys(app.correcoes || {}).length} registrada(s), com motivo` },
  ];
  const pontuacao = indicadores.filter(i => i.ok === true).length / indicadores.length;

  const rodarAutoteste = async () => {
    setRodando(0);
    const r = await executarAutoteste(i => setRodando(i));
    acoes.salvarAutoteste(r);
    setRodando(null);
  };

  const manifesto = () => ({
    sistema: "Lotofácil Astro", versao: VERSAO, motores: VERSAO_MOTORES, geradoEm: new Date().toISOString(),
    historico: { concursos: verif.n, primeiro: verif.primeiro, ultimo: verif.ultimo, hash: hashHist, correcoes: app.correcoes || {} },
    mapas: nMapas, hipoteses: app.hipoteses.length, previsoesArquivadas: app.diario.length, config: app.config,
    autoteste: auto || null, placarProducao: placar,
  });
  const csvHistorico = () => ["concurso;data;dezenas;corrigido", ...app.resultados.map(r => `${r.concurso};${r.data};${r.resultado.join(" ")};${r.corrigido ? "sim" : ""}`)].join("\n");
  const csvPrevisoes = () => ["id;concurso;motor;registradoEm;jogo;acertos;hashHistorico;hash", ...app.diario.map(d => {
    const res = resPorConcurso.get(d.concurso);
    return `${d.id};${d.concurso};${d.motor};${d.registradoEm};${d.jogo.join(" ")};${res ? d.jogo.filter(n => res.includes(n)).length : ""};${d.manifesto?.hashHistorico || ""};${d.hash}`;
  })].join("\n");
  const exportar = (nome, conteudo, tipo) => setMsg(baixar(nome, conteudo, tipo) ? `${nome} gerado.` : "Download bloqueado neste ambiente. Use a aba Backup para copiar os dados.");

  return (
    <>
      <Card titulo="Saúde científica">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
          <Metrica rotulo="Índice de saúde" valor={`${Math.round(pontuacao * 100)}%`} tom={pontuacao === 1 ? "bom" : pontuacao >= 0.5 ? "alerta" : "ruim"} detalhe="indicadores aprovados" />
          <Metrica rotulo="Hash do histórico" valor={hashHist} detalhe="muda se qualquer resultado mudar" />
          <Metrica rotulo="Versão" valor={VERSAO} detalhe={Object.values(VERSAO_MOTORES).join(" · ")} />
        </div>
        <Tabela colunas={[
          { id: "nome", titulo: "Indicador" },
          { id: "ok", titulo: "", render: l => <Chip tom={l.ok === true ? "bom" : l.ok === false ? "ruim" : "neutro"}>{l.ok === true ? "ok" : l.ok === false ? "atenção" : "pendente"}</Chip> },
          { id: "texto", titulo: "Situação" },
        ]} linhas={indicadores.map(i => ({ ...i, __id: i.nome }))} />
      </Card>

      <Card titulo="Autoteste científico" acao={<Botao onClick={rodarAutoteste} disabled={rodando != null}>{rodando != null ? `Rodando ${rodando}/6…` : "Rodar autoteste"}</Botao>}>
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>
          Roda o motor Quântico em históricos sintéticos cujo resultado já se sabe: acaso puro e placebo (não pode acusar nada), padrões plantados
          (precisa encontrar), vazamento (mudar o futuro não pode mudar o passado) e determinismo (mesma entrada, mesma saída). Leva ~10 s.
        </div>
        {auto && <Tabela colunas={[
          { id: "nome", titulo: "Teste", render: l => <div><div>{l.nome}</div><div style={{ fontSize: 11.5, color: T.textMuted }}>{l.descricao}</div></div> },
          { id: "ok", titulo: "", render: l => <Chip tom={l.ok ? "bom" : "ruim"}>{l.ok ? "passou" : "falhou"}</Chip> },
          { id: "detalhe", titulo: "Resultado", render: l => <span style={{ fontSize: 12.5 }}>{l.detalhe}</span> },
          { id: "ms", titulo: "Tempo", alinhar: "right", mono: true, render: l => `${(l.ms / 1000).toFixed(1)} s` },
        ]} linhas={auto.testes.map(t => ({ ...t, __id: t.nome }))} />}
      </Card>

      <Card titulo="Integridade dos dados">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
          <Metrica rotulo="Concursos" valor={verif.n.toLocaleString("pt-BR")} detalhe={`${verif.primeiro} a ${verif.ultimo}`} />
          <Metrica rotulo="Problemas graves" valor={verif.graves} tom={verif.graves ? "ruim" : "bom"} detalhe="duplicados, ausentes, dezenas ou datas inválidas" />
          <Metrica rotulo="Avisos" valor={verif.problemas.length - verif.graves} detalhe="ex.: sorteio em domingo, resultado repetido" />
        </div>
        {verif.problemas.length ? (
          <details>
            <summary style={{ cursor: "pointer", color: T.textSoft, fontSize: 13 }}>Ver lista ({verif.problemas.length})</summary>
            <div style={{ marginTop: 8, maxHeight: 260, overflowY: "auto" }}>
              {verif.problemas.map((p, i) => <div key={i} style={{ fontSize: 12.5, padding: "3px 0", color: p.tipo === "aviso" ? T.textSoft : T.ruim }}>{p.msg}</div>)}
            </div>
          </details>
        ) : <Aviso tom="bom">Nenhum problema encontrado.</Aviso>}
        <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>Proveniência: concursos 1–3789 da planilha oficial da Caixa (embutida); concursos novos digitados à mão ficam marcados na linha do tempo; correções têm motivo e data.</div>
      </Card>

      <Card titulo="Linha do tempo de alterações">
        <Tabela vazio="Nenhuma alteração registrada ainda." colunas={[
          { id: "em", titulo: "Quando", mono: true, render: l => new Date(l.em).toLocaleString("pt-BR") },
          { id: "tipo", titulo: "Tipo", render: l => <Chip>{l.tipo}</Chip> },
          { id: "texto", titulo: "O quê" },
        ]} linhas={eventos.slice(0, 80).map((e, i) => ({ ...e, __id: i }))} />
      </Card>

      <Card titulo="Manifesto e exportações">
        {msg && <Aviso tom="info">{msg}</Aviso>}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Botao variante="secundario" onClick={() => exportar(`manifesto-${hashHist}.json`, JSON.stringify(manifesto(), null, 2), "application/json")}>Manifesto científico (JSON)</Botao>
          <Botao variante="discreto" onClick={() => exportar("historico.csv", csvHistorico(), "text/csv")}>Histórico (CSV)</Botao>
          <Botao variante="discreto" onClick={() => exportar("arquivo-de-previsoes.csv", csvPrevisoes(), "text/csv")}>Arquivo de previsões (CSV)</Botao>
        </div>
        <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>O manifesto traz versão dos motores, hash do histórico, correções, configuração, último autoteste e o placar de produção: o suficiente para reproduzir e auditar o estado atual.</div>
      </Card>

      <Card titulo="Glossário">
        {GLOSSARIO.map(([termo, texto]) => (
          <div key={termo} style={{ padding: "6px 0", borderTop: `1px solid ${T.borderSoft}`, fontSize: 13 }}>
            <b style={{ color: T.goldText }}>{termo}.</b> <span style={{ color: T.textSoft }}>{texto}</span>
          </div>
        ))}
      </Card>
    </>
  );
}

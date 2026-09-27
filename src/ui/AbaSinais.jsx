import { useState, useMemo } from "react";
import { T, Card, Botao, Chip, Tabela, Aviso, Metrica, estiloInput } from "./base.jsx";
import { pct, dec, formatarNum } from "./estado.js";
import { descobrirSinais } from "../estatistica/descoberta.js";

export default function AbaSinais({ concursos, meta, acoes }) {
  const [res, setRes] = useState(null);
  const [rodando, setRodando] = useState(false);
  const [busca, setBusca] = useState("");
  const [grupo, setGrupo] = useState("todos");
  const [ordem, setOrdem] = useState("probReal");
  const [minDias, setMinDias] = useState(8);
  const [criado, setCriado] = useState(null);

  const rodar = () => {
    setRodando(true);
    setTimeout(() => { setRes(descobrirSinais(concursos, { minDias })); setRodando(false); }, 30);
  };

  const grupos = useMemo(() => ["todos", ...new Set([...meta.values()].map(m => m.grupo))], [meta]);
  const linhas = useMemo(() => {
    if (!res) return [];
    const b = busca.trim().toLowerCase();
    return res.linhas
      .filter(l => grupo === "todos" || meta.get(l.chave)?.grupo === grupo)
      .filter(l => !b || (meta.get(l.chave)?.rotulo || l.chave).toLowerCase().includes(b) || String(l.numero) === b)
      .sort((a, c) => (ordem === "probReal" ? c.probReal - a.probReal || a.p - c.p : ordem === "p" ? a.p - c.p : Math.abs(c.taxa - 0.6) * Math.sqrt(c.dias) - Math.abs(a.taxa - 0.6) * Math.sqrt(a.dias)))
      .slice(0, 150)
      .map(l => ({ ...l, __id: `${l.chave}:${l.numero}` }));
  }, [res, busca, grupo, ordem, meta]);

  const preRegistrar = async l => {
    await acoes.criarHipotese({ sinal: l.chave, rotuloSinal: meta.get(l.chave)?.rotulo || l.chave, numeros: [l.numero], direcao: l.taxa > 0.6 ? "mais" : "menos", origem: "descoberta", nota: `Descoberta: ${l.hits}/${l.dias} (${pct(l.taxa)}), p=${dec(l.p, 4)}` });
    setCriado(l.__id);
  };

  const veredito = res && (res.provaveis === 0 && res.sobrevivemFDR === 0
    ? { tom: "alerta", txt: `Nenhuma célula sinal × número tem probabilidade ≥ 50% de ser real, e nenhuma sobrevive ao controle de falsas descobertas. ${res.abaixo005} testes deram p < 5%, e o acaso sozinho produziria até ≈ ${Math.round(res.esperadoAcaso)}.` }
    : { tom: "bom", txt: `${res.provaveis} células com probabilidade ≥ 50% de serem reais; ${res.sobrevivemFDR} sobrevivem ao FDR de 10%. Pré-registre as melhores e deixe os próximos concursos confirmarem.` });

  return (
    <>
      <Card titulo="Descoberta de sinais">
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, marginBottom: 12 }}>
          Testa cada sinal contra cada número em todo o histórico com mapa. Para cada par, a coluna mais importante é a
          <b style={{ color: T.goldText }}> probabilidade de ser real</b>: um modelo bayesiano estima, com os próprios dados, quantos efeitos verdadeiros
          existem e qual o tamanho deles. Com muitos testes, p-valores baixos aparecem por acaso; essa coluna já desconta isso.
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, color: T.textSoft }}>Mínimo de dias por sinal</span>
          <input style={{ ...estiloInput, width: 70 }} value={minDias} onChange={e => setMinDias(Math.max(3, Number(e.target.value.replace(/\D/g, "")) || 3))} />
          <Botao onClick={rodar} disabled={rodando}>{rodando ? "Analisando…" : res ? "Rodar de novo" : "Rodar descoberta"}</Botao>
        </div>
      </Card>

      {res && (
        <>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
            <Metrica rotulo="Mapas analisados" valor={res.nMapas} />
            <Metrica rotulo="Testes (sinal × nº)" valor={res.nTestes.toLocaleString("pt-BR")} />
            <Metrica rotulo="p < 5%" valor={res.abaixo005} detalhe={`o acaso produziria até ≈ ${Math.round(res.esperadoAcaso)}`} tom={res.abaixo005 > res.esperadoAcaso * 1.3 ? "bom" : undefined} />
            <Metrica rotulo="Sobrevivem ao FDR 10%" valor={res.sobrevivemFDR} tom={res.sobrevivemFDR ? "bom" : undefined} />
            <Metrica rotulo="Prob. real ≥ 50%" valor={res.provaveis} tom={res.provaveis ? "bom" : undefined} />
            <Metrica rotulo="Efeitos reais estimados" valor={pct(res.hiper.pi1, 2)} detalhe={`das células · κ = ${res.hiper.kappa}`} />
          </div>
          {veredito && <Aviso tom={veredito.tom}>{veredito.txt}</Aviso>}
          <Card>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
              <input style={{ ...estiloInput, flex: "1 1 200px" }} placeholder="Buscar sinal ou número…" value={busca} onChange={e => setBusca(e.target.value)} />
              <select style={{ ...estiloInput, width: "auto" }} value={grupo} onChange={e => setGrupo(e.target.value)}>{grupos.map(g => <option key={g} value={g}>{g === "todos" ? "Todos os grupos" : g}</option>)}</select>
              <select style={{ ...estiloInput, width: "auto" }} value={ordem} onChange={e => setOrdem(e.target.value)}>
                <option value="probReal">Ordenar: prob. de ser real</option>
                <option value="p">Ordenar: p-valor</option>
                <option value="forca">Ordenar: desvio × √dias</option>
              </select>
            </div>
            <Tabela colunas={[
              { id: "sinal", titulo: "Sinal", render: l => <span>{meta.get(l.chave)?.rotulo || l.chave}</span> },
              { id: "numero", titulo: "Nº", mono: true, render: l => formatarNum(l.numero) },
              { id: "hist", titulo: "Saiu", alinhar: "right", mono: true, render: l => `${l.hits}/${l.dias}` },
              { id: "taxa", titulo: "Taxa", alinhar: "right", mono: true, render: l => <span style={{ color: l.taxa > 0.6 ? T.bom : l.taxa < 0.6 ? T.ruim : T.text }}>{pct(l.taxa)}</span> },
              { id: "probReal", titulo: "Prob. real", alinhar: "right", mono: true, render: l => <span style={{ color: l.probReal >= 0.5 ? T.goldText : T.textSoft, fontWeight: l.probReal >= 0.5 ? 700 : 400 }}>{pct(l.probReal, l.probReal < 0.1 ? 1 : 0)}</span> },
              { id: "p", titulo: "p", alinhar: "right", mono: true, render: l => (l.p < 0.001 ? "<0,001" : dec(l.p, 3)) },
              { id: "q", titulo: "q (FDR)", alinhar: "right", mono: true, render: l => dec(Math.min(1, l.q), 2) },
              { id: "metades", titulo: "1ª | 2ª metade", alinhar: "right", mono: true, render: l => <span>{pct(l.taxa1)} | {pct(l.taxa2)} {l.replica ? <Chip tom="bom">replica</Chip> : null}</span> },
              { id: "acao", titulo: "", render: l => <Botao pequeno variante={criado === l.__id ? "discreto" : "secundario"} disabled={criado === l.__id} onClick={() => preRegistrar(l)} title="Congela esta hipótese e passa a testá-la só em sorteios futuros">{criado === l.__id ? "Registrada" : "Pré-registrar"}</Botao> },
            ]} linhas={linhas} vazio="Nenhum sinal com dias suficientes. Traga mais mapas." />
          </Card>
        </>
      )}
      {!res && concursos.filter(c => c.chaves && c.resultado).length < 20 && <Aviso tom="info">Há poucos mapas com resultado no histórico. Importe os mapas em inglês na aba Histórico para a descoberta ter o que analisar.</Aviso>}
    </>
  );
}

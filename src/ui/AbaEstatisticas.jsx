import { useState } from "react";
import { T, Card, Chip, Rotulo, Bolinhas } from "./base.jsx";
import { formatarNum, estimarProximo, pct } from "./estado.js";
import { FAMILIAS } from "../quantico/motor.js";

const JANELAS = [10, 30, 60, 100, 200, 300];
const MOLDURA = new Set([1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25]);
const nomeFamilia = id => FAMILIAS.find(f => f.id === id)?.nome || id;
const lista = ns => ns.map(formatarNum).join(", ");

// Faixa típica (10% a 90%) de uma medida nos últimos concursos.
function faixa(sorteios, medir) {
  const v = sorteios.map(medir).sort((a, b) => a - b);
  return [v[Math.floor(v.length * 0.1)], v[Math.floor(v.length * 0.9)]];
}

function Volante({ jogo, probs, anterior, atraso }) {
  const noJogo = new Set(jogo), noAnterior = new Set(anterior);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, maxWidth: 420 }}>
      {Array.from({ length: 25 }, (_, i) => i + 1).map(n => {
        const dentro = noJogo.has(n);
        return (
          <div key={n} title={`nº ${formatarNum(n)} · ${pct(probs[n], 1)}`} style={{ borderRadius: 10, padding: "8px 4px 6px", textAlign: "center", position: "relative",
            background: dentro ? T.gold : T.surface2, border: `1px solid ${dentro ? T.gold : T.border}` }}>
            <div style={{ fontFamily: T.mono, fontSize: 18, fontWeight: 700, color: dentro ? "#1A1408" : T.textSoft }}>{formatarNum(n)}</div>
            <div style={{ fontSize: 10, color: dentro ? "#3A2E10" : T.textMuted, fontFamily: T.mono }}>{atraso[n] === 0 ? "saiu" : `${atraso[n]} fora`}</div>
            {noAnterior.has(n) && <span style={{ position: "absolute", top: 5, right: 6, width: 6, height: 6, borderRadius: 3, background: dentro ? "#1A1408" : T.serie1 }} />}
          </div>
        );
      })}
    </div>
  );
}

export default function AbaEstatisticas({ numeros, progresso, resultados }) {
  const [verTodos, setVerTodos] = useState(false);
  const prox = estimarProximo(resultados);
  if (!numeros) {
    return (
      <Card titulo={`Concurso ${prox.concurso}`}>
        <div style={{ fontSize: 13, color: T.textSoft, marginBottom: 10 }}>Analisando os {resultados.length.toLocaleString("pt-BR")} concursos, um por um…</div>
        <div style={{ height: 8, background: T.surface2, borderRadius: 4, overflow: "hidden" }}><div style={{ width: `${Math.round(progresso * 100)}%`, height: "100%", background: T.gold, transition: "width .2s" }} /></div>
      </Card>
    );
  }

  const { res, proximo, sorteios, concursos } = numeros;
  const { jogo, probs, familias } = proximo;
  const T0 = sorteios.length, ultimo = sorteios[T0 - 1];
  const atraso = new Array(26).fill(0);
  for (let n = 1; n <= 25; n++) { let a = 0; while (a < T0 && !sorteios[T0 - 1 - a].includes(n)) a++; atraso[n] = a; }
  const ranking = Array.from({ length: 25 }, (_, i) => i + 1).sort((a, b) => probs[b] - probs[a]);
  const recentes = sorteios.slice(-300);
  const soma = jogo.reduce((s, n) => s + n, 0), impares = jogo.filter(n => n % 2).length, moldura = jogo.filter(n => MOLDURA.has(n)).length;
  const repete = jogo.filter(n => ultimo.includes(n)).length;
  const fSoma = faixa(recentes, d => d.reduce((s, n) => s + n, 0)), fImp = faixa(recentes, d => d.filter(n => n % 2).length), fMol = faixa(recentes, d => d.filter(n => MOLDURA.has(n)).length);
  const fRep = faixa(recentes.slice(1).map((d, i) => d.filter(n => recentes[i].includes(n))), d => d.length);
  const atrasadas = Array.from({ length: 25 }, (_, i) => i + 1).filter(n => atraso[n] >= 2).sort((a, b) => atraso[b] - atraso[a]).slice(0, 4);
  const peso = Object.entries(familias).filter(([f]) => f !== "nulo").sort((a, b) => b[1] - a[1])[0];
  const dentro = (v, [a, b]) => (v >= a && v <= b ? "dentro do normal" : "fora do normal");

  const janelas = JANELAS.map(j => {
    const ult = sorteios.slice(-j), f = new Array(26).fill(0);
    ult.forEach(d => d.forEach(n => f[n]++));
    const ord = Array.from({ length: 25 }, (_, i) => i + 1).sort((a, b) => f[b] - f[a] || a - b);
    return { j, mais: ord.slice(0, 5).map(n => [n, f[n]]), menos: ord.slice(-3).reverse().map(n => [n, f[n]]) };
  });

  const ultimos = res.registros.slice(verTodos ? -30 : -8).reverse();

  return (
    <>
      <Card titulo={`Jogo para o concurso ${prox.concurso}`} acao={prox.data && <Chip>{prox.data}</Chip>}>
        <Bolinhas numeros={jogo} tamanho={36} />
      </Card>

      <Card titulo="Mapa do jogo">
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 280px" }}>
            <Volante jogo={jogo} probs={probs} anterior={ultimo} atraso={atraso} />
            <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 8 }}>Dourado = no jogo · ponto azul = saiu no último concurso · "N fora" = concursos sem sair</div>
          </div>
          <div style={{ flex: "1 1 280px", fontSize: 13.5, lineHeight: 1.6, color: T.text }}>
            <Rotulo>O que o motor viu</Rotulo>
            <div>• Mais fortes agora: <b style={{ color: T.goldText }}>{lista(ranking.slice(0, 5))}</b>. Mais fracas: {lista(ranking.slice(-3))}.</div>
            <div>• O jogo repete <b>{repete}</b> do concurso {concursos[T0 - 1]} (normal: {fRep[0]} a {fRep[1]}).</div>
            <div>• Soma <b>{soma}</b> · <b>{impares}</b> ímpares · <b>{moldura}</b> na moldura ({dentro(soma, fSoma) === dentro(impares, fImp) && dentro(impares, fImp) === dentro(moldura, fMol) ? dentro(soma, fSoma) : `soma ${dentro(soma, fSoma)}, ímpares ${dentro(impares, fImp)}, moldura ${dentro(moldura, fMol)}`}).</div>
            {atrasadas.length > 0 && <div>• Mais tempo fora: {atrasadas.map(n => `${formatarNum(n)} (${atraso[n]})`).join(", ")}.</div>}
            {peso && <div>• O que mais pesa hoje: {nomeFamilia(peso[0])}.</div>}
          </div>
        </div>
      </Card>

      <Card titulo="Janelas">
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "8px 14px", alignItems: "center", fontSize: 13 }}>
          <Rotulo>Últimos</Rotulo><Rotulo>Mais saíram</Rotulo><Rotulo>Menos saíram</Rotulo>
          {janelas.map(({ j, mais, menos }) => [
            <div key={`j${j}`} style={{ fontFamily: T.mono, color: T.goldText, fontWeight: 700 }}>{j}</div>,
            <div key={`m${j}`} style={{ fontFamily: T.mono }}>{mais.map(([n, f]) => <span key={n} style={{ marginRight: 10 }}>{formatarNum(n)}<span style={{ color: T.textMuted, fontSize: 11 }}>·{f}</span></span>)}</div>,
            <div key={`n${j}`} style={{ fontFamily: T.mono, color: T.textSoft }}>{menos.map(([n, f]) => <span key={n} style={{ marginLeft: 8 }}>{formatarNum(n)}<span style={{ color: T.textMuted, fontSize: 11 }}>·{f}</span></span>)}</div>,
          ])}
        </div>
      </Card>

      <Card titulo="Últimos concursos" acao={<button onClick={() => setVerTodos(!verTodos)} style={{ background: "none", border: "none", color: T.textSoft, cursor: "pointer", fontSize: 12.5 }}>{verTodos ? "ver menos" : "ver mais"}</button>}>
        {ultimos.map(r => (
          <div key={r.concurso} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderTop: `1px solid ${T.borderSoft}`, flexWrap: "wrap" }}>
            <div style={{ fontFamily: T.mono, color: T.textSoft, width: 44 }}>{r.concurso}</div>
            <div style={{ flex: "1 1 300px" }}><Bolinhas numeros={r.jogo} destaque={r.sorteio} tamanho={22} /></div>
            <Chip tom={r.acertos >= 11 ? "bom" : r.acertos >= 9 ? "ouro" : "neutro"}>{r.acertos} acertos</Chip>
          </div>
        ))}
      </Card>
    </>
  );
}

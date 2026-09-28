// Lotofácil Astro — quatro abas: Mapa Horário, Estatísticas, Histórico e Backup.
import { useState, useEffect, useMemo, useRef } from "react";
import { T, Chip } from "./ui/base.jsx";
import { carregar, salvar, estadoInicial, montarConcursos, aplicarCorrecoes } from "./ui/estado.js";
import { jogosAstrais } from "./estatistica/motor.js";
import { simularAsync, prever } from "./quantico/motor.js";
import AbaMapa from "./ui/AbaMapa.jsx";
import AbaEstatisticas from "./ui/AbaEstatisticas.jsx";
import AbaHistorico from "./ui/AbaHistorico.jsx";
import AbaBackup from "./ui/AbaBackup.jsx";

const ABAS = [["mapa", "Mapa Horário"], ["estatisticas", "Estatísticas"], ["historico", "Histórico"], ["backup", "Backup"]];

export default function App() {
  const [app, setApp] = useState(null);
  const [aba, setAba] = useState("mapa");
  const [aberto, setAberto] = useState(null);
  const [erroSalvar, setErroSalvar] = useState(null);
  const [numeros, setNumeros] = useState(null); // resultado do motor de números
  const [progresso, setProgresso] = useState(0);
  const primeiraCarga = useRef(true);

  useEffect(() => { carregar().then(setApp); }, []);
  useEffect(() => {
    if (!app) return;
    if (primeiraCarga.current) { primeiraCarga.current = false; return; }
    const t = setTimeout(() => {
      Promise.resolve(salvar(app)).then(() => setErroSalvar(null)).catch(e => setErroSalvar(String(e?.message || e)));
    }, 400);
    return () => clearTimeout(t);
  }, [app]);

  const resultados = useMemo(() => (app ? aplicarCorrecoes(app.resultados, app.correcoes) : []), [app?.resultados, app?.correcoes]);
  const appEfetivo = useMemo(() => (app ? { ...app, resultados } : null), [app, resultados]);
  const { concursos, meta } = useMemo(() => (appEfetivo ? montarConcursos(appEfetivo) : { concursos: [], meta: new Map() }), [resultados, app?.mapas, app?.config]);
  const astral = useMemo(() => jogosAstrais(concursos), [concursos]);

  // Motor de números: roda sozinho sobre todos os resultados salvos.
  useEffect(() => {
    if (!resultados.length) return;
    let vivo = true;
    setNumeros(null); setProgresso(0);
    const sorteios = resultados.map(r => r.resultado), nums = resultados.map(r => r.concurso);
    simularAsync(sorteios, { concursos: nums, onProgresso: (i, n) => vivo && setProgresso(i / n) }).then(res => {
      if (vivo) setNumeros({ res, proximo: prever(res.estado), sorteios, concursos: nums });
    });
    return () => { vivo = false; };
  }, [resultados]);

  if (!app) return <div style={{ background: T.bg, minHeight: "100vh", color: T.textSoft, padding: 40, fontFamily: T.sans }}>Carregando…</div>;

  const atualizar = f => setApp(a => ({ ...a, ...f(a) }));
  const acoes = {
    salvarMapa: (concurso, texto, data, hora) => atualizar(a => ({ mapas: { ...a.mapas, [concurso]: { texto, data, hora, salvoEm: new Date().toISOString() } } })),
    removerMapa: concurso => atualizar(a => { const m = { ...a.mapas }; delete m[concurso]; return { mapas: m }; }),
    importarMapas: lista => atualizar(a => {
      const m = { ...a.mapas };
      lista.forEach(({ concurso, texto }) => { m[concurso] = { ...m[concurso], texto, salvoEm: new Date().toISOString() }; });
      return { mapas: m };
    }),
    salvarResultado: (concurso, data, resultado) => atualizar(a => ({
      resultados: [...a.resultados.filter(r => r.concurso !== concurso), { concurso, data, resultado, adicionadoEm: new Date().toISOString() }].sort((x, y) => x.concurso - y.concurso),
    })),
    substituirTudo: novo => setApp(novo),
    apagarMapas: () => atualizar(() => ({ mapas: {} })),
    zerar: () => setApp(estadoInicial()),
  };
  const nMapas = Object.keys(app.mapas).length;
  const props = { app: appEfetivo, concursos, meta, acoes, astral };

  return (
    <div style={{ background: `radial-gradient(1200px 600px at 20% -10%, #1A2140 0%, ${T.bg} 55%)`, minHeight: "100vh", color: T.text, fontFamily: T.sans }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "22px 16px 60px" }}>
        <header style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: T.gold, textTransform: "uppercase", fontWeight: 600 }}>Lotofácil Astro</div>
          <div style={{ fontFamily: T.serif, fontSize: 32, color: T.text, lineHeight: 1.1 }}>Observatório</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
            <Chip>{app.resultados.length} concursos</Chip>
            <Chip tom={nMapas ? "ouro" : "neutro"}>{nMapas} mapas</Chip>
            {erroSalvar && <Chip tom="ruim" title={erroSalvar}>erro ao salvar</Chip>}
          </div>
        </header>
        <nav style={{ display: "flex", gap: 4, marginBottom: 16, overflowX: "auto", borderBottom: `1px solid ${T.border}` }}>
          {ABAS.map(([id, nome]) => (
            <button key={id} onClick={() => setAba(id)} style={{ background: "none", border: "none", borderBottom: `2px solid ${aba === id ? T.gold : "transparent"}`, color: aba === id ? T.goldText : T.textSoft, padding: "9px 12px", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: T.sans }}>{nome}</button>
          ))}
        </nav>
        {/* Mapa Horário fica sempre montado para não perder um mapa colado e ainda não salvo. */}
        <div style={{ display: aba === "mapa" ? "block" : "none" }}><AbaMapa key={aberto ?? "novo"} inicial={aberto} {...props} /></div>
        {aba === "estatisticas" && <AbaEstatisticas numeros={numeros} progresso={progresso} resultados={resultados} />}
        {aba === "historico" && <AbaHistorico {...props} abrir={c => { setAberto(c); setAba("mapa"); }} />}
        {aba === "backup" && <AbaBackup {...props} />}
      </div>
    </div>
  );
}

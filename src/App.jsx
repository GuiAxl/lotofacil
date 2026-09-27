// Lotofácil Astro v13 — Observatório.
// Evolução do v12: parser em inglês com conferência geométrica, sinais da
// doutrina (dignidades, regentes, velocidade, Lua fora de curso, recepção,
// antiscia…), motor que aprende só com o passado e se autoavalia, descoberta
// com probabilidade de ser real, hipóteses pré-registradas e diário prospectivo.
import { useState, useEffect, useMemo, useRef } from "react";
import { T, Chip } from "./ui/base.jsx";
import { carregar, salvar, estadoInicial, montarConcursos, aplicarCorrecoes, pct } from "./ui/estado.js";
import { simular, MOTORES } from "./estatistica/motor.js";
import { criarHipotese, registrarNoDiario, validarPrevisao } from "./estatistica/laboratorio.js";
import AbaConcurso from "./ui/AbaConcurso.jsx";
import AbaHistorico from "./ui/AbaHistorico.jsx";
import AbaSinais from "./ui/AbaSinais.jsx";
import AbaLaboratorio from "./ui/AbaLaboratorio.jsx";
import AbaPlacar from "./ui/AbaPlacar.jsx";
import AbaBackup from "./ui/AbaBackup.jsx";
import AbaQuantico from "./ui/AbaQuantico.jsx";
import AbaAuditoria from "./ui/AbaAuditoria.jsx";
import { hashHistorico } from "./auditoria/integridade.js";
import { VERSAO, VERSAO_MOTORES } from "./versao.js";

const ABAS = [
  ["concurso", "Concurso"], ["historico", "Histórico"], ["sinais", "Sinais"],
  ["laboratorio", "Laboratório"], ["placar", "Placar"], ["quantico", "Quântico ⚛"], ["auditoria", "Auditoria"], ["backup", "Backup"],
];

export default function App() {
  const [app, setApp] = useState(null);
  const [aba, setAba] = useState("concurso");
  const [concursoAberto, setConcursoAberto] = useState(null);
  const [simulacao, setSimulacao] = useState(null);
  const [calculando, setCalculando] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(null);
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

  // Visão efetiva: resultados oficiais com as correções manuais aplicadas.
  // Todas as abas leem daqui, então corrigir um concurso invalida e refaz
  // automaticamente todo o aprendizado, o placar e o diário.
  const resultadosEfetivos = useMemo(() => (app ? aplicarCorrecoes(app.resultados, app.correcoes) : []), [app?.resultados, app?.correcoes]);
  const appEfetivo = useMemo(() => (app ? { ...app, resultados: resultadosEfetivos } : null), [app, resultadosEfetivos]);
  const hashHist = useMemo(() => hashHistorico(resultadosEfetivos), [resultadosEfetivos]);
  const { concursos, meta } = useMemo(() => (appEfetivo ? montarConcursos(appEfetivo) : { concursos: [], meta: new Map() }), [resultadosEfetivos, app?.mapas, app?.config]);

  // Simulação honesta completa, recalculada quando os dados mudam.
  useEffect(() => {
    if (!app) return;
    setCalculando(true);
    const t = setTimeout(() => {
      setSimulacao(simular(concursos, { minTreino: app.config.minTreino }));
      setCalculando(false);
    }, 300);
    return () => clearTimeout(t);
  }, [concursos]);

  if (!app) return <div style={{ background: T.bg, minHeight: "100vh", color: T.textSoft, padding: 40, fontFamily: T.sans }}>Carregando…</div>;

  const atualizar = f => setApp(a => ({ ...a, ...f(a) }));
  // Manifesto de reprodutibilidade anexado a cada previsão arquivada.
  const manifesto = motor => ({ versao: VERSAO, motor: VERSAO_MOTORES[motor === "quantico" ? "quantico" : "astral"], hashHistorico: hashHist, nResultados: resultadosEfetivos.length, nMapas: concursos.filter(c => c.chaves).length, config: app.config });
  const acoes = {
    salvarMapa: (concurso, texto, data) => atualizar(a => ({ mapas: { ...a.mapas, [concurso]: { texto, data, salvoEm: new Date().toISOString() } } })),
    removerMapa: concurso => atualizar(a => { const m = { ...a.mapas }; delete m[concurso]; return { mapas: m }; }),
    importarMapas: lista => atualizar(a => {
      const m = { ...a.mapas };
      lista.forEach(({ concurso, texto }) => { m[concurso] = { texto, data: m[concurso]?.data || "", salvoEm: new Date().toISOString() }; });
      return { mapas: m };
    }),
    salvarResultado: (concurso, data, resultado) => atualizar(a => ({
      resultados: [...a.resultados.filter(r => r.concurso !== concurso), { concurso, data, resultado, adicionadoEm: new Date().toISOString() }].sort((x, y) => x.concurso - y.concurso),
    })),
    criarHipotese: async dados => { const h = await criarHipotese(dados); atualizar(a => ({ hipoteses: [...a.hipoteses, h] })); },
    removerHipotese: id => atualizar(a => ({ hipoteses: a.hipoteses.filter(h => h.id !== id) })),
    // Arquivo de previsões: a primeira previsão de cada concurso por motor
    // fica congelada; novas tentativas para o mesmo par são ignoradas.
    registrarDiario: async (concurso, porMotor) => {
      const registros = await Promise.all(Object.keys(MOTORES).map(m => registrarNoDiario({ concurso, motor: m, jogo: porMotor[m].jogo, pesoAstral: porMotor.astral.pesoAstral, probs: m === "astral" ? porMotor.astral.valores : null, manifesto: manifesto(m) })));
      // Validação antes do arquivamento: jogo com 15 dezenas distintas e universo de probabilidades somando 15.
      const validos = registros.filter(r => !validarPrevisao({ jogo: r.jogo, probs: r.probs ? [0, ...r.probs] : null }).length);
      atualizar(a => ({ diario: [...a.diario, ...validos.filter(r => !a.diario.some(d => d.concurso === r.concurso && d.motor === r.motor))] }));
    },
    registrarDiarioMotor: async (concurso, motor, jogo, probs = null) => {
      if (validarPrevisao({ jogo, probs }).length) return;
      const r = await registrarNoDiario({ concurso, motor, jogo, probs, manifesto: manifesto(motor) });
      atualizar(a => (a.diario.some(d => d.concurso === concurso && d.motor === motor) ? {} : { diario: [...a.diario, r] }));
    },
    corrigirResultado: (concurso, resultado, motivo) => atualizar(a => ({
      correcoes: { ...a.correcoes, [concurso]: { resultado, motivo, em: new Date().toISOString(), original: a.resultados.find(r => r.concurso === concurso)?.resultado || null } },
    })),
    salvarAutoteste: r => atualizar(() => ({ autoteste: r })),
    removerCorrecao: concurso => atualizar(a => { const c = { ...a.correcoes }; delete c[concurso]; return { correcoes: c }; }),
    config: parcial => atualizar(a => ({ config: { ...a.config, ...parcial } })),
    substituirTudo: novo => setApp(novo),
    zerar: () => setApp(estadoInicial()),
  };

  const nMapas = concursos.filter(c => c.chaves).length;
  const pesoAstral = simulacao?.trilha.at(-1)?.pesoAstral;
  const props = { app: appEfetivo, concursos, meta, acoes, simulacao, calculando, hashHist };

  return (
    <div style={{ background: `radial-gradient(1200px 600px at 20% -10%, #1A2140 0%, ${T.bg} 55%)`, minHeight: "100vh", color: T.text, fontFamily: T.sans }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "22px 16px 60px" }}>
        <header style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: T.gold, textTransform: "uppercase", fontWeight: 600 }}>Lotofácil Astro · v13</div>
          <div style={{ fontFamily: T.serif, fontSize: 34, color: T.text, lineHeight: 1.1 }}>Observatório</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
            <Chip>{app.resultados.length} resultados</Chip>
            <Chip tom={nMapas ? "ouro" : "alerta"}>{nMapas} mapas no motor</Chip>
            {pesoAstral != null && <Chip tom={pesoAstral > 0.5 ? "bom" : "neutro"} title="Peso dos modelos que usam sinais do mapa, aprendido só com o passado">confiança nos sinais: {pct(pesoAstral)}</Chip>}
            {calculando && <Chip tom="ouro">recalculando…</Chip>}
            {erroSalvar && <Chip tom="ruim" title={erroSalvar}>erro ao salvar</Chip>}
          </div>
        </header>
        <nav style={{ display: "flex", gap: 4, marginBottom: 16, overflowX: "auto", borderBottom: `1px solid ${T.border}` }}>
          {ABAS.map(([id, nome]) => (
            <button key={id} onClick={() => setAba(id)} style={{ background: "none", border: "none", borderBottom: `2px solid ${aba === id ? T.gold : "transparent"}`, color: aba === id ? T.goldText : T.textSoft, padding: "9px 12px", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: T.sans }}>{nome}</button>
          ))}
        </nav>
        {/* A aba Concurso fica sempre montada para não perder um mapa colado e ainda não salvo. */}
        <div style={{ display: aba === "concurso" ? "block" : "none" }}><AbaConcurso key={concursoAberto ?? "novo"} inicial={concursoAberto} {...props} /></div>
        {aba === "historico" && <AbaHistorico {...props} abrirConcurso={c => { setConcursoAberto(c); setAba("concurso"); }} />}
        {aba === "sinais" && <AbaSinais {...props} />}
        {aba === "laboratorio" && <AbaLaboratorio {...props} />}
        {aba === "placar" && <AbaPlacar {...props} />}
        {aba === "quantico" && <AbaQuantico {...props} />}
        {aba === "auditoria" && <AbaAuditoria {...props} />}
        {aba === "backup" && <AbaBackup {...props} />}
      </div>
    </div>
  );
}

// Laboratório de hipóteses pré-registradas e diário de jogos prospectivos.
//
// Hipótese: "quando o sinal X está ativo, os números {…} saem MAIS (ou
// MENOS) que 60%". Ela é congelada com data e hash no momento do registro e
// avaliada SOMENTE em concursos sorteados depois desse dia — o passado que
// inspirou a hipótese nunca conta a favor dela. A decisão usa o teste
// sequencial de Wald (SPRT): acumula evidência concurso a concurso e para
// quando há evidência suficiente para confirmar ou rejeitar.
import { P0, pBinomialSuperior, acertos } from "./matematica.js";

export function dataBRparaISO(data) {
  const m = String(data || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
}
export const hojeISO = () => new Date().toISOString().slice(0, 10);

export async function hashConteudo(obj) {
  const texto = JSON.stringify(obj);
  try {
    const dados = new TextEncoder().encode(texto);
    const buf = await crypto.subtle.digest("SHA-256", dados);
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
  } catch {
    let h = 2166136261;
    for (let i = 0; i < texto.length; i++) { h ^= texto.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16);
  }
}

export async function criarHipotese({ sinal, rotuloSinal, numeros, direcao = "mais", efeito = 0.08, alpha = 0.05, beta = 0.2, origem = "manual", nota = "" }) {
  const base = { sinal, rotuloSinal, numeros: [...numeros].sort((a, b) => a - b), direcao, efeito, alpha, beta, origem, nota, criadaEm: new Date().toISOString() };
  return { id: `hip_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`, ...base, hash: await hashConteudo(base) };
}

export function avaliarHipotese(h, concursos) {
  const p0 = P0;
  const p1 = h.direcao === "mais" ? Math.min(0.99, P0 + h.efeito) : Math.max(0.01, P0 - h.efeito);
  const limiteA = Math.log((1 - h.beta) / h.alpha);
  const limiteB = Math.log(h.beta / (1 - h.alpha));
  const diaRegistro = h.criadaEm.slice(0, 10);
  let llr = 0, tentativas = 0, acertosN = 0, status = "em teste", decididaNo = null;
  const usados = [];
  for (const c of [...concursos].sort((a, b) => a.concurso - b.concurso)) {
    const iso = dataBRparaISO(c.data);
    if (!c.resultado || !c.chaves || !iso || iso <= diaRegistro) continue;
    if (!c.chaves.includes(h.sinal)) continue;
    const r = new Set(c.resultado);
    let saiu = 0;
    for (const n of h.numeros) {
      const hit = r.has(n);
      tentativas++;
      if (hit) { acertosN++; saiu++; }
      llr += hit ? Math.log(p1 / p0) : Math.log((1 - p1) / (1 - p0));
    }
    usados.push({ concurso: c.concurso, saiu, de: h.numeros.length });
    if (status === "em teste") {
      if (llr >= limiteA) { status = "confirmada"; decididaNo = c.concurso; }
      else if (llr <= limiteB) { status = "rejeitada"; decididaNo = c.concurso; }
    }
  }
  const pValor = tentativas
    ? (h.direcao === "mais" ? pBinomialSuperior(acertosN, tentativas) : pBinomialSuperior(tentativas - acertosN, tentativas, 1 - P0))
    : null;
  return { status, decididaNo, llr, limiteA, limiteB, tentativas, acertos: acertosN, taxa: tentativas ? acertosN / tentativas : null, pValor, concursos: usados };
}

// ── Arquivo de previsões reais (diário prospectivo) ───────────────────────
// Um jogo só vale como acerto real se foi registrado ANTES do resultado
// existir no sistema. A PRIMEIRA previsão de cada concurso por motor fica
// congelada (data/hora + hash, sem edição). Quando há probabilidades, elas
// também são arquivadas, o que permite medir Brier e log-loss reais.
export async function registrarNoDiario({ concurso, motor, jogo, pesoAstral = null, probs = null, manifesto = null }) {
  const base = {
    concurso, motor, jogo: [...jogo].sort((a, b) => a - b), pesoAstral, manifesto,
    probs: probs ? Array.from({ length: 25 }, (_, i) => Math.round(probs[i + 1] * 1e5) / 1e5) : null,
    registradoEm: new Date().toISOString(),
  };
  return { id: `dia_${Date.now().toString(36)}_${motor}`, ...base, hash: await hashConteudo(base) };
}

export function validarPrevisao({ jogo, probs }) {
  const erros = [];
  if (!Array.isArray(jogo) || jogo.length !== 15 || new Set(jogo).size !== 15 || jogo.some(n => !Number.isInteger(n) || n < 1 || n > 25)) erros.push("jogo inválido");
  if (probs) {
    const soma = probs.slice(1).reduce((a, b) => a + b, 0);
    if (probs.slice(1).some(p => !(p > 0 && p < 1)) || Math.abs(soma - 15) > 0.01) erros.push("universo de probabilidades inválido (precisa somar 15)");
  }
  return erros;
}

// Placar com "confiança de produção": só previsões congeladas antes do
// resultado. Reavaliado a cada render, então uma correção de resultado
// reavalia tudo automaticamente.
export function placarDiario(diario, resultadosPorConcurso) {
  const porMotor = {};
  const primeira = new Map();
  for (const r of [...diario].sort((a, b) => a.registradoEm.localeCompare(b.registradoEm))) {
    const k = `${r.concurso}|${r.motor}`;
    if (!primeira.has(k)) primeira.set(k, r);
  }
  for (const r of primeira.values()) {
    const res = resultadosPorConcurso.get(r.concurso);
    const l = (porMotor[r.motor] ||= { jogos: 0, apurados: 0, soma: 0, lista: [], somaBrier: 0, somaLog: 0, comProbs: 0 });
    l.jogos++;
    if (!res) continue;
    const a = acertos(r.jogo, res);
    l.apurados++; l.soma += a; l.lista.push({ concurso: r.concurso, acertos: a });
    if (r.probs) {
      const s = new Set(res);
      let b = 0, lg = 0;
      r.probs.forEach((p, i) => { const y = s.has(i + 1) ? 1 : 0; b += (p - y) ** 2; const q = Math.min(1 - 1e-9, Math.max(1e-9, p)); lg -= y ? Math.log(q) : Math.log(1 - q); });
      l.somaBrier += b / 25; l.somaLog += lg / 25; l.comProbs++;
    }
  }
  for (const l of Object.values(porMotor)) {
    l.lista.sort((a, b) => a.concurso - b.concurso);
    l.media = l.apurados ? l.soma / l.apurados : null;
    l.z = l.apurados ? ((l.media - 9) / 0.949) * Math.sqrt(l.apurados) : null;
    l.ganhoBrier = l.comProbs ? 1 - l.somaBrier / l.comProbs / (P0 * (1 - P0)) : null;
    l.ganhoLog = l.comProbs ? -(P0 * Math.log(P0) + (1 - P0) * Math.log(1 - P0)) - l.somaLog / l.comProbs : null;
    l.confiancaProducao = l.apurados < 30 ? "amostra pequena" : l.z > 2 && (l.ganhoLog == null || l.ganhoLog > 0) ? "vantagem real" : "sem vantagem";
  }
  return porMotor;
}

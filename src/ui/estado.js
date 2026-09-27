// Estado persistido do app e funções puras para derivar os dados do motor.
import { RESULTADOS_INICIAIS } from "../dados/resultados.js";
import { parseMapa } from "../astro/parser.js";
import { extrairSinais } from "../astro/sinais.js";

export const CHAVE_STORAGE = "lotofacil-astro-v13";

export function estadoInicial() {
  return {
    versao: 13,
    resultados: RESULTADOS_INICIAIS.map(([concurso, data, resultado]) => ({ concurso, data, resultado })),
    mapas: {},
    hipoteses: [],
    diario: [],
    correcoes: {},
    config: { usarLentos: false, minTreino: 30 },
  };
}

// Correções manuais de resultado (ex.: erro na planilha). Ficam num registro
// separado com motivo e data; o resultado oficial original não é apagado.
// Tudo que depende do resultado (motores, placar, diário) é recalculado a
// partir da versão corrigida.
export function aplicarCorrecoes(resultados, correcoes = {}) {
  if (!correcoes || !Object.keys(correcoes).length) return resultados;
  return resultados.map(r => (correcoes[r.concurso] ? { ...r, resultado: correcoes[r.concurso].resultado, corrigido: true, original: r.resultado } : r));
}

// Próximo concurso e data estimada: a Lotofácil sorteia de segunda a sábado.
// Feriados não são considerados (a data é uma estimativa).
export function estimarProximo(resultados) {
  const ultimo = resultados[resultados.length - 1];
  const m = String(ultimo?.data || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  let data = "";
  if (m) {
    const d = new Date(Date.UTC(+m[3], +m[2] - 1, +m[1]));
    do d.setUTCDate(d.getUTCDate() + 1); while (d.getUTCDay() === 0);
    data = `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${d.getUTCFullYear()}`;
  }
  return { concurso: (ultimo?.concurso || 0) + 1, data };
}

export async function carregar() {
  try {
    let bruto = null;
    if (typeof window !== "undefined" && window.storage?.get) bruto = (await window.storage.get(CHAVE_STORAGE))?.value;
    else if (typeof window !== "undefined" && window.localStorage) bruto = window.localStorage.getItem(CHAVE_STORAGE);
    if (!bruto) return estadoInicial();
    return mesclarComInicial(JSON.parse(bruto));
  } catch (e) {
    console.error("[v13] falha ao carregar", e);
    return estadoInicial();
  }
}

export async function salvar(estado) {
  const texto = JSON.stringify(estado);
  if (typeof window !== "undefined" && window.storage?.set) return window.storage.set(CHAVE_STORAGE, texto);
  if (typeof window !== "undefined" && window.localStorage) window.localStorage.setItem(CHAVE_STORAGE, texto);
}

// Garante que os resultados oficiais embutidos sempre existam (e prevaleçam),
// sem apagar concursos novos que o usuário adicionou.
export function mesclarComInicial(salvo) {
  const base = estadoInicial();
  const porConcurso = new Map(base.resultados.map(r => [r.concurso, r]));
  // O resultado oficial embutido sempre vence; do salvo só entram concursos novos.
  for (const r of salvo.resultados || []) {
    const c = Number(r.concurso);
    if (!porConcurso.has(c) && validarResultado(r.resultado)) porConcurso.set(c, { concurso: c, data: r.data || "", resultado: [...r.resultado].sort((a, b) => a - b) });
  }
  return {
    ...base,
    ...salvo,
    resultados: [...porConcurso.values()].sort((a, b) => a.concurso - b.concurso),
    mapas: salvo.mapas || {},
    hipoteses: salvo.hipoteses || [],
    diario: salvo.diario || [],
    correcoes: salvo.correcoes || {},
    config: { ...base.config, ...(salvo.config || {}) },
  };
}

export function validarResultado(r) {
  return Array.isArray(r) && r.length === 15 && new Set(r).size === 15 && r.every(n => Number.isInteger(n) && n >= 1 && n <= 25);
}

export function parseNumeros(texto) {
  const nums = String(texto || "").split(/[^\d]+/).filter(Boolean).map(Number).filter(n => n >= 1 && n <= 25);
  return [...new Set(nums)].sort((a, b) => a - b);
}

const cacheParse = new Map();
export function interpretarMapa(texto) {
  let v = cacheParse.get(texto);
  if (!v) {
    const mapa = parseMapa(texto);
    v = { mapa, sinais: extrairSinais(mapa) };
    if (cacheParse.size > 2000) cacheParse.clear();
    cacheParse.set(texto, v);
  }
  return v;
}

// Lista cronológica no formato do motor: { concurso, data, resultado, chaves }.
// Só mapas completos (sem erro de leitura) entram no aprendizado.
export function montarConcursos(estado) {
  const { resultados, mapas, config } = estado;
  const porConcurso = new Map();
  for (const r of resultados) porConcurso.set(r.concurso, { concurso: r.concurso, data: r.data, resultado: r.resultado, chaves: null });
  const meta = new Map();
  for (const [k, info] of Object.entries(mapas)) {
    const concurso = Number(k);
    const { mapa, sinais } = interpretarMapa(info.texto);
    sinais.forEach(s => { if (!meta.has(s.chave)) meta.set(s.chave, s); });
    const atual = porConcurso.get(concurso) || { concurso, data: info.data || "", resultado: null, chaves: null };
    if (!atual.data && info.data) atual.data = info.data;
    if (mapa.completo) atual.chaves = sinais.filter(s => config.usarLentos || !s.lento).map(s => s.chave);
    porConcurso.set(concurso, atual);
  }
  return { concursos: [...porConcurso.values()].sort((a, b) => a.concurso - b.concurso), meta };
}

export function formatarNum(n) { return String(n).padStart(2, "0"); }
export function pct(x, casas = 0) { return x == null || Number.isNaN(x) ? "—" : `${(x * 100).toFixed(casas).replace(".", ",")}%`; }
export function dec(x, casas = 2) { return x == null || Number.isNaN(x) ? "—" : x.toFixed(casas).replace(".", ","); }

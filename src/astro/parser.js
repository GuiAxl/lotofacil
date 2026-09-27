// Parser do mapa em inglês (formato do site de origem), linha a linha.
// Regra: nenhuma linha some em silêncio — tudo que não for reconhecido
// vira aviso, e toda posição/casa/aspecto é conferida pela geometria.
import { SIGNOS, PONTOS, ASPECTOS, PONTOS_OBRIGATORIOS, ASPECTO_POR_ID } from "./constantes.js";

const escapar = s => s.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
const alternativas = lista => [...lista].sort((a, b) => b.length - a.length).map(escapar).join("|");

const NOME_PARA_ID = new Map();
PONTOS.forEach(p => p.en.forEach(n => NOME_PARA_ID.set(n, p.id)));
const RX_NOME = alternativas([...NOME_PARA_ID.keys()]);

const SIGNO_PARA_ID = new Map(SIGNOS.map(s => [s.en.toLowerCase(), s.id]));
const RX_SIGNO = alternativas([...SIGNO_PARA_ID.keys()]);

const TIPO_PARA_ID = new Map();
ASPECTOS.forEach(a => a.en.forEach(n => TIPO_PARA_ID.set(n, a.id)));
const RX_TIPO = alternativas([...TIPO_PARA_ID.keys()]);

const RX_GRAU = String.raw`(\d{1,3})\s*[°º]\s*(\d{1,2})\s*'?(?:\s*(\d{1,2})\s*")?`;

const RX_PONTO = new RegExp(String.raw`^(${RX_NOME})\s+in\s+(${RX_SIGNO})\s+${RX_GRAU}\s*(?:,\s*(retrograde|stationary(?:\s+\w+)?|direct))?\s*(?:,\s*in\s+(\d{1,2})\s*(?:st|nd|rd|th)?\s+house)?\s*[.;]?$`, "i");
const RX_CUSPIDE = new RegExp(String.raw`^(\d{1,2})\s*(?:st|nd|rd|th)?\s+house\s+in\s+(${RX_SIGNO})\s+${RX_GRAU}\s*[.;]?$`, "i");
const RX_ASPECTO = new RegExp(String.raw`^(${RX_NOME})\s+(${RX_TIPO})\s+(${RX_NOME})\s*\(\s*orb\s*:?\s*${RX_GRAU}\s*(?:,\s*(applying|separating|exact))?\s*\)\s*[.;]?$`, "i");
const RX_VELOCIDADE = new RegExp(String.raw`^(${RX_NOME})\s*:\s*(-)?\s*${RX_GRAU}\s*\(\s*([a-z ]+?)\s*(?:,\s*(?:cca|ca\.?|approx\.?)?\s*([\d.]+)\s*x\s*avg\.?\s*speed)?\s*\)\s*[.;]?$`, "i");

const idDoNome = n => NOME_PARA_ID.get(n.toLowerCase().replace(/\s+/g, " "));
const graus = (g, m, s) => Number(g) + Number(m || 0) / 60 + Number(s || 0) / 3600;

export const normalizarTexto = texto => String(texto || "")
  .replace(/\r/g, "")
  .replace(/[’‘′`´]/g, "'")
  .replace(/[″”“]/g, '"')
  .replace(/''/g, '"')
  .replace(/ /g, " ")
  .replace(/[ \t]+/g, " ");

export const norm360 = x => ((x % 360) + 360) % 360;
export const distancia = (a, b) => { const d = Math.abs(norm360(a) - norm360(b)); return Math.min(d, 360 - d); };
export const signoDe = lon => SIGNOS[Math.floor(norm360(lon) / 30)].id;
export const grauNoSigno = lon => norm360(lon) % 30;

export function casaDe(lon, cuspides) {
  if (!cuspides || cuspides.slice(1, 13).some(c => !Number.isFinite(c))) return null;
  for (let i = 1; i <= 12; i++) {
    const ini = cuspides[i], fim = cuspides[i === 12 ? 1 : i + 1];
    const arco = norm360(fim - ini), pos = norm360(lon - ini);
    if (pos < arco) return i;
  }
  return null;
}

// Aplicando/separando pela velocidade: a separação até o ângulo exato está
// diminuindo? Usado quando o texto não diz.
export function statusPorVelocidade(lonA, velA, lonB, velB, angulo) {
  if (!Number.isFinite(velA) || !Number.isFinite(velB)) return null;
  const orbeEm = t => Math.abs(distancia(lonA + velA * t, lonB + velB * t) - angulo);
  const dt = 0.01;
  return orbeEm(dt) < orbeEm(0) ? "aplicando" : "separando";
}

export function parseMapa(textoBruto) {
  const texto = normalizarTexto(textoBruto);
  const pontos = {};
  const cuspides = new Array(13).fill(null);
  const aspectos = [];
  const avisos = [];
  const aviso = (nivel, msg, linha = null) => avisos.push({ nivel, msg, linha });

  const linhas = texto.split("\n").flatMap(l => l.split(/;\s*(?=[A-Z])/)).map(l => l.trim()).filter(Boolean);
  for (const linha of linhas) {
    let m;
    if ((m = linha.match(RX_ASPECTO))) {
      const a = idDoNome(m[1]), b = idDoNome(m[3]), tipo = TIPO_PARA_ID.get(m[2].toLowerCase());
      const status = m[7] ? { applying: "aplicando", separating: "separando", exact: "exato" }[m[7].toLowerCase()] : null;
      if (a === b) { aviso("aviso", "Aspecto de um ponto com ele mesmo", linha); continue; }
      aspectos.push({ a, b, tipo, orbe: graus(m[4], m[5], m[6]), status, statusTexto: !!status });
    } else if ((m = linha.match(RX_CUSPIDE))) {
      const casa = Number(m[1]);
      if (casa < 1 || casa > 12) { aviso("erro", `Casa ${casa} inválida`, linha); continue; }
      const g = graus(m[3], m[4], m[5]);
      if (g >= 30) { aviso("erro", "Grau da cúspide ≥ 30°", linha); continue; }
      cuspides[casa] = SIGNOS.findIndex(s => s.id === SIGNO_PARA_ID.get(m[2].toLowerCase())) * 30 + g;
    } else if ((m = linha.match(RX_PONTO))) {
      const id = idDoNome(m[1]);
      const g = graus(m[3], m[4], m[5]);
      if (g >= 30) { aviso("erro", "Grau ≥ 30°", linha); continue; }
      const indice = SIGNOS.findIndex(s => s.id === SIGNO_PARA_ID.get(m[2].toLowerCase()));
      const estado = (m[6] || "").toLowerCase();
      pontos[id] = {
        ...(pontos[id] || {}),
        lon: indice * 30 + g,
        retrogrado: estado.startsWith("retrograde"),
        estacionarioTexto: estado.startsWith("stationary"),
        casaDeclarada: m[7] ? Number(m[7]) : null,
      };
    } else if ((m = linha.match(RX_VELOCIDADE))) {
      const id = idDoNome(m[1]);
      const sinal = m[2] ? -1 : 1;
      pontos[id] = {
        ...(pontos[id] || {}),
        velocidade: {
          grausDia: sinal * graus(m[3], m[4], m[5]),
          rotulo: m[6].toLowerCase().trim(),
          razao: m[7] ? Number(m[7]) : null,
        },
      };
    } else {
      aviso("aviso", "Linha não reconhecida (ignorada)", linha);
    }
  }

  // Ângulos derivados.
  if (Number.isFinite(pontos.asc?.lon)) pontos.dsc = { lon: norm360(pontos.asc.lon + 180) };
  if (Number.isFinite(pontos.mc?.lon)) pontos.ic = { lon: norm360(pontos.mc.lon + 180) };

  // Conferências de integridade.
  const faltando = PONTOS_OBRIGATORIOS.filter(id => !Number.isFinite(pontos[id]?.lon));
  if (faltando.length) aviso("erro", `Pontos ausentes: ${faltando.join(", ")}`);
  const cuspFaltando = [];
  for (let i = 1; i <= 12; i++) if (!Number.isFinite(cuspides[i])) cuspFaltando.push(i);
  if (cuspFaltando.length) aviso("erro", `Cúspides ausentes: ${cuspFaltando.join(", ")}`);
  if (Number.isFinite(cuspides[1]) && Number.isFinite(pontos.asc?.lon) && distancia(cuspides[1], pontos.asc.lon) > 0.05)
    aviso("aviso", "Cúspide da Casa 1 difere do Ascendente");
  if (Number.isFinite(cuspides[10]) && Number.isFinite(pontos.mc?.lon) && distancia(cuspides[10], pontos.mc.lon) > 0.05)
    aviso("aviso", "Cúspide da Casa 10 difere do MC");

  // Casa pela geometria das cúspides (a declarada fica guardada para auditoria).
  for (const [id, p] of Object.entries(pontos)) {
    p.signo = signoDe(p.lon);
    p.grau = Math.floor(grauNoSigno(p.lon));
    p.minutos = Math.round((grauNoSigno(p.lon) - p.grau) * 60);
    if (["asc", "mc", "dsc", "ic"].includes(id)) continue;
    p.casa = casaDe(p.lon, cuspides);
    if (p.casa && p.casaDeclarada && p.casa !== p.casaDeclarada)
      aviso("aviso", `${id}: casa declarada ${p.casaDeclarada}, geometria indica ${p.casa} (usando ${p.casa})`);
    if (!p.casa && p.casaDeclarada) p.casa = p.casaDeclarada;
    if (p.velocidade && p.velocidade.grausDia < 0) p.retrogrado = true;
  }

  // Aspectos: confere ângulo × orbe × posições; completa o status pela velocidade.
  const vistos = new Set();
  const aspectosOk = [];
  for (const asp of aspectos) {
    const chave = [asp.a, asp.b].sort().join("+") + ":" + asp.tipo;
    if (vistos.has(chave)) continue;
    vistos.add(chave);
    const pa = pontos[asp.a], pb = pontos[asp.b];
    if (!Number.isFinite(pa?.lon) || !Number.isFinite(pb?.lon)) {
      aviso("aviso", `Aspecto ${asp.a}–${asp.b}: ponto sem posição`); asp.consistente = false;
    } else {
      const orbeReal = Math.abs(distancia(pa.lon, pb.lon) - ASPECTO_POR_ID[asp.tipo].angulo);
      asp.orbeGeometrico = orbeReal;
      asp.consistente = Math.abs(orbeReal - asp.orbe) <= 0.12;
      if (!asp.consistente) aviso("aviso", `Aspecto ${asp.a} ${asp.tipo} ${asp.b}: orbe declarado ${asp.orbe.toFixed(2)}°, geometria dá ${orbeReal.toFixed(2)}° (descartado)`);
      if (!asp.status) asp.status = statusPorVelocidade(pa.lon, pa.velocidade?.grausDia, pb.lon, pb.velocidade?.grausDia, ASPECTO_POR_ID[asp.tipo].angulo);
    }
    aspectosOk.push(asp);
  }

  const erros = avisos.filter(a => a.nivel === "erro").length;
  return {
    pontos, cuspides, aspectos: aspectosOk, avisos,
    completo: erros === 0,
    temVelocidades: Object.values(pontos).some(p => p.velocidade),
  };
}

// Divide um texto com vários mapas em blocos por concurso. Aceita cabeçalhos
// como "#3650", "Concurso 3650", "Concurso: 3650", "3650:" ou "=== 3650 ===".
export function dividirMapasEmLote(texto) {
  const blocos = [];
  let atual = null;
  for (const linha of String(texto || "").replace(/\r/g, "").split("\n")) {
    const m = linha.trim().match(/^(?:=+\s*)?(?:#|concurso\s*:?\s*|contest\s*:?\s*)?(\d{3,5})\s*(?::|=+)?\s*$/i);
    if (m) { atual = { concurso: Number(m[1]), linhas: [] }; blocos.push(atual); continue; }
    if (atual) atual.linhas.push(linha);
  }
  return blocos.map(b => ({ concurso: b.concurso, texto: b.linhas.join("\n").trim() })).filter(b => b.texto);
}

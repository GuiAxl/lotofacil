// Extrai do mapa todas as condições ("sinais") que o sistema testa contra os
// 25 números. Cada sinal é uma condição objetiva e verificável, derivada da
// base de conhecimento (dignidades, casas, regentes, velocidade, Lua fora de
// curso, recepção, antiscia, estrelas fixas...). Nenhum sinal carrega número
// pré-definido: a associação sinal → número é sempre aprendida dos dados.
import {
  SIGNO_POR_ID, CORPOS, TRADICIONAIS, ANGULOS, LENTOS, ASPECTO_POR_ID, PTOLOMAICOS, DIGNIDADES, ALEGRIA,
  BENEFICOS, MALEFICOS, TIPO_CASA, FERTILIDADE, ESTRELAS_FIXAS, VELOCIDADE_MEDIA, PONTOS,
  nomePonto, nomeSigno, nomeAspecto,
} from "./constantes.js";
import { norm360, distancia, signoDe, grauNoSigno, casaDe } from "./parser.js";

const ORDEM = Object.fromEntries(PONTOS.map((p, i) => [p.id, i]));
const par = (a, b) => (ORDEM[a] <= ORDEM[b] ? [a, b] : [b, a]);
const PLANETAS_VOC = TRADICIONAIS.filter(id => id !== "lua");

// Leituras de combinação da base de conhecimento, usadas só como rótulo.
const LEITURA_PAR = {
  "marte+saturno": "Bloqueio violento / defesa de elite",
  "jupiter+urano": "O Raio",
  "venus+netuno": "Ilusão",
  "marte+jupiter": "Explosão ofensiva",
  "saturno+netuno": "Dissolução da estrutura",
  "mercurio+marte": "A Navalha",
};

export function dignidade(id, signo) {
  const d = DIGNIDADES[id];
  if (!d) return null;
  if (d.domicilio.includes(signo)) return "domicilio";
  if (d.exaltacao.includes(signo)) return "exaltacao";
  if (d.exilio.includes(signo)) return "exilio";
  if (d.queda.includes(signo)) return "queda";
  return "peregrino";
}

export function classeVelocidade(p, id) {
  const v = p?.velocidade;
  if (!v) return null;
  const rot = v.rotulo || "";
  if (rot.includes("station")) return "estacionario";
  if (rot.includes("retro") || v.grausDia < 0) return "retrogrado";
  const razao = v.razao ?? (VELOCIDADE_MEDIA[id] ? Math.abs(v.grausDia) / VELOCIDADE_MEDIA[id] : null);
  if (razao != null && razao < 0.15) return "estacionario";
  if (rot.includes("fast")) return "rapido";
  if (rot.includes("slow")) return "lento";
  if (rot.includes("average")) return "medio";
  if (razao == null) return null;
  return razao > 1.1 ? "rapido" : razao < 0.9 ? "lento" : "medio";
}

// Próximo e último aspecto ptolomaico da Lua dentro do signo atual, pelas
// velocidades. Sem próximo aspecto antes do ingresso = Lua fora de curso.
export function cursoDaLua(pontos) {
  const lua = pontos.lua;
  if (!Number.isFinite(lua?.lon)) return null;
  const vL = lua.velocidade?.grausDia || VELOCIDADE_MEDIA.lua;
  const ateIngresso = (30 - grauNoSigno(lua.lon)) / vL;
  const desdeIngresso = -grauNoSigno(lua.lon) / vL;
  let proximo = null, ultimo = null;
  for (const id of PLANETAS_VOC) {
    const p = pontos[id];
    if (!Number.isFinite(p?.lon)) continue;
    const vP = p.velocidade?.grausDia ?? VELOCIDADE_MEDIA[id];
    const vRel = vL - vP;
    if (vRel <= 0) continue;
    const d0 = norm360(lua.lon - p.lon);
    for (const tipo of PTOLOMAICOS) {
      const ang = ASPECTO_POR_ID[tipo].angulo;
      for (const alvo of new Set([ang, norm360(360 - ang)])) {
        const tFrente = norm360(alvo - d0) / vRel;
        if (tFrente > 1e-6 && tFrente <= ateIngresso && (!proximo || tFrente < proximo.t)) proximo = { planeta: id, tipo, t: tFrente };
        const tTras = -norm360(d0 - alvo) / vRel;
        if (tTras >= desdeIngresso && (!ultimo || tTras > ultimo.t)) ultimo = { planeta: id, tipo, t: tTras };
      }
    }
  }
  return { proximo, ultimo, vazia: !proximo, diasAteIngresso: ateIngresso };
}

const PT = {
  domicilio: "domicílio", exaltacao: "exaltação", peregrino: "peregrino", exilio: "exílio", queda: "queda",
  rapido: "rápido", medio: "médio", lento: "lento", estacionario: "estacionário", retrogrado: "retrógrado",
  fogo: "fogo", terra: "terra", ar: "ar", agua: "água", cardinal: "cardinal", fixo: "fixo", mutavel: "mutável",
  benefico: "benéfico", malefico: "maléfico", neutro: "neutro", fertil: "fértil", esteril: "estéril",
  angular: "angular", sucedente: "sucedente", cadente: "cadente", diurno: "diurno", noturno: "noturno", equilibrio: "equilíbrio",
  aplicando: "aplicando", separando: "separando",
};
const pt = x => PT[x] || x;
const natureza = id => (BENEFICOS.has(id) ? "benefico" : MALEFICOS.has(id) ? "malefico" : "neutro");

export function extrairSinais(mapa) {
  const { pontos, cuspides, aspectos } = mapa;
  const sinais = new Map();
  const add = (chave, grupo, rotulo, lento = false) => { if (!sinais.has(chave)) sinais.set(chave, { chave, grupo, rotulo, lento }); };
  const ok = id => Number.isFinite(pontos[id]?.lon);
  const sol = pontos.sol;

  // ── Por corpo: casa, signo, grau, velocidade, condição solar, dignidade.
  for (const id of CORPOS) {
    const p = pontos[id];
    if (!ok(id)) continue;
    const lento = LENTOS.has(id);
    const nome = nomePonto(id);
    const g = grauNoSigno(p.lon);
    if (p.casa) {
      add(`${id}|casa|${p.casa}`, "Casa", `${nome} na Casa ${p.casa}`);
      add(`${id}|tipoCasa|${TIPO_CASA[p.casa]}`, "Casa", `${nome} em casa ${pt(TIPO_CASA[p.casa])}`);
      // Regra dos 5 graus: a ≤5° da próxima cúspide já opera nela.
      const prox = p.casa === 12 ? 1 : p.casa + 1;
      if (Number.isFinite(cuspides[prox]) && norm360(cuspides[prox] - p.lon) <= 5)
        add(`${id}|migrando|${prox}`, "Casa", `${nome} migrando para a Casa ${prox} (regra dos 5°)`);
    }
    add(`${id}|signo|${p.signo}`, "Signo", `${nome} em ${nomeSigno(p.signo)}`, lento);
    add(`${id}|elemento|${SIGNO_POR_ID[p.signo].elemento}`, "Signo", `${nome} em signo de ${pt(SIGNO_POR_ID[p.signo].elemento)}`, lento);
    if (!lento) add(`${id}|grau|${Math.floor(g)}`, "Grau", `${nome} a ${Math.floor(g)}°`);
    if (g < 1) add(`${id}|grau0`, "Grau", `${nome} a 0° (estreia)`, lento);
    if (g >= 28) add(`${id}|anaretico`, "Grau", `${nome} em grau anarético (28–29°)`, lento);
    if (p.lon >= 195 && p.lon <= 225) add(`${id}|viaCombusta`, "Condição", `${nome} na Via Combusta`, lento);

    const vel = classeVelocidade(p, id);
    if (vel) add(`${id}|velocidade|${vel}`, "Velocidade", `${nome} ${pt(vel)}`, lento);
    if (p.retrogrado && !lento) add(`${id}|retrogrado`, "Velocidade", `${nome} retrógrado`);

    if (TRADICIONAIS.includes(id)) {
      const dig = dignidade(id, p.signo);
      add(`${id}|dignidade|${dig}`, "Dignidade", `${nome} em ${pt(dig)}`, lento);
      if (p.casa && ALEGRIA[id] === p.casa) add(`${id}|alegria`, "Dignidade", `${nome} em alegria (Casa ${p.casa})`);
      if (id !== "sol" && ok("sol")) {
        const d = distancia(p.lon, sol.lon);
        if (d < 17 / 60) add(`${id}|cazimi`, "Condição solar", `${nome} cazimi`);
        else if (d < 8) add(`${id}|combusto`, "Condição solar", `${nome} combusto`);
        else if (d < 17) add(`${id}|subRadiis`, "Condição solar", `${nome} sob os raios do Sol`);
      }
    }
  }

  // ── Mapa como um todo.
  if (ok("sol") && sol.casa) add(`mapa|seita|${sol.casa >= 7 ? "diurno" : "noturno"}`, "Mapa", `Mapa ${sol.casa >= 7 ? "diurno" : "noturno"}`);
  if (ok("sol") && ok("lua")) {
    const fase = Math.floor(norm360(pontos.lua.lon - sol.lon) / 45) + 1;
    add(`mapa|faseLunar|${fase}`, "Lua", `Fase lunar ${fase}/8`);
  }
  const contagem = {};
  [...TRADICIONAIS, "asc"].filter(ok).forEach(id => { const e = SIGNO_POR_ID[pontos[id].signo].elemento; contagem[e] = (contagem[e] || 0) + 1; });
  const ordenado = Object.entries(contagem).sort((a, b) => b[1] - a[1]);
  if (ordenado.length) {
    const dom = ordenado.length > 1 && ordenado[0][1] === ordenado[1][1] ? "equilibrio" : ordenado[0][0];
    add(`mapa|elementoDominante|${dom}`, "Mapa", `Elemento dominante: ${pt(dom)}`);
  }

  // ── Lua: curso, fora de curso, próximo e último aspecto.
  const curso = cursoDaLua(pontos);
  if (curso) {
    if (curso.vazia) add("lua|foraDeCurso", "Lua", "Lua fora de curso (VOC)");
    if (curso.proximo) {
      const { planeta, tipo } = curso.proximo;
      add(`lua|proximo|${planeta}`, "Lua", `Próximo aspecto da Lua: ${nomePonto(planeta)}`);
      add(`lua|proximo|${planeta}|${tipo}`, "Lua", `Próximo aspecto da Lua: ${nomeAspecto(tipo)} com ${nomePonto(planeta)}`);
      add(`lua|proximoNatureza|${natureza(planeta)}`, "Lua", `Próximo aspecto da Lua com ${pt(natureza(planeta))}`);
      if (pontos[planeta]?.retrogrado) add("lua|falsaComemoracao", "Lua", "Lua vai tocar planeta retrógrado (falsa comemoração)");
    }
    if (curso.ultimo) {
      add(`lua|ultimo|${curso.ultimo.planeta}`, "Lua", `Último aspecto da Lua: ${nomePonto(curso.ultimo.planeta)}`);
      add(`lua|ultimoNatureza|${natureza(curso.ultimo.planeta)}`, "Lua", `Último aspecto da Lua com ${pt(natureza(curso.ultimo.planeta))}`);
    }
  }

  // ── Ângulos.
  for (const id of ["asc", "mc"]) {
    if (!ok(id)) continue;
    const s = pontos[id].signo;
    add(`${id}|signo|${s}`, "Ângulo", `${nomePonto(id)} em ${nomeSigno(s)}`);
    add(`${id}|modalidade|${SIGNO_POR_ID[s].modalidade}`, "Ângulo", `${nomePonto(id)} em signo ${pt(SIGNO_POR_ID[s].modalidade)}`);
    for (const e of ESTRELAS_FIXAS) if (distancia(pontos[id].lon, e.lon) <= 1) add(`estrela|${e.id}|${id}`, "Estrela fixa", `${e.pt} sobre ${nomePonto(id)}`);
  }
  if (Number.isFinite(cuspides[10]) && cuspides[10] >= 195 && cuspides[10] <= 225) add("mc|viaCombusta", "Ângulo", "Cúspide 10 na Via Combusta");

  // ── Regentes das casas-chave.
  const regente = casa => (Number.isFinite(cuspides[casa]) ? SIGNO_POR_ID[signoDe(cuspides[casa])].regente : null);
  for (const casa of [1, 4, 5, 7, 10]) {
    const r = regente(casa);
    if (!r || !ok(r)) continue;
    const p = pontos[r];
    const lento = LENTOS.has(r);
    add(`R${casa}|planeta|${r}`, "Regentes", `Regente da Casa ${casa} é ${nomePonto(r)}`);
    if (p.casa) add(`R${casa}|casa|${p.casa}`, "Regentes", `Regente da Casa ${casa} na Casa ${p.casa}`);
    add(`R${casa}|dignidade|${dignidade(r, p.signo)}`, "Regentes", `Regente da Casa ${casa} em ${pt(dignidade(r, p.signo))}`, lento);
    const vel = classeVelocidade(p, r);
    if (vel) add(`R${casa}|velocidade|${vel}`, "Regentes", `Regente da Casa ${casa} ${pt(vel)}`, lento);
    if (r !== "sol" && ok("sol")) {
      const d = distancia(p.lon, sol.lon);
      if (d < 17 / 60) add(`R${casa}|cazimi`, "Regentes", `Regente da Casa ${casa} cazimi`);
      else if (d < 8) add(`R${casa}|combusto`, "Regentes", `Regente da Casa ${casa} combusto`);
    }
  }
  const r1 = regente(1), r7 = regente(7), r4 = regente(4);
  if (r1 && r7 && pontos[r1]?.casa === 7 && pontos[r7]?.casa === 1) add("mapa|ocupacaoMutua", "Regentes", "R1 na Casa 7 e R7 na Casa 1 (aprisionamento mútuo)");
  if (Number.isFinite(cuspides[4]) && (SIGNO_POR_ID[signoDe(cuspides[4])].modalidade === "fixo" || (r4 && ok(r4) && SIGNO_POR_ID[pontos[r4].signo].modalidade === "fixo")))
    add("casa4|cadeadoFixo", "Regentes", "Cadeado fixo (Casa 4)");
  if (Number.isFinite(cuspides[5])) {
    const s5 = signoDe(cuspides[5]);
    add(`casa5|fertilidade|${FERTILIDADE[s5]}`, "Casa", `Casa 5 em signo ${pt(FERTILIDADE[s5])}`);
    add(`casa5|elemento|${SIGNO_POR_ID[s5].elemento}`, "Casa", `Casa 5 em ${pt(SIGNO_POR_ID[s5].elemento)}`);
  }
  if (ok("fortuna")) add(`fortuna|elemento|${SIGNO_POR_ID[pontos.fortuna.signo].elemento}`, "Pontos", `Fortuna em ${pt(SIGNO_POR_ID[pontos.fortuna.signo].elemento)}`);

  // ── Recepção mútua (domicílio), antiscia e nodos.
  for (let i = 0; i < TRADICIONAIS.length; i++) for (let j = i + 1; j < TRADICIONAIS.length; j++) {
    const a = TRADICIONAIS[i], b = TRADICIONAIS[j];
    if (!ok(a) || !ok(b) || (LENTOS.has(a) && LENTOS.has(b))) continue;
    if (SIGNO_POR_ID[pontos[a].signo].regente === b && SIGNO_POR_ID[pontos[b].signo].regente === a)
      add(`recepcao|${a}+${b}`, "Recepção", `${nomePonto(a)} e ${nomePonto(b)} em recepção mútua`);
  }
  const comAntiscia = [...TRADICIONAIS, "asc", "mc"].filter(ok);
  for (let i = 0; i < comAntiscia.length; i++) for (let j = 0; j < comAntiscia.length; j++) {
    const a = comAntiscia[i], b = comAntiscia[j];
    if (ORDEM[a] >= ORDEM[b] || (LENTOS.has(a) && LENTOS.has(b))) continue;
    if (distancia(norm360(180 - pontos[a].lon), pontos[b].lon) <= 1) add(`antiscia|${a}+${b}`, "Antiscia", `Antiscia ${nomePonto(a)} ↔ ${nomePonto(b)}`);
  }
  if (ok("nodo")) {
    const sul = norm360(pontos.nodo.lon + 180);
    for (const id of [...TRADICIONAIS, "asc", "mc"]) {
      if (!ok(id) || LENTOS.has(id)) continue;
      if (distancia(pontos[id].lon, pontos.nodo.lon) <= 3) add(`nodoNorte|${id}`, "Nodos", `${nomePonto(id)} com o Nodo Norte (insaciável)`);
      if (distancia(pontos[id].lon, sul) <= 3) add(`nodoSul|${id}`, "Nodos", `${nomePonto(id)} com o Nodo Sul (ponto cego)`);
    }
  }
  if (ok("mercurio")) for (const ang of ANGULOS) if (ok(ang) && distancia(pontos.mercurio.lon, pontos[ang].lon) <= 3)
    add("mercurio|tocaAngulo", "Condição", "Mercúrio tocando um ângulo (multiplicidade)");

  // ── Aspectos declarados e consistentes.
  for (const asp of aspectos || []) {
    if (!asp.consistente) continue;
    const [a, b] = par(asp.a, asp.b);
    if (LENTOS.has(a) && LENTOS.has(b)) continue;
    if (ANGULOS.includes(a) && ANGULOS.includes(b)) continue;
    const base = `${a}+${b}`;
    const nomeBase = `${nomePonto(a)} ${nomeAspecto(asp.tipo)} ${nomePonto(b)}`;
    const leitura = LEITURA_PAR[base] ? ` — ${LEITURA_PAR[base]}` : "";
    add(`asp|${base}|${asp.tipo}`, "Aspecto", nomeBase + leitura);
    add(`aspPar|${base}`, "Aspecto", `${nomePonto(a)} e ${nomePonto(b)} em aspecto${leitura}`);
    if (asp.status === "aplicando" || asp.status === "separando") add(`asp|${base}|${asp.tipo}|${asp.status}`, "Aspecto", `${nomeBase} (${asp.status})`);
    if (asp.orbe < 1) add(`aspExato|${base}|${asp.tipo}`, "Aspecto", `${nomeBase} exato (<1°)`);
    if ((a === "vertice" || b === "vertice") && asp.orbe < 0.5) {
      const outro = a === "vertice" ? b : a;
      add(`vertice|exato|${natureza(outro)}`, "Pontos", `Vértice em aspecto exato com ${pt(natureza(outro))}`);
    }
  }

  // ── Agrupamentos na mesma casa (2–3 corpos) e stellium.
  const porCasa = {};
  CORPOS.filter(id => ok(id) && pontos[id].casa).forEach(id => { (porCasa[pontos[id].casa] ||= []).push(id); });
  for (const [casa, ids] of Object.entries(porCasa)) {
    const planetas = ids.filter(id => !["fortuna", "vertice", "lilith", "nodo", "quiron"].includes(id));
    if (planetas.length >= 3) add(`casa|${casa}|stellium`, "Casa", `Stellium na Casa ${casa}`);
    if (ids.length >= 2 && ids.length <= 3 && !ids.every(id => LENTOS.has(id))) {
      const grupo = [...ids].sort((x, y) => ORDEM[x] - ORDEM[y]);
      add(`grupo|${grupo.join("+")}`, "Casa", `${grupo.map(nomePonto).join(" + ")} na mesma casa`);
    }
  }

  return [...sinais.values()];
}

// Casa geométrica de uma longitude qualquer (reexport útil para a UI).
export { casaDe };

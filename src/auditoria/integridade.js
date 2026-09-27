// Integridade e reprodutibilidade dos dados.

// Hash rápido e determinístico (cyrb53) — identifica exatamente qual histórico
// foi usado em cada previsão/experimento.
export function hash53(texto, semente = 0) {
  let h1 = 0xdeadbeef ^ semente, h2 = 0x41c6ce57 ^ semente;
  for (let i = 0; i < texto.length; i++) {
    const c = texto.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 2654435761);
    h2 = Math.imul(h2 ^ c, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36).padStart(11, "0");
}

export const hashHistorico = resultados => hash53(resultados.map(r => `${r.concurso}:${r.resultado.join(",")}`).join("|"));

const dataISO = d => { const m = String(d || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/); return m ? `${m[3]}-${m[2]}-${m[1]}` : null; };

// Verificação completa do histórico antes de treinar.
export function verificarHistorico(resultados) {
  const problemas = [];
  const vistos = new Map();
  let anterior = null;
  for (const r of resultados) {
    const c = r.concurso;
    if (vistos.has(c)) problemas.push({ tipo: "duplicado", concurso: c, msg: `Concurso ${c} aparece mais de uma vez` });
    vistos.set(c, r);
    const d = r.resultado || [];
    if (d.length !== 15) problemas.push({ tipo: "dezenas", concurso: c, msg: `Concurso ${c}: ${d.length} dezenas (esperado 15)` });
    else if (new Set(d).size !== 15) problemas.push({ tipo: "dezenas", concurso: c, msg: `Concurso ${c}: dezena repetida` });
    else if (d.some(n => !Number.isInteger(n) || n < 1 || n > 25)) problemas.push({ tipo: "dezenas", concurso: c, msg: `Concurso ${c}: dezena fora de 1–25` });
    const iso = dataISO(r.data);
    if (!iso) problemas.push({ tipo: "data", concurso: c, msg: `Concurso ${c}: data ausente ou inválida` });
    else {
      if (new Date(`${iso}T12:00:00Z`).getUTCDay() === 0) problemas.push({ tipo: "aviso", concurso: c, msg: `Concurso ${c}: sorteio num domingo (${r.data})` });
      if (anterior?.iso && iso < anterior.iso) problemas.push({ tipo: "data", concurso: c, msg: `Concurso ${c}: data anterior à do concurso ${anterior.concurso}` });
    }
    anterior = { concurso: c, iso };
  }
  const nums = [...vistos.keys()].sort((a, b) => a - b);
  const ausentes = [];
  for (let i = 1; i < nums.length; i++) for (let c = nums[i - 1] + 1; c < nums[i] && ausentes.length < 200; c++) ausentes.push(c);
  ausentes.forEach(c => problemas.push({ tipo: "ausente", concurso: c, msg: `Concurso ${c} ausente` }));
  // Sorteios idênticos (possível erro de digitação/cópia).
  const porCombinacao = new Map();
  for (const r of resultados) {
    const k = (r.resultado || []).join(",");
    if (porCombinacao.has(k)) problemas.push({ tipo: "aviso", concurso: r.concurso, msg: `Concurso ${r.concurso} tem o mesmo resultado do ${porCombinacao.get(k)}` });
    else porCombinacao.set(k, r.concurso);
  }
  const graves = problemas.filter(p => p.tipo !== "aviso").length;
  return { n: resultados.length, primeiro: nums[0], ultimo: nums[nums.length - 1], problemas, graves, hash: hashHistorico(resultados), integro: graves === 0 };
}

// Linha do tempo de alterações a partir dos registros com data do estado.
export function linhaDoTempo(app) {
  const ev = [];
  Object.entries(app.correcoes || {}).forEach(([c, v]) => ev.push({ em: v.em, tipo: "correção", texto: `Concurso ${c} corrigido: ${v.motivo}` }));
  Object.entries(app.mapas || {}).forEach(([c, v]) => v.salvoEm && ev.push({ em: v.salvoEm, tipo: "mapa", texto: `Mapa do concurso ${c} salvo` }));
  (app.hipoteses || []).forEach(h => ev.push({ em: h.criadaEm, tipo: "hipótese", texto: `Hipótese congelada: ${h.rotuloSinal} (${h.hash})` }));
  (app.diario || []).forEach(d => ev.push({ em: d.registradoEm, tipo: "previsão", texto: `Previsão ${d.motor} para o concurso ${d.concurso} (${d.hash})` }));
  (app.resultados || []).forEach(r => r.adicionadoEm && ev.push({ em: r.adicionadoEm, tipo: "resultado", texto: `Resultado do concurso ${r.concurso} adicionado manualmente` }));
  if (app.autoteste) ev.push({ em: app.autoteste.em, tipo: "autoteste", texto: `Autoteste científico: ${app.autoteste.aprovados}/${app.autoteste.total} aprovados` });
  return ev.filter(e => e.em).sort((a, b) => b.em.localeCompare(a.em));
}

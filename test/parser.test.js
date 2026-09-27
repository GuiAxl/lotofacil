import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseMapa, dividirMapasEmLote } from "../src/astro/parser.js";
import { extrairSinais, cursoDaLua, dignidade } from "../src/astro/sinais.js";

const modelo = readFileSync(new URL("./fixtures/mapa-modelo.txt", import.meta.url), "utf8");

test("mapa modelo em inglês: tudo reconhecido, sem avisos", () => {
  const m = parseMapa(modelo);
  assert.equal(m.avisos.length, 0, JSON.stringify(m.avisos));
  assert.ok(m.completo);
  assert.equal(m.aspectos.length, 33);
  assert.ok(m.aspectos.every(a => a.consistente));
  assert.equal(m.pontos.sol.signo, "aries");
  assert.equal(m.pontos.sol.grau, 23);
  assert.equal(m.pontos.sol.casa, 6);
  assert.equal(m.pontos.nodo.retrogrado, true);
  assert.equal(m.pontos.marte.velocidade.razao, 1.48);
  assert.ok(Math.abs(m.pontos.nodo.velocidade.grausDia + (3 / 60 + 10 / 3600)) < 1e-9);
  assert.equal(m.pontos.ic.signo, "aquario");
});

test("linha estranha vira aviso, não some", () => {
  const m = parseMapa(modelo + "\nBlah blah 12 xx");
  assert.equal(m.avisos.length, 1);
  assert.match(m.avisos[0].msg, /não reconhecida/);
});

test("aspecto com orbe incompatível com as posições é descartado", () => {
  const m = parseMapa(modelo.replace("Venus Octile Neptune (Orb: 0°09’", "Venus Trine Neptune (Orb: 0°09’"));
  const a = m.aspectos.find(x => x.a === "venus" && x.b === "netuno");
  assert.equal(a.consistente, false);
});

test("casa declarada divergente da geometria gera aviso e usa a geometria", () => {
  const m = parseMapa(modelo.replace("Sun in Aries 23°59’, in 6th House", "Sun in Aries 23°59’, in 9th House"));
  assert.equal(m.pontos.sol.casa, 6);
  assert.ok(m.avisos.some(a => /casa declarada 9/.test(a.msg)));
});

test("lote com cabeçalhos de concurso", () => {
  const lote = dividirMapasEmLote(`#3650\n${modelo}\nConcurso 3651\n${modelo}`);
  assert.deepEqual(lote.map(b => b.concurso), [3650, 3651]);
});

test("sinais da doutrina no mapa modelo", () => {
  const m = parseMapa(modelo);
  const chaves = new Set(extrairSinais(m).map(s => s.chave));
  for (const k of ["sol|dignidade|exaltacao", "venus|dignidade|domicilio", "saturno|dignidade|queda", "saturno|subRadiis",
    "recepcao|lua+jupiter", "mapa|seita|noturno", "marte|velocidade|rapido", "nodoNorte|lua", "lua|proximo|jupiter|trigono",
    "mercurio|anaretico", "casa|5|stellium", "asp|marte+netuno|conjuncao|separando"]) assert.ok(chaves.has(k), k);
  assert.equal(cursoDaLua(m.pontos).vazia, false);
  assert.equal(dignidade("mercurio", "peixes"), "exilio");
});

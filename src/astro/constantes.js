// Tabelas astrológicas fixas. Regência e dignidades tradicionais (7 planetas),
// conforme a base de conhecimento do sistema.

export const SIGNOS = [
  { id: "aries", en: "Aries", pt: "Áries", elemento: "fogo", modalidade: "cardinal", regente: "marte" },
  { id: "touro", en: "Taurus", pt: "Touro", elemento: "terra", modalidade: "fixo", regente: "venus" },
  { id: "gemeos", en: "Gemini", pt: "Gêmeos", elemento: "ar", modalidade: "mutavel", regente: "mercurio" },
  { id: "cancer", en: "Cancer", pt: "Câncer", elemento: "agua", modalidade: "cardinal", regente: "lua" },
  { id: "leao", en: "Leo", pt: "Leão", elemento: "fogo", modalidade: "fixo", regente: "sol" },
  { id: "virgem", en: "Virgo", pt: "Virgem", elemento: "terra", modalidade: "mutavel", regente: "mercurio" },
  { id: "libra", en: "Libra", pt: "Libra", elemento: "ar", modalidade: "cardinal", regente: "venus" },
  { id: "escorpiao", en: "Scorpio", pt: "Escorpião", elemento: "agua", modalidade: "fixo", regente: "marte" },
  { id: "sagitario", en: "Sagittarius", pt: "Sagitário", elemento: "fogo", modalidade: "mutavel", regente: "jupiter" },
  { id: "capricornio", en: "Capricorn", pt: "Capricórnio", elemento: "terra", modalidade: "cardinal", regente: "saturno" },
  { id: "aquario", en: "Aquarius", pt: "Aquário", elemento: "ar", modalidade: "fixo", regente: "saturno" },
  { id: "peixes", en: "Pisces", pt: "Peixes", elemento: "agua", modalidade: "mutavel", regente: "jupiter" },
];
export const SIGNO_POR_ID = Object.fromEntries(SIGNOS.map((s, i) => [s.id, { ...s, indice: i }]));

// Nomes aceitos no texto (inglês, com variações) → id interno.
export const PONTOS = [
  { id: "sol", pt: "Sol", glifo: "☉", en: ["sun"] },
  { id: "lua", pt: "Lua", glifo: "☽", en: ["moon"] },
  { id: "mercurio", pt: "Mercúrio", glifo: "☿", en: ["mercury"] },
  { id: "venus", pt: "Vênus", glifo: "♀", en: ["venus"] },
  { id: "marte", pt: "Marte", glifo: "♂", en: ["mars"] },
  { id: "jupiter", pt: "Júpiter", glifo: "♃", en: ["jupiter"] },
  { id: "saturno", pt: "Saturno", glifo: "♄", en: ["saturn"] },
  { id: "urano", pt: "Urano", glifo: "♅", en: ["uranus"] },
  { id: "netuno", pt: "Netuno", glifo: "♆", en: ["neptune"] },
  { id: "plutao", pt: "Plutão", glifo: "♇", en: ["pluto"] },
  { id: "nodo", pt: "Nodo Norte", glifo: "☊", en: ["north node", "true node", "mean node", "node"] },
  { id: "lilith", pt: "Lilith", glifo: "⚸", en: ["lilith", "black moon lilith", "black moon"] },
  { id: "quiron", pt: "Quíron", glifo: "⚷", en: ["chiron"] },
  { id: "fortuna", pt: "Fortuna", glifo: "⊗", en: ["fortune", "part of fortune", "pars fortuna"] },
  { id: "vertice", pt: "Vértice", glifo: "Vx", en: ["vertex"] },
  { id: "asc", pt: "Ascendente", glifo: "AC", en: ["asc", "ascendant"] },
  { id: "mc", pt: "Meio do Céu", glifo: "MC", en: ["mc", "midheaven", "medium coeli"] },
  { id: "dsc", pt: "Descendente", glifo: "DC", en: ["dsc", "descendant"] },
  { id: "ic", pt: "Fundo do Céu", glifo: "IC", en: ["ic", "imum coeli"] },
];
export const PONTO_POR_ID = Object.fromEntries(PONTOS.map(p => [p.id, p]));
export const CORPOS = ["sol", "lua", "mercurio", "venus", "marte", "jupiter", "saturno", "urano", "netuno",
  "plutao", "nodo", "lilith", "quiron", "fortuna", "vertice"];
export const PONTOS_OBRIGATORIOS = [...CORPOS, "asc", "mc"];
export const TRADICIONAIS = ["sol", "lua", "mercurio", "venus", "marte", "jupiter", "saturno"];
export const ANGULOS = ["asc", "mc", "dsc", "ic"];

// Corpos que ficam meses no mesmo signo: signo/grau/dignidade deles não são
// observações independentes dia a dia (autocorrelação), então esses sinais
// ficam marcados como "lentos" e fora da pontuação por padrão.
export const LENTOS = new Set(["jupiter", "saturno", "urano", "netuno", "plutao", "nodo", "lilith", "quiron"]);

export const ASPECTOS = [
  { id: "conjuncao", pt: "conjunção", angulo: 0, en: ["conjunction"], natureza: "neutra" },
  { id: "semisextil", pt: "semissextil", angulo: 30, en: ["semi-sextile", "semisextile", "semi sextile"], natureza: "menor" },
  { id: "octil", pt: "octil", angulo: 45, en: ["octile", "semi-square", "semisquare", "semi square"], natureza: "tensa" },
  { id: "sextil", pt: "sextil", angulo: 60, en: ["sextile"], natureza: "harmonica" },
  { id: "quintil", pt: "quintil", angulo: 72, en: ["quintile"], natureza: "menor" },
  { id: "quadratura", pt: "quadratura", angulo: 90, en: ["square"], natureza: "tensa" },
  { id: "trigono", pt: "trígono", angulo: 120, en: ["trine"], natureza: "harmonica" },
  { id: "trioctil", pt: "tri-octil", angulo: 135, en: ["tri-octile", "trioctile", "sesquiquadrate", "sesqui-square", "sesquisquare"], natureza: "tensa" },
  { id: "biquintil", pt: "biquintil", angulo: 144, en: ["biquintile", "bi-quintile"], natureza: "menor" },
  { id: "quincuncio", pt: "quincúncio", angulo: 150, en: ["quincunx", "inconjunct"], natureza: "desajuste" },
  { id: "oposicao", pt: "oposição", angulo: 180, en: ["opposition"], natureza: "tensa" },
];
export const ASPECTO_POR_ID = Object.fromEntries(ASPECTOS.map(a => [a.id, a]));
export const PTOLOMAICOS = ["conjuncao", "sextil", "quadratura", "trigono", "oposicao"];

export const DIGNIDADES = {
  sol: { domicilio: ["leao"], exaltacao: ["aries"], exilio: ["aquario"], queda: ["libra"] },
  lua: { domicilio: ["cancer"], exaltacao: ["touro"], exilio: ["capricornio"], queda: ["escorpiao"] },
  mercurio: { domicilio: ["gemeos", "virgem"], exaltacao: ["virgem"], exilio: ["sagitario", "peixes"], queda: ["peixes"] },
  venus: { domicilio: ["touro", "libra"], exaltacao: ["peixes"], exilio: ["escorpiao", "aries"], queda: ["virgem"] },
  marte: { domicilio: ["aries", "escorpiao"], exaltacao: ["capricornio"], exilio: ["libra", "touro"], queda: ["cancer"] },
  jupiter: { domicilio: ["sagitario", "peixes"], exaltacao: ["cancer"], exilio: ["gemeos", "virgem"], queda: ["capricornio"] },
  saturno: { domicilio: ["capricornio", "aquario"], exaltacao: ["libra"], exilio: ["cancer", "leao"], queda: ["aries"] },
};

// Alegria planetária (casa onde o planeta age com naturalidade máxima).
export const ALEGRIA = { mercurio: 1, lua: 3, venus: 5, marte: 6, sol: 9, jupiter: 11, saturno: 12 };

export const BENEFICOS = new Set(["venus", "jupiter"]);
export const MALEFICOS = new Set(["marte", "saturno"]);

// Velocidade média diária (graus/dia), usada quando o texto não traz a razão.
export const VELOCIDADE_MEDIA = { sol: 0.9856, lua: 13.176, mercurio: 1.383, venus: 1.2, marte: 0.524, jupiter: 0.083, saturno: 0.033 };

export const TIPO_CASA = { 1: "angular", 4: "angular", 7: "angular", 10: "angular", 2: "sucedente", 5: "sucedente", 8: "sucedente", 11: "sucedente", 3: "cadente", 6: "cadente", 9: "cadente", 12: "cadente" };

// Signos férteis / estéreis (leitura da Casa 5).
export const FERTILIDADE = {
  aries: "fertil", touro: "fertil", cancer: "fertil", escorpiao: "fertil", peixes: "fertil",
  gemeos: "esteril", leao: "esteril", virgem: "esteril",
  libra: "neutro", sagitario: "neutro", capricornio: "neutro", aquario: "neutro",
};

// Estrelas fixas (longitude eclíptica aproximada para 2025-2027).
export const ESTRELAS_FIXAS = [
  { id: "algol", pt: "Algol", lon: 56.4 },
  { id: "aldebaran", pt: "Aldebaran", lon: 70.05 },
  { id: "regulus", pt: "Regulus", lon: 150.1 },
  { id: "spica", pt: "Spica", lon: 204.1 },
  { id: "antares", pt: "Antares", lon: 250.05 },
];

export const nomePonto = id => PONTO_POR_ID[id]?.pt || id;
export const nomeSigno = id => SIGNO_POR_ID[id]?.pt || id;
export const nomeAspecto = id => ASPECTO_POR_ID[id]?.pt || id;

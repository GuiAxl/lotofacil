import { useState, useEffect, useRef } from "react";


// ─── Histórico pré-carregado desta conversa (backup) ──────────────────
// 100 concursos reais (3650 a 3749, 31/03/2026 a 30/07/2026). 38 já têm mapa horário
// inserido, com jogoGerado calculado apenas por sinal astrológico (planetas, casas,
// signos, aspectos, cadeia dispositora) — sem estatística de frequência ou soma.
const HISTORICO_INICIAL = [
  {
    id: "h13", concurso: "3650", data: "31/03/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 8, 10, 11, 12, 13, 16, 17, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h14", concurso: "3651", data: "01/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 8, 10, 12, 13, 14, 16, 17, 18, 20, 21, 24, 25],
    obs: ""
  },
  {
    id: "h15", concurso: "3652", data: "02/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 6, 7, 11, 12, 13, 15, 16, 18, 19, 20, 21, 23, 24],
    obs: ""
  },
  {
    id: "h16", concurso: "3653", data: "04/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 6, 7, 8, 10, 11, 13, 14, 16, 18, 19, 20, 21],
    obs: ""
  },
  {
    id: "h17", concurso: "3654", data: "06/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 6, 7, 11, 15, 17, 19, 20, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h18", concurso: "3655", data: "07/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 10, 11, 12, 17, 18, 19, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h19", concurso: "3656", data: "08/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 6, 7, 8, 11, 12, 14, 15, 18, 19, 20, 21, 24, 25],
    obs: ""
  },
  {
    id: "h20", concurso: "3657", data: "09/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 7, 8, 10, 12, 13, 17, 18, 19, 20, 22, 23, 24],
    obs: ""
  },
  {
    id: "h21", concurso: "3658", data: "10/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 9, 10, 11, 12, 13, 16, 18, 20, 22, 23, 24],
    obs: ""
  },
  {
    id: "h22", concurso: "3659", data: "11/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 23, 25],
    obs: ""
  },
  {
    id: "h23", concurso: "3660", data: "13/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 5, 6, 7, 8, 10, 11, 12, 14, 17, 18, 22, 23, 24],
    obs: ""
  },
  {
    id: "h24", concurso: "3661", data: "14/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 19, 21, 23, 24],
    obs: ""
  },
  {
    id: "h25", concurso: "3662", data: "15/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20, 23, 25],
    obs: ""
  },
  {
    id: "h26", concurso: "3663", data: "16/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 10, 12, 14, 17, 19, 20, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h27", concurso: "3664", data: "17/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 10, 11, 12, 16, 18, 19, 20, 22, 23],
    obs: ""
  },
  {
    id: "h28", concurso: "3665", data: "18/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 16, 18, 22, 23, 25],
    obs: ""
  },
  {
    id: "h29", concurso: "3666", data: "20/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 9, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23],
    obs: ""
  },
  {
    id: "h30", concurso: "3667", data: "22/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 19, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h31", concurso: "3668", data: "23/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 7, 8, 9, 10, 11, 13, 15, 17, 18, 21, 24],
    obs: ""
  },
  {
    id: "h32", concurso: "3669", data: "24/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 22, 23, 24],
    obs: ""
  },
  {
    id: "h33", concurso: "3670", data: "25/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 10, 11, 14, 15, 17, 18, 19, 21, 23, 24],
    obs: ""
  },
  {
    id: "h34", concurso: "3671", data: "27/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 17, 18, 21],
    obs: ""
  },
  {
    id: "h35", concurso: "3672", data: "28/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 16, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h36", concurso: "3673", data: "29/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 8, 10, 11, 12, 15, 16, 18, 19, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h37", concurso: "3674", data: "30/04/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 6, 7, 8, 9, 10, 15, 17, 19, 20, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h38", concurso: "3675", data: "02/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 7, 8, 10, 12, 13, 15, 17, 18, 19, 23, 24],
    obs: ""
  },
  {
    id: "h39", concurso: "3676", data: "04/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 8, 10, 13, 15, 16, 18, 19, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h40", concurso: "3677", data: "05/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 8, 9, 10, 12, 13, 14, 15, 16, 18, 22, 23, 24],
    obs: ""
  },
  {
    id: "h41", concurso: "3678", data: "06/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 8, 10, 11, 14, 18, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h42", concurso: "3679", data: "07/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 10, 11, 13, 14, 17, 18, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h43", concurso: "3680", data: "08/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 7, 8, 9, 11, 15, 16, 19, 22, 24, 25],
    obs: ""
  },
  {
    id: "h44", concurso: "3681", data: "09/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 9, 11, 12, 14, 15, 16, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h45", concurso: "3682", data: "11/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 9, 10, 11, 12, 13, 17, 18, 21, 22, 24],
    obs: ""
  },
  {
    id: "h46", concurso: "3683", data: "12/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 16, 19, 20, 24, 25],
    obs: ""
  },
  {
    id: "h47", concurso: "3684", data: "13/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 6, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 23],
    obs: ""
  },
  {
    id: "h48", concurso: "3685", data: "14/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 8, 10, 11, 14, 15, 17, 19, 20, 21, 23, 24, 25],
    obs: ""
  },
  {
    id: "h49", concurso: "3686", data: "15/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 8, 9, 10, 13, 15, 18, 19, 23, 24, 25],
    obs: ""
  },
  {
    id: "h50", concurso: "3687", data: "16/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 12, 13, 14, 16, 17, 18, 20, 21, 23, 24, 25],
    obs: ""
  },
  {
    id: "h51", concurso: "3688", data: "18/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 7, 11, 12, 16, 17, 19, 21, 24, 25],
    obs: ""
  },
  {
    id: "h52", concurso: "3689", data: "19/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 23],
    obs: ""
  },
  {
    id: "h53", concurso: "3690", data: "20/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 8, 9, 12, 15, 18, 19, 20, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h54", concurso: "3691", data: "21/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 8, 9, 10, 13, 14, 15, 18, 19, 21, 23, 24, 25],
    obs: ""
  },
  {
    id: "h55", concurso: "3692", data: "22/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 7, 9, 10, 13, 14, 15, 19, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h56", concurso: "3693", data: "23/05/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 18, 20, 21, 25],
    obs: ""
  },
  {
    id: "h1", concurso: "", data: "25/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 4°46', na 5ª Casa;Lua em Libra 4°55', na 9ª Casa;Mercúrio em Gêmeos 18°02', na 5ª Casa;Vênus em Câncer 8°17', na 6ª Casa;Marte em Touro 5°17', na 4ª Casa;Júpiter em Câncer 22°57', na 6ª Casa;Saturno em Áries 11°43', na 3ª Casa;Urano em Gêmeos 1°42', na 5ª Casa;Netuno em Áries 3°56', na 3ª Casa;Plutão em Aquário 5°25', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°29', retrógrado, na 2ª Casa;Lilith em Sagitário 17°30', na 11ª Casa;Quíron em Áries 28°53', na 4ª Casa;Fortuna em Virgem 24°35', na 9ª Casa.Vertex em Touro 25°59', na 5ª Casa,Ascendente em Capricórnio 24°44',Meio do Céu em Libra 18°23'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 9, 13, 15, 16, 17, 18, 24, 25],
    resultado: [2, 4, 5, 7, 8, 9, 13, 14, 17, 18, 19, 20, 22, 23, 24],
    obs: "Mapa retroativo — análise inicial do método"
  },
  {
    id: "h2", concurso: "", data: "26/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 5°44', na 5ª Casa;Lua em Libra 17°19', na 9ª Casa;Mercúrio em Gêmeos 19°59', na 5ª Casa;Vênus em Câncer 9°28', na 6ª Casa;Marte em Touro 6°02', na 4ª Casa;Júpiter em Câncer 23°08', na 6ª Casa;Saturno em Áries 11°48', na 3ª Casa;Urano em Gêmeos 1°46', na 5ª Casa;Netuno em Áries 3°57', na 3ª Casa;Plutão em Aquário 5°24', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°26', retrógrado, na 2ª Casa;Lilith em Sagitário 17°36', na 11ª Casa;Quíron em Áries 28°56', na 4ª Casa; Fortuna em Virgem 14°01', na 8ª Casa. Vértice da 8ª casa em Touro 26°27', Ascendente na 4ª casa em Aquário 0°44'MC em Libra 19°26'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 17, 18, 19, 20, 25],
    resultado: [1, 2, 3, 4, 6, 8, 9, 13, 15, 17, 18, 21, 22, 23, 24],
    obs: "Erro grave — energia mal interpretada, casas baixas ignoradas"
  },
  {
    id: "h3", concurso: "", data: "27/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 6°42', na 5ª Casa;Lua em Libra 29°33', na 10ª Casa;Mercúrio em Gêmeos 21°54', na 5ª Casa;Vênus em Câncer 10°39', na 6ª Casa;Marte em Touro 6°47', na 4ª Casa;Júpiter em Câncer 23°19', na 6ª Casa;Saturno em Áries 11°53', na 3ª Casa;Urano em Gêmeos 1°49', na 5ª Casa;Netuno em Áries 3°58', na 3ª Casa;Plutão em Aquário 5°24', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°23', retrógrado, na 2ª Casa; Lilith em Sagitário 17°43', na 11ª Casa; Quíron em Áries 28°59', na4ª Casa; Fortuna em Virgem 3°36', na 5ªCasa . Vértice da 8ª casa em Touro 26°56', Ascendente na 5ª casa em Capricórnio 26°28', Meio do Céu em Libra 20°30'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 10, 11, 13, 15, 16, 21, 22, 25],
    resultado: [2, 3, 5, 6, 7, 9, 11, 13, 15, 16, 17, 19, 21, 23, 24],
    obs: "Melhor dos 3 jogos alternativos gerados naquele dia"
  },
  {
    id: "h4", concurso: "", data: "28/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 7°39', na 5ª Casa;Lua em Escorpião 11°39', na 10ª Casa;Mercúrio em Gêmeos 23°47', na 5ª Casa;Vênus em Câncer 11°50', na 6ª Casa;Marte em Touro 7°31', na 4ª Casa;Júpiter em Câncer 23°30', na 6ª Casa;Saturno em Áries 11°59', na 3ª Casa;Urano em Gêmeos 1°53', na 5ª Casa;Netuno em Áries 4°00', na 3ª Casa;Plutão em Aquário 5°23', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°20', retrógrado, na 2ª Casa; Lilith em Sagitário 17°50', na 11ª Casa; Quíron em Áries 29°02', na 4ª Casa; Fortuna em Leão 23°20', na 5ªCasa . Vértice da 8ª casa em Touro 27°25', Ascendente na 5ª casa em Capricórnio 27°19', Meio do Céu em Libra 21°33'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 21, 22, 23, 24, 25],
    resultado: [1, 5, 6, 7, 9, 10, 13, 15, 17, 18, 19, 20, 21, 24, 25],
    obs: "9 acertos — tirou 10 e 24 que saíram"
  },
  {
    id: "h5", concurso: "", data: "29/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 8°37', na 5ª Casa;Lua em Sagitário 5°35', na 11ª Casa;Mercúrio em Gêmeos 27°24', na 5ª Casa;Vênus em Câncer 14°12', na 6ª Casa;Marte em Touro 9°01', na 4ª Casa;Júpiter em Câncer 23°52', na 6ª Casa;Saturno em Áries 12°09', na 3ª Casa;Urano em Gêmeos 2°00', na 5ª Casa;Netuno em Áries 4°02', na 3ª Casa;Plutão em Aquário 5°22', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°13', retrógrado, na 2ª Casa; Lilith em Sagitário 18°03', na 11ª Casa; Quíron em Áries 29°08', na4ª Casa; Fortuna em Câncer 12°53', noVértice da 6ª Casa em Touro 29°21', noAscendente da 4ª Casa em Aquário 0°44'MC em Libra 25°42'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 9, 11, 12, 13, 18, 22, 23, 24, 25],
    resultado: [1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 17, 18, 19, 20, 23, 25],
    obs: "ASC mudou para Aquário. Regra dos graus dos planetas móveis descoberta"
  },
  {
    id: "h6", concurso: "", data: "30/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 9°34', na 5ª Casa;Lua em Sagitário 29°20', na 11ª Casa;Mercúrio em Câncer 0°50', na 5ª Casa;Vênus em Câncer 16°34', na 6ª Casa;Marte em Touro 10°30', na 4ª Casa;Júpiter em Câncer 24°15', na 6ª Casa;Saturno em Áries 12°19', na 3ª Casa;Urano em Gêmeos 2°07', na 5ª Casa;Netuno em Áries 4°04', na 3ª Casa;Plutão em Aquário 5°21', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°07', retrógrado, na 2ª Casa;Lilith em Sagitário 18°17', na 11ª Casa;Quíron em Áries 29°14', na4ª Casa;Fortuna em Câncer 12°53', noVértice da 6ª Casa em Touro 29°21', noAscendente da 4ª Casa em Aquário 0°44'MC em Libra 25°42'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 9, 11, 12, 13, 17, 18, 23, 24, 25],
    resultado: [1, 2, 3, 5, 6, 8, 9, 11, 14, 18, 20, 21, 22, 24, 25],
    obs: "10 acertos — descoberta: dois planetas fracos no mesmo grau não ativam"
  },
  {
    id: "h7", concurso: "", data: "01/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 11°29', na 5ª Casa;Lua em Aquário 29°37', na 1ª Casa;Mercúrio em Câncer 8°36', na 6ª Casa;Vênus em Câncer 22°27', na 6ª Casa;Marte em Touro 14°11', na 4ª Casa;Júpiter em Câncer 25°13', na 6ª Casa;Saturno em Áries 12°43', na 3ª Casa;Urano em Gêmeos 2°24', na 4ª Casa;Netuno em Áries 4°10', na 3ª Casa;Plutão em Aquário 5°17', retrógrado, na 1ª Casa;Nodo Norte em Peixes 3°51', retrógrado, na 2ª Casa;Lilith em Sagitário 18°50', na 11ª Casa;Quíron em Áries 29°28', na4ª Casa;Fortuna em Touro 21°41', noVértice da 4ª Casa em Gêmeos 1°44', noAscendente da 4ª Casa em Aquário 5°02'Meio do Céu em Escorpião 0°53'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 8, 11, 13, 18, 19, 22, 23, 24, 25],
    resultado: [1, 3, 7, 8, 9, 10, 12, 13, 14, 17, 18, 19, 20, 23, 25],
    obs: "Usado para calibrar regras (estrutura ASC Aquário / DSC Leão)"
  },
  {
    id: "h10", concurso: "", data: "02/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 12°27', na 5ª Casa;Lua em Capricórnio 11°13', na 12ª Casa;Mercúrio em Câncer 2°29', na 5ª Casa;Vênus em Câncer 17°45', na 6ª Casa;Marte em Touro 11°14', na 4ª Casa;Júpiter em Câncer 24°26', na 6ª Casa;Saturno em Áries 12°24', na 3ª Casa;Urano em Gêmeos 2°10', na 5ª Casa;Netuno em Áries 4°05', na 3ª Casa;Plutão em Aquário 5°20', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°04', retrógrado, na 2ª Casa; Lilith em Sagitário 18°23', na 11ª Casa; Quíron em Áries 29°17', na4ª Casa; Fortuna em Câncer 2°50', na 5ª Casa. Vértice da 5ª casa em Touro 29°50', Ascendente na 4ª casa em Aquário 1°36', Meio do Céu em Libra 26°44'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 18, 23, 24, 25],
    resultado: [1, 2, 4, 7, 8, 9, 10, 12, 13, 14, 17, 22, 23, 24, 25],
    obs: "10 acertos — descoberta: DSC em Leão = 5° signo (correção de erro anterior de 8°)"
  },
  {
    id: "h11", concurso: "", data: "03/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 13°24', na 5ª Casa;Lua em Capricórnio 23°08', na 12ª Casa;Mercúrio em Câncer 4°05', na 5ª Casa;Vênus em Câncer 18°55', na 6ª Casa;Marte em Touro 11°58', na 4ª Casa;Júpiter em Câncer 24°38', na 6ª Casa;Saturno em Áries 12°29', na 3ª Casa;Urano em Gêmeos 2°14', na 4ª Casa;Netuno em Áries 4°06', na 3ª Casa;Plutão em Aquário 5°19', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°00', retrógrado, na 2ª Casa; Lilith em Sagitário 18°30', na 11ª Casa; Quíron em Áries 29°19', na4ª Casa; Fortuna em Gêmeos 22°44', na 5ª Casa. Vértice da 5ª casa em Gêmeos 0°19', Ascendente na 4ª casa em Aquário 2°27', Meio do Céu em Libra 27°47'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 11, 12, 13, 18, 19, 22, 23, 24, 25],
    resultado: [2, 3, 5, 9, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
    obs: "Jogo misto horária+estatística — 10 acertos"
  },
  {
    id: "h8", concurso: "3703", data: "05/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 15°19', na 5ª Casa;Lua em Aquário 17°16', na 1ª Casa;Mercúrio em Câncer 7°09', na 6ª Casa;Vênus em Câncer 21°17', na 6ª Casa;Marte em Touro 13°27', na 4ª Casa;Júpiter em Câncer 25°01', na 6ª Casa;Saturno em Áries 12°39', na 3ª Casa;Urano em Gêmeos 2°21', na 4ª Casa;Netuno em Áries 4°09', na 3ª Casa;Plutão em Aquário 5°18', retrógrado, na 1ª Casa;Nodo Norte em Peixes 3°54', retrógrado, na 2ª Casa; Lilith em Sagitário 18°44', na 11ª Casa; Quíron em Áries 29°25', na 3ª Casa; Fortuna em Gêmeos 2°13', na 5ª Casa. Vértice da 4ª casa em Gêmeos 1°16', Ascendente na 4ª casa em Aquário 4°10', Meio do Céu em Libra 29°51'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 11, 13, 17, 18, 19, 22, 24, 25],
    resultado: [1, 3, 5, 7, 8, 9, 10, 14, 15, 17, 21, 22, 23, 24, 25],
    obs: "Concurso 3703 — calibrou: Vênus gera grau+grau+1; Júpiter exaltado gera grau,-1,-2"
  },
  {
    id: "h9", concurso: "3704", data: "06/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 16°17', na 5ª Casa;Lua em Aquário 29°37', na 1ª Casa;Mercúrio em Câncer 8°36', na 6ª Casa;Vênus em Câncer 22°27', na 6ª Casa;Marte em Touro 14°11', na 4ª Casa;Júpiter em Câncer 25°13', na 6ª Casa;Saturno em Áries 12°43', na 3ª Casa;Urano em Gêmeos 2°24', na 4ª Casa;Netuno em Áries 4°10', na 3ª Casa;Plutão em Aquário 5°17', retrógrado, na 1ª Casa;Nodo Norte em Peixes 3°51', retrógrado, na 2ª Casa;Lilith em Sagitário 18°50', na 11ª Casa;Quíron em Áries 29°28', na3ª Casa;Fortuna em Touro. 21°41', noVértice da 4ª Casa em Gêmeos 1°44', noAscendente da 4ª Casa em Aquário 5°02'Meio do Céu em Escorpião 0°53'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 8, 11, 13, 18, 19, 22, 23, 24, 25],
    resultado: [1, 3, 4, 9, 10, 11, 12, 13, 14, 15, 19, 20, 22, 23, 25],
    obs: "Concurso 3704 — MC mudou para Escorpião pela primeira vez"
  },
  {
    id: "h12", concurso: "3705", data: "08/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 18°11', na 5ª Casa;Lua em Peixes 25°15', na 2ª Casa;Mercúrio em Câncer 11°22', na 6ª Casa;Vênus em Câncer 24°48', na 6ª Casa;Marte em Touro 15°39', na 4ª Casa;Júpiter em Câncer 25°36', na 6ª Casa;Saturno em Áries 12°52', na 3ª Casa;Urano em Gêmeos 2°31', na 4ª Casa;Netuno em Áries 4°11', na 3ª Casa;Plutão em Aquário 5°15', retrógrado, na 12ª Casa;Nodo Norte em Peixes 3°45', retrógrado, na 2ª Casa;Lilith em Sagitário 19°04', na 11ª Casa;Quíron em Áries 29°33', na3ª Casa;Fortuna em Áries. 29°41', noVértice da 3ª Casa em Gêmeos 2°41', noAscendente da 4ª Casa em Aquário 6°45'MC em Escorpião 2°56'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 19, 23, 24, 25],
    resultado: [],
    obs: "Aguardando resultado do concurso 3705"
  },
  {
    id: "h57", concurso: "3706", data: "09/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h58", concurso: "3707", data: "10/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 9, 10, 13, 14, 18, 20, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h59", concurso: "3708", data: "11/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 8, 9, 12, 16, 17, 18, 19, 21, 23, 24],
    obs: ""
  },
  {
    id: "h60", concurso: "3709", data: "12/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 9, 10, 11, 14, 15, 18, 19, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h61", concurso: "3710", data: "14/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 9, 12, 13, 14, 15, 16, 17, 18, 25],
    obs: ""
  },
  {
    id: "h62", concurso: "3711", data: "15/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 20, 22, 24, 25],
    obs: ""
  },
  {
    id: "h63", concurso: "3712", data: "16/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h64", concurso: "3713", data: "17/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 19, 20, 22],
    obs: ""
  },
  {
    id: "h65", concurso: "3714", data: "18/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21],
    obs: ""
  },
  {
    id: "h66", concurso: "3715", data: "20/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 9, 11, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h67", concurso: "3716", data: "20/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 11, 12, 15, 17, 18, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h68", concurso: "3717", data: "22/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 9, 10, 11, 14, 15, 17, 18, 20, 25],
    obs: ""
  },
  {
    id: "h69", concurso: "3718", data: "23/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 7, 9, 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h70", concurso: "3719", data: "25/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 8, 10, 11, 12, 14, 15, 18, 19, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h71", concurso: "3720", data: "26/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 22, 24],
    obs: ""
  },
  {
    id: "h72", concurso: "3721", data: "27/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 20, 21, 23, 24],
    obs: ""
  },
  {
    id: "h73", concurso: "3722", data: "29/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 23],
    obs: ""
  },
  {
    id: "h74", concurso: "3723", data: "30/06/2026", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 5, 6, 7, 10, 12, 15, 17, 18, 19, 20, 22, 23, 25],
    obs: ""
  },
  {
    id: "h75", concurso: "3724", data: "01/07/2026", hora: "",
    textoMapa: "Sol em Câncer 10°09', na 5ª Casa;\nLua em Aquário 2°14', na 12ª Casa;\nMercúrio em Câncer 26°03', retrógrado, na 5ª Casa;\nVênus em Leão 21°19', na 6ª Casa;\nMarte em Gêmeos 2°16', na 4ª Casa;\nJúpiter em Leão 0°22', na 6ª Casa;\nSaturno em Áries 14°13', na 2ª Casa;\nUrano em Gêmeos 3°45', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°51', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°32', retrógrado, na 1ª Casa; Lilith em Sagitário 21°38', na 10ª Casa ; Quíron em Touro 0°23', na\n3ª Casa; Fortuna em Leão 4°41', na 5ª Casa. Vértice da 6ª casa em Gêmeos 13°33', Ascendente na 4ª casa em Aquário 26°45', Meio do Céu em Escorpião 25°43'\n\n1ª Casa em Aquário 26°45'\n2ª Casa em Peixes 23°49'\n3ª Casa em Áries 23°09'\n4ª Casa em Touro 25°43'\n5ª Casa em Gêmeos 28°55'\n6ª Casa em Câncer 29°16'\n7ª Casa em Leão 26°45'\n8ª Casa em Virgem 23°49'\n9ª Casa em Libra 23°09'\n10ª Casa em Escorpião 25°43'\n11ª Casa em Sagitário 28°55'\n12ª Casa em Capricórnio 29°16'\n\nLua em trígono com Marte (Orbe: 0°01', em movimento subsequente)\nLua em oposição a Júpiter (Orbe: 1°51', em movimento subsequente)\nLua em trígono com Urano (Orbe: 1°31', em movimento subsequente)\nLua em sextil com Netuno (Orbe: 2°10', em movimento subsequente)\nLua em conjunção com Plutão (Orbe: 2°37', em movimento subsequente)\nVênus em trígono-óctil com Netuno (Orbe: 1°54', em movimento subsequente)\nMarte em sextil com Júpiter (Orbe: 1°53', em movimento subsequente)\nMarte em conjunção com Urano (Orbe: 1°29', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 2°08', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 2°35', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°39', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°05', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°26', em aplicação )\n\nTri-óctil do Sol no Ascendente (Orbe: 1°36', Separando)\nQuincúncio do Ascendente com Mercúrio (Orbe: 0°42', Separando)\nOctil do Ascendente com Saturno (Orbe: 2°27', Aplicando)\nOctil do Descendente com o Sol (Orbe: 1°36', Separando)\nTri-óctil do Descendente com Saturno (Orbe: 2°27', Aplicando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°34', Separando)\nTrígono do Meio do Céu com Mercúrio (Orbe: 0°19', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°34', Separando)\nSextil do Fundo do Céu com Mercúrio (Orbe: 0°19', Aplicando)\nQuadratura do Nodo com Marte (Orbe: 0°15', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 2°09', Aplicando)\nQuadratura do Nodo com Urano (Orbe:\nNodo em sextil com Quíron (Orbe: 2°08', em movimento) Lilith\nem trígono com Vênus (Orbe: 0°19', em movimento)\nLilith em octil com Plutão (Orbe: 1°47', em movimento)\nQuíron em quadratura com a Lua (Orbe: 1°50', em movimento)\nQuíron em quadratura com Júpiter (Orbe: 0°01', em movimento)\nFortuna em oposição à Lua (Orbe: 2°26', em movimento)\nFortuna em sextil com Marte (Orbe: 2°24', em movimento)\nFortuna em sextil com Urano (Orbe: 0°55', em movimento)\nFortuna em trígono com Netuno (Orbe: 0°16', em movimento)\nFortuna em oposição a Plutão (Orbe: 0°10', em movimento)\nFortuna em quincúncio com o Nodo (Orbe: 2°09', em movimento)\nFortuna em trígono-octil com Lilith (Orbe:\nVertex Octil Mercúrio (Orbe: 2°29', Separando )\nVertex Octil Júpiter (Orbe: 1°48', Aplicando)\nVertex Sextil Saturno (Orbe: 0°40', Aplicando)\nVertex Octil Quíron (Orbe: 1°50', Aplicando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 21, 22, 24, 25],
    resultado: [1, 2, 3, 5, 6, 7, 12, 15, 16, 17, 19, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h76", concurso: "3725", data: "02/07/2026", hora: "",
    textoMapa: "Sol em Câncer 11°06', na 5ª Casa;\nLua em Aquário 14°21', na 12ª Casa;\nMercúrio em Câncer 25°51', retrógrado, na 5ª Casa;\nVênus em Leão 22°27', na 6ª Casa;\nMarte em Gêmeos 2°58', na 4ª Casa;\nJúpiter em Leão 0°35', na 6ª Casa;\nSaturno em Áries 14°16', na 2ª Casa;\nUrano em Gêmeos 3°48', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°50', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°28', retrógrado, na 1ª Casa;\nLilith em Sagitário 21°45', na 10ª Casa;\nQuíron em Touro 0°25', na 3ª Casa;\nFortuna em Câncer. 24°23', no\nVértice da 5ª Casa em Gêmeos 14°01', no\nAscendente da 4ª Casa em Aquário 27°38'\nMC em Escorpião 26°41'\n\n1ª Casa em Aquário 27°38'\n2ª Casa em Peixes 24°44'\n3ª Casa em Áries 24°06'\n4ª Casa em Touro 26°41'\n5ª Casa em Gêmeos 29°49'\n6ª Casa em Leão 0°08'\n7ª Casa em Leão 27°38'\n8ª Casa em Virgem 24°44'\n9ª Casa em Libra 24°06'\n10ª Casa em Escorpião 26°41'\n11ª Casa em Sagitário 29°49'\n12ª Casa em Aquário 0°08'\n\nLua em sextil com Saturno (Orbe: 0°05', separando)\nMarte em sextil com Júpiter (Orbe: 2°23', separando)\nMarte em conjunção com Urano (Orbe: 0°49', aplicando)\nMarte em sextil com Netuno (Orbe: 1°26', aplicando)\nMarte em trígono com Plutão (Orbe: 1°51', aplicando)\nUrano em sextil com Netuno (Orbe: 0°36', aplicando)\nUrano em trígono com Plutão (Orbe: 1°01', aplicando)\nNetuno em sextil com Plutão (Orbe: 0°25', aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°32', Separando)\nAscendente em Quincúncio com Mercúrio (Orbe: 1°47', Separando)\nAscendente em Quincúncio com Júpiter (Orbe: 2°56', Aplicando)\nAscendente em Octil com Saturno (Orbe: 1°37', Aplicando)\nAscendente em Sextil com Quíron (Orbe: 2°46', Aplicando)\nDescendente em Octil com o Sol (Orbe: 1°32', Separando)\nDescendente em Tri-Octil com Saturno (Orbe: 1°37', Aplicando)\nDescendente em Trígono com Quíron (Orbe: 2°46', Aplicando) Meio do Céu em\nTri-Octil com o Sol (Orbe: 0°34', Separando)\nMeio do Céu em Trígono com Mercúrio (Orbe: 0°50', Separando)\nMeio do Céu em Tri-Octil com Saturno (Orbe: 2°34', Aplicando)\nFundo do Céu em Octil com o Sol (Orbe: 0°34', Separando)\nIC em sextil com Mercúrio (Orbe: 0°50', Separando)\nIC em octil com Saturno (Orbe: 2°34', Aplicando)\nNodo em quadratura com Marte (Orbe: 0°29', Separando)\nNodo em quincúncio com Júpiter (Orbe: 1°53', Aplicando)\nNodo em quadratura com Urano (Orbe: 1°19', Separando)\nNodo em sextil com Quíron (Orbe: 2°03', Aplicando)\nLilith em trígono com Vênus (Orbe: 0°41', Separando)\nLilith em octil com Plutão (Orbe: 1°55', Separando)\nQuíron em quadratura com Júpiter (Orbe: 0°10', Separando)\nFortuna em conjunção com Mercúrio (Orbe: 1°27', Aplicando)\nFortuna em quincúncio com Lilith (Orbe: 2°37', Separando)\nFortuna em trígono com MC (Orbe: 2°17', em aplicação)\nSextil da Fortuna com o IC (Orbe: 2°17', em aplicação)\nTrígono do Vértice com a Lua (Orbe: 0°20', em aplicação)\nOctil do Vértice com Júpiter (Orbe: 1°33', em aplicação)\nSextil do Vértice com Saturno (Orbe: 0°14', em aplicação)\nOctil do Vértice com Quíron (Orbe: 1°23', em aplicação)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 21, 22, 23, 24, 25],
    resultado: [1, 2, 4, 5, 6, 8, 11, 13, 14, 16, 17, 19, 21, 24, 25],
    obs: ""
  },
  {
    id: "h77", concurso: "3726", data: "03/07/2026", hora: "",
    textoMapa: "Sol em Câncer 12°03', na 5ª Casa;\nLua em Aquário 26°38', na 12ª Casa;\nMercúrio em Câncer 25°34', retrógrado, na 5ª Casa;\nVênus em Leão 23°35', na 6ª Casa;\nMarte em Gêmeos 3°41', na 4ª Casa;\nJúpiter em Leão 0°48', na 5ª Casa;\nSaturno em Áries 14°18', na 2ª Casa;\nUrano em Gêmeos 3°51', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°48', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°25', retrógrado, na 1ª Casa;\nLilith em Sagitário 21°52', na 10ª Casa;\nQuíron em Touro 0°26', na 3ª Casa;\nFortuna em Câncer. 13°56', no\nVértice da 5ª Casa em Gêmeos 14°30', no\nAscendente da 4ª Casa em Aquário 28°31'\nMeio do Céu em Escorpião 27°38'\n\n1ª Casa em Aquário 28°31'\n2ª Casa em Peixes 25°39'\n3ª Casa em Áries 25°04'\n4ª Casa em Touro 27°38'\n5ª Casa em Câncer 0°43'\n6ª Casa em Leão 1°01'\n7ª Casa em Leão 28°31'\n8ª Casa em Virgem 25°39'\n9ª Casa em Libra 25°04'\n10ª Casa em Escorpião 27°38'\n11ª Casa em Capricórnio 0°43'\n12ª Casa em Aquário 1°01'\n\nSol em trígono com a Lua (Orbe: 0°25', em movimento subsequente)\nSol em quadratura com Saturno (Orbe: 2°14', em movimento subsequente)\nLua em quincúncio com Mercúrio (Orbe: 1°04', em movimento subsequente)\nLua em octil com Saturno (Orbe: 2°39', em movimento subsequente)\nMarte em sextil com Júpiter (Orbe: 2°52', em movimento subsequente)\nMarte em conjunção com Urano (Orbe: 0°10', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 0°43', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 1°07', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°33', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°57', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°23', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°27', Separando)\nConjunção com a Lua no Ascendente (Orbe: 1°53', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 2°57', Separando)\nQuincúncio de Júpiter no Ascendente (Orbe: 2°16', Aplicando)\nOctil de Saturno no Ascendente (Orbe: 0°46', Aplicando)\nSextil de Quíron no Ascendente (Orbe: 1°55', Aplicando)\nOctil do Sol no Descendente (Orbe: 1°27', Separando)\nOposição da Lua no Descendente (Orbe: 1°53', Separando)\nTri-óctil de Saturno no Descendente (Orbe: 0°46', Aplicando)\nTrígono de Quíron no Descendente (Orbe: 1°55', Aplicando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°34', Separando)\nQuadratura da Lua no Meio do Céu (Orbe: 0°59', Separando)\nMC em trígono com Mercúrio (Orbe: 2°04', Separando)\nMC em trígono com Saturno (Orbe: 1°40', Aplicando)\nMC em quincúncio com Quíron (Orbe: 2°48', Aplicando)\nIC em óctil com o Sol (Orbe: 0°34', Separando)\nIC em quadratura com a Lua (Orbe: 0°59', Separando)\nIC em sextil com Mercúrio (Orbe: 2°04', Separando)\nIC em óctil com Saturno (Orbe: 1°40', Aplicando)\nNodo em quadratura com Marte (Orbe: 1°15', Separando)\nNodo em quincúncio com Júpiter (Orbe: 1°37', Aplicando)\nNodo em quadratura com Urano (Orbe: 1°25', Separando)\nNodo em sextil com Quíron (Orbe: 1°58', Aplicando)\nLilith em trígono com Vênus (Orbe:\nLilith em Octil com Plutão (Orbe: 2°03', Separando )\nQuíron em Quadratura com Júpiter (Orbe: 0°21', Separando)\nFortuna em Conjunção com o Sol (Orbe: 1°53', Separando)\nFortuna em Tri-Octil com a Lua (Orbe: 2°18', Separando)\nFortuna em Quadratura com Saturno (Orbe: 0°21', Aplicando)\nFortuna em Tri-Octil com o Ascendente (Orbe: 0°25', Separando)\nFortuna em Tri-Octil com o Meio do Céu (Orbe: 1°18', Separando)\nFortuna em Octil com o Fundo do Céu (Orbe: 1°18', Separando)\nFortuna em Octil com o Descendente (Orbe: 0°25', Separando)\nVértice em Octil com Júpiter (Orbe: 1°18', Aplicando)\nVértice em Sextil com Saturno (Orbe: 0°11', Separando)\nVértice em Octil com Quíron (Orbe: 0°56', Aplicando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 14, 21, 22, 24, 25],
    resultado: [2, 5, 6, 7, 10, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h78", concurso: "3727", data: "04/07/2026", hora: "",
    textoMapa: "Sol em Câncer 13°00', na 5ª Casa;\nLua em Peixes 9°06', na 1ª Casa;\nMercúrio em Câncer 25°13', retrógrado, na 5ª Casa;\nVênus em Leão 24°42', na 6ª Casa;\nMarte em Gêmeos 4°23', na 4ª Casa;\nJúpiter em Leão 1°01', na 5ª Casa;\nSaturno em Áries 14°20', na 2ª Casa;\nUrano em Gêmeos 3°54', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°47', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°22', retrógrado, na 1ª Casa; Lilith em Sagitário 21°58', na 10ª Casa ; Quíron em Touro 0°28',\nna 3ª Casa; Fortuna em Câncer 3°18', na 5ª Casa. Vértice da 5ª casa em Gêmeos 14°58', Ascendente na 4ª casa em Aquário 29°24', Meio do Céu em Escorpião 28°35'\n\n1ª Casa em Aquário 29°24'\n2ª Casa em Peixes 26°35'\n3ª Casa em Áries 26°02'\n4ª Casa em Touro 28°35'\n5ª Casa em Câncer 1°37'\n6ª Casa em Leão 1°53'\n7ª Casa em Leão 29°24'\n8ª Casa em Virgem 26°35'\n9ª Casa em Libra 26°02'\n10ª Casa em Escorpião 28°35'\n11ª Casa em Capricórnio 1°37'\n12ª Casa em Aquário 1°53'\n\nSol em quadratura com Saturno (Orbe: 1°19', em movimento subsequente)\nLua em trígono com Mercúrio (Orbe: 1°06', em movimento subsequente)\nMarte em conjunção com Urano (Orbe: 0°29', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 0°01', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 0°23', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°52', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°30', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°53', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°22', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°23', Separando)\nAscendente em Quincúncio com Júpiter (Orbe: 1°36', Aplicando)\nAscendente em Octil com Saturno (Orbe: 0°03', Separando)\nAscendente em Conjunção com o Nodo (Orbe: 2°57', Aplicando)\nAscendente em Sextil com Quíron (Orbe: 1°03', Aplicando)\nDescendente em Octil com o Sol (Orbe: 1°23', Separando)\nDescendente em Tri-Octil com Saturno (Orbe: 0°03', Separando)\nDescendente em Oposição com o Nodo (Orbe: 2°57', Aplicando)\nDescendente em Trígono com Quíron (Orbe: 1°03', Aplicando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°34', Separando)\nMeio do Céu em Trígono com Júpiter (Orbe: 2°25', Aplicando)\nMeio do Céu em Tri-Octil com Saturno (Orbe: 0°45', em aplicação)\nMC Quincúncio com Quíron (Orbe: 1°52', em aplicação)\nIC Octil com o Sol (Orbe: 0°34', em separação)\nIC Sextil com Júpiter (Orbe: 2°25', em aplicação)\nIC Octil com Saturno (Orbe: 0°45', em aplicação)\nNodo Quadratura com Marte (Orbe: 2°01', em separação)\nNodo Quincúncio com Júpiter (Orbe: 1°21', em aplicação)\nNodo Quadratura com Urano (Orbe: 1°31', em separação)\nNodo Sextil com Quíron (Orbe: 1°53', em aplicação)\nLilith Trígono com Vênus (Orbe: 2°43', em separação)\nLilith Octil com Plutão (Orbe: 2°11', em separação)\nQuíron Quadratura com Júpiter (Orbe: 0°32', em separação)\nFortuna Quadratura com Netuno (Orbe:\nFortuna em Quincúncio com Plutão (Orbe: 1°28', em aplicação)\nFortuna em Trígono com o Nodo (Orbe: 0°56', em separação)\nFortuna em Sextil com Quíron (Orbe: 2°50', em separação)\nVértice em Octil com Júpiter (Orbe: 1°02', em aplicação)\nVértice em Sextil com Saturno (Orbe: 0°37', em separação)\nVértice em Octil com Quíron (Orbe: 0°29', em aplicação)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 21, 22, 25],
    resultado: [1, 2, 3, 4, 5, 9, 10, 11, 13, 14, 16, 18, 19, 22, 23],
    obs: ""
  },
  {
    id: "h79", concurso: "3728", data: "06/07/2026", hora: "",
    textoMapa: "Sol em Câncer 14°55', na 5ª Casa;\nLua em Áries 4°51', na 2ª Casa;\nMercúrio em Câncer 24°20', retrógrado, na 5ª Casa;\nVênus em Leão 26°57', na 6ª Casa;\nMarte em Gêmeos 5°48', na 4ª Casa;\nJúpiter em Leão 1°27', na 5ª Casa;\nSaturno em Áries 14°24', na 2ª Casa;\nUrano em Gêmeos 3°59', na 4ª Casa;\nNetuno em Áries 4°25', estacionário, na 2ª Casa;\nPlutão em Aquário 4°44', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°16', retrógrado, na 1ª Casa;\nLilith em Sagitário 22°12', na 10ª Casa;\nQuíron em Touro 0°31', na 3ª Casa;\nFortuna em Gêmeos. 11°14', no\nVértice da 4ª Casa em Gêmeos 15°55', no\nAscendente da 4ª Casa em Peixes 1°10'\nMeio do Céu em Sagitário 0°29'\n\n1ª Casa em Peixes 1°10'\n2ª Casa em Peixes 28°26'\n3ª Casa em Áries 27°57'\n4ª Casa em Gêmeos 0°29'\n5ª Casa em Câncer 3°25'\n6ª Casa em Leão 3°37'\n7ª Casa em Virgem 1°10'\n8ª Casa em Virgem 28°26'\n9ª Casa em Libra 27°57'\n10ª Casa em Sagitário 0°29'\n11ª Casa em Capricórnio 3°25'\n12ª Casa em Aquário 3°37'\n\nSol em octil com Vênus (Orbe: 2°57', em movimento)\nSol em quadratura com Saturno (Orbe: 0°30', em movimento)\nLua em sextil com Marte (Orbe: 0°56', em movimento)\nLua em sextil com Urano (Orbe: 0°51', em movimento)\nLua em conjunção com Netuno (Orbe: 0°26', em movimento)\nLua em sextil com Plutão (Orbe: 0°06', em movimento)\nVênus em trígono com Saturno (Orbe: 2°27', em movimento)\nMarte em conjunção com Urano (Orbe: 1°48', em movimento)\nMarte em sextil com Netuno (Orbe: 1°23', em movimento)\nMarte em trígono com Plutão (Orbe: 1°03', em movimento)\nJúpiter em sextil com Urano (Orbe: 2°32', em movimento)\nJúpiter em trígono com Netuno (Orbe: 2°57', em movimento)\nUrano em sextil com Netuno (Orbe: 0°25', em fase crescente)\nUrano em trígono com Plutão (Orbe: 0°44', em fase crescente)\nNetuno em sextil com Plutão (Orbe: 0°19', em fase crescente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°15', Separando)\nQuincúncio de Júpiter no Ascendente (Orbe: 0°16', Aplicando)\nOctil de Saturno no Ascendente (Orbe: 1°45', Separando)\nQuadratura de Urano no Ascendente (Orbe: 2°49', Aplicando)\nConjunção do Nodo no Ascendente (Orbe: 1°05', Aplicando)\nSextil de Quíron no Ascendente (Orbe: 0°39', Separando)\nOctil do Sol no Descendente (Orbe: 1°15', Separando)\nTri-óctil de Saturno no Descendente (Orbe: 1°45', Separando)\nQuadratura de Urano no Descendente (Orbe: 2°49', Aplicando)\nOposição do Nodo no Descendente (Orbe: 1°05', Aplicando)\nTrígono de Quíron no Descendente (Orbe: 0°39', Separando) Meio do\nCéu Tri-óctil Sol (Orbe: 0°33', Separando)\nMeio do Céu em trígono com Júpiter (Orbe: 0°57', Aplicando)\nMeio do Céu em tri-óctil Saturno (Orbe: 1°04', Separando)\nMeio do Céu em quadratura com o Nodo Lunar (Orbe: 1°46', Aplicando)\nMeio do Céu em quincúncio com Quíron (Orbe: 0°02', Aplicando)\nFundo do Céu em octil Sol (Orbe: 0°33', Separando)\nFundo do Céu em sextil Júpiter (Orbe: 0°57', Aplicando) Fundo do Céu\nem octil Saturno (Orbe: 1°04', Separando) Fundo do Céu em quadratura com o Nodo Lunar (Orbe: 1°46', Aplicando) Nodo em tri-óctil Sol (Orbe: 2°20', Aplicando) Nodo em quincúncio Júpiter (Orbe: 0°48', Aplicando) Nodo em octil Saturno (Orbe: 2°51', Aplicando) Nodo em quadratura com Urano (Orbe: 1°43', Separando) Nodo em sextil com Quíron (Orbe: 1°44', Aplicando) Lilith em quincúncio com Mercúrio (Orbe: 2°08', Aplicando) Lilith em octil com Plutão (Orbe: 2°27', Separando) Quíron em quadratura com Júpiter (Orbe: 0°55', Separando) Fortuna em octil com Mercúrio (Orbe: 1°54', Separando) Vértice em octil com Júpiter (Orbe: 0°31', Aplicando) Vértice em sextil com Saturno (Orbe: 1°30', Separando) Vértice em octil com Quíron (Orbe: 0°23', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 14, 15, 16, 22, 25],
    resultado: [1, 2, 3, 6, 7, 8, 10, 11, 16, 17, 19, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h80", concurso: "3729", data: "07/07/2026", hora: "",
    textoMapa: "Sol em Câncer 15°52', na 5ª Casa;\nLua em Áries 18°14', na 2ª Casa;\nMercúrio em Câncer 23°49', retrógrado, na 5ª Casa;\nVênus em Leão 28°04', na 6ª Casa;\nMarte em Gêmeos 6°30', na 4ª Casa;\nJúpiter em Leão 1°40', na 5ª Casa;\nSaturno em Áries 14°26', na 2ª Casa;\nUrano em Gêmeos 4°02', na 4ª Casa;\nNetuno em Áries 4°25', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°43', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°12', retrógrado, na 1ª Casa;\nLilith em Sagitário 22°19', na 10ª Casa;\nQuíron em Touro 0°32', na 3ª Casa;\nFortuna em Touro. 29°41', no\nVértice da 3ª Casa em Gêmeos 16°23', no\nAscendente da 4ª Casa em Peixes 2°03'\nMC em Sagitário 1°26'\n\n1ª Casa em Peixes 2°03'\n2ª Casa em Peixes 29°21'\n3ª Casa em Áries 28°54'\n4ª Casa em Gêmeos 1°26'\n5ª Casa em Câncer 4°19'\n6ª Casa em Leão 4°30'\n7ª Casa em Virgem 2°03'\n8ª Casa em Virgem 29°21'\n9ª Casa em Libra 28°54'\n10ª Casa em Sagitário 1°26'\n11ª Casa em Capricórnio 4°19'\n12ª Casa em Aquário 4°30'\n\nSol em quadratura com a Lua (Orbe: 2°22', separando)\nSol em octil com Vênus (Orbe: 2°47', aplicando)\nSol em quadratura com Saturno (Orbe: 1°25', separando)\nLua em octil com Urano (Orbe: 0°48', aplicando)\nMercúrio em octil com Marte (Orbe: 2°18', aplicando)\nVênus em trígono com Saturno (Orbe: 1°22', aplicando)\nMarte em conjunção com Urano (Orbe: 2°27', separando)\nMarte em sextil com Netuno (Orbe: 2°05', separando)\nMarte em trígono com Plutão (Orbe: 1°46', separando)\nJúpiter em sextil com Urano (Orbe: 2°22', aplicando)\nJúpiter em trígono com Netuno (Orbe: 2°44', aplicando)\nUrano em sextil com Netuno (Orbe: 0°22', aplicando)\nUrano em trígono com Plutão (Orbe: 0°40', aproximando-se)\nNetuno em sextil com Plutão (Orbe: 0°18', separando-se)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°11', Separando)\nOctil da Lua no Ascendente (Orbe: 1°10', Aplicando)\nQuincúncio de Júpiter no Ascendente (Orbe: 0°23', Separando)\nOctil de Saturno no Ascendente (Orbe: 2°36', Separando)\nQuadratura de Urano no Ascendente (Orbe: 1°58', Aplicando)\nConjunção do Nodo Norte no Ascendente (Orbe: 0°09', Aplicando)\nSextil de Quíron no Ascendente (Orbe: 1°30', Separando)\nOctil do Sol no Descendente (Orbe: 1°11', Separando)\nTri-óctil da Lua no Descendente (Orbe: 1°10', Aplicando)\nTri-óctil de Saturno no Descendente (Orbe: 2°36', Separando)\nQuadratura de Urano no Descendente (Orbe: 1°58', Em aplicação)\nDescendente em Quincúncio com Netuno (Orbe: 2°21', em aplicação)\nDescendente em Quincúncio com Plutão (Orbe: 2°39', em aplicação)\nDescendente em Oposição ao Nodo (Orbe: 0°09', em aplicação)\nDescendente em Trígono com Quíron (Orbe: 1°30', em separação)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 0°33', em separação)\nMeio do Céu em Tri-Óctil com a Lua (Orbe: 1°48', em aplicação) Meio do Céu\nem Trígono com Júpiter (Orbe: 0°14', em aplicação)\nMeio do Céu em Tri-Óctil com Saturno (Orbe: 1°59', em separação)\nMeio do Céu em Oposição a Urano (Orbe: 2°36', em aplicação)\nMeio do Céu em Trígono com Netuno (Orbe: 2°59', em aplicação) Meio do Céu\nem Quadratura com o Nodo (Orbe: 0°46', em aplicação)\nMeio do Céu em Quincúncio com Quíron (Orbe: 0°53', Separando)\nIC Octil Sol (Orbe: 0°33', Separando)\nIC Octil Lua (Orbe: 1°48', Aplicando)\nIC Sextil Júpiter (Orbe: 0°14', Aplicando)\nIC Octil Saturno (Orbe: 1°59', Separando)\nIC Conjunção Urano (Orbe: 2°36', Aplicando)\nIC Sextil Netuno (Orbe: 2°59', Aplicando)\nIC Quadratura Nodo (Orbe: 0°46', Aplicando)\nNodo Tri-Octil Sol (Orbe: 1°20', Aplicando)\nNodo Octil Lua (Orbe: 1°01', Separando)\nNodo Quincúncio Júpiter (Orbe: 0°32', Aplicando)\nNodo Octil Saturno (Orbe: 2°46', Aplicando)\nNodo Quadratura Urano (Orbe: 1°49', Separando)\nNodo Sextil de Quíron (Orbe: 1°40', em aplicação)\nLilith em quincúncio com Mercúrio (Orbe: 1°30', em aplicação)\nLilith em octil com Plutão (Orbe: 2°35', em separação)\nQuíron em trígono com Vênus (Orbe: 2°28', em aplicação)\nQuíron em quadratura com Júpiter (Orbe: 1°07', em separação)\nFortuna em octil com o Sol (Orbe: 1°10', em aplicação)\nFortuna em quadratura com Vênus (Orbe: 1°37', em separação)\nFortuna em sextil com Júpiter (Orbe: 1°58', em aplicação)\nFortuna em octil com Saturno (Orbe: 0°14', em separação)\nFortuna em quadratura com o Nodo Norte (Orbe: 2°31', em aplicação) Fortuna em\nquadratura com o Ascendente (Orbe: 2°22', em separação)\nFortuna em oposição ao Meio do Céu (Orbe: 1°44', em aplicação)\nFortuna em sextil com o Vértice (Orbe: 0°18', Conjunção da Fortuna com\no IC (Orbe: 1°44', em movimento)\nQuadratura da Fortuna com o DSC (Orbe: 2°22', em movimento)\nSextil do Vértice com a Lua (Orbe: 1°50', em movimento)\nOctil do Vértice com Júpiter (Orbe: 0°16', em movimento)\nSextil do Vértice com Saturno (Orbe: 1°56', em movimento)\nVértice Octile Quíron (Orbe: 0°50', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 16, 18, 22, 23, 25],
    resultado: [1, 2, 3, 5, 6, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22],
    obs: ""
  },
  {
    id: "h81", concurso: "3730", data: "08/07/2026", hora: "",
    textoMapa: "Sol em Câncer 16°49', na 5ª Casa;\nLua em Touro 2°01', na 3ª Casa;\nMercúrio em Câncer 23°15', retrógrado, na 5ª Casa;\nVênus em Leão 29°11', na 6ª Casa;\nMarte em Gêmeos 7°12', na 4ª Casa;\nJúpiter em Leão 1°53', na 5ª Casa;\nSaturno em Áries 14°28', na 2ª Casa;\nUrano em Gêmeos 4°05', na 4ª Casa;\nNetuno em Áries 4°25', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°42', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°09', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°25', na 10ª Casa;\nQuíron em Touro 0°34', na 3ª Casa;\nFortuna em Touro. 17°45', no\nVértice da 3ª Casa em Gêmeos 16°52', no\nAscendente da 4ª Casa em Peixes 2°57'\nMC em Sagitário 2°22'\n\n1ª Casa em Peixes 2°57'\n2ª Casa em Áries 0°16'\n3ª Casa em Áries 29°51'\n4ª Casa em Gêmeos 2°22'\n5ª Casa em Câncer 5°13'\n6ª Casa em Leão 5°22'\n7ª Casa em Virgem 2°57'\n8ª Casa em Libra 0°16'\n9ª Casa em Libra 29°51'\n10ª Casa em Sagitário 2°22'\n11ª Casa em Capricórnio 5°13'\n12ª Casa em Aquário 5°22'\n\nSol em octil com Vênus (Orbe: 2°38', em movimento subsequente)\nSol em quadratura com Saturno (Orbe: 2°20', em movimento subsequente)\nSol em octil com Urano (Orbe: 2°15', em movimento subsequente)\nLua em trígono com Vênus (Orbe: 2°50', em movimento subsequente)\nLua em quadratura com Júpiter (Orbe: 0°08', em movimento subsequente)\nLua em quadratura com Plutão (Orbe: 2°40', em\nmovimento subsequente) Mercúrio em octil com Marte (Orbe: 1°02', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 0°17', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 2°47', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 2°30', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°12', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 2°31', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe:\nUrano em sextil com Netuno (Orbe: 0°19', em fase aplicativa )\nUrano em trígono com Plutão (Orbe: 0°36', em fase aplicativa)\nNetuno em sextil com Plutão (Orbe: 0°17', em fase aplicativa)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°07', Separando)\nSextil da Lua no Ascendente (Orbe: 0°55', Separando)\nQuincúncio de Júpiter no Ascendente (Orbe: 1°03', Separando)\nQuadratura de Urano no Ascendente (Orbe: 1°08', Aplicando)\nConjunção do Nodo Norte no Ascendente (Orbe: 0°47', Separando)\nSextil de Quíron no Ascendente (Orbe: 2°22', Separando)\nOctil do Sol no Descendente (Orbe: 1°07', Separando)\nTrígono da Lua no Descendente (Orbe: 0°55', Separando)\nQuadratura de Urano no Descendente (Orbe: 1°08', Aplicando) Quincúncio\nde Netuno no Descendente (Orbe: 1°27', Aplicando)\nQuincúncio de Plutão no Descendente (Orbe: 1°45', Aplicando)\nNodo em Oposição (Orbe: 0°47', Separando)\nDescendente em Trígono com Quíron (Orbe: 2°22', Separando)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 0°32', Separando)\nMeio do Céu em Quincúncio com a Lua (Orbe: 0°20', Separando)\nMeio do Céu em Trígono com Júpiter (Orbe: 0°29', Separando)\nMeio do Céu em Tri-Óctil com Saturno (Orbe: 2°53', Separando)\nMeio do Céu em Oposição com Urano (Orbe: 1°43', Aplicando)\nMeio do Céu em Trígono com Netuno (Orbe: 2°02', Aplicando)\nMeio do Céu em Sextil com Plutão (Orbe: 2°19', Aplicando)\nMeio do Céu em Quadratura com o Nodo (Orbe: 0°12', Separando)\nMeio do Céu em Quincúncio com Quíron (Orbe: 1°48', Separando)\nFundo do Céu em Octil com o Sol (Orbe: 0°32', Separando)\nFundo do Céu em Sextil com Júpiter (Orbe: 0°29', Separando)\nIC Octil Saturno (Orbe: 2°53', Separando)\nIC Conjunção Urano (Orbe: 1°43', Aplicando)\nIC Sextil Netuno (Orbe: 2°02', Aplicando)\nIC Trígono Plutão (Orbe: 2°19', Aplicando)\nIC Quadratura Nodo (Orbe: 0°12', Separando)\nNodo Tri-Octil Sol (Orbe: 0°20', Aplicando)\nNodo Sextil Lua (Orbe: 0°08', Aplicando)\nNodo Oposição Vênus (Orbe: 2°58', Aplicando)\nNodo Quincúncio Júpiter (Orbe: 0°16', Aplicando)\nNodo Octil Saturno (Orbe: 2°41', Aplicando)\nNodo Quadratura Urano (Orbe: 1°55', Separando)\nNodo Sextil Quíron (Orbe:\nLilith em Quincúncio com Mercúrio (Orbe: 0°49', em Aplicação )\nLilith em Octil com Plutão (Orbe: 2°43', em Separação)\nQuíron em Conjunção com a Lua (Orbe: 1°27', em Separação)\nQuíron em Trígono com Vênus (Orbe: 1°22', em Aplicação)\nQuíron em Quadratura com Júpiter (Orbe: 1°19', em Separação)\nFortuna em Sextil com o Sol (Orbe: 0°55', em Separação)\nFortuna em Octil com Netuno (Orbe: 1°39', em Aplicação)\nFortuna em Octil com o Vértice (Orbe: 2°45', em Separação)\nVértice em Octil com a Lua (Orbe: 0°09', em Aplicação)\nVértice em Octil com Júpiter (Orbe: 0°01', em Aplicação)\nVértice em Sextil com Saturno (Orbe: 2°23', em Separação)\nVértice em Tri-Octil com Plutão (Orbe: 2°49', Aplicando)\nVértice Octile Quíron (Orbe: 1°18', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 16, 17, 22, 25],
    resultado: [2, 3, 5, 6, 8, 11, 12, 13, 14, 15, 16, 19, 20, 21, 24],
    obs: ""
  },
  {
    id: "h82", concurso: "3731", data: "09/07/2026", hora: "",
    textoMapa: "Sol em Câncer 17°47', na 5ª Casa;\nLua em Touro 16°13', na 3ª Casa;\nMercúrio em Câncer 22°39', retrógrado, na 5ª Casa;\nVênus em Virgem 0°18', na 6ª Casa;\nMarte em Gêmeos 7°54', na 4ª Casa;\nJúpiter em Leão 2°06', na 5ª Casa;\nSaturno em Áries 14°30', na 2ª Casa;\nUrano em Gêmeos 4°08', na 4ª Casa;\nNetuno em Áries 4°24', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°41', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°06', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°32', na 10ª Casa;\nQuíron em Touro 0°35', na 2ª Casa;\nFortuna em Touro. 5°23', no\nVértice da 3ª Casa em Gêmeos 17°20', no\nAscendente da 4ª Casa em Peixes 3°50'\nMC em Sagitário 3°18'\n\n1ª Casa em Peixes 3°50'\n2ª Casa em Áries 1°12'\n3ª Casa em Touro 0°48'\n4ª Casa em Gêmeos 3°18'\n5ª Casa em Câncer 6°07'\n6ª Casa em Leão 6°14'\n7ª Casa em Virgem 3°50'\n8ª Casa em Libra 1°12'\n9ª Casa em Escorpião 0°48'\n10ª Casa em Sagitário 3°18'\n11ª Casa em Capricórnio 6°07'\n12ª Casa em Aquário 6°14'\n\nSol em sextil com a Lua (Orbe: 1°33', em movimento subsequente)\nSol em octil com Vênus (Orbe: 2°28', em movimento subsequente)\nSol em octil com Urano (Orbe: 1°21', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 0°15', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 0°47', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°01', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 2°18', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 2°34', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°16', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°32', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°16', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°03', Separando)\nAscendente em Quincúncio com Júpiter (Orbe: 1°43', Separando)\nAscendente em Quadratura com Urano (Orbe: 0°18', Aplicando)\nAscendente em Conjunção com o Nodo Norte (Orbe: 1°43', Separando)\nDescendente em Octil com o Sol (Orbe: 1°03', Separando)\nDescendente em Quadratura com Urano (Orbe: 0°18', Aplicando)\nDescendente em Quincúncio com Netuno (Orbe: 0°34', Aplicando)\nDescendente em Quincúncio com Plutão (Orbe: 0°50', Aplicando)\nDescendente em Oposição com o Nodo Norte (Orbe: 1°43', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°31', Separando) Meio do Céu em Trígono\ncom Júpiter (Orbe: 1°12', Separando)\nMeio do Céu em Oposição com Urano (Orbe: 0°49', em aplicação)\nMeio do Céu em trígono com Netuno (Orbe: 1°06', em aplicação)\nMeio do Céu em sextil com Plutão (Orbe: 1°22', em aplicação)\nMeio do Céu em quadratura com o Nodo Lunar (Orbe: 1°12', em separação) Meio do Céu\nem quincúncio com Quíron (Orbe: 2°43', em separação)\nFundo do Céu em octil com o Sol (Orbe: 0°31', em separação)\nFundo do Céu em sextil com Júpiter (Orbe: 1°12', em separação)\nFundo do Céu em conjunção com Urano (Orbe: 0°49', em aplicação)\nFundo do Céu em sextil com Netuno (Orbe: 1°06', em aplicação) Fundo\ndo Céu em trígono com Plutão (Orbe: 1°22'\n, em aplicação) Fundo do Céu em quadratura com o Nodo Lunar (Orbe: 1°12', em separação)\nNodo em trígono com o Sol (Orbe: 0°40', em separação)\nNodo em oposição a Vênus (Orbe:\nNodo em Quincúncio com Júpiter (Orbe: 0° 00', Aplicando)\nNodo em Octil com Saturno (Orbe: 2°36', Aplicando)\nNodo em Quadratura com Urano (Orbe: 2°01', Separando)\nNodo em Sextil com Quíron (Orbe: 1°30', Aplicando)\nLilith em Quincúncio com Mercúrio (Orbe: 0°06', Aplicando)\nLilith em Octil com Plutão (Orbe: 2°51', Separando)\nQuíron em Trígono com Vênus (Orbe: 0°17', Aplicando)\nQuíron em Quadratura com Júpiter (Orbe: 1°30', Separando)\nFortuna em Quadratura com Plutão (Orbe: 0°42', Separando)\nFortuna em Trígono-Octil com Lilith (Orbe: 2°08', Aplicando)\nFortuna em Sextil com o Ascendente (Orbe: 1°33', Separando)\nFortuna em Quincúncio com o Meio do Céu (Orbe: 2°04', Separando)\nTrígono da Fortuna com o Descendente (Orbe: 1°33', Separando)\nOctil do Vértice com Júpiter (Orbe: 0°14', Separando)\nSextil do Vértice com Saturno (Orbe: 2°50', Separando)\nTrígono-Octil do Vértice com Plutão (Orbe: 2°20', Aplicando)\nOctil do Vértice com Quíron (Orbe: 1°45', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 16, 17, 22, 23],
    resultado: [1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 16, 17, 22, 23, 25],
    obs: ""
  },
  {
    id: "h83", concurso: "3732", data: "10/07/2026", hora: "",
    textoMapa: "Sol em Câncer 18°44', na 5ª Casa;\nLua em Gêmeos 0°48', na 3ª Casa;\nMercúrio em Câncer 22°01', retrógrado, na 5ª Casa;\nVênus em Virgem 1°25', na 6ª Casa;\nMarte em Gêmeos 8°37', na 4ª Casa;\nJúpiter em Leão 2°19', na 5ª Casa;\nSaturno em Áries 14°32', na 2ª Casa;\nUrano em Gêmeos 4°11', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°39', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°03', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°39', na 10ª Casa;\nQuíron em Touro 0°36', na 2ª Casa;\nFortuna em Áries. 22°39', no\nVértice da 2ª Casa em Gêmeos 17°49', no\nAscendente da 4ª Casa em Peixes 4°43'\nMC em Sagitário 4°15'\n\n1ª Casa em Peixes 4°43'\n2ª Casa em Áries 2°07'\n3ª Casa em Touro 1°45'\n4ª Casa em Gêmeos 4°15'\n5ª Casa em Câncer 7°01'\n6ª Casa em Leão 7°07'\n7ª Casa em Virgem 4°43'\n8ª Casa em Libra 2°07'\n9ª Casa em Escorpião 1°45'\n10ª Casa em Sagitário 4°15'\n11ª Casa em Capricórnio 7°01'\n12ª Casa em Aquário 7°07'\n\nSol em octil com a Lua (Orbe: 2°56', em movimento)\nSol em octil com Vênus (Orbe: 2°19', em movimento)\nSol em octil com Urano (Orbe: 0°26', em movimento)\nLua em quadratura com Vênus (Orbe: 0°37', em movimento)\nLua em sextil com Júpiter (Orbe: 1°31', em movimento)\nLua em octil com Saturno (Orbe: 1°15', em movimento)\nMercúrio em octil com Marte (Orbe: 1°35', em movimento)\nMercúrio em octil com Urano (Orbe: 2°50', em movimento)\nVênus em trígono com Saturno (Orbe: 1°52', em movimento)\nVênus em quadratura com Urano (Orbe: 2°45', em movimento)\nVênus em quincúncio com Netuno (Orbe: 2°59', em movimento)\nJúpiter em sextil com Urano (Orbe: 1°51', em movimento)\nJúpiter em trígono com Netuno (Orbe: 2°05', em processo de aplicação)\nJúpiter em oposição a Plutão (Orbe: 2°20', em processo de aplicação)\nUrano em sextil com Netuno (Orbe: 0°13', em processo de aplicação)\nUrano em trígono com Plutão (Orbe: 0°28', em processo de aplicação)\nNetuno em sextil com Plutão (Orbe: 0°14', em processo de aplicação)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°59', Separando)\nTri-óctilo de Mercúrio no Ascendente (Orbe: 2°18', Aplicando)\nQuincúncio de Júpiter no Ascendente (Orbe: 2°23', Separando)\nQuadratura de Urano no Ascendente (Orbe: 0°32', Separando)\nNodo em Conjunção com o Ascendente (Orbe: 2°40', Separando)\nOctil do Sol no Descendente (Orbe: 0°59', Separando)\nOctil de Mercúrio no Descendente (Orbe: 2°18', Aplicando)\nQuadratura de Urano no Descendente (Orbe: 0°32', Separando)\nQuincúncio de Netuno no Descendente (Orbe: 0°18', Separando)\nQuincúncio de Plutão no Descendente (Orbe: 0°03', Separando)\nNodo em Oposição no Descendente (Orbe: 2°40',\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°30', Separando) Tri\n-óctil do Meio do Céu com Mercúrio (Orbe: 2°46', Aplicando)\nQuadratura do Meio do Céu com Vênus (Orbe: 2°49', Separando)\nTrígono do Meio do Céu com Júpiter (Orbe: 1°55', Separando)\nOposição do Meio do Céu com Urano (Orbe: 0°04', Separando)\nTrígono do Meio do Céu com Netuno (Orbe: 0°09', Aplicando)\nSextil do Meio do Céu com Plutão (Orbe: 0°24', Aplicando)\nQuadratura do Meio do Céu com o Nodo Norte (Orbe: 2°11', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°30', Separando)\nOctil do Fundo do Céu com Mercúrio (Orbe: 2°46', Aplicando)\nQuadratura do Fundo do Céu com Vênus (Orbe: 2°49', Separando)\nSextil do Fundo do Céu com Júpiter (Orbe: 1°55', Separando)\nConjunção do Fundo do Céu com Urano (Orbe: 0°04', Separando)\nIC em sextil com Netuno (Orbe: 0°09', Aplicando)\nIC em trígono com Plutão (Orbe: 0°24', Aplicando)\nIC em quadratura com o Nodo (Orbe: 2°11', Separando)\nNodo em trígono e octil com o Sol (Orbe: 1°40', Separando)\nNodo em quadratura com a Lua (Orbe: 1°15', Aplicando)\nNodo em oposição a Vênus (Orbe: 0°38', Aplicando)\nNodo em quincúncio com Júpiter (Orbe: 0°16', Separando)\nNodo em octil com Saturno (Orbe: 2°31', Aplicando)\nNodo em quadratura com Urano (Orbe: 2°07', Separando)\nNodo em sextil com Quíron (Orbe: 1°26', Aplicando)\nLilith em quincúncio com Mercúrio (Orbe: 0°37', Separando)\nLilith em octil com Plutão (Orbe: 2°59', Separando)\nQuíron em trígono com Vênus (Orbe: 0°48', Separando)\nQuíron em quadratura com Júpiter (Orbe: 1°42', Separando)\nFortuna em quadratura com Mercúrio (Orbe: 0°38', Separando)\nFortuna em octil com Marte (Orbe: 0°57', Aplicando)\nFortuna em trígono com Lilith (Orbe: 0°00', Separando)\nFortuna em octil com o Ascendente (Orbe: 2°56', Separando)\nFortuna em trígono com o Descendente (Orbe: 2°56', Separando)\nVértice em octil com Júpiter (Orbe: 0°29', Separando)\nVértice em trígono com Plutão (Orbe: 1°50', Aplicando)\nVértice em octil com Quíron (Orbe: 2°12', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 22, 23],
    resultado: [2, 3, 7, 8, 11, 13, 16, 17, 18, 19, 20, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h84", concurso: "3733", data: "11/07/2026", hora: "",
    textoMapa: "Sol em Câncer 19°41', na 5ª Casa;\nLua em Gêmeos 15°41', na 4ª Casa;\nMercúrio em Câncer 21°23', retrógrado, na 5ª Casa;\nVênus em Virgem 2°31', na 6ª Casa;\nMarte em Gêmeos 9°19', na 4ª Casa;\nJúpiter em Leão 2°32', na 5ª Casa;\nSaturno em Áries 14°33', na 2ª Casa;\nUrano em Gêmeos 4°13', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°38', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°00', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°45', na 10ª Casa;\nQuíron em Touro 0°38', na 2ª Casa;\nFortuna em Áries. 9°36', no\nVértice da 2ª Casa em Gêmeos 18°18', no\nAscendente da 4ª Casa em Peixes 5°36'\nMC em Sagitário 5°11'\n\n1ª Casa em Peixes 5°36'\n2ª Casa em Áries 3°03'\n3ª Casa em Touro 2°42'\n4ª Casa em Gêmeos 5°11'\n5ª Casa em Câncer 7°54'\n6ª Casa em Leão 7°59'\n7ª Casa em Virgem 5°36'\n8ª Casa em Libra 3°03'\n9ª Casa em Escorpião 2°42'\n10ª Casa em Sagitário 5°11'\n11ª Casa em Capricórnio 7°54'\n12ª Casa em Aquário 7°59'\n\nSol em conjunção com Mercúrio (Orbe: 1°41', em movimento subsequente)\nSol em octil com Vênus (Orbe: 2°09', em movimento subsequente)\nSol em octil com Urano (Orbe: 0°27', em movimento subsequente)\nLua em octil com Júpiter (Orbe: 1°51', em movimento subsequente)\nLua em sextil com Saturno (Orbe: 1°07', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 2°55', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 2°09', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 2°57', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 1°42', em movimento subsequente)\nVênus em quincúncio com Netuno (Orbe: 1°52', em movimento subsequente)\nVênus em quincúncio com Plutão (Orbe: 2°06', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 1°41', em movimento subsequente)\nJúpiter em trígono Netuno (Orbe: 1°52', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 2°05', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°10', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°24', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°13', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°55', Separando)\nAscendente em Tri-Octil com Mercúrio (Orbe: 0°46', Aplicando)\nAscendente em Quadratura com Urano (Orbe: 1°23', Separando)\nDescendente em Octil com o Sol (Orbe: 0°55', Separando)\nDescendente em Octil com Mercúrio (Orbe: 0°46', Aplicando)\nDescendente em Quadratura com Urano (Orbe: 1°23', Separando)\nDescendente em Quincúncio com Netuno (Orbe: 1°12', Separando)\nDescendente em Quincúncio com Plutão (Orbe: 0°58', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°29', Separando)\nMeio do Céu em Tri-Octil com Mercúrio (Orbe: 1°11', Aplicando) Meio do\nCéu em Quadratura com Vênus (Orbe: 2°39', Separando) Meio do Céu\nem Trígono com Júpiter (Orbe: 2°38', Separando)\nMC em Oposição a Urano (Orbe: 0°57', Separando)\nMC em Trígono a Netuno (Orbe: 0°46', Separando)\nMC em Sextil a Plutão (Orbe: 0°32', Separando)\nIC em Octil ao Sol (Orbe: 0°29', Separando)\nIC em Octil a Mercúrio (Orbe: 1°11', Aplicando)\nIC em Quadratura a Vênus (Orbe: 2°39', Separando)\nIC em Sextil a Júpiter (Orbe: 2°38', Separando)\nIC em Conjunção a Urano (Orbe: 0°57', Separando)\nIC em Sextil a Netuno (Orbe: 0°46', Separando)\nIC em Trígono a Plutão (Orbe: 0°32', Separando)\nNodo em Tri-Octil ao Sol (Orbe: 2°41', Separando)\nNodo em Oposição a Vênus (Orbe: 0°31', Separando)\nNodo em Quincúncio com Júpiter (Orbe: 0°32', Separando)\nNodo em Octil com Saturno (Orbe: 2°26', Aplicando)\nNodo em Quadratura com Urano (Orbe: 2°13', Separando)\nNodo em Sextil com Quíron (Orbe: 1°22', Aplicando)\nLilith em Quincúncio com Mercúrio (Orbe: 1°22', Separando)\nQuíron em Octil com a Lua (Orbe: 0°03', Separando)\nQuíron em Trígono com Vênus (Orbe: 1°53', Separando)\nQuíron em Quadratura com Júpiter (Orbe: 1°54', Separando)\nFortuna em Sextil com Marte (Orbe: 0°17', Separando)\nVértice em Conjunção com a Lua (Orbe: 2°36', Separando)\nVértice em Octil com Júpiter (Orbe: 0°45', Separando)\nVértice Plutão em Tri-Octil (Orbe: 1°20', Aplicando)\nQuíron em Octil no Vértice (Orbe: 2°40', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 23],
    resultado: [1, 2, 3, 5, 7, 10, 11, 12, 13, 14, 16, 17, 19, 22, 25],
    obs: ""
  },
  {
    id: "h85", concurso: "3734", data: "13/07/2026", hora: "",
    textoMapa: "Sol em Câncer 21°35', na 5ª Casa;\nLua em Câncer 15°53', na 5ª Casa;\nMercúrio em Câncer 20°06', retrógrado, na 5ª Casa;\nVênus em Virgem 4°44', na 6ª Casa;\nMarte em Gêmeos 10°42', na 4ª Casa;\nJúpiter em Leão 2°59', na 5ª Casa;\nSaturno em Áries 14°36', na 2ª Casa;\nUrano em Gêmeos 4°19', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°35', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°53', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°59', na 10ª Casa;\nQuíron em Touro 0°40', na 2ª Casa;\nFortuna em Peixes. 13°06', no\nVértice da 1ª Casa em Gêmeos 19°15', no\nAscendente da 4ª Casa em Peixes 7°23'\nMC em Sagitário 7°03'\n\n1ª Casa em Peixes 7°23'\n2ª Casa em Áries 4°53'\n3ª Casa em Touro 4°36'\n4ª Casa em Gêmeos 7°03'\n5ª Casa em Câncer 9°42'\n6ª Casa em Leão 9°45'\n7ª Casa em Virgem 7°23'\n8ª Casa em Libra 4°53'\n9ª Casa em Escorpião 4°36'\n10ª Casa em Sagitário 7°03'\n11ª Casa em Capricórnio 9°42'\n12ª Casa em Aquário 9°45'\n\nSol em conjunção com Mercúrio (Orbe: 1°29', separando)\nSol em octil com Vênus (Orbe: 1°51', aplicando)\nSol em octil com Urano (Orbe: 2°16', separando)\nLua em quadratura com Saturno (Orbe: 1°16', separando)\nMercúrio em octil com Vênus (Orbe: 0°21', aplicando)\nMercúrio em octil com Urano (Orbe: 0°46', aplicando)\nVênus em quadratura com Urano (Orbe: 0°25', separando)\nVênus em quincúncio com Netuno (Orbe: 0°20', separando)\nVênus em quincúncio com Plutão (Orbe: 0°08', separando)\nJúpiter em sextil com Urano (Orbe: 1°20', aplicando)\nJúpiter em trígono com Netuno (Orbe: 1°25', aplicando)\nJúpiter em oposição a Plutão (Orbe: 1°36', aplicando)\nUrano em sextil Netuno (Orbe: 0°05', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°16', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°47', Separando)\nAscendente em Tri-Octil com Mercúrio (Orbe: 2°17', Separando)\nAscendente em Oposição com Vênus (Orbe: 2°39', Separando)\nDescendente em Octil com o Sol (Orbe: 0°47', Separando)\nDescendente em Octil com Mercúrio (Orbe: 2°17', Separando)\nDescendente em Conjunção com Vênus (Orbe: 2°39', Separando)\nDescendente em Quincúncio com Netuno (Orbe: 2°59', Separando)\nDescendente em Quincúncio com Plutão (Orbe: 2°48', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°27', Separando)\nMeio do Céu em Tri-Octil com Mercúrio (Orbe: 1°57', Separando)\nMeio do Céu em Quadratura com Vênus (Orbe: 2°18', Separando) Meio do\nCéu em Oposição Urano (Orbe: 2°44', Separando)\nMC em trígono com Netuno (Orbe: 2°38', Separando)\nMC em sextil com Plutão (Orbe: 2°27', Separando)\nIC em octil com o Sol (Orbe: 0°27', Separando)\nIC em octil com Mercúrio (Orbe: 1°57', Separando)\nIC em quadratura com Vênus (Orbe: 2°18', Separando)\nIC em conjunção com Urano (Orbe: 2°44', Separando)\nIC em sextil com Netuno (Orbe: 2°38', Separando)\nIC em trígono com Plutão (Orbe: 2°27', Separando)\nNodo em trígono com a Lua (Orbe: 1°00', Aplicando)\nNodo em oposição a Vênus (Orbe: 2°50', Separando)\nNodo em quincúncio com Júpiter (Orbe: 1°05', Separando)\nNodo Saturno em Octil (Orbe: 2°17', em aplicação)\nNodo em Quadratura com Urano (Orbe: 2°25', em separação)\nNodo em Sextil com Quíron (Orbe: 1°13', em aplicação)\nLilith em Quincúncio com o Sol (Orbe: 1°23', em aplicação)\nLilith em Quincúncio com Mercúrio (Orbe: 2°53', em separação)\nQuíron em Quadratura com Júpiter (Orbe: 2°18', em separação)\nFortuna em Trígono com a Lua (Orbe: 2°46', em aplicação)\nFortuna em Quadratura com Marte (Orbe: 2°23', em separação)\nFortuna em Octil com Quíron (Orbe: 2°33', em aplicação)\nVértice em Octil com Júpiter (Orbe: 1°16', em separação)\nVértice em Trígono-Octil com Plutão (Orbe: 0°19', em aplicação)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 15, 16, 22, 23],
    resultado: [2, 3, 5, 8, 10, 12, 13, 14, 15, 16, 17, 19, 22, 23, 25],
    obs: ""
  },
  {
    id: "h86", concurso: "3735", data: "14/07/2026", hora: "",
    textoMapa: "Sol em Câncer 22°33', na 5ª Casa;\nLua em Leão 0°52', na 5ª Casa;\nMercúrio em Câncer 19°28', retrógrado, na 5ª Casa;\nVênus em Virgem 5°50', na 6ª Casa;\nMarte em Gêmeos 11°24', na 4ª Casa;\nJúpiter em Leão 3°12', na 5ª Casa;\nSaturno em Áries 14°37', na 2ª Casa;\nUrano em Gêmeos 4°21', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°34', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°50', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°06', na 10ª Casa;\nQuíron em Touro 0°41', na 2ª Casa;\nFortuna em Aquário. 29°57', no\nVértice da 12ª Casa em Gêmeos 19°44', no\nAscendente da 4ª Casa em Peixes 8°17'\nMC em Sagitário 7°58'\n\n1ª Casa em Peixes 8°17'\n2ª Casa em Áries 5°49'\n3ª Casa em Touro 5°32'\n4ª Casa em Gêmeos 7°58'\n5ª Casa em Câncer 10°35'\n6ª Casa em Leão 10°37'\n7ª Casa em Virgem 8°17'\n8ª Casa em Libra 5°49'\n9ª Casa em Escorpião 5°32'\n10ª Casa em Sagitário 7°58'\n11ª Casa em Capricórnio 10°35'\n12ª Casa em Aquário 10°37'\n\nSol em octil com Vênus (Orbe: 1°42', em movimento subsequente)\nLua em conjunção com Júpiter (Orbe: 2°19', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 1°21', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 0°07', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 1°28', em movimento subsequente)\nVênus em quincúncio com Netuno (Orbe: 1°26', em movimento subsequente)\nVênus em quincúncio com Plutão (Orbe: 1°16', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 1°09', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 1°11', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 1°22', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°02', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°12', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°10', em formação)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°44', Separando)\nOposição do Ascendente a Vênus (Orbe: 2°26', Separando)\nOctil do Descendente com o Sol (Orbe: 0°44', Separando)\nConjunção do Descendente com Vênus (Orbe: 2°26', Separando)\nTri-óctilo do Meio do Céu com o Sol (Orbe: 0°25', Separando)\nQuadratura do Meio do Céu com Vênus (Orbe: 2°08', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°25', Separando)\nQuadratura do Fundo do Céu com Vênus (Orbe: 2°08', Separando)\nQuincúncio do Nodo com a Lua (Orbe: 0°58', Aplicando)\nTri-óctilo do Nodo com Mercúrio (Orbe: 2°38', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 1°21', Separando)\nOctil do Nodo com Saturno (Orbe:\nNodo em quadratura com Urano (Orbe: 2° 31', Separando )\nNodo em sextil com Quíron (Orbe: 1°09', Aplicando)\nLilith em quincúncio com o Sol (Orbe: 0°32', Aplicando)\nQuíron em quadratura com a Lua (Orbe: 0°11', Separando)\nQuíron em quadratura com Júpiter (Orbe: 2°30', Separando)\nFortuna em quincúncio com a Lua (Orbe: 0°54', Aplicando)\nFortuna em octil com Saturno (Orbe: 0°20', Separando)\nFortuna em conjunção com o Nodo (Orbe: 1°52', Aplicando)\nFortuna em sextil com Quíron (Orbe: 0°43', Aplicando)\nVértice em octil com Júpiter (Orbe: 1°32', Separando)\nVértice em tri-óctil com Plutão (Orbe: 0°10', Separando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19, 20, 23],
    resultado: [3, 5, 7, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h87", concurso: "3736", data: "15/07/2026", hora: "",
    textoMapa: "Sol em Câncer 23°30', na 5ª Casa;\nLua em Leão 15°35', na 6ª Casa;\nMercúrio em Câncer 18°53', retrógrado, na 5ª Casa;\nVênus em Virgem 6°56', na 6ª Casa;\nMarte em Gêmeos 12°06', na 4ª Casa;\nJúpiter em Leão 3°25', na 5ª Casa;\nSaturno em Áries 14°39', na 2ª Casa;\nUrano em Gêmeos 4°24', na 3ª Casa;\nNetuno em Áries 4°23', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°32', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°47', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°12', na 10ª Casa;\nQuíron em Touro 0°42', na 2ª Casa;\nFortuna em Aquário. 17°05', no\nVértice da 12ª Casa em Gêmeos 20°13', no\nAscendente da 4ª Casa em Peixes 9°10'\nMC em Sagitário 8°54'\n\n1ª Casa em Peixes 9°10'\n2ª Casa em Áries 6°44'\n3ª Casa em Touro 6°29'\n4ª Casa em Gêmeos 8°54'\n5ª Casa em Câncer 11°29'\n6ª Casa em Leão 11°30'\n7ª Casa em Virgem 9°10'\n8ª Casa em Libra 6°44'\n9ª Casa em Escorpião 6°29'\n10ª Casa em Sagitário 8°54'\n11ª Casa em Capricórnio 11°29'\n12ª Casa em Aquário 11°30'\n\nSol em octil com Vênus (Orbe: 1°34', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 0°56', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 0°30', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 2°32', em movimento subsequente)\nVênus em quincúncio com Netuno\n(Orbe: 2°32', em movimento subsequente) Vênus em quincúncio com Plutão (Orbe: 2°23', em\nmovimento subsequente) Marte em sextil com Saturno (Orbe: 2°32', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°58', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°58', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 1°07', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°00', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°08', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°08', em formação)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°40', Separando)\nOposição do Ascendente a Vênus (Orbe: 2°14', Separando)\nQuadratura do Ascendente com Marte (Orbe: 2°55', Aplicando)\nOctil do Descendente com o Sol (Orbe: 0°40', Separando)\nConjunção do Descendente com Vênus (Orbe: 2°14', Separando)\nQuadratura do Descendente com Marte (Orbe: 2°55', Aplicando)\nTri-óctilo do Meio do Céu com o Sol (Orbe: 0°24', Separando) Quadratura\ndo Meio do Céu com Vênus (Orbe: 1°58', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°24', Separando)\nQuadratura do Fundo do Céu com Vênus (Orbe: 1°58', Separando)\nTri-óctilo do Nodo com Mercúrio (Orbe: 2°05', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 1°37',\nNodo em Octil com Saturno (Orbe: 2°08', em Separação )\nNodo em Quadratura com Urano (Orbe: 2°36', em Separação)\nNodo em Sextil com Quíron (Orbe: 1°05', em Separação)\nLilith em Quincúncio com o Sol (Orbe: 0°17', em Separação)\nQuíron em Quadratura com Júpiter (Orbe: 2°42', em Separação)\nFortuna em Oposição com a Lua (Orbe: 1°30', em Separação)\nFortuna em Quincúncio com Mercúrio (Orbe: 1°47', em Separação)\nFortuna em Sextil com Saturno (Orbe: 2°26', em Separação)\nFortuna em Octil com Netuno (Orbe: 2°18', em Separação)\nFortuna em Octil com o Vértice (Orbe: 2°05', em Separação)\nVértice em Octil com Júpiter (Orbe: 1°48', em Separação)\nVértice em Tri-Octil com Plutão (Orbe: 0°41', Separando)\nOposição do vértice Lilith (Orbe: 2°58', Aplicando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 23],
    resultado: [3, 4, 6, 7, 8, 9, 11, 12, 14, 17, 18, 19, 21, 22, 23],
    obs: ""
  },
  {
    id: "h88", concurso: "3737", data: "16/07/2026", hora: "",
    textoMapa: "Sol em Câncer 24°27', na 5ª Casa;\nLua em Leão 29°55', na 6ª Casa;\nMercúrio em Câncer 18°20', retrógrado, na 5ª Casa;\nVênus em Virgem 8°02', na 6ª Casa;\nMarte em Gêmeos 12°47', na 4ª Casa;\nJúpiter em Leão 3°38', na 5ª Casa;\nSaturno em Áries 14°40', na 2ª Casa;\nUrano em Gêmeos 4°26', na 3ª Casa;\nNetuno em Áries 4°23', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°31', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°44', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°19', na 10ª Casa;\nQuíron em Touro 0°43', na 2ª Casa;\nFortuna em Aquário. 4°36', no\nVértice da 11ª Casa em Gêmeos 20°43', no\nAscendente da 4ª Casa em Peixes 10°04'\nMC em Sagitário 9°50'\n\n1ª Casa em Peixes 10°04'\n2ª Casa em Áries 7°39'\n3ª Casa em Touro 7°25'\n4ª Casa em Gêmeos 9°50'\n5ª Casa em Câncer 12°22'\n6ª Casa em Leão 12°23'\n7ª Casa em Virgem 10°04'\n8ª Casa em Libra 7°39'\n9ª Casa em Escorpião 7°25'\n10ª Casa em Sagitário 9°50'\n11ª Casa em Capricórnio 12°22'\n12ª Casa em Aquário 12°23'\n\nSol em octil com Vênus (Orbe: 1°25', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 0°15', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 1°06', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 1°52', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°48', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°44', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 0°52', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°03', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°04', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°07', em movimento subsequente)\n\nSol em Tri-Octil no Ascendente (Orbe: 0°36', Separando)\nVênus em Oposição ao Ascendente (Orbe: 2°02', Separando)\nMarte em Quadratura no Ascendente (Orbe: 2°43', Aplicando)\nSol em Octil no Descendente (Orbe: 0°36', Separando)\nVênus em Conjunção com o Descendente (Orbe: 2°02', Separando)\nMarte em Quadratura com o Descendente (Orbe: 2°43', Aplicando)\nSol em Tri-Octil no Meio do Céu (Orbe: 0°22', Separando)\nVênus em Quadratura com o Meio do Céu (Orbe: 1°47', Separando)\nMarte em Oposição ao Meio do Céu (Orbe: 2°57', Aplicando)\nSol em Octil no Fundo do Céu (Orbe: 0°22', Separando)\nVênus em Quadratura com o Fundo do Céu (Orbe: 1°47', Separando)\nMarte em Conjunção com o Fundo do Céu (Orbe: 2°57', Aplicando)\nNodo em Oposição à Lua (Orbe: 1°48', em movimento)\nNodo em Tri-Octil com Mercúrio (Orbe: 1°35', em movimento)\nNodo em Quincúncio com Júpiter (Orbe: 1°54', em movimento)\nNodo em Octil com Saturno (Orbe: 2°04', em movimento)\nNodo em Quadratura com Urano (Orbe: 2°42', em movimento)\nNodo em Sextil com Quíron (Orbe: 1°00', em movimento)\nLilith em Quincúncio com o Sol (Orbe: 1°08', em movimento)\nQuíron em Trígono com a Lua (Orbe: 0°47', em movimento)\nQuíron em Octil com Marte (Orbe: 2°55', em movimento)\nQuíron em Quadratura com Júpiter (Orbe: 2°55', em movimento)\nFortuna em Oposição a Júpiter (Orbe: 0°57', em movimento)\nFortuna em Trígono com Urano (Orbe: 0°09', em movimento)\nFortuna em Sextil Netuno (Orbe: 0°12', Separando)\nConjunção com Fortuna Plutão (Orbe: 0°04', Separando)\nOctil no Vértice Júpiter (Orbe: 2°04', Separando)\nTri-Octil no Vértice Plutão (Orbe: 1°11', Separando)\nOposição no Vértice Lilith (Orbe: 2°36', Aplicando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 23],
    resultado: [2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 22, 23, 25],
    obs: ""
  },
  {
    id: "h89", concurso: "3738", data: "17/07/2026", hora: "",
    textoMapa: "Sol em Câncer 25°25', na 5ª Casa;\nLua em Virgem 13°49', na 7ª Casa;\nMercúrio em Câncer 17°50', retrógrado, na 5ª Casa;\nVênus em Virgem 9°07', na 6ª Casa;\nMarte em Gêmeos 13°29', na 4ª Casa;\nJúpiter em Leão 3°51', na 5ª Casa;\nSaturno em Áries 14°41', na 2ª Casa;\nUrano em Gêmeos 4°29', na 3ª Casa;\nNetuno em Áries 4°23', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°30', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°41', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°26', na 10ª Casa;\nQuíron em Touro 0°44', na 2ª Casa;\nFortuna em Capricórnio. 22°33', no\nVértice da 11ª Casa em Gêmeos 21°12', no\nAscendente da 4ª Casa em Peixes 10°58'\nMeio do Céu em Sagitário 10°45'\n\n1ª Casa em Peixes 10°58'\n2ª Casa em Áries 8°35'\n3ª Casa em Touro 8°21'\n4ª Casa em Gêmeos 10°45'\n5ª Casa em Câncer 13°16'\n6ª Casa em Leão 13°15'\n7ª Casa em Virgem 10°58'\n8ª Casa em Libra 8°35'\n9ª Casa em Escorpião 8°21'\n10ª Casa em Sagitário 10°45'\n11ª Casa em Capricórnio 13°16'\n12ª Casa em Aquário 13°15'\n\nSol em octil com Vênus (Orbe: 1°17', em movimento subsequente)\nLua em quadratura com Marte (Orbe: 0°20', em movimento subsequente)\nLua em quincúncio com Saturno (Orbe: 0°51', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 1°39', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 1°11', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°37', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°31', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 0°38', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°06', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°00', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°06', em movimento subsequente)\n\nSol em Tri-Octil no Ascendente (Orbe: 0°33', Separando)\nLua em Oposição no Ascendente (Orbe: 2°51', Aplicando)\nVênus em Oposição no Ascendente (Orbe: 1°50', Separando)\nMarte em Quadratura no Ascendente (Orbe: 2°31', Aplicando)\nSol em Octil no Descendente (Orbe: 0°33', Separando)\nLua em Conjunção no Descendente (Orbe: 2°51', Aplicando)\nVênus em Conjunção no Descendente (Orbe: 1°50', Separando)\nMarte em Quadratura no Descendente (Orbe: 2°31', Aplicando)\nSol em Tri-Octil no Meio do Céu (Orbe: 0°20', Separando)\nVênus em Quadratura no Meio do Céu (Orbe: 1°37', Separando)\nMarte em Oposição no Meio do Céu (Orbe: 2°44', Aplicando)\nSol em Octil no Fundo do Céu (Orbe: 0°20', Separando)\nIC em quadratura com Vênus (Orbe: 1°37', Separando)\nIC em conjunção com Marte (Orbe: 2°44', Aplicando)\nNodo em trí-óctilo com Mercúrio (Orbe: 1°08', Aplicando) Nodo\nem quincúncio com Júpiter (Orbe: 2°10', Separando)\nNodo em óctilo com Saturno (Orbe: 2°00', Aplicando)\nNodo em quadratura com Urano (Orbe: 2°48', Separando)\nNodo em sextil com Quíron (Orbe: 0°56', Aplicando)\nLilith em quincúncio com o Sol (Orbe: 1°58', Separando)\nQuíron em trí-óctilo com a Lua (Orbe: 1°54', Aplicando)\nQuíron em óctilo com Marte (Orbe: 2°14', Aplicando)\nFortuna em oposição ao Sol (Orbe: 2°51', Aplicando)\nFortuna em trí-óctilo com Vênus (Orbe: 1°34', Aplicando)\nVértice Octil Júpiter (Orbe: 2°20', Separando)\nVértice Tri-Octil Plutão (Orbe: 1°42', Separando)\nVértice Oposição Lilith (Orbe: 2°13', Aplicando)",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 23],
    resultado: [2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 17, 18, 20, 23, 24],
    obs: ""
  },
  {
    id: "h90", concurso: "3739", data: "19/07/2026", hora: "",
    textoMapa: "Sol em Câncer 26°55', na 10ª Casa;\nLua em Libra 4°56', na 12ª Casa;\nMercúrio em Câncer 17°09', retrógrado, na 10ª Casa;\nVênus em Virgem 10°51', na 12ª Casa\n; Marte em Gêmeos 14°35', na 8ª Casa;\nJúpiter em Leão 4°12', na 11ª Casa;\nSaturno em Áries 14°42', na 7ª Casa;\nUrano em Gêmeos 4°33', na 8ª Casa;\nNetuno em Áries 4°22', retrógrado, na 6ª Casa;\nPlutão em Aquário 4°27', retrógrado, na 5ª Casa;\nNodo Norte em Peixes 1°36', retrógrado, na 5ª Casa;\nLilith em Sagitário 23°36', na 3ª Casa;\nQuíron em Touro 0°45', na 7ª Casa;\nFortuna em Sagitário. 22°21', no\nVértice da 3ª Casa em Áries 5°51', no\nAscendente da 6ª Casa em Libra 14°20'\nMC em Câncer 9°51'\n\n1ª Casa em Libra 14°20'\n2ª Casa em Escorpião 20°07'\n3ª Casa em Sagitário 17°06'\n4ª Casa em Capricórnio 9°51'\n5ª Casa em Aquário 4°02'\n6ª Casa em Peixes 5°15'\n7ª Casa em Áries 14°20'\n8ª Casa em Touro 20°07'\n9ª Casa em Gêmeos 17°06'\n10ª Casa em Câncer 9°51'\n11ª Casa em Leão 4°02'\n12ª Casa em Virgem 5°15'\n\nSol em octil com Vênus (Orbe: 1°04', em movimento)\nSol em octil com Marte (Orbe: 2°39', em movimento)\nLua em sextil com Júpiter (Orbe: 0°43', em movimento)\nLua em trígono com Urano (Orbe: 0°22', em movimento)\nLua em oposição a Netuno (Orbe: 0°33', em movimento)\nLua em trígono com Plutão (Orbe: 0°28', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 2°27', em movimento)\nMercúrio em octil com Urano (Orbe: 2°23', em movimento)\nMarte em sextil com Saturno (Orbe: 0°07', em movimento)\nJúpiter em sextil com Urano (Orbe: 0°20', em movimento)\nJúpiter em trígono com Netuno (Orbe: 0°09', em movimento)\nJúpiter em oposição a Plutão (Orbe: 0°15', em movimento)\nUrano em sextil com Netuno (Orbe: 0°10', Separando)\nUrano em trígono com Plutão (Orbe: 0°05', Separando)\nNetuno em sextil com Plutão (Orbe: 0°05', Aproximando)\n\nAscendente em quadratura com Mercúrio (Orbe: 2°49', em processo de aplicação)\nAscendente em trígono com Marte (Orbe: 0°14', em processo de aplicação)\nAscendente em oposição a Saturno (Orbe: 0°21', em processo de aplicação)\nAscendente em trígono com o Nodo em trígono (Orbe: 2°15', em processo de aplicação)\nDescendente em quadratura com Mercúrio (Orbe: 2°49', em processo de aplicação)\nDescendente em sextil com Marte (Orbe: 0°14', em processo de aplicação) Descendente\nem conjunção com Saturno (Orbe: 0°21', em processo de aplicação)\nDescendente em trígono com o Nodo em trígono (Orbe: 2°15', em processo de aplicação\n) Meio do Céu em sextil com Vênus (Orbe: 0°59', em processo de aplicação) Fundo\ndo Céu em trígono com Vênus (Orbe: 0°59', em processo de aplicação)\nNodo em trígono com Mercúrio (Orbe: 0°33', em processo de aplicação)\nNodo em quincúncio com Júpiter (Orbe: 2°36', em processo de separação)\nNodo em Octil com Saturno (Orbe: 1°53', em movimento)\nNodo em Quadratura com Urano (Orbe: 2°57', em movimento)\nNodo em Sextil com Quíron (Orbe: 0°50', em movimento)\nQuíron em Octil com Marte (Orbe: 1°10', em movimento)\nFortuna em Octil com Plutão (Orbe: 2°53', em movimento)\nFortuna em Conjunção com Lilith (Orbe: 1°15', em movimento)\nVértice em Oposição com a Lua (Orbe: 0°55', em movimento)\nVértice em Trígono com Júpiter (Orbe: 1°38', em movimento)\nVértice em Sextil com Urano (Orbe: 1°18', em movimento)\nVértice em Conjunção com Netuno (Orbe: 1°28', em movimento)\nVértice em Sextil com Plutão (Orbe: 1°23', em movimento)",
    jogoGerado: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 17, 23, 24],
    resultado: [1, 4, 5, 6, 9, 11, 13, 15, 16, 18, 19, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h91", concurso: "3740", data: "20/07/2026", hora: "",
    textoMapa: "Sol em Câncer 28°16', na 5ª Casa;\nLua em Libra 22°58', na 8ª Casa;\nMercúrio em Câncer 16°42', retrógrado, na 5ª Casa;\nVênus em Virgem 12°23', na 6ª Casa;\nMarte em Gêmeos 15°33', na 4ª Casa;\nJúpiter em Leão 4°31', na 5ª Casa;\nSaturno em Áries 14°43', na 2ª Casa;\nUrano em Gêmeos 4°36', na 3ª Casa;\nNetuno em Áries 4°22', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°25', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°31', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°46', na 10ª Casa;\nQuíron em Touro 0°46', na 2ª Casa;\nFortuna em Sagitário. 18°57', no\nVértice da 10ª Casa em Gêmeos 22°42', no\nAscendente da 4ª Casa em Peixes 13°39'\nMC em Sagitário 13°31'\n\n1ª Casa em Peixes 13°39'\n2ª Casa em Áries 11°20'\n3ª Casa em Touro 11°10'\n4ª Casa em Gêmeos 13°31'\n5ª Casa em Câncer 15°57'\n6ª Casa em Leão 15°54'\n7ª Casa em Virgem 13°39'\n8ª Casa em Libra 11°20'\n9ª Casa em Escorpião 11°10'\n10ª Casa em Sagitário 13°31'\n11ª Casa em Capricórnio 15°57'\n12ª Casa em Aquário 15°54'\n\nSol em octil com Vênus (Orbe: 0°53', em movimento subsequente)\nSol em octil com Marte (Orbe: 2°16', em movimento subsequente)\nMercúrio em quadratura com Saturno (Orbe: 1°59', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 2°53', em movimento subsequente)\nVênus em quincúncio com Saturno (Orbe: 2°19', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 0°50', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°05', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°09', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 0°05', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°14', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°10', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°03', em movimento subsequente)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°22', Separando)\nOposição de Vênus no Ascendente (Orbe: 1°16', Separando)\nQuadratura de Marte no Ascendente (Orbe: 1°54', Aplicando)\nOctil de Quíron no Ascendente (Orbe: 2°07', Aplicando)\nOctil do Sol no Descendente (Orbe: 0°22', Separando)\nConjunção de Vênus no Descendente (Orbe: 1°16', Separando)\nQuadratura de Marte no Descendente (Orbe: 1°54', Aplicando)\nQuincúncio de Saturno no Descendente (Orbe: 1°03', Aplicando)\nTri-óctilo de Quíron no Descendente (Orbe: 2°07', Aplicando)\nTri-óctilo do Sol no Meio do Céu (Orbe: 0°14', Separando)\nQuadratura de Vênus no Meio do Céu (Orbe: 1°07', Separando)\nOposição de Marte no Meio do Céu (Orbe: 2°02', em aplicação)\nMC em trígono com Saturno (Orbe: 1°12', em aplicação)\nMC em trígono octil com Quíron (Orbe: 2°15', em aplicação)\nIC em octil com o Sol (Orbe: 0°14', em separação)\nIC em quadratura com Vênus (Orbe: 1°07', em separação)\nIC em conjunção com Marte (Orbe: 2°02', em aplicação)\nIC em sextil com Saturno (Orbe: 1°12', em aplicação)\nIC em octil com Quíron (Orbe: 2°15', em aplicação)\nNodo em trígono octil com Mercúrio (Orbe: 0°11', em aplicação)\nNodo em quincúncio com Júpiter (Orbe: 2°59', em separação)\nNodo em octil com Saturno (Orbe: 1°48', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°44', em aplicação)\nLilith em sextil com a Lua (Orbe: 0°47', Em aplicação)\nQuíron em quadratura com o Sol (Orbe: 2°30', em aplicação)\nQuíron em octil com Marte (Orbe: 0°13', em aplicação)\nFortuna em quincúncio com Mercúrio (Orbe: 2°14', em separação)\nFortuna em trígono com Júpiter (Orbe: 0°33', em aplicação)\nFortuna em octil com Plutão (Orbe: 0°28', em aplicação)\nTrígono com a Lua no vértice (Orbe: 0°16', em aplicação)\nOposição com Lilith no vértice (Orbe: 1°04', em aplicação)",
    jogoGerado: [1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 22, 23],
    resultado: [1, 2, 5, 6, 8, 9, 11, 12, 13, 15, 16, 17, 20, 21, 22],
    obs: ""
  },
  {
    id: "h92", concurso: "3741", data: "21/07/2026", hora: "",
    textoMapa: "Sol em Câncer 29°14', na 5ª Casa;\nLua em Escorpião 5°20', na 8ª Casa;\nMercúrio em Câncer 16°29', retrógrado, na 4ª Casa;\nVênus em Virgem 13°28', na 6ª Casa;\nMarte em Gêmeos 16°15', na 4ª Casa;\nJúpiter em Leão 4°44', na 5ª Casa;\nSaturno em Áries 14°43', na 2ª Casa;\nUrano em Gêmeos 4°39', na 3ª Casa;\nNetuno em Áries 4°21', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°24', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°28', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°53', na 10ª Casa;\nQuíron em Touro 0°47', na 2ª Casa;\nFortuna em Sagitário. 8°27', no\nVértice da 9ª Casa em Gêmeos 23°12', no\nAscendente da 4ª Casa em Peixes 14°33'\nMC em Sagitário 14°26'\n\n1ª Casa em Peixes 14°33'\n2ª Casa em Áries 12°15'\n3ª Casa em Touro 12°05'\n4ª Casa em Gêmeos 14°26'\n5ª Casa em Câncer 16°50'\n6ª Casa em Leão 16°47'\n7ª Casa em Virgem 14°33'\n8ª Casa em Libra 12°15'\n9ª Casa em Escorpião 12°05'\n10ª Casa em Sagitário 14°26'\n11ª Casa em Capricórnio 16°50'\n12ª Casa em Aquário 16°47'\n\nSol em octil com Vênus (Orbe: 0°45', em movimento)\nSol em octil com Marte (Orbe: 2°01', em movimento)\nLua em quadratura com Júpiter (Orbe: 0°35', em movimento)\nLua em quincúncio com Urano (Orbe: 0°41', em movimento)\nLua em quincúncio com Netuno (Orbe: 0°58', em movimento)\nLua em quadratura com Plutão (Orbe: 0°55', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°45', em movimento)\nVênus em quadratura com Marte (Orbe: 2°46', em movimento)\nVênus em quincúncio com Saturno (Orbe: 1°15', em movimento)\nMarte em sextil com Saturno (Orbe: 1°31', em movimento)\nJúpiter em sextil com Urano (Orbe: 0°05', em movimento)\nJúpiter em trígono com Netuno (Orbe: 0°23', em movimento)\nJúpiter em oposição a Plutão (Orbe:\nUrano em sextil com Netuno (Orbe: 0°17', em separação)\nUrano em trígono com Plutão (Orbe: 0°14', em separação)\nNetuno em sextil com Plutão (Orbe: 0°02', em aproximação)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°19', Separando)\nAscendente em Trígono com Mercúrio (Orbe: 1°56', Aplicando)\nAscendente em Oposição com Vênus (Orbe: 1°05', Separando)\nAscendente em Quadratura com Marte (Orbe: 1°41', Aplicando)\nAscendente em Octil com Quíron (Orbe: 1°14', Aplicando)\nDescendente em Octil com o Sol (Orbe: 0°19', Separando)\nDescendente em Sextil com Mercúrio (Orbe: 1°56', Aplicando)\nDescendente em Conjunção com Vênus (Orbe: 1°05', Separando)\nDescendente em Quadratura com Marte (Orbe: 1°41', Aplicando)\nDescendente em Quincúncio com Saturno (Orbe: 0°10', Aplicando)\nDescendente em Tri-Octil com Quíron (Orbe: 1°14', Aplicando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°12', Separando)\nMC Quincúncio Mercúrio (Orbe: 2°03', Aplicando)\nMC Quadratura Vênus (Orbe: 0°58', Separando)\nMC Oposição Marte (Orbe: 1°48', Aplicando)\nMC Trígono Saturno (Orbe: 0°17', Aplicando)\nMC Tri-óctilo Quíron (Orbe: 1°21', Aplicando)\nIC Octil Sol (Orbe: 0°12', Separando)\nIC Quadratura Vênus (Orbe: 0°58', Separando)\nIC Conjunção Marte (Orbe: 1°48', Aplicando)\nIC Sextil Saturno (Orbe: 0°17', Aplicando)\nIC Octil Quíron (Orbe: 1°21', Aplicando)\nNodo Quincúncio Sol (Orbe: 2°14', Aplicando)\nNodo Tri-óctilo Mercúrio (Orbe: 0°01', Aplicando)\nNodo em Octil com Saturno (Orbe: 1°44', em movimento)\nNodo em Sextil com Quíron (Orbe: 0°40', em movimento)\nQuíron em Quadratura com o Sol (Orbe: 1°33', em movimento)\nQuíron em Tri-Octil com Vênus (Orbe: 2°19', em movimento)\nQuíron em Octil com Marte (Orbe: 0°27', em movimento)\nVértice em Tri-Octil com a Lua (Orbe: 2°52', em movimento)\nVértice em Oposição com Lilith (Orbe: 0°40', em movimento)",
    jogoGerado: [1, 2, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23, 24],
    resultado: [2, 3, 4, 5, 9, 11, 12, 14, 15, 16, 18, 20, 21, 22, 23],
    obs: ""
  },
  {
    id: "h93", concurso: "3742", data: "22/07/2026", hora: "",
    textoMapa: "Sol em Leão 0°11', na 5ª Casa;\nLua em Escorpião 17°28', na 9ª Casa;\nMercúrio em Câncer 16°21', retrógrado, na 4ª Casa;\nVênus em Virgem 14°32', na 6ª Casa;\nMarte em Gêmeos 16°56', na 4ª Casa;\nJúpiter em Leão 4°58', na 5ª Casa;\nSaturno em Áries 14°44', na 2ª Casa;\nUrano em Gêmeos 4°41', na 3ª Casa;\nNetuno em Áries 4°21', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°23', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°25', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°59', na 10ª Casa;\nQuíron em Touro 0°48', na 2ª Casa;\nFortuna em Escorpião. 28°10', no\nVértice da 9ª Casa em Gêmeos 23°43', no\nAscendente da 4ª Casa em Peixes 15°27'\nMeio do Céu em Sagitário 15°21'\n\n1ª Casa em Peixes 15°27'\n2ª Casa em Áries 13°10'\n3ª Casa em Touro 13°01'\n4ª Casa em Gêmeos 15°21'\n5ª Casa em Câncer 17°44'\n6ª Casa em Leão 17°40'\n7ª Casa em Virgem 15°27'\n8ª Casa em Libra 13°10'\n9ª Casa em Escorpião 13°01'\n10ª Casa em Sagitário 15°21'\n11ª Casa em Capricórnio 17°44'\n12ª Casa em Aquário 17°40'\n\nSol em octil com Vênus (Orbe: 0°38', em movimento)\nSol em octil com Marte (Orbe: 1°44', em movimento)\nLua em trígono com Mercúrio (Orbe: 1°06', em movimento)\nLua em sextil com Vênus (Orbe: 2°55', em movimento)\nLua em quincúncio com Marte (Orbe: 0°31', em movimento)\nLua em quincúncio com Saturno (Orbe: 2°43', em movimento)\nLua em trígono com Netuno (Orbe: 1°53', em movimento)\nMercúrio em sextil com Vênus (Orbe: 1°48', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°37', em movimento)\nVênus em quadratura com Marte (Orbe: 2°23', em movimento)\nVênus em quincúncio com Saturno (Orbe: 0°11', em movimento)\nMarte em sextil com Saturno (Orbe: 2°12', em movimento)\nMarte em trígono com Plutão (Orbe:\nJúpiter em sextil com Urano (Orbe: 0°16', Separando )\nJúpiter em trígono com Netuno (Orbe: 0°36', Separando)\nJúpiter em oposição a Plutão (Orbe: 0°34', Separando)\nUrano em sextil com Netuno (Orbe: 0°20', Separando)\nUrano em trígono com Plutão (Orbe: 0°18', Separando)\nNetuno em sextil com Plutão (Orbe: 0°01', Aplicando)\n\nTri-óctil do Sol no Ascendente (Orbe: 0°15', Separando)\nTrígono da Lua no Ascendente (Orbe: 2°00', Aplicando)\nTrígono de Mercúrio no Ascendente (Orbe: 0°54', Aplicando)\nOposição de Vênus no Ascendente (Orbe: 0°54', Separando)\nQuadratura de Marte no Ascendente (Orbe: 1°29', Aplicando)\nOctil de Quíron no Ascendente (Orbe: 0°21', Aplicando)\nOctil do Sol no Descendente (Orbe: 0°15', Separando)\nSextil da Lua no Descendente (Orbe: 2°00', Aplicando)\nSextil de Mercúrio no Descendente (Orbe: 0°54', Aplicando)\nConjunção de Vênus no Descendente (Orbe: 0°54', Separando)\nQuadratura de Marte no Descendente (Orbe: 1°29', Aplicando)\nQuincúncio de Saturno no Descendente (Orbe: 0°42', Separando)\nDSC Tri-Octil Quíron (Orbe: 0°21', Aplicando)\nMC Tri-Octil Sol (Orbe: 0°09', Separando)\nMC Quincúncio Mercúrio (Orbe: 1°00', Aplicando)\nMC Quadratura Vênus (Orbe: 0°48', Separando)\nMC Oposição Marte (Orbe: 1°35', Aplicando)\nMC Trígono Saturno (Orbe: 0°36', Separando)\nMC Tri-Octil Quíron (Orbe: 0°27', Aplicando)\nIC Octil Sol (Orbe: 0°09', Separando)\nIC Quincúncio Lua (Orbe: 2°06', Aplicando)\nIC Quadratura Vênus (Orbe: 0°48', Separando)\nIC Conjunção Marte (Orbe: 1°35', Aplicando)\nIC Sextil Saturno (Orbe: 0°36', Separando)\nIC Octil Quíron (Orbe: 0°27', Aplicando)\nNodo Quincúncio Sol (Orbe: 1°13', Aplicando)\nNodo Tri-Octil Mercúrio (Orbe: 0°03', Separando)\nNodo Octil Saturno (Orbe: 1°41', Aplicando)\nNodo Sextil Quíron (Orbe: 0°37', Aplicando)\nQuíron Quadratura Sol (Orbe: 0°36', Aplicando)\nQuíron Tri-Octil Vênus (Orbe: 1°15', Aplicando)\nQuíron Octil Marte (Orbe: 1°08', Separando)\nFortuna Trígono Sol (Orbe: 2°00', Aplicando)\nFortuna Tri-Octil Saturno (Orbe: 1°33', Aplicando)\nFortuna Quincúncio Quíron (Orbe: 2°37', Aplicando)\nFortuna Trígono Vertex (Orbe: 1°49', Separando)\nOposição do vértice Lilith (Orbe: 0°16', Aplicando)",
    jogoGerado: [1, 2, 4, 5, 8, 9, 10, 12, 13, 14, 15, 16, 17, 23, 24],
    resultado: [1, 4, 5, 6, 9, 10, 12, 13, 14, 15, 16, 19, 20, 21, 23],
    obs: ""
  },
  {
    id: "h94", concurso: "3743", data: "23/07/2026", hora: "",
    textoMapa: "Sol em Leão 1°08', na 5ª Casa;\nLua em Escorpião 29°26', na 9ª Casa;\nMercúrio em Câncer 16°18', estacionário, na 4ª Casa;\nVênus em Virgem 15°37', na 6ª Casa;\nMarte em Gêmeos 17°37', na 4ª Casa;\nJúpiter em Leão 5°11', na 5ª Casa;\nSaturno em Áries 14°44', na 2ª Casa;\nUrano em Gêmeos 4°43', na 3ª Casa;\nNetuno em Áries 4°20', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°21', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°22', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°06', na 10ª Casa;\nQuíron em Touro 0°48', na 2ª Casa;\nFortuna em Escorpião. 18°03', no\nVértice da 9ª Casa em Gêmeos 24°14', no\nAscendente da 4ª Casa em Peixes 16°21'\nMC em Sagitário 16°16'\n\n1ª Casa em Peixes 16°21'\n2ª Casa em Áries 14°06'\n3ª Casa em Touro 13°57'\n4ª Casa em Gêmeos 16°16'\n5ª Casa em Câncer 18°37'\n6ª Casa em Leão 18°33'\n7ª Casa em Virgem 16°21'\n8ª Casa em Libra 14°06'\n9ª Casa em Escorpião 13°57'\n10ª Casa em Sagitário 16°16'\n11ª Casa em Capricórnio 18°37'\n12ª Casa em Aquário 18°33'\n\nSol em trígono com a Lua (Orbe: 1°41', em movimento)\nSol em octil com Vênus (Orbe: 0°31', em movimento)\nSol em octil com Marte (Orbe: 1°28', em movimento)\nLua em trígono com Mercúrio (Orbe: 1°52', em movimento)\nLua em trígono com Saturno (Orbe: 0°17', em movimento)\nMercúrio em sextil com Vênus (Orbe: 0°41', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°34', em movimento)\nVênus em quadratura com Marte (Orbe: 2°00', em movimento)\nVênus em quincúncio com Saturno (Orbe: 0°52', em movimento)\nMarte em octil com Júpiter (Orbe: 2°33', em movimento)\nMarte em sextil com Saturno (Orbe: 2°52', em movimento)\nMarte em trígono com Plutão (Orbe: 1°44', em movimento)\nJúpiter em sextil com Urano (Orbe:\nJúpiter em trígono com Netuno (Orbe: 0°50', Separando )\nJúpiter em oposição a Plutão (Orbe: 0°49', Separando)\nUrano em sextil com Netuno (Orbe: 0°22', Separando)\nUrano em trígono com Plutão (Orbe: 0°21', Separando)\nNetuno em sextil com Plutão (Orbe: 0°01', Aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°12', Separando)\nAscendente em Trígono com Mercúrio (Orbe: 0°02', Separando)\nAscendente em Oposição com Vênus (Orbe: 0°43', Separando)\nAscendente em Quadratura com Marte (Orbe: 1°16', Aplicando)\nAscendente em Octil com Quíron (Orbe: 0°32', Separando)\nDescendente em Octil com o Sol (Orbe: 0°12', Separando)\nDescendente em Sextil com Mercúrio (Orbe: 0°02', Separando)\nDescendente em Conjunção com Vênus (Orbe: 0°43', Separando)\nDescendente em Quadratura com Marte (Orbe: 1°16', Aplicando)\nDescendente em Quincúncio com Saturno (Orbe: 1°36', Separando)\nDescendente em Tri-Octil com Quíron (Orbe: 0°32', Separando)\nMeio do Céu em Tri-Octil Sol (Orbe: 0°07', Separando)\nMC Quincúncio Mercúrio (Orbe: 0°02', Aplicando)\nMC Quadratura Vênus (Orbe: 0°38', Separando)\nMC Oposição Marte (Orbe: 1°21', Aplicando)\nMC Trígono Saturno (Orbe: 1°31', Separando)\nMC Tri-óctilo Quíron (Orbe: 0°27', Separando)\nIC Óctilo Sol (Orbe: 0°07', Separando)\nIC Quadratura Vênus (Orbe: 0°38', Separando)\nIC Conjunção Marte (Orbe: 1°21', Aplicando)\nIC Sextil Saturno (Orbe: 1°31', Separando)\nIC Óctilo Quíron (Orbe: 0°27', Separando)\nNodo Quincúncio Sol (Orbe: 0°13', Aplicando)\nNodo Quadratura Lua (Orbe:\nNodo em trígono com Mercúrio (Orbe: 0°03', em aplicação )\nNodo em octil com Saturno (Orbe: 1°37', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°33', em aplicação)\nQuíron em quadratura com o Sol (Orbe: 0°19', em separação)\nQuíron em quincúncio com a Lua (Orbe: 1°22', em aplicação)\nQuíron em trígono com Vênus (Orbe: 0°11', em aplicação)\nQuíron em octil com Marte (Orbe: 1°48', em separação)\nFortuna em trígono com Mercúrio (Orbe: 1°44', em separação)\nFortuna em sextil com Vênus (Orbe: 2°25', em separação)\nFortuna em quincúncio com Marte (Orbe: 0°25', em separação)\nFortuna em trígono com Netuno (Orbe: 1°17', em aplicação)\nFortuna em trígono com o Ascendente (Orbe: 1°41', Separando)\nQuincúncio da Fortuna IC (Orbe: 1°47', Separando)\nSextil da Fortuna DSC (Orbe: 1°41', Separando)\nOposição do Vértice Lilith (Orbe: 0°08', Separando)",
    jogoGerado: [1, 2, 4, 5, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 24],
    resultado: [2, 3, 4, 5, 9, 10, 11, 13, 15, 18, 19, 20, 21, 23, 25],
    obs: ""
  },
  {
    id: "h95", concurso: "3744", data: "24/07/2026", hora: "",
    textoMapa: "Sol em Leão 2°06', na 5ª Casa;\nLua em Sagitário 11°20', na 9ª Casa;\nMercúrio em Câncer 16°22', na 4ª Casa;\nVênus em Virgem 16°41', na 6ª Casa;\nMarte em Gêmeos 18°18', na 4ª Casa;\nJúpiter em Leão 5°24', na 5ª Casa;\nSaturno em Áries 14°44', na 1ª Casa;\nUrano em Gêmeos 4°45', na 3ª Casa;\nNetuno em Áries 4°20', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°20', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°18', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°13', na 10ª Casa;\nQuíron em Touro 0°49', na 2ª Casa;\nFortuna em Escorpião 8°00', no\nVértice da 8ª Casa em Gêmeos 24°46', no\nAscendente da 4ª Casa em Peixes 17°15'\nMC em Sagitário 17°10'\n\n1ª Casa em Peixes 17°15'\n2ª Casa em Áries 15°01'\n3ª Casa em Touro 14°52'\n4ª Casa em Gêmeos 17°10'\n5ª Casa em Câncer 19°31'\n6ª Casa em Leão 19°27'\n7ª Casa em Virgem 17°15'\n8ª Casa em Libra 15°01'\n9ª Casa em Escorpião 14°52'\n10ª Casa em Sagitário 17°10'\n11ª Casa em Capricórnio 19°31'\n12ª Casa em Aquário 19°27'\n\nSol em octil com Vênus (Orbe: 0°24', em movimento)\nSol em octil com Marte (Orbe: 1°12', em movimento)\nSol em sextil com Urano (Orbe: 2°39', em movimento)\nSol em trígono com Netuno (Orbe: 2°14', em movimento)\nSol em oposição a Plutão (Orbe: 2°14', em movimento)\nMercúrio em sextil com Vênus (Orbe: 0°19', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°37', em movimento)\nVênus em quadratura com Marte (Orbe: 1°37', em movimento)\nVênus em quincúncio com Saturno (Orbe: 1°56', em movimento)\nVênus em trígono com Plutão (Orbe: 2°39', em movimento)\nMarte em octil com Júpiter (Orbe: 2°06', em movimento)\nMarte em trígono com Plutão (Orbe: 1°01', em movimento)\nJúpiter em sextil com Urano (Orbe: 0°38', Separando)\nJúpiter em trígono com Netuno (Orbe: 1°04', Separando)\nJúpiter em oposição a Plutão (Orbe: 1°04', Separando)\nUrano em sextil com Netuno (Orbe: 0°25', Separando)\nUrano em trígono com Plutão (Orbe: 0°25', Separando)\nNetuno em sextil com Plutão (Orbe: 0°00', Aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°09', Separando)\nAscendente em Trígono com Mercúrio (Orbe: 0°52', Separando)\nAscendente em Oposição com Vênus (Orbe: 0°33', Separando)\nAscendente em Quadratura com Marte (Orbe: 1°03', Aplicando)\nAscendente em Octil com Plutão (Orbe: 2°05', Aplicando)\nAscendente em Octil com Quíron (Orbe: 1°25', Separando)\nDescendente em Octil com o Sol (Orbe: 0°09', Separando)\nDescendente em Sextil com Mercúrio (Orbe: 0°52', Separando)\nDescendente em Conjunção com Vênus (Orbe: 0°33', Separando)\nDescendente em Quadratura com Marte (Orbe: 1°03', Aplicando)\nDescendente em Quincúncio com Saturno (Orbe: 2°30', Separando)\nDescendente em Tri-Octil Plutão (Orbe: 2°05', em movimento)\nTri-óctil do Descendente com Quíron (Orbe: 1°25', em movimento de separação)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°04', em movimento de separação)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 0°48', em movimento de separação\n) Quadratura do Meio do Céu com Vênus (Orbe: 0°29', em movimento de separação)\nOposição do Meio do Céu com Marte (Orbe: 1°07', em movimento)\nTrígono do Meio do Céu com Saturno (Orbe: 2°25', em movimento de separação)\nOctil do Meio do Céu com Plutão (Orbe: 2°09', em movimento)\nTri-óctil do Meio do Céu com Quíron (Orbe: 1°21', em movimento de separação)\nOctil do Fundo do Céu com o Sol (Orbe: 0°04', em movimento de separação)\nQuadratura do Fundo do Céu com Vênus (Orbe: 0°29', em movimento de separação)\nConjunção do Fundo do Céu com Marte (Orbe: 1°07', em movimento)\nSextil do Fundo do Céu com Saturno (Orbe: 2°25', Separando)\nIC Tri-Octil Plutão (Orbe: 2°09', Aplicando)\nIC Octil Quíron (Orbe: 1°21', Separando)\nNodo Quincúncio Sol (Orbe: 0°47', Separando)\nNodo Tri-Octil Mercúrio (Orbe: 0°03', Separando)\nNodo Octil Saturno (Orbe: 1°34', Aplicando)\nNodo Sextil Quíron (Orbe: 0°29', Aplicando)\nQuíron Quadratura Sol (Orbe: 1°16', Separando)\nQuíron Tri-Octil Vênus (Orbe: 0°51', Separando)\nQuíron Octil Marte (Orbe: 2°29', Separando)\nFortuna Quadratura Júpiter (Orbe: 2°36', Separando)\nFortuna Octil Lilith (Orbe: 1°12', Aplicando)\nVértice Lilith em oposição (Orbe: 0°33', Separando)",
    jogoGerado: [1, 2, 4, 5, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 24],
    resultado: [1, 2, 3, 5, 7, 10, 14, 16, 17, 18, 20, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h96", concurso: "3745", data: "26/07/2026", hora: "",
    textoMapa: "Sol em Leão 3°36', na 10ª Casa;\nLua em Capricórnio 0°07', na 3ª Casa;\nMercúrio em Câncer 16°39', na 10ª Casa;\nVênus em Virgem 18°22', na 12ª Casa;\nMarte em Gêmeos 19°23', na 8ª Casa;\nJúpiter em Leão 5°45', na 10ª Casa;\nSaturno em Áries 14°44', estacionário, na 6ª Casa;\nUrano em Gêmeos 4°49', na 8ª Casa;\nNetuno em Áries 4°19', retrógrado, na 6ª Casa;\nPlutão em Aquário 4°18', retrógrado, na 4ª Casa;\nNodo Norte em Peixes 1°13', retrógrado, na 5ª Casa;\nLilith em Sagitário 24°23', na 3ª Casa;\nQuíron em Touro 0°50', na 7ª Casa;\nFortuna em Peixes. 19°53', no\nVértice da 6ª Casa em Áries 9°37', no\nAscendente da 6ª Casa em Libra 23°22'\nMeio do Céu em Câncer 16°15'\n\n1ª Casa em Libra 23°22'\n2ª Casa em Escorpião 27°38'\n3ª Casa em Sagitário 23°34'\n4ª Casa em Capricórnio 16°15'\n5ª Casa em Aquário 11°15'\n6ª Casa em Peixes 13°58'\n7ª Casa em Áries 23°22'\n8ª Casa em Touro 27°38'\n9ª Casa em Gêmeos 23°34'\n10ª Casa em Câncer 16°15'\n11ª Casa em Leão 11°15'\n12ª Casa em Virgem 13°58'\n\nSol em octil com Vênus (Orbe: 0°14', em movimento)\nSol em octil com Marte (Orbe: 0°46', em movimento)\nSol em conjunção com Júpiter (Orbe: 2°08', em movimento)\nSol em sextil com Urano (Orbe: 1°12', em movimento)\nSol em trígono com Netuno (Orbe: 0°42', em movimento)\nSol em oposição a Plutão (Orbe: 0°41', em movimento)\nMercúrio em sextil com Vênus (Orbe: 1°43', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°54', em movimento)\nVênus em quadratura com Marte (Orbe: 1°01', em movimento)\nVênus em octil com Júpiter (Orbe: 2°23', em movimento)\nVênus em trígono com Plutão (Orbe: 0°55', em movimento)\nMarte em octil com Júpiter (Orbe: 1°22', em movimento)\nMarte em trígono com Plutão (Orbe:\nJúpiter em sextil com Urano (Orbe: 0°05', Separando)\nJúpiter em trígono com Netuno (Orbe: 1°26', Separando)\nJúpiter em oposição a Plutão (Orbe: 1°27', Separando)\nUrano em sextil com Netuno (Orbe: 0°30', Separando)\nUrano em trígono com Plutão (Orbe: 0°31', Separando)\nNetuno em sextil com Plutão (Orbe: 0°01', Separando)\n\nSextil do Ascendente com Lilith (Orbe: 1°01', em movimento)\nTrígono do Descendente com Lilith (Orbe: 1°01', em movimento)\nConjunção do Meio do Céu com Mercúrio (Orbe: 0°23', em movimento)\nSextil do Meio do Céu com Vênus (Orbe: 2°06', em movimento)\nQuadratura do Meio do Céu com Saturno (Orbe: 1°30', em movimento)\nTri-óctilo do Meio do Céu com o Nodo Lunar (Orbe: 0°01', em movimento)\nOposição do Fundo do Céu com Mercúrio (Orbe: 0°23', em movimento)\nTrígono do Fundo do Céu com Vênus (Orbe: 2°06', em movimento)\nQuadratura do Fundo do Céu com Saturno (Orbe: 1°30', em movimento)\nOctil do Fundo do Céu com o\nNodo Lunar (Orbe: 0°01', em movimento) Quincúncio do Nodo com o Sol (Orbe: 2°22', em movimento)\nSextil do Nodo com a Lua (Orbe: 1°06', em movimento)\nTri-óctilo do Nodo com Mercúrio (Orbe: 0°25', Separando)\nNodo em Octil com Saturno (Orbe: 1°28', Aplicando)\nNodo em Sextil com Quíron (Orbe: 0°23', Aplicando)\nQuíron em Quadratura com o Sol (Orbe: 2°46', Separando)\nQuíron em Trígono com a Lua (Orbe: 0°42', Aplicando)\nQuíron em Tri-Octil com Vênus (Orbe: 2°32', Separando)\nFortuna em Tri-Octil com o Sol (Orbe: 1°16', Separando)\nFortuna em Oposição com Vênus (Orbe: 1°30', Separando)\nFortuna em Quadratura com Marte (Orbe: 0°29', Separando)\nFortuna em Tri-Octil com Júpiter (Orbe: 0°52', Aplicando)\nFortuna em Octil com Plutão (Orbe: 0°34', Separando)",
    jogoGerado: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 16, 19, 23, 24],
    resultado: [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 19, 21, 22, 24],
    obs: ""
  },
  {
    id: "h97", concurso: "3746", data: "27/07/2026", hora: "",
    textoMapa: "Sol em Leão 4°57', na 5ª Casa;\nLua em Capricórnio 17°02', na 10ª Casa;\nMercúrio em Câncer 17°06', na 4ª Casa;\nVênus em Virgem 19°52', na 6ª Casa;\nMarte em Gêmeos 20°21', na 4ª Casa;\nJúpiter em Leão 6°04', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°52', na 3ª Casa;\nNetuno em Áries 4°18', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°16', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°09', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°33', na 10ª Casa;\nQuíron em Touro 0°50', na 2ª Casa;\nFortuna em Libra 7°52', no\nVértice da 7ª Casa em Gêmeos 26°27', no\nAscendente da 4ª Casa em Peixes 19°57'\nMeio do Céu em Sagitário 19°54'\n\n1ª Casa em Peixes 19°57'\n2ª Casa em Áries 17°45'\n3ª Casa em Touro 17°38'\n4ª Casa em Gêmeos 19°54'\n5ª Casa em Câncer 22°12'\n6ª Casa em Leão 22°07'\n7ª Casa em Virgem 19°57'\n8ª Casa em Libra 17°45'\n9ª Casa em Escorpião 17°38'\n10ª Casa em Sagitário 19°54'\n11ª Casa em Capricórnio 22°12'\n12ª Casa em Aquário 22°07'\n\nSol em octil com Vênus (Orbe: 0°05', em movimento)\nSol em octil com Marte (Orbe: 0°23', em movimento)\nSol em conjunção com Júpiter (Orbe: 1°06', em movimento)\nSol em sextil com Urano (Orbe: 0°05', em movimento)\nSol em trígono com Netuno (Orbe: 0°39', em movimento)\nSol em oposição a Plutão (Orbe: 0°41', em movimento)\nLua em oposição a Mercúrio (Orbe: 0°04', em movimento)\nLua em trígono com Vênus (Orbe: 2°49', em movimento)\nLua em quadratura com Saturno (Orbe: 2°17', em movimento)\nLua em trígono com octil de Urano (Orbe: 2°49', em movimento)\nMercúrio em sextil com Vênus (Orbe: 2°45', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 2°21', em movimento)\nMercúrio em octil com Urano (Orbe: Vênus\nem quadratura com Marte (Orbe: 0°29', em quadratura)\nVênus em octil com Júpiter (Orbe: 1°12', em quadratura)\nVênus em trígono com Plutão (Orbe: 0°36', em separação)\nMarte em octil com Júpiter (Orbe: 0°43', em quadratura)\nMarte em trígono com Plutão (Orbe: 1°05', em separação)\nJúpiter em sextil com Urano (Orbe: 1°12', em separação)\nJúpiter em trígono com Netuno (Orbe: 1°46', em separação)\nJúpiter em oposição a Plutão (Orbe: 1°48', em separação)\nUrano em sextil com Netuno (Orbe: 0°34', em separação)\nUrano em trígono com Plutão (Orbe: 0°36', em separação) Netuno em\nsextil com Plutão (Orbe: 0°02', em separação)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°00', em movimento)\nAscendente em Sextil com a Lua (Orbe: 2°54', em movimento de separação)\nAscendente em Trígono com Mercúrio (Orbe: 2°50', em movimento de separação)\nAscendente em Oposição com Vênus (Orbe: 0°04', em movimento de separação)\nAscendente em Quadratura com Marte (Orbe: 0°24', em movimento)\nAscendente em Tri-Octil com Júpiter (Orbe: 1°07', em movimento)\nAscendente em Octil com Plutão (Orbe: 0°40', em movimento de separação)\nDescendente em Octil com o Sol (Orbe: 0°00', em movimento)\nDescendente em Trígono com a Lua (Orbe: 2°54', em movimento de separação) Descendente em\nSextil com Mercúrio (Orbe: 2°50', em movimento de separação)\nDescendente em Conjunção com Vênus (Orbe: 0°04', em movimento de separação)\nDescendente em Quadratura com Marte (Orbe: 0°24', Aplicando)\nDescendente em Octil com Júpiter (Orbe: 1°07', Aplicando)\nDescendente em Tri-Octil com Plutão (Orbe: 0°40', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°03', Aplicando) Meio do Céu em\nQuincúncio com Mercúrio (Orbe: 2°47', Separando)\nMeio do Céu em Quadratura com Vênus (Orbe: 0°02', Separando)\nMeio do Céu em Oposição com Marte (Orbe: 0°26', Aplicando)\nMeio do Céu em Tri-Octil com Júpiter (Orbe: 1°09', Aplicando)\nMeio do Céu em Octil com Plutão (Orbe: 0°38', Separando)\nFundo do Céu em Octil com o Sol (Orbe: 0°03', Aplicando)\nMeio do Céu em Quincúncio com a Lua (Orbe: 2°51', Separando) Meio do Céu em\nQuadratura com Vênus (Orbe: 0°02', Separando)\nMeio do Céu em Conjunção com Marte (Orbe: 0°26', em formação)\nIC em Octil com Júpiter (Orbe: 1°09', em formação)\nIC em Tri-Octil com Plutão (Orbe: 0°38', em formação)\nNodo em Octil com a Lua (Orbe: 0°53', em formação)\nNodo em Tri-Octil com Mercúrio (Orbe: 0°57', em formação)\nNodo em Octil com Saturno (Orbe: 1°24', em formação)\nNodo em Sextil com Quíron (Orbe: 0°18', em formação)\nFortuna em Sextil com o Sol (Orbe: 2°54', em formação)\nFortuna em Sextil com Júpiter (Orbe: 1°47', em formação)\nFortuna em Trígono com Urano (Orbe: 2°59', em formação)\nVértice em Oposição com Lilith (Orbe: 1°54', em formação)",
    jogoGerado: [1, 4, 5, 6, 7, 8, 9, 10, 12, 17, 18, 19, 20, 24, 25],
    resultado: [1, 3, 4, 6, 7, 8, 9, 10, 14, 15, 17, 18, 21, 22, 24],
    obs: ""
  },
  {
    id: "h98", concurso: "3747", data: "28/07/2026", hora: "",
    textoMapa: "Sol em Leão 5°55', na 5ª Casa;\nLua em Capricórnio 29°06', na 11ª Casa;\nMercúrio em Câncer 17°33', na 4ª Casa;\nVênus em Virgem 20°55', na 7ª Casa;\nMarte em Gêmeos 21°02', na 4ª Casa;\nJúpiter em Leão 6°17', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°54', na 3ª Casa;\nNetuno em Áries 4°17', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°14', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°06', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°40', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Virgem. 27°40', no\nVértice da 7ª Casa em Gêmeos 27°03', no\nAscendente da 4ª Casa em Peixes 20°51'\nMC em Sagitário 20°49'\n\n1ª Casa em Peixes 20°51'\n2ª Casa em Áries 18°40'\n3ª Casa em Touro 18°34'\n4ª Casa em Gêmeos 20°49'\n5ª Casa em Câncer 23°05'\n6ª Casa em Leão 23°00'\n7ª Casa em Virgem 20°51'\n8ª Casa em Libra 18°40'\n9ª Casa em Escorpião 18°34'\n10ª Casa em Sagitário 20°49'\n11ª Casa em Capricórnio 23°05'\n12ª Casa em Aquário 23°00'\n\nSol em octil com Vênus (Orbe: 0°00', separando)\nSol em octil com Marte (Orbe: 0°06', aplicando)\nSol em conjunção com Júpiter (Orbe: 0°22', aplicando)\nSol em sextil com Urano (Orbe: 1°00', separando)\nSol em trígono com Netuno (Orbe: 1°37', separando)\nSol em oposição a Plutão (Orbe: 1°40', separando)\nMercúrio em quadratura com Saturno (Orbe: 2°49', separando)\nMercúrio em octil com Urano (Orbe: 2°20', aplicando)\nVênus em quadratura com Marte (Orbe: 0°06', aplicando)\nVênus em octil com Júpiter (Orbe: 0°22', aplicando)\nVênus em trígono com Plutão (Orbe: 1°40', separando)\nMarte em octil com Júpiter (Orbe: 0°15', aplicando)\nMarte Trí-óctilo de Plutão (Orbe: 1°47', Separando)\nJúpiter em sextil com Urano (Orbe: 1°23', Separando)\nJúpiter em trígono com Netuno (Orbe: 2°00', Separando)\nJúpiter em oposição a Plutão (Orbe: 2°03', Separando)\nUrano em sextil com Netuno (Orbe: 0°36', Separando)\nUrano em trígono com Plutão (Orbe: 0°39', Separando)\nNetuno em sextil com Plutão (Orbe: 0°02', Separando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°04', em movimento)\nVênus em Oposição ao Ascendente (Orbe: 0°04', em movimento)\nMarte em Quadratura com o Ascendente (Orbe: 0°11', em movimento)\nJúpiter em Tri-Óctil no Ascendente (Orbe: 0°26', em movimento)\nPlutão em Octil no Ascendente (Orbe: 1°36', em movimento)\nSol em Octil no Descendente (Orbe: 0°04', em movimento)\nVênus em Conjunção com o Descendente (Orbe: 0°04', em movimento)\nMarte em Quadratura com o Descendente (Orbe: 0°11', em movimento)\nJúpiter em Octil no Descendente (Orbe: 0°26', em movimento)\nPlutão em Tri-Óctil no Descendente (Orbe: 1°36', em movimento)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°05', em movimento)\nVênus em Quadratura com o Meio do Céu (Orbe: 0°06', em aplicação)\nMC em oposição a Marte (Orbe: 0°12', em aplicação)\nMC em trí-óctilo com Júpiter (Orbe: 0°28', em aplicação)\nMC em óctilo com Plutão (Orbe: 1°34', em separação)\nIC em óctilo com o Sol (Orbe: 0°05', em aplicação)\nIC em quadratura com Vênus (Orbe: 0°06', em aplicação)\nIC em conjunção com Marte (Orbe: 0°12', em aplicação)\nIC em óctilo com Júpiter (Orbe: 0°28', em aplicação)\nIC em trí-óctilo com Plutão (Orbe: 1°34', em separação)\nNodo em trí-óctilo com Mercúrio (Orbe: 1°27', em separação)\nNodo em óctilo com Saturno (Orbe: 1°21', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°15', em aplicação)\nQuíron em quadratura com a Lua (Orbe: 1°44', em formação)\nTrígono da Fortuna com a Lua (Orbe: 1°26', em formação)\nOposição da Fortuna com o Vértice (Orbe: 2°19', em separação)\nQuincúncio do Vértice com a Lua (Orbe: 2°02', em formação)\nOposição do Vértice com Lilith (Orbe: 2°23', em separação)",
    jogoGerado: [1, 4, 5, 6, 7, 10, 11, 12, 17, 18, 19, 20, 21, 24, 25],
    resultado: [1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 18, 19, 21, 24, 25],
    obs: ""
  },
  {
    id: "h99", concurso: "3748", data: "29/07/2026", hora: "",
    textoMapa: "Sol em Leão 6°52', na 5ª Casa;\nLua em Aquário 11°17', na 11ª Casa;\nMercúrio em Câncer 18°06', na 4ª Casa;\nVênus em Virgem 21°58', na 7ª Casa;\nMarte em Gêmeos 21°42', na 3ª Casa;\nJúpiter em Leão 6°31', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°56', na 3ª Casa;\nNetuno em Áries 4°17', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°13', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°03', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°46', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Virgem. 17°20', no\nVértice da 6ª Casa em Gêmeos 27°41', no\nAscendente da 4ª Casa em Peixes 21°45'\nMeio do Céu em Sagitário 21°43'\n\n1ª Casa em Peixes 21°45'\n2ª Casa em Áries 19°35'\n3ª Casa em Touro 19°29'\n4ª Casa em Gêmeos 21°43'\n5ª Casa em Câncer 23°59'\n6ª Casa em Leão 23°54'\n7ª Casa em Virgem 21°45'\n8ª Casa em Libra 19°35'\n9ª Casa em Escorpião 19°29'\n10ª Casa em Sagitário 21°43'\n11ª Casa em Capricórnio 23°59'\n12ª Casa em Aquário 23°54'\n\nSol em octil com Vênus (Orbe: 0°05', Separando)\nSol em octil com Marte (Orbe: 0°09', Separando)\nSol em conjunção com Júpiter (Orbe: 0°21', Separando)\nSol em sextil com Urano (Orbe: 1°56', Separando)\nSol em trígono com Netuno (Orbe: 2°35', Separando)\nSol em oposição com Plutão (Orbe: 2°39', Separando)\nMercúrio em octil com Urano (Orbe: 1°49', Aplicando)\nVênus em quadratura com Marte (Orbe: 0°15', Separando)\nVênus em octil com Júpiter (Orbe: 0°27', Separando)\nVênus em trígono com Plutão (Orbe: 2°45', Separando)\nMarte em octil com Júpiter (Orbe: 0°11', Separando)\nMarte em trígono com Plutão (Orbe:\nJúpiter em sextil com Urano (Orbe: 1°34', Separando)\nJúpiter em trígono com Netuno (Orbe: 2°14', Separando)\nJúpiter em oposição a Plutão (Orbe: 2°17', Separando)\nUrano em sextil com Netuno (Orbe: 0°39', Separando)\nUrano em trígono com Plutão (Orbe: 0°43', Separando)\nNetuno em sextil com Plutão (Orbe: 0°03', Separando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°07', em movimento)\nAscendente em Oposição com Vênus (Orbe: 0°13', em movimento)\nAscendente em Quadratura com Marte (Orbe: 0°02', em movimento)\nAscendente em Tri-Octil com Júpiter (Orbe: 0°14', em movimento)\nAscendente em Octil com Plutão (Orbe: 2°31', em movimento)\nDescendente em Octil com o Sol (Orbe: 0°07', em movimento)\nDescendente em Conjunção com Vênus (Orbe: 0°13', em movimento)\nDescendente em Quadratura com Marte (Orbe: 0°02', em movimento)\nDescendente em Octil com Júpiter (Orbe: 0°14', em movimento)\nDescendente em Tri-Octil com Plutão (Orbe: 2°31', em movimento)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°08', em movimento) Meio do Céu\nem Quadratura com Vênus (Orbe: 0°14', em movimento)\nMC em oposição a Marte (Orbe: 0°00', em movimento)\nMC em tríoctilo com Júpiter (Orbe: 0°12', em movimento)\nMC em octil com Plutão (Orbe: 2°30', em movimento)\nIC em octil com o Sol (Orbe: 0°08', em movimento)\nIC em quadratura com Vênus (Orbe: 0°14', em movimento)\nIC em conjunção com Marte (Orbe: 0°00', em movimento)\nIC em octil com Júpiter (Orbe: 0°12', em movimento)\nIC em tríoctilo com Plutão (Orbe: 2°30', em movimento)\nNodo em tríoctilo com Mercúrio (Orbe: 2°03', em movimento)\nNodo em octil com Saturno (Orbe: 1°18', em movimento)\nNodo em sextil com Quíron (Orbe: 0°11', em movimento)\nLilith Sol em Tri-Octil (Orbe: 2°54', em movimento)\nLilith em Octil com a Lua (Orbe: 1°31', em movimento de separação)\nLilith em Quadratura com Vênus (Orbe: 2°48', em movimento)\nFortuna em Sextil com Mercúrio (Orbe: 0°46', em movimento)\nFortuna em Quincúncio com Saturno (Orbe: 2°35', em movimento de separação)\nFortuna em Tri-Octil com Plutão (Orbe: 1°53', em movimento)\nFortuna em Tri-Octil com Quíron (Orbe: 1°28', em movimento de separação)\nLua em Tri-Octil com o Vértice (Orbe: 1°23', em movimento de separação)\nLilith em Oposição com o Vértice (Orbe: 2°54', em movimento de separação)",
    jogoGerado: [1, 3, 4, 5, 6, 7, 9, 11, 12, 18, 20, 21, 22, 24, 25],
    resultado: [1, 4, 5, 6, 8, 9, 11, 13, 14, 15, 17, 19, 20, 22, 25],
    obs: ""
  },
  {
    id: "h100", concurso: "3749", data: "30/07/2026", hora: "",
    textoMapa: "Sol em Leão 7°49', na 5ª Casa;\nLua em Aquário 23°38', na 11ª Casa;\nMercúrio em Câncer 18°46', na 4ª Casa;\nVênus em Virgem 23°01', na 7ª Casa;\nMarte em Gêmeos 22°23', na 3ª Casa;\nJúpiter em Leão 6°44', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°58', na 3ª Casa;\nNetuno em Áries 4°16', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°11', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°59', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°53', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Virgem. 6°50', no\nVértice da 6ª Casa em Gêmeos 28°22', no\nAscendente da 4ª Casa em Peixes 22°39'\nMC em Sagitário 22°38'\n\n1ª Casa em Peixes 22°39'\n2ª Casa em Áries 20°30'\n3ª Casa em Touro 20°24'\n4ª Casa em Gêmeos 22°38'\n5ª Casa em Câncer 24°53'\n6ª Casa em Leão 24°47'\n7ª Casa em Virgem 22°39'\n8ª Casa em Libra 20°30'\n9ª Casa em Escorpião 20°24'\n10ª Casa em Sagitário 22°38'\n11ª Casa em Capricórnio 24°53'\n12ª Casa em Aquário 24°47'\n\nSol em octil com Vênus (Orbe: 0°11', Separando)\nSol em octil com Marte (Orbe: 0°26', Separando)\nSol em conjunção com Júpiter (Orbe: 1°05', Separando)\nSol em sextil com Urano (Orbe: 2°51', Separando)\nLua em quincúncio com Vênus (Orbe: 0°37', Separando)\nLua em trígono com Marte (Orbe: 1°14', Separando)\nMercúrio em octil com Urano (Orbe: 1°12', Aplicando)\nVênus em quadratura com Marte (Orbe: 0°37', Separando)\nVênus em octil com Júpiter (Orbe: 1°16', Separando)\nMarte em octil com Júpiter (Orbe: 0°39', Separando)\nJúpiter em sextil com Urano (Orbe: 1°45', Separando)\nJúpiter em trígono com Netuno (Orbe: 2°28', Separando)\nJúpiter Oposição de Plutão (Orbe: 2°32', Separando)\nUrano em sextil com Netuno (Orbe: 0°42', Separando)\nUrano em trígono com Plutão (Orbe: 0°46', Separando)\nNetuno em sextil com Plutão (Orbe: 0°04', Separando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°10', em movimento)\nVênus em Oposição ao Ascendente (Orbe: 0°21', em movimento)\nMarte em Quadratura com o Ascendente (Orbe: 0°15', em movimento)\nJúpiter em Tri-Óctil no Ascendente (Orbe: 0°54', em movimento)\nLilith em Quadratura com o Ascendente (Orbe: 2°14', em movimento)\nSol em Octil no Descendente (Orbe: 0°10', em movimento)\nLua em Quincúncio no Descendente (Orbe: 0°59', em movimento)\nVênus em Conjunção com o Descendente (Orbe: 0°21', em movimento)\nMarte em Quadratura no Descendente (Orbe: 0°15', em movimento)\nJúpiter em Octil no Descendente (Orbe: 0°54', em movimento)\nLilith em Quadratura no Descendente (Orbe: 2°14', em movimento)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°11', em aplicação)\nMeio do Céu em sextil com a Lua (Orbe: 1°00', em aplicação)\nMeio do Céu em quadratura com Vênus (Orbe: 0°22', em aplicação)\nMeio do Céu em oposição a Marte (Orbe: 0°14', em separação)\nMeio do Céu em trígono com Júpiter (Orbe: 0°53', em separação)\nMeio do Céu em conjunção com Lilith (Orbe: 2°15', em aplicação)\nFundo do Céu em octil com o Sol (Orbe: 0°11', em aplicação)\nFundo do Céu em trígono com a Lua (Orbe: 1°00', em aplicação)\nFundo do Céu em quadratura com Vênus (Orbe: 0°22', em aplicação)\nFundo do Céu em conjunção com Marte (Orbe: 0°14', em separação)\nFundo do Céu em octil com Júpiter (Orbe: 0°53', em separação)\nFundo do Céu em oposição a Lilith (Orbe: 2°15', em aplicação)\nNodo em trígono com Mercúrio (Orbe: 2°46', em separação)\nNodo Octil Saturno (Orbe: 1°15', em movimento)\nNodo em sextil Quíron (Orbe: 0°08', em movimento)\nLilith em trígono com o Sol (Orbe: 2°03', em movimento)\nLilith em sextil com a Lua (Orbe: 1°14', em movimento)\nLilith em quadratura com Vênus (Orbe: 1°52', em movimento)\nLilith em oposição a Marte (Orbe: 2°29', em movimento)\nFortuna em quadratura com Urano (Orbe: 1°52', em movimento)\nFortuna em quincúncio com Netuno (Orbe: 2°34', em movimento)\nFortuna em quincúncio com Plutão (Orbe: 2°38', em movimento)\nVértice em trígono com o Nodo (Orbe: 2°37', em movimento)\nVértice em sextil com Quíron (Orbe: 2°29', em movimento)",
    jogoGerado: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 21, 22, 23, 24, 25],
    resultado: [1, 2, 3, 7, 8, 9, 11, 12, 14, 17, 19, 21, 23, 24, 25],
    obs: ""
  },
];;

// ─── Dados base ───────────────────────────────────────────────────────────────
const SIGNOS = [
  { nome: "Áries", num: 1, regente: "Marte" },
  { nome: "Touro", num: 2, regente: "Vênus" },
  { nome: "Gêmeos", num: 3, regente: "Mercúrio" },
  { nome: "Câncer", num: 4, regente: "Lua" },
  { nome: "Leão", num: 5, regente: "Sol" },
  { nome: "Virgem", num: 6, regente: "Mercúrio" },
  { nome: "Libra", num: 7, regente: "Vênus" },
  { nome: "Escorpião", num: 8, regente: "Marte" },
  { nome: "Sagitário", num: 9, regente: "Júpiter" },
  { nome: "Capricórnio", num: 10, regente: "Saturno" },
  { nome: "Aquário", num: 11, regente: "Saturno" },
  { nome: "Peixes", num: 12, regente: "Júpiter" },
];

// Signo oposto (180° no zodíaco) — usado para derivar DSC a partir do ASC e
// Fundo do Céu (IC) a partir do MC, já que esses dois ângulos nunca são
// informados diretamente pelo site, só o ASC e o MC.
function signoOposto(nomeSigno) {
  const s = SIGNOS.find(x => x.nome === nomeSigno);
  if (!s) return null;
  const opostoNum = ((s.num - 1 + 6) % 12) + 1;
  const opostoObj = SIGNOS.find(x => x.num === opostoNum);
  return opostoObj ? opostoObj.nome : null;
}

const PLANETAS_CONFIG = [
  { id: "sol", nome: "Sol", simbolo: "☉", tipo: "planeta" },
  { id: "lua", nome: "Lua", simbolo: "☽", tipo: "planeta" },
  { id: "mercurio", nome: "Mercúrio", simbolo: "☿", tipo: "planeta" },
  { id: "venus", nome: "Vênus", simbolo: "♀", tipo: "planeta" },
  { id: "marte", nome: "Marte", simbolo: "♂", tipo: "planeta" },
  { id: "jupiter", nome: "Júpiter", simbolo: "♃", tipo: "planeta" },
  { id: "saturno", nome: "Saturno", simbolo: "♄", tipo: "planeta" },
  { id: "urano", nome: "Urano", simbolo: "⛢", tipo: "planeta" },
  { id: "netuno", nome: "Netuno", simbolo: "♆", tipo: "planeta" },
  { id: "plutao", nome: "Plutão", simbolo: "♇", tipo: "planeta" },
  { id: "nodo", nome: "Nodo Norte", simbolo: "☊", tipo: "ponto" },
  { id: "lilith", nome: "Lilith", simbolo: "⚸", tipo: "ponto" },
  { id: "quiron", nome: "Quíron", simbolo: "⚷", tipo: "ponto" },
  { id: "fortuna", nome: "Fortuna", simbolo: "⊕", tipo: "ponto" },
  { id: "vertice", nome: "Vértice", simbolo: "Vx", tipo: "ponto" },
  { id: "asc", nome: "Ascendente", simbolo: "ASC", tipo: "angulo" },
  { id: "mc", nome: "Meio do Céu", simbolo: "MC", tipo: "angulo" },
];

const DIGNIDADE = {
  sol: { domicilio: ["Leão"], exaltacao: ["Áries"], queda: ["Libra"], exilio: ["Aquário"] },
  lua: { domicilio: ["Câncer"], exaltacao: ["Touro"], queda: ["Escorpião"], exilio: ["Capricórnio"] },
  mercurio: { domicilio: ["Gêmeos", "Virgem"], exaltacao: ["Virgem"], queda: ["Peixes"], exilio: ["Sagitário", "Peixes"] },
  venus: { domicilio: ["Touro", "Libra"], exaltacao: ["Peixes"], queda: ["Virgem"], exilio: ["Áries", "Escorpião"] },
  marte: { domicilio: ["Áries", "Escorpião"], exaltacao: ["Capricórnio"], queda: ["Câncer"], exilio: ["Touro", "Libra"] },
  jupiter: { domicilio: ["Sagitário", "Peixes"], exaltacao: ["Câncer"], queda: ["Capricórnio"], exilio: ["Gêmeos", "Virgem"] },
  saturno: { domicilio: ["Capricórnio", "Aquário"], exaltacao: ["Libra"], queda: ["Áries"], exilio: ["Câncer", "Leão"] },
};

const CASAS_TIPO = {
  1: "angular", 2: "sucedente", 3: "cadente",
  4: "angular", 5: "sucedente", 6: "cadente",
  7: "angular", 8: "sucedente", 9: "cadente",
  10: "angular", 11: "sucedente", 12: "cadente",
};

// ── Triplicidade (Lilly, Christian Astrology): dignidade essencial por elemento,
// diferente por seita (mapa diurno ou noturno). A seita se define pela casa do Sol —
// casas 1-6 ficam abaixo do horizonte (Sol embaixo da terra = mapa NOTURNO), casas
// 7-12 ficam acima (mapa DIURNO). Um planeta que é o regente de triplicidade da sua
// própria seita ganha dignidade extra — igual a domicílio/exaltação em peso, mas é
// uma categoria à parte (por isso soma, não substitui).
const ELEMENTO = {
  "Áries": "fogo", "Leão": "fogo", "Sagitário": "fogo",
  "Touro": "terra", "Virgem": "terra", "Capricórnio": "terra",
  "Gêmeos": "ar", "Libra": "ar", "Aquário": "ar",
  "Câncer": "água", "Escorpião": "água", "Peixes": "água",
};
const TRIPLICIDADE = {
  fogo: { dia: "sol", noite: "jupiter" },
  terra: { dia: "venus", noite: "lua" },
  ar: { dia: "saturno", noite: "mercurio" },
  água: { dia: "marte", noite: "marte" }, // Lilly simplifica a tríade da água só em Marte
};

function getSeita(planetas) {
  const casaSol = parseInt(planetas?.sol?.casa);
  if (isNaN(casaSol)) return null; // sem casa do Sol, não dá pra saber a seita
  return casaSol <= 6 ? "noite" : "dia";
}

function ehRegenteDeTriplicidade(planetaId, signo, seita) {
  if (!seita) return false;
  const elem = ELEMENTO[signo];
  if (!elem) return false;
  return TRIPLICIDADE[elem][seita] === planetaId;
}

// ─── Parser de texto do mapa horário ─────────────────────────────────────────
const NOME_PARA_ID = {
  "sol": "sol", "lua": "lua", "mercúrio": "mercurio", "mercurio": "mercurio",
  "vênus": "venus", "venus": "venus", "marte": "marte", "júpiter": "jupiter", "jupiter": "jupiter",
  "saturno": "saturno", "urano": "urano", "netuno": "netuno", "plutão": "plutao", "plutao": "plutao",
  "nodo norte": "nodo", "nodo lunar": "nodo", "nodo": "nodo",
  "lilith": "lilith", "quíron": "quiron", "quiron": "quiron",
  "fortuna": "fortuna", "vértice": "vertice", "vertice": "vertice", "vertex": "vertice",
  "ascendente": "asc", "meio do céu": "mc", "meio do ceu": "mc", "mc": "mc",
};

const SIGNOS_REGEX = "Áries|Aries|Touro|Gêmeos|Gemeos|Câncer|Cancer|Leão|Leao|Virgem|Libra|Escorpião|Escorpiao|Sagitário|Sagitario|Capricórnio|Capricornio|Aquário|Aquario|Peixes";

function normalizarSigno(s) {
  const map = {
    "aries": "Áries", "touro": "Touro", "gemeos": "Gêmeos", "cancer": "Câncer",
    "leao": "Leão", "virgem": "Virgem", "libra": "Libra", "escorpiao": "Escorpião",
    "sagitario": "Sagitário", "capricornio": "Capricórnio", "aquario": "Aquário", "peixes": "Peixes"
  };
  const semAcento = s.toLowerCase()
    .replace(/á|à|ã|â/g, "a").replace(/é|ê/g, "e").replace(/í/g, "i")
    .replace(/ó|õ|ô/g, "o").replace(/ú/g, "u");
  return map[semAcento] || s;
}

function parseTextoMapa(texto) {
  const planetas = {};
  const cuspides = {};
  if (!texto) return { planetas, cuspides };

  // Normaliza texto: remove quebras estranhas, junta tudo, separa palavras grudadas
  // comuns em texto colado ("noVértice" -> "no Vértice", "Casa." -> "Casa ")
  let t = texto.replace(/\r/g, " ").replace(/\n/g, " ");
  t = t.replace(/\.(?=[A-ZÁÉÍÓÚÂÊÔÃÕ])/g, ". ");
  t = t.replace(/(no|na)(Vértice|Vertice|Vertex|Ascendente|MC|Meio)/gi, "$1 $2");
  t = t.replace(/(Casa)em/gi, "$1 em");

  // ── Planetas/pontos: "Nome em Signo Grau°Min', na/no Nª Casa"
  // Também cobre: "retrógrado" (antes ou depois do grau), casas com "na" ou "no",
  // MC/ASC sem "em ... Casa". IMPORTANTE: o trecho "...na Nª Casa" no final é
  // OPCIONAL como um todo (por isso o "(?:...)?" envolvendo tudo) — antes, só
  // partes internas eram opcionais mas a palavra "Casa" em si era obrigatória na
  // prática, então qualquer planeta sem menção explícita à casa (ou com a frase
  // de casa formatada de um jeito inesperado) fazia a regex inteira falhar e o
  // planeta inteiro sumia da leitura — sem sinal nem de signo nem de grau, e sem
  // nenhum aviso específico sobre qual era o problema.
  const regexPlaneta = new RegExp(
    `(Sol|Lua|Mercúrio|Mercurio|Vênus|Venus|Marte|Júpiter|Jupiter|Saturno|Urano|Netuno|Plutão|Plutao|Nodo Norte|Nodo Lunar|Nodo|Lilith|Quíron|Quiron|Fortuna|Vértice|Vertice|Vertex)\\.?\\s+(?:retrógrado\\s+)?(?:da \\d+[ªa]\\s*[Cc]asa\\s+)?em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º]\\s*(\\d{1,2})?'?(?:,?\\s*(retrógrado,?\\s*)?(?:na|no)?\\s*(\\d{1,2})?[ªa]?\\s*[Cc]asa)?`,
    "gi"
  );

  let m;
  while ((m = regexPlaneta.exec(t)) !== null) {
    const nomeRaw = m[1].toLowerCase().replace("jupiter", "júpiter").replace("mercurio", "mercúrio")
      .replace("venus", "vênus").replace("plutao", "plutão").replace("quiron", "quíron")
      .replace("vertice", "vértice").replace("vertex", "vértice").replace("nodo lunar", "nodo norte");
    const id = NOME_PARA_ID[nomeRaw] || NOME_PARA_ID[m[1].toLowerCase()];
    if (!id) continue;
    planetas[id] = {
      signo: normalizarSigno(m[2]),
      grau: m[3],
      minutos: m[4] || "0",
      retrogrado: !!m[5],
      casa: m[6] || planetas[id]?.casa || "",
    };
  }

  // ── ASC: "Ascendente ... em Signo Grau°Min'" (pode ter "na Nª casa" antes do signo)
  const regexAsc = new RegExp(`Ascendente[^.]*?em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
  const mAsc = t.match(regexAsc);
  if (mAsc) planetas.asc = { signo: normalizarSigno(mAsc[1]), grau: mAsc[2], minutos: mAsc[3] || "0" };

  // ── MC: "Meio do Céu em Signo Grau°Min'" ou "MC em Signo Grau°Min'"
  const regexMc = new RegExp(`(?:Meio do Céu|Meio do Ceu|\\bMC)\\s+em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
  const mMc = t.match(regexMc);
  if (mMc) planetas.mc = { signo: normalizarSigno(mMc[1]), grau: mMc[2], minutos: mMc[3] || "0" };

  // ── Fortuna: fallback caso a regex principal não pegue (ex: "Fortuna em Áries. 29°41'")
  if (!planetas.fortuna) {
    const regexFortuna = new RegExp(`Fortuna\\s+em\\s+(${SIGNOS_REGEX})\\.?\\s*(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
    const mF = t.match(regexFortuna);
    if (mF) planetas.fortuna = { signo: normalizarSigno(mF[1]), grau: mF[2], minutos: mF[3] || "0", casa: "" };
  }

  // ── Vértice: fallback (ex: "Vértice da 3ª Casa em Gêmeos 2°41'")
  if (!planetas.vertice) {
    const regexVert = new RegExp(`(?:Vértice|Vertice|Vertex)\\s+da\\s+(\\d{1,2})[ªa]\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})\\.?\\s*(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
    const mV = t.match(regexVert);
    if (mV) planetas.vertice = { signo: normalizarSigno(mV[2]), grau: mV[3], minutos: mV[4] || "0", casa: mV[1] };
  }

  // ── Cúspides: "Nª Casa em Signo Grau°Min'"
  const regexCuspide = new RegExp(`(\\d{1,2})[ªa]\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})\\s+(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "gi");
  let mc2;
  while ((mc2 = regexCuspide.exec(t)) !== null) {
    const casa = mc2[1];
    cuspides[casa] = { signo: normalizarSigno(mc2[2]), grau: mc2[3], minutos: mc2[4] || "0" };
  }

  // ── DSC e Fundo do Céu (IC) nunca aparecem diretamente no texto do site — só
  // ASC e MC. Mas são sempre exatamente opostos (180°): mesmo grau/minutos, signo
  // oposto. Sintetizamos os dois aqui para que aspectos como "Fundo do Céu em
  // trígono com a Lua" (onde o IC é a ORIGEM do aspecto) sejam reconhecidos — sem
  // isso, essas linhas batiam na regex mas eram descartadas por a "origem" nunca
  // existir no mapa. DSC/IC não recebem pontuação própria (têm o mesmo grau do
  // ASC/MC, então pontuar os dois seria contar o mesmo sinal duas vezes).
  if (planetas.asc?.signo) {
    const signoOp = signoOposto(planetas.asc.signo);
    if (signoOp) planetas.dsc = { signo: signoOp, grau: planetas.asc.grau, minutos: planetas.asc.minutos };
  }
  if (planetas.mc?.signo) {
    const signoOp = signoOposto(planetas.mc.signo);
    if (signoOp) planetas.ic = { signo: signoOp, grau: planetas.mc.grau, minutos: planetas.mc.minutos };
  }

  // ── Aspectos: "ORIGEM em TIPO com/de DESTINO (Orbe: ...)" — cobre qualquer planeta,
  // ponto ou ângulo como origem (Lua, Sol, MC, ASC, Fortuna, etc.), não só a Lua.
  // Guardamos a lista de aspectos em cada ponto de origem: planetas[id].aspectos = [...]
  // Cada aspecto também guarda o orbe (graus decimais) quando encontrado logo após o
  // match no texto — usado para diferenciar aspectos quase exatos de aspectos no limite.
  const extrairOrbeProximo = (posicaoFim) => {
    const janela = t.slice(posicaoFim, posicaoFim + 60);
    const m = janela.match(/Orbe:\s*(\d+)[°º](\d+)?/i);
    if (!m) return null;
    return parseInt(m[1]) + parseInt(m[2] || 0) / 60;
  };
  // Status aplicando/separando: crucial na horária tradicional — "aplicando" significa
  // que o aspecto ainda vai se formar (o testemunho ainda está "por vir"), "separando"
  // significa que já passou (o testemunho já se consumou). O texto de origem sempre
  // declara isso de formas variadas: "em movimento subsequente"/"em aplicação"/
  // "aplicando"/"em fase aplicativa" = aplicando; "separando"/"em separação" = separando.
  const extrairStatusProximo = (posicaoFim) => {
    const janela = t.slice(posicaoFim, posicaoFim + 80).toLowerCase();
    if (/aplicando|em aplicação|movimento subsequente|fase aplicativa|aproximando/.test(janela)) return "aplicando";
    if (/separando|em separação|fase separativa|afastando/.test(janela)) return "separando";
    return null;
  };
  const NOMES_ORIGEM_DESTINO = "Sol|Lua|Mercúrio|Mercurio|Vênus|Venus|Marte|Júpiter|Jupiter|Saturno|Urano|Netuno|Plutão|Plutao|Nodo(?:\\s+Norte)?|Lilith|Quíron|Quiron|Fortuna|Vértice|Vertice|Vertex|MC|Meio do Céu|Meio do Ceu|Ascendente|ASC|Descendente|DSC|Fundo do Céu|Fundo do Ceu|IC";
  const regexAspecto = new RegExp(
    `(${NOMES_ORIGEM_DESTINO})\\s+em\\s+(trígono|trigono|sextil|quadratura|oposição|oposicao|quincúncio|quincuncio|conjunção|conjuncao|octil|tri-óctil|tri-octil|tríoctilo|trioctilo)\\s+(?:com|de|ao|aos|à|às|a|o|no|na|nos|nas)?\\s*(?:o|a|os|as)?\\s*(${NOMES_ORIGEM_DESTINO})`,
    "gi"
  );
  let ma;
  while ((ma = regexAspecto.exec(t)) !== null) {
    const normalizarNomeAspecto = (nome) => {
      const n = nome.toLowerCase().replace("jupiter", "júpiter").replace("mercurio", "mercúrio")
        .replace("venus", "vênus").replace("plutao", "plutão").replace("quiron", "quíron")
        .replace("vertice", "vértice").replace("vertex", "vértice")
        .replace("meio do ceu", "meio do céu").replace("nodo norte", "nodo").replace(/^nodo$/, "nodo");
      if (n === "meio do céu" || n === "mc") return "mc";
      if (n === "ascendente" || n === "asc") return "asc";
      if (n === "descendente" || n === "dsc") return "dsc";
      if (n === "fundo do céu" || n === "fundo do ceu" || n === "ic") return "ic";
      return NOME_PARA_ID[n] || null;
    };
    const origemId = normalizarNomeAspecto(ma[1]);
    const destinoId = normalizarNomeAspecto(ma[3]);
    if (!origemId || !destinoId) continue;
    if (!planetas[origemId]) continue; // só guarda se o ponto de origem foi identificado no mapa
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    planetas[origemId].aspectos.push({ tipo: ma[2].toLowerCase(), planeta: destinoId, orbe: extrairOrbeProximo(regexAspecto.lastIndex), status: extrairStatusProximo(regexAspecto.lastIndex) });
  }

  // ── Segundo padrão: "TIPO do/de ORIGEM com DESTINO" — ex: "Trígono do Ascendente
  // com Urano", "Quadratura do Meio do Céu com Plutão".
  const regexAspecto2 = new RegExp(
    `(?:(trígono|trigono|sextil|quadratura|oposição|oposicao|quincúncio|quincuncio|conjunção|conjuncao|octil|tri-óctil|tri-octil|tríoctilo|trioctilo)\\s+(?:do|da|de)?\\s*(${NOMES_ORIGEM_DESTINO})\\s+(?:com|de|ao|aos|à|às|a|o|no|na|nos|nas)?\\s*(?:o|a|os|as)?\\s*(${NOMES_ORIGEM_DESTINO}))`,
    "gi"
  );
  let ma2;
  while ((ma2 = regexAspecto2.exec(t)) !== null) {
    const normalizarNomeAspecto = (nome) => {
      const n = nome.toLowerCase().replace("jupiter", "júpiter").replace("mercurio", "mercúrio")
        .replace("venus", "vênus").replace("plutao", "plutão").replace("quiron", "quíron")
        .replace("vertice", "vértice").replace("vertex", "vértice")
        .replace("meio do ceu", "meio do céu").replace("nodo norte", "nodo").replace(/^nodo$/, "nodo");
      if (n === "meio do céu" || n === "mc") return "mc";
      if (n === "ascendente" || n === "asc") return "asc";
      if (n === "descendente" || n === "dsc") return "dsc";
      if (n === "fundo do céu" || n === "fundo do ceu" || n === "ic") return "ic";
      return NOME_PARA_ID[n] || null;
    };
    const origemId = normalizarNomeAspecto(ma2[2]);
    const destinoId = normalizarNomeAspecto(ma2[3]);
    if (!origemId || !destinoId || origemId === destinoId) continue;
    if (!planetas[origemId]) continue;
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    const jaTem = planetas[origemId].aspectos.some(a => a.planeta === destinoId && a.tipo === ma2[1].toLowerCase());
    if (!jaTem) planetas[origemId].aspectos.push({ tipo: ma2[1].toLowerCase(), planeta: destinoId, orbe: extrairOrbeProximo(regexAspecto2.lastIndex), status: extrairStatusProximo(regexAspecto2.lastIndex) });
  }

  // ── Terceiro padrão: "ORIGEM TIPO DESTINO" direto, sem "em"/"do"/conector nenhum —
  // ex: "MC Quadratura Júpiter", "Sol quadratura Saturno", "Lua trígono Vênus". O
  // comentário original já dizia cobrir esse formato, mas nenhuma das duas regexes
  // acima de fato casava essa ordem de palavras (ORIGEM antes do TIPO) — o segundo
  // padrão exige TIPO antes da ORIGEM ("Quadratura do Ascendente..."), não depois.
  // Sem essa terceira regex, qualquer aspecto escrito nesse formato (comum quando o
  // ângulo/planeta já foi citado antes) era silenciosamente ignorado.
  const regexAspecto3 = new RegExp(
    `(${NOMES_ORIGEM_DESTINO})\\s+(trígono|trigono|sextil|quadratura|oposição|oposicao|quincúncio|quincuncio|conjunção|conjuncao|octil|tri-óctil|tri-octil|tríoctilo|trioctilo)\\s+(?:com|de|ao|aos|à|às|a|o|no|na|nos|nas)?\\s*(?:o|a|os|as)?\\s*(${NOMES_ORIGEM_DESTINO})`,
    "gi"
  );
  let ma3;
  while ((ma3 = regexAspecto3.exec(t)) !== null) {
    const normalizarNomeAspecto = (nome) => {
      const n = nome.toLowerCase().replace("jupiter", "júpiter").replace("mercurio", "mercúrio")
        .replace("venus", "vênus").replace("plutao", "plutão").replace("quiron", "quíron")
        .replace("vertice", "vértice").replace("vertex", "vértice")
        .replace("meio do ceu", "meio do céu").replace("nodo norte", "nodo").replace(/^nodo$/, "nodo");
      if (n === "meio do céu" || n === "mc") return "mc";
      if (n === "ascendente" || n === "asc") return "asc";
      if (n === "descendente" || n === "dsc") return "dsc";
      if (n === "fundo do céu" || n === "fundo do ceu" || n === "ic") return "ic";
      return NOME_PARA_ID[n] || null;
    };
    const origemId = normalizarNomeAspecto(ma3[1]);
    const destinoId = normalizarNomeAspecto(ma3[3]);
    if (!origemId || !destinoId || origemId === destinoId) continue;
    if (!planetas[origemId]) continue;
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    const jaTem = planetas[origemId].aspectos.some(a => a.planeta === destinoId && a.tipo === ma3[2].toLowerCase());
    if (!jaTem) planetas[origemId].aspectos.push({ tipo: ma3[2].toLowerCase(), planeta: destinoId, orbe: extrairOrbeProximo(regexAspecto3.lastIndex), status: extrairStatusProximo(regexAspecto3.lastIndex) });
  }

  // ── Fallback: calcular a casa de qualquer ponto sem casa capturada, usando a
  // posição zodiacal absoluta (signo+grau) contra as 12 cúspides. O texto de origem
  // às vezes não declara a casa de forma explícita (formato irregular do site, comum
  // com a Fortuna: "Fortuna em Aquário. 29°57', no Vértice da 12ª Casa..." — a casa
  // que aparece ali pertence ao PRÓXIMO ponto, não à Fortuna). Isso é sempre calculável
  // geometricamente a partir das cúspides, que sempre vêm completas no texto.
  const cuspidesOrdenadas = Object.entries(cuspides)
    .map(([casa, c]) => ({ casa: parseInt(casa), abs: posicaoAbsoluta(c.signo, c.grau, c.minutos) }))
    .filter(c => c.abs !== null)
    .sort((a, b) => a.casa - b.casa);
  const calcularCasaPorPosicao = (signoNome, grau, minutos) => {
    if (cuspidesOrdenadas.length !== 12) return null;
    const posPonto = posicaoAbsoluta(signoNome, grau, minutos);
    if (posPonto === null) return null;
    for (let i = 0; i < 12; i++) {
      const atual = cuspidesOrdenadas[i];
      const proxima = cuspidesOrdenadas[(i + 1) % 12];
      let ini = atual.abs, fim = proxima.abs;
      if (fim <= ini) fim += 360; // cruza 0° de Áries
      let p = posPonto;
      if (p < ini) p += 360;
      if (p >= ini && p < fim) return atual.casa;
    }
    return null;
  };
  Object.entries(planetas).forEach(([id, p]) => {
    if (["asc", "mc", "dsc", "ic"].includes(id)) return;
    if (!p?.casa && p?.signo && p?.grau != null) {
      const casaCalculada = calcularCasaPorPosicao(p.signo, p.grau, p.minutos);
      if (casaCalculada) p.casa = String(casaCalculada);
    }
  });

  return { planetas, cuspides };
}

// ─── Funções de análise ───────────────────────────────────────────────────────
function getNumeroGrau(grau, minutos) {
  if (!grau && grau !== 0) return [];
  const g = parseInt(grau);
  const m = parseInt(minutos || 0);
  // Graus 0 e 26-29 não têm correspondência direta e honesta com um número da
  // Lotofácil (que só vai de 1 a 25). A versão anterior forçava esses casos para
  // 1 e 25 — isso inflava esses dois números sem nenhuma base astrológica: qualquer
  // planeta em 26°-29° de qualquer signo (4 valores possíveis de grau) sempre
  // acionava o 25, dando a ele ~5x mais chances de pontuar do que um número do meio
  // da faixa (2-24), que só é acionado por um único valor de grau. Corrigido: fora
  // da faixa 1-25 o grau simplesmente não gera número (em vez de inventar um). A
  // regra dedicada de Quíron perto de 29-30° → 25 (mais abaixo) continua existindo
  // como a única fonte intencional desse sinal específico.
  if (g < 1 || g > 25) return [];
  const nums = [g];
  if (m > 30 && g + 1 <= 25) nums.push(g + 1);
  return nums;
}

function getFaixaLilith(grau, minutos) {
  if (!grau) return [];
  const g = parseInt(grau);
  const nums = [];
  for (let i = g - 2; i <= g + 1; i++) {
    if (i >= 1 && i <= 25) nums.push(i);
  }
  return nums;
}

function getDignidadePlaneta(planetaId, signo) {
  const d = DIGNIDADE[planetaId];
  if (!d) return "neutro";
  if (d.domicilio?.includes(signo)) return "domicilio";
  if (d.exaltacao?.includes(signo)) return "exaltacao";
  if (d.queda?.includes(signo)) return "queda";
  if (d.exilio?.includes(signo)) return "exilio";
  return "neutro";
}

function getForcaPlaneta(planetaId, signo, casa) {
  const dig = getDignidadePlaneta(planetaId, signo);
  const tipoCasa = CASAS_TIPO[parseInt(casa)] || "cadente";
  let forca = 0;
  if (dig === "domicilio" || dig === "exaltacao") forca += 3;
  else if (dig === "queda" || dig === "exilio") forca -= 2;
  if (tipoCasa === "angular") forca += 2;
  else if (tipoCasa === "sucedente") forca += 1;
  return Math.max(0, forca);
}

// Posição zodiacal absoluta (0-360°) de um ponto, a partir do signo + grau + minutos.
// Necessária para comparar proximidade real entre dois pontos — comparar só o
// número do grau (ignorando o signo) confundiria uma oposição exata (mesmo grau,
// signos opostos, 180° de distância real) com uma conjunção próxima.
function posicaoAbsoluta(signoNome, grau, minutos) {
  const s = SIGNOS.find(x => x.nome === signoNome);
  if (!s) return null;
  return (s.num - 1) * 30 + parseInt(grau || 0) + parseInt(minutos || 0) / 60;
}

// Distância circular entre duas posições absolutas (0-360°), sempre o menor arco.
function diffAbsoluta(posA, posB) {
  if (posA == null || posB == null) return null;
  const d = Math.abs(posA - posB) % 360;
  return d > 180 ? 360 - d : d;
}

// Regente tradicional de um signo
function regenteDoSigno(nomeSigno) {
  const s = SIGNOS.find(s => s.nome === nomeSigno);
  return s ? s.regente : null;
}

// id do planeta a partir do nome do regente (ex: "Júpiter" -> "jupiter")
const NOME_REGENTE_PARA_ID = {
  "Sol": "sol", "Lua": "lua", "Mercúrio": "mercurio", "Vênus": "venus",
  "Marte": "marte", "Júpiter": "jupiter", "Saturno": "saturno",
};

// Percorre a cadeia de dispositores de um planeta até fechar um loop ou 6 passos.
// Retorna a lista de casas visitadas no caminho (excluindo a casa do próprio planeta,
// que já é pontuada separadamente), cada uma com o CAMINHO COMPLETO percorrido até
// ali (não só o último passo) — antes, "via" guardava apenas o regente imediato que
// levou àquela casa, e o texto exibido no app juntava isso direto com o planeta de
// ORIGEM (ex: "plutão → marte"), o que parecia dizer que Plutão é regido por Marte
// quando na verdade a cadeia real passa por um ou mais passos intermediários
// (plutão → saturno → marte). Isso podia levar a uma leitura astrológica errada do
// motivo pelo qual um número pontuou.
function cadeiaDispositora(planetas, idInicial, maxPassos = 6) {
  const casasVisitadas = [];
  const casasJaContadas = new Set(); // evita contar a mesma casa 2x no mesmo caminho
  const visitados = new Set();
  const caminho = [idInicial];
  let atual = idInicial;
  for (let i = 0; i < maxPassos; i++) {
    const p = planetas[atual];
    if (!p?.signo) break;
    const regente = regenteDoSigno(p.signo);
    const regenteId = NOME_REGENTE_PARA_ID[regente];
    if (!regenteId || regenteId === atual) break;
    if (visitados.has(regenteId)) break; // loop fechado — não registra o passo repetido
    caminho.push(regenteId);
    const pRegente = planetas[regenteId];
    if (pRegente?.casa) {
      const casaNum = parseInt(pRegente.casa);
      if (!casasJaContadas.has(casaNum)) {
        casasVisitadas.push({ casa: casaNum, via: regenteId, caminho: [...caminho] });
        casasJaContadas.add(casaNum);
      }
    }
    visitados.add(regenteId);
    atual = regenteId;
  }
  return casasVisitadas;
}

// ── "Considerações antes do julgamento" (astrologia horária clássica, Lilly) ──
// Regra tradicional: se o Ascendente está nos primeiros graus (0-3°) ou nos últimos
// (27-30°) de um signo, o mapa é considerado "cedo demais" ou "tarde demais" para um
// julgamento confiável — não é uma pontuação, é um aviso sobre a confiabilidade do
// mapa em si, direto da doutrina clássica (não é regra inventada para a Lotofácil).
function verificarRadicalidade(planetas) {
  const avisos = [];
  const asc = planetas?.asc;
  if (asc?.grau != null && asc.grau !== "") {
    const g = parseInt(asc.grau);
    if (g <= 3) {
      avisos.push(`Ascendente em ${g}° de ${asc.signo || "signo"} — tradicionalmente considerado "cedo demais" para um julgamento confiável (regra clássica: ASC abaixo de 3°).`);
    } else if (g >= 27) {
      avisos.push(`Ascendente em ${g}° de ${asc.signo || "signo"} — tradicionalmente considerado "tarde demais" para um julgamento confiável (regra clássica: ASC acima de 27°).`);
    }
  }
  return avisos;
}

// ── Combustão / Sob os Raios do Sol (doutrina clássica de dignidade acidental) ──
// Um planeta muito perto do Sol fica "invisível" e debilitado; extremamente perto
// (cazimi) é considerado reforçado ("wonderous strong", Lilly). Orbes clássicos:
// cazimi ≤ 17' (0,28°), combusto ≤ 8°, sob os raios ≤ 15°. Vale através da fronteira
// de signo — o que importa é a distância absoluta no zodíaco, não o signo em si.
function condicaoSolar(planetaAbs, solAbs) {
  const d = diffAbsoluta(planetaAbs, solAbs);
  if (d == null) return null;
  if (d <= 17 / 60) return "cazimi";
  if (d <= 8) return "combusto";
  if (d <= 15) return "sob os raios";
  return null;
}

// ═══════════════════════════════════════════════════════════════════════════
// REGISTRO DO SISTEMA — leia antes de mexer em qualquer regra abaixo
// ═══════════════════════════════════════════════════════════════════════════
//
// Base de testes: 37 concursos reais com mapa horário completo e resultado
// conhecido (25/05/2026 a 30/07/2026). Taxa base de referência: qualquer
// número de 1-12 sair no resultado = 59.5%; qualquer número de 1-25 = ~60%.
// Toda regra abaixo tem seu comentário próprio explicando origem e validação
// — este bloco é só o resumo do que já foi tentado e não deu certo, para não
// repetir o mesmo teste inútil de novo.
//
// ── NOVO: investigação de falsos positivos — o que "bloqueia" um número ──
// Mudança de ângulo de análise: em vez de só procurar o que aponta PARA um
// número, procuramos o que faz o sistema errar dando pontuação alta a números
// que não saem. Achado: o número 4 dominava a lista de falsos positivos com
// pontuações de até 37, quase sempre por "sinal duplo" entre um planeta lento
// constante (Urano/Netuno/Plutão/Nodo, todos parados perto de 3-4° nesse
// período) e um planeta RÁPIDO que passa por ali de vez em quando (Lua, Vênus,
// Júpiter, Mercúrio). Isso não é coincidência rara — é o planeta rápido
// cruzando um lugar que está sempre ocupado, então "coincide" com frequência
// normal, não excepcional. A exclusão anterior só cobria pares ENTRE os
// pontos lentos; agora o Nodo entrou nessa lista, e o bônus de "sinal duplo"
// cai pela metade sempre que pelo menos um dos dois pontos envolvidos é lento/
// constante (mesmo em par com um planeta rápido). Reduziu os falsos positivos
// extremos (15+ pontos) de 37 para 34 nos 37 mapas testados — modesto mas real
// e sem inventar sinal, é correção estrutural do mesmo bug de fundo.
// (Também testamos: planeta retrógrado indica exclusão/"não"? NÃO confirmado
// — retrógrado teve taxa de acerto igual ou levemente MELHOR que direto nos
// dados testados, 70.3% vs 64.4% na casa. Captura de retrógrado ficou no
// parser (`planetas[id].retrogrado`) para uso futuro, sem regra aplicada.)
//
// ── NOVO: aspectos específicos entre ângulos e planetas (refinamento real) ──
// Testados aspectos entre pares nomeados (não genérico) com filtro de blocos
// temporais distintos. Dois achados fortes: (1) MC/ASC/DSC em aspecto com o
// Sol (tri-octil/octil) chegava a 84-90%, mas investigando de perto isso era
// principalmente reflexo do Sol estar quase sempre na 5ª Casa nesse período —
// mesmo assim, controlando por "Sol na 5ª" (comparando COM vs SEM o aspecto
// MC-Sol dentro desse subconjunto), a taxa ainda sobe de 68% para 90%, um
// refinamento real de +22pp. (2) O achado mais forte de todos: Marte na casa
// sozinho é FRACO (35.7%, abaixo até da taxa base), mas quando o IC (Fundo do
// Céu) está em conjunção com Marte, sobe para 66.7% — 31 pontos de diferença.
// Implementada regra específica para IC-conjunção-Marte (a regra genérica de
// aspecto já cobria isso, mas diluído entre ~50 aspectos por mapa — aqui ganha
// destaque próprio por ser o sinal mais forte encontrado nessa investigação).
// (3) Bloqueio real de Vênus: sozinha na casa ela tem 63.6% de acerto, mas
// quando algum ângulo (ASC/MC/DSC/IC) faz aspecto TENSO (quadratura ou
// oposição) com ela, a taxa cai para 33.3% — 30 pontos abaixo, quase o espelho
// invertido do achado do Marte. Implementado como bloqueio: o testemunho
// "Vênus na casa" não é registrado quando essa tensão está presente.
// (4) Varredura sistemática de todos os planetas contra ângulos harmônicos/
// tensos: Mercúrio se destacou — sozinho na casa já é razoável (65.5%), mas
// com aspecto HARMÔNICO (trígono/sextil/conjunção) de algum ângulo sobe para
// 87.5% (22pp de diferença, confirmado em 2 blocos temporais distintos).
// Implementada regra específica de confirmação, mesmo padrão do IC-Marte.
// (5) Varredura dos 7 planetas restantes (Sol, Lua, Júpiter, Saturno, Urano,
// Netuno, Plutão) contra aspectos de ângulos — NENHUMA regra nova confirmada:
// Júpiter e Saturno tiveram taxa MENOR com aspecto harmônico (oposto do
// esperado); Urano teve os mesmos 6 casos em "harmônico" e "tenso" (aspectos
// sobrepostos, não differentiam nada); Netuno e Plutão mostraram taxas altas
// mas eram, de novo, o mesmo padrão de "planeta lento parado" numa única
// janela contínua, não amostras independentes; Sol e Lua tiveram amostra
// insuficiente (0-3 casos) para qualquer conclusão. Registrado para não
// repetir esses testes específicos sem dados novos.
//
// ── NOVO: planeta na própria casa que ele rege ("domicílio por casa") ──
// Testado eixo oposto (ambas as casas de um par 1-7/2-8/etc ocupadas ao mesmo
// tempo) — fraco, descartado (58.6% vs 63.9%, sem diferença real). Testada a
// ideia de regência local: planeta posicionado numa casa cuja CÚSPIDE é do
// signo que ele mesmo rege (equivalente a "domicílio", mas por casa em vez de
// signo). Achado forte: 86.7% de acerto (13/15 casos) contra 64.3% dos demais
// — 22 pontos de diferença, confirmado em pelo menos 4 blocos temporais
// distintos com Mercúrio, Vênus e Lua (não é uma única janela). Implementado
// como testemunho de "fortalecimento próprio".
//
// ── TESTADO E DESCARTADO: movimento da Lua projetado 60min à frente ──
// Hipótese: como o horário do mapa é o início do sorteio (sem incerteza de
// hora) mas o resultado se desenrola ao longo da hora seguinte, o grau para
// ONDE a Lua está indo (ela se move ~0.55°/60min, o único ponto do mapa rápido
// o bastante para importar nessa janela) poderia ser sinal adicional. Nenhum
// caso testado mudou de CASA dentro da hora (casas grandes demais). Quanto ao
// grau: um primeiro teste (com bug — usava `pos % 30` sem tratar corretamente
// a mudança de signo) sugeriu ganho de +16pp, mas ao corrigir o cálculo
// (reaproveitando getNumeroGrau, a mesma função de conversão grau→número
// usada no resto do sistema, incluindo a regra dos minutos) e filtrar só os
// casos onde o grau de destino era GENUINAMENTE novo (não já coberto pela
// regra de minutos existente), a taxa real caiu para 38.9% (7/18) — abaixo da
// taxa base de ~60%. Não implementado. Lição: sempre reaproveitar as funções
// de conversão já existentes no sistema em vez de recalcular à mão, e sempre
// checar se o "novo" sinal não é apenas redundante com uma regra já existente.
// Testado também para Sol, Mercúrio, Vênus e Marte (os únicos rápidos o
// suficiente para eventualmente cruzar algum limiar em 60min): NENHUM muda de
// CASA dentro da hora (só 1 caso em 37 mapas, com Marte — amostra
// insuficiente). Mudança de GRAU acontece, mas em só 2-3 casos por planeta —
// amostra pequena demais para qualquer conclusão. Confirma que a Lua (0.55°
// em 60min) é, disparado, o único ponto do mapa rápido o bastante para esse
// tipo de análise fazer sentido — os demais planetas simplesmente não andam
// o suficiente numa hora para gerar sinal de movimento detectável.
//
// ── NOVO: Mercúrio na 5ª Casa → sinal para o 17 (implementado sem explicação
// doutrinária ainda) ──
// Investigação profunda pedida pelo usuário especificamente sobre o número 17
// (historicamente o mais fraco do sistema). Em vez de procurar "o que gera o
// grau 17", comparamos o céu INTEIRO entre os 26 concursos onde 17 saiu e os 11
// onde não saiu. Achado: Mercúrio na 5ª Casa aparece em 20 dos 26 casos com 17
// (77%) contra só 4 dos 11 sem 17 (36%) — 41pp de diferença, confirmado em 8
// blocos de alternância temporal (não é uma janela única). Testamos also os 6
// casos "órfãos" (17 saiu sem Mercúrio-5ª) e os 4 "exceções" (Mercúrio-5ª mas
// 17 não saiu) — não achamos um segundo fator que os explicasse (Vênus 6ª/7ª,
// cúspides perto de 17°, Lilith perto de 17°, MC-Vênus em aspecto: todos
// testados, nenhum se sustentou como sinal independente real). IMPLEMENTADO
// mesmo sem explicação doutrinária clara — é uma correlação estatística real e
// robusta, por decisão explícita do usuário de registrar todo sinal encontrado
// e ajustar/remover depois se necessário, em vez de descartar por falta de
// justificativa teórica pronta.
//
// Buscamos na web como astrólogos tradicionais lidam com eventos de resultado
// incerto (esportes) via horária — a técnica mais citada (Frawley, "Sports
// Astrology") é "o último aspecto aplicativo da Lua geralmente vence" (fontes:
// louiseofarabia.com, astrologyweekly.com, fensi88.livejournal.com). Implementamos
// a captura do status aplicando/separando de cada aspecto (não existia antes —
// o texto de origem sempre trazia isso, mas o parser ignorava) e testamos: o
// "último aspecto" (menor orbe entre os aplicando da Lua) teve 75% (9/12),
// contra 88.9% (8/9) dos demais aspectos aplicativos — o OPOSTO do esperado à
// primeira vista. Investigando de perto: os casos onde o "último aspecto" errou
// eram quase todos com Marte ou Urano como alvo — planetas que já sabemos ter
// comportamento especial no nosso sistema (Marte só confiável com IC-conjunção
// específica; Urano transgeracional/amortecido). Excluindo esses dois como alvo,
// a taxa do "último aspecto" sobe para 87.5% (7/8), ficando equivalente aos
// outros. Amostra pequena demais (8-9 casos) para implementar agora, mas é sinal
// promissor da doutrina de Frawley — revisitar com mais mapas. O campo `status`
// ("aplicando"/"separando") agora está disponível em planetas[id].aspectos para
// uso futuro.
//
// Investigando "qualidade dos dados" por outro ângulo: os 11 primeiros mapas
// (25/05 a 3704, maio-junho) têm ZERO aspectos capturados pelo parser — o
// formato do texto de origem mudou, e só a partir de julho (3724 em diante,
// 26 mapas) o texto passou a incluir a seção explícita de aspectos. Isso
// significa que TODAS as regras baseadas em aspecto (Marte-IC, Vênus-ângulos
// tensos, Mercúrio-ângulos harmônicos, recepção mútua generalizada, etc.)
// só puderam disparar nos 26 mapas de julho — a amostra real delas é 26, não
// 37, e está concentrada num período de ~30 dias corridos (não maio+julho
// como um cabeçalho anterior menos preciso poderia sugerir). Os "blocos
// temporais distintos" que validamos para essas regras são todos DENTRO
// dessa janela de julho — ainda são blocos reais e não uma única sequência
// contínua, mas é importante não superestimar a diversidade temporal da
// evidência. Regras baseadas em posição/dignidade/casa (sem aspecto)
// continuam válidas nos 37 mapas completos.
//
// (1) Fase lunar (crescente/minguante, calculada pela posição relativa Lua-
// Sol): testada isoladamente na própria Lua (minguante levemente melhor: 57.9%
// vs 44.4% no grau) e depois em todos os planetas (o oposto — crescente melhor:
// 69.4% vs 60.5%). Os dois testes se CONTRADIZEM — provavelmente porque a fase
// muda a cada ~14 dias e forma poucos blocos temporais distintos dentro dos 37
// mapas (mesmo problema de amostra concentrada). Não confiável, descartado.
// (2) Lilith em aspecto com outros planetas: melhor caso (lilith-sol
// quincúncio, 80%) tinha só 1 bloco temporal. (3) Quíron em aspecto: quiron-
// sol quadratura (100%) e quiron-jupiter quadratura (78.6%) fortes mas só 1
// bloco cada; o único com 2 blocos (quiron-venus trígono) ficou na taxa base
// (50%, sem vantagem real). Nenhum passou no critério de taxa forte E blocos
// temporais distintos simultaneamente — critério que já usamos para os
// achados confirmados (Marte-IC, Vênus-ângulos, Mercúrio-ângulos, regência
// própria por casa).
//
// ── NOVO: recepção em cascata (planeta neutro recebido pelo dispositor) ──
// Buscando especificamente algo que funcionasse nos 11 mapas de maio-junho
// (sem dados de aspecto — ver alerta acima): testada a doutrina de "recepção"
// — planeta SEM dignidade própria (neutro) que está no signo regido por outro
// planeta. Se esse dispositor (regente do signo) estiver ele mesmo em
// domicílio ou exaltação, o planeta neutro é considerado "recebido" e ganha
// crédito emprestado. Não depende de aspecto — só de dignidade e regência de
// signo, dados disponíveis em TODOS os 37 mapas. Resultado: 73.7% de acerto
// do grau (14/19) quando recebido, contra 50% quando o dispositor está fraco
// — 23.7pp de diferença, confirmado em 3 blocos temporais bem distintos
// (maio, meio de julho, final de julho) com três combinações diferentes de
// planeta/dispositor (Sol-Mercúrio, Sol/Mercúrio-Lua, Júpiter-Sol) — a
// evidência mais diversificada e robusta encontrada até agora. Implementado.
//
// Testadas todas as combinações planeta-casa (13 planetas × 12 casas) contra os
// 37 mapas. Achado importante sobre METODOLOGIA: a maioria das combinações com
// taxa alta (netuno-2 100%, saturno-1 100%, saturno-2 84%) são, na verdade,
// UMA ÚNICA janela temporal contínua (o planeta parado na mesma casa por
// semanas seguidas) — não são amostras independentes, é o mesmo padrão de
// "planeta lento parado" contando várias vezes disfarçado de várias amostras.
// Para filtrar isso, contamos quantos BLOCOS temporais distintos (não
// consecutivos) cada combinação aparece. As mais confiáveis, aparecendo em 2+
// blocos SEPARADOS no tempo (evidência real, não coincidência de época):
// fortuna-5 (8/9 = 88.9%, 2 blocos: mai-jun e depois jul) e mercurio-5 (19/24
// = 79.2%, 2 blocos, a maior amostra confiável de toda a grid). Ambas já são
// cobertas pela regra genérica "planeta na casa" — não precisou de regra nova,
// é uma validação de que a regra existente já capta os sinais mais fortes.
//
// Investigação concurso a concurso: pegando os números que NÃO saíram em cada
// mapa e cruzando com o que estava presente ali. Achado consistente: planeta
// SEM dignidade forte (neutro, queda OU exílio — ampliado da versão anterior
// que só via "neutro") numa casa CADENTE (3ª/6ª/9ª/12ª) tem 44.3% de acerto do
// grau (88 casos) contra 59.6% dos demais estados (152 casos) — quase 15 pontos
// abaixo, confirmado com amostra maior que o teste anterior. Isso virou
// BLOQUEIO REAL (o testemunho do grau não é registrado), não mais penalização
// de peso — não existe mais peso numérico no sistema, é presença ou ausência.
//
// Testado e DESCARTADO nesta rodada (não viraram bloqueio):
// • Fraco+cadente bloqueando a CASA (não só o grau) — diferença pequena (61.4%
//   vs 66.9%, só 5.5pp), não forte o suficiente pra ser sinal de exclusão.
// • Planeta fraco em aspecto TENSO com outro planeta fraco — o oposto do
//   esperado: 65.6% de acerto contra 49% dos outros fracos. Não é bloqueio,
//   é quase reforço — não implementado.
// • Planeta (rápido) na 12ª Casa — achado promissor em teste bruto (25% vs
//   56.3%), mas 6 dos 8 casos eram o MESMO Plutão parado no mesmo grau por
//   meses (repetição temporal disfarçada de amostra), e os 2 casos realmente
//   independentes (Vênus) são poucos demais pra confiar. Registrado como
//   hipótese em aberto — revisitar quando houver mais mapas com planetas
//   rápidos na 12ª Casa.
//
// Antes só existia para Lua-Júpiter. Testado para todos os pares entre Sol,
// Lua, Mercúrio, Vênus, Marte, Júpiter, Saturno: 21 casos de recepção mútua
// encontrados nos 37 mapas, casa de cada planeta envolvido bate com o
// resultado em 71.4% — acima da base de 59.5%. A Lua aparece na maioria dos
// casos (muda de signo rápido, entra em recepção com outros com frequência).
//
// ── TESTADO: exatidão do orbe e generalização de "aspecto ativa casa" ──
// O parser agora captura o valor do orbe de cada aspecto (planetas[id].aspectos
// tem {tipo, planeta, orbe}). Testamos duas hipóteses com isso: (1) aspectos
// muito exatos (≤0.5°) diferenciam mais que aspectos largos — NÃO confirmado,
// as três faixas de orbe ficam empatadas em 67-71%; (2) generalizar "MC ativa
// casa por aspecto" para QUALQUER planeta como origem — reduz a média agregada
// nos 37 mapas testados (9.19→9.14 com peso 1, →9.11 com peso 2), porque um
// mapa típico tem ~50 aspectos capturados e reforçar a casa de cada um dilui a
// diferenciação entre casas. MANTIDA mesmo assim (peso reduzido a 1): o sinal
// em si é real e validado (67-71% vs base de 59.5%) — decisão do usuário de
// priorizar cobertura de sinal sobre a média agregada nesta fase; o ajuste
// fino de peso fica para quando houver mais mapas para calibrar com confiança.
//
// ── PADRÃO CONFIRMADO: "planeta lento parado" explica sequências longas ──
// Quando Saturno, Netuno, Plutão, Urano, Quíron ou Júpiter (em exaltação)
// ficam parados numa mesma casa/grau em vários mapas seguidos (eles se movem
// muito devagar), o número correspondente tende a sair repetidamente nesse
// período. Testado em 6 sequências longas reais: confirmado em 2 (Saturno+
// Netuno na 2ª Casa por 11 concursos seguidos) e 25 (Quíron+Júpiter perto de
// 25° por 11 concursos seguidos). NÃO confirmado em 9, 16, 17, 21 — essas
// sequências não têm fonte astrológica clara nos dados testados, parecem
// variação estatística normal. Isso já é capturado pelas regras normais de
// "planeta na casa" — não precisa de mecanismo especial.
//
// ── TESTADO E REVERTIDO (não mexer de novo sem motivo novo) ──
// • Liberar Saturno em queda sem exigir casa angular: testado 2x (peso alto
//   e peso baixo), piorou ou empatou a média. Revertido — mantida a regra
//   "Saturno na casa" com peso 3, que já captura o sinal real dele.
// • Faixa completa de Lilith sempre ativa (sem exigir MC perto): piorou a
//   média 9.30→9.05. Revertido — mantida a condição de orbe MC-Lilith ≤3°.
// • Recalibrar todos os pesos de planeta-na-casa de uma vez, baseado na
//   vantagem individual de cada um: piorou a média 9.38→9.32 (mexer em
//   muitos pesos ao mesmo tempo desloca sinais que já funcionavam).
//   Revertido para versão conservadora: só o ajuste do Saturno ficou.
// • Sinal estatístico de frequência histórica / números "quentes": removido
//   por completo — o método é só leitura astrológica, sem estatística de
//   resultados passados nem soma matemática (decisão explícita do usuário).
// • Regra "casa lotada (3+) → casa+12": tinha boa correlação (83% vs 46%)
//   mas é soma disfarçada de astrologia, não leitura de significado. Removida.
//
// ── BUGS JÁ CORRIGIDOS (histórico, para contexto) ──
// • Eixo 6+7=13 não disparava em ~1/3 dos mapas porque a condição checava a
//   cúspide da 7ª no texto, que nem sempre vem listada — corrigido calculando
//   via ASC (signo oposto) quando a cúspide não está no texto.
// • diffGrau ignorava minutos — trocado por posicaoAbsoluta/diffAbsoluta.
// • Fortuna ficava sem casa em ~76% dos mapas (formato irregular do texto
//   de origem) — corrigido calculando a casa via geometria das 12 cúspides.
// • Bloqueio da Lua era binário (zerava o número) — virou penalização de
//   -60%, permitindo o número ainda competir se outras fontes o sustentarem.
// • Regra de "mesmo grau" contava Urano/Netuno/Plutão entre si como sinal
//   raro, mas eles ficam naturalmente próximos por MESES (são lentíssimos) —
//   excluídos da contagem de pares entre si.
// ═══════════════════════════════════════════════════════════════════════════

function analisarMapa(planetas, cuspides, historico = []) {
  const scores = {};
  for (let i = 1; i <= 25; i++) scores[i] = { pontos: 0, fontes: [] };

  // ═══════════════════════════════════════════════════════════════════════════
  // REGISTRO — PROIBIDO por decisão explícita do usuário: soma de pontos, peso
  // numérico, contagem de testemunhos, escala de qualquer tipo, e estatística/
  // taxa de acerto histórica como critério de pontuação. Já tentamos e todas
  // foram descartadas — mantidas aqui só como registro, para não repetir:
  //   (1) SOMAR pontos de todas as fontes de um número.
  //   (2) PEGAR O MAIOR peso fixo entre as fontes (sem somar).
  //   (3) TAXA DE ACERTO histórica por categoria de testemunho.
  //   (4) CONTAGEM de quantos testemunhos distintos apontam pra um número.
  // Nenhuma dessas é aceitável — todas são formas de transformar leitura
  // astrológica em número artificial que se compara/ordena numa escala.
  //
  // addPonto agora só REGISTRA a presença de uma fonte para um número — não
  // gera nenhum valor numérico derivado. `scores[n].pontos` fica em 0 sempre;
  // o que importa é `scores[n].fontes`, a lista de testemunhos astrológicos
  // encontrados para aquele número. Como escolher os 15 números finais SEM
  // nenhuma forma de ranking numérico é uma decisão em aberto — aguardando
  // orientação de como isso deve funcionar antes de implementar a escolha.
  // ═══════════════════════════════════════════════════════════════════════════
  const addPonto = (num, _pesoIgnorado, fonte) => {
    if (num >= 1 && num <= 25) {
      scores[num].fontes.push(fonte);
    }
  };

  const lua = planetas.lua;
  const sol = planetas.sol;
  const jupiter = planetas.jupiter;
  const venus = planetas.venus;
  const mercurio = planetas.mercurio;
  const marte = planetas.marte;
  const saturno = planetas.saturno;
  const fortuna = planetas.fortuna;
  const lilith = planetas.lilith;
  const quiron = planetas.quiron;
  const asc = planetas.asc;
  const mc = planetas.mc;
  const solAbs = sol?.signo ? posicaoAbsoluta(sol.signo, sol.grau, sol.minutos) : null;
  const seita = getSeita(planetas);

  // ── Penalização da Lua: planetas em oposição/quadratura com a Lua têm o grau
  // penalizado (não mais zerado por completo) — EXCETO quando o planeta é forte por
  // dignidade, que resiste à tensão. Antes isso era um bloqueio binário (zera 100%);
  // suavizado para -60%, permitindo que o número ainda concorra se houver outros
  // fatores fortes o suficiente para compensar.
  const luaPenalizados = new Set();
  if (lua?.aspectos) {
    lua.aspectos.forEach(asp => {
      if (["oposição", "quadratura"].includes(asp.tipo?.toLowerCase())) {
        const alvo = planetas[asp.planeta];
        if (alvo?.grau) {
          const forcaAlvo = getForcaPlaneta(asp.planeta, alvo.signo, alvo.casa);
          if (forcaAlvo < 3) {
            const nums = getNumeroGrau(alvo.grau, alvo.minutos);
            nums.forEach(n => luaPenalizados.add(n));
          }
        }
      }
    });
  }

  // Planetas/pontos que se movem tão devagar que ficam naturalmente parados na mesma
  // faixa de grau por MESES seguidos — um alinhamento entre eles não é sinal raro e
  // significativo (é o padrão o período inteiro), então não conta para as regras de
  // "mesmo grau". Urano/Netuno/Plutão são os óbvios (planetas transgeracionais); o
  // Nodo Norte foi adicionado depois de investigar falsos positivos reais: ele ficava
  // fixo em 3-4° por semanas (igual os transgeracionais) e formava "sinal duplo" com
  // eles repetidamente, inflando o número 4 com pontuações de até 37 em vários
  // concursos onde ele nem saiu — a mesma causa raiz do bug original, só que o Nodo
  // não estava na lista de exclusão. A regra continua valendo para qualquer outro par.
  const PONTOS_LENTOS_CONSTANTES = new Set(["urano", "netuno", "plutao", "nodo"]);
  const parEhTransgeracionalEntreSi = (idA, idB) => PONTOS_LENTOS_CONSTANTES.has(idA) && PONTOS_LENTOS_CONSTANTES.has(idB);

  // ── Dois planetas fracos (queda ou exílio) no mesmo grau exato NÃO se ativam —
  // detectamos os pares e marcamos para pular na análise de grau.
  const graosFracosAnulados = new Set();
  const idsPlanetas = Object.keys(planetas).filter(id => !["asc", "mc", "dsc", "ic"].includes(id));
  for (let i = 0; i < idsPlanetas.length; i++) {
    for (let j = i + 1; j < idsPlanetas.length; j++) {
      const a = planetas[idsPlanetas[i]], b = planetas[idsPlanetas[j]];
      if (!a?.grau || !b?.grau) continue;
      if (parseInt(a.grau) !== parseInt(b.grau)) continue;
      if (parEhTransgeracionalEntreSi(idsPlanetas[i], idsPlanetas[j])) continue;
      const digA = getDignidadePlaneta(idsPlanetas[i], a.signo);
      const digB = getDignidadePlaneta(idsPlanetas[j], b.signo);
      const fracoA = digA === "queda" || digA === "exilio";
      const fracoB = digB === "queda" || digB === "exilio";
      if (fracoA && fracoB) {
        graosFracosAnulados.add(parseInt(a.grau));
      }
    }
  }

  // ── Dois planetas/pontos no mesmo grau exato = testemunho de convergência (salvo
  // par fraco+fraco acima). Bloqueado quando pelo menos um dos dois é um ponto
  // lento/constante (Urano, Netuno, Plutão, Nodo) — investigando falsos positivos
  // reais, o número 4 aparecia com pontuações altíssimas em concursos onde nem
  // saiu, sempre porque um planeta RÁPIDO (Lua, Vênus, Júpiter, Mercúrio) cruzava
  // por cima de um ponto lento que já estava parado ali há semanas. Isso não é uma
  // coincidência rara e significativa — é o planeta rápido passando por um lugar
  // que SEMPRE tem algo, então "coincide" com frequência normal, não excepcional.
  // Excluir só os pares entre pontos lentos (regra anterior) não bastava, porque
  // o par lento+rápido também inflava — agora o testemunho nem é registrado
  // quando pelo menos um dos dois pontos é lento/constante.
  for (let i = 0; i < idsPlanetas.length; i++) {
    for (let j = i + 1; j < idsPlanetas.length; j++) {
      const idA = idsPlanetas[i], idB = idsPlanetas[j];
      if (parEhTransgeracionalEntreSi(idA, idB)) continue;
      const a = planetas[idA], b = planetas[idB];
      if (!a?.grau || !b?.grau) continue;
      const g = parseInt(a.grau);
      if (g !== parseInt(b.grau)) continue;
      if (graosFracosAnulados.has(g)) continue;
      const algumLento = PONTOS_LENTOS_CONSTANTES.has(idA) || PONTOS_LENTOS_CONSTANTES.has(idB);
      if (algumLento) continue; // bloqueado — não é coincidência significativa
      const digA = getDignidadePlaneta(idA, a.signo);
      const digB = getDignidadePlaneta(idB, b.signo);
      const algumForte = [digA, digB].some(d => d === "domicilio" || d === "exaltacao");
      addPonto(g, 0, `${idA} e ${idB} no mesmo grau (${g}°) — sinal duplo${algumForte ? " (reforçado por dignidade forte)" : ""}`);
    }
  }

  // ── Análise de cada planeta: grau, signo, casa ──
  Object.entries(planetas).forEach(([id, p]) => {
    if (!p?.grau && p?.grau !== 0) return;
    if (["asc", "mc", "dsc", "ic"].includes(id)) return;

    const dig = getDignidadePlaneta(id, p.signo);
    const fraco = dig === "queda" || dig === "exilio";
    const pAbsSolar = (id !== "sol" && p.signo) ? posicaoAbsoluta(p.signo, p.grau, p.minutos) : null;
    const condSolar = (pAbsSolar != null && solAbs != null) ? condicaoSolar(pAbsSolar, solAbs) : null;

    // Lilith: faixa completa (grau-2 a grau+1) só quando o MC está a até 3° dela —
    // testamos liberar sempre (a condição só ativava em 5/37 casos) mas piorou a média
    // geral (9.30 → 9.05): a faixa completa desloca mais sinais bons do top 15 do que
    // adiciona quando não há confirmação do MC. Mantida a condição original.
    let nums;
    if (id === "lilith") {
      const mcAtual = planetas.mc;
      const mcAbs = mcAtual?.signo ? posicaoAbsoluta(mcAtual.signo, mcAtual.grau, mcAtual.minutos) : null;
      const lilithAbs = p.signo ? posicaoAbsoluta(p.signo, p.grau, p.minutos) : null;
      const distMcLilith = diffAbsoluta(mcAbs, lilithAbs);
      const mcPertoDeLilith = distMcLilith != null && distMcLilith <= 3;
      nums = mcPertoDeLilith ? getFaixaLilith(p.grau, p.minutos) : getNumeroGrau(p.grau, p.minutos);
    } else {
      nums = getNumeroGrau(p.grau, p.minutos);
    }

    nums.forEach(n => {
      if (graosFracosAnulados.has(n)) return;

      // Planeta fraco (queda/exílio) só pontua pelo grau se a Lua aplica
      // harmonicamente a ele, OU se está em casa angular (compensa a fraqueza).
      // Testamos duas vezes liberar Saturno (peso alto e depois peso baixo restrito ao
      // grau exato) — a primeira piorou a média (9.30→9.24), a segunda ficou em empate
      // líquido (9.35=9.35) só trocando quais concursos acertam. Mantido bloqueado.
      if (fraco) {
        const tipoCasa = CASAS_TIPO[parseInt(p.casa)];
        const luaAtivaEste = lua?.aspectos?.some(a =>
          a.planeta === id && ["trígono", "sextil", "conjunção", "quincúncio"].includes(a.tipo?.toLowerCase())
        );
        if (!luaAtivaEste && tipoCasa !== "angular") return;
      }

      // ── Bloqueio real, testado nos 37 mapas reais: planeta SEM dignidade forte
      // (neutro, queda ou exílio) numa casa CADENTE (3ª/6ª/9ª/12ª — as mais fracas
      // na tradição) tem 44.3% de chance do próprio grau sair, contra 59.6% dos
      // demais estados (88 casos vs 152 outros) — quase 15 pontos de diferença,
      // confirmado com amostra maior que o teste anterior (que via só "neutro").
      // Isso é um BLOQUEIO de verdade: o testemunho do grau deste planeta não é
      // registrado quando essa condição bate — não é um número reduzido, é a
      // fonte sendo descartada porque ela é astrologicamente fraca demais para
      // valer como testemunho (planeta sem força essencial, em posição cadente).
      const fracoOuNeutro = dig === "neutro" || dig === "queda" || dig === "exilio";
      const emCasaCadente = ["3", "6", "9", "12"].includes(String(p.casa));
      const grauBloqueado = fracoOuNeutro && emCasaCadente;
      if (!grauBloqueado) {
        const sufixoSolar = condSolar === "cazimi" ? " — cazimi (reforçado pelo Sol)"
          : condSolar === "combusto" ? " — combusto (perto do Sol)"
          : condSolar === "sob os raios" ? " — sob os raios do Sol" : "";
        const sufixoLua = (luaPenalizados.has(n) && id !== "lua") ? " — tensionado pela Lua" : "";
        addPonto(n, 0, `${id} em ${p.grau}° (${dig})${sufixoLua}${sufixoSolar}`);
      }
    });

    // ── Triplicidade (Lilly): planeta que é o regente de triplicidade da própria seita
    // (mapa diurno/noturno) ganha dignidade extra — reforça tanto o próprio grau quanto
    // a própria casa. Ex: mapa noturno com Júpiter em Leão (fogo) — Júpiter é o regente
    // noturno do fogo, então ganha esse bônus onde quer que esteja.
    if (p.signo && ehRegenteDeTriplicidade(id, p.signo, seita)) {
      getNumeroGrau(p.grau, p.minutos).forEach(n => {
        if (graosFracosAnulados.has(n)) return;
        addPonto(n, 3, `${id} em ${p.signo} — regente de triplicidade por ${seita}`);
      });
      if (p.casa) {
        const casaNum = parseInt(p.casa);
        if (casaNum >= 1 && casaNum <= 12) {
          addPonto(casaNum, 2, `${id} em ${p.signo} (triplicidade por ${seita}) na ${casaNum}ª Casa`);
        }
      }
    }

    // Signo do planeta → número do signo (Lua e Fortuna sempre; outros pontos leves)
    if (["lua", "fortuna"].includes(id) && p.signo) {
      const signoObj = SIGNOS.find(s => s.nome === p.signo);
      if (signoObj) addPonto(signoObj.num, 2, `${id} em ${p.signo} (${signoObj.num}° signo)`);
    }

    // Casa do planeta — testemunho de presença, sem peso numérico. Saturno na casa
    // teve +21pp de vantagem sobre a taxa base nos 37 mapas testados (a mais forte
    // entre todos os planetas nessa regra), Fortuna e Nodo também se destacaram —
    // isso é registrado na doutrina (Fortuna e Nodo são pontos de destino/direção,
    // Saturno mesmo fraco por dignidade mostrou ser confiável aqui), não em peso.
    // BLOQUEIO: Vênus na casa é descartada como testemunho quando algum ângulo
    // (ASC/MC/DSC/IC) faz aspecto TENSO (quadratura ou oposição) com ela — testado
    // nos 37 mapas: Vênus sozinha na casa tem 63.6% de acerto, mas com esse
    // aspecto tenso presente cai para 33.3% (30 pontos abaixo). Os ângulos tensionando
    // Vênus parecem indicar que o testemunho dela não se confirma nesse mapa.
    if (p.casa) {
      const casaNum = parseInt(p.casa);
      if (casaNum >= 1 && casaNum <= 12) {
        const venusBloqueadaPorAngulo = id === "venus" && ["asc", "mc", "dsc", "ic"].some(ang => {
          const a = planetas[ang];
          return a?.aspectos?.some(x => x.planeta === "venus" && ["quadratura", "oposição", "oposicao"].includes(x.tipo));
        });
        if (!venusBloqueadaPorAngulo) {
          addPonto(casaNum, 0, `${id} na ${casaNum}ª Casa`);
        }
      }
    }
  });

  // ── Cadeia dispositora: para cada planeta forte (domicílio/exaltação ou angular),
  // percorre signo→regente→casa e registra as casas visitadas no caminho. Cada
  // caminho é um testemunho independente — sem somar nem aplicar teto de pontos.
  Object.entries(planetas).forEach(([id, p]) => {
    if (!p?.signo || ["asc", "mc", "dsc", "ic"].includes(id)) return;
    const forca = getForcaPlaneta(id, p.signo, p.casa);
    if (forca < 2) return; // só cadeias de planetas com alguma força
    const cadeia = cadeiaDispositora(planetas, id);
    cadeia.forEach(({ casa, caminho }) => {
      if (casa < 1 || casa > 12) return; // casa é número de casa astrológica (1-12), não número da loteria
      addPonto(casa, 0, `Cadeia dispositora: ${caminho.join(" → ")} (${casa}ª Casa)`);
    });
  });

  // ── ASC ──
  if (asc?.grau) {
    const nums = getNumeroGrau(asc.grau, asc.minutos);
    nums.forEach(n => addPonto(n, 3, `ASC em ${asc.grau}°`));
    if (asc.signo) {
      const signoObj = SIGNOS.find(s => s.nome === asc.signo);
      if (signoObj) addPonto(signoObj.num, 2, `ASC em ${asc.signo}`);
    }
  }

  // ── MC: grau, grau-1 (mais forte estatisticamente), signo ──
  if (mc?.grau) {
    const g = parseInt(mc.grau);
    const nums = getNumeroGrau(mc.grau, mc.minutos);
    nums.forEach(n => addPonto(n, 3, `MC em ${mc.grau}°`));
    if (g - 1 >= 1) addPonto(g - 1, 3, `MC grau-1`);
    if (mc.signo) {
      const signoObj = SIGNOS.find(s => s.nome === mc.signo);
      if (signoObj) addPonto(signoObj.num, 2, `MC em ${mc.signo}`);
    }
  }

  // ── Cúspides das casas: grau, grau+1 (via regra dos minutos) e grau-1 ──
  // Como o sistema de casas deriva várias cúspides do mesmo ASC, é comum que 4 casas
  // (ex: 1ª/4ª/7ª/10ª) caiam em graus muito próximos por construção geométrica — isso
  // é UM sinal (a posição do ASC), não 4 sinais independentes. Agrupamos por grau antes
  // de pontuar para não multiplicar o mesmo sinal várias vezes.
  if (cuspides) {
    const porGrau = {}; // grau -> lista de casas naquele grau
    Object.entries(cuspides).forEach(([casa, { grau, minutos }]) => {
      if (!grau && grau !== 0) return;
      const g = parseInt(grau);
      if (!porGrau[g]) porGrau[g] = { casas: [], minutos };
      porGrau[g].casas.push({ casa: parseInt(casa), minutos });
    });
    Object.entries(porGrau).forEach(([grauStr, { casas, minutos }]) => {
      const g = parseInt(grauStr);
      const casasTxt = casas.map(c => `${c.casa}ª`).join("/");
      const nums = getNumeroGrau(grauStr, casas[0].minutos);
      // pontuação única por grau, não por casa — casas concordantes só citadas na fonte
      nums.forEach(n => addPonto(n, 2, `Cúspide${casas.length > 1 ? "s" : ""} ${casasTxt} em ${g}°`));
      if (g - 1 >= 1) addPonto(g - 1, 1, `Cúspide${casas.length > 1 ? "s" : ""} ${casasTxt} grau-1`);
    });
  }

  // ── Quíron em Áries perto de 29-30° → sempre aponta para 25 ──
  if (quiron?.grau) {
    const g = parseInt(quiron.grau);
    if (g >= 27) addPonto(25, 3, `Quíron em ${g}° → 25`);
  }

  // ── Eixo 6+7 = 13, quando Júpiter na 6ª e a cúspide da 7ª está em Leão (regida pelo
  // Sol). A cúspide da 7ª nem sempre vem explícita no texto do mapa (12 de 38 mapas
  // testados não listam as 12 cúspides) — como a 7ª é sempre o signo oposto ao ASC
  // (geometria pura), calculamos a partir do ASC quando a cúspide não veio no texto.
  const signo7 = cuspides?.["7"]?.signo || (asc?.signo ? signoOposto(asc.signo) : null);
  if (jupiter?.casa === "6" && signo7 === "Leão") {
    addPonto(13, 3, "Júpiter na 6ª + 7ª em Leão (regida pelo Sol) → eixo 6+7=13");
  }

  // ── Júpiter exaltado (Câncer) gera grau, grau-1 e grau-2 ──
  if (jupiter?.grau && jupiter?.signo === "Câncer") {
    const g = parseInt(jupiter.grau);
    if (g - 1 >= 1) addPonto(g - 1, 3, `Júpiter exaltado grau-1`);
    if (g - 2 >= 1) addPonto(g - 2, 2, `Júpiter exaltado grau-2`);
  }

  // ── Vênus sempre gera grau+1 extra (além da regra padrão de minutos) ──
  if (venus?.grau) {
    const g = parseInt(venus.grau);
    if (g + 1 <= 25) addPonto(g + 1, 2, `Vênus grau+1`);
  }

  // ── DSC em Leão (ASC em Aquário) = 5° signo — regra corrigida (não 8°) ──
  if (asc?.signo === "Aquário") {
    addPonto(5, 2, "DSC em Leão = 5° signo");
  }

  // ── Recepção mútua entre qualquer par de planetas: ambas as casas ativadas ──
  // Doutrina clássica da horária — dois planetas cada um no signo regido pelo outro
  // formam um vínculo forte. Generalizado a partir do caso específico Lua-Júpiter que
  // testávamos antes. Validado nos 37 mapas reais: 21 casos de recepção mútua
  // encontrados, a casa de cada planeta envolvido bate com o resultado em 71.4% —
  // acima da taxa base de 59.5%. A Lua aparece na maioria dos casos (ela muda de
  // signo rápido, então é quem mais frequentemente entra em recepção com outro).
  {
    const PLANETAS_RECEPCAO = ["sol", "lua", "mercurio", "venus", "marte", "jupiter", "saturno"];
    for (let i = 0; i < PLANETAS_RECEPCAO.length; i++) {
      for (let j = i + 1; j < PLANETAS_RECEPCAO.length; j++) {
        const pa = planetas[PLANETAS_RECEPCAO[i]];
        const pb = planetas[PLANETAS_RECEPCAO[j]];
        if (!pa?.signo || !pb?.signo) continue;
        const sigA = SIGNOS.find(s => s.nome === pa.signo);
        const sigB = SIGNOS.find(s => s.nome === pb.signo);
        if (!sigA || !sigB) continue;
        const regenteA = NOME_REGENTE_PARA_ID[sigA.regente];
        const regenteB = NOME_REGENTE_PARA_ID[sigB.regente];
        if (regenteA === PLANETAS_RECEPCAO[j] && regenteB === PLANETAS_RECEPCAO[i]) {
          const nomePar = `${PLANETAS_RECEPCAO[i]}-${PLANETAS_RECEPCAO[j]}`;
          if (pa.casa) addPonto(parseInt(pa.casa), 3, `Recepção mútua ${nomePar}`);
          if (pb.casa && pb.casa !== pa.casa) addPonto(parseInt(pb.casa), 3, `Recepção mútua ${nomePar}`);
        }
      }
    }
  }

  // ── Regente (dispositor) da Fortuna: casa onde ele está ──
  if (fortuna?.signo) {
    const regente = regenteDoSigno(fortuna.signo);
    const regenteId = NOME_REGENTE_PARA_ID[regente];
    const pRegente = planetas[regenteId];
    if (pRegente?.casa) {
      addPonto(parseInt(pRegente.casa), 2, `Dispositor da Fortuna (${regente}) na ${pRegente.casa}ª Casa`);
    }
  }

  // ── Regente (dispositor) da Lua: casa onde ele está (a Lua é a "mensageira") ──
  if (lua?.signo) {
    const regente = regenteDoSigno(lua.signo);
    const regenteId = NOME_REGENTE_PARA_ID[regente];
    const pRegente = planetas[regenteId];
    if (pRegente?.casa && regenteId !== "lua") {
      addPonto(parseInt(pRegente.casa), 2, `Dispositor da Lua (${regente}) na ${pRegente.casa}ª Casa`);
    }
  }

  // ── Regente (dispositor) da cúspide da 5ª Casa — doutrina clássica da astrologia
  // horária: a 5ª Casa rege jogos de azar e especulação (é a casa usada há séculos
  // para questões de aposta/jogo). O regente do signo na cúspide é o significador
  // mais forte da casa — reforça tanto a casa onde ele está quanto seu próprio grau.
  // NOTA: testado isoladamente contra os 37 mapas reais, essa regra (junto com a da
  // 8ª logo abaixo) reduziu a média geral (9.38→9.27) quando comparada sozinha à
  // versão sem ela — não porque a doutrina esteja errada, mas porque o peso atual
  // compete demais com sinais que já eram fortes. Mantida no sistema; considerar
  // reduzir o peso (hoje 3/2) antes de usar como decisiva num jogo.
  if (cuspides?.["5"]?.signo) {
    const regente5 = regenteDoSigno(cuspides["5"].signo);
    const regenteId5 = NOME_REGENTE_PARA_ID[regente5];
    const pRegente5 = planetas[regenteId5];
    if (pRegente5?.casa) {
      addPonto(parseInt(pRegente5.casa), 3, `Dispositor da 5ª Casa (${regente5}, jogos de azar) na ${pRegente5.casa}ª Casa`);
    }
    if (pRegente5?.grau) {
      getNumeroGrau(pRegente5.grau, pRegente5.minutos).forEach(n =>
        addPonto(n, 2, `Dispositor da 5ª Casa (${regente5}) em ${pRegente5.grau}°`)
      );
    }
  }

  // ── Regente (dispositor) da cúspide da 8ª Casa — doutrina clássica: a 8ª Casa
  // rege dinheiro/recursos de terceiros (ganhos, prêmios, heranças — não o que é
  // ganho pelo próprio esforço, e sim o que vem de fora). Peso mais leve que a 5ª,
  // por ser um significador secundário nessa tradição.
  if (cuspides?.["8"]?.signo) {
    const regente8 = regenteDoSigno(cuspides["8"].signo);
    const regenteId8 = NOME_REGENTE_PARA_ID[regente8];
    const pRegente8 = planetas[regenteId8];
    if (pRegente8?.casa) {
      addPonto(parseInt(pRegente8.casa), 2, `Dispositor da 8ª Casa (${regente8}, prêmios/ganhos alheios) na ${pRegente8.casa}ª Casa`);
    }
  }

  // ── Cúspide da 5ª Casa em Touro ("terreno do jogo"), reforçada pela presença de
  // Marte no mapa — corrigido: a versão anterior checava o signo do PRÓPRIO Marte
  // (marte?.signo === "Touro"), não a cúspide da 5ª casa, que é o que a regra
  // pretendia representar segundo seu próprio comentário original. ──
  if (cuspides?.["5"]?.signo === "Touro" && marte) {
    addPonto(5, 1, "Cúspide da 5ª Casa em Touro — terreno do jogo, reforçado por Marte no mapa");
  }

  // ── Qualquer planeta com aspecto registrado reforça a casa do destino ──
  // Generalizado a partir da regra que só cobria o MC. Testado nos 37 mapas reais,
  // separando por tipo de aspecto: harmônico (trígono/sextil/conjunção) 67.7%,
  // tenso (quadratura/oposição) 68.8%, menor (quincúncio/octil) 71.3% — todos bem
  // acima da base de 59.5%, SEM diferença real entre eles. Testamos também separar
  // por exatidão do orbe (muito exato vs largo): também sem diferença (67-71% em
  // qualquer faixa). O que importa é o planeta TER aspecto registrado (sinal de que
  // está ativo no mapa), não o tipo nem a precisão do aspecto.
  // NOTA: generalizar isso reduz a média agregada nos 37 mapas testados (9.19→9.11),
  // porque um mapa típico tem ~50 aspectos e reforçar a casa de cada um dilui a
  // diferenciação entre casas. Mantida mesmo assim — o sinal em si é real e
  // validado (67-71% vs base de 59.5%); o ajuste fino de peso fica para depois,
  // com mais mapas, em vez de descartar uma fonte real por causa da média agregada.
  Object.entries(planetas).forEach(([origemId, pOrigem]) => {
    if (!pOrigem?.aspectos) return;
    pOrigem.aspectos.forEach(asp => {
      const alvo = planetas[asp.planeta];
      if (alvo?.casa) {
        const casaNum = parseInt(alvo.casa);
        if (casaNum >= 1 && casaNum <= 12) {
          addPonto(casaNum, 1, `${origemId} em aspecto (${asp.tipo}) com ${asp.planeta} → reforça ${casaNum}ª Casa`);
        }
      }
    });
  });

  // ── IC em conjunção com Marte confirma fortemente a casa dele ──
  // Marte na casa sozinho é fraco (35.7% nos 37 mapas — abaixo até da taxa base),
  // mas quando o IC (Fundo do Céu, base/raiz do mapa) está em conjunção com Marte,
  // a taxa sobe para 66.7% — 31 pontos de diferença, o refinamento mais forte
  // encontrado entre todos os aspectos testados. Isso é doutrinariamente coerente:
  // o IC confirmando Marte por conjunção é testemunho de fundamentação real,
  // diferente de Marte "solto" sem esse apoio. Já é parcialmente coberto pela
  // regra genérica de aspecto acima, mas aqui ganha destaque próprio porque o
  // sinal é forte demais para ficar diluído entre os ~50 aspectos de um mapa típico.
  if (marte?.casa) {
    const icObj = planetas.ic;
    const icConfirmaMarte = icObj?.aspectos?.some(a => a.planeta === "marte" && a.tipo === "conjunção");
    if (icConfirmaMarte) {
      addPonto(parseInt(marte.casa), 0, `IC em conjunção com Marte → confirma fortemente a ${marte.casa}ª Casa`);
    }
  }

  // ── Ângulo (ASC/MC/DSC/IC) em aspecto harmônico com Mercúrio confirma a casa dele ──
  // Mercúrio na casa sozinho já é um testemunho razoável (65.5%), mas quando algum
  // ângulo faz aspecto HARMÔNICO (trígono, sextil ou conjunção) com ele, a taxa sobe
  // para 87.5% — 22 pontos de diferença, confirmado em 2 blocos temporais distintos
  // (não é coincidência de uma única janela). Mesmo padrão do IC-Marte: o ângulo
  // confirmando por aspecto harmônico é testemunho de reforço real.
  if (mercurio?.casa) {
    const mercurioConfirmadoPorAngulo = ["asc", "mc", "dsc", "ic"].some(ang => {
      const a = planetas[ang];
      return a?.aspectos?.some(x => x.planeta === "mercurio" && ["trígono", "trigono", "sextil", "conjunção", "conjuncao"].includes(x.tipo));
    });
    if (mercurioConfirmadoPorAngulo) {
      addPonto(parseInt(mercurio.casa), 0, `Ângulo em aspecto harmônico com Mercúrio → confirma fortemente a ${mercurio.casa}ª Casa`);
    }
  }

  // ── Mercúrio na 5ª Casa aponta para o número 17 ──
  // Achado empírico, sem explicação doutrinária clara ainda — encontrado comparando
  // sistematicamente o céu inteiro entre concursos onde o 17 saiu vs não saiu (não
  // procurando "o que gera o número 17" por grau/casa direta, mas o que é comum no
  // mapa quando ele aparece). Testado nos 37 mapas: quando Mercúrio está na 5ª Casa,
  // o 17 sai em 77% dos concursos (20/26) contra 36% quando não está (4/11) — 41
  // pontos de diferença, confirmado em pelo menos 8 blocos temporais de alternância
  // (Mercúrio muda de casa com frequência, não é uma janela única). Continua válido
  // mesmo sem explicação astrológica aparente — se não se confirmar com mais mapas,
  // remover.
  if (mercurio?.casa === "5") {
    addPonto(17, 0, "Mercúrio na 5ª Casa → sinal empírico para o 17 (77% vs 36%, sem explicação doutrinária ainda)");
  }

  // ── MC em quadratura com Vênus → sinal complementar para o 17 ──
  // Investigando os casos "órfãos" onde 17 saiu SEM Mercúrio na 5ª: isolando só
  // esses casos, "MC em quadratura com Vênus" teve 57.1% (4/7) contra 33.3% (2/6)
  // quando ausente — quase 24pp de diferença, mesmo com amostra pequena. Registrado
  // como sinal complementar (não substitui o de cima, soma outro testemunho
  // possível para o mesmo número) — mesma lógica: sem explicação doutrinária
  // pronta, mas é correlação real encontrada na investigação, registrada por
  // decisão do usuário de não descartar sinal só por falta de teoria.
  if (mc?.aspectos?.some(a => a.planeta === "venus" && a.tipo === "quadratura")) {
    addPonto(17, 0, "MC em quadratura com Vênus → sinal empírico complementar para o 17");
  }

  // ── Co-significadores fixos (William Lilly, doutrina clássica) ──
  // Cada planeta é regente natural de duas casas específicas, independente de onde
  // o ASC está: Saturno = 1ª/8ª, Júpiter = 2ª/9ª, Marte = 3ª/10ª, Sol = 4ª/11ª,
  // Vênus = 5ª/12ª, Mercúrio = 6ª (Lua = 7ª, não testada aqui por já ter tratamento
  // próprio extenso no sistema). Fonte: pesquisa web sobre astrologia horária
  // (astrologiahoraria.blogspot.com). Testado nos 37 mapas: quando o co-significador
  // está com dignidade FORTE (domicílio ou exaltação), suas casas naturais saem em
  // 72.1% dos casos (31/43) contra 58.5% (213/364) quando não está — 13.6pp de
  // diferença. Confirmado em 3 blocos temporais (Júpiter maio-junho, Mercúrio maio,
  // Sol final de julho) — evidência moderada, não tão robusta quanto outros achados,
  // mas registrada por decisão do usuário de incluir todo sinal encontrado.
  {
    const COSIGNIFICADORES = {
      saturno: [1, 8], jupiter: [2, 9], marte: [3, 10],
      sol: [4, 11], venus: [5, 12], mercurio: [6],
    };
    for (const [planetaId, casasNaturais] of Object.entries(COSIGNIFICADORES)) {
      const p = planetas[planetaId];
      if (!p?.signo) continue;
      const dig = getDignidadePlaneta(planetaId, p.signo);
      if (dig === "domicilio" || dig === "exaltacao") {
        casasNaturais.forEach(casa => {
          addPonto(casa, 0, `${planetaId} (${dig}) — co-significador natural da ${casa}ª Casa fortalecido`);
        });
      }
    }
  }

  // ── Planeta na própria casa que ele rege (regência por casa, não por signo) ──
  // Equivalente a "domicílio local": quando um planeta está posicionado numa casa
  // cuja cúspide é do signo que ele mesmo rege (ex: Marte numa casa com cúspide em
  // Áries), isso é um testemunho de fortalecimento próprio muito citado na doutrina
  // clássica. Testado nos 37 mapas: 86.7% de acerto (13/15 casos) contra 64.3% dos
  // demais — 22 pontos de diferença, confirmado em pelo menos 4 blocos temporais
  // distintos com Mercúrio, Vênus e Lua (não é coincidência de uma única janela).
  if (cuspides) {
    const PLANETAS_TRADICIONAIS = new Set(Object.values(NOME_REGENTE_PARA_ID));
    Object.entries(planetas).forEach(([id, p]) => {
      if (!p?.casa || !PLANETAS_TRADICIONAIS.has(id)) return;
      const casaNum = parseInt(p.casa);
      if (casaNum < 1 || casaNum > 12) return;
      const cuspideSigno = cuspides[casaNum]?.signo;
      if (!cuspideSigno) return;
      const regente = regenteDoSigno(cuspideSigno);
      const regenteId = NOME_REGENTE_PARA_ID[regente];
      if (regenteId === id) {
        addPonto(casaNum, 0, `${id} rege a própria ${casaNum}ª Casa onde está (cúspide em ${cuspideSigno}) → fortalecimento próprio`);
      }
    });
  }

  // ── Recepção em cascata: planeta neutro cujo dispositor (regente do próprio
  // signo) está em domicílio ou exaltação recebe reforço do grau ──
  // Doutrina clássica: um planeta sem dignidade própria (neutro) "pede emprestada"
  // a força de quem rege o signo em que está — se esse regente estiver bem
  // dignificado, o planeta neutro é considerado "recebido" e ganha crédito.
  // Testado nos 37 mapas completos (não depende de aspecto, funciona também nos
  // 11 mapas de maio-junho sem dados de aspecto): planeta neutro com dispositor
  // forte teve 73.7% de acerto do grau (14/19) contra 50% quando o dispositor
  // está fraco (queda/exílio) — 23.7pp de diferença, confirmado em 3 blocos
  // temporais bem distintos (maio, meio de julho, final de julho) com três
  // combinações diferentes de planeta/dispositor (Sol-Mercúrio, Sol/Mercúrio-
  // Lua, Júpiter-Sol) — a evidência mais diversificada encontrada até agora.
  Object.entries(planetas).forEach(([id, p]) => {
    if (!["sol", "mercurio", "venus", "marte", "jupiter", "saturno"].includes(id)) return;
    if (!p?.grau || !p?.signo) return;
    const dig = getDignidadePlaneta(id, p.signo);
    if (dig !== "neutro") return;
    const regente = regenteDoSigno(p.signo);
    const regenteId = NOME_REGENTE_PARA_ID[regente];
    if (!regenteId || regenteId === id) return;
    const pRegente = planetas[regenteId];
    if (!pRegente?.signo) return;
    const digRegente = getDignidadePlaneta(regenteId, pRegente.signo);
    if (digRegente === "domicilio" || digRegente === "exaltacao") {
      const nums = getNumeroGrau(p.grau, p.minutos);
      nums.forEach(n => addPonto(n, 0, `${id} recebido pelo dispositor ${regenteId} (${digRegente}) → grau reforçado`));
    }
  });

  // ── Saturno ativado pelo Sol (regente da loteria) via aspecto — mesmo em queda ──
  if (saturno?.grau && sol?.aspectos) {
    const solAtivaSaturno = sol.aspectos?.some(a => a.planeta === "saturno" &&
      ["sextil", "trígono", "conjunção"].includes(a.tipo?.toLowerCase()));
    if (solAtivaSaturno) {
      const nums = getNumeroGrau(saturno.grau, saturno.minutos);
      nums.forEach(n => addPonto(n, 2, "Saturno ativado pelo Sol (regente da loteria)"));
    }
  }

  // ── Combinação planetária (2+ planetas agrupados) reforça a casa do grupo ──
  // Validado nos 37 mapas reais: quando 2 ou mais planetas ficam a até 8° um do outro
  // (conjunção ampla), a CASA onde esse grupo está aparece no resultado em 71% dos
  // casos, contra a taxa base de 59.5% para qualquer casa 1-12 — uma vantagem real de
  // +11.5 pontos percentuais. O grau médio do grupo, testado à parte, NÃO mostrou
  // vantagem (54.8%, abaixo da base) — por isso só a casa é usada aqui, não o grau.
  {
    const PLANETAS_PARA_GRUPO = ["sol","lua","mercurio","venus","marte","jupiter","saturno","urano","netuno","plutao"];
    const posicoesGrupo = [];
    for (const id of PLANETAS_PARA_GRUPO) {
      const p = planetas[id];
      if (!p?.signo) continue;
      const abs = posicaoAbsoluta(p.signo, p.grau, p.minutos);
      if (abs !== null) posicoesGrupo.push({ id, abs, casa: p.casa });
    }
    posicoesGrupo.sort((a, b) => a.abs - b.abs);

    const grupos = [];
    let atual = posicoesGrupo.length ? [posicoesGrupo[0]] : [];
    for (let i = 1; i < posicoesGrupo.length; i++) {
      if (posicoesGrupo[i].abs - posicoesGrupo[i - 1].abs <= 8) {
        atual.push(posicoesGrupo[i]);
      } else {
        if (atual.length >= 2) grupos.push(atual);
        atual = [posicoesGrupo[i]];
      }
    }
    if (atual.length >= 2) grupos.push(atual);

    grupos.forEach(g => {
      const casasNoGrupo = [...new Set(g.map(p => p.casa).filter(Boolean))];
      const nomesGrupo = g.map(p => p.id).join("+");
      casasNoGrupo.forEach(c => {
        const casaNum = parseInt(c);
        if (casaNum >= 1 && casaNum <= 12) {
          addPonto(casaNum, 2, `Combinação planetária (${nomesGrupo}) na ${casaNum}ª Casa`);
        }
      });
    });
  }

  // ── Marca números penalizados pela Lua (não mais bloqueados por completo) ──
  Object.keys(scores).forEach(n => {
    if (luaPenalizados.has(parseInt(n))) scores[n].bloqueado = true;
  });

  return scores;
}

// ─── Design tokens ──────────────────────────────────────────────────────────
const T = {
  bg: "#0A0D16",
  bgElev: "#12162355",
  surface: "#141826",
  surface2: "#1B2033",
  surfaceHover: "#20263B",
  border: "#2A3049",
  borderSoft: "#20263A",
  gold: "#D4AF5F",
  goldSoft: "#D4AF5F22",
  goldText: "#E8C878",
  text: "#EDEEF4",
  textDim: "#9498AC",
  textFaint: "#5D6178",
  green: "#3FB88A",
  greenSoft: "#3FB88A1A",
  red: "#E5626A",
  redSoft: "#E5626A1A",
  amber: "#D4A94F",
  blue: "#6E8FD9",
  fontDisplay: "Georgia, 'Iowan Old Style', 'Palatino Linotype', serif",
  fontSans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'JetBrains Mono', 'SF Mono', Menlo, monospace",
  fontNum: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

// A escolha dos 15 números finais SEM soma/peso/contagem/estatística é uma decisão
// em aberto (ver registro no início de analisarMapa). Por ora, esta função devolve
// todos os números que têm pelo menos um testemunho registrado, em ordem numérica —
// sem ranking, sem corte automático em 15. A UI decide o que fazer com a lista.
function numerosComTestemunho(scores) {
  return Object.entries(scores)
    .filter(([, s]) => s.fontes.length > 0)
    .map(([n]) => parseInt(n))
    .sort((a, b) => a - b);
}

const glifos = {
  sol: "☉", lua: "☽", mercurio: "☿", venus: "♀", marte: "♂", jupiter: "♃",
  saturno: "♄", urano: "⛢", netuno: "♆", plutao: "♇", nodo: "☊", lilith: "⚸",
  quiron: "⚷", fortuna: "⊕", vertice: "✦", asc: "AS", mc: "MC",
};

// ─── Componentes base ─────────────────────────────────────────────────────────
function ZodiacRing({ size = 340 }) {
  const marks = Array.from({ length: 24 }, (_, i) => i);
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.16, pointerEvents: "none" }}>
      <circle cx="100" cy="100" r="94" fill="none" stroke={T.gold} strokeWidth="0.4" />
      <circle cx="100" cy="100" r="78" fill="none" stroke={T.gold} strokeWidth="0.3" />
      {marks.map(i => {
        const angle = (i / 24) * Math.PI * 2;
        const inner = i % 2 === 0 ? 78 : 84;
        const x1 = 100 + inner * Math.cos(angle);
        const y1 = 100 + inner * Math.sin(angle);
        const x2 = 100 + 94 * Math.cos(angle);
        const y2 = 100 + 94 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={T.gold} strokeWidth="0.4" />;
      })}
      {["☉", "☽", "☿", "♀", "♂", "♃", "♄", "⛢", "♆", "♇", "☊", "⚸"].map((g, i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const x = 100 + 62 * Math.cos(angle);
        const y = 100 + 62 * Math.sin(angle);
        return <text key={i} x={x} y={y} fontSize="9" fill={T.gold} textAnchor="middle" dominantBaseline="middle">{g}</text>;
      })}
    </svg>
  );
}

function Label({ children, style }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textFaint, marginBottom: 8, ...style }}>
      {children}
    </div>
  );
}

function Botao({ children, onClick, variant = "primary", full, small, disabled, style }) {
  const variants = {
    primary: { background: T.gold, color: "#1A1508", border: "none" },
    ghost: { background: "transparent", color: T.textDim, border: `1px solid ${T.border}` },
    success: { background: T.green, color: "#06231A", border: "none" },
    danger: { background: "transparent", color: T.red, border: "none" },
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} disabled={disabled}
      style={{
        ...v, width: full ? "100%" : "auto",
        padding: small ? "7px 12px" : "12px 20px",
        borderRadius: 8, fontSize: small ? 12 : 14, fontWeight: 600,
        fontFamily: T.fontSans, cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1, transition: "opacity 0.15s, transform 0.1s",
        letterSpacing: "0.01em",
        ...style
      }}
      onMouseDown={e => !disabled && (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}

function Card({ children, style, ...rest }) {
  return (
    <div {...rest} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 16, ...style }}>
      {children}
    </div>
  );
}

function Input({ ...props }) {
  return (
    <input {...props}
      style={{
        fontSize: 13, padding: "9px 11px", borderRadius: 8, border: `1px solid ${T.border}`,
        background: T.surface2, color: T.text, fontFamily: T.fontSans, outline: "none",
        width: "100%", boxSizing: "border-box", ...props.style
      }}
    />
  );
}

function PlanetaInput({ config, valor, onChange }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 56px 56px 96px 52px", gap: 6, alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${T.borderSoft}` }}>
      <span style={{ fontSize: 13, color: T.textDim, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 15, color: T.gold, width: 18, textAlign: "center", fontFamily: T.fontDisplay }}>{glifos[config.id] || "•"}</span>
        {config.nome}
      </span>
      <Input type="number" min="0" max="29" placeholder="Grau" value={valor?.grau || ""} onChange={e => onChange({ ...valor, grau: e.target.value })} />
      <Input type="number" min="0" max="59" placeholder="Min" value={valor?.minutos || ""} onChange={e => onChange({ ...valor, minutos: e.target.value })} />
      <select
        value={valor?.signo || ""}
        onChange={e => onChange({ ...valor, signo: e.target.value })}
        style={{ fontSize: 12, padding: "9px 8px", borderRadius: 8, border: `1px solid ${T.border}`, background: T.surface2, color: T.text, width: "100%", fontFamily: T.fontSans }}
      >
        <option value="">Signo</option>
        {SIGNOS.map(s => <option key={s.nome} value={s.nome}>{s.nome}</option>)}
      </select>
      {config.tipo === "planeta" ? (
        <Input type="number" min="1" max="12" placeholder="Casa" value={valor?.casa || ""} onChange={e => onChange({ ...valor, casa: e.target.value })} />
      ) : <div />}
    </div>
  );
}

// A escolha final de quais números vão para o jogo é uma decisão em aberto (ver
// registro em analisarMapa) — esta lista mostra TODOS os números que têm pelo
// menos um testemunho astrológico no mapa, sem ranking, sem corte em 15, sem
// cor por "força". Cabe à pessoa olhar as fontes de cada um e decidir.
function RankingVisual({ scores, onSelect, selecionado }) {
  const numeros = numerosComTestemunho(scores);

  return (
    <div>
      <p style={{ fontSize: 12, color: T.textFaint, marginBottom: 16 }}>
        {numeros.length} números têm ao menos um testemunho astrológico neste mapa. Toque em um para ver as fontes.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {numeros.map(num => {
          const bloqueado = scores[num].bloqueado;
          return (
            <div key={num} onClick={() => onSelect(num)} style={{
              display: "grid", gridTemplateColumns: "26px 1fr", gap: 10, alignItems: "center",
              cursor: "pointer", padding: "3px 6px", borderRadius: 6,
              background: selecionado === num ? T.surfaceHover : "transparent"
            }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: bloqueado ? T.red : T.text, textAlign: "right", fontFamily: T.fontNum }}>{num}</span>
              <span style={{ fontSize: 11, color: T.textFaint }}>
                {scores[num].fontes.length} testemunho{scores[num].fontes.length !== 1 ? "s" : ""}{bloqueado ? " · penalizado pela Lua" : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DetalheNumero({ num, score }) {
  if (!score) return null;
  return (
    <Card style={{ marginTop: 12, background: T.surface2 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: 30, fontWeight: 800, color: T.text, fontFamily: T.fontNum }}>{num}</span>
        <span style={{ fontSize: 12, color: T.textFaint, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {score.fontes.length} testemunho{score.fontes.length !== 1 ? "s" : ""}
        </span>
      </div>
      {score.fontes.length === 0
        ? <p style={{ fontSize: 12, color: T.textFaint, margin: 0 }}>Sem sinal identificado neste mapa.</p>
        : score.fontes.map((f, i) => (
          <div key={i} style={{ fontSize: 12, color: T.textDim, padding: "5px 0", borderBottom: i < score.fontes.length - 1 ? `1px solid ${T.borderSoft}` : "none" }}>
            <span style={{ color: T.gold, marginRight: 6 }}>·</span>{f}
          </div>
        ))
      }
    </Card>
  );
}

// Calcula, para cada número 1-25, a sequência atual: quantos concursos seguidos
// (contando do mais recente para trás) ele saiu ou ficou de fora.
function calcularSequencias(concursosOrdenados) {
  const seq = {};
  for (let n = 1; n <= 25; n++) {
    let tipo = null; // "saindo" ou "fora"
    let contagem = 0;
    for (let i = concursosOrdenados.length - 1; i >= 0; i--) {
      const saiu = concursosOrdenados[i].numeros.includes(n);
      if (tipo === null) {
        tipo = saiu ? "saindo" : "fora";
        contagem = 1;
      } else if ((saiu && tipo === "saindo") || (!saiu && tipo === "fora")) {
        contagem++;
      } else {
        break;
      }
    }
    seq[n] = { tipo: tipo || "fora", contagem };
  }
  return seq;
}

function corSequencia(tipo, contagem) {
  if (tipo === "saindo") {
    if (contagem >= 4) return { bg: T.gold, fg: "#1A1508", border: T.gold, label: "quente" };
    if (contagem >= 2) return { bg: T.goldSoft, fg: T.goldText, border: T.gold + "66", label: "saindo" };
    return { bg: T.greenSoft, fg: T.green, border: T.green + "55", label: "saiu" };
  }
  if (contagem >= 5) return { bg: T.redSoft, fg: T.red, border: T.red + "66", label: "muito atrasado" };
  if (contagem >= 3) return { bg: "#E5626A14", fg: T.textDim, border: T.border, label: "atrasado" };
  return { bg: T.surface2, fg: T.textFaint, border: T.border, label: "fora" };
}

function GridSequencias({ concursos }) {
  const ordenados = [...concursos]; // já vem em ordem cronológica (mais antigo → mais recente)
  const seq = calcularSequencias(ordenados);
  const numeros = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
        {numeros.map(n => {
          const { tipo, contagem } = seq[n];
          const cor = corSequencia(tipo, contagem);
          return (
            <div key={n} style={{
              background: cor.bg, border: `1px solid ${cor.border}`, borderRadius: 10,
              padding: "10px 6px", textAlign: "center", position: "relative"
            }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: cor.fg, fontFamily: T.fontNum, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: cor.fg, opacity: 0.85, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                {tipo === "saindo" ? `${contagem}× seguidas` : `${contagem} sem sair`}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16, fontSize: 11, color: T.textFaint }}>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: T.gold, display: "inline-block" }} /> quente (4+ seguidas)</span>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: T.goldSoft, border: `1px solid ${T.gold}66`, display: "inline-block" }} /> saindo</span>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: T.redSoft, border: `1px solid ${T.red}66`, display: "inline-block" }} /> muito atrasado (5+)</span>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: T.surface2, border: `1px solid ${T.border}`, display: "inline-block" }} /> neutro</span>
      </div>
    </div>
  );
}

// Distribui uma escala de cor de vermelho (frio) a dourado (quente) proporcional
// ao desvio de cada número em relação à média esperada (15/25 = 60%).
function corDesvio(pct) {
  const desvio = pct - 60; // pontos percentuais acima/abaixo do esperado
  if (desvio >= 8) return T.gold;
  if (desvio >= 3) return T.green;
  if (desvio <= -8) return T.red;
  if (desvio <= -3) return "#C97A80";
  return T.textFaint;
}

// ─── Estatística honesta de validação ──────────────────────────────────────
// Escolhendo 15 dezenas quaisquer entre 25, com o sorteio também tirando 15 de 25,
// o valor esperado de acertos é sempre 9,0 — não importa o critério de escolha
// (é combinatória pura: cada dezena tem 15/25 = 60% de chance de sair, e a
// esperança é linear). A variância de acertos por concurso, sob a hipótese de que
// não há nenhum sinal preditivo real, segue a distribuição hipergeométrica:
// Var = n·(K/N)·(1-K/N)·(N-n)/(N-1), com N=25, K=15, n=15 → Var = 1,5 (dp ≈ 1,2247).
const BASELINE_MEDIA = 9;
const BASELINE_DP_INDIVIDUAL = Math.sqrt(15 * (15 / 25) * (1 - 15 / 25) * ((25 - 15) / (25 - 1)));

function media(arr) {
  if (!arr.length) return null;
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

function desvioPadraoAmostral(arr) {
  if (arr.length < 2) return null;
  const m = media(arr);
  const somaQuad = arr.reduce((s, v) => s + (v - m) ** 2, 0);
  return Math.sqrt(somaQuad / (arr.length - 1));
}

// Compara a média observada de acertos (num conjunto de concursos) contra o baseline
// de 9,0 esperado por acaso. Retorna o z-score e uma classificação honesta —
// |z| < 1,96 significa que o resultado está dentro do que o acaso já explica sozinho,
// mesmo sem nenhum "método" por trás da escolha das dezenas.
function compararComBaseline(acertos) {
  const n = acertos.length;
  if (n === 0) return null;
  const m = media(acertos);
  const dpMedia = BASELINE_DP_INDIVIDUAL / Math.sqrt(n);
  const z = (m - BASELINE_MEDIA) / dpMedia;
  const significativo = Math.abs(z) >= 1.96;
  return {
    n, media: m, dpAmostral: desvioPadraoAmostral(acertos),
    z, significativo,
    ciBaixo: BASELINE_MEDIA - 1.96 * dpMedia,
    ciAlto: BASELINE_MEDIA + 1.96 * dpMedia,
  };
}

function PainelEstatisticas({ concursos, historicoCompleto, corteCalibracao, onChangeCorte }) {
  if (concursos.length === 0) return (
    <div style={{ textAlign: "center", padding: 48, color: T.textFaint, fontSize: 14 }}>
      Registre resultados no Histórico para ver as estatísticas.
    </div>
  );

  const total = concursos.length;
  const seq = calcularSequencias(concursos);
  const maisQuente = Object.entries(seq).filter(([, s]) => s.tipo === "saindo").sort((a, b) => b[1].contagem - a[1].contagem)[0];
  const maisAtrasado = Object.entries(seq).filter(([, s]) => s.tipo === "fora").sort((a, b) => b[1].contagem - a[1].contagem)[0];

  // ── Performance do método: acertos nos concursos que já têm mapa + jogo gerado + resultado ──
  const comJogoEResultado = (historicoCompleto || []).filter(h =>
    h.jogoGerado?.length > 0 && h.resultado?.length > 0
  );
  const acertosPorConcurso = comJogoEResultado.map(h => ({
    concurso: h.concurso, data: h.data,
    acertos: h.jogoGerado.filter(n => h.resultado.includes(n)).length
  }));
  const mediaAcertos = acertosPorConcurso.length > 0
    ? (acertosPorConcurso.reduce((s, a) => s + a.acertos, 0) / acertosPorConcurso.length)
    : null;
  const melhorAcerto = acertosPorConcurso.length > 0 ? Math.max(...acertosPorConcurso.map(a => a.acertos)) : null;
  const distribuicaoAcertos = {};
  for (let i = 0; i <= 15; i++) distribuicaoAcertos[i] = 0;
  acertosPorConcurso.forEach(a => { distribuicaoAcertos[a.acertos] = (distribuicaoAcertos[a.acertos] || 0) + 1; });

  // ── Validação honesta: separa concursos usados para calibrar as regras (tudo até
  // o "corte") dos concursos posteriores a ele, nunca vistos enquanto as regras eram
  // ajustadas. Só a segunda faixa mede algo real — a primeira é, por construção,
  // otimizada para parecer boa (é o mesmo dado usado para escolher a regra). ──
  // ── Validação honesta: separa concursos usados para calibrar as regras (tudo até
  // a data de corte) dos concursos posteriores a ela, nunca vistos enquanto as regras
  // eram ajustadas. Só a segunda faixa mede algo real — a primeira é, por construção,
  // otimizada para parecer boa (é o mesmo dado usado para escolher a regra).
  // Comparamos por DATA (toda entrada tem data), não por número de concurso — 9
  // registros do backup original nunca tiveram o concurso preenchido, e comparar por
  // concurso os classificaria errado (sempre "0", sempre calibração). ──
  const chaveDataStr = (dataStr) => {
    if (!dataStr) return null;
    const [d, m, y] = dataStr.split("/");
    if (!y) return null;
    return parseInt(`${y}${(m || "").padStart(2, "0")}${(d || "").padStart(2, "0")}`);
  };
  const corteNum = chaveDataStr(corteCalibracao);
  const acertosCalibracao = acertosPorConcurso.filter(a => {
    const k = chaveDataStr(a.data);
    return k == null || corteNum == null ? true : k <= corteNum;
  }).map(a => a.acertos);
  const acertosHoldout = acertosPorConcurso.filter(a => {
    const k = chaveDataStr(a.data);
    return k != null && corteNum != null && k > corteNum;
  }).map(a => a.acertos);
  const statsGeral = compararComBaseline(acertosPorConcurso.map(a => a.acertos));
  const statsCalibracao = compararComBaseline(acertosCalibracao);
  const statsHoldout = compararComBaseline(acertosHoldout);

  // ── Frequência relativa (desvio da média esperada de 60%), só os destaques ──
  const freq = {};
  for (let i = 1; i <= 25; i++) freq[i] = 0;
  concursos.forEach(c => c.numeros.forEach(n => { if (freq[n] !== undefined) freq[n]++; }));
  const freqPct = Object.entries(freq).map(([n, f]) => ({ n: parseInt(n), pct: (f / total) * 100, f }));
  const maisFrequentes = [...freqPct].sort((a, b) => b.pct - a.pct).slice(0, 5);
  const menosFrequentes = [...freqPct].sort((a, b) => a.pct - b.pct).slice(0, 5);

  return (
    <div>
      {/* Performance do método — só aparece quando há concursos com mapa+jogo+resultado */}
      {mediaAcertos !== null && (
        <div style={{ marginBottom: 24 }}>
          <Label>Performance do método</Label>

          <div style={{
            padding: "10px 12px", borderRadius: 8, marginBottom: 14, fontSize: 11.5, lineHeight: 1.55,
            background: T.surface2, border: `1px solid ${T.border}`, color: T.textDim
          }}>
            <b style={{ color: T.textDim }}>Ponto de partida:</b> escolhendo 15 dezenas quaisquer entre 25 — por qualquer critério —,
            o número esperado de acertos já é <b style={{ color: T.text }}>9,0 por acaso</b>, porque cada dezena tem 60% de chance de sair.
            Uma média de 9 a 10 não indica, por si só, nenhum sinal real. Por isso os números abaixo são comparados
            contra esse ponto de partida, e não só mostrados isolados.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <Card style={{ background: T.surface2 }}>
              <Label>Média geral</Label>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: T.fontNum, color: T.text }}>
                {mediaAcertos.toFixed(2)}<span style={{ fontSize: 14, color: T.textFaint }}> / 15</span>
              </div>
              <div style={{ fontSize: 10, color: T.textFaint, marginTop: 2 }}>
                {statsGeral?.dpAmostral != null ? `dp ${statsGeral.dpAmostral.toFixed(2)} · ` : ""}{acertosPorConcurso.length} concursos
              </div>
            </Card>
            <Card style={{ background: T.surface2 }}>
              <Label>Melhor resultado</Label>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: T.fontNum, color: T.gold }}>
                {melhorAcerto}<span style={{ fontSize: 14, color: T.textFaint }}> / 15</span>
              </div>
              <div style={{ fontSize: 10, color: T.textFaint, marginTop: 2 }}>baseline aleatório: 9,0</div>
            </Card>
          </div>

          <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 60 }}>
            {Object.entries(distribuicaoAcertos).map(([n, c]) => (
              <div key={n} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{
                  width: "100%", background: c > 0 ? (parseInt(n) >= 11 ? T.gold : T.blue) : T.surface2,
                  height: c > 0 ? `${Math.max(8, (c / Math.max(...Object.values(distribuicaoAcertos))) * 44)}px` : 4,
                  borderRadius: 3, opacity: c > 0 ? 0.85 : 1
                }} />
                <span style={{ fontSize: 9, color: T.textFaint, fontFamily: T.fontNum }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 10, color: T.textFaint, margin: "6px 0 0", textAlign: "center" }}>número de acertos por concurso analisado</p>

          {/* ── Corte de calibração e validação honesta (fora da amostra) ── */}
          <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${T.borderSoft}` }}>
            <Label>Validação honesta (fora da amostra)</Label>
            <p style={{ fontSize: 11.5, color: T.textFaint, margin: "0 0 12px", lineHeight: 1.55 }}>
              As regras foram ajustadas olhando o histórico já registrado — isso significa que a média "geral" acima
              inclui os mesmos concursos usados para calibrar as regras, e por isso tende a parecer melhor do que
              realmente é (overfitting). O número abaixo do corte é o único que mede algo: apenas os concursos com
              data <b style={{ color: T.textDim }}>posterior</b> ao corte contam, pois não existiam ainda quando as regras foram fixadas.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 12, color: T.textDim, whiteSpace: "nowrap" }}>Corte de calibração (data, dd/mm/aaaa):</span>
              <Input value={corteCalibracao} onChange={e => onChangeCorte(e.target.value)} placeholder="30/07/2026" style={{ maxWidth: 130 }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Card style={{ background: T.surface2, opacity: 0.85 }}>
                <Label>Calibração (não conta)</Label>
                <div style={{ fontSize: 22, fontWeight: 800, fontFamily: T.fontNum, color: T.textDim }}>
                  {statsCalibracao ? statsCalibracao.media.toFixed(2) : "—"}
                  <span style={{ fontSize: 12, color: T.textFaint }}> / 15</span>
                </div>
                <div style={{ fontSize: 10, color: T.textFaint, marginTop: 2 }}>
                  {statsCalibracao ? `${statsCalibracao.n} concursos usados para ajustar as regras` : "sem concursos aqui"}
                </div>
              </Card>
              <Card style={{
                background: statsHoldout?.significativo ? T.greenSoft : T.surface2,
                border: statsHoldout ? `1px solid ${statsHoldout.significativo ? T.green + "55" : T.border}` : undefined
              }}>
                <Label>Fora da amostra (real)</Label>
                <div style={{ fontSize: 22, fontWeight: 800, fontFamily: T.fontNum, color: statsHoldout?.significativo ? T.green : T.text }}>
                  {statsHoldout ? statsHoldout.media.toFixed(2) : "—"}
                  <span style={{ fontSize: 12, color: T.textFaint }}> / 15</span>
                </div>
                <div style={{ fontSize: 10, color: T.textFaint, marginTop: 2 }}>
                  {statsHoldout ? `${statsHoldout.n} concursos após o corte` : "nenhum concurso após o corte ainda"}
                </div>
              </Card>
            </div>

            {statsHoldout && (
              <div style={{
                marginTop: 10, padding: "10px 12px", borderRadius: 8, fontSize: 11.5, lineHeight: 1.5,
                background: statsHoldout.n < 5 ? "#D4A94F14" : (statsHoldout.significativo ? T.greenSoft : T.surface2),
                border: `1px solid ${statsHoldout.n < 5 ? T.gold + "55" : (statsHoldout.significativo ? T.green + "55" : T.border)}`,
                color: statsHoldout.n < 5 ? T.goldText : (statsHoldout.significativo ? T.green : T.textDim)
              }}>
                {statsHoldout.n < 5
                  ? `Só ${statsHoldout.n} concurso(s) fora da amostra — cedo demais para tirar qualquer conclusão. Precisa de bem mais dados (idealmente 30+) para um z-score confiável.`
                  : statsHoldout.significativo
                    ? `Fora da faixa esperada por acaso (z = ${statsHoldout.z.toFixed(2)}, intervalo de 95% do acaso: ${statsHoldout.ciBaixo.toFixed(2)}–${statsHoldout.ciAlto.toFixed(2)}). Ainda assim, com poucos concursos isso pode ser sorte — vale continuar acumulando antes de confiar.`
                    : `Dentro da variação que o próprio acaso já explica (z = ${statsHoldout.z.toFixed(2)}, intervalo de 95% do acaso: ${statsHoldout.ciBaixo.toFixed(2)}–${statsHoldout.ciAlto.toFixed(2)}). Isso não significa que o método "não funciona" — significa que ainda não há evidência estatística de que ele bata o acaso.`
                }
              </div>
            )}
          </div>
        </div>
      )}

      {/* Destaques de sequência */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <Card style={{ background: T.goldSoft, border: `1px solid ${T.gold}55` }}>
          <Label style={{ color: T.goldText }}>Mais quente</Label>
          <div style={{ fontSize: 30, fontWeight: 800, fontFamily: T.fontNum, color: T.gold }}>
            {maisQuente?.[0] ?? "—"}
          </div>
          <div style={{ fontSize: 11, color: T.goldText, marginTop: 2 }}>
            {maisQuente ? `saiu ${maisQuente[1].contagem}× seguidas` : "sem dados"}
          </div>
        </Card>
        <Card style={{ background: T.redSoft, border: `1px solid ${T.red}55` }}>
          <Label style={{ color: T.red }}>Mais atrasado</Label>
          <div style={{ fontSize: 30, fontWeight: 800, fontFamily: T.fontNum, color: T.red }}>
            {maisAtrasado?.[0] ?? "—"}
          </div>
          <div style={{ fontSize: 11, color: T.red, marginTop: 2 }}>
            {maisAtrasado ? `${maisAtrasado[1].contagem} concursos sem sair` : "sem dados"}
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Label>Sequência atual — todos os números</Label>
        <p style={{ fontSize: 12, color: T.textFaint, margin: "0 0 12px", lineHeight: 1.5 }}>
          Cada número mostra se está saindo seguido ou há quantos concursos não sai.
        </p>
        <GridSequencias concursos={concursos} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <Label>Destaques de frequência ({total} concursos)</Label>
        <p style={{ fontSize: 12, color: T.textFaint, margin: "0 0 12px", lineHeight: 1.5 }}>
          Todo número sai perto de 60% do tempo — aqui só os que mais fogem dessa média.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.green, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Acima da média</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {maisFrequentes.map(({ n, pct, f }) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: `${T.green}22`, border: `1px solid ${T.green}55`, color: T.green, fontSize: 11, fontWeight: 800, fontFamily: T.fontNum, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
                  <span style={{ fontSize: 11, color: T.textDim }}>{f}× <span style={{ color: T.textFaint }}>({Math.round(pct)}%)</span></span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.red, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Abaixo da média</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {menosFrequentes.map(({ n, pct, f }) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: `${T.red}22`, border: `1px solid ${T.red}55`, color: T.red, fontSize: 11, fontWeight: 800, fontFamily: T.fontNum, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
                  <span style={{ fontSize: 11, color: T.textDim }}>{f}× <span style={{ color: T.textFaint }}>({Math.round(pct)}%)</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label>Últimos concursos</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[...concursos].reverse().slice(0, 8).map((c, i) => (
            <Card key={i} style={{ background: T.surface2, padding: 12 }}>
              <div style={{ fontSize: 11, color: T.textFaint, marginBottom: 6 }}>
                {c.concurso ? `Concurso ${c.concurso}` : "Sem número"} — {c.data || "sem data"}
              </div>
              <BolinhasNumeros numeros={c.numeros} cor={T.blue} tamanho={24} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function sugerirHora(dataStr) {
  // dd/mm/yyyy -> "11h" se domingo, "21h" nos demais dias (padrão dos sorteios da Lotofácil)
  const m = dataStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return "";
  const d = new Date(parseInt(m[3]), parseInt(m[2]) - 1, parseInt(m[1]));
  return d.getDay() === 0 ? "11h" : "21h";
}

function MetaConcurso({ concurso, data, hora, onChangeConcurso, onChangeData, onChangeHora }) {
  const sugestao = sugerirHora(data);
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 90px", gap: 8 }}>
        <Input placeholder="Nº do concurso" value={concurso} onChange={e => onChangeConcurso(e.target.value)} />
        <Input placeholder="Data (ex: 08/06/2026)" value={data} onChange={e => onChangeData(e.target.value)} />
        <Input placeholder="Hora" value={hora} onChange={e => onChangeHora(e.target.value)} />
      </div>
      {sugestao && !hora && (
        <button onClick={() => onChangeHora(sugestao)}
          style={{ fontSize: 11, color: T.gold, background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: 6, fontWeight: 600 }}>
          usar {sugestao} ({sugestao === "11h" ? "domingo" : "seg-sáb"}, padrão do sorteio)
        </button>
      )}
    </div>
  );
}

function BolinhasNumeros({ numeros, cor = T.blue, tamanho = 26 }) {
  if (!numeros || numeros.length === 0) return <span style={{ fontSize: 12, color: T.textFaint }}>—</span>;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {[...numeros].sort((a, b) => a - b).map(n => (
        <span key={n} style={{
          width: tamanho, height: tamanho, borderRadius: "50%", fontSize: tamanho > 22 ? 12 : 11, fontWeight: 800,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: `${cor}22`, color: cor, border: `1px solid ${cor}55`, fontFamily: T.fontNum
        }}>{n}</span>
      ))}
    </div>
  );
}

function contarAcertos(jogo, resultado) {
  if (!jogo || !resultado || jogo.length === 0 || resultado.length === 0) return null;
  return jogo.filter(n => resultado.includes(n)).length;
}

function CardHistorico({ item, onUpdateResultado, onUpdateMapa, onUpdateMeta, onRemover, expandido, onToggle }) {
  const [editandoResultado, setEditandoResultado] = useState(false);
  const [resultadoTexto, setResultadoTexto] = useState((item.resultado || []).join(" "));
  const [editandoMapa, setEditandoMapa] = useState(false);
  const [mapaTexto, setMapaTexto] = useState(item.textoMapa || "");
  const [avisoMapa, setAvisoMapa] = useState(null);
  const [editandoMeta, setEditandoMeta] = useState(false);
  const [concursoTexto, setConcursoTexto] = useState(item.concurso || "");
  const [dataTexto, setDataTexto] = useState(item.data || "");
  const [horaTexto, setHoraTexto] = useState(item.hora || "");
  const acertos = contarAcertos(item.jogoGerado, item.resultado);

  const salvarMeta = () => {
    onUpdateMeta(item.id, { concurso: concursoTexto.trim(), data: dataTexto.trim(), hora: horaTexto.trim() });
    setEditandoMeta(false);
  };

  const [avisoResultado, setAvisoResultado] = useState(null);
  const salvarResultado = () => {
    const brutos = resultadoTexto.split(/[\s,]+/).map(n => parseInt(n)).filter(n => n >= 1 && n <= 25);
    const numeros = [...new Set(brutos)]; // remove duplicados — não deveriam existir num resultado real
    onUpdateResultado(item.id, numeros);
    if (numeros.length !== 15) {
      setAvisoResultado(`Atenção: salvo com ${numeros.length} número(s) — um resultado real da Lotofácil sempre tem 15. Confira se não faltou ou sobrou algum.`);
    } else {
      setAvisoResultado(null);
    }
    setEditandoResultado(false);
  };

  const salvarMapa = async () => {
    const { encontrados, esperados } = await onUpdateMapa(item.id, mapaTexto);
    if (encontrados === 0) {
      setAvisoMapa({ tipo: "erro", msg: "Não identifiquei nenhum planeta neste texto." });
    } else if (encontrados < esperados) {
      setAvisoMapa({ tipo: "aviso", msg: `Identifiquei ${encontrados} de ${esperados} pontos. Jogo recalculado com o que foi lido.` });
    } else {
      setAvisoMapa({ tipo: "sucesso", msg: "Mapa salvo e jogo recalculado." });
      setEditandoMapa(false);
    }
  };

  const acertoCor = acertos === null ? T.textFaint : acertos >= 11 ? T.green : acertos >= 8 ? T.amber : T.red;

  return (
    <Card style={{ marginBottom: 10, transition: "border-color 0.15s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", cursor: "pointer" }} onClick={onToggle}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.text, fontFamily: T.fontDisplay }}>
            {item.concurso ? `Concurso ${item.concurso}` : "Sem número"}
            <span style={{ color: T.textFaint, fontWeight: 400, fontSize: 12, fontFamily: T.fontSans, marginLeft: 8 }}>
              {item.data || "sem data"}{item.hora ? ` · ${item.hora}` : ""}
            </span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 6 }}>
            {acertos !== null && (
              <div style={{ fontSize: 12, fontWeight: 700, color: acertoCor }}>
                {acertos} <span style={{ fontWeight: 400, color: T.textFaint }}>acertos</span>
              </div>
            )}
            {!item.textoMapa && (
              <div style={{ fontSize: 11, fontWeight: 600, color: T.amber, background: T.goldSoft, padding: "2px 8px", borderRadius: 10 }}>
                sem mapa
              </div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
          <button onClick={(e) => { e.stopPropagation(); setConcursoTexto(item.concurso || ""); setDataTexto(item.data || ""); setHoraTexto(item.hora || ""); setEditandoMeta(true); if (!expandido) onToggle(); }}
            style={{ fontSize: 11, color: T.gold, background: "none", border: "none", cursor: "pointer" }}>
            editar nº/data
          </button>
          <button onClick={(e) => { e.stopPropagation(); onRemover(item.id); }}
            style={{ fontSize: 11, color: T.textFaint, background: "none", border: "none", cursor: "pointer" }}>
            remover
          </button>
        </div>
      </div>

      {expandido && editandoMeta && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.borderSoft}` }}>
          <Label>Concurso / data / hora</Label>
          <MetaConcurso
            concurso={concursoTexto} data={dataTexto} hora={horaTexto}
            onChangeConcurso={setConcursoTexto} onChangeData={setDataTexto} onChangeHora={setHoraTexto}
          />
          <div style={{ display: "flex", gap: 6 }}>
            <Botao onClick={salvarMeta} variant="primary" small>Salvar</Botao>
            <Botao onClick={() => setEditandoMeta(false)} variant="ghost" small>Cancelar</Botao>
          </div>
        </div>
      )}

      {expandido && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.borderSoft}` }}>
          <Label>Jogo gerado</Label>
          <BolinhasNumeros numeros={item.jogoGerado} cor={T.gold} />

          <div style={{ marginTop: 14 }}>
            <Label>Resultado real</Label>
            {!editandoResultado ? (
              <div>
                <BolinhasNumeros numeros={item.resultado} cor={T.blue} />
                {avisoResultado && (
                  <div style={{ marginTop: 8, padding: "8px 10px", borderRadius: 8, fontSize: 11.5, background: "#D4A94F14", border: `1px solid ${T.gold}55`, color: T.goldText }}>
                    {avisoResultado}
                  </div>
                )}
                <button onClick={() => { setResultadoTexto((item.resultado || []).join(" ")); setEditandoResultado(true); }}
                  style={{ fontSize: 11, color: T.gold, background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: 8, fontWeight: 600 }}>
                  {item.resultado?.length > 0 ? "editar resultado" : "+ inserir resultado"}
                </button>
              </div>
            ) : (
              <div>
                <Input value={resultadoTexto} onChange={e => setResultadoTexto(e.target.value)}
                  placeholder="15 números separados por espaço" style={{ marginBottom: 8 }} />
                <div style={{ display: "flex", gap: 6 }}>
                  <Botao onClick={salvarResultado} variant="primary" small>Salvar</Botao>
                  <Botao onClick={() => { setResultadoTexto((item.resultado || []).join(" ")); setEditandoResultado(false); }} variant="ghost" small>Cancelar</Botao>
                </div>
              </div>
            )}
          </div>

          {item.obs && (
            <div style={{ fontSize: 12, color: T.textFaint, marginTop: 14, fontStyle: "italic", lineHeight: 1.5 }}>
              {item.obs}
            </div>
          )}

          <div style={{ marginTop: 14 }}>
            <Label>Mapa horário</Label>
            {!editandoMapa ? (
              <div>
                {item.textoMapa ? (
                  <div style={{ fontSize: 11, color: T.textFaint, lineHeight: 1.6, wordBreak: "break-word", fontFamily: T.fontMono, maxHeight: 90, overflow: "hidden" }}>
                    {item.textoMapa}
                  </div>
                ) : (
                  <p style={{ fontSize: 12, color: T.textFaint, margin: 0 }}>Nenhum mapa inserido ainda para este concurso.</p>
                )}
                <button onClick={() => { setMapaTexto(item.textoMapa || ""); setAvisoMapa(null); setEditandoMapa(true); }}
                  style={{ fontSize: 11, color: T.gold, background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: 8, fontWeight: 600 }}>
                  {item.textoMapa ? "editar mapa" : "+ inserir mapa horário"}
                </button>
              </div>
            ) : (
              <div>
                <textarea
                  value={mapaTexto}
                  onChange={e => { setMapaTexto(e.target.value); setAvisoMapa(null); }}
                  placeholder="Sol em Gêmeos 18°11', na 5ª Casa; Lua em Peixes 25°15', na 2ª Casa; ..."
                  style={{
                    width: "100%", minHeight: 140, fontSize: 12, padding: 10, borderRadius: 8,
                    border: `1px solid ${T.border}`, background: T.surface2, color: T.text,
                    fontFamily: T.fontMono, resize: "vertical", boxSizing: "border-box", lineHeight: 1.6, outline: "none", marginBottom: 8
                  }}
                />
                {avisoMapa && (
                  <div style={{
                    marginBottom: 8, padding: "8px 10px", borderRadius: 8, fontSize: 12,
                    background: avisoMapa.tipo === "erro" ? T.redSoft : avisoMapa.tipo === "aviso" ? "#D4A94F14" : T.greenSoft,
                    color: avisoMapa.tipo === "erro" ? T.red : avisoMapa.tipo === "aviso" ? T.goldText : T.green
                  }}>
                    {avisoMapa.msg}
                  </div>
                )}
                <div style={{ display: "flex", gap: 6 }}>
                  <Botao onClick={salvarMapa} variant="primary" small disabled={!mapaTexto.trim()}>Processar e salvar</Botao>
                  <Botao onClick={() => { setMapaTexto(item.textoMapa || ""); setEditandoMapa(false); }} variant="ghost" small>Cancelar</Botao>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

// ─── App principal ────────────────────────────────────────────────────────────
export default function App() {
  const [aba, setAba] = useState("mapa");
  const [planetas, setPlanetas] = useState({});
  const [cuspides, setCuspides] = useState({});
  const [scores, setScores] = useState(null);
  const [numSelecionado, setNumSelecionado] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [textoMapa, setTextoMapa] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [avisoParse, setAvisoParse] = useState(null);
  const [avisosRadicalidade, setAvisosRadicalidade] = useState([]);
  const [concursoAtual, setConcursoAtual] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const [horaAtual, setHoraAtual] = useState("");
  const [expandidoId, setExpandidoId] = useState(null);
  const [salvoMsg, setSalvoMsg] = useState(null);
  const [carregado, setCarregado] = useState(false);
  // Todos os concursos até 30/07/2026 (data do último do backup, concurso 3749) já
  // têm jogoGerado calculado com as mesmas regras que foram ajustadas olhando esse
  // histórico — ou seja, todo o dataset atual é "calibração". O corte honesto começa
  // aqui: a validação real só existe a partir do primeiro concurso NOVO sorteado e
  // registrado depois disso. Usamos DATA, não número de concurso, porque 9 registros
  // do backup original nunca tiveram o número do concurso preenchido (só a data) —
  // comparar por concurso deixaria esses de fora do corte por engano.
  const [corteCalibracao, setCorteCalibracao] = useState("30/07/2026");

  useEffect(() => {
    const loadData = async () => {
      let hist = null;
      try {
        const r = await window.storage.get("historico");
        if (r) hist = JSON.parse(r.value);
      } catch {}

      if (!hist || hist.length === 0) {
        // Nada salvo ainda — carrega o backup completo direto.
        hist = HISTORICO_INICIAL;
        try { await window.storage.set("historico", JSON.stringify(hist)); } catch {}
      } else if (hist.length < HISTORICO_INICIAL.length) {
        // Já existe um histórico salvo, mas é uma versão antiga/menor do que o
        // backup atual (ex: só tinha os 12 primeiros mapas). Mescla por concurso+data
        // para trazer os concursos que faltam, sem perder nada que já foi editado.
        const chave = (item) => `${item.concurso || ""}|${item.data || ""}`;
        const existentes = new Set(hist.map(chave));
        const faltando = HISTORICO_INICIAL.filter(item => !existentes.has(chave(item)));
        hist = [...hist, ...faltando].sort((a, b) => {
          const da = (a.data || "").split("/").reverse().join("-");
          const db = (b.data || "").split("/").reverse().join("-");
          return da.localeCompare(db);
        });
        try { await window.storage.set("historico", JSON.stringify(hist)); } catch {}
      }
      setHistorico(hist);

      try {
        const r = await window.storage.get("corteCalibracao");
        if (r?.value) setCorteCalibracao(r.value);
      } catch {}

      try {
        const r = await window.storage.get("mapaAtual");
        if (r) {
          const d = JSON.parse(r.value);
          setPlanetas(d.planetas || {});
          setCuspides(d.cuspides || {});
          setTextoMapa(d.texto || "");
          setConcursoAtual(d.concurso || "");
          setDataAtual(d.data || "");
          setHoraAtual(d.hora || "");
        }
      } catch {}
      setCarregado(true);
    };
    loadData();
  }, []);

  // ── Ordena o histórico cronologicamente (por nº de concurso, com data como
  // fallback) sempre que ele é salvo. Sem isso, um item novo entra sempre no FINAL
  // do array (era só um [...historico, novoItem]) — se o usuário registra ou edita
  // um concurso fora de ordem (ex: preenche um concurso antigo depois de já ter
  // vários mais recentes), o array ficava fora de ordem cronológica. Isso quebra
  // qualquer coisa que dependa de "mais antigo → mais recente": a sequência
  // quente/atrasado de cada número (calcularSequencias assume ordem cronológica),
  // a lista "Últimos concursos" do painel, e o corte de calibração/holdout. ──
  // ── Ordena o histórico cronologicamente sempre que é salvo ──
  // Corrigido de novo: a versão anterior usava concurso OU data como chave, mas as
  // duas ficam em escalas totalmente diferentes (concurso ~3650-3900, data-como-
  // número ~20260525) — misturar as duas no mesmo sort jogava qualquer item SEM
  // concurso (9 registros do backup original só têm data, sem número) sempre para o
  // FINAL da lista, mesmo quando a data dele era de abril/maio (bem no meio dos
  // outros). Corrigido: data é sempre a chave principal (todo item tem data), e o
  // concurso só desempata quando duas entradas caem exatamente no mesmo dia.
  const chaveData = (item) => {
    if (!item.data) return null;
    const [d, m, y] = item.data.split("/");
    if (!y) return null;
    return parseInt(`${y}${(m || "").padStart(2, "0")}${(d || "").padStart(2, "0")}`);
  };
  const chaveOrdenacaoHistorico = (item) => {
    const dataKey = chaveData(item);
    if (dataKey !== null) return dataKey;
    // sem data reconhecível (não deveria acontecer nos dados atuais): usa o
    // concurso como último recurso, só para não quebrar o sort.
    const concursoNum = parseInt(item.concurso);
    return isNaN(concursoNum) ? Infinity : concursoNum;
  };
  const ordenarHistorico = (arr) => [...arr].sort((a, b) => {
    const diff = chaveOrdenacaoHistorico(a) - chaveOrdenacaoHistorico(b);
    if (diff !== 0) return diff;
    // mesmo dia (ou mesma chave de fallback): desempata pelo número do concurso
    const ca = parseInt(a.concurso), cb = parseInt(b.concurso);
    if (!isNaN(ca) && !isNaN(cb)) return ca - cb;
    return 0;
  });

  const salvarHistorico = async (novo) => {
    const ordenado = ordenarHistorico(novo);
    setHistorico(ordenado);
    try { await window.storage.set("historico", JSON.stringify(ordenado)); } catch {}
  };

  const onChangeCorte = async (v) => {
    setCorteCalibracao(v);
    try { await window.storage.set("corteCalibracao", v); } catch {}
  };

  // Sem debounce, cada tecla digitada no textarea do mapa (ou em qualquer campo de
  // grau/minuto/casa) disparava uma gravação assíncrona no storage. Em digitação
  // rápida isso gera dezenas de chamadas por segundo, o que pode esbarrar no limite
  // de requisições do storage e derrubar/perder alguma gravação silenciosamente
  // (sem erro visível para o usuário). O estado em tela (planetas, textoMapa etc.)
  // continua atualizando instantaneamente — só a gravação persistente é adiada.
  const salvarMapaTimeoutRef = useRef(null);
  const salvarMapaAtual = (p, c, txt, conc, dt, hr) => {
    if (salvarMapaTimeoutRef.current) clearTimeout(salvarMapaTimeoutRef.current);
    salvarMapaTimeoutRef.current = setTimeout(async () => {
      try { await window.storage.set("mapaAtual", JSON.stringify({ planetas: p, cuspides: c, texto: txt, concurso: conc, data: dt, hora: hr })); } catch {}
    }, 500);
  };

  const updatePlaneta = (id, valor) => {
    const novo = { ...planetas, [id]: valor };
    setPlanetas(novo);
    salvarMapaAtual(novo, cuspides, textoMapa, concursoAtual, dataAtual, horaAtual);
  };

  const updateCuspide = (casa, valor) => {
    const novo = { ...cuspides, [casa]: valor };
    setCuspides(novo);
    salvarMapaAtual(planetas, novo, textoMapa, concursoAtual, dataAtual, horaAtual);
  };

  const analisarDireto = () => {
    const { planetas: p, cuspides: c } = parseTextoMapa(textoMapa);
    const encontrados = Object.keys(p).length;
    const esperados = PLANETAS_CONFIG.length;
    setPlanetas(p);
    setCuspides(c);
    salvarMapaAtual(p, c, textoMapa, concursoAtual, dataAtual, horaAtual);

    if (encontrados === 0) {
      setAvisoParse({ tipo: "erro", msg: "Não identifiquei nenhum planeta. Verifique o formato do texto ou complete manualmente abaixo." });
      setScores(null);
      return;
    }
    if (encontrados < esperados) {
      const faltando = PLANETAS_CONFIG.filter(pc => !p[pc.id]).map(pc => pc.nome);
      setAvisoParse({ tipo: "aviso", msg: `Identifiquei ${encontrados} de ${esperados} pontos. Faltando: ${faltando.join(", ")}. O ranking abaixo já considera o que foi lido — complete manualmente para mais precisão.` });
    } else {
      setAvisoParse({ tipo: "sucesso", msg: `Todos os ${encontrados} pontos identificados.` });
    }

    const result = analisarMapa(p, c, historico);
    setScores(result);
    setAvisosRadicalidade(verificarRadicalidade(p));
    setNumSelecionado(null);
  };

  const reanalisar = () => {
    const result = analisarMapa(planetas, cuspides, historico);
    setScores(result);
    setAvisosRadicalidade(verificarRadicalidade(planetas));
    setNumSelecionado(null);
  };

  const limpar = () => {
    setPlanetas({});
    setCuspides({});
    setScores(null);
    setNumSelecionado(null);
    setTextoMapa("");
    setConcursoAtual("");
    setDataAtual("");
    setHoraAtual("");
    setAvisoParse(null);
    salvarMapaAtual({}, {}, "", "", "", "");
  };

  const numerosAtual = () => {
    if (!scores) return [];
    return numerosComTestemunho(scores);
  };

  const concursoExistente = historico.find(h =>
    (concursoAtual.trim() && h.concurso && h.concurso === concursoAtual.trim()) ||
    (!concursoAtual.trim() && dataAtual.trim() && h.data === dataAtual.trim())
  );

  const salvarNoHistorico = async () => {
    const jogoGerado = numerosAtual();
    if (concursoExistente) {
      // Atualiza a entrada existente em vez de criar uma duplicada.
      const novo = historico.map(h => h.id === concursoExistente.id
        ? { ...h, textoMapa, jogoGerado, hora: horaAtual || h.hora }
        : h);
      await salvarHistorico(novo);
      setSalvoMsg("Concurso já existia — mapa e jogo atualizados");
    } else {
      const novoItem = {
        id: `h${Date.now()}`,
        concurso: concursoAtual,
        data: dataAtual,
        hora: horaAtual,
        textoMapa,
        jogoGerado,
        resultado: [],
        obs: "",
      };
      const novo = [...historico, novoItem];
      await salvarHistorico(novo);
      setSalvoMsg("Análise salva no histórico");
    }
    setTimeout(() => setSalvoMsg(null), 3000);
  };

  const updateResultadoHistorico = async (id, numeros) => {
    const novo = historico.map(h => h.id === id ? { ...h, resultado: numeros } : h);
    await salvarHistorico(novo);
  };

  const updateMetaHistorico = async (id, { concurso, data, hora }) => {
    const novo = historico.map(h => h.id === id ? { ...h, concurso, data, hora } : h);
    await salvarHistorico(novo); // já reordena cronologicamente pela nova data/concurso
  };

  const updateMapaHistorico = async (id, textoNovo) => {
    const { planetas: p, cuspides: c } = parseTextoMapa(textoNovo);
    const encontrados = Object.keys(p).length;
    let jogoGerado = [];
    if (encontrados > 0) {
      const scoresItem = analisarMapa(p, c, historico);
      jogoGerado = numerosComTestemunho(scoresItem);
    }
    const novo = historico.map(h => h.id === id ? { ...h, textoMapa: textoNovo, jogoGerado } : h);
    await salvarHistorico(novo);
    return { encontrados, esperados: PLANETAS_CONFIG.length };
  };

  // Reprocessa TODOS os mapas já salvos com a versão atual do motor de análise —
  // necessário sempre que uma regra é ajustada, para que o jogoGerado de concursos
  // antigos reflita a lógica mais recente em vez de ficar congelado na versão de quando
  // foi inserido.
  const [reanalisando, setReanalisando] = useState(false);
  const reanalisarTodos = async () => {
    setReanalisando(true);
    const novo = historico.map(h => {
      if (!h.textoMapa?.trim()) return h;
      const { planetas: p, cuspides: c } = parseTextoMapa(h.textoMapa);
      if (Object.keys(p).length === 0) return h;
      const scoresItem = analisarMapa(p, c, historico);
      const jogoGerado = numerosComTestemunho(scoresItem);
      return { ...h, jogoGerado };
    });
    await salvarHistorico(novo);
    const totalReprocessados = novo.filter(h => h.textoMapa?.trim()).length;
    setSalvoMsg(`${totalReprocessados} mapas reanalisados com as regras atuais`);
    setReanalisando(false);
    setTimeout(() => setSalvoMsg(null), 4000);
  };

  const removerHistorico = async (id) => {
    const novo = historico.filter(h => h.id !== id);
    await salvarHistorico(novo);
  };

  // Baixa os dados que estão AGORA no storage desta sessão do app (não o código-fonte).
  // É a única forma de tirar do artifact o que foi inserido em tela — o arquivo .jsx
  // baixado separadamente nunca contém isso, porque código e dados ficam em lugares diferentes.
  const exportarHistorico = () => {
    const blob = new Blob([JSON.stringify(historico, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lotofacil-historico-${historico.length}-concursos.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSalvoMsg(`Baixado — ${historico.length} concursos, ${historico.filter(h => h.textoMapa).length} com mapa preenchido`);
    setTimeout(() => setSalvoMsg(null), 4000);
  };

  const concursosComResultado = historico.filter(h => h.resultado && h.resultado.length > 0);

  if (!carregado) {
    return (
      <div style={{ minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center", background: T.bg, fontFamily: T.fontSans }}>
        <span style={{ color: T.textFaint, fontSize: 13 }}>Carregando…</span>
      </div>
    );
  }

  const NAV = [
    { id: "mapa", label: "Mapa horário", icon: "✦" },
    { id: "historico", label: "Histórico", icon: "☰" },
    { id: "estatisticas", label: "Estatísticas", icon: "◫" },
  ];

  return (
    <div style={{
      fontFamily: T.fontSans, color: T.text, background: T.bg,
      minHeight: "100vh", maxWidth: 720, margin: "0 auto",
      boxSizing: "border-box"
    }}>
      {/* Header */}
      <div style={{ position: "relative", overflow: "hidden", padding: "28px 20px 22px", borderBottom: `1px solid ${T.border}` }}>
        <ZodiacRing size={280} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: T.gold, textTransform: "uppercase", marginBottom: 6 }}>
            Astrologia horária
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, fontFamily: T.fontDisplay, color: T.text, letterSpacing: "-0.01em" }}>
            Lotofácil Astrológica
          </h1>
          <p style={{ fontSize: 13, color: T.textDim, margin: "6px 0 0" }}>
            Leitura de mapa horário para indicação de números
          </p>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", padding: "0 20px", gap: 2, borderBottom: `1px solid ${T.border}`, overflowX: "auto" }}>
        {NAV.map(a => (
          <button key={a.id} onClick={() => setAba(a.id)}
            style={{
              fontSize: 13, padding: "13px 14px", border: "none", cursor: "pointer", whiteSpace: "nowrap",
              background: "transparent", borderBottom: aba === a.id ? `2px solid ${T.gold}` : "2px solid transparent",
              color: aba === a.id ? T.gold : T.textDim,
              fontWeight: aba === a.id ? 600 : 500, marginBottom: -1,
              display: "flex", alignItems: "center", gap: 7, fontFamily: T.fontSans,
              transition: "color 0.15s"
            }}>
            <span style={{ fontSize: 12, opacity: 0.8 }}>{a.icon}</span>
            {a.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 20px 60px" }}>

        {/* Aba Mapa */}
        {aba === "mapa" && (
          <div>
            <Label>Analisar um mapa horário</Label>
            <p style={{ fontSize: 12, color: T.textFaint, margin: "0 0 10px", lineHeight: 1.5 }}>
              Cole o texto direto do site e toque em analisar — a leitura e o ranking aparecem logo abaixo. Para editar o mapa de um concurso já salvo, use o Histórico.
            </p>
            <textarea
              value={textoMapa}
              onChange={e => { setTextoMapa(e.target.value); setAvisoParse(null); salvarMapaAtual(planetas, cuspides, e.target.value, concursoAtual, dataAtual, horaAtual); }}
              placeholder="Sol em Gêmeos 18°11', na 5ª Casa; Lua em Peixes 25°15', na 2ª Casa; ..."
              style={{
                width: "100%", minHeight: 160, fontSize: 12, padding: 12, borderRadius: 10,
                border: `1px solid ${T.border}`, background: T.surface2,
                color: T.text, fontFamily: T.fontMono, resize: "vertical", boxSizing: "border-box",
                lineHeight: 1.6, outline: "none"
              }}
            />

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <Botao onClick={analisarDireto} full variant="primary" style={{ fontSize: 15, padding: "14px 0" }} disabled={!textoMapa.trim()}>
                Analisar mapa
              </Botao>
              <Botao onClick={limpar} variant="ghost">Limpar</Botao>
            </div>

            {avisoParse && (
              <div style={{
                marginTop: 12, padding: "10px 12px", borderRadius: 8, fontSize: 12,
                background: avisoParse.tipo === "erro" ? T.redSoft : avisoParse.tipo === "aviso" ? "#D4A94F14" : T.greenSoft,
                border: `1px solid ${avisoParse.tipo === "erro" ? T.red + "55" : avisoParse.tipo === "aviso" ? T.gold + "55" : T.green + "55"}`,
                color: avisoParse.tipo === "erro" ? T.red : avisoParse.tipo === "aviso" ? T.goldText : T.green
              }}>
                {avisoParse.msg}
              </div>
            )}

            {/* Resultado aparece direto abaixo, mesma aba */}
            {scores && (
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
                {avisosRadicalidade.length > 0 && (
                  <div style={{
                    marginBottom: 16, padding: "10px 12px", borderRadius: 8, fontSize: 12, lineHeight: 1.5,
                    background: "#D4A94F14", border: `1px solid ${T.gold}55`, color: T.goldText
                  }}>
                    {avisosRadicalidade.map((a, i) => <div key={i} style={{ marginBottom: i < avisosRadicalidade.length - 1 ? 6 : 0 }}>⚠ {a}</div>)}
                  </div>
                )}
                <Label>Os 15 números mais fortes</Label>
                <p style={{ fontSize: 12, color: T.textFaint, margin: "0 0 4px" }}>
                  Toque em um número para ver as fontes astrológicas.
                </p>
                <RankingVisual scores={scores} onSelect={n => setNumSelecionado(numSelecionado === n ? null : n)} selecionado={numSelecionado} />

                {numSelecionado && <DetalheNumero num={numSelecionado} score={scores[numSelecionado]} />}

                <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${T.borderSoft}` }}>
                  <Label>Salvar no histórico</Label>
                  {concursoExistente && (
                    <div style={{
                      marginBottom: 10, padding: "8px 10px", borderRadius: 8, fontSize: 12,
                      background: "#D4A94F14", border: `1px solid ${T.gold}55`, color: T.goldText
                    }}>
                      Já existe {concursoExistente.concurso ? `o concurso nº ${concursoExistente.concurso}` : `um registro na data ${concursoExistente.data}`} no histórico.
                      Ao salvar, o mapa e o jogo gerado dessa entrada serão atualizados com os desta análise.
                    </div>
                  )}
                  <MetaConcurso
                    concurso={concursoAtual} data={dataAtual} hora={horaAtual}
                    onChangeConcurso={v => { setConcursoAtual(v); salvarMapaAtual(planetas, cuspides, textoMapa, v, dataAtual, horaAtual); }}
                    onChangeData={v => { setDataAtual(v); salvarMapaAtual(planetas, cuspides, textoMapa, concursoAtual, v, horaAtual); }}
                    onChangeHora={v => { setHoraAtual(v); salvarMapaAtual(planetas, cuspides, textoMapa, concursoAtual, dataAtual, v); }}
                  />
                  <Botao onClick={salvarNoHistorico} variant="success" full disabled={!concursoAtual.trim() && !dataAtual.trim()}>
                    Salvar no histórico
                  </Botao>
                  {!concursoAtual.trim() && !dataAtual.trim() && (
                    <p style={{ fontSize: 11, color: T.textFaint, margin: "8px 0 0" }}>Informe ao menos o concurso ou a data para salvar.</p>
                  )}
                </div>
                {salvoMsg && (
                  <div style={{ fontSize: 12, color: T.green, padding: "10px 12px", marginTop: 8, background: T.greenSoft, borderRadius: 8, border: `1px solid ${T.green}55` }}>
                    {salvoMsg}
                  </div>
                )}
              </div>
            )}

            {/* Edição manual — opcional, recolhida, para corrigir/completar dados */}
            {Object.keys(planetas).length > 0 && (
              <div style={{ marginTop: 24 }}>
                <button onClick={() => setModoEdicao(!modoEdicao)}
                  style={{ fontSize: 12, color: T.textDim, background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: T.gold }}>{modoEdicao ? "▾" : "▸"}</span>
                  Ver / corrigir dados identificados ({Object.keys(planetas).length} pontos)
                </button>

                {modoEdicao && (
                  <div>
                    <div style={{ marginBottom: 18 }}>
                      <Label>Planetas</Label>
                      {PLANETAS_CONFIG.filter(p => p.tipo === "planeta").map(p => (
                        <PlanetaInput key={p.id} config={p} valor={planetas[p.id]} onChange={v => updatePlaneta(p.id, v)} />
                      ))}
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <Label>Pontos sensíveis</Label>
                      {PLANETAS_CONFIG.filter(p => p.tipo === "ponto").map(p => (
                        <PlanetaInput key={p.id} config={p} valor={planetas[p.id]} onChange={v => updatePlaneta(p.id, v)} />
                      ))}
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <Label>Ângulos</Label>
                      {PLANETAS_CONFIG.filter(p => p.tipo === "angulo").map(p => (
                        <PlanetaInput key={p.id} config={p} valor={planetas[p.id]} onChange={v => updatePlaneta(p.id, v)} />
                      ))}
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <Label>Cúspides das casas</Label>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(casa => (
                        <div key={casa} style={{ display: "grid", gridTemplateColumns: "70px 56px 56px 1fr", gap: 6, marginBottom: 6, alignItems: "center" }}>
                          <span style={{ fontSize: 12, color: T.textDim }}>{casa}ª Casa</span>
                          <Input type="number" min="0" max="29" placeholder="Grau"
                            value={cuspides[casa]?.grau || ""}
                            onChange={e => updateCuspide(casa, { ...cuspides[casa], grau: e.target.value })} />
                          <Input type="number" min="0" max="59" placeholder="Min"
                            value={cuspides[casa]?.minutos || ""}
                            onChange={e => updateCuspide(casa, { ...cuspides[casa], minutos: e.target.value })} />
                          <span style={{ fontSize: 11, color: T.textFaint }}>{cuspides[casa]?.signo || ""}</span>
                        </div>
                      ))}
                    </div>

                    <Botao onClick={reanalisar} full variant="primary">
                      Recalcular com as correções
                    </Botao>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Aba Histórico */}
        {aba === "historico" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
              <p style={{ fontSize: 12, color: T.textFaint, margin: 0 }}>
                {historico.length} análises registradas. Toque em um card para ver o mapa e inserir o resultado real.
              </p>
              <button onClick={exportarHistorico}
                style={{ fontSize: 11, fontWeight: 600, color: T.gold, background: T.goldSoft, border: `1px solid ${T.gold}55`, borderRadius: 8, padding: "6px 10px", cursor: "pointer", whiteSpace: "nowrap" }}>
                ⬇ Exportar backup
              </button>
            </div>
            <button onClick={reanalisarTodos} disabled={reanalisando}
              style={{
                width: "100%", fontSize: 12, fontWeight: 600, color: T.text,
                background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 8,
                padding: "10px 12px", cursor: reanalisando ? "default" : "pointer", marginBottom: 16,
                opacity: reanalisando ? 0.6 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
              {reanalisando ? "Reanalisando..." : "🔄 Reanalisar todos os mapas com as regras atuais"}
            </button>
            {salvoMsg && (
              <div style={{ fontSize: 12, color: T.green, padding: "8px 12px", marginBottom: 16, background: T.greenSoft, borderRadius: 8, border: `1px solid ${T.green}55` }}>
                {salvoMsg}
              </div>
            )}
            {historico.length === 0 ? (
              <div style={{ textAlign: "center", padding: 56, color: T.textFaint, fontSize: 14 }}>
                Nenhuma análise ainda. Analise um mapa e salve no histórico.
              </div>
            ) : (
              [...historico].reverse().map(item => (
                <CardHistorico
                  key={item.id}
                  item={item}
                  onUpdateResultado={updateResultadoHistorico}
                  onUpdateMapa={updateMapaHistorico}
                  onUpdateMeta={updateMetaHistorico}
                  onRemover={removerHistorico}
                  expandido={expandidoId === item.id}
                  onToggle={() => setExpandidoId(expandidoId === item.id ? null : item.id)}
                />
              ))
            )}
          </div>
        )}

        {/* Aba Estatísticas */}
        {aba === "estatisticas" && (
          <PainelEstatisticas
            concursos={concursosComResultado.map(h => ({ concurso: h.concurso, data: h.data, numeros: h.resultado }))}
            historicoCompleto={historico}
            corteCalibracao={corteCalibracao}
            onChangeCorte={onChangeCorte}
          />
        )}
      </div>
    </div>
  );
}

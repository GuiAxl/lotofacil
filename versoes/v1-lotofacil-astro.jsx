import { useState, useEffect } from "react";


// ─── Histórico pré-carregado desta conversa (backup inicial) ──────────────────
// 100 concursos reais (3650 a 3749, 31/03/2026 a 30/07/2026). Os 12 primeiros já têm
// o mapa horário inserido e analisado nesta conversa; os demais aguardam o mapa de cada dia.
const HISTORICO_INICIAL = [
  {
    id: "h13", concurso: "3650", data: "31/03/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 8, 10, 11, 12, 13, 16, 17, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h14", concurso: "3651", data: "01/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 8, 10, 12, 13, 14, 16, 17, 18, 20, 21, 24, 25],
    obs: ""
  },
  {
    id: "h15", concurso: "3652", data: "02/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 6, 7, 11, 12, 13, 15, 16, 18, 19, 20, 21, 23, 24],
    obs: ""
  },
  {
    id: "h16", concurso: "3653", data: "04/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 6, 7, 8, 10, 11, 13, 14, 16, 18, 19, 20, 21],
    obs: ""
  },
  {
    id: "h17", concurso: "3654", data: "06/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 6, 7, 11, 15, 17, 19, 20, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h18", concurso: "3655", data: "07/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 10, 11, 12, 17, 18, 19, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h19", concurso: "3656", data: "08/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 6, 7, 8, 11, 12, 14, 15, 18, 19, 20, 21, 24, 25],
    obs: ""
  },
  {
    id: "h20", concurso: "3657", data: "09/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 7, 8, 10, 12, 13, 17, 18, 19, 20, 22, 23, 24],
    obs: ""
  },
  {
    id: "h21", concurso: "3658", data: "10/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 9, 10, 11, 12, 13, 16, 18, 20, 22, 23, 24],
    obs: ""
  },
  {
    id: "h22", concurso: "3659", data: "11/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 23, 25],
    obs: ""
  },
  {
    id: "h23", concurso: "3660", data: "13/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 5, 6, 7, 8, 10, 11, 12, 14, 17, 18, 22, 23, 24],
    obs: ""
  },
  {
    id: "h24", concurso: "3661", data: "14/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 19, 21, 23, 24],
    obs: ""
  },
  {
    id: "h25", concurso: "3662", data: "15/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20, 23, 25],
    obs: ""
  },
  {
    id: "h26", concurso: "3663", data: "16/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 10, 12, 14, 17, 19, 20, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h27", concurso: "3664", data: "17/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 10, 11, 12, 16, 18, 19, 20, 22, 23],
    obs: ""
  },
  {
    id: "h28", concurso: "3665", data: "18/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 16, 18, 22, 23, 25],
    obs: ""
  },
  {
    id: "h29", concurso: "3666", data: "20/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 9, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23],
    obs: ""
  },
  {
    id: "h30", concurso: "3667", data: "22/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 19, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h31", concurso: "3668", data: "23/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 7, 8, 9, 10, 11, 13, 15, 17, 18, 21, 24],
    obs: ""
  },
  {
    id: "h32", concurso: "3669", data: "24/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 22, 23, 24],
    obs: ""
  },
  {
    id: "h33", concurso: "3670", data: "25/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 10, 11, 14, 15, 17, 18, 19, 21, 23, 24],
    obs: ""
  },
  {
    id: "h34", concurso: "3671", data: "27/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 17, 18, 21],
    obs: ""
  },
  {
    id: "h35", concurso: "3672", data: "28/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 16, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h36", concurso: "3673", data: "29/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 8, 10, 11, 12, 15, 16, 18, 19, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h37", concurso: "3674", data: "30/04/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 6, 7, 8, 9, 10, 15, 17, 19, 20, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h38", concurso: "3675", data: "02/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 7, 8, 10, 12, 13, 15, 17, 18, 19, 23, 24],
    obs: ""
  },
  {
    id: "h39", concurso: "3676", data: "04/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 8, 10, 13, 15, 16, 18, 19, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h40", concurso: "3677", data: "05/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 8, 9, 10, 12, 13, 14, 15, 16, 18, 22, 23, 24],
    obs: ""
  },
  {
    id: "h41", concurso: "3678", data: "06/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 8, 10, 11, 14, 18, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h42", concurso: "3679", data: "07/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 10, 11, 13, 14, 17, 18, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h43", concurso: "3680", data: "08/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 7, 8, 9, 11, 15, 16, 19, 22, 24, 25],
    obs: ""
  },
  {
    id: "h44", concurso: "3681", data: "09/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 9, 11, 12, 14, 15, 16, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h45", concurso: "3682", data: "11/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 9, 10, 11, 12, 13, 17, 18, 21, 22, 24],
    obs: ""
  },
  {
    id: "h46", concurso: "3683", data: "12/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 16, 19, 20, 24, 25],
    obs: ""
  },
  {
    id: "h47", concurso: "3684", data: "13/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 6, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 23],
    obs: ""
  },
  {
    id: "h48", concurso: "3685", data: "14/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 8, 10, 11, 14, 15, 17, 19, 20, 21, 23, 24, 25],
    obs: ""
  },
  {
    id: "h49", concurso: "3686", data: "15/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 8, 9, 10, 13, 15, 18, 19, 23, 24, 25],
    obs: ""
  },
  {
    id: "h50", concurso: "3687", data: "16/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 12, 13, 14, 16, 17, 18, 20, 21, 23, 24, 25],
    obs: ""
  },
  {
    id: "h51", concurso: "3688", data: "18/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 7, 11, 12, 16, 17, 19, 21, 24, 25],
    obs: ""
  },
  {
    id: "h52", concurso: "3689", data: "19/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 23],
    obs: ""
  },
  {
    id: "h53", concurso: "3690", data: "20/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 8, 9, 12, 15, 18, 19, 20, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h54", concurso: "3691", data: "21/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 8, 9, 10, 13, 14, 15, 18, 19, 21, 23, 24, 25],
    obs: ""
  },
  {
    id: "h55", concurso: "3692", data: "22/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 7, 9, 10, 13, 14, 15, 19, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h56", concurso: "3693", data: "23/05/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 18, 20, 21, 25],
    obs: ""
  },
  {
    id: "h1", concurso: "", data: "25/05/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 4°46', na 5ª Casa;Lua em Libra 4°55', na 9ª Casa;Mercúrio em Gêmeos 18°02', na 5ª Casa;Vênus em Câncer 8°17', na 6ª Casa;Marte em Touro 5°17', na 4ª Casa;Júpiter em Câncer 22°57', na 6ª Casa;Saturno em Áries 11°43', na 3ª Casa;Urano em Gêmeos 1°42', na 5ª Casa;Netuno em Áries 3°56', na 3ª Casa;Plutão em Aquário 5°25', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°29', retrógrado, na 2ª Casa;Lilith em Sagitário 17°30', na 11ª Casa;Quíron em Áries 28°53', na 4ª Casa;Fortuna em Virgem 24°35', na 9ª Casa.Vertex em Touro 25°59', na 5ª Casa,Ascendente em Capricórnio 24°44',Meio do Céu em Libra 18°23'",
    jogoGerado: [2, 4, 5, 7, 8, 9, 13, 14, 17, 18, 19, 20, 22, 23, 24],
    resultado: [2, 4, 5, 7, 8, 9, 13, 14, 17, 18, 19, 20, 22, 23, 24],
    obs: "Mapa retroativo — análise inicial do método"
  },
  {
    id: "h2", concurso: "", data: "26/05/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 5°44', na 5ª Casa;Lua em Libra 17°19', na 9ª Casa;Mercúrio em Gêmeos 19°59', na 5ª Casa;Vênus em Câncer 9°28', na 6ª Casa;Marte em Touro 6°02', na 4ª Casa;Júpiter em Câncer 23°08', na 6ª Casa;Saturno em Áries 11°48', na 3ª Casa;Urano em Gêmeos 1°46', na 5ª Casa;Netuno em Áries 3°57', na 3ª Casa;Plutão em Aquário 5°24', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°26', retrógrado, na 2ª Casa;Lilith em Sagitário 17°36', na 11ª Casa;Quíron em Áries 28°56', na 4ª Casa; Fortuna em Virgem 14°01', na 8ª Casa. Vértice da 8ª casa em Touro 26°27', Ascendente na 4ª casa em Aquário 0°44'MC em Libra 19°26'",
    jogoGerado: [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 20, 21, 25],
    resultado: [1, 2, 3, 4, 6, 8, 9, 13, 15, 17, 18, 21, 22, 23, 24],
    obs: "Erro grave — energia mal interpretada, casas baixas ignoradas"
  },
  {
    id: "h3", concurso: "", data: "27/05/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 6°42', na 5ª Casa;Lua em Libra 29°33', na 10ª Casa;Mercúrio em Gêmeos 21°54', na 5ª Casa;Vênus em Câncer 10°39', na 6ª Casa;Marte em Touro 6°47', na 4ª Casa;Júpiter em Câncer 23°19', na 6ª Casa;Saturno em Áries 11°53', na 3ª Casa;Urano em Gêmeos 1°49', na 5ª Casa;Netuno em Áries 3°58', na 3ª Casa;Plutão em Aquário 5°24', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°23', retrógrado, na 2ª Casa; Lilith em Sagitário 17°43', na 11ª Casa; Quíron em Áries 28°59', na4ª Casa; Fortuna em Virgem 3°36', na 5ªCasa . Vértice da 8ª casa em Touro 26°56', Ascendente na 5ª casa em Capricórnio 26°28', Meio do Céu em Libra 20°30'",
    jogoGerado: [2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 21, 22, 23, 24, 25],
    resultado: [2, 3, 5, 6, 7, 9, 11, 13, 15, 16, 17, 19, 21, 23, 24],
    obs: "Melhor dos 3 jogos alternativos gerados naquele dia"
  },
  {
    id: "h4", concurso: "", data: "28/05/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 7°39', na 5ª Casa;Lua em Escorpião 11°39', na 10ª Casa;Mercúrio em Gêmeos 23°47', na 5ª Casa;Vênus em Câncer 11°50', na 6ª Casa;Marte em Touro 7°31', na 4ª Casa;Júpiter em Câncer 23°30', na 6ª Casa;Saturno em Áries 11°59', na 3ª Casa;Urano em Gêmeos 1°53', na 5ª Casa;Netuno em Áries 4°00', na 3ª Casa;Plutão em Aquário 5°23', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°20', retrógrado, na 2ª Casa; Lilith em Sagitário 17°50', na 11ª Casa; Quíron em Áries 29°02', na 4ª Casa; Fortuna em Leão 23°20', na 5ªCasa . Vértice da 8ª casa em Touro 27°25', Ascendente na 5ª casa em Capricórnio 27°19', Meio do Céu em Libra 21°33'",
    jogoGerado: [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 18, 19, 21, 23, 25],
    resultado: [1, 5, 6, 7, 9, 10, 13, 15, 17, 18, 19, 20, 21, 24, 25],
    obs: "9 acertos — tirou 10 e 24 que saíram"
  },
  {
    id: "h5", concurso: "", data: "29/05/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 8°37', na 5ª Casa;Lua em Sagitário 5°35', na 11ª Casa;Mercúrio em Gêmeos 27°24', na 5ª Casa;Vênus em Câncer 14°12', na 6ª Casa;Marte em Touro 9°01', na 4ª Casa;Júpiter em Câncer 23°52', na 6ª Casa;Saturno em Áries 12°09', na 3ª Casa;Urano em Gêmeos 2°00', na 5ª Casa;Netuno em Áries 4°02', na 3ª Casa;Plutão em Aquário 5°22', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°13', retrógrado, na 2ª Casa; Lilith em Sagitário 18°03', na 11ª Casa; Quíron em Áries 29°08', na4ª Casa; Fortuna em Câncer 12°53', noVértice da 6ª Casa em Touro 29°21', noAscendente da 4ª Casa em Aquário 0°44'MC em Libra 25°42'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 16, 18, 23, 24, 25],
    resultado: [1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 16, 18, 20, 21, 23],
    obs: "ASC mudou para Aquário. Regra dos graus dos planetas móveis descoberta"
  },
  {
    id: "h6", concurso: "", data: "30/05/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 9°34', na 5ª Casa;Lua em Sagitário 29°20', na 11ª Casa;Mercúrio em Câncer 0°50', na 5ª Casa;Vênus em Câncer 16°34', na 6ª Casa;Marte em Touro 10°30', na 4ª Casa;Júpiter em Câncer 24°15', na 6ª Casa;Saturno em Áries 12°19', na 3ª Casa;Urano em Gêmeos 2°07', na 5ª Casa;Netuno em Áries 4°04', na 3ª Casa;Plutão em Aquário 5°21', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°07', retrógrado, na 2ª Casa;Lilith em Sagitário 18°17', na 11ª Casa;Quíron em Áries 29°14', na4ª Casa;Fortuna em Câncer 12°53', noVértice da 6ª Casa em Touro 29°21', noAscendente da 4ª Casa em Aquário 0°44'MC em Libra 25°42'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 9, 13, 14, 18, 21, 23, 24, 25],
    resultado: [1, 2, 3, 5, 6, 8, 9, 11, 14, 18, 20, 21, 22, 24, 25],
    obs: "10 acertos — descoberta: dois planetas fracos no mesmo grau não ativam"
  },
  {
    id: "h7", concurso: "", data: "01/06/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 11°29', na 5ª Casa;Lua em Aquário 29°37', na 1ª Casa;Mercúrio em Câncer 8°36', na 6ª Casa;Vênus em Câncer 22°27', na 6ª Casa;Marte em Touro 14°11', na 4ª Casa;Júpiter em Câncer 25°13', na 6ª Casa;Saturno em Áries 12°43', na 3ª Casa;Urano em Gêmeos 2°24', na 4ª Casa;Netuno em Áries 4°10', na 3ª Casa;Plutão em Aquário 5°17', retrógrado, na 1ª Casa;Nodo Norte em Peixes 3°51', retrógrado, na 2ª Casa;Lilith em Sagitário 18°50', na 11ª Casa;Quíron em Áries 29°28', na4ª Casa;Fortuna em Touro 21°41', noVértice da 4ª Casa em Gêmeos 1°44', noAscendente da 4ª Casa em Aquário 5°02'Meio do Céu em Escorpião 0°53'",
    jogoGerado: [],
    resultado: [1, 3, 7, 8, 9, 10, 12, 13, 14, 17, 18, 19, 20, 23, 25],
    obs: "Usado para calibrar regras (estrutura ASC Aquário / DSC Leão)"
  },
  {
    id: "h8", concurso: "", data: "02/06/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 12°27', na 5ª Casa;Lua em Capricórnio 11°13', na 12ª Casa;Mercúrio em Câncer 2°29', na 5ª Casa;Vênus em Câncer 17°45', na 6ª Casa;Marte em Touro 11°14', na 4ª Casa;Júpiter em Câncer 24°26', na 6ª Casa;Saturno em Áries 12°24', na 3ª Casa;Urano em Gêmeos 2°10', na 5ª Casa;Netuno em Áries 4°05', na 3ª Casa;Plutão em Aquário 5°20', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°04', retrógrado, na 2ª Casa; Lilith em Sagitário 18°23', na 11ª Casa; Quíron em Áries 29°17', na4ª Casa; Fortuna em Câncer 2°50', na 5ª Casa. Vértice da 5ª casa em Touro 29°50', Ascendente na 4ª casa em Aquário 1°36', Meio do Céu em Libra 26°44'",
    jogoGerado: [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 17, 18, 24, 25],
    resultado: [1, 2, 4, 7, 8, 9, 10, 12, 13, 14, 17, 22, 23, 24, 25],
    obs: "10 acertos — descoberta: DSC em Leão = 5° signo (correção de erro anterior de 8°)"
  },
  {
    id: "h9", concurso: "", data: "03/06/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 13°24', na 5ª Casa;Lua em Capricórnio 23°08', na 12ª Casa;Mercúrio em Câncer 4°05', na 5ª Casa;Vênus em Câncer 18°55', na 6ª Casa;Marte em Touro 11°58', na 4ª Casa;Júpiter em Câncer 24°38', na 6ª Casa;Saturno em Áries 12°29', na 3ª Casa;Urano em Gêmeos 2°14', na 4ª Casa;Netuno em Áries 4°06', na 3ª Casa;Plutão em Aquário 5°19', retrógrado, na 1ª Casa;Nodo Norte em Peixes 4°00', retrógrado, na 2ª Casa; Lilith em Sagitário 18°30', na 11ª Casa; Quíron em Áries 29°19', na4ª Casa; Fortuna em Gêmeos 22°44', na 5ª Casa. Vértice da 5ª casa em Gêmeos 0°19', Ascendente na 4ª casa em Aquário 2°27', Meio do Céu em Libra 27°47'",
    jogoGerado: [2, 5, 6, 9, 10, 13, 14, 15, 17, 18, 19, 20, 23, 24, 25],
    resultado: [2, 3, 5, 9, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
    obs: "Jogo misto horária+estatística — 10 acertos"
  },
  {
    id: "h12", concurso: "3703", data: "05/06/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 15°19', na 5ª Casa;Lua em Aquário 17°16', na 1ª Casa;Mercúrio em Câncer 7°09', na 6ª Casa;Vênus em Câncer 21°17', na 6ª Casa;Marte em Touro 13°27', na 4ª Casa;Júpiter em Câncer 25°01', na 6ª Casa;Saturno em Áries 12°39', na 3ª Casa;Urano em Gêmeos 2°21', na 4ª Casa;Netuno em Áries 4°09', na 3ª Casa;Plutão em Aquário 5°18', retrógrado, na 1ª Casa;Nodo Norte em Peixes 3°54', retrógrado, na 2ª Casa; Lilith em Sagitário 18°44', na 11ª Casa; Quíron em Áries 29°25', na 3ª Casa; Fortuna em Gêmeos 2°13', na 5ª Casa. Vértice da 4ª casa em Gêmeos 1°16', Ascendente na 4ª casa em Aquário 4°10', Meio do Céu em Libra 29°51'",
    jogoGerado: [],
    resultado: [1, 3, 5, 7, 8, 9, 10, 14, 15, 17, 21, 22, 23, 24, 25],
    obs: "Concurso 3703 — calibrou: Vênus gera grau+grau+1; Júpiter exaltado gera grau,-1,-2"
  },
  {
    id: "h11", concurso: "3704", data: "06/06/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 16°17', na 5ª Casa;Lua em Aquário 29°37', na 1ª Casa;Mercúrio em Câncer 8°36', na 6ª Casa;Vênus em Câncer 22°27', na 6ª Casa;Marte em Touro 14°11', na 4ª Casa;Júpiter em Câncer 25°13', na 6ª Casa;Saturno em Áries 12°43', na 3ª Casa;Urano em Gêmeos 2°24', na 4ª Casa;Netuno em Áries 4°10', na 3ª Casa;Plutão em Aquário 5°17', retrógrado, na 1ª Casa;Nodo Norte em Peixes 3°51', retrógrado, na 2ª Casa;Lilith em Sagitário 18°50', na 11ª Casa;Quíron em Áries 29°28', na3ª Casa;Fortuna em Touro. 21°41', noVértice da 4ª Casa em Gêmeos 1°44', noAscendente da 4ª Casa em Aquário 5°02'Meio do Céu em Escorpião 0°53'",
    jogoGerado: [],
    resultado: [1, 3, 4, 9, 10, 11, 12, 13, 14, 15, 19, 20, 22, 23, 25],
    obs: "Concurso 3704 — MC mudou para Escorpião pela primeira vez"
  },
  {
    id: "h10", concurso: "3705", data: "08/06/2026", hora: "21h",
    textoMapa: "Sol em Gêmeos 18°11', na 5ª Casa;Lua em Peixes 25°15', na 2ª Casa;Mercúrio em Câncer 11°22', na 6ª Casa;Vênus em Câncer 24°48', na 6ª Casa;Marte em Touro 15°39', na 4ª Casa;Júpiter em Câncer 25°36', na 6ª Casa;Saturno em Áries 12°52', na 3ª Casa;Urano em Gêmeos 2°31', na 4ª Casa;Netuno em Áries 4°11', na 3ª Casa;Plutão em Aquário 5°15', retrógrado, na 12ª Casa;Nodo Norte em Peixes 3°45', retrógrado, na 2ª Casa;Lilith em Sagitário 19°04', na 11ª Casa;Quíron em Áries 29°33', na3ª Casa;Fortuna em Áries. 29°41', noVértice da 3ª Casa em Gêmeos 2°41', noAscendente da 4ª Casa em Aquário 6°45'MC em Escorpião 2°56'",
    jogoGerado: [2, 5, 6, 9, 10, 13, 14, 15, 17, 18, 19, 20, 23, 24, 25],
    resultado: [1, 3, 4, 6, 8, 10, 14, 15, 16, 18, 20, 21, 22, 24, 25],
    obs: "Jogo gerado com método completo: planetas lentos ancoram (Lilith, Júpiter, Quíron)"
  },
  {
    id: "h57", concurso: "3706", data: "09/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h58", concurso: "3707", data: "10/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 9, 10, 13, 14, 18, 20, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h59", concurso: "3708", data: "11/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 8, 9, 12, 16, 17, 18, 19, 21, 23, 24],
    obs: ""
  },
  {
    id: "h60", concurso: "3709", data: "12/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 9, 10, 11, 14, 15, 18, 19, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h61", concurso: "3710", data: "14/06/2026", hora: "11h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 9, 12, 13, 14, 15, 16, 17, 18, 25],
    obs: ""
  },
  {
    id: "h62", concurso: "3711", data: "15/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 20, 22, 24, 25],
    obs: ""
  },
  {
    id: "h63", concurso: "3712", data: "16/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h64", concurso: "3713", data: "17/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 19, 20, 22],
    obs: ""
  },
  {
    id: "h65", concurso: "3714", data: "18/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21],
    obs: ""
  },
  {
    id: "h66", concurso: "3715", data: "20/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 9, 11, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h67", concurso: "3716", data: "20/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 11, 12, 15, 17, 18, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h68", concurso: "3717", data: "22/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 9, 10, 11, 14, 15, 17, 18, 20, 25],
    obs: ""
  },
  {
    id: "h69", concurso: "3718", data: "23/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 7, 9, 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, 25],
    obs: ""
  },
  {
    id: "h70", concurso: "3719", data: "25/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 8, 10, 11, 12, 14, 15, 18, 19, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h71", concurso: "3720", data: "26/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 22, 24],
    obs: ""
  },
  {
    id: "h72", concurso: "3721", data: "27/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 20, 21, 23, 24],
    obs: ""
  },
  {
    id: "h73", concurso: "3722", data: "29/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 23],
    obs: ""
  },
  {
    id: "h74", concurso: "3723", data: "30/06/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 5, 6, 7, 10, 12, 15, 17, 18, 19, 20, 22, 23, 25],
    obs: ""
  },
  {
    id: "h75", concurso: "3724", data: "01/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 7, 12, 15, 16, 17, 19, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h76", concurso: "3725", data: "02/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 8, 11, 13, 14, 16, 17, 19, 21, 24, 25],
    obs: ""
  },
  {
    id: "h77", concurso: "3726", data: "03/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 10, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25],
    obs: ""
  },
  {
    id: "h78", concurso: "3727", data: "04/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 9, 10, 11, 13, 14, 16, 18, 19, 22, 23],
    obs: ""
  },
  {
    id: "h79", concurso: "3728", data: "06/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 6, 7, 8, 10, 11, 16, 17, 19, 21, 22, 23, 25],
    obs: ""
  },
  {
    id: "h80", concurso: "3729", data: "07/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22],
    obs: ""
  },
  {
    id: "h81", concurso: "3730", data: "08/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 8, 11, 12, 13, 14, 15, 16, 19, 20, 21, 24],
    obs: ""
  },
  {
    id: "h82", concurso: "3731", data: "09/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 16, 17, 22, 23, 25],
    obs: ""
  },
  {
    id: "h83", concurso: "3732", data: "10/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 7, 8, 11, 13, 16, 17, 18, 19, 20, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h84", concurso: "3733", data: "11/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 7, 10, 11, 12, 13, 14, 16, 17, 19, 22, 25],
    obs: ""
  },
  {
    id: "h85", concurso: "3734", data: "13/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 8, 10, 12, 13, 14, 15, 16, 17, 19, 22, 23, 25],
    obs: ""
  },
  {
    id: "h86", concurso: "3735", data: "14/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 7, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25],
    obs: ""
  },
  {
    id: "h87", concurso: "3736", data: "15/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 6, 7, 8, 9, 11, 12, 14, 17, 18, 19, 21, 22, 23],
    obs: ""
  },
  {
    id: "h88", concurso: "3737", data: "16/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 22, 23, 25],
    obs: ""
  },
  {
    id: "h89", concurso: "3738", data: "17/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 17, 18, 20, 23, 24],
    obs: ""
  },
  {
    id: "h90", concurso: "3739", data: "19/07/2026", hora: "11h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 9, 11, 13, 15, 16, 18, 19, 20, 23, 24, 25],
    obs: ""
  },
  {
    id: "h91", concurso: "3740", data: "20/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 5, 6, 8, 9, 11, 12, 13, 15, 16, 17, 20, 21, 22],
    obs: ""
  },
  {
    id: "h92", concurso: "3741", data: "21/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 9, 11, 12, 14, 15, 16, 18, 20, 21, 22, 23],
    obs: ""
  },
  {
    id: "h93", concurso: "3742", data: "22/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 9, 10, 12, 13, 14, 15, 16, 19, 20, 21, 23],
    obs: ""
  },
  {
    id: "h94", concurso: "3743", data: "23/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 9, 10, 11, 13, 15, 18, 19, 20, 21, 23, 25],
    obs: ""
  },
  {
    id: "h95", concurso: "3744", data: "24/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 7, 10, 14, 16, 17, 18, 20, 21, 22, 23, 24],
    obs: ""
  },
  {
    id: "h96", concurso: "3745", data: "26/07/2026", hora: "11h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 19, 21, 22, 24],
    obs: ""
  },
  {
    id: "h97", concurso: "3746", data: "27/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 7, 8, 9, 10, 14, 15, 17, 18, 21, 22, 24],
    obs: ""
  },
  {
    id: "h98", concurso: "3747", data: "28/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 18, 19, 21, 24, 25],
    obs: ""
  },
  {
    id: "h99", concurso: "3748", data: "29/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 8, 9, 11, 13, 14, 15, 17, 19, 20, 22, 25],
    obs: ""
  },
  {
    id: "h100", concurso: "3749", data: "30/07/2026", hora: "21h",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 9, 11, 12, 14, 17, 19, 21, 23, 24, 25],
    obs: ""
  },
];

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
  // Também cobre: "retrógrado", casas com "na" ou "no", MC/ASC sem "em ... Casa"
  const regexPlaneta = new RegExp(
    `(Sol|Lua|Mercúrio|Mercurio|Vênus|Venus|Marte|Júpiter|Jupiter|Saturno|Urano|Netuno|Plutão|Plutao|Nodo Norte|Nodo Lunar|Lilith|Quíron|Quiron|Fortuna|Vértice|Vertice|Vertex)\\.?\\s+(?:da \\d+ª\\s*[Cc]asa\\s+)?em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º](\\d{1,2})?'?,?\\s*(retrógrado,?\\s*)?(?:na|no)?\\s*(\\d{1,2})?ª?\\s*[Cc]asa?`,
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
      casa: m[6] || planetas[id]?.casa || "",
    };
  }

  // ── ASC: "Ascendente ... em Signo Grau°Min'" (pode ter "na Nª casa" antes do signo)
  const regexAsc = new RegExp(`Ascendente[^.]*?em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º](\\d{1,2})?'?`, "i");
  const mAsc = t.match(regexAsc);
  if (mAsc) planetas.asc = { signo: normalizarSigno(mAsc[1]), grau: mAsc[2], minutos: mAsc[3] || "0" };

  // ── MC: "Meio do Céu em Signo Grau°Min'" ou "MC em Signo Grau°Min'"
  const regexMc = new RegExp(`(?:Meio do Céu|Meio do Ceu|\\bMC)\\s+em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º](\\d{1,2})?'?`, "i");
  const mMc = t.match(regexMc);
  if (mMc) planetas.mc = { signo: normalizarSigno(mMc[1]), grau: mMc[2], minutos: mMc[3] || "0" };

  // ── Fortuna: fallback caso a regex principal não pegue (ex: "Fortuna em Áries. 29°41'")
  if (!planetas.fortuna) {
    const regexFortuna = new RegExp(`Fortuna\\s+em\\s+(${SIGNOS_REGEX})\\.?\\s*(\\d{1,2})[°º](\\d{1,2})?'?`, "i");
    const mF = t.match(regexFortuna);
    if (mF) planetas.fortuna = { signo: normalizarSigno(mF[1]), grau: mF[2], minutos: mF[3] || "0", casa: "" };
  }

  // ── Vértice: fallback (ex: "Vértice da 3ª Casa em Gêmeos 2°41'")
  if (!planetas.vertice) {
    const regexVert = new RegExp(`(?:Vértice|Vertice|Vertex)\\s+da\\s+(\\d{1,2})ª\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})\\.?\\s*(\\d{1,2})[°º](\\d{1,2})?'?`, "i");
    const mV = t.match(regexVert);
    if (mV) planetas.vertice = { signo: normalizarSigno(mV[2]), grau: mV[3], minutos: mV[4] || "0", casa: mV[1] };
  }

  // ── Cúspides: "Nª Casa em Signo Grau°Min'"
  const regexCuspide = new RegExp(`(\\d{1,2})ª\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})\\s+(\\d{1,2})[°º](\\d{1,2})?'?`, "gi");
  let mc2;
  while ((mc2 = regexCuspide.exec(t)) !== null) {
    const casa = mc2[1];
    cuspides[casa] = { signo: normalizarSigno(mc2[2]), grau: mc2[3], minutos: mc2[4] || "0" };
  }

  // ── Aspectos: "ORIGEM em TIPO com/de DESTINO (Orbe: ...)" — cobre qualquer planeta,
  // ponto ou ângulo como origem (Lua, Sol, MC, ASC, Fortuna, etc.), não só a Lua.
  // Guardamos a lista de aspectos em cada ponto de origem: planetas[id].aspectos = [...]
  const NOMES_ORIGEM_DESTINO = "Sol|Lua|Mercúrio|Mercurio|Vênus|Venus|Marte|Júpiter|Jupiter|Saturno|Urano|Netuno|Plutão|Plutao|Nodo(?:\\s+Norte)?|Lilith|Quíron|Quiron|Fortuna|Vértice|Vertice|Vertex|MC|Meio do Céu|Meio do Ceu|Ascendente|ASC";
  const regexAspecto = new RegExp(
    `(${NOMES_ORIGEM_DESTINO})\\s+em\\s+(trígono|trigono|sextil|quadratura|oposição|oposicao|quincúncio|quincuncio|conjunção|conjuncao|octil|tri-óctil|tri-octil)\\s+(?:com|de|ao|aos|à|às|a|o)?\\s*(${NOMES_ORIGEM_DESTINO})`,
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
      return NOME_PARA_ID[n] || null;
    };
    const origemId = normalizarNomeAspecto(ma[1]);
    const destinoId = normalizarNomeAspecto(ma[3]);
    if (!origemId || !destinoId) continue;
    if (!planetas[origemId]) continue; // só guarda se o ponto de origem foi identificado no mapa
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    planetas[origemId].aspectos.push({ tipo: ma[2].toLowerCase(), planeta: destinoId });
  }

  // ── Segundo padrão: "TIPO do/de ORIGEM com DESTINO" ou "ORIGEM TIPO DESTINO" (sem "em") —
  // formato comum para aspectos de MC/ASC/DSC/IC, ex: "Trígono do Ascendente com Urano",
  // "MC Quadratura Júpiter", "Quadratura do Meio do Céu com Plutão".
  const regexAspecto2 = new RegExp(
    `(?:(trígono|trigono|sextil|quadratura|oposição|oposicao|quincúncio|quincuncio|conjunção|conjuncao|octil|tri-óctil|tri-octil)\\s+(?:do|da|de)?\\s*(${NOMES_ORIGEM_DESTINO})\\s+(?:com|de|ao|aos|à|às|a|o)?\\s*(${NOMES_ORIGEM_DESTINO}))`,
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
      return NOME_PARA_ID[n] || null;
    };
    const origemId = normalizarNomeAspecto(ma2[2]);
    const destinoId = normalizarNomeAspecto(ma2[3]);
    if (!origemId || !destinoId || origemId === destinoId) continue;
    if (!planetas[origemId]) continue;
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    const jaTem = planetas[origemId].aspectos.some(a => a.planeta === destinoId && a.tipo === ma2[1].toLowerCase());
    if (!jaTem) planetas[origemId].aspectos.push({ tipo: ma2[1].toLowerCase(), planeta: destinoId });
  }

  return { planetas, cuspides };
}

// ─── Funções de análise ───────────────────────────────────────────────────────
function getNumeroGrau(grau, minutos) {
  if (!grau && grau !== 0) return [];
  const g = parseInt(grau);
  const m = parseInt(minutos || 0);
  if (g === 0) return [1];
  if (g > 25) return [25];
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

// Diferença angular mínima entre dois graus (0-29), tratando também graus fracos
function diffGrau(g1, g2) {
  return Math.abs(parseInt(g1) - parseInt(g2));
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
// que já é pontuada separadamente).
function cadeiaDispositora(planetas, idInicial, maxPassos = 6) {
  const casasVisitadas = [];
  const visitados = new Set();
  let atual = idInicial;
  for (let i = 0; i < maxPassos; i++) {
    const p = planetas[atual];
    if (!p?.signo) break;
    const regente = regenteDoSigno(p.signo);
    const regenteId = NOME_REGENTE_PARA_ID[regente];
    if (!regenteId || regenteId === atual) break;
    const pRegente = planetas[regenteId];
    if (pRegente?.casa) casasVisitadas.push({ casa: parseInt(pRegente.casa), via: regenteId });
    if (visitados.has(regenteId)) break; // loop fechado
    visitados.add(regenteId);
    atual = regenteId;
  }
  return casasVisitadas;
}

function analisarMapa(planetas, cuspides, historico = []) {
  const scores = {};
  for (let i = 1; i <= 25; i++) scores[i] = { pontos: 0, fontes: [] };

  const addPonto = (num, pontos, fonte) => {
    if (num >= 1 && num <= 25) {
      scores[num].pontos += pontos;
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

  // ── Bloqueios da Lua: planetas em oposição/quadratura com a Lua têm o grau bloqueado,
  // EXCETO quando o planeta bloqueado é forte por dignidade (domicílio/exaltação) —
  // planetas fortes resistem à tensão.
  const luaBloqueados = new Set();
  if (lua?.aspectos) {
    lua.aspectos.forEach(asp => {
      if (["oposição", "quadratura"].includes(asp.tipo?.toLowerCase())) {
        const alvo = planetas[asp.planeta];
        if (alvo?.grau) {
          const forcaAlvo = getForcaPlaneta(asp.planeta, alvo.signo, alvo.casa);
          if (forcaAlvo < 3) {
            const nums = getNumeroGrau(alvo.grau, alvo.minutos);
            nums.forEach(n => luaBloqueados.add(n));
          }
        }
      }
    });
  }

  // ── Dois planetas fracos (queda ou exílio) no mesmo grau exato NÃO se ativam —
  // detectamos os pares e marcamos para pular na análise de grau.
  const graosFracosAnulados = new Set();
  const idsPlanetas = Object.keys(planetas).filter(id => !["asc", "mc"].includes(id));
  for (let i = 0; i < idsPlanetas.length; i++) {
    for (let j = i + 1; j < idsPlanetas.length; j++) {
      const a = planetas[idsPlanetas[i]], b = planetas[idsPlanetas[j]];
      if (!a?.grau || !b?.grau) continue;
      if (parseInt(a.grau) !== parseInt(b.grau)) continue;
      const digA = getDignidadePlaneta(idsPlanetas[i], a.signo);
      const digB = getDignidadePlaneta(idsPlanetas[j], b.signo);
      const fracoA = digA === "queda" || digA === "exilio";
      const fracoB = digB === "queda" || digB === "exilio";
      if (fracoA && fracoB) {
        graosFracosAnulados.add(parseInt(a.grau));
      }
    }
  }

  // ── Dois planetas/pontos no mesmo grau exato = sinal reforçado (salvo par fraco+fraco acima) ──
  for (let i = 0; i < idsPlanetas.length; i++) {
    for (let j = i + 1; j < idsPlanetas.length; j++) {
      const idA = idsPlanetas[i], idB = idsPlanetas[j];
      const a = planetas[idA], b = planetas[idB];
      if (!a?.grau || !b?.grau) continue;
      const g = parseInt(a.grau);
      if (g !== parseInt(b.grau)) continue;
      if (graosFracosAnulados.has(g)) continue;
      addPonto(g, 4, `${idA} e ${idB} no mesmo grau (${g}°) — sinal duplo`);
    }
  }

  // ── Análise de cada planeta: grau, signo, casa ──
  Object.entries(planetas).forEach(([id, p]) => {
    if (!p?.grau && p?.grau !== 0) return;
    if (id === "asc" || id === "mc") return;

    const forca = getForcaPlaneta(id, p.signo, p.casa);
    const dig = getDignidadePlaneta(id, p.signo);
    const fraco = dig === "queda" || dig === "exilio";

    // Lilith: faixa completa (grau-2 a grau+1) só quando o MC está a até 3° dela —
    // caso contrário, considera só o grau exato (sinal mais fraco).
    let nums;
    if (id === "lilith") {
      const mcAtual = planetas.mc;
      const mcPertoDeLilith = mcAtual?.grau != null && diffGrau(mcAtual.grau, p.grau) <= 3;
      nums = mcPertoDeLilith ? getFaixaLilith(p.grau, p.minutos) : getNumeroGrau(p.grau, p.minutos);
    } else {
      nums = getNumeroGrau(p.grau, p.minutos);
    }

    nums.forEach(n => {
      if (graosFracosAnulados.has(n)) return;
      if (luaBloqueados.has(n) && id !== "lua") return;

      // Planeta fraco (queda/exílio) só pontua pelo grau se a Lua aplica
      // harmonicamente a ele, OU se está em casa angular (compensa a fraqueza).
      if (fraco) {
        const tipoCasa = CASAS_TIPO[parseInt(p.casa)];
        const luaAtivaEste = lua?.aspectos?.some(a =>
          a.planeta === id && ["trígono", "sextil", "conjunção", "quincúncio"].includes(a.tipo?.toLowerCase())
        );
        if (!luaAtivaEste && tipoCasa !== "angular") return;
      }

      let pts = 1;
      if (forca >= 4) pts = 4;
      else if (forca >= 3) pts = 3;
      else if (forca >= 2) pts = 2;
      if (id === "lilith") pts = Math.max(1, pts - 1);
      addPonto(n, pts, `${id} em ${p.grau}° (${dig})`);
    });

    // Signo do planeta → número do signo (Lua e Fortuna sempre; outros pontos leves)
    if (["lua", "fortuna"].includes(id) && p.signo) {
      const signoObj = SIGNOS.find(s => s.nome === p.signo);
      if (signoObj) addPonto(signoObj.num, 2, `${id} em ${p.signo} (${signoObj.num}° signo)`);
    }

    // Casa do planeta
    if (p.casa) {
      const casaNum = parseInt(p.casa);
      if (casaNum >= 1 && casaNum <= 12) {
        let pts = 1;
        if (id === "fortuna") pts = 4;
        else if (["lua", "sol", "jupiter", "venus"].includes(id) && forca >= 2) pts = 3;
        else if (forca >= 2) pts = 2;
        addPonto(casaNum, pts, `${id} na ${casaNum}ª Casa`);
      }
    }
  });

  // ── Cadeia dispositora: para cada planeta forte (domicílio/exaltação ou angular),
  // percorre signo→regente→casa e pontua as casas visitadas no caminho.
  Object.entries(planetas).forEach(([id, p]) => {
    if (!p?.signo || id === "asc" || id === "mc") return;
    const forca = getForcaPlaneta(id, p.signo, p.casa);
    if (forca < 2) return; // só cadeias de planetas com alguma força
    const cadeia = cadeiaDispositora(planetas, id);
    cadeia.forEach(({ casa, via }, idx) => {
      if (casa >= 1 && casa <= 25) {
        const pts = idx === 0 ? 2 : 1;
        addPonto(casa, pts, `Cadeia dispositora: ${id} → ${via} (${casa}ª Casa)`);
      }
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
  if (cuspides) {
    Object.entries(cuspides).forEach(([casa, { grau, minutos }]) => {
      if (!grau && grau !== 0) return;
      const casaNum = parseInt(casa);
      const g = parseInt(grau);
      const nums = getNumeroGrau(grau, minutos);
      nums.forEach(n => addPonto(n, 2, `Cúspide ${casaNum}ª em ${grau}°`));
      if (g - 1 >= 1) addPonto(g - 1, 1, `Cúspide ${casaNum}ª grau-1`);
    });
  }

  // ── Quíron em Áries perto de 29-30° → sempre aponta para 25 ──
  if (quiron?.grau) {
    const g = parseInt(quiron.grau);
    if (g >= 27) addPonto(25, 3, `Quíron em ${g}° → 25`);
  }

  // ── Eixo 6+7 = 13, quando Júpiter na 6ª e Sol rege a 7ª (loteria) ──
  if (jupiter?.casa === "6" && sol) {
    addPonto(13, 3, "Júpiter na 6ª + Sol rege 7ª → eixo 6+7=13");
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

  // ── Recepção mútua Lua-Júpiter: ambas as casas ativadas com força ──
  if (lua?.signo && jupiter?.signo) {
    const luaSigObj = SIGNOS.find(s => s.nome === lua.signo);
    const jupSigObj = SIGNOS.find(s => s.nome === jupiter.signo);
    if (luaSigObj?.regente === "Júpiter" && jupSigObj?.regente === "Lua") {
      if (lua.casa) addPonto(parseInt(lua.casa), 3, "Recepção mútua Lua-Júpiter");
      if (jupiter.casa) addPonto(parseInt(jupiter.casa), 3, "Recepção mútua Lua-Júpiter");
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

  // ── Marte no signo de Touro (cúspide tradicional da 5ª nos mapas do estudo) ──
  // ativa a 5ª mesmo sendo exilado ali, por representar o "terreno do jogo".
  if (marte?.signo === "Touro" && marte?.casa) {
    addPonto(5, 1, "Marte em Touro — terreno da 5ª Casa (jogo)");
  }

  // ── MC ativando um planeta por aspecto harmônico: reforça a casa desse planeta —
  // padrão observado repetidamente (ex: "MC trígono Sol" reforçando a 5ª Casa).
  if (mc?.aspectos) {
    mc.aspectos.forEach(asp => {
      if (["trígono", "sextil", "conjunção"].includes(asp.tipo)) {
        const alvo = planetas[asp.planeta];
        if (alvo?.casa) {
          addPonto(parseInt(alvo.casa), 2, `MC em aspecto harmônico com ${asp.planeta} → reforça ${alvo.casa}ª Casa`);
        }
      }
    });
  }

  // ── Saturno ativado pelo Sol (regente da loteria) via aspecto — mesmo em queda ──
  if (saturno?.grau && sol?.aspectos) {
    const solAtivaSaturno = sol.aspectos?.some(a => a.planeta === "saturno" &&
      ["sextil", "trígono", "conjunção"].includes(a.tipo?.toLowerCase()));
    if (solAtivaSaturno) {
      const nums = getNumeroGrau(saturno.grau, saturno.minutos);
      nums.forEach(n => addPonto(n, 2, "Saturno ativado pelo Sol (regente da loteria)"));
    }
  }

  // ── Sinal estatístico: números atrasados (não saem há vários concursos)
  // recebem um pequeno reforço quando o mapa já indica algum sinal para eles.
  // Números "quentes" (saindo em sequência) também ganham leve reforço —
  // refletindo o padrão observado de que 09, 13, 25 raramente falham.
  const comResultado = historico.filter(h => h.resultado && h.resultado.length > 0);
  if (comResultado.length >= 3) {
    const recentes = comResultado.slice(-7);
    for (let n = 1; n <= 25; n++) {
      let atraso = 0;
      for (let i = recentes.length - 1; i >= 0; i--) {
        if (recentes[i].resultado.includes(n)) break;
        atraso++;
      }
      if (atraso >= 3 && scores[n].pontos > 0) {
        addPonto(n, 1, `Atrasado há ${atraso} concursos — reforça sinal já existente`);
      }
      const vezes7 = recentes.filter(h => h.resultado.includes(n)).length;
      if (vezes7 >= 6 && scores[n].pontos > 0) {
        addPonto(n, 1, `Saiu em ${vezes7}/${recentes.length} últimos concursos`);
      }
    }
  }

  // ── Marca números bloqueados pela Lua ──
  Object.keys(scores).forEach(n => {
    if (luaBloqueados.has(parseInt(n))) scores[n].bloqueado = true;
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

function forcaTier(pts, bloqueado) {
  if (bloqueado) return { cor: T.red, label: "bloqueado", bg: T.redSoft };
  if (pts >= 10) return { cor: T.gold, label: "dominante", bg: T.goldSoft };
  if (pts >= 7) return { cor: "#B9A0E8", label: "forte", bg: "#B9A0E81A" };
  if (pts >= 5) return { cor: T.blue, label: "moderado", bg: "#6E8FD91A" };
  if (pts >= 3) return { cor: T.textDim, label: "fraco", bg: "#9498AC14" };
  if (pts >= 1) return { cor: T.textFaint, label: "residual", bg: "#5D617814" };
  return { cor: "#333952", label: "sem sinal", bg: "transparent" };
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

function EstrelaBar({ pontos, maxPts }) {
  const pct = Math.min(100, (pontos / maxPts) * 100);
  const tier = forcaTier(pontos, false);
  return (
    <div style={{ height: 6, borderRadius: 3, background: T.surface2, overflow: "hidden", position: "relative" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: tier.cor, borderRadius: 3, transition: "width 0.4s ease" }} />
    </div>
  );
}

function RankingVisual({ scores, onSelect, selecionado }) {
  const sorted = Object.entries(scores)
    .map(([n, s]) => ({ num: parseInt(n), ...s }))
    .sort((a, b) => b.pontos - a.pontos);

  const maxPts = Math.max(...sorted.map(s => s.pontos), 1);
  const top15 = sorted.slice(0, 15).map(s => s.num).sort((a, b) => a - b);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24, justifyContent: "center", padding: "8px 0" }}>
        {top15.map(n => {
          const tier = forcaTier(scores[n].pontos, scores[n].bloqueado);
          return (
            <div key={n} onClick={() => onSelect(n)} style={{
              width: 42, height: 42, borderRadius: "50%", cursor: "pointer",
              background: T.surface2, border: `2px solid ${tier.cor}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 800, color: tier.cor, fontFamily: T.fontNum,
              boxShadow: scores[n].pontos >= 10 ? `0 0 14px ${tier.cor}55` : "none",
              transform: selecionado === n ? "scale(1.15)" : "scale(1)",
              transition: "transform 0.15s"
            }}>
              {n}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {sorted.map(({ num, pontos, bloqueado }) => {
          const tier = forcaTier(pontos, bloqueado);
          return (
            <div key={num} onClick={() => onSelect(num)} style={{
              display: "grid", gridTemplateColumns: "26px 1fr 74px", gap: 10, alignItems: "center",
              cursor: "pointer", padding: "3px 6px", borderRadius: 6,
              background: selecionado === num ? T.surfaceHover : "transparent"
            }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: bloqueado ? T.red : T.text, textAlign: "right", fontFamily: T.fontNum }}>{num}</span>
              <EstrelaBar pontos={pontos} maxPts={maxPts} />
              <span style={{ fontSize: 10, color: tier.cor, textAlign: "right", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{tier.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DetalheNumero({ num, score }) {
  if (!score) return null;
  const tier = forcaTier(score.pontos, score.bloqueado);
  return (
    <Card style={{ marginTop: 12, background: T.surface2 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: 30, fontWeight: 800, color: tier.cor, fontFamily: T.fontNum }}>{num}</span>
        <span style={{ fontSize: 12, color: tier.cor, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {score.pontos} pts · {tier.label}
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

function PainelEstatisticas({ concursos, historicoCompleto }) {
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
          <p style={{ fontSize: 12, color: T.textFaint, margin: "0 0 12px", lineHeight: 1.5 }}>
            Média de acertos nos {acertosPorConcurso.length} concursos com mapa horário e jogo gerado.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <Card style={{ background: T.surface2 }}>
              <Label>Média de acertos</Label>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: T.fontNum, color: T.text }}>
                {mediaAcertos.toFixed(1)}<span style={{ fontSize: 14, color: T.textFaint }}> / 15</span>
              </div>
            </Card>
            <Card style={{ background: T.surface2 }}>
              <Label>Melhor resultado</Label>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: T.fontNum, color: T.gold }}>
                {melhorAcerto}<span style={{ fontSize: 14, color: T.textFaint }}> / 15</span>
              </div>
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

function CardHistorico({ item, onUpdateResultado, onUpdateMapa, onRemover, expandido, onToggle }) {
  const [editandoResultado, setEditandoResultado] = useState(false);
  const [resultadoTexto, setResultadoTexto] = useState((item.resultado || []).join(" "));
  const [editandoMapa, setEditandoMapa] = useState(false);
  const [mapaTexto, setMapaTexto] = useState(item.textoMapa || "");
  const [avisoMapa, setAvisoMapa] = useState(null);
  const acertos = contarAcertos(item.jogoGerado, item.resultado);

  const salvarResultado = () => {
    const numeros = resultadoTexto.split(/[\s,]+/).map(n => parseInt(n)).filter(n => n >= 1 && n <= 25);
    onUpdateResultado(item.id, numeros);
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
        <button onClick={(e) => { e.stopPropagation(); onRemover(item.id); }}
          style={{ fontSize: 11, color: T.textFaint, background: "none", border: "none", cursor: "pointer" }}>
          remover
        </button>
      </div>

      {expandido && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.borderSoft}` }}>
          <Label>Jogo gerado</Label>
          <BolinhasNumeros numeros={item.jogoGerado} cor={T.gold} />

          <div style={{ marginTop: 14 }}>
            <Label>Resultado real</Label>
            {!editandoResultado ? (
              <div>
                <BolinhasNumeros numeros={item.resultado} cor={T.blue} />
                <button onClick={() => setEditandoResultado(true)}
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
                  <Botao onClick={() => setEditandoResultado(false)} variant="ghost" small>Cancelar</Botao>
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
                  <Botao onClick={() => setEditandoMapa(false)} variant="ghost" small>Cancelar</Botao>
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
  const [concursoAtual, setConcursoAtual] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const [horaAtual, setHoraAtual] = useState("");
  const [expandidoId, setExpandidoId] = useState(null);
  const [salvoMsg, setSalvoMsg] = useState(null);
  const [carregado, setCarregado] = useState(false);

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

  const salvarHistorico = async (novo) => {
    setHistorico(novo);
    try { await window.storage.set("historico", JSON.stringify(novo)); } catch {}
  };

  const salvarMapaAtual = async (p, c, txt, conc, dt, hr) => {
    try { await window.storage.set("mapaAtual", JSON.stringify({ planetas: p, cuspides: c, texto: txt, concurso: conc, data: dt, hora: hr })); } catch {}
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
    setNumSelecionado(null);
  };

  const reanalisar = () => {
    const result = analisarMapa(planetas, cuspides, historico);
    setScores(result);
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

  const top15Atual = () => {
    if (!scores) return [];
    return Object.entries(scores)
      .map(([n, s]) => ({ num: parseInt(n), pontos: s.pontos }))
      .sort((a, b) => b.pontos - a.pontos)
      .slice(0, 15)
      .map(s => s.num)
      .sort((a, b) => a - b);
  };

  const concursoExistente = historico.find(h =>
    (concursoAtual.trim() && h.concurso && h.concurso === concursoAtual.trim()) ||
    (!concursoAtual.trim() && dataAtual.trim() && h.data === dataAtual.trim())
  );

  const salvarNoHistorico = async () => {
    const jogoGerado = top15Atual();
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

  const updateMapaHistorico = async (id, textoNovo) => {
    const { planetas: p, cuspides: c } = parseTextoMapa(textoNovo);
    const encontrados = Object.keys(p).length;
    let jogoGerado = [];
    if (encontrados > 0) {
      const scoresItem = analisarMapa(p, c, historico);
      jogoGerado = Object.entries(scoresItem)
        .map(([n, s]) => ({ num: parseInt(n), pontos: s.pontos }))
        .sort((a, b) => b.pontos - a.pontos)
        .slice(0, 15)
        .map(s => s.num)
        .sort((a, b) => a - b);
    }
    const novo = historico.map(h => h.id === id ? { ...h, textoMapa: textoNovo, jogoGerado } : h);
    await salvarHistorico(novo);
    return { encontrados, esperados: PLANETAS_CONFIG.length };
  };

  const removerHistorico = async (id) => {
    const novo = historico.filter(h => h.id !== id);
    await salvarHistorico(novo);
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
              <p style={{ fontSize: 12, color: T.textFaint, margin: 0 }}>
                {historico.length} análises registradas. Toque em um card para ver o mapa e inserir o resultado real.
              </p>
              <button onClick={exportarHistorico}
                style={{ fontSize: 11, fontWeight: 600, color: T.gold, background: T.goldSoft, border: `1px solid ${T.gold}55`, borderRadius: 8, padding: "6px 10px", cursor: "pointer", whiteSpace: "nowrap" }}>
                ⬇ Exportar backup
              </button>
            </div>
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
          />
        )}
      </div>
    </div>
  );
}

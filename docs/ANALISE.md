# Análise do sistema Lotofácil Astro (v1 → v12)

Data: 27/09/2026. Os scripts que reproduzem estes números (rodando o motor original do v12 sem
modificar nenhuma linha) estão no commit `fb021ae`, pasta `auditoria/` — removida depois para enxugar o projeto.

## 1. O que são os 4 arquivos

| Versão | Linhas | Histórico | Como escolhe os 15 números |
|---|---|---|---|
| `v1-lotofacil-astro.jsx` | 2.379 | 100 concursos, 12 com mapa | Regras de doutrina escritas à mão (dignidade, casa, cadeia dispositora); **o grau do planeta vira o número** (planeta a 17° → nº 17) |
| `v3` / `v4` | 3.025 / 3.502 | 100 concursos, 38 com mapa | Mesma doutrina, mais regras (seita, triplicidade, combustão). O v4 proíbe transformar a pontuação em ranking e deixa em aberto como escolher os 15 |
| `v12-auditoria-final.jsx` | 9.483 | 321 concursos, 195 com mapa | Apaga toda a doutrina. Mineração automática: testa ~1.400 condições × 25 números (**35.225 testes**) e soma `(taxa − 60%) × dias` de cada condição ativa no mapa do dia |

Em resumo, o sistema começou como leitura astrológica, depois virou mineração de dados.
O v12 tem boa engenharia: parser tolerante, reconciliação geométrica dos aspectos,
walk-forward, Monte Carlo, Bonferroni e bloqueio de planetas lentos. O problema está no
que esses testes mostram, que a interface não deixa claro.

## 2. O que os dados mostram

### 2.1 Os jogos salvos no backup têm vazamento de dados
| Medição | Acertos médios |
|---|---|
| `jogoGerado` salvo no `HISTORICO_INICIAL` do v12 | **11,24** |
| Motor usando estatísticas que incluem o resultado do próprio dia | 11,11 |
| Leave-one-out do app atual (motor A / B) | 9,22 / 9,33 |
| **Previsão real (treina só com o passado)** | **9,085** |
| Jogo aleatório (esperado) | 9,000 |

Os 11,24 acertos do backup foram gerados antes da correção de vazamento e nunca foram
recalculados. Eles não medem a capacidade de prever. Até o leave-one-out atual é
otimista, porque usa sorteios **posteriores** ao que está sendo previsto.

### 2.2 Previsão real = acaso
Nos 165 concursos em que o motor foi treinado só com o passado, a distribuição de
acertos coincide com a distribuição hipergeométrica, que é a de um jogo aleatório:

| Acertos | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|
| Motor A | 2 | 10 | 39 | 58 | 37 | 15 | 4 |
| Acaso | 2,5 | 14,6 | 39,0 | 53,1 | 38,2 | 14,5 | 2,8 |

z = 0,92 (não significativo).

### 2.3 Os "sinais" estão abaixo do que o acaso produziria
- Dos 35.225 testes, 1.629 passam em |z| ≥ 1,96. **Só por acaso esperaríamos cerca de 1.761.**
- Com correção de Bonferroni, nenhum sinal sobrevive.
- Teste de permutação (resultados embaralhados entre os dias, mapas mantidos):
  o motor real faz 9,030 e o motor com os resultados embaralhados faz 9,013 ± 0,072.
  **p = 0,45.** O motor tem o mesmo desempenho sem nenhuma ligação real entre mapa e resultado.

### 2.4 Por que é assim, e por que "mais sinais" não resolve
Detectar um número que sai 65% das vezes em vez de 60% sob uma condição exige:
- cerca de **740 dias com a condição**, no caso de **uma** hipótese definida antes;
- cerca de **3.050 dias com a condição** se ela for uma entre 35 mil testadas (Bonferroni).

Uma condição típica (por exemplo, "Lua na casa 5") aparece em cerca de 1 de cada 12 dias.
Seriam necessários dezenas de milhares de sorteios. Somar milhares de condições fracas
e correlacionadas não gera força, só ruído com aparência de estrutura.

Além disso, a Lotofácil sorteia com globos mecânicos auditados, e cada sorteio é
independente dos anteriores e do céu. Nenhuma versão do sistema contradiz isso.

## 3. Sobre a base de conhecimento astrológico

A base (`/conhecimento-astrologico`) é uma doutrina horária para **eventos com dois
polos**, como jogos de futebol: casa 1 contra casa 7, casa 10 como desfecho, casa 5 como gols.
Ela não tem nenhuma regra que ligue o céu a números de 1 a 25. Toda ligação desse tipo
(grau = número, casa = número etc.) foi inventada no código, e é por isso que o v12
acabou apagando a doutrina. Se a doutrina voltar, precisa ser como **hipótese definida
antes** (ver 4.2), não como pontuação.

## 4. Como evoluir: o que é realmente avançado

"Avançado" aqui não quer dizer mais correlações. Quer dizer um sistema que **não se
engana**, que acharia um sinal se ele existisse e que, se ele não existir, mostra isso
logo em vez de mostrar 11 acertos ilusórios.

### 4.1 Corrigir a base (urgente)
1. **Recalcular ou apagar os `jogoGerado` do backup do v12.** Eles exibem 11,24 acertos por vazamento.
2. **Separar os jogos prospectivos dos retroativos.** Só conta como acerto um jogo
   registrado *antes* do sorteio, com data e hora gravadas e sem edição posterior.
   Todo jogo gerado depois do resultado fica marcado como "retroativo" e fica fora de toda métrica.
3. **Trocar o leave-one-out por rolling** (treina só com o passado) em todas as telas de desempenho.
4. **Mostrar o p-valor da permutação na tela principal**, como selo de "sinal real ou acaso".

### 4.2 Laboratório de hipóteses pré-registradas
Em vez de testar 35 mil condições e escolher as melhores depois, o sistema passaria a:
1. Receber uma hipótese escrita **antes** de ver os dados (por exemplo: "com a Lua
   vazia de curso, os números 1–5 saem mais"), congelada com hash e data.
2. Avaliá-la **só nos sorteios futuros**, com teste sequencial (SPRT) que diz quando
   aceitar ou matar a hipótese.
3. Limitar a poucas hipóteses ativas ao mesmo tempo, para o orçamento de erro não se diluir.

É o único jeito honesto de testar a doutrina da base astrológica.

### 4.3 Efeméride calculada, sem texto colado
Hoje, cerca de 400 linhas de regex tentam ler o texto colado do site, e o próprio
código registra dezenas de bugs de parsing. Uma biblioteca de efemérides
(`astronomy-engine`, ou Swiss Ephemeris via WASM) calcula o mapa a partir de data,
hora e local do sorteio (São Paulo, 20h). Isso traz três ganhos:
- elimina toda a classe de erros de parsing;
- permite **gerar o mapa de todos os concursos desde 2003 (mais de 3.500)**, e não só de 195;
- libera Lua fora de curso, velocidade, estações, declinação e antiscia, calculados com
  exatidão, que a base de conhecimento pede e o texto colado não fornece.

Com cerca de 3.500 concursos o teste passa a ter poder de verdade. Se houver sinal,
é assim que ele aparece. Se não houver, a resposta fica definitiva.

### 4.4 Estatística correta no lugar de `(taxa − 60%) × dias`
- Encolhimento bayesiano (beta-binomial hierárquico): cada taxa é puxada para 60% na
  proporção da própria incerteza. Isso substitui as travas manuais de dias mínimos.
- Controle de FDR (Benjamini-Hochberg) em vez de nenhum controle.
- Modelo preditivo único (regressão logística por número, com regularização) avaliado
  em rolling. Hoje são dois motores somando votos correlacionados.

### 4.5 O que de fato muda o resultado financeiro
Nenhuma técnica aumenta a chance de acertar 15. Dá para melhorar o **quanto se recebe**
e o **quanto se gasta**:
- **Evitar combinações populares** (sequências, padrões visuais no volante, datas).
  Os prêmios de 14 e 15 são rateados, então uma combinação pouco jogada divide menos.
- **Fechamentos / desdobramentos** (covering designs): garantem, por exemplo, 11 pontos
  se os 15 sorteados estiverem entre 18 escolhidos. O custo fica explícito.
- **Controle de orçamento**: painel de gasto × retorno real acumulado.

### 4.6 Engenharia
- Quebrar o arquivo único de 9.483 linhas em módulos (`dados/`, `astro/`, `estatistica/`, `ui/`)
  e montar um app Vite + React.
- Histórico em JSON versionado, fora do código-fonte.
- Testes automatizados (vitest) do motor e do parser; `npm run auditoria` no CI.
- Estatística pesada em Web Worker, o que elimina a necessidade dos caches LRU de travamento.

## 5. Ordem sugerida
1. 4.1 (correção da base) + 4.6 (estrutura do projeto) — **base para tudo**
2. 4.3 (efeméride calculada + histórico completo desde 2003)
3. 4.2 (laboratório pré-registrado) + 4.4 (estatística correta)
4. 4.5 (fechamentos e anti-popularidade)

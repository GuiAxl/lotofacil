# Triagem: recursos do sistema Windows × v13

Lista recebida com ~400 recursos de um sistema WinUI/SQLite. Critério: entra o que **aumenta o rigor
ou a utilidade** sem multiplicar hipóteses à toa. Cada sinal a mais é mais uma chance de achar padrão no
ruído; por isso "mais sinais" só entra quando vem com proteção (mistura bayesiana, ablação, testes adversariais).

## Entrou nesta rodada

| Recurso do sistema Windows | Onde está no v13 |
|---|---|
| Modo replay histórico · replay test-then-learn · sem vazamento do concurso-alvo | `quantico/motor.js → simular` e `estatistica/motor.js → simular` (já eram assim; agora guardam o registro de cada concurso) |
| Brier, Brier gain, log-loss, log-loss gain, Ranking AUC, AUC recente/mediana | `estatistica/metricas.js → relatorio`, card "Diagnóstico científico" (Placar e Quântico) |
| Calibração: ECE, MCE, slope, intercept, nitidez (sharpness), diagrama de confiabilidade | `metricas.js → calibracao` |
| Rolling windows 20/50/100, quartis temporais, pior quartil, máximo drawdown, taxa de delta positivo/não negativo, melhor/pior | `metricas.js → relatorio` |
| Newey-West, moving-block bootstrap | `metricas.js → neweyWest, bootstrapBlocos` |
| Phase-shift adversarial (p, win rate) | `metricas.js → phaseShift` |
| Comparação com portfólio aleatório (média e melhor jogo) | `metricas.js → portfolioAleatorio` |
| TEMP (média móvel exponencial, momentum), MARKOV (ordem 1 e 2, hazard), SIM (KNN histórico), GRID (nível por linha/coluna) | novas famílias do motor Quântico |
| Governança Champion / Challenger / Watch / Quarantine | `quantico/motor.js → governanca` |
| Mapa de evidências por dezena, explicabilidade por dezena | `MapaEvidencias` + `explicarDezena` |
| Contrafactual leave-one-family-out por dezena | `quantico/motor.js → contrafactual` |
| Centro de controle (ligar/desligar famílias, aplicar e recalcular, delta baseline × configuração, overlap do jogo, teste sem sobrescrever nada) | Quântico → Previsão → Centro de controle |
| Scanner automático de ablação (sugestão sem aplicação automática) | `quantico/motor.js → scannerAblacao` |
| Arquivo de previsões reais, congelamento da primeira previsão, resolução automática, ProductionTrust por acertos/Brier/log-loss, validação do universo probabilístico | `estatistica/laboratorio.js → registrarNoDiario, placarDiario, validarPrevisao` |
| Correção de concurso histórico, invalidação automática e reavaliação das previsões | `ui/estado.js → aplicarCorrecoes`, Histórico → Corrigir |
| Estimativa automática do próximo concurso e da data | `ui/estado.js → estimarProximo` |
| Detecção de contexto novo (OOD) | Aba Concurso: % de sinais do mapa sem história |

## Já existia no v13 (com outro nome)

Histórico embarcado da Lotofácil · validação na importação · permutation validation (p unicaudal e percentil) ·
holdout cronológico / walk-forward · FDR · Bayes hierárquico (spike-and-slab) · evidência sequencial (SPRT no
Laboratório) · registro de experimentos e hipóteses (Laboratório com hash) · expert stacking / posterior ensemble
(mistura bayesiana com esquecimento) · tuning de learning rate e decay (vários aprendizes na mistura) · Monte Carlo
Lab (simulação do conjunto de jogos) · simulated annealing · diversidade e Jaccard entre jogos · penalização de
exposição (popularidade) · frequência 10/30/100/500/todas · atraso · repetição · pares · desvio de longo prazo.

## Ficou de fora (e por quê)

| Recurso | Motivo |
|---|---|
| Laboratório numerológico (raízes, Möbius, Lucas, 3-6-9, totiente, pentagonais…) | Não há mecanismo físico que ligue aritmética do número do concurso às bolas. Se quiser testar uma regra específica, ela entra como **hipótese pré-registrada** no Laboratório, que é o jeito honesto de testar. |
| META/XINT/SYM: interações automáticas par a par entre 19 famílias, fórmulas simbólicas | Explosão combinatória de hipóteses (centenas de testes sobre ~3.800 concursos). O ganho que pode existir já é capturado pela família "Todas as características" e pela mistura. |
| SPECTRAL/COMPLEX (wavelet, Hurst, Lempel-Ziv, ressonância harmônica) | O Laudo já testa memória (autocorrelação até 5) e ciclos simples, sem desvio. Mais testes do mesmo fenômeno só aumentam falsos positivos. Pode virar um teste de periodograma no Laudo, se útil. |
| Regimes latentes (HMM), change-point bayesiano | O esquecimento da mistura + o laudo por época já tratam a mudança de regime observada (viés de frequência antigo). Um HMM seria o próximo passo, se aparecer novo viés. |
| Calibração Platt/isotônica/temperatura, conformal | As probabilidades ficam a ±2% de 60% e já estão calibradas (ECE < 0,6%). Recalibrar ruído não muda nada. |
| Safety Gate, Shadow Replay em históricos sintéticos, knockoffs | Cobertos pelo teste de permutação, pelo teste temporal, pelo phase-shift e pelos testes automatizados com dados sintéticos (acaso × sinal plantado). |
| Lotomania, configuração por modalidade | Outra loteria; dá para adicionar depois reaproveitando `quantico/`. |
| SQLite, repositories, migrations, WinUI, PowerShell, Brain generations | Infraestrutura de desktop. Aqui o estado cabe no armazenamento do artifact e todo aprendizado é recalculado do histórico em segundos, então não há estado de modelo para versionar ou invalidar. |
| "Busca exata das 3.268.760 combinações" | Com probabilidades aditivas, o top 15 já é o ótimo exato; com popularidade, o recozimento simulado resolve. |
| Geração de "jogo principal / robusto / complementar", CVaR, Pareto | O Gerador já otimiza popularidade + diversidade com retorno esperado exato em R$. |

---

# Segunda lista (~600 itens: reprodutibilidade, auditoria, MLOps)

## Entrou

| Recurso | Onde |
|---|---|
| Hash do histórico usado em cada previsão · manifesto científico · identificador e hash únicos por previsão · snapshot de configuração | `App.jsx → manifesto`, `laboratorio.js → registrarNoDiario` |
| Seed registrado em cada geração de jogos · reprodutibilidade determinística | Quântico → Gerador (campo Seed); teste automatizado |
| Detecção de duplicados, ausentes, dezenas inconsistentes, datas inválidas/fora de ordem, resultados repetidos · validação antes do treino · Data Card | `auditoria/integridade.js → verificarHistorico`, aba Auditoria |
| Proveniência · linha do tempo de alterações | `auditoria/integridade.js → linhaDoTempo` |
| Baselines permanentes (aleatório, frequência simples, Bayes simples, Markov simples) · comparação automática pareada | `quantico/motor.js → BASELINES`, card "Comparação com baselines" |
| E-values / e-processos (por acertos e por verossimilhança) · controle sequencial de falso positivo | `auditoria/evidencia.js` + Diagnóstico científico |
| Intervalos de confiança bootstrap de Brier, log-loss e AUC | `metricas.js → relatorio` |
| Detector de drift (Page-Hinkley, calibrado para ≈ 0,45 alarme falso a cada 3.600 concursos) | `auditoria/evidencia.js → pageHinkley` |
| Negative controls · placebo · históricos sintéticos (aleatórios, embaralhados, com padrão plantado) · teste de leakage · self-test de determinismo · biblioteca de cenários | `auditoria/autoteste.js` (6 testes; botão na aba Auditoria) |
| Matriz de correlação/redundância entre famílias | `quantico/motor.js → redundanciaFamilias` |
| Explicação de entrada/exclusão de cada número no jogo (posição, margem até o corte, famílias) | `quantico/motor.js → explicarEscolha` |
| Resumo automático do que mudou desde o último concurso | `quantico/motor.js → resumoMudancas` |
| Exposição por dezena e sobreposição entre jogos | Quântico → Gerador |
| Índice consolidado de saúde · centro de auditoria · health check · glossário · exportação JSON/CSV | aba **Auditoria** |
| Estimativa de data robusta ao calendário real (2026 teve sorteios em domingos) | `ui/estado.js → estimarProximo` |

## Já existia

Avaliação sequencial out-of-sample (replay test-then-learn) · prequential evaluation (mistura por log-loss) ·
Bayesian Model Averaging / Dynamic Model Averaging (mistura com esquecimento) · regularização L1/L2 (FTRL e
ridge) · ablação por família · contrafactual · reliability diagram · permutação e teste temporal · walk-forward ·
modo sandbox sem sobrescrever (centro de controle) · correção de concurso com reavaliação.

## Ficou de fora

| Recurso | Motivo |
|---|---|
| SQLite (backup, integridade, compactação, corrupção), threads, pausa/retomada, profiler, cache de replays | Infraestrutura de desktop. Aqui o estado é um JSON pequeno com exportação e hash, e o replay completo leva ~6 s. |
| Champion Shadow, canary, rollback point-in-time, cooldown, probation, promoções com relatórios e model cards | A mistura bayesiana já faz promoção e rebaixamento contínuos e auditáveis pela governança, sem um "modelo em produção" discreto para versionar. |
| Mixture of Experts por regime, gating network, especialistas por incerteza | Sem regime com sinal detectável (laudo e e-processos), especialistas por regime só adicionam parâmetros. |
| Conformal (adaptativo/ponderado/por regime), calibração Beta, ensemble de calibradores | As probabilidades ficam a ±2% de 60% e já calibradas (ECE < 0,6%). |
| ADWIN, DDM, EDDM, PSI, KL/JS/Wasserstein drift por sinal/dezena | Um detector calibrado (Page-Hinkley) + laudo por época bastam; dezenas de detectores só gerariam alarmes falsos. |
| SHAP, Sobol, Morris, Shapley por sinal, ablação por pares/trios | A contribuição das famílias já é medida por ablação exata e contrafactual; com ~0,2 milinats de efeito total, decompor mais fundo mede ruído. |
| Fórmulas simbólicas, busca automática de interações, plugins, scripting | Aumentam a busca de padrões sem mecanismo; o Laboratório (hipótese pré-registrada) é o caminho para testar ideias novas. |
| PDF/PNG, perfis, favoritos, desfazer/refazer, modo simples/avançado | Conforto de interface; o essencial (exportações JSON/CSV, glossário) entrou. |
| Verificação automática com a fonte oficial | A rede deste ambiente bloqueia o site da Caixa. A validação de consistência (duplicados, ausentes, dezenas, datas) entrou, e correções manuais ficam registradas. |

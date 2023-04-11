**Missão: O software tem como missão principal atender a chamados,do público interno.**

# *Requisito Funcional:*
* RF1 O sistema deve ter controle de acesso de usuários, como login e senha e níveis de acesso para cada usuário. Após login no sistema o usuário deve ser direcionado para uma página de menu, de acordo com 
* RF2 O sistema deve possuir níveis de usuários:
* Usuário responsável para gerir os chamados(abertura, atualização e finalização do chamado)
* Usuário administrador do sistema. O administrador terá como principal função(adicionar ou excluir usuários,definir o nível de cada usuário e manter a conexão com o banco de dados relativos aos dados do chamado)
* Usuário a nível de tomada de decisão(Gerencia e Diretoria)
* Usuário cliente. O usuário cliente é o cliente da Microméros, este nível de usuário deverá somente ter acesso de visualização dos seus próprios chamados. 
* RF3 O sistema deve guardar informação em Log
* RF4 O sistema deve definir o nível de criticidade do chamado(Critico,Alto,Médio e Baixo). O chamado pode ter como status aberto, expirado, finalizado. Os chamados em aberto são aqueles chamados que ainda não foram solucionados ou a solução está em andamento. O chamado expirado é aquele chamado que não foi solucionado, e o tempo de solução definido pela SLA foi esgotado. Para chamados expirados devemos colocar uma exclamação em vermelho para chamar a atenção do usuário. O chamado finalizado, é aquele chamado que foi concluído. Esses chamados devem ser convertidos em números para compor um dashboard, para que a diretoria possa ter métricas para tomadas de decisão na empresa.
* RF5 O sitema deve guardar chamados em aberto e atender o chamado no tempo acordado com o SLA, definido pela criticidade do chamado.
* RF6 O sistema deve guardar chamados em andamentos
* RF7 O sistema deve guardar chamados finalizados por dia/semana/mes
* RF8 O sistema deve apresentar as informações em Dashboard. O Dashboard deve conter as seguintes métricas inclusive com visualização em gráficos:
*Tempo médio de resposta (TMA): é o tempo que leva para o primeiro agente responder a um chamado após a sua abertura.
*Tempo médio de solução (TMS): é o tempo que leva para um agente resolver um chamado desde a sua abertura até o seu fechamento.
*Taxa de resolução no primeiro contato (FCR): é a proporção de chamados que são resolvidos no primeiro contato entre o cliente e o agente.
*Taxa de satisfação do cliente (CSAT): é a medida de satisfação dos clientes com o serviço prestado pelo agente e pelo sistema de chamados.
*Número de chamados em aberto: é o número de chamados que ainda estão aguardando solução pelos agentes.

* RF9 O sistema deve ter como entrada nos chamados: 
*titulo
*descriçao
*usuario
*departamento enviado
*pessoa responsavel
*criticidade


# *Requisito Não Funcional:*

Disponibilidade:
.DS1 O sistema deverá ficar disponível conforme acordado na SLA.

Usabilidade
.US1 A tela de apresentação do menu deve conter apenas as opções pertinentes para cada usuário.

Plataforma
.PL1 O sistema deverá ser desenvolvido em React.
.PL2 O sistema deverá usar um banco de dados modelo relacional e o banco de dados utilizado será o MariaDB.

Integração
.IN1 O sistema NÃO deverá possuir integração com outros sistemas da Microméros.

Visualização
.VS1 O sistema deverá ser feito no conceito Mobile First.




# *Requisito Excitante:*

* O Dashboard poderá fazer uma previsão através de inteligência artificial quais serão os chamados mais recorrentes para o próximo mês, baseado nos chamados anteriores.
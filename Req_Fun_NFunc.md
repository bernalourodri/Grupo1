**Missão: O software tem como missão principal atender a chamados,do público interno.**

# *Requisito Funcional:*
* RF1 O sistema deve ter controle de acesso de usuários, como login e senha e níveis de acesso para cada usuário. Após login no sistema o usuário deve ser direcionado para uma página de menu, onde de acordo com 
* RF2 O sistema deve possuir níveis de usuários:
    * Usuário responsável para gerir os chamados(abertura, atualização e finalização do chamado)
    * Usuário administrador do sistema. O administrador terá como principal função(adicionar ou excluir usuários,definir o nível de cada usuário e manter a conexão com o banco de dados relativos aos dados do chamado)
    * Usuário a nível de tomada de decisão(Gerencia e Diretoria)
    * Usuário cliente. O usuário cliente é o cliente da Microméros, este nível de usuário deverá somente ter acesso de visualização dos seus próprios chamados. 
* RF3 O sistema deve guardar informação em Log
* RF4 O sistema deve definir o nível de criticidade do chamado. O chamado pode ter como status aberto, expirado, finalizado. Os chamados em aberto são aqueles chamados que ainda não foram solucionados ou a solução está em andamento. O chamado expirado é aquele chamado que não foi solucionado, e o tempo de solução definido pela SLA foi esgotado. O chamado finalizado, é aquele chamado que foi concluído. Esses chamados devem ser convertidos em números para compor um dashboard, para que a diretoria possa ter métricas para tomadas de decisão na empresa.
* RF5 O sitema deve guardar chamados em aberto e atender o chamado no tempo acordado com o SLA, definido pela criticidade do chamado.
* RF6 O sistema deve guardar chamados em andamentos
* RF7 O sistema deve guardar chamados finalizados por dia/semana/mes
* RF8 O sistema deve apresentar as informações em Dashboard para cargos tomadores de decisão(Diretoria). O Dashboard deve conter as seguintes métricas inclusive com visualização em gráficos:
    * Números de chamados em abertos ?
    * Números de chamados expirados ?
    * Números de chamados finalizados ?
    * Quantidade de chamados por empresa ? (perguntar)
    * Discriminar os chamados por tipos(comercial, operacional e tecnologia)?
    * Discriminar os chamados técnicos por tipo de problemas
* RF9 O sistema deve ter como entrada nos chamados: 
    * Data de abertura do chamado
    * Nome do funcionário
    * Cargo do funcionário
    * Campo de descrição do chamado
    * Botões de enviar chamado e atualizar chamado

// Como o cliente pede para abrir um chamado ( Entra em contato com quem ?)
// Definir tipos de chamados
// Tipos de chamados  comercial, operacional e tecnologia ? perguntar se existem outros tipos de chamados

# *Requisito Não Funcional:*

* Disponibilidade:
* DS-1 O sistema deverá ficar disponível conforme acordado na SLA.

* Eficiência
* EF-1 O sistema deve aguentar uma carga de um numero a ser questionado de chamados sem sair do ar. 

* Escalabilidade
* EC-1 O sistema deve ser projetado para suportar até sete(7) usuários simultâneos. // Caso um oitavo usuário tente se conectar o que o sistema deverá mostrar ?

* Usabilidade
* US-1 O sistema deve ser fácil de usar e intuitivo para os usuários, A tela de apresentação do menu deve conter apenas as opções pertinentes para cada usuário.

* Plataforma
* PL-1 O sistema deverá ser desenvolvido em React
* PL-2 O sistema deverá usar um banco de dados modelo relacional e o banco de dados utilizado será o MariaDB.  

* Integração
* IN-1 O sistema NÃO deverá possuir integração com outros sistemas da Microméros

* Visualização
* VS-1 O sistema deverá ser feito para visualização web.


# *Requisito Excitante:*

* O Dashboard poderá fazer uma previsão através de inteligência artificial quais serão os chamados mais recorrentes para o próximo mês, baseado nos chamados anteriores.
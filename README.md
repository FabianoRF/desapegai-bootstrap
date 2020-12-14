# Desapega aí - Bootstrap

Este projeto utiliza de React + Bootstrap, para executá-lo deve-se possuir o NodeJs instalado em seu computador.

Caso não possua, acesse este link para baixá-lo: https://nodejs.org/en/ (A instalação é bem simples e rápida, basta seguir as instruções)

## Como executar

Depois de clonar o projeto e instalar o node, abra um terminal na pasta raiz do projeto e execute o comando:

`npm install` -> este comando instalará as dependencias do projeto. (OBS: Este comando só deve ser executado na primeira vez que for executar o projeto)

Apos o termino da execução, execute o comando:

`npm start` -> Este comando irá iniciar a aplicação em seu navegador. (em http://localhost:3000)


## Funcionamento da Fake API

Este projeto possui faz uma conexão com um servidor que se trata de uma fake API, que simula o funcionamento de uma API REST. 
Ou seja algumas páginas fazem requisições a este servidor e o mesmo devolve informações no formato json. O servidor pode ser acessado da seguinte forma:

Na raiz do projeto é possível acessar o arquivo server.json que já possui alguns produtos cadastrados por categoria, 
também é possivel fazer o cadastro na pagina acessada pelo link "vender". Não se preocupe quanto a execução deste servidor, pois o mesmo inicia em conjunto com a aplicação. 

## Paginás da aplicação

- / -> pagina home
- /cars -> pagina categoria carros
- /objects -> pagina categoria objetos pessoais
- /home-objects -> pagina categoria objetos para casa
- /register-products -> pagina para cadastro de produtos
- /sign-in -> pagina para login
- /sign-out -> pagina para cadastro de usuario
- /about-us -> pagina sobre nós da empresa

## Observações

Peço que sejam considerados as 8 paginas como valor de 10 pois tive um foco em implementar uma aplicação pronta para receber um back-end(ou seja para uma api real, 
não seria necessaria nenhuma alteração no cadastro de produto). O login e Cadastro de usuarios estão funcionando apenas visualmente, porem foram implementados
validações em todos os campos(tais como e-mail válido e senha mínima). Qualquer duvida na execução do projeto estarei por aqui ;)

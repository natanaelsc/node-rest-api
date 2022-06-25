# API Restful Simples

![node version](https://img.shields.io/badge/Node-v_16.15.1-339933?logo=node.js)
![npm version](https://img.shields.io/badge/npm-v_8.11.0-CB3837?logo=npm)
![repo size](https://img.shields.io/github/repo-size/natanaelsc96/node-rest-api?logo=gitlfs&logoColor=F64935&color=F64935)

[Projeto](#projeto) | [Execução](#execução)

## Projeto

CRUD simples com ideias básicas de como o design e conexão com bando de dados utilizando [Prisma](https://www.prisma.io/) com [MySQL](https://www.mysql.com/), [NodeJs](https://nodejs.org/pt-br/) e [Typescript](https://www.typescriptlang.org/) funciona e também como realizar solicitações simples e obter respostas do banco de dados através de requisições http.

## Execução

Antes de iniciar tenha o [Docker](https://www.docker.com/get-started/) instalado em sua maquina.

Foi utilizado Docker para execução rápida do projeto em qualquer máquina. As images utilizadas foram [node:16.15.1-alpine3.16](https://hub.docker.com/_/node) para aplicação, [phpmyadmin:fpm-alpine](https://hub.docker.com/_/phpmyadmin) e [mysql](https://hub.docker.com/_/mysql).

Execute o comando abaixo em um terminal.

```bash
docker compose up
```

Após o download das images e execução do compose, será mostrada a mensagem `Server is running on port 3000`, com isso significa que a aplicação foi executada com sucesso e já pode ser realizada as requisições para a API.

Pela configuração do compose o phpMyAdmin será executado na porta `8082` enquanto o MySQL na porta `3306`.
Com isso você poderá acessar [http://localhost:8082](http://localhost:8082). Digitando as credenciais definidas, usuário como `root` e senha como `password`, você terá acesso ao painel de usuário do phpMyAdmin e poderá visualizar o bando de dados e suas tabelas, além de inserir dados manualmente.

## Rest API

Para realizar as requisições para a API utilize o [Postman](https://www.postman.com/downloads/) ou se estiver instalado o [VSCode](https://code.visualstudio.com/) em sua máquina aproveite e instale a extensão [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), com ela será possível realizar as requisições através do arquivo [api.rest](/api.rest) dentro da própria IDE. Se estiver com problemas nas requisições aconselho fortemente que utilize o Postman.

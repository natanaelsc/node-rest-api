# API Restful Simples

![node version](https://img.shields.io/badge/Node-v_16.15.1-339933?logo=node.js)
![npm version](https://img.shields.io/badge/npm-v_8.11.0-CB3837?logo=npm)
![repo size](https://img.shields.io/github/repo-size/natanaelsc96/node-rest-api?logo=gitlfs&logoColor=F64935&color=F64935)

[Projeto](#projeto) | [Ambiente](#ambiente) | [Execução](#execução)

## Projeto

CRUD simples com ideias básicas de como o design e conexão com bando de dados utilizando [Prisma](https://www.prisma.io/) com [MySQL](https://www.mysql.com/), [NodeJs](https://nodejs.org/pt-br/) e [Typescript](https://www.typescriptlang.org/) funciona e também como realizar solicitações simples e obter respostas do banco de dados através de requisições http.

## Ambiente

Tenha o [Node](https://nodejs.org/pt-br/) e o [Docker](https://www.docker.com/get-started/) instalados em sua maquina.

## Execução

Todos os comandos devem ser executados na raiz do projeto.

Utilize o [.env.exemple](/.env.exemple) para configurar seu .env

### Instalando dependências

```bash
npm install
```

### Rodando containers

```bash
docker compose up -d
```

Com esse comando as imagens serão baixadas e os containers executados. Pela configuração do compose o phpMyAdmin será executado na porta `8082` enquanto o MySQL na `3306`.
Com isso você poderá acessar [http://localhost:8082](http://localhost:8082). Digitando as credenciais definidas, usuário `root` senha  `password`, você terá acesso ao painel de usuário do phpMyAdmin e poderá visualizar o bando de dados e suas tabelas, além de inserir dados manualmente.

### Criando banco de dados e tabelas

```bash
yarn db
```

Se tiver problemas com esse script utilize `npx prisma generate` e `npx prisma migrate dev`, escolha o nome da migração se solicitado ou pule essa parte clicando em "enter".
Caso tenha mais problemas de conexão você pode excluir a pasta de [migrações](/prisma/migrations) puxadas do git `./prisma/migrations/<migração>`

### Rodando a aplicação

```bash
npm start
```

## Rest API

Para realizar as requisições para a API utilize o [Postman](https://www.postman.com/downloads/) ou se estiver instalado o [VSCode](https://code.visualstudio.com/) em sua máquina aproveite e instale a extensão [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), com ela será possível realizar as requisições através do arquivo [api.rest](/api.rest) dentro da própria IDE. Se estiver com problemas nas requisições aconselho fortemente que utilize o Postman.

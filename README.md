# API Restful Simples

## Descrição

CRUD (Create, Read, Update, Delete) simples com ideias básicas de como o design e conexão com bando de dados utilizando [Prisma](https://www.prisma.io/) com [MySQL](https://www.mysql.com/), [NodeJs](https://nodejs.org/pt-br/) e [Typescript](https://www.typescriptlang.org/) funcionam e também como fazer solicitações simples e obter respostas do banco de dados através de requisições http.

## Execução

Tenha o Node instalado em sua maquina e então digite em seu terminal na raiz do projeto o comando ```yarn db``` ou outro gerenciador de pacotes do Node para executar o script de migração das tabelas do banco de dados.
Se tiver problema com esse script utilize ```npx prisma generate``` e depois ```npx prisma migrate dev```, escolha o nome da migração ou pule dando.

## Rest API

Para realizar as requisições para a API utilize o [Postman]() ou se estiver instalado o [VSCode](https://code.visualstudio.com/) em sua máquina aproveite e instale a extensão [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) com ela será possível realizar as requisições através do arquivo [api.rest](/api.rest). Se estiver com problemas nas requisições aconselho fortemente que utilize o Postman.

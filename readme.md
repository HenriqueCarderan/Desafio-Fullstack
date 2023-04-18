<h1 align="center">
  Desafio FullStack
</h1>

<p align = "center">
Este é o projeto FullStack aplicado pela Kenzie - Um hub de contatos! O objetivo dessa aplicação é conseguir criar um projeto fullstack, utilizando o que foi ensinado no curso como um todo.
</p>

<p align="center">
  <a href="#backend">Backend</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Backend**

Para iniciar o projeto é necessario criar um banco de dados utilizando <a href='https://www.postgresql.org/'>PostgreSQL</a>

Após a criação é necessario inserir os dados como nome do banco de dados, usuário, senha, entre outros especificados no arquivo .env.example

Rode o seguinte comando para criar a primeira migração 'yarn typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts'

Rode o seguinte comando para perpetuar as migrações no banco de dados 'yarn typeorm migration:run -- -d ./src/data-source'

Instale as dependencias do projeto utilizando o comando yarn install no terminal do editor de código

Rode o servidor com o comando yarn dev no terminal do editor de código

<p align="center">
  <a href="#frontend">Frontend</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Frontend**

Instale as dependencias do projeto utilizando o comando yarn install no terminal do editor de código

Rode o servidor com o comando yarn start no terminal do editor de código

Abra seu navegador no <a href=http://localhost:3000 >http://localhost:3000</a> para acessar a aplicação

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 10 endpoints, sendo em volta principalmente do usuário - podendo cadastrar seu perfil e seus contatos com nome, email e telefone. <br/>

<!-- <a href="https://insomnia.rest/run/?label=Desafio%20FullStack&uri=back%5CInsomnia_2023-04-18.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a> -->

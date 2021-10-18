Projeto desafio da Hausz

- utilizado NodeJs
- framework CRUD - Express
- Sequelize
- MySQL

* para criar o banco de dados 
npx sequelize db:create
* para criar a tabela Data onde será gravado os dados do arquivo, rodar migration

* rota para importar o arquivo csv
localhost:3000/import

*utilizado o Insomnia para fazer a requisição http POST

* rota para buscar os dados da omni
localhost:3000/api/clientes

no arquivo service/app.js estao, nos comentarios, o corpo necessário para cada requisição, checado pelo Insomnia.

*criado uma rota de cadastro e login com validação de senha pela bcrypt

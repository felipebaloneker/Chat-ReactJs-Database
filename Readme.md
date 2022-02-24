## Chat ReactJS Database
Banco de dados do ChatReactJs.<br>
Para acessar a aplicação [clique aqui.](https://chat-reactjs-front.herokuapp.com)

<img src='.github/image.png'>

## 🕹️ Tecnologias Utilizadas
- [NodeJS](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Express](http://expressjs.com/pt-br/)
- [TypeOrm](https://typeorm.io/#/)
- [Migrations](https://typeorm.io/#/migrations)
- [Postgres](https://www.postgresql.org)
- [Docker](https://www.docker.com)
- [Yarn](https://yarnpkg.com/)
- [Heroku](http://heroku.com)
- [Git](https://git-scm.com)

## :rocket: Implementações
- Criado banco para build local em Docker.
- Criado arquivo server.ts para conexão com o banco e inicio do servidor.
- Criadas Tabelas: Usuarios, Chat, Mensagens.
- Criadas Entidades para cada tabela.
- Criados Repositorios para cada tabela.
- Criado serviços para: 
    Criação do usuario.
    Autenticação do usuario.
    Listagem de usuarios.
    Criação de chat.
    Envio de mensagens.
    Listagem de mensagens do chat.
- Criados controllers para cada serviço.
- Criadas rotas para cada controller.
- Criado middleware de autenticação de usuario com token.
- Build da aplicação e deploy do github para Heroku.
# TaskMaster 📋

## Descrição do Projeto
TaskMaster é uma aplicação de gerenciamento de tarefas que permite aos usuários criar, atualizar, excluir e organizar suas tarefas de maneira eficiente. A aplicação é composta por um front-end desenvolvido em React.js e Material UI e um back-end em Node.js, TypeScript e MongoDB.

## Funcionalidades Principais
- **Criar Tarefas:** Os usuários podem criar novas tarefas, fornecendo um título e uma descrição.
- **Atualizar Tarefas:** As tarefas existentes podem ser atualizadas, incluindo a edição do título e da descrição.
- **Excluir Tarefas:** Os usuários podem excluir tarefas que não são mais necessárias.
- **Listagem de Tarefas:** As tarefas são exibidas em uma lista na tela, proporcionando uma visão geral das tarefas atuais.
- **Autenticação de Usuários:** É necessária autenticação para garantir a segurança das tarefas.
- **Paginação:** A listagem de tarefas é paginada para uma melhor experiência de usuário, especialmente quando há muitas tarefas.
- **Busca de Tarefas:** Os usuários podem pesquisar tarefas com base em palavras-chave ou frases.
- **Filtros de Tarefas:** Os usuários podem aplicar filtros para organizar tarefas com base em critérios específicos.


# 🚀 Como executar o projeto

```bash
 - Primeiro clone o repositório:
    - ``` git@github.com:Tiagoabranges/TaskMaster.git ```
 - Entre no repositório: 
   - ``` cd TaskMaster ```
````
### Front end 🎨
````bash

  1. `$ cd frontend`
  2. `$ npm install` 
  3. `$ npm run dev`
````
### Utilizando o docker 🐳
[Instale o Docker:]( https://docs.docker.com/get-docker/)
```bash
Baixe a imagem do MongoDB:
 `$ docker pull mongo`


Execute o contêiner do MongoDB:
 `$ docker run -p 27017:27017 -d mongo`

````
### Back end 🖥️
```bash

Altere os dados do banco mongo no arquivo `.env` e remova a extensao example ou tambem adicione o seguinte codigo no arquivo database na linha 4: 'mongodb://localhost:27017/seubancodedados'

  1. `$ cd backend`
  2. `$ npm install`
  3. `$ npm run dev`

```

# :books: Tecnologias Utilizadas

Backend
 
+ `Mongoose` Biblioteca para simplificar a interação com o MongoDB em aplicativos Node.js.
+ `Typescript` JavaScript com tipos estáticos opcionais, reduzindo erros em tempo de compilação.
+ `mongo` Um banco de dados não relacional robusto para armazenar dados de contatos.
+ `Zod` Uma biblioteca JavaScript/TypeScript que oferece validação de dados poderosa e tipagem segura.
+ `Docker` Para criar e gerenciar containers do PostgreSQL.
+ `ESLint` Ferramenta para padronizar o estilo de código JavaScript/TypeScript.
+ `CORS` Middleware para habilitar comunicação entre o frontend e o backend.
+ `Node`: A plataforma de tempo de execução JavaScript utilizada no servidor.
+ `Git` Sistema de controle de versão para rastreamento de alterações de código.
+ `Prettier` Ferramenta para manter um estilo de código consistente e bem formatado.
+ `Insomnia` Ferramenta de cliente REST API que serve para testar, depurar e documentar APIs.

Frontend

+ `ReactJS` Biblioteca JavaScript para construir interfaces de usuário interativas.
+ `HTML/CSS` Linguagens padrão da web para estruturar e estilizar a interface.
+ `Axios` Cliente HTTP para realizar chamadas de API para o backend.
+ `Material UI` Biblioteca de componentes React para design de interface.

  

#  :thumbsup: Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para criar issues, pull requests ou sugerir melhorias para este projeto.

# 🐛 Encontrou um problema?
Se você encontrar algum problema, por favor me avise [aqui](https://www.linkedin.com/in/tiagoabranges/).


# 📝 Licença
Desenvolvido por [Tiago Abranges](https://www.linkedin.com/in/tiagoabranges/).

Autor
Seu Nome

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para criar um fork do projeto e enviar pull requests

![Descrição da Imagem](images/image.png)

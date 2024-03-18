# Instruções para Execução do Projeto 

Siga os passos abaixo para executar o projeto:

1. **Clonar o projeto**

Use o comando `git clone https://github.com/cosmiclupus/teste-anbetec.git`

2. **Instale as dependências do projeto**

 Navegue até a pasta do projeto usando o comando `cd <nome do projeto>`. Em seguida, use o comando `npm install` para instalar todas as dependências listadas no arquivo `package.json`.

3. ** Inicie o servidor com `npx nodemon`**

4.  Abra um navegador ou um cliente HTTP como o Postman e faça uma solicitação para `http://localhost:3001` (no caso da API A) e `http://localhost:3000`(no caso da API B) para verificar se o servidor está funcionando corretamente.

5. Cadastre alguns usuários e altere em `cron.js` a constante const id = '2'; para o id da empresa que deseja testar. Isso evitará da cron printar ` data: { error: 'Erro ao buscar usuários' }`


## Documentações via Swagger

1. Documentação API A : `http://localhost:3001/api-docs/`

2. Documentação API B: `http://localhost:3000/api-docs/`

## Considerações

1. A arquitetura escolhida foi a MVC

2. A lógica para desenvolver o problema foi um pouco mais enxuta




# Teste de Habilidades - Desenvolvedor Backend Node.js (Express ou Nestjs)

## Objetivo

O objetivo deste teste é avaliar as habilidades do desenvolvedor backend em integrar duas APIs, realizar autenticação e manipular dados em um banco de dados. O teste envolve a integração das APIs A e B, onde a API B requer autenticação e possui rotas de CRUD

## Requisitos

1. **Integração de APIs:**
    - Criar uma API A com um CRUD de usuários 
   - Criar uma API B com um CRUD de Empresas
   - Criar uma autenticação na API B
   - Conectar a API A com a API B
   - Implementar a autenticação na API B utilizando o token fornecido pelo usuário.
   - Criar um endpoint que busca todos os usuários de uma determina empresa

2. **Banco de Dados:**
   - Criar duas tabelas: `usuarios` e `empresas`.
   - Estrutura da tabela `usuarios`: 
     - `nome` (chave primária)
     - `email`
     - `cpf`
     - `telefone`
     - `idempresa` (chave estrangeira referenciando `empresas`)
     - `senha`
   - Estrutura da tabela `empresas`:
     - `idempresa` (chave primária)
     - `razaosocial`
     - `cnpj`
     - `descricao`

3. **Rotina Automática:**
   - Implementar uma rota que, utilizando um cron na API A para fazer uma requisição a API B passando um idempresa e retorna os usuários da empresa (idempresa pode ser fixo)

## Detalhes Técnicos

### API A

- Documentação: [Adicione a url de documentação da api de usuários]

### API B

- Documentação: [Adicione a url de documentação da api de empresas]
- A autenticação na API B é feita através do fornecimento de um token.

### Banco de Dados

- Tipo: Relacional 
- Conexão: Criei qualquer conexão local usando qualquer banco relacional (Postgres, MySql, Oracle)

## Instruções

1. Clone este repositório.
2. Configure as variáveis de ambiente necessárias.
3. Implemente a lógica necessária no código para atender aos requisitos.
4. Documente qualquer consideração ou decisão de design.
5. Certifique-se de incluir instruções claras sobre como executar e testar a solução.

## Critérios de Avaliação

Ao avaliar a solução proposta, serão considerados os seguintes critérios:

1. **Legibilidade do Código:**
   - Clareza e organização do código.
   - Uso adequado de comentários para explicar partes complexas do código.
   - 
2. **Escalabilidade:**
   - Capacidade da solução lidar com um aumento significativo de dados ou tráfego.

3. **Domínio da Linguagem:**
   - Uso apropriado das funcionalidades da linguagem Node.js.
   - Adoção de boas práticas e padrões de desenvolvimento.

4. **Compreensão do Problema:**
   - Demonstração de compreensão dos requisitos e desafios apresentados.

5. **Solução Proposta:**
   - Eficiência da solução em atender aos requisitos.
   - Robustez e confiabilidade da implementação.


## Entrega

- O código deve ser entregue como um repositório Git.

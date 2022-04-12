# Teste - Full-stack

## Repositório

O primeiro passo do projeto, é realizar um FORK deste projeto: [epicsweb/tests-jobs](https://github.com/epicsweb/tests-jobs). As definições e padrões podem ser encontradas [aqui](https://github.com/epicsweb/tests-jobs/blob/master/README.md).

## Projeto

Para iniciar o seu teste de full-stack, acesse a url para visualizar a tela: [Dribbble](https://dribbble.com/shots/10428504/attachments/2269679?mode=media)

Crie uma experiência de controle de cliente estilo a tela acima e que contenha:

-   Listagem de clientes com informações em geral
    -   Exibição dos dados dos clientes
    -   Botão para editar os dados (por cliente)
    -   Botão para excluir o cliente com confirmação (por cliente)
-   Tela de adicionar um novo cliente
-   Tela de editar um cliente
-   Não é necessário adicionar autenticação/sessão
-   Não é necessário adicionar menu lateral, header, etc
    -   Focar somente na parte de gerenciamento de cliente
    -   Não é necessário realizar paginação
    -   Não é necessário gerenciamento em lote

## Tecnologias

O sistema deve-se utilizar as seguintes tecnologias

-   **PHP 7 ou superior:** desenvolvimento do sistema e as funções de CRUD dos Clientes
    -   Utilizar framework PHP (Laravel, CodeIgniter, etc)
-   **MySQL 5.7 ou superior**: criação do banco de dados
    -   Lembrar de utilizar migration ou enviar o `.sql` dentro do repositório
-   **Bootstrap**
    -   Preferencialmente bootstrap 5
-   **JavaScript**
    -   Pode-se utilizar Vanilla, jQuery, VueJS ou ReactJS

## Banco de dados

-   Tabela: `users`

| Campo        | Tipo                        | Nullable | Default     |
| ------------ | --------------------------- | -------- | ----------- |
| id           | INT [PK]                    | Não      | AI          |
| name         | VARCHAR (50)                | Não      | NULL        |
| email        | VARCHAR (100) [UQ]          | Não      | NULL        |
| picture      | VARCHAR (255)               | Sim      | default.jpg |
| phone_number | CHAR (11)                   | Sim      | NULL        |
| birthdate    | DATE                        | Sim      | NULL        |
| gender       | ENUM (male, female, others) | Sim      | NULL        |
| membership   | ENUM (yes, no)              | Não      | no          |
| ltv          | FLOAT                       | Sim      | 0.00        |
| last_visit   | DATETIME                    | Sim      | NULL        |

## Diferenciais

-   Código limpo: não crie classes, métodos, estilos e regras no CSS sem necessidade. Utilize as classes padrões do próprio bootstrap o máximo possível;
-   Fiel ao layout: quanto mais fiel o projeto for ao layout, melhor;
-   Responsivo: deve ser funcional tanto no mobile quanto desktop;
-   Sempre que possível, seguir os padrões de rotas, banco de dados e afins;
-   Utilização do PHP >= 8 e/ou Laravel >= 8
-   Utilização de migration e seeders;

**Ao terminar, enviar link do repositório (fork) no GitHub para Guilherme**

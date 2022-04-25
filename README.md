# Teste-Epics-FullStack-Adalberto

Teste para vaga de desenvolvedor FullStack da EPICS.

## Informações Importantes

1. Projeto desenvolvido em Laravel + Integração do ReactJS através do Laravel Mix.

    - Verões das ferramentas:
        - PHP: 8.1
        - Composer: 2.3.5
        - Laravel: 9.2
        - React: 18.0
        - Node: 17.9.0
        - NPM: 8.5.5
        - Bootstrap: 5.1.3,
        - Laravel-mix: 6.0.6,

2. Banco de Dados em MySQL:

    - MYSQL_VERSION = latest
    - MYSQL_DATABASE = test-epics-fullstack-adalberto
    - MYSQL_USER = default
    - MYSQL_PASSWORD = secret
    - MYSQL_PORT = 3306
    - MYSQL_ROOT_PASSWORD=root

3. Configurar .env conforme os serviços da máquina servidor.
    - Exemplo de configuração do .env utilizando Docker (neste projeto foi utilizado Docker + Laradock como ambiente de desenvolvimento PHP + MySQL + NGINX.):
        - DB_CONNECTION=mysql
        - DB_HOST=mysql (colocar "127.0.0.1" para servidores locais como o do Composer)
        - DB_PORT=3306
        - DB_DATABASE=test-epics-fullstack-adalberto
        - DB_USERNAME=default
        - DB_PASSWORD=secret
        - APP_URL=http://localhost
        - NGINX_HOST_HTTP_PORT=80

## Configurar Projeto

-   Necessário usar o Composer (No projeto foi usado o Composer versão 2.3.5);

-   Criar o Banco de Dados MySQL com o nome: "test-epics-fullstack-adalberto", username: "default", password="secret" (ou configurar o .env de acordo com a conexão da máquina).

### Comandos - Passo a Passo

-   Em um terminal, entre na pasta do projeto e execute os seguintes comandos:

1. $ composer update (para compilar o projeto)

2. $ php artisan migrate (para criar as tabelas no banco de dados)

3. $ php artisan db:seed (para popular com 10 registros aleatórios na tabela "users")

Pronto!

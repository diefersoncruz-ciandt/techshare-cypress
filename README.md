


## Bibliotecas utilizadas
* Framework de automação: [Cypress](https://docs.cypress.io/)

## Estrutura de organização do projeto

* Projeto estruturado em Page Objects (Design Pattern)
* Estrutura de Pastas:
    -  `/Cypress/support/pageObjects/` contém os elementos de tela e o comportamento esperado do cenário
    -  `/Cypress/Videos/` armazena a gravação da ultima execução de testes realizada

## Browsers testados
* electron (automação)


## Pre-requisitos para rodar os testes
* Instalar [NodeJS](http://nodejs.org/)
* Instalar [Cypress] npm install cypress@8.7.0 --save-dev (https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

## Rodar testes automatizados

Para rodar cenários de testes em ambientes diferentes, temos os seguintes scripts:

* Clonar repositório: https://github.com/diefersoncruz-ciandt/techshare-cypress.git
* Instalar Cypress: npm install cypress@8.7.0 --save-dev
* Executar o script de teste desejado conforme lista abaixo:

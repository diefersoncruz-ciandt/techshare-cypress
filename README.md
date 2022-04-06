# carteiras-administradas-ui-qa

Projeto: Carteiras Administradas
Aplicação responsável pelos testes automatizados E2E

# Testes E2E com Cypress

* Automação de testes na camada de UI (User Interface) e API das especificações descritas nos arquivos `(/Cypress/Integration/)` para validação das regras de negócio, e se os critérios de aceite do sistema estão confiáveis.


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
* Instalar [Java8] (https://www.oracle.com/java/technologies/downloads/#java8)
* Instalar [Cypress] npm install cypress@8.7.0 --save-dev (https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

## Plugins utilizados
* cypress-file-upload: npm i cypress-file-upload (https://www.npmjs.com/package/cypress-file-upload)
* cypress-postgres: npm i -D cypress-postgres (https://developer.aliyun.com/mirror/npm/package/cypress-postgres)
* cypress-allure-plugin: npm i -D @shelex/cypress-allure-plugin (https://github.com/Shelex/cypress-allure-plugin)

## Rodar testes automatizados

Para rodar cenários de testes em ambientes diferentes, temos os seguintes scripts:

* Clonar repositório: git@gitlab.com:anbima/corporativo/carteiras-administradas/carteiras-administradas-ui-qa.git
* Acessa pasta: cd carteiras-administradas-ui-qa
* Instalar Cypress: npm install cypress@8.7.0 --save-dev
* Executar o script de teste desejado conforme lista abaixo:

Ambiente Dev
* Testes E2E: node run-e2e-tests.js dev
* Testes API: node run-api-tests.js dev
* Smoke Test: node run-smoke-tests.js dev

Ambiente HML
* Testes E2E: node run-e2e-tests.js hml
* Testes API: node run-api-tests.js hml
* Smoke Test: node run-smoke-tests.js hml

## Gerar relatório no ALLURE
* Gera o relatório: allure generate reports/allure --clean
* Abre o relatório: allure open allure-report
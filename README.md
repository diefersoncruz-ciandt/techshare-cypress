## Bibliotecas utilizadas
* Framework de automação: [Cypress](https://docs.cypress.io/)

## Estrutura de organização do projeto

* Projeto estruturado em Page Objects (Design Pattern)
* Estrutura de Pastas:
    -  `/Cypress/support/pageObjects/` contém os elementos de tela e o comportamento esperado do cenário
    -  `/Cypress/Videos/` armazena a gravação da ultima execução de testes realizada

## Browsers testados
* electron (automação)


## Pré-requisitos
* Possuir NodeJS instalado.
     - Manual de instalação node: https://nodejs.org/en/
* Possuir Git instalado.
    - Manual de instalação Git: https://git-scm.com/downloads
* Possuir cypress instalado.
    - Manual de instalação Cypress: https://www.cypress.io/
* Possuir um editor de código (Visual Studio Code)
    - Manual de instação VS Code: https://code.visualstudio.com/

## Instruções gerais
Todo o conteúdo programático do TechShare está disponível no repositório do github https://github.com/diefersoncruz-ciandt/techshare-cypress. 
Os respectivos branchs que são utilizados em cada tópico, estão evidenciados entre () e escrito com texto na cor vermelha, exemplo (step-01).

## Conteúdo programático
    1. Instalando o Cypress.
    2. Criando arquivos de configuração para diferentes ambientes com Node (step-01).
        1. Criação dos arquivos de configuração.
        2. Como trabalhar com diferentes parâmetros dentro do cypress.
    3. Criando o primeiro teste E2E. (step-02).
        1. Demonstração da criação de um teste E2E.
        2. Utilização da referência /// <reference types="Cypress" />   
        3. O que são arquivos “.spec”.
        4. Utilização das propriedades “Describe”, “Context”,“It” para descrição dos cenários.
    4. Outras propriedades Cypress (step-03)
        1. Utilização das propriedades do “Before”, “BeforeEach”, “After” e “AfterEach” para execução de rotinas antes ou depois da execução de cada cenário de teste.
        2. Utilização das propriedades “only” e “skip”.
        3. Utilização da pasta pageObjects.
        4. Utilização de fixtures.
        5. Utilização das propriedades dos arquivos “cypress.json”.
    5. Criando o primeiro teste de API sem token de segurança(step-04)
        1. Demonstração da criação de um teste com cy.request.
        2. Demonstração de como realizar a validação de dados.
    6. Criando o primeiro teste de API com token de segurança(step-05)
        1. Utilização de commands.js.
    7. Utilizando recursos de API tests dentro de testes E2E(step-06).
        1. Utilizando intercept em testes E2E.
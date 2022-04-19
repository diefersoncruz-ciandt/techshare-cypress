/// <reference types="Cypress" />

const editUsuario = 'input[name="form_usuario"';
const editSenha = 'input[name="form_senha"';
const editNome = 'input[name="form_nome"';
const btnEnviar = '.btn-info';
const tableUsuarios = 'table[border="1"]';


describe("Cadastro de usuários", function () {
    context("Quando quando informo dados válidos", function () {
        it("Deve retornar um cadastro válido", function () {
            cy.visit("http://aprendendotestar.com.br/treinar-automacao.php");

            // cadastra o usuário 
            cy.get(editUsuario).type("usuario1234");
            cy.get(editSenha).type("1234", { log: false });
            cy.get(editNome).type("Usuário teste 1234");
            cy.get(btnEnviar).click();


            cy.get(tableUsuarios).contains("Usuário teste 1234");
            cy.get(tableUsuarios).contains("usuario1234");

            cy.get(tableUsuarios).contains('tr', "usuario1234").invoke('index').then((i) => {
                cy.get(`:nth-child(${i + 1})`).contains('Apagar').click();
            })
        });
    });
});
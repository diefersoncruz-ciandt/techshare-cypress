/// <reference types="Cypress" />

describe("Simulação de erros de resposta", function () {
    context("Simulando erro de servidor", function () {
        it("Deve retornar erro 500", function () {
            cy.intercept(
                "https://automacaocombatista.herokuapp.com/users",
                { statusCode: 500}
            ).as('req');
            cy.visit("https://automacaocombatista.herokuapp.com/users");
        });
    });
});
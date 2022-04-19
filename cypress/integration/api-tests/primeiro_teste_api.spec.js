/// <reference types="Cypress" />

describe("Api Weather", function () {
    before(() => {
        cy.fixture('dadosRetornoApi.json').as("dadosRetornoApi");
    });

    context("GET na API passando código de acesso válido", function () {
        it("Deve retornar dados validos", function () {
            cy.request({
                method: 'GET',
                url: Cypress.env('urlApi') + '/zip?',
                qs: {
                    zip: "E14,GB",
                    appid: "c781c20952c54475f646c0aceb85c8c8"
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.eql(this.dadosRetornoApi);
            });
        });
    });
});

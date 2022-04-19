/// <reference types="Cypress" />

describe("Api Weather", function () {
    before(() => {
        cy.fixture('dadosRetornoApi.json').as("dadosRetornoApi");
    });

    context("API sem token de segurança", function () {
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

    context.skip("API com token de segurança", function () {
        it('Deve retornar os dados de acordo com o token', () => {
            cy.getAuthorizationTokenSSOApi(loginData.usuarioMultiplasInstituicoes, loginData.senhaUsuarioMultiplasInstituicoes).then(() => {

                cy.request({
                    method: 'GET',
                    url: Cypress.env('urlApi') + '/zip?',
                    headers: {
                        Authorization: Cypress.env('acessToken')
                    },
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
});

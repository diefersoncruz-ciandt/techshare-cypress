/// <reference types="Cypress" />

import cadastro_usuarios_page from '../../support/pageObjects/cadastro_usuario_page';

const cadastroUsuarioPage = new cadastro_usuarios_page;
var listaUsuarios = [];

describe("Cadastro de usuários", function(){
    before(() => {
        cy.fixture("dadosUsuarios.json").then(dadosUsuarios =>{
            listaUsuarios = dadosUsuarios;
        });
        cy.visit("/");

    });
    context("Quando quando informo dados válidos", function(){
        beforeEach(()=>{
            cy.visit("/treinar-automacao.php");
        });
        
        it("Deve retornar um cadastro válido", function(){
            cadastroUsuarioPage.cadastrarNovoUsuario(
                listaUsuarios.nome, 
                listaUsuarios.usuario, 
                listaUsuarios.senha);
        });

        afterEach(()=>{
            cadastroUsuarioPage.validarNovoUsuario(
                listaUsuarios.nome, 
                listaUsuarios.usuario);
        })
    });
    after(()=>{
        cadastroUsuarioPage.excluirUsuario(listaUsuarios.usuario);
        cy.visit("/");
    });
});
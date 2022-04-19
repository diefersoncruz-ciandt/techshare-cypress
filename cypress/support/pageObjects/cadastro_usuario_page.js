/// <reference types="Cypress" />   

const editUsuario = 'input[name="form_usuario"';
const editSenha = 'input[name="form_senha"';
const editNome = 'input[name="form_nome"';
const btnEnviar = '.btn-info';
const tableUsuarios = 'table[border="1"]';

class cadastro_usuario_page {
    cadastrarNovoUsuario(nome, usuario, senha) {
        cy.get(editUsuario).type(usuario);
        cy.get(editSenha).type(senha, { log: false });
        cy.get(editNome).type(nome);

        cy.get(btnEnviar).click();
    }

    validarNovoUsuario(nome, usuario) {
        cy.get(tableUsuarios).contains(nome);
        cy.get(tableUsuarios).contains(usuario);
    }

    excluirUsuario(usuario) {
        cy.get(tableUsuarios).contains('tr', usuario).invoke('index').then((i) => {
            cy.get(`:nth-child(${i+1})`).contains('Apagar').click();
        })
    }
}
export default cadastro_usuario_page;

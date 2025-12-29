
class LoginPage {
  visitar() { cy.visit('/login'); }
  preencherUsuario(usuario) { cy.get('#username').type(usuario); }
  preencherSenha(senha) { cy.get('#password').type(senha); }
  submeter() { cy.get('#loginButton').click(); }
}
export default new LoginPage();

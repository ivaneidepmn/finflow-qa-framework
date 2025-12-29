import LoginPage from '../support/pages/LoginPage';

describe('Login FinFlow', () => {
  beforeEach(() => LoginPage.visitar());

  it('Deve logar com usuário válido', () => {
    LoginPage.preencherUsuario('admin');
    LoginPage.preencherSenha('Senha123!');
    LoginPage.submeter();
    cy.url().should('include', '/dashboard');
  });

  it('Não deve logar com senha inválida', () => {
    LoginPage.preencherUsuario('admin');
    LoginPage.preencherSenha('SenhaErrada');
    LoginPage.submeter();
    cy.get('.error-msg').should('contain', 'Credenciais inválidas');
  });
});

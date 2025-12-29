// Comandos customizados do Cypress
Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/login');
  cy.get('#username').type(usuario);
  cy.get('#password').type(senha);
  cy.get('#loginButton').click();
});

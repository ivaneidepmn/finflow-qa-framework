class ContratoPage {
  visitar() { cy.visit('/contratos'); }
  criarContrato(nome) { cy.get('#novoContrato').type(nome); cy.get('#salvarContrato').click(); }
  validarContrato(nome) { cy.contains(nome).should('exist'); }
}
export default new ContratoPage();

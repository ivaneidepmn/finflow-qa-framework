class PagamentoPage {
  visitar() { cy.visit('/pagamentos'); }
  realizarPagamento(valor) { cy.get('#valorPagamento').type(valor); cy.get('#pagarButton').click(); }
  validarSucesso() { cy.get('.success-msg').should('contain', 'Pagamento realizado'); }
}
export default new PagamentoPage();

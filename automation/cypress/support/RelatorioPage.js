class RelatorioPage {
  visitar() { cy.visit('/relatorios'); }
  gerarRelatorio(tipo) { cy.get('#tipoRelatorio').select(tipo); cy.get('#gerarButton').click(); }
  validarDownload() { cy.get('#downloadLink').should('exist'); }
}
export default new RelatorioPage();

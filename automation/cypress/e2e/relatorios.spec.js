import RelatorioPage from '../support/pages/RelatorioPage';

describe('Relatórios FinFlow', () => {
  beforeEach(() => RelatorioPage.visitar());

  it('Deve gerar e validar relatório', () => {
    RelatorioPage.gerarRelatorio('Mensal');
    RelatorioPage.validarDownload();
  });
});

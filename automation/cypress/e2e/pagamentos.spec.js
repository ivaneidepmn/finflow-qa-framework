import PagamentoPage from '../support/pages/PagamentoPage';

describe('Pagamentos FinFlow', () => {
  beforeEach(() => PagamentoPage.visitar());

  it('Deve realizar um pagamento', () => {
    PagamentoPage.realizarPagamento('1000');
    PagamentoPage.validarSucesso();
  });
});

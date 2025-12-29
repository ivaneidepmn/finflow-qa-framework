import ContratoPage from '../support/pages/ContratoPage';

describe('Contratos FinFlow', () => {
  beforeEach(() => ContratoPage.visitar());

  it('Deve criar um novo contrato', () => {
    ContratoPage.criarContrato('Contrato Teste');
    ContratoPage.validarContrato('Contrato Teste');
  });
});

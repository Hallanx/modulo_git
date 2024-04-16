describe('Testes da Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um novo contato', () => {
    const nome = 'Novo Contato';
    const telefone = '123456789';
    const email = 'novocontato@example.com';

    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="E-mail"]').type(email);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.get('.adicionar').click();

    // Aguarda até que o novo contato seja adicionado à lista
    cy.contains(nome).should('be.visible');
    cy.contains(telefone).should('be.visible');
    cy.contains(email).should('be.visible');
  });
});
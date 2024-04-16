describe('Testes da Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.contains('gian Souza', {
      timeout: 10000
    }).should('be.visible').as('contatoGianSouza');
  });

  it('Deve editar um contato existente', () => {
    const novoNome = 'Novo Nome';
    const novoTelefone = '987654321';

    cy.get('@contatoGianSouza').scrollIntoView().then(() => {
      cy.get('@contatoGianSouza').parent().parent().within(() => {
        cy.get('button.edit', {
          timeout: 10000
        }).should('be.visible').click();
      });
    });

    cy.get('input[placeholder="Nome"]').should('be.visible').clear().type(novoNome);
    cy.get('input[placeholder="Telefone"]').should('be.visible').clear().type(novoTelefone);
    cy.get('button.salvar').click();

    cy.contains(novoNome).should('be.visible');
    cy.contains(novoTelefone).should('be.visible');
  });
});
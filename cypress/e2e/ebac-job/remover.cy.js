describe('Testes da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.contains('gian Souza', {
            timeout: 10000
        }).should('be.visible').as('contatoGianSouza');
    });

    it('Deve remover um contato existente', () => {
        // Supondo que o botão de remoção possa não estar imediatamente visível,
        // tenta primeiro acionar uma ação que garantiria sua visibilidade.
        cy.get('@contatoGianSouza').trigger('mouseover');

        // Agora tenta encontrar o botão de remoção dentro do contexto do contato.
        cy.get('@contatoGianSouza').parent().parent().within(() => {
            cy.get('button.remove', {
                    timeout: 10000
                })
                .should('be.visible')
                .as('botaoRemover');
        });

        cy.get('@botaoRemover').click();
        cy.get('.confirm').click();
        cy.contains('gian Souza', {
            timeout: 10000
        }).should('not.exist');
    });
});
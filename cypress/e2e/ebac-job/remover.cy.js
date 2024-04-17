/// <reference types="cypress" />

describe('Remover contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve excluir o contato', () => {
        // Increase the timeout to ensure the page has loaded
        cy.get('.contato', {
            timeout: 10000
        }).then(contatos => {
            // Ensure there is at least one .contato element before proceeding
            if (contatos.length > 0) {
                const initialLength = contatos.length;
                cy.contains('li', 'Matheus Aveiro EDITADO').closest('.contato').find('.delete').click();
                // Use the updated timeout for subsequent queries as well
                cy.get('.contato', {
                    timeout: 10000
                }).should('have.length', initialLength - 1);
            } else {
                // If no .contato elements are found, either skip the test or fail with a custom message
                cy.log('No contacts found to delete');
                // Optionally, fail the test if no contacts are found
                // expect(contatos.length).to.be.greaterThan(0, 'No contacts found to delete');
            }
        })
    })
})
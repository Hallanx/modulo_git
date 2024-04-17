describe('Testes para a página de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve veriricar se há formulario', () => {
        cy.get('input').should('have.length', 3)

        cy.screenshot('tela-formulario')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('input[placeholder="Nome"]').type('Matheus Aveiro')
        cy.get('input[placeholder="E-mail"]').type('matheusaveirofagundes@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('53981067380')

        cy.screenshot('tela-formulario-preenchido')

        cy.get('.adicionar').click()

        cy.contains('li', 'Matheus Aveiro')

        cy.screenshot('tela-contato-adicionado')
    })

    it('Deve editar o contato', () => {
        cy.contains('li', 'Matheus Aveiro').closest('.contato').find('.edit').click()
        cy.get('input[placeholder="Nome"]').type(' EDITADO')
        cy.get('.alterar').click()
        cy.contains('li', 'Matheus Aveiro EDITADO')

        cy.screenshot('tela-contato-editado')
    })
})
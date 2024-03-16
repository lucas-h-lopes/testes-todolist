let massa = ['Lavar as roupas', 'Passear com o cachorro', 'Comprar presente de dia das mães', 'Fazer compras', 'Organizar o quarto']

describe('Tarefas', () => {
  beforeEach(() => {
    cy.visit('https://todo-list-by-dumbmety-github.netlify.app')
  })

  it('REQ 01 - Toast sucesso criação canto inferior da tela', () => {
    for (let x = 0; x <= 2; x++) {
      cy.get('#add-task-input').type(`${massa[x]}{enter}`, { delay: 50 })
      cy.contains('Task was successfully added').should('exist')
    }
  })

  it('REQ 02 - Toast sucesso exclusão canto inferior da tela', () => {
    for (let x = 1; x <= 3; x++) {
      cy.get('#add-task-input').type(`${massa[x]}{enter}`, { delay: 50 })
        .wait(100)
      cy.get('.trash').click()
      cy.get('#remove-modal > .actions > #remove-button').click({ force: true })
        .wait(1000)
      cy.contains('Task was successfully deleted').should('exist')

    }
  })

})
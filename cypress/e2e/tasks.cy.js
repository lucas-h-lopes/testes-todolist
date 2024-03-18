let massa = ['Lavar as roupas', 'Passear com o cachorro', 'Comprar presente de dia das mães', 'Fazer compras', 'Organizar o quarto']

describe('Tasks', () => {
  beforeEach(() => {
    cy.visit('https://todo-list-by-dumbmety-github.netlify.app')
  })

  it('CT 01 - Toast sucesso criação canto inferior da tela', () => {
    for (let x = 0; x <= 2; x++) {
      cy.get('#add-task-input').type(`${massa[x]}{enter}`, { delay: 50 })
      cy.contains('Task was successfully added').should('exist')
    }
    cy.get('.segment > .ui').should(($ui) => {
      expect($ui).to.have.length(3)
    })
  })

  it('CT 02 - Toast sucesso exclusão canto inferior da tela', () => {
    for (let x = 1; x <= 3; x++) {
      cy.get('#add-task-input').type(`${massa[x]}{enter}`, { delay: 50 })
        .wait(100)
      cy.get('.trash').click()
      cy.get('#remove-modal > .actions > #remove-button').click({ force: true })
        .wait(1000)
      cy.contains('Task was successfully deleted').should('exist')
    }
    cy.get('.segment > .ui').should(($ui) => {
      expect($ui).to.have.length(0)
    })
  })

  it('CT 03 - Botão limpar todas as tarefas', () => {
    for (let x = 1; x <= 3; x++) {
      cy.get('#add-task-input').type(`${massa[x]}{enter}`, { delay: 50 })
    }
    cy.get('#clear-all-tasks').click()
    cy.get('#clear-all-tasks-modal > .actions > #remove-button').click()
    cy.get('.segment > .ui').should(($ui) => {
      expect($ui).to.have.length(0)
    })
  })

  it('CT 04 - Botão editar tarefa altera corretamente', () => {

    cy.get('#add-task-input').type(`Faser almoço{enter}`, { delay: 50 })
    cy.get('.edit').click()
    cy.get('#task-text').clear().type('Fazer almoço{enter}', { delay: 50 })
    cy.get('#update-button').click()
    cy.contains('Fazer almoço').should('exist')
  })

  it('CT 07 - Limite 30 caracteres para criar tarefa', () => {
    let x = 0
    let massa = ''
    while (x != 3) {
      for (let i = 1; i <= 10; i++) {
        massa = massa + i
      }
      if (x < 2) {
        massa += '-'
      }
      x++;
    }

    cy.get('#add-task-input').type(`${massa}{enter}`, { delay: 50 })
    cy.get('.segment > .ui').should(($ui) => {
      expect($ui).to.have.length(0)
    })
  })


})
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://todo-list-by-dumbmety-github.netlify.app')
  })

  it('passes', () => {
    let massa = ['Lavar as roupas', 'Passear com o cachorro', 'Comprar presente de dia das mães', 'Fazer compras', 'Organizar o quarto']
    for (let x = 0; x <= 2; x++) {
      cy.get('#add-task-input').type(`${massa[x]}{enter}`, { delay: 50 })
    }
  })

})
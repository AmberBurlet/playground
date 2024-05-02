describe('testSpec1', () => {
  it('testAlert', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://demoqa.com/alerts')
    cy.get('#alertButton').click()

    cy.visit('https://demoqa.com/alerts')
    cy.get('#timerAlertButton').click()

    cy.visit('https://demoqa.com/alerts')
    cy.get('#confirmButton').click()

    cy.visit('https://demoqa.com/alerts')
    cy.get('#promtButton').click();

  


  })
})
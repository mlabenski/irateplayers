describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h2')
    .contains('iRate Players');
  })
  it('renders the form', () => {
    cy.get('form')
    .should('be.visible')
  })
})
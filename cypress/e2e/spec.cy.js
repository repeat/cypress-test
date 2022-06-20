describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/')
  })
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

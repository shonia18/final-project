describe('ავტორიზაცია', () => {
  it('წარმატებული ავტორიზაცია', () => {
    cy.visit('https://testzootopia.loremipsum.ge')
    cy.get('.rprof > p').click()
    cy.get(':nth-child(5) > .imail').type("shonia_nino@mail.ru")
    cy.get('.ipass').type(111111)
    cy.get('.avtorization > .input-shablon > .form-button').click()
    cy.get('.menu-pop > .iprof')
    cy.get('.menu-pop > .iprof > p').click()
  })
})
it('რავტორიზაცია მხოლოდ ელფოსტით', () => {
  cy.visit('https://testzootopia.loremipsum.ge')
  cy.get('.rprof > p').click()
  cy.get(':nth-child(5) > .imail').type("shonia_nino@mail.ru")
  cy.get('.ipass').type('null')
  

})



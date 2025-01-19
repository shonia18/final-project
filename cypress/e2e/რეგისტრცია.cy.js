describe('მომხმარებლის რეგისტრაცია', () => {
  it(' რეგისტრაცია წესების დათახმწბის გარეშე', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    //შეავსე რეგისტრაციის ველები
    cy.get(':nth-child(1) > .ismile').type('nino gagua')
    cy.get('.active > .ismile').type('2345647398')
    cy.get(':nth-child(2) > .imail').type('ngagua233@gmail.com')
    cy.get(':nth-child(4) > .itel').type('593600700')
    cy.get(':nth-child(5) > .ipass').type('111111')
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('111111')
    cy.get('[for="profile1"]').click()
    //არ დაეთანხმო წესებს და პირობებს
    cy.get('.regsub').click()
    //გაწითლდა ლოგო
    cy.contains('ვეთანხმები წესებსა და პირობებს').should('be.visible')
   })
})
describe('მომხმარებლის რეგისტრაცია', () => {
  it(' რეგისტრაცია პირადი ელფოსტის გარეშე', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    //შეავსე რეგისტრაციის ველები გარდა იმეილის ველისა.
    cy.get(':nth-child(1) > .ismile').type('nino gagua')
    cy.get('.active > .ismile').type('2345647398')
    cy.get(':nth-child(2) > .imail').type('nall')
    cy.get(':nth-child(4) > .itel').type('593600700')
    cy.get(':nth-child(5) > .ipass').type('111111')
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('111111')
    cy.get('[for="profile1"]').click()
    cy.get('.regsub').click()

    //გააწითლდა იმეილის ველი 

    
  })
})
    
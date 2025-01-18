describe('წარმატებული მომხმარებლის რეგისტრაცია', () => {
  it('წარმატებული რეგისტრაცია', () => {
     // Fixture-დან მონაცემების ჩატვირთვა
     cy.fixure('registrationData').then((data) => {
      const user = data.validUser;})
    cy.visit('https://testzootopia.loremipsum.ge/ka/register');
    //რეგისტრაციის ველების შევსება
    cy.get(':nth-child(1) > .ismile').type(user.firstName).type(user.lastName);
    cy.get(':nth-child(2) > .imail').type(user.email);
    cy.get('.ipir').type(20001011309)
    cy.get(':nth-child(4) > .itel').type(558600822)
    cy.get(':nth-child(4) > .itel').type(user.password);
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(user.password);
    //წესების და პირობების მონიშვნა
    cy.get('.etx').check();
    //რეგისტაციის ღილაკზე დაკლიკება
    cy.get('.regsub').click();
    //წარმატების რეგისტრაციის შემოწმება
    cy.contains('რეგისტრაცია წარმატებით დასრულდა').should('be.visible');
    })
})
it('რეგისტრაცია არსებული ელფოსტით', () => {
  // Fixture ფაილის გამოყენება
  cy.fixture('registrationData').then((data) => {
    const user = data.existingUser})
    //რეგისტრაციის ველების შევსება
    cy.get(':nth-child(1) > .ismile').type(user.firstName).type(user.lastName);
    cy.get(':nth-child(2) > .imail').type(user.email);
    cy.get('.ipir').type(20001011309)
    cy.get(':nth-child(4) > .itel').type(558600822)
    cy.get(':nth-child(4) > .itel').type(user.password);
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(user.password);
    //წესების და პირობების მონიშვნა
    cy.get('.etx').check();
    //რეგისტაციის ღილაკზე დაკლიკება
    cy.get('.regsub').click();
    cy.contains('ასეთი ელფოსტა უკვე არსებობს').should('be.visible');
    
  })




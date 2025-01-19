describe('კალათი', () => {
  it('ნივთის დამატება კალათში', () => {
    cy.visit('testzootopia.loremipsum.ge')
    cy.get('.menu-pop').click()
    cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click()
    cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click()
    cy.get('.category-holder > .active > :nth-child(3) > a').click()
    cy.get(':nth-child(1) > .price-cart > .product-cart > p').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > p').click()
    
  })
})
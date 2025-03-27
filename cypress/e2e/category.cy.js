describe('Test Category', () => {
    it('Ajout category valide ', () => {
        //Arrange
        cy.visit('/category/new')
        //Act
        cy.get('#category_label').type("SF")
        cy.get('.btn').click()
        cy.wait(1000)
        //Assert
        cy.contains("table tr", "SF").should("exist")
    })

    it('Erreur 500 doublon category', ()=> {
         //Arrange
        cy.visit('/category/new')
        cy.get('#category_label').type("SF")
        cy.get('.btn').click()
        cy.wait(1000)
        cy.get('.container > .break-long-words').contains("An exception")
    })
  })
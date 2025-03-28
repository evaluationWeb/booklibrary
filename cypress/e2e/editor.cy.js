describe('Test Editor', () => {
    it('Ajout Editor valide ', () => {
        //Arrange
        const editor = "Hachette"
        cy.visit('/editor/new')
        //Act
        cy.get('#editor_name').type(editor)
        cy.get('.btn').click()
        cy.wait(1000)
        //Assert
        cy.contains("table tr", editor).should("exist")
    })
    
  })

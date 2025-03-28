describe('Test Editor', () => {
    it('Liste des editors vide', () => {
        //Arrange
        cy.visit('/editor')
        //Act
        //Assert
        cy.contains("table tr", "no records found").should("exist")
    })
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
    it('Ajout Editor Error Doublon ', () => {
        //Arrange
        const editor = "Hachette"
        cy.visit('/editor/new')
        //Act
        cy.get('#editor_name').type(editor)
        cy.get('.btn').click()
        cy.wait(1000)
        //Assert
        cy.get('.container > .break-long-words').contains("An exception")
    })
    it('Ajout Editor champ vide ', () => {
        //Arrange
        cy.visit('/editor/new')
        //Act
        cy.get('#editor_name').clear()
        cy.get('.btn').click()
        //Assert
        cy.get('li').contains("Le nom ne peut pas être vide")
    })
    it('Liste Editor contient des enregistrements',()=>{
        //Arrange
        cy.visit("/editor")
        //Act
        //Assert
        cy.contains("table tr", "Hachette").should("exist")
    })
  })

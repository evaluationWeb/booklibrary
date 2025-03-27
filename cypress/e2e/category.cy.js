describe('Test Category', () => {
    /* it('Ajout category valide ', () => {
        //Arrange
        const cat = "SF"
        cy.visit('/category/new')
        //Act
        cy.get('#category_label').type("SF")
        cy.get('.btn').click()
        cy.wait(1000)
        //Assert
        cy.contains("table tr", "SF").should("exist")
    })
    it('Ajout Erreur 500 doublon category', ()=> {
        cy.visit('/category/new')
        cy.get('#category_label').type("SF")
        cy.get('.btn').click()
        cy.wait(1000)
        cy.get('.container > .break-long-words').contains("An exception")
    }) */

    it('Modification category valide', ()=>{
        //Arrange
        cy.visit('/category')
        const category = "Nouveau"
        const id = 1;
        //Act
        cy.get('[href="/category/'+ id +'/edit"]').click()
        cy.wait(1000)
        cy.get('#category_label').clear().type(category)
        cy.get('[name="category"] > .btn').click()
        //Assert
        cy.wait(500)
        cy.contains("table tr", category).should("exist")
    })

    it('Modification category non identique', ()=>{
        //Arrange
        cy.visit('/category')
        const category = "Nouveau"
        const id = 2;
        //Act
        cy.get('[href="/category/'+ id +'/edit"]').click()
        cy.wait(1000)
        cy.get('#category_label').clear().type(category)
        cy.get('[name="category"] > .btn').click()
        //Assert
        cy.wait(500)
        cy.contains("table tr", category).should("exist")
    })

    it('Modification category Doublon', ()=>{
        //Arrange
        cy.visit('/category')
        const category = "SF"
        const categoryDoublon = "Nouveau"
        const id = 2;
        //Act
        cy.get('[href="/category/'+ id +'/edit"]').click()
        cy.wait(1000)
        cy.get('#category_label').clear().type(categoryDoublon)
        cy.get('[name="category"] > .btn').click()
        //Assert
        cy.wait(500)
        cy.get('.container > .break-long-words').contains("An exception")
    })
  })

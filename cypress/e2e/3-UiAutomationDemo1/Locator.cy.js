/// <reference types="cypress" />

describe('Locator testing', () =>{

    it('Verify to working with locators',()=>{

        cy.visit("https://www.google.com/")
        cy.title().should('equal','Google')

        cy.get('.gLFyf').type('sathik').type('{enter}')

        cy.go('back')

        cy.wait(4000)
    })




})
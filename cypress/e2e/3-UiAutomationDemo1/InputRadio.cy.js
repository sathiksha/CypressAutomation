/// <reference types="cypress" />

describe('Input and Radio buttons', () =>{

   
it('Verifing input textbox',() =>{
cy.visit('https://demo.guru99.com/test/newtours/')
cy.get('[name=userName]').should('be.visible').should('be.enabled').type('sathik')
cy.get('[name=password]').should('be.visible').should('be.enabled').type('sathik')
cy.get('[name=submit]').click()

})


})
/// <reference types="cypress" />

describe('suite level Creation', () =>{

    it('Verify the google title',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.xpath("//input[@placeholder='Password']").type('admin123');
        cy.xpath("//button[@type='submit']").click();

        cy.xpath("//*[text()='Leave']").click();
    })



// Before: Execute once at first level
//BeforeEach : Execute before each Test
//Test1
//AfterEach: Execute After each Test
//After: Execute once at last level


})
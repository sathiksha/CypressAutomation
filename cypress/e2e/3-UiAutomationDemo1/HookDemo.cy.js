/// <reference types="cypress" />

const { should } = require("chai");

describe('login into the site', () =>{

    before(function (){

            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.xpath("//input[@placeholder='Username']").type('Admin');
            cy.xpath("//input[@placeholder='Password']").type('admin123');
            cy.xpath("//button[@type='submit']").click();
       
    })

    it('validate the links in the homepage', ()=>{


        cy.xpath("//*[text()='Leave']").click();
        cy.xpath("(//*[text()='Leave'])[2]")
        should('have.text',"Leave");
    })
    
    after(function(){

        cy.wait(2000);
        cy.get('.oxd-userdropdown-tab').click();
        cy.xpath("//*[text()='Logout']").click();
    })

})
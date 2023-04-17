/// <reference types="cypress" />


describe('Verify OrangeHrm site Flow', () =>{

      let testData;
  
  beforeEach(function() {
    cy.fixture('OrangeHrmLogin').then((data) => {
      testData = data;
    });
  });
  

    it('Validate login flow ',()=>{

        cy.visit(testData.Login.Url)
        cy.xpath("//input[@placeholder='Username']").type(testData.Login.Username)
        cy.xpath("//input[@placeholder='Password']").type(testData.Login.Password)
        cy.xpath("//button[@type='submit']").click()

        cy.xpath("(//*[text()='Dashboard'])[2]").should('have.text',testData.PageVerification.expectedtext)
     
    })

})
/// <reference types="cypress" />

import login from "../../PageObjects/HomePageObject";

describe('Verify OrangeHrm site Flow', () =>{

    let testData;

    let ln;

beforeEach(function() {
  cy.fixture('OrangeHrmLogin').then((data) => {
    testData = data;
  });
});


  it('Validate login flow ',()=>{

      ln= new login();

      cy.visit(testData.Login.Url)

      ln.setUserName(testData.Login.Username)
      ln.setPassword(testData.Login.Password)
      ln.ClickLoginButton();
      ln.Verifypage();
  })

})
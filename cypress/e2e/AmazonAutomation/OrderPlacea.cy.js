/// <reference types="cypress" />

import { test } from "mocha";
import HomePage from "../../PageObjects/HomePageObject";
describe('Place an order as guest user', () =>{

    let testData;

    let ln;

beforeEach(function() {
  cy.fixture('InputData').then((data) => {
    testData = data;
  });
});


  it('Place the Product',()=>{

      ln= new HomePage();

      cy.visit(testData.Home.Url)

      ln.SearchBox(testData.Home.SearchInput)

      ln.SearchButton()

      ln.productPDP()

      cy.window().scrollTo(0, 500);

      ln.AddToCartButton()

      cy.wait(4000)
      ln.GotoCartButton()

      ln.Qtybutton()

      ln.QtySelect()

      ln.proceedbybutton()

      ln.Emailvalue(testData.Home.Email)

       ln.ContinueButtonclick()

       ln.PasswordValue(testData.Home.Password)

       ln.SignInButton()
    })

    
})
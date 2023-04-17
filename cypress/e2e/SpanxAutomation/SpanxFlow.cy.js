/// <reference types="cypress" />

import SpanxPage from "../../PageObjects/SpanxPageObject";
import BaseClass from "../../CommonFunction/BaseClass.cy";

describe('Place an order as guest user', () => {
  let testData;
  let ln;
  let baseClass;

  beforeEach(() => {
    cy.fixture('spanx').then((data) => {
      testData = data;
    });
    baseClass = new BaseClass();
    baseClass.launchUrl();
  });

  it('Place the Product', () => {
    ln = new SpanxPage();

  //  ln.ClothLink();
    
  });
});

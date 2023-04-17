/// <reference types="cypress" />

import RadPowerPage from "../../PageObjects/RadPowerBikePage";
import BaseClass from "../../CommonFunction/BaseClass.cy";

describe('Place an order as guest user', () => {
  let testData;
  let ln;
  let baseClass;

  beforeEach(() => {
    cy.fixture('RadPowerData').then((data) => {
      testData = data;
    });
    baseClass = new BaseClass();
    baseClass.launchUrl();
  });

  it('Place the Product', () => {
    ln = new   RadPowerPage();

    ln.SearchIcon()
    ln.SearchInput(testData.Rad.SearchInput)
    ln.SearchButton()
    ln.SelectBike()
    ln.BuyNowButton()
    ln.SelectBikeColor()
    ln.NextButton()
    ln.BuyNowButton2()
    ln.PlusIcon()
    cy.wait(3000)
    ln.BeginCheckOutButton()
    ln.AgreeCheckbox()
    ln.CheckoutButton()
    cy.wait(7000)
    ln.EmailValue(testData.Rad.Email)
    ln.FirstName(testData.Rad.FirstName)
    ln.LastName(testData.Rad.LastName)
    ln.Address(testData.Rad.Address)
    ln.AddressSelect()
    ln.Phone(testData.Rad.PhoneNumber)
    ln.ContinueButton()
    ln.continuePaymentButton()
    ln.cardNumber(testData.Rad.CardNumber)
    ln.CardName(testData.Rad.CardName)
    ln.ExpireDate(testData.Rad.ExpireDate)
    ln.SecurityCode(testData.Rad.SecurityCode)
    ln.PayNowButton();
  });
});

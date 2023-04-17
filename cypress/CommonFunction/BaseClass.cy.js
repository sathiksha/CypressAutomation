/// <reference types="cypress" />

export default class BaseClass {

  launchUrl() {
    cy.visit('https://www.radpowerbikes.com/');
  }

}

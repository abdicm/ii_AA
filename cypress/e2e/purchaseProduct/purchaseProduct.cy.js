/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as log from "../login/helper/helper.login"
import * as purchase from "../purchaseProduct/helper/helper.purchaseProduct"

describe('Search and Purchase item flow', () => {
  const testCaseID = 'T1-PurchaseItem'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://automationexercise.com/`);
    log.login()
  });

  it('should search and purchase an item on automationexercise website', function () {
    purchase.purchaseProduct();
    purchase.cart();   
    purchase.payment()            

  });
});


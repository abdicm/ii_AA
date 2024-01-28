/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as log from "../login/helper/helper.login"
import * as delete_account from "../deleteAccount/helper/helper.deleteAccount"
import * as createAccount from "../signup/helper/helper.signup"
import * as purchase from "../purchaseProduct/helper/helper.purchaseProduct"

describe('Purchase item flow', () => {
  const testCaseID = 'T1-PurchaseItem'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://automationexercise.com/`);
    // createAccount.initialSignup();
    // createAccount.signupInformation()
    // createAccount.accountConfirmation()
  });

  it('should purchase an item on automationexercise website', function () {
    log.login()
    purchase.purchaseProduct();                  

  });
});


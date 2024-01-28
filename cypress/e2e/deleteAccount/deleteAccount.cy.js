/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as log from "../login/helper/helper.login"
import * as delete_account from "../deleteAccount/helper/helper.deleteAccount"
import * as createAccount from "../signup/helper/helper.signup"

describe('Delete account flow', () => {
  const testCaseID = 'T1-deleteAccount'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://automationexercise.com/`);
    createAccount.initialSignup();
    createAccount.signupInformation()
    createAccount.accountConfirmation()
  });

  it('should delete the account on automationexercise website', function () {
    // log.login()
    delete_account.deleteUser();                  

  });
});


/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as log from "../login/helper/helper.login"
import * as sign from "../signup/helper/helper.signup"

describe('Signup flow', () => {
  const testCaseID = 'T1-Login'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://automationexercise.com/`);
  });

  it('should create account on automationexercise website', function () {
    sign.initialSignup();
    sign.signupInformation()
    sign.accountConfirmation()
  });
});


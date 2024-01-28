/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as log from "../login/helper/helper.login"

describe('Login flow', () => {
  const testCaseID = 'T1-Login'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://automationexercise.com/`);
  });

  it('should login to automationexercise website', function () {
    log.login();
  });
});


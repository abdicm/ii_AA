/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as log from "../login/helper/helper.login"
import * as out from "../logout/helper/helper.logout"

describe('Logout flow', () => {
  const testCaseID = 'T1-Logout'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://automationexercise.com/`);
    log.login()
  });

  it('should logout of automationexercise website', function () {
    out.logout();
  });
});


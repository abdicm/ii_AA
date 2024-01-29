const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "calls": "cypress run --spec cypress/e2e/calls/**/*cy.js --browser chrome --config-file cypress.config.uat.DH.js",
      "callsOpen": "cypress open --config-file cypress.config.uat.DH.js",
      "cy:open:cpUAT": "cypress open --config-file cypress.config.cpUAT.js",
      "runfile": "cypress run --spec cypress/e2e/purchaseProduct/helper/helper.purchaseProduct.js --browser chrome --config-file cypress.config.js",
      "open": "cypress open --config-file cypress.config.js",
      "runfile": "cypress run --spec cypress/e2e/contacts/*cy.js --browser chrome --config-file cypress.config.EL.js"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
 
  },
  
});

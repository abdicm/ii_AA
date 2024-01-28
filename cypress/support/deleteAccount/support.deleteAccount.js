export default {
    deleteAccount() {
        return cy.get('li').contains('a', 'Delete Account').find('i.fa.fa-trash-o')
    },
    accountDeleted() {
        return cy.get('[data-qa="account-deleted"]')
    },
    AccountDeleteContinueButton() {
        return cy.get('[data-qa="continue-button"]')
    },
    AccountDeletedConfirmation() {
        return cy.get('[data-qa="login-email"]')
    },
    passwordField() {
        return cy.get('[data-qa="login-password"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    }
}
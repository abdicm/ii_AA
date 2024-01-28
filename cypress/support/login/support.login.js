export default {
    homeButton() {
        return cy.get('li').contains('a', 'Home').find("i.fa.fa-home")
    },
    loginSignUpButton() {
        return cy.get('li').contains('a', 'Signup / Login').find('i.fa.fa-lock')
    },
    loginForm() {
        return cy.get('.login-form')
    },
    emailField() {
        return cy.get('[data-qa="login-email"]')
    },
    passwordField() {
        return cy.get('[data-qa="login-password"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    },
    currentUser() {
        return cy.get('li').contains('a', 'Logged in as Abdi').find('i.fa.fa-user')
    },
    template1() {
        return cy.get('[aria-label="Contacts"]')
    },
    template2() {
        return cy.get('[aria-label="Settings"]')
    }
}
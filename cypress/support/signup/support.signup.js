export default {
    
    signupForm() {
        return cy.get('.signup-form')
    },
    signupNameField() {
        return cy.get('[data-qa="signup-name"]')
    },
    signupEmailField() {
        return cy.get('[data-qa="signup-email"]')
    },
    signupButton() {
        return cy.get('[data-qa="signup-button"]')
    },
    signupPageHeading() {
        return cy.get('.title.text-center').contains('Enter Account Information')
    },
    title() {
        return cy.get('[data-qa="title"]').find('[value="Mr"]')
    },
    name() {
        return cy.get('[data-qa="name"')
    },
    email() {
        return cy.get('[data-qa="email"]')
    },
    password() {
        return cy.get('[data-qa="password"]')
    },
    brithDay() {
        return cy.get('[name="days"]')
    },
    birthMonth() {
        return cy.get('[name="months"]')
    },
    birthYear() {
        return cy.get('[name="years"]')
    },
    firstName() {
        return cy.get('[name="first_name"]')
    },
    lastName() {
        return cy.get('[name="last_name"]')
    },
    address() {
        return cy.get('[name="address1"')
    },
    state() {
        return cy.get('[name="state"]')
    },
    city() {
        return cy.get('[name="city"]')
    },
    zipcode() {
        return cy.get('[name="zipcode"]')
    },
    mobileNumber() {
        return cy.get('[name="mobile_number"]')
    },
    createAccount() {
        return cy.get('[data-qa="create-account"]')
    },
    accountCreated() {
        return cy.get('[data-qa="account-created"]')
    },
    accountCreatedContinueButton() {
        return cy.get('[data-qa="continue-button"]')
    },
    template() {
        return cy.get('[aria-label="Settings"]')
    }
}
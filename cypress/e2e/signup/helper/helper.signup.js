import loginSupport from "../../../support/login/support.login"

import signupSupport from "../../../support/signup/support.signup"

function initialSignup() {
    loginSupport.homeButton().should("exist").should("be.visible");
    loginSupport.loginSignUpButton().should("exist").should("be.visible").click();
    signupSupport.signupForm().contains('New User Signup!').should("exist").should("be.visible");
    signupSupport.signupNameField().should("exist").should("be.visible").type("Abdi");
    signupSupport.signupEmailField().should("exist").should("be.visible").type("joga.aden@gmail.com");
    signupSupport.signupButton().should("exist").should("be.visible").click();
}
exports.initialSignup = initialSignup

function signupInformation() {
    signupSupport.signupPageHeading().should("exist").should("be.visible");
    signupSupport.title().should("exist").should("be.visible").click();
    signupSupport.password().should("exist").should("be.visible").type("Test123");
    signupSupport.brithDay().should("exist").should("be.visible").select('22');
    signupSupport.birthMonth().should("exist").should("be.visible").select('11');
    signupSupport.birthYear().should("exist").should("be.visible").select('1988');
    signupSupport.firstName().should("exist").should("be.visible").type("Abz");
    signupSupport.lastName().should("exist").should("be.visible").type("Aden");
    signupSupport.address().should("exist").should("be.visible").type("Dark Street");
    signupSupport.state().should("exist").should("be.visible").type("Chennai");
    signupSupport.city().should("exist").should("be.visible").type("Punei");
    signupSupport.zipcode().should("exist").should("be.visible").type("123");
    signupSupport.mobileNumber().should("exist").should("be.visible").type("07556287567");
    signupSupport.createAccount().should("exist").should("be.visible").click();
    
}
exports.signupInformation = signupInformation

function accountConfirmation() {
    signupSupport.accountCreated().should('have.text', 'Account Created!').should("exist").should("be.visible");
    signupSupport.accountCreatedContinueButton().should("exist").should("be.visible").click();
    loginSupport.currentUser().should("exist").should("be.visible")
}
exports.accountConfirmation = accountConfirmation
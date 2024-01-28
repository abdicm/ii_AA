import loginSupport from "../../../support/login/support.login"

function login() {
    loginSupport.homeButton().should("exist").should("be.visible");
    loginSupport.loginSignUpButton().should("exist").should("be.visible").click()
    loginSupport.loginForm().contains('Login to your account').should("exist").should("be.visible")
    loginSupport.emailField().should("exist").should("be.visible").type("abdi.yassin@hotmail.com");
    loginSupport.passwordField().should("exist").should("be.visible").type("Test123");
    loginSupport.loginButton().should("exist").should("be.visible").click()
    loginSupport.currentUser().should("exist").should("be.visible")
}
exports.login = login

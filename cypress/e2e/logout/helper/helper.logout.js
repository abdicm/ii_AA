import loginSupport from "../../../support/login/support.login"
import logoutSupport from "../../../support/logout/support.logout"

function logout() {
    logoutSupport.logoutButton().should("exist").should("be.visible").click()
    loginSupport.homeButton().should("exist").should("be.visible");
    loginSupport.loginSignUpButton().should("exist").should("be.visible")
}
exports.logout = logout

import loginSupport from "../../../support/login/support.login"
import deleteSupport from "../../../support/deleteAccount/support.deleteAccount"

function deleteUser() {
    loginSupport.homeButton().should("exist").should("be.visible");
    loginSupport.currentUser().should("exist").should("be.visible");
    deleteSupport.deleteAccount().should("exist").should("be.visible").click();
    deleteSupport.accountDeleted().should('have.text', 'Account Deleted!').should("exist").should("be.visible");
    deleteSupport.AccountDeleteContinueButton().should("exist").should("be.visible").click()
    loginSupport.loginSignUpButton().should("exist").should("be.visible")                                                                                                                                                                                                                        
}
exports.deleteUser = deleteUser

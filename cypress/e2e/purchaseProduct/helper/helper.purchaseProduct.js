import loginSupport from "../../../support/login/support.login"
import purchaseSupport from "../../../support/purchaseProduct/support.purchaseProduct"

function purchaseProduct() {
    loginSupport.homeButton().should("exist").should("be.visible");
    loginSupport.currentUser().should("exist").should("be.visible");
    purchaseSupport.products().should("exist").should("be.visible").click();
    purchaseSupport.searchProductField().should("exist").should("be.visible").type("Polo");
    purchaseSupport.submitSearchButton().should("exist").should("be.visible").click();
    purchaseSupport.productInfo().should('have.text', 'Premium Polo T-Shirts').should("exist").should("be.visible") ;
    purchaseSupport.viewProductButton().should("exist").should("be.visible").click();                                                                                                                                                                              
    purchaseSupport.productDetails().contains('Premium Polo T-Shirts').should("exist").should("be.visible");
    purchaseSupport.addToCart().should("exist").should("be.visible").click();
    // purchaseSupport.productInfo().should('have.text', ' In Stock').should("exist").should("be.visible");                                                                                                                                                                                                       

}
exports.purchaseProduct = purchaseProduct

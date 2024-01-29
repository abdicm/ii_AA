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
    purchaseSupport.modalTitle().should('have.text', 'Added!').should("exist").should("be.visible");                                                                                                                                                                                                       
    purchaseSupport.continueShoppingButton().should("exist").should("be.visible").click();
}
exports.purchaseProduct = purchaseProduct

function cart() {
    purchaseSupport.cart().should("exist").should("be.visible").click();
    purchaseSupport.cartDescription().contains("Premium Polo T-Shirts").should("exist").should("be.visible");
    purchaseSupport.cartCheckoutButton().should("exist").should("be.visible").click();
    purchaseSupport.heading().contains("Address Details").should("exist").should("be.visible");
    purchaseSupport.heading().contains("Review Your Order").should("exist").should("be.visible");
    purchaseSupport.cartTotalPrice().should('contain', 'Rs. 1500').should("exist").should("be.visible");
    purchaseSupport.placeorderButton().should('have.text', 'Place Order').should("exist").should("be.visible").click();
}
exports.cart = cart

function payment() {
    purchaseSupport.heading().contains("Payment").should("exist").should("be.visible").click();
    purchaseSupport.creditCardName().should("exist").should("be.visible").type("Test");
    purchaseSupport.creditCardNumber().should("exist").should("be.visible").type("Test");
    purchaseSupport.cvcNumber().should("exist").should("be.visible").type("378282246310005");
    purchaseSupport.expiryMonth().should("exist").should("be.visible").type("11");
    purchaseSupport.expiryYear().should("exist").should("be.visible").type("2027");
    purchaseSupport.payButton().should('have.text', 'Pay and Confirm Order').should("exist").should("be.visible").click();
    purchaseSupport.orderPlacedHeading().should("exist").should("be.visible")
    purchaseSupport.orderPlacedContinueButton().should("exist").should("be.visible").click()
    purchaseSupport.featuresItems().contains("Features Items").should("exist").should("be.visible")
}
exports.payment = payment

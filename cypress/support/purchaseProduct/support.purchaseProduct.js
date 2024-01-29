export default {
    products() {
        return cy.get('li').contains('a', 'Products').find('i.material-icons.card_travel')
    },
    searchProductField() {
        return cy.get('[id="search_product"]')
    },
    submitSearchButton() {
        return cy.get('[id="submit_search"]')
    },
    productInfo() {
        return cy.get('.productinfo.text-center').as('productInfo').find('p')
    },
    viewProductButton() {
        return cy.get('.fa.fa-plus-square')
    },
    productDetails() {
        return cy.get('.product-information').find('h2')
    },
    addToCart() {
        return cy.get('.btn.btn-default.cart')
    },
    modalTitle() {
        return cy.get('.modal-title.w-100')
    },
    continueShoppingButton() {
        return cy.get('.btn.btn-success.close-modal.btn-block')
    },
    cart() {
        return cy.get('li a[href="/view_cart"]').find('i.fa.fa-shopping-cart')
    },
    cartDescription() {
        return cy.get('td.cart_description')
    },
    cartCheckoutButton() {
        return cy.get('.btn.btn-default.check_out')
    },
    heading() {
        return cy.get('h2.heading')
    },
    cartTotalPrice() {
        return cy.get('p.cart_total_price')
    },
    placeorderButton() {
        return cy.get('.btn.btn-default.check_out')
    },
    creditCardName() {
        return cy.get('[data-qa="name-on-card"]')
    },
    creditCardNumber() {
        return cy.get('[data-qa="card-number"]')
    },
    cvcNumber() {
        return cy.get('[data-qa="cvc"]')
    },
    expiryMonth() {
        return cy.get('[data-qa="expiry-month"]')
    },
    expiryYear() {
        return cy.get('[data-qa="expiry-year"]')
    },
    payButton() {
        return cy.get('[data-qa="pay-button"]')
    },
    orderPlacedHeading() {
        return cy.get('[data-qa="order-placed"]')
    },
    orderPlacedContinueButton() {
        return cy.get('[data-qa="continue-button"]')
    },
    featuresItems() {
        return cy.get('.title.text-center')
    }
}
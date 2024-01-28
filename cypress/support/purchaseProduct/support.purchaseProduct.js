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
        return cy.get('.fa.fa-shopping-cart')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    },
    loginButton() {
        return cy.get('[data-qa="login-button"]')
    }
}
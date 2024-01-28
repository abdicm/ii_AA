export default {
    logoutButton() {
        return cy.get('li').contains('a', 'Logout').find('i.fa.fa-lock')
    },
    example1() {
        return cy.get('[aria-label="Contacts"]')
    },
    example2() {
        return cy.get('[aria-label="Settings"]')
    }
}
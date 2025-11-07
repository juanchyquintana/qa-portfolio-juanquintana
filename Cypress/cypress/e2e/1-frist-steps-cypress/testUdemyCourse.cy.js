/// <reference types="cypress" />

describe('Udemy Course', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('should have a title', () => {
        cy.title().should('eq', 'OrangeHRM')
    })
})
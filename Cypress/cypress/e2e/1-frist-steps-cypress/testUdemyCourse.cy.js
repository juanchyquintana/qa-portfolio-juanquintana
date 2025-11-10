/// <reference types="cypress" />

describe('Udemy Course', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('should have a title', () => {
        cy.title().should('eq', 'The Internet')
    })

    // it('Test with Pause', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login')
    //     cy.get('#username').type('tomsmith').pause();
    //     cy.get('#password').pause().type('SuperSecretPassword!');
    //     cy.get('form').contains('Login').click();
    //     cy.url().should('contain', '/secure').pause();
    // })

    // it('Command debug', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login')
    //     cy.get('#username').type('tomsmith');
    //     cy.get('#password').type('SuperSecretPassword!').debug();
    //     cy.get('form').contains('Login').click();
    //     cy.url().should('contain', '/secure');
    // })

    // it('New Window', () => {
    //     cy.contains('Multiple Windows').click();
    //     cy.contains("Click Here").invoke('removeAttr', 'target').click();
    //     cy.contains('New Window').should('have.text', 'New Window')
    // })

    // it('Shadow DOM', () => {
    //     cy.contains('Shadow DOM').click();
    //     cy.get('#content > :nth-child(2)').shadow().should('have.text', 'In a list!')
    // })

    // it('First and last element', () => {
    //     cy.contains('Dynamic Content').click();
    //     cy.get('img').eq(2).should('be.visible')
    // })

    // it('Father and child', () => {
    //     cy.contains('Dynamic Content').click();
    //     cy.get(':nth-child(4) > .large-2 > img').parent();
    //     cy.get('.example > :nth-child(7)').children();
    // })

    // it('Invoke', () => {
    //     cy.contains('Dynamic Content').should('be.hidden').invoke('show').should('be.visible')
    // })

    // it('Example Click', () => {
    //     cy.contains("Add/Remove Elements").click();
    //     cy.get('button').click();
    //     cy.get('.added-manually').click();
    // })

    it("Type example", () => {
        cy.contains("Form Authentication").click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
    })
})
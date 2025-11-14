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

    it('Command debug', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!').debug();
        cy.get('form').contains('Login').click();
        cy.url().should('contain', '/secure');
    })

    it('New Window', () => {
        cy.contains('Multiple Windows').click();
        cy.contains("Click Here").invoke('removeAttr', 'target').click();
        cy.contains('New Window').should('have.text', 'New Window')
    })

    it('First and last element', () => {
        cy.contains('Dynamic Content').click();
        cy.get('img').eq(2).should('be.visible')
    })

    it('Father and child', () => {
        cy.contains('Dynamic Content').click();
        cy.get(':nth-child(4) > .large-2 > img').parent();
        cy.get('.example > :nth-child(7)').children();
    })

    it('Example Click', () => {
        cy.contains("Add/Remove Elements").click();
        cy.get('button').click();
        cy.get('.added-manually').click();
    })

    it("Type example", () => {
        cy.contains("Form Authentication").click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
    });

    it('Dropdown example', () => {
        cy.contains('Dropdown').click();
        cy.get('#dropdown').select('Option 2').should('have.value', '2');
    })

    it('Hover example', () => {
        cy.contains('Hovers').click();
        cy.get('#content > div > div:nth-child(4) > div > a').invoke('show');
    })

    it('Right-Click example', () => {
        cy.contains('Context Menu').click();
        cy.get('#hot-spot').rightclick();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('You selected a context menu')
        })
    })

    it('Implicit Validations examples', () => {
        cy.contains('Inputs').click();

        cy.get('h3').should('have.text', 'Inputs')
        cy.get('input[type="number"]').type('250401').should('have.value', '250401')
    })

    it('Explicit Validations examples', () => {
        cy.contains('Inputs').click();

        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    })


    it("Promises Example", () => {
        let waited = false;
        
        function waitOneSecond() {
            return new Cypress.Promise((resolve, reject) => {
                setTimeout(() => {
                    waited = true;
                    resolve('foo');
                }, 1000)
            })
        }

        cy.wrap(null).then(() => {
            return waitOneSecond().then((result) => {
                expect(result).to.equal('foo')
                expect(waited).to.be.true;
            })
        })
    })

})

/// <reference types="cypress" />

// =========================
// Suite: Flow of Cart in Demoblaze
// Author: Juan Diego Quintana
// Description: Validate categories, add and verify products
// =========================

describe('Demoblaze - basic e-commerce (Junior Level)', () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com")
    })

    it('TC-DB01 - List by Category', () => {
        cy.title().should('eq', 'STORE');

        // Click Laptops
        cy.xpath("(//a[normalize-space()='Laptops'])[1]").click();

        // Verify at least one product exists
        cy.get("#tbodyid .col-lg-4.col-md-6.mb-4").should("have.length.at.least", 1);

        // Verify each product has visible title and image
        cy.get("#tbodyid .col-lg-4.col-md-6.mb-4").each(($el, index) => {
            cy.log(`Product Verified #${index + 1}`);
            cy.wrap($el).find('.card-title').should('be.visible'); // Check title visible
            cy.wrap($el).find('img').should('have.class', 'card-img-top'); // Check image visible
        })
    });

    it('TC-DB02 - Add Product (Happy Path)', () => {

    });
})
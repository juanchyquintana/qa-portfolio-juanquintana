/// <reference types="cypress" />

// =========================
// Suite: Flow of Cart in Demoblaze
// Author: Juan Diego Quintana
// Description: Validate categories, add and verify products
// =========================

describe("Demoblaze - basic e-commerce (Junior Level)", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com");
  });

  it("TC-DB01 - List by Category", () => {
    cy.title().should("eq", "STORE");

    // Click Laptops
    cy.xpath("(//a[normalize-space()='Laptops'])[1]").click();

    // Verify at least one product exists
    cy.get("#tbodyid .col-lg-4.col-md-6.mb-4").should(
      "have.length.at.least",
      1
    );

    // Verify each product has visible title and image
    cy.get("#tbodyid .col-lg-4.col-md-6.mb-4").each(($el, index) => {
      cy.log(`Product Verified #${index + 1}`);
      cy.wrap($el).find(".card-title").should("be.visible"); // Check title visible
      cy.wrap($el).find("img").should("have.class", "card-img-top"); // Check image visible
    });
  });

  it("TC-DB02 - Add Product (Happy Path)", () => {
    /**
     * Steps: Abrir un producto → **Add to cart** → aceptar `window.alert`.
     * Expected: Alert con texto de confirmación; producto aparece luego en **Cart**.
     **/
    cy.title().should("eq", "STORE");

    cy.xpath("//a[normalize-space()='Samsung galaxy s7']")
      .should("have.text", "Samsung galaxy s7")
      .should("have.class", "hrefch")
      .click();

    cy.wait(1000);

    cy.get(".product-content.product-wrap.clearfix.product-deatil")
      .should("be.visible")
      .within(() => {
        cy.get("h2.name")
          .should("be.visible")
          .should("have.class", "name")
          .should("have.text", "Samsung galaxy s7");

        cy.get("h3.price-container")
          .should("be.visible")
          .should("contain.text", "$")
          .should("have.text", "$800 *includes tax");

        cy.get("#more-information")
          .should("be.visible")
          .should("contain.text", "Product description");

        cy.on("window:alert", (message) => {
          expect(message).to.contain("Product added");
        });

        cy.get(".btn.btn-success.btn-lg")
          .should("be.visible")
          .should("have.prop", "tagName", "A")
          .should("have.text", "Add to cart")
          .click();
      });
  });
});

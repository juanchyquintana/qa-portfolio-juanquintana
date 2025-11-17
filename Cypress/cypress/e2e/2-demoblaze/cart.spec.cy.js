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

  it("TC-DB03 - Verify Cart and Total", () => {
    cy.title().should("eq", "STORE");

    cy.get("div[id='contcont'] div:nth-child(3)")
      .should("be.visible")
      .should("include.text", "Nexus 6")
      .within(() => {
        cy.get("h4.card-title")
          .should("be.visible")
          .should("have.text", "Nexus 6");

        cy.get("h5")
          .should("be.visible")
          .should("contain.text", "$")
          .should("have.text", "$650");

        cy.get("#article")
          .should("be.visible")
          .should(
            "contain.text",
            "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM."
          );

        cy.get("h4.card-title").click();
      });

    cy.get(".product-content.product-wrap.clearfix.product-deatil")
      .should("be.visible")
      .within(() => {
        cy.get("h2.name")
          .should("be.visible")
          .should("have.class", "name")
          .should("have.text", "Nexus 6");

        cy.get("h3.price-container")
          .should("be.visible")
          .should("contain.text", "$")
          .should("have.text", "$650 *includes tax");

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

      cy.get("#cartur").should('include.text', "Cart").click();

      cy.get("#page-wrapper").should("be.visible").within(() => {
        cy.get('h2').should('include.text', "Products");
        cy.get('.table.table-bordered.table-hover.table-striped').should('be.visible');
        cy.get("tbody tr").should('have.length.at.least', 1).within(() => {
          cy.get("td img").eq(0).should('be.visible');
          cy.get("td").eq(1).should("include.text", "Nexus 6")
          cy.get("td").eq(2).should("include.text", "650")
          cy.get("td a").should("have.prop", "tagName", "A").should('include.text', "Delete")
        });
      });

      cy.get(".col-lg-1").should('be.visible').within(() => {
        cy.get("h2").should("contain.text", "Total")
        cy.get("#totalp").should('not.contain.text', "$")
        cy.get("#totalp").should('contain.text', "650")
        cy.get(".btn.btn-success")
          .should("be.visible")
          .should('contain.text', "Place Order")
      })
  });

  it("TC-DB04 - Delete a product from Cart", () => {
    cy.title().should("eq", "STORE");
  })
});

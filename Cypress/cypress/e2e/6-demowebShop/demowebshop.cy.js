describe("Demo Web Shop (Tricentis) — Searchs, filters and checkout (Senior Level)", () => {
  const title = "Demo Web Shop";

  beforeEach(() => {
    cy.visit("http://demowebshop.tricentis.com");
  });

  it("TC-01 - Search and filters", () => {
    cy.title().should("eq", title);

    // Get search input and button
    cy.searchProducts("computer");

    cy.title().should("eq", title + ". Search");

    cy.get("div.basic-search div.inputs.reversed")
      .should("be.visible")
      .within(() => {
        cy.get("label")
          .should("be.visible")
          .should("contain.text", "Advanced search");

        cy.get("input[type='checkbox'][id='As']")
          .should("be.visible")
          .should("have.attr", "type", "checkbox")
          .check();
      });

    cy.get("div[class='search-input'] form")
      .should("be.visible")
      .within(() => {
        cy.get("label[for='Cid']")
          .should("be.visible")
          .should("contain.text", "Category:");

        cy.get("#Cid")
          .should("be.visible")
          .select("2")
          .should("have.value", "2")
          .find("option:selected")
          .should("have.text", "Computers");
      });

    cy.xpath("(//div[@class='inputs reversed'])[2]")
      .should("be.visible")
      .within(() => {
        cy.get("label")
          .should("be.visible")
          .should("contain.text", "Automatically search sub categories");

        cy.get("input[type='checkbox'][id='Isc']")
          .should("be.visible")
          .should("have.attr", "type", "checkbox")
          .check();
      });

    cy.get("span.price-range")
      .prev("label")
      .contains("label", "Price range:")
      .should("be.visible");

    const minPrice = 750;
    const maxPrice = 1150;

    cy.get(".price-range")
      .should("be.visible")
      .should("contain.text", "From")
      .should("contain.text", "to")
      .within(() => {
        cy.get("#Pf")
          .should("be.visible")
          .should("have.id", "Pf")
          .should("have.attr", "class", "price-from")
          .should("have.prop", "name", "Pf")
          .should("have.prop", "type", "text")
          .should("have.value", "")
          .type(minPrice);

        cy.get("#Pt")
          .should("be.visible")
          .should("have.id", "Pt")
          .should("have.attr", "class", "price-to")
          .should("have.prop", "name", "Pt")
          .should("have.prop", "type", "text")
          .should("have.value", "")
          .type(maxPrice);
      });

    cy.get("div.buttons input.button-1.search-button")
      .should("be.visible")
      .should("have.prop", "type", "submit")
      .should("have.value", "Search")
      .click();

    cy.get(".item-box").then((items) => {
      if (items.length === 0) {
        cy.contains(
          "No products were found that matched your criteria."
        ).should("be.visible");
      } else {
        cy.wrap(items).each((item) => {
          cy.wrap(item)
            .find(".product-title")
            .invoke("text")
            .should("match", /computer/i);

          cy.wrap(item)
            .find(".prices")
            .invoke("text")
            .then((text) => {
              const price = parseFloat(text.replace(/[^0-9.]/g, ""));
              expect(price).to.be.gte(minPrice);
              expect(price).to.be.lte(maxPrice);
            });
        });
      }
    });
  });

  
});

describe("Petstore — catalog and consistency user interface/network (Intermedio-Avanzado Level)", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });

  it("TC-01 - Search by keyword", () => {
    cy.title().should("eq", "JPetStore Demo");

    cy.searchPet("fish");

    cy.get("#Catalog table tbody tr")
      .should("be.visible")
      .its("length")
      .should("be.gt", 0);

    cy.get("#Catalog table tbody tr:has(td)").each((row, index) => {
      if (index === 0) return;

      cy.wrap(row)
        .find("td")
        .then((cells) => {
          if (cells.length < 3) {
            cy.log("Not more results.");
            return;
          }

          cy.wrap(row)
            .find("td")
            .eq(1)
            .invoke("text")
            .then((productId) => {
              expect(productId.trim()).to.match(/^FI-/);
            });

          cy.wrap(row)
            .find("td")
            .eq(2)
            .invoke("text")
            .then((productName) => {
              expect(productName.toLowerCase()).to.include("fish");
            });
        });
    });
  });

  it("TC-02 - Consistency listing→detail", () => {
    cy.title().should("eq", "JPetStore Demo");

    cy.get("div[id='QuickLinks'] a:nth-child(1)")
      .should("be.visible")
      .should("have.prop", "tagName", "A")
      .click();

    cy.get("div[id='Catalog'] h2")
      .should("be.visible")
      .should("have.text", "Fish");

    cy.get("tbody tr:nth-child(2) td:nth-child(2)").should(
      "have.text",
      "Angelfish"
    );

    cy.get("a[href='/actions/Catalog.action?viewProduct=&productId=FI-SW-01']")
      .should("be.visible")
      .should("have.prop", "tagName", "A")
      .should("have.text", "FI-SW-01")
      .click();

    cy.get("div[id='Catalog'] h2")
      .should("be.visible")
      .should("have.text", "Angelfish");

    cy.get("#Catalog table tbody tr")
      .eq(1)
      .within(() => {
        cy.get("td").eq(0).find("a").invoke("text").as("itemId");
        cy.get("td").eq(2).invoke("text").as("name");
        cy.get("td").eq(3).invoke("text").as("price");
      });

    cy.get("a[href='/actions/Catalog.action?viewItem=&itemId=EST-1']")
      .should("be.visible")
      .should("have.prop", "tagName", "A")
      .should("have.text", "EST-1")
      .click();

    cy.checkConsistencyInfo("@itemId", 1);
    cy.checkConsistencyInfo("@name", 2);
    cy.checkConsistencyInfo("@price", 5);
  });

  it.only("TC-03 - Navigation by Category", () => {
    cy.title().should("eq", "JPetStore Demo");

    cy.xpath("//div[@id='QuickLinks']//a[contains(@href, 'REPTILES')]")
      .should("be.visible")
      .should("have.prop", "tagName", "A")
      .click();

    cy.url().should("include", "categoryId=REPTILES");

    cy.get("#Catalog table tbody tr:has(td)")
      .should("have.length.at.least", 1)
      .each((row) => {
        cy.wrap(row)
          .find("td")
          .first()
          .invoke("text")
          .should("match", /RP-\w+/);
      });

    // NOTA - Paginar si aplica: N/A (la página no presenta paginación para esta categoría)
    // NOTE - Pagination if applicable: N/A (the page does not have pagination for this category)
  });
});

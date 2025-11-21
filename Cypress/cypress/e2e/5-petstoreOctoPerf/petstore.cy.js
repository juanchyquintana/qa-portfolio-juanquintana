describe("Petstore — catalog and consistency user interface/network (Intermedio-Avanzado Level)", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });

  it("TC-01 - Search by keyword", () => {
    cy.title().should("eq", "JPetStore Demo");

    cy.searchPet("fish")
    
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
});

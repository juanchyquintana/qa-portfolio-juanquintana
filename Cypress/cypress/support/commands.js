// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitInSameTab", (url) => {
  cy.on("window:before:load", (win) => {
    cy.stub(win, "open")
      .as("windowOpen")
      .callsFake(() => {
        cy.visit(url);
      });
  });
});

// Task Commands - To Do List James
Cypress.Commands.add("createTask", (task) => {
  cy.get(".todo-form input").type(`${task}{enter}`);
});

Cypress.Commands.add("checkStatusOfTask", (task, status) => {
  cy.contains("li", task)
    .should("not.have.class", status)
    .find("input")
    .click({ multiple: true, force: true });

  cy.contains("li", task).should("have.class", status);
});


// Pet Store Commands
Cypress.Commands.add("searchPet", (pets) => {
      cy.get("#SearchContent form")
      .find("input[name='keyword']")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.value", "")
      .type(pets);

    cy.get("#SearchContent form")
      .find("input[name='searchProducts']")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.value", "Search")
      .click();

})

Cypress.Commands.add("checkConsistencyInfo", (alias, rowIndex) => {
      cy.get(alias).then((value) => {
      const expected = value.trim();

      cy.get("tbody tr")
        .eq(rowIndex)
        .invoke("text")
        .then((rawText) => {
          const normalized = rawText.replace(/\s+/g, " ").trim();
          expect(normalized).to.include(expected);
        });
    });
})
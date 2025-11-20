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

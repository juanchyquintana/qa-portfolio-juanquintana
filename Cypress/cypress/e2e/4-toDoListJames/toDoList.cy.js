/// <reference types="cypress" />

describe("Todo List (james) — SPA CRUD (Intermediate Level)", () => {
  beforeEach(() => {
    cy.visit("https://todolist.james.am/");
  });

  it("TC-01 - Create Task", () => {
    cy.title().should("eq", "To Do List");

    cy.get("span.todo-count").should("not.be.visible");

    cy.get(".todo-form.ng-pristine.ng-valid > input")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.value", "")
      .type("Pagar luz{enter}");

    cy.get("label[class='ng-binding']")
      .should("be.visible")
      .should("contain.text", "Pagar luz");

    // NOTE: Known bug - first task does not update counter
    // NOTA: Error conocido - la primera tarea no actualiza el contador.
    cy.get("strong.ng-binding")
      .should("be.visible")
      .should("contain.text", "1");
  });

  it.only("TC-02 - Task Completed and Filter", () => {
    cy.title().should("eq", "To Do List");

    // Pre Conditions
    cy.get("span.todo-count").should("not.be.visible");

    // Steps - Create Tasks
    cy.get(".todo-form.ng-pristine.ng-valid > input")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.value", "")
      .type("Reportar el bug del TC-01{enter}");

    cy.get("label[class='ng-binding']")
      .should("be.visible")
      .should("contain.text", "Reportar el bug del TC-01");

    cy.contains("li", "Reportar el bug del TC-01")
      .should("not.have.class", "completed")
      .find("input")
      .click({ multiple: true, force: true });

    cy.contains("li", "Reportar el bug del TC-01").should(
      "have.class",
      "completed"
    );

    cy.contains("li", "Reportar el bug del TC-01")
      .find("input.toggle")
      .should("be.checked");

    cy.contains("a", "Completed")
      .should("be.visible")
      .should("have.text", "Completed")
      .click();

    cy.get(".todo-list li").should("contain.text", "Reportar el bug del TC-01");

    cy.contains("a", "active")
      .should("be.visible")
      .should("have.text", "active")
      .click();

    cy.get(".todo-list").should(
      "not.contain.text",
      "Reportar el bug del TC-01"
    );
  });
});

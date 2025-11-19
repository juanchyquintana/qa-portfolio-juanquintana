/// <reference types="cypress" />

describe("Todo List (james) — SPA CRUD (Intermediate Level)", () => {
  beforeEach(() => {
    cy.visit("https://todolist.james.am/");
  });

  it("TC-01 - Create Task", () => {
    cy.title().should("eq", "To Do List");

    cy.get("span.todo-count")
      .should("not.be.visible");

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
});

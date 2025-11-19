describe("TestSheepNZ Basic Calculator — Functional Validations (Junior-Intermediate Level)", () => {
  beforeEach(() => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
  });

  it("TC-01 - Add Basic", () => {
    const number1Field = 2;
    const number2Field = 3;
    const operationResult = number1Field + number2Field;

    // Pre Conditions
    cy.title().should("eq", "Basic Calculator");
    cy.get("#calcForm").should("be.visible");

    // Data Test
    cy.get("#number1Field").should("have.value", "");
    cy.get("#number2Field").should("have.value", "");
    cy.get("#numberAnswerField").should("have.value", "");
    cy.get("#integerSelect").should("not.be.checked");

    // Steps
    cy.get("#number1Field")
      .type(number1Field)
      .should("have.value", number1Field.toString());
    cy.get("#number2Field")
      .type(number2Field)
      .should("have.value", number2Field.toString());

    cy.get("#selectOperationDropdown")
      .should("have.value", "0")
      .find("option:selected")
      .should("have.text", "Add");

    cy.get("#calculateButton")
      .should("have.prop", "tagName", "INPUT")
      .should("have.value", "Calculate")
      .should("have.prop", "type", "button")
      .click();

    // Expected Result
    cy.get("#numberAnswerField")
      .should("be.visible")
      .should("have.value", operationResult.toString());

    cy.get("#errorMsgField").should("not.be.visible");
  });

  it("TC-02 - Divide by Zero", () => {
    const number1Field = 10;
    const number2Field = 0;

    // Pre Conditions
    cy.title().should("eq", "Basic Calculator");
    cy.get("#calcForm").should("be.visible");
    cy.get("#errorMsgField").should("not.be.visible");


    // Data Test
    cy.get("#number1Field").should("have.value", "");
    cy.get("#number2Field").should("have.value", "");
    cy.get("#numberAnswerField").should("have.value", "");
    cy.get("#integerSelect").should("not.be.checked");

    // Steps
    cy.get("#number1Field")
      .type(number1Field)
      .should("have.value", number1Field.toString());
    cy.get("#number2Field")
      .type(number2Field)
      .should("have.value", number2Field.toString());

    cy.get("#selectOperationDropdown")
      .select("3")
      .should("have.value", "3")
      .find("option:selected")
      .should("have.text", "Divide");

    cy.get("#calculateButton")
      .should("have.prop", "tagName", "INPUT")
      .should("have.value", "Calculate")
      .should("have.prop", "type", "button")
      .click();

    // Expected Result
    cy.get("#numberAnswerField").should("not.be.visible").should("have.value", "");

    cy.get("#errorMsgField")
      .should("be.visible")
      .should("contain.text", "Divide by zero error!");
  });
});

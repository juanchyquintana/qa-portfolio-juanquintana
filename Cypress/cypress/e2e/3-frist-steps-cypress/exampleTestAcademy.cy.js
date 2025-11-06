/// <reference types="cypress" />

describe("Test Group", function () {
  before(function () {
    cy.log("Cargando datos antes");
  });

  after(function () {
    cy.log("Cargando datos despues");
  });

  beforeEach(function () {
    cy.visit("http://logofree.esy.es/");
    cy.fixture("fixtureTest.json").as("userData");
  });

  afterEach(function () {
    cy.log("Enviamos al After Each de Prueba");
  });

  it("Test 1 - Check word Carrito", function () {
    cy.contains("Carrito").click();

    cy.get("a[rel='home']")
      .should("be.visible")
      .and("contain", "Automation Testing");

    cy.get('input[placeholder="Search …"]').type("Amigo Mio").clear();

    cy.go("back");
  });

  it("Test 2 - Handling Checkbox", function () {
    cy.contains("Checkbox").click();

    cy.get('input[name="cbilibros"]').check();
    cy.get('input[name="cbilibros"]').should("be.checked");
    cy.get('input[name="cbiinternet"]').should("not.be.checked");
    cy.get('input[name="cbipeliculas"]').should("not.be.checked");
  });

  it("Test 3 - Handling Selects Fields", function () {
    cy.contains("Selects").click();
    cy.get("#cars").select("Mercedes");
  });

  it("Test 4 - Element with same localizator", function () {
    cy.get(".button").eq(1).click();
  });

  it("Test 5 - Test Fixture Data", function () {
    cy.get("@userData").then((userData) => {
      cy.visit(userData.url);
      cy.get("#woocommerce-product-search-field-0").type(userData.producto);
      cy.get("#woocommerce-product-search-field-0").type("{enter}");
    });
  });

  it("Test 6 - Personalize Commands", function () {
    cy.get("@userData").then((userData) => {
      cy.iniciarSesion(userData.correo);
    });
  });

  it("Test 7 - Screenshots", function () {
    cy.get("@userData").then((userData) => {
      cy.iniciarSesion(userData.correo);
      //cy.screenshot();
    });
  });

  it("Test 8 - Use XPath", () => {
    cy.xpath("(//a[@class='page-numbers'][normalize-space()='2'])[1]").click();
  });
});

describe("API Request", function () {
  it("GET Test", () => {
    //cy.request("GET", "https://reqres.in/api/users?page=2").its("body").should("have.property", "page", 2);

    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
        headers: {
            Authorization: 'reqres-free-v1'
        },
    }).its("body").should("have.property", "page", 2);
  });
  
  it("POST Test", () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
        headers: {
            Authorization: 'reqres-free-v1'
        },
    }, { name: 'Juan', 'job': 'QA Tester'});
  });
});

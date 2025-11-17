describe("Loguin - Basic Auth and Auth with forms", () => {
  beforeEach(() => {
    cy.task('db:teardown')
    cy.task('db:seeding')
  });

  it("Not Login", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth");
    cy.get("p").should("include.text", "Congratulations");
  });

  it("Login with Auth of Cypress", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get("p").should("include.text", "Congratulations");
  });

  it("Login with URL Credentials", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get("p").should("include.text", "Congratulations");
  });

  it("Login with Form Authentication", () => {
    cy.visit("https://the-internet.herokuapp.com");
    cy.request({
      method: "POST",
      url: "/authenticate",
      form: true,
      body: {
        username: "tomsmith",
        password: "SuperSecretPassword!",
      },
    });

    cy.getCookie("rack.session").should("exist");
    cy.visit("https://the-internet.herokuapp.com/secure");
    cy.get(".subheader").should("include.text", "Welcome to the Secure Area.");
  });
});

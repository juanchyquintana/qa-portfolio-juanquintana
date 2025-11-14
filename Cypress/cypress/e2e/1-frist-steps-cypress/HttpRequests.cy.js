describe("", () => {
  it("POST - Response with status 200", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("POST - Have 100 requests", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.request("/posts").its("body").should("have.length", 100);
  });

  it("POST - Validate title of request", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.request("/posts/1")
      .its("body")
      .should(
        "have.property",
        "title",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
  });
});

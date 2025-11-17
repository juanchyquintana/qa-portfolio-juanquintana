describe("HTTP Methods", () => {
  it("GET - Response with status 200", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("GET - Have 100 requests", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.request("/posts").its("body").should("have.length", 100);
  });

  it("GET - Validate title of request", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.request("/posts/1")
      .its("body")
      .should(
        "have.property",
        "title",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
  });

  it("POST - Send valid information", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      userId: 25,
      id: 200,
      title: "Rocco",
      body: "Un rocco loquete que ta bien loco.",
    }).then((response) => {
      expect(response.body).to.have.property("title", "Rocco");
    });
  });

  it("PUT - Updated information", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/2", {
      title: "Rocco",
      body: "Un rocco loquete que ta bien loco.",
    }).then((response) => {
      expect(response.body).to.have.property("title", "Rocco");
    });
  });

  it("DELETE - Delete informtion", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1");
  });

  it("Simulate GET to /posts with Stub", () => {
    const samplePosts = [
      {
        userId: 1,
        id: 2,
        title: "El Carpincho del Dia",
        body: "Amigo mio",
      },
      {
        userId: 2,
        id: 5,
        title: "El Carpincho del Dia 23",
        body: "Amigo mio 65",
      },
    ];

    cy.intercept("GET","https://jsonplaceholder.typicode.com/posts",samplePosts).as("getPosts");

    cy.visit("https://jsonplaceholder.typicode.com");
    cy.get('body > div > main > table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2) > a').click();

    cy.wait('@getPosts');

  });
});

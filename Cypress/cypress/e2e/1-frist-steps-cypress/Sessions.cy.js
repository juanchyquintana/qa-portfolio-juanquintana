describe("", () => {
  // it('Session not save', () => {
  //     cy.visit('https://the-internet.herokuapp.com/login')
  //     cy.get('#username').type('tomsmith');
  //     cy.get('#password').type('SuperSecretPassword!')
  //     cy.get('form').contains('Login').click();
  //     cy.url().should('contain', '/secure');
  // })

  // it('Session save', () => {
  //     cy.session('Tom', () => {
  //         cy.visit('https://the-internet.herokuapp.com/login')
  //         cy.get('#username').type('tomsmith');
  //         cy.get('#password').type('SuperSecretPassword!')
  //         cy.get('form').contains('Login').click();
  //         cy.url().should('contain', '/secure');

  //         cy.getCookies().should('have.length', 5).then((cookies) => {
  //             expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
  //         })
  //     })
  // })

  // it('Session save', () => {
  //     cy.session('Tom', () => {
  //         cy.visit('https://the-internet.herokuapp.com/login')
  //         cy.get('#username').type('tomsmith');
  //         cy.get('#password').type('SuperSecretPassword!')
  //         cy.get('form').contains('Login').click();
  //         cy.url().should('contain', '/secure');
  //         cy.getCookie('optimizelyPendingLogEvents').should('exist')
  //         cy.getCookie('optimizelyPendingLogEvents').should('not.have.a.property', 'value', '%5B%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Fsecure%26u%3Doeu1763123340146r0.31629251762782007%26wxhr%3Dtrue%26t%3D1763123341193%26f%3D298349752%2C318188263%22%2C%22n%3Dengagement%26g%3D298283957%26u%3Doeu1763123340146r0.31629251762782007%26wxhr%3Dtrue%26t%3D1763123340219%26f%3D298349752%2C318188263%22%2C%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Flogin%26u%3Doeu1763123340146r0.31629251762782007%26wxhr%3Dtrue%26t%3D1763123340148%26f%3D298349752%2C318188263%22%5D')
  //     })
  // })

  //   it("Session save", () => {
  //     cy.session("Tom", () => {
  //       cy.visit("https://the-internet.herokuapp.com/login");
  //       cy.get("#username").type("tomsmith");
  //       cy.get("#password").type("SuperSecretPassword!");
  //       cy.get("form").contains("Login").click();
  //       cy.url().should("contain", "/secure");
  //       cy.getCookies()
  //         .should("have.length", 5)
  //         .then((cookies) => {
  //           expect(cookies[0]).to.have.property(
  //             "name",
  //             "optimizelyPendingLogEvents"
  //           );
  //         });
  //       cy.clearAllCookies();
  //       cy.getCookies().should("have.length", 0);
  //     });
  //   });

  //   it("Session save", () => {
  //     cy.session("Tom", () => {
  //       cy.visit("https://the-internet.herokuapp.com/login");
  //       cy.get("#username").type("tomsmith");
  //       cy.get("#password").type("SuperSecretPassword!");
  //       cy.get("form").contains("Login").click();
  //       cy.url().should("contain", "/secure");
  //       cy.getCookie("optimizelyPendingLogEvents").should("exist");
  //       cy.getCookie("optimizelyPendingLogEvents").should("not.be.null");
  //       cy.clearCookie('optimizelyPendingLogEvents')
  //       cy.getCookie("optimizelyPendingLogEvents").should("not.exist");
  //     });
  //   });

  it("Session save", () => {
    cy.session("Tom", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("form").contains("Login").click();
      cy.url().should("contain", "/secure");
      cy.getCookie('CookieLoca').should('not.exist')
      cy.setCookie('CookieLoca', 'Loquita')
      cy.getCookie("CookieLoca").should('have.property', 'value', 'Loquita')
    });
  });
});

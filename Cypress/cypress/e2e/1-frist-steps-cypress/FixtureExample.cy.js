describe("Example with Fixtures", () => {
    let dataFixture;

    before(function() {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('credentials').then((testData) => {
            dataFixture = testData;
        })
    })

    it('Session successfully', function() {
      cy.get('#username').type(dataFixture.username);
      cy.get('#password').type(dataFixture.password)
      cy.get('form').contains('Login').click();
      cy.url().should('contain', '/secure');
  })

  
})
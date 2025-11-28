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

// Pet Store Commands
Cypress.Commands.add("searchPet", (pets) => {
  cy.get("#SearchContent form")
    .find("input[name='keyword']")
    .should("be.visible")
    .should("have.prop", "tagName", "INPUT")
    .should("have.value", "")
    .type(pets);

  cy.get("#SearchContent form")
    .find("input[name='searchProducts']")
    .should("be.visible")
    .should("have.prop", "tagName", "INPUT")
    .should("have.value", "Search")
    .click();
});

Cypress.Commands.add("checkConsistencyInfo", (alias, rowIndex) => {
  cy.get(alias).then((value) => {
    const expected = value.trim();

    cy.get("tbody tr")
      .eq(rowIndex)
      .invoke("text")
      .then((rawText) => {
        const normalized = rawText.replace(/\s+/g, " ").trim();
        expect(normalized).to.include(expected);
      });
  });
});

// Demo Web Shops Commands
Cypress.Commands.add("searchProducts", (product) => {
  // Get search input and button
  cy.get("#small-searchterms")
    .should("be.visible")
    .should("have.prop", "type", "text")
    .should("have.value", "Search store")
    .type(product);

  cy.get("input.button-1.search-box-button")
    .should("be.visible")
    .should("have.prop", "type", "submit")
    .should("have.value", "Search")
    .click();
});

Cypress.Commands.add("menuCategoryProduct", (category) => {
  cy.xpath(`//ul[@class='top-menu']//a[normalize-space()='${category}']`)
    .should("be.visible")
    .should("have.prop", "tagName", "A")
    .should("contains.text", category)
    .click();
});

Cypress.Commands.add("checkNotificationVisibility", () => {
  cy.get("#bar-notification")
    .should("be.visible")
    .should("contain.text", "The product has been added to your shopping cart");

  cy.wait(5000);

  cy.get("#bar-notification").should("not.be.visible");
});

Cypress.Commands.add("calculateSubTotalCart", () => {
  let expectedSubtotal = 0;

  cy.get("table.cart tr.cart-item-row")
    .should("be.visible")
    .each((row) => {
      cy.wrap(row);
      const unitPriceText = row.find(".product-unit-price").text();
      const unitPrice = parseFloat(unitPriceText.replace(/[^0-9.]/g, ""));

      const qtyText = row.find("input.qty-input").val();
      const quantity = parseInt(qtyText, 10);

      expectedSubtotal += unitPrice * quantity;
    })
    .then(() => {
      cy.contains("td.cart-total-left", "Sub-Total:")
        .next("td.cart-total-right")
        .find("span.product-price")
        .invoke("text")
        .then((subTotalText) => {
          const subTotalUI = parseFloat(subTotalText.replace(/[^0-9.]/g, ""));
          expect(subTotalUI).to.eq(expectedSubtotal);
        });
    });
});

Cypress.Commands.add("loginDWS", (email, password) => {
  cy.xpath(`//a[normalize-space()='Log in']`)
    .should("be.visible")
    .should("have.prop", "tagName", "A")
    .should("contain.text", "Log in")
    .click();

  cy.get("div.title strong")
    .should("be.visible")
    .should("contain.text", "Returning Customer");

  cy.get("label[for='Email']")
    .should("be.visible")
    .should("have.text", "Email:");

  cy.get("#Email")
    .should("be.visible")
    .should("have.value", "")
    .should("have.class", "email")
    .should("have.attr", "autofocus", "autofocus")
    .should("have.attr", "name", "Email")
    .should("have.prop", "tagName", "INPUT")
    .should("have.prop", "type", "text")
    .type(email);

  cy.get("label[for='Password']")
    .should("be.visible")
    .should("have.text", "Password:");

  cy.get("#Password")
    .should("be.visible")
    .should("have.value", "")
    .should("have.class", "password")
    .should("have.attr", "name", "Password")
    .should("have.prop", "tagName", "INPUT")
    .should("have.prop", "type", "password")
    .type(password);

  cy.get("#RememberMe")
    .should("be.visible")
    .should("have.prop", "tagName", "INPUT")
    .should("have.value", "true")
    .check();

  cy.get("input[value='Log in']")
    .should("be.visible")
    .should("have.prop", "tagName", "INPUT")
    .should("have.prop", "type", "submit")
    .should("have.value", "Log in")
    .click();
});

Cypress.Commands.add("goToPaymentStepDWS", (email, password) => {
  // Login
  cy.xpath(`//a[normalize-space()='Log in']`).click();
  cy.loginDWS(email, password);

  // Add Product
  cy.menuCategoryProduct("Computers");
  cy.xpath("(//div[@class='sub-category-item'])[2]").click();
  cy.get("input[value='Add to cart']").click();

  // Go to Cart and acept terms
  cy.get("#topcartlink a.ico-cart").click();
  cy.get("#termsofservice").check();
  cy.get("#checkout").click();

  cy.get("body").then((body) => {
    const hasNewAddressFormVisible =
      body.find("#BillingNewAddress_Company:visible").length > 0;

    if (hasNewAddressFormVisible) {
      cy.get("#BillingNewAddress_Company").type("Freelance Company");
      cy.get("#BillingNewAddress_CountryId").select("3"); // Argentina
      cy.get("#BillingNewAddress_City").type("Tucuman");
      cy.get("#BillingNewAddress_Address1").type("Calle 1234");
      cy.get("#BillingNewAddress_ZipPostalCode").type("4000");
      cy.get("#BillingNewAddress_PhoneNumber").type("123456789");
    } else {
      cy.get("#billing-address-select").should("exist");
    }
  });

  cy.get("#billing-buttons-container input.button-1").click();

  // Shipping address
  cy.get("input[onclick='Shipping.save()']").click();

  // Shipping method
  cy.get("#shippingoption_1").check();
  cy.get("input.button-1.shipping-method-next-step-button").click();

  // Payment method (Check / Money Order)
  cy.get("#paymentmethod_1").check();
  cy.get("input.button-1.payment-method-next-step-button").click();

  cy.get("input[class='button-1 payment-info-next-step-button']").click();
});

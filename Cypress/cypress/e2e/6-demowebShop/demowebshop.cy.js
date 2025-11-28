describe("Demo Web Shop (Tricentis) — Searchs, filters and checkout (Senior Level)", () => {
  const title = "Demo Web Shop";

  beforeEach(() => {
    cy.visit("http://demowebshop.tricentis.com");
  });

  it("TC-01 - Search and filters", () => {
    cy.title().should("eq", title);

    // Get search input and button
    cy.searchProducts("computer");

    cy.title().should("eq", title + ". Search");

    cy.get("div.basic-search div.inputs.reversed")
      .should("be.visible")
      .within(() => {
        cy.get("label")
          .should("be.visible")
          .should("contain.text", "Advanced search");

        cy.get("input[type='checkbox'][id='As']")
          .should("be.visible")
          .should("have.attr", "type", "checkbox")
          .check();
      });

    cy.get("div[class='search-input'] form")
      .should("be.visible")
      .within(() => {
        cy.get("label[for='Cid']")
          .should("be.visible")
          .should("contain.text", "Category:");

        cy.get("#Cid")
          .should("be.visible")
          .select("2")
          .should("have.value", "2")
          .find("option:selected")
          .should("have.text", "Computers");
      });

    cy.xpath("(//div[@class='inputs reversed'])[2]")
      .should("be.visible")
      .within(() => {
        cy.get("label")
          .should("be.visible")
          .should("contain.text", "Automatically search sub categories");

        cy.get("input[type='checkbox'][id='Isc']")
          .should("be.visible")
          .should("have.attr", "type", "checkbox")
          .check();
      });

    cy.get("span.price-range")
      .prev("label")
      .contains("label", "Price range:")
      .should("be.visible");

    const minPrice = 750;
    const maxPrice = 1150;

    cy.get(".price-range")
      .should("be.visible")
      .should("contain.text", "From")
      .should("contain.text", "to")
      .within(() => {
        cy.get("#Pf")
          .should("be.visible")
          .should("have.id", "Pf")
          .should("have.attr", "class", "price-from")
          .should("have.prop", "name", "Pf")
          .should("have.prop", "type", "text")
          .should("have.value", "")
          .type(minPrice);

        cy.get("#Pt")
          .should("be.visible")
          .should("have.id", "Pt")
          .should("have.attr", "class", "price-to")
          .should("have.prop", "name", "Pt")
          .should("have.prop", "type", "text")
          .should("have.value", "")
          .type(maxPrice);
      });

    cy.get("div.buttons input.button-1.search-button")
      .should("be.visible")
      .should("have.prop", "type", "submit")
      .should("have.value", "Search")
      .click();

    cy.get(".item-box").then((items) => {
      if (items.length === 0) {
        cy.contains(
          "No products were found that matched your criteria."
        ).should("be.visible");
      } else {
        cy.wrap(items).each((item) => {
          cy.wrap(item)
            .find(".product-title")
            .invoke("text")
            .should("match", /computer/i);

          cy.wrap(item)
            .find(".prices")
            .invoke("text")
            .then((text) => {
              const price = parseFloat(text.replace(/[^0-9.]/g, ""));
              expect(price).to.be.gte(minPrice);
              expect(price).to.be.lte(maxPrice);
            });
        });
      }
    });
  });

  it("TC-02 - Cart Multi-Products", () => {
    cy.title().should("eq", title);

    // Add First product to cart = Book
    cy.menuCategoryProduct("Books");

    cy.xpath("(//input[@value='Add to cart'])[1]")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.checkNotificationVisibility(); // Validate success notificacion message

    // Add Second product to cart = Computer
    cy.menuCategoryProduct("Computers");
    cy.xpath("(//div[@class='sub-category-item'])[2]")
      .should("be.visible")
      .click();

    cy.get("input[value='Add to cart']")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.checkNotificationVisibility(); // Validate success notificacion message

    cy.menuCategoryProduct("Gift Cards");
    cy.xpath("(//input[@value='Add to cart'])[1]")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.get("#giftcard_1_RecipientName")
      .should("be.visible")
      .should("have.value", "")
      .type("Recipient Test");
    cy.get("#giftcard_1_RecipientEmail")
      .should("be.visible")
      .should("have.value", "")
      .type("recipient@test.com");

    cy.get("#giftcard_1_SenderName")
      .should("be.visible")
      .should("have.value", "")
      .type("Rocco");
    cy.get("#giftcard_1_SenderEmail")
      .should("be.visible")
      .should("have.value", "")
      .type("rocco@test.com");

    cy.get("#add-to-cart-button-1")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.checkNotificationVisibility(); // Validate success notificacion message

    cy.get("#topcartlink")
      .should("be.visible")
      .find("a.ico-cart")
      .should("contain.text", "Shopping cart")
      .click();

    cy.calculateSubTotalCart().then((firstSubtotal) => {
      cy.get("tr.cart-item-row")
        .eq(0)
        .find("input.qty-input")
        .clear()
        .type("1");
      cy.get("tr.cart-item-row")
        .eq(1)
        .find("input.qty-input")
        .clear()
        .type("2");
      cy.get("tr.cart-item-row")
        .eq(2)
        .find("input.qty-input")
        .clear()
        .type("3");

      cy.contains("input", "Update shopping cart").should("be.visible").click();

      cy.calculateSubTotalCart().then((secondSubtotal) => {
        expect(secondSubtotal).to.not.eq(firstSubtotal);
      });
    });
  });

  it.skip("TC-03 - Valid Coupon", () => {
    /**
     * TC-DWS03 – Cupón válido / Valid Coupon
     * Estado / Status: BLOQUEADO / BLOCKED
     *
     * Motivo / Reason:
     * - La web demo (Demo Web Shop / nopCommerce demo) no provee códigos de cupón válidos.
     * - Aunque la solicitud POST /cart responde con HTTP 200 OK,
     *   la interfaz siempre muestra el mensaje:
     *     “The coupon code you entered couldn't be applied to your order”.
     * - No se visualiza una línea de "Descuento" ni se modifica el total del carrito.
     *
     * - The demo web (Demo Web Shop / nopCommerce demo) does not provide valid coupon codes.
     * - Even if POST /cart returns HTTP 200 OK,
     *   the UI always displays the message:
     *     “The coupon code you entered couldn't be applied to your order”.
     * - No “Discount” row is shown and the total price remains unchanged.
     *
     * Decisión / Decision:
     * - El escenario se automatiza parcialmente:
     *     ✓ Validación del request con intercept (statusCode === 200)
     *     ✓ Verificación del mensaje mostrado en UI
     *     ✓ Confirmación de que el total del carrito no cambia
     *
     * - The scenario is partially automated:
     *     ✓ Request validated using intercept (statusCode === 200)
     *     ✓ UI error message validated
     *     ✓ Cart total confirmed unchanged
     *
     * Resultado / Result:
     * - El escenario exitoso (cupón válido con descuento aplicado)
     *   queda marcado como BLOQUEADO por limitaciones del entorno.
     *
     * - The successful path (valid coupon with discount applied)
     *   is marked as BLOCKED due to environment limitations.
     */

    cy.title().should("eq", title);

    cy.menuCategoryProduct("Computers");
    cy.xpath("(//div[@class='sub-category-item'])[2]")
      .should("be.visible")
      .click();

    cy.get("input[value='Add to cart']")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.menuCategoryProduct("Digital downloads");
    cy.xpath("(//input[@value='Add to cart'])[2]")
      .should("be.visible")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.get("#topcartlink a.ico-cart").click();

    cy.calculateSubTotalCart().then((subtotalBefore) => {
      cy.intercept("POST", "**/cart").as("applyCoupon");

      cy.get("input.discount-coupon-code")
        .should("be.visible")
        .type("FAKE-TEST-10OFF");

      cy.get("input[value='Apply coupon']").should("be.visible").click();

      cy.wait("@applyCoupon").its("response.statusCode").should("eq", 200);

      cy.get("div.message")
        .should("be.visible")
        .should("contain.text", "The coupon was applied ");

      cy.contains("td.cart-total-left", "Discount").should("exist");

      cy.contains("td.cart-total-left", "Total:")
        .next("td.cart-total-right")
        .find(".product-price")
        .invoke("text")
        .then((totalCart) => {
          const total = parseFloat(totalCart.replace(/[^0-9.-]/g, ""));
          const expected = parseFloat(subtotalBefore);
          expect(total).to.eq(expected);
        });
    });
  });

  it("TC-03 - Invalid coupon - Intercept & total unchanged", () => {
    cy.title().should("eq", title);

    cy.menuCategoryProduct("Computers");
    cy.xpath("(//div[@class='sub-category-item'])[2]")
      .should("be.visible")
      .click();

    cy.get("input[value='Add to cart']")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.menuCategoryProduct("Digital downloads");
    cy.xpath("(//input[@value='Add to cart'])[2]")
      .should("be.visible")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.get("#topcartlink a.ico-cart").click();

    cy.calculateSubTotalCart().then((subtotalBefore) => {
      cy.intercept("POST", "**/cart").as("applyCoupon");

      cy.get("input.discount-coupon-code")
        .should("be.visible")
        .type("FAKE-TEST-10OFF");

      cy.get("input[value='Apply coupon']").should("be.visible").click();

      cy.wait("@applyCoupon").its("response.statusCode").should("eq", 200);

      cy.get("div.message")
        .should("be.visible")
        .should(
          "contain.text",
          "The coupon code you entered couldn't be applied to your order"
        );

      cy.contains("td.cart-total-left", "Discount").should("not.exist");

      cy.contains("td.cart-total-left", "Total:")
        .next("td.cart-total-right")
        .find(".product-price")
        .invoke("text")
        .then((totalCart) => {
          const total = parseFloat(totalCart.replace(/[^0-9.-]/g, ""));
          const expected = parseFloat(subtotalBefore);
          expect(total).to.eq(expected);
        });
    });
  });

  it("TC-04 - Checkout as a registered user", () => {
    cy.title().should("eq", title);

    cy.loginDWS("rocco@gmail.com", "password"); // Login with commands

    cy.menuCategoryProduct("Computers");
    cy.xpath("(//div[@class='sub-category-item'])[2]")
      .should("be.visible")
      .click();

    cy.get("input[value='Add to cart']")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "button")
      .should("have.value", "Add to cart")
      .click();

    cy.get("#topcartlink a.ico-cart").click();

    cy.get("#termsofservice")
      .should("be.visible")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "checkbox")
      .should("have.attr", "name", "termsofservice")
      .check();

    cy.get("div.terms-of-service").should(
      "contain.text",
      "I agree with the terms of service and I adhere to them unconditionally"
    );

    cy.get("#checkout")
      .should("be.visible")
      .should("have.value", "checkout")
      .should("have.prop", "tagName", "BUTTON")
      .should("have.prop", "type", "submit")
      .click();

    cy.get("body").then((body) => {
      // ¿El formulario de NUEVA dirección está visible?
      const hasNewAddressFormVisible =
        body.find("#BillingNewAddress_Company:visible").length > 0;

      if (hasNewAddressFormVisible) {
        // Billing Address - Nueva Direccion
        cy.get("label[for='BillingNewAddress_Company']").should(
          "have.text",
          "Company:"
        );
        cy.get("#BillingNewAddress_Company").type("Freelance Company");

        cy.get("label[for='BillingNewAddress_CountryId']").should(
          "have.text",
          "Country:"
        );
        cy.get("#BillingNewAddress_CountryId")
          .should("be.visible")
          .select("3")
          .should("have.value", "3")
          .find("option:selected")
          .should("have.text", "Argentina");

        cy.get("label[for='BillingNewAddress_City']").should(
          "have.text",
          "City:"
        );
        cy.get("#BillingNewAddress_City").type("Tucuman");

        cy.get("label[for='BillingNewAddress_Address1']").should(
          "have.text",
          "Address 1:"
        );
        cy.get("#BillingNewAddress_Address1").type("Calle 1234");

        cy.get("label[for='BillingNewAddress_ZipPostalCode']").should(
          "have.text",
          "Zip / postal code:"
        );
        cy.get("#BillingNewAddress_ZipPostalCode").type("4000");

        cy.get("label[for='BillingNewAddress_PhoneNumber']").should(
          "have.text",
          "Phone number:"
        );
        cy.get("#BillingNewAddress_PhoneNumber").type("123456789");
      } else {
        cy.get("#billing-address-select").should("exist");
      }
    });

    cy.get("#billing-buttons-container input.button-1")
      .should("be.visible")
      .should("have.value", "Continue")
      .should("have.prop", "type", "button")
      .click();

    cy.get("input[onclick='Shipping.save()']")
      .should("be.visible")
      .should("have.value", "Continue")
      .should("have.prop", "type", "button")
      .click();

    cy.get("#shippingoption_1")
      .should("be.visible")
      .should("have.prop", "type", "radio")
      .should("have.attr", "name", "shippingoption")
      .check();

    cy.get("div.method-name label")
      .should("be.visible")
      .should("contain.text", "Next Day Air");

    cy.get("input[class='button-1 shipping-method-next-step-button']")
      .should("be.visible")
      .click();

    cy.get("#paymentmethod_1")
      .should("be.visible")
      .should("have.value", "Payments.CheckMoneyOrder")
      .should("have.prop", "tagName", "INPUT")
      .should("have.prop", "type", "radio")
      .check();

    cy.get("div[class='payment-details'] label[for='paymentmethod_1']")
      .should("be.visible")
      .should("contain.text", "Check / Money Order");

    cy.get("input[class='button-1 payment-method-next-step-button']")
      .should("be.visible")
      .click();

    cy.get("input[class='button-1 payment-info-next-step-button']")
      .should("be.visible")
      .click();

    // Expect
    cy.get("div.order-summary-content").within(() => {
      // Product
      cy.contains("14.1-inch Laptop").should("be.visible");

      // Subtotal
      cy.contains("td.cart-total-left", "Sub-Total:")
        .next("td.cart-total-right")
        .should("contain.text", "1590.0");

      // Shipping
      cy.contains("td.cart-total-left", "Shipping:")
        .next("td.cart-total-right")
        .should("contain.text", "0.00");

      // Payment fee
      cy.contains("td.cart-total-left", "Payment method additional fee:")
        .next("td.cart-total-right")
        .should("contain.text", "5.00");

      // Total
      cy.contains("td.cart-total-left", "Total:")
        .next("td.cart-total-right")
        .should("contain.text", "1590.0");
    });

    cy.get("input[value='Confirm']").should("be.visible").click();

    cy.url().should("include", "/checkout/completed");

    cy.get("div.page-title h1")
      .should("be.visible")
      .should("have.text", "Thank you");

    cy.get("div.section.order-completed .title strong")
      .should("be.visible")
      .should("contain.text", "Your order has been successfully processed!");

    cy.get("ul.details li")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text).to.match(/Order number:\s*\d+/);
      });

    cy.get("ul.details li a")
      .should("be.visible")
      .should("have.text", "Click here for order details.")
      .click();

    cy.url().then((url) => {
      expect(url).to.include("/orderdetails/");
    });
  });

  it.only("TC-05 - Payment Fail (Simulated)", () => {
    /**
     * 🔎 TC-DWS05 – Pago fallido (Simulado) / Payment Fail (Simulated)
     *
     * NOTA - En el entorno Demo Web Shop, cuando se simula un error 4xx en el endpoint de pago,
     *        la aplicación redirige al usuario nuevamente al carrito SIN mostrar un mensaje
     *        explícito de error ni feedback visual en la UI.
     *
     * Este test automatizado verifica que:
     *  - No se genere número de orden.
     *  - El usuario no llegue a la pantalla de confirmación ("Thank you").
     *  - El carrito permanezca con los productos cargados para reintentar el pago.
     *
     * La validación de mensaje de error NO es posible porque este comportamiento
     * NO está implementado en esta aplicación demo.
     *
     * ----
     *
     * NOTE - In the Demo Web Shop environment, when simulating a 4xx error on the payment endpoint,
     *        the application redirects the user back to the shopping cart WITHOUT displaying any
     *        clear error message or visual feedback in the UI.
     *
     * This automated test verifies that:
     *  - No order number is generated.
     *  - The user does not reach the confirmation page ("Thank you").
     *  - The cart remains available with products to retry payment.
     *
     * Error message assertion is NOT included, because such behavior is NOT implemented
     * in this demo application.
     */

    cy.title().should("eq", title);

    cy.goToPaymentStepDWS("rocco@gmail.com", "password");

    // Intercept to failed
    cy.intercept("POST", "**/checkout/**", {
      statusCode: 422,
      body: {
        error: "Payment Failed",
        message: "Your payment could not be processed.",
      },
    }).as("paymentFailed");

    // Send Payment
    cy.get("input[value='Confirm']").should("be.visible").click();

    cy.wait("@paymentFailed");

    cy.url().should("not.include", "/checkout/completed");
    cy.url().should("include", "/cart");

    cy.get("div.page-title h1").should("not.contain.text", "Thank you");
    cy.contains("Order number:").should("not.exist");

    cy.get("table.cart").within(() => {
      cy.contains("14.1-inch Laptop").should("be.visible");
      cy.contains("Qty").should("be.visible");
      cy.contains("Total").should("be.visible");
    });
  });
});

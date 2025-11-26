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
        .should("contain.text", "The coupon code you entered couldn't be applied to your order");

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
});

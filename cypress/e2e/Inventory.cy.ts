import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import CartPage from "../support/pages/CartPage";

describe("Inventory Functionality", () => {

  beforeEach(() => {

    LoginPage.visit();

    cy.fixture("users").then((users) => {

      LoginPage.login(
        users.standard.username,
        users.standard.password
      );

    });

  });

  it("Verification on Inventory page", () => {

    cy.get(".inventory_item")
      .should("have.length", 6);
    InventoryPage.verifyUrl();
    InventoryPage.verifyPageTitle();

  });

  it('should add a specific product to cart', () => {
    InventoryPage.addProductToCart("Sauce Labs Backpack");

    InventoryPage.verifyCartCount(1);

    InventoryPage.openCart();

    CartPage.verifyProductExists("Sauce Labs Backpack");
  })

});
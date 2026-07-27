import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";

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
    InventoryPage.verifyurl();
    InventoryPage.verifypagetitle();

  });

  it("Print all product name with values", ()=>{
    InventoryPage.productsNamesValues();
  })

});
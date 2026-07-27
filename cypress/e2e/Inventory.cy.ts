import LoginPage from "../support/pages/LoginPage";

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

  it("Should display six products", () => {

    cy.get(".inventory_item")
      .should("have.length", 6);

  });

});
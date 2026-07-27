import LoginPage from "../support/pages/LoginPage";

describe("Login Functionality", () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it("Should login successfully with valid credentials", () => {

    cy.fixture("users").then((users) => {

      LoginPage.login(
        users.standard.username,
        users.standard.password
      );

      cy.url().should("include", "/inventory");
      cy.get(".title").should("have.text", "Products");

    });

  });

  it("Should display an error for a locked out user", () => {

    cy.fixture("users").then((users) => {

      LoginPage.login(
        users.locked.username,
        users.locked.password
      );

      LoginPage.getErrorMessage()
        .should("contain.text", "Sorry, this user has been locked out.");

    });

  });

  it("Should display an error for invalid credentials", () => {

    LoginPage.login(
      "invalid_user",
      "invalid_password"
    );

    LoginPage.getErrorMessage()
      .should("contain.text", "Username and password do not match");

  });

});
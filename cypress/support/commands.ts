// ***********************************************
// Custom Commands for Sauce Demo Framework
// ***********************************************

Cypress.Commands.add("getByTest", (selector: string) => {
  return cy.get(`[data-test="${selector}"]`);
});

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.getByTest("username").clear().type(username);
  cy.getByTest("password").clear().type(password);
  cy.getByTest("login-button").click();
});
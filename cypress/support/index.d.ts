declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-test attribute.
     * @example cy.getByTest('username')
     */
    getByTest(selector: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to login
     * @example cy.login('standard_user', 'secret_sauce')
     */
    login(username: string, password: string): Chainable<void>;

    addProductToCart(productName: string): Chainable<void>;
  }
}
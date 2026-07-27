class CartPage {
  // ========== Selectors ==========
  checkoutButton = '[data-test="checkout"]';
  continueShoppingButton = '[data-test="continue-shopping"]';

  // ========== Actions ==========
  getCartItems() {
    return cy.get(".cart_item");
  }

  removeItem(productName: string) {
    cy.contains(".cart_item", productName)
      .find("button")
      .click();
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }

  clickContinueShopping() {
    cy.get(this.continueShoppingButton).click();
  }
}

export default new CartPage();
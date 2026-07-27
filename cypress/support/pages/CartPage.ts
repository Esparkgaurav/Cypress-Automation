class CartPage {

  // ========== Selectors ==========
  checkoutButton = '[data-test="checkout"]';
  continueShoppingButton = '[data-test="continue-shopping"]';
  cartItem = ".cart_item";
  productName = ".inventory_item_name";

  // ========== Actions ==========

  getCartItems() {
    return cy.get(this.cartItem);
  }

  removeItem(productName: string) {
    cy.contains(this.cartItem, productName)
      .find("button")
      .click();
  }

  checkout() {
    cy.get(this.checkoutButton).click();
  }

  continueShopping() {
    cy.get(this.continueShoppingButton).click();
  }

  verifyProductExists(productName: string) {

    cy.get(this.productName)
      .should("contain.text", productName);

  }

}

export default new CartPage();
class InventoryPage {
  // ========== Selectors ==========
  cartIcon = '[data-test="shopping-cart-link"]';
  cartBadge = '[data-test="shopping-cart-badge"]';
  sortDropdown = '[data-test="product_sort_container"]';

  // ========== Actions ==========
  addToCart(productName: string) {
    cy.contains(".inventory_item", productName)
      .find("button")
      .click();
  }

  removeFromCart(productName: string) {
    cy.contains(".inventory_item", productName)
      .find("button")
      .click();
  }

  goToCart() {
    cy.get(this.cartIcon).click();
  }

  getCartCount() {
    return cy.get(this.cartBadge);
  }

  sortProducts(option: "az" | "za" | "lohi" | "hilo") {
    cy.get(this.sortDropdown).select(option);
  }

  verifyurl(){
    cy.url().should("include","inventory");
  }

  verifypagetitle(){
    cy.get(".title").should("have.text","Products");
  }

}

export default new InventoryPage();
class InventoryPage {
  // ========== Selectors ==========
  cartIcon = '[data-test="shopping-cart-link"]';
  cartBadge = '[data-test="shopping-cart-badge"]';
  sortDropdown = '[data-test="product_sort_container"]';
  pageTitle = ".title";
  allitems = ".inventory_item";
  allitemasname = ".inventory_item_name";
  allitemsprice = ".inventory_item_price";

  // ========== Actions ==========
  verifyUrl() {
    cy.url().should("include", "inventory");
}

verifyPageTitle() {
    cy.get(this.pageTitle)
      .should("have.text", "Products");
}

  productsNamesValues(){
    cy.get(this.allitems).each(($el) => {
      const name = $el.find(this.allitemasname).text();
      const price = $el.find(this.allitemsprice).text();
      cy.log(`${name} - ${price}`);
    })
  }

  addProductToCart(productName: string) {
    cy.get(".inventory_item")
      .contains(".inventory_item_name", productName)
      .closest(".inventory_item")
      .find("button")
      .click();
  }

  openCart() {
    cy.get(this.cartIcon).click();
}

verifyCartCount(expectedCount: number) {
    cy.get(this.cartBadge)
      .should("have.text", expectedCount.toString());
}
}

export default new InventoryPage();
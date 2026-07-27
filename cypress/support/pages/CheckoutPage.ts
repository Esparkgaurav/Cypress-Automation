class CheckoutPage {
  // ========== Selectors ==========
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  completeHeader = '[data-test="complete-header"]';
  cancelButton = '[data-test="cancel"]';

  // ========== Actions ==========
  fillInformation(firstName: string, lastName: string, postalCode: string) {
    cy.get(this.firstNameInput).clear().type(firstName);
    cy.get(this.lastNameInput).clear().type(lastName);
    cy.get(this.postalCodeInput).clear().type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  clickCancel() {
    cy.get(this.cancelButton).click();
  }

  getSuccessMessage() {
    return cy.get(this.completeHeader);
  }
}

export default new CheckoutPage();
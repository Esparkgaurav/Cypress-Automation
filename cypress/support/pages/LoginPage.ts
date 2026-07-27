class LoginPage {
  // ========== Selectors ==========
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  // ========== Actions ==========
  visit() {
    cy.visit("/");
  }

  enterUsername(username: string) {
    cy.get(this.usernameInput).clear().type(username);
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  // Combined action
  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
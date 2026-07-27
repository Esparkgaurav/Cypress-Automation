import { defineConfig } from "cypress";

export default defineConfig({

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",

    viewportWidth: 1280,
    viewportHeight: 720,

    defaultCommandTimeout: 10000,

    chromeWebSecurity: false,

    video: true,

    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    }

  }

});
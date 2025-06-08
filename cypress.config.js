
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", 
    supportFile: "cypress/support/e2e.js",               
    setupNodeEvents(on, config) {
      require('dotenv').config();
    }
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
});

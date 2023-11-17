const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const dotenv = require("dotenv");
dotenv.config();

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    env:{
      INSTAGRAM_USER_ID : process.env.INSTAGRAM_USER_ID,
      INSTAGRAM_USER_PASS: process.env.INSTAGRAM_USER_PASS,
      AMAZON_USER_USER : process.env.AMAZON_USER_USER,
      AMAZON_USER_PASS: process.env.AMAZON_USER_PASS,
    },
    specPattern: "**/*/*.feature",
    setupNodeEvents,
  },
  "cucumberautocomplete.steps": [
    "cypress/*/*.feature",
    "cypress/*/**/*/*.js",
    "cypress/support/step_definitions/*.js",
    "cypress/*/*/*/*.js",
    "cypress/**/stepDefinitions/*.ts"
  ],
  "cucumberautocomplete.strictGherkinCompletion": true

});

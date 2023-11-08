
const {Given , When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");


import Instagram from "../pom/instagram"

const insta = new Instagram()

Given("I am visit the instagram Page", () => {
  cy.visit("https://instagram.com/");
});

When("click login button", () => {
  cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click()
});

When("I am Enter the valid userName and password", () => {
  cy.wait(10000)
  cy.log("in login page")
  console.log("in login page")
 insta.login()
});

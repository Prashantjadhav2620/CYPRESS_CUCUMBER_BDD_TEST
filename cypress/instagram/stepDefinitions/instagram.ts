import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Instagram from "../pom/Instagram";

const insta: Instagram = new Instagram();

Given("I am visit the instagram Page", () => {
  cy.visit("https://instagram.com/");
});

When("click login button", () => {
  cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click();
});

When("I am Enter the valid userName and password", () => {
  cy.wait(10000);
  cy.log("in login page");
  console.log("in login page");
  insta.login();
});
When("I validate login page", () => {
  cy.wait(10000);
  insta.validateLoginPage();
});
When("I am go to profile page and validate profile page", () => {
  cy.wait(10000);
  insta.clickProfile();
  cy.wait(20000);
  insta.validateProfile();
});

When("I am go to home page and validate profile page", () => {
  cy.wait(20000);
  insta.navigateToHomePage();
});

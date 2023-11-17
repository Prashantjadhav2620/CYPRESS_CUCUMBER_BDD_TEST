
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am visit the Amazon Page", () => {
  cy.visit("https://amozon.com");
});

Then("click sign button", () => {
  cy.get('#nav-link-accountList-nav-line-1').click();
  cy.wait(2000);
});

When("I am Enter the valid userName {string}", (username: string) => {
  cy.get('input[type="email"]').clear().type(Cypress.env(username));
});

Then("I am Click the Login button", () => {
  cy.get('input[type="submit"]').click();
});

Then("I am Click the Sign button", () => {
  cy.get('input[id="signInSubmit"]').click();
  cy.wait(10000);
});

Then("I am Enter the valid password {string}", (pass: any) => {
  cy.get('input[type="password"]').click().type(Cypress.env(pass));
});

Then("I am search the {string} in SearchBox", (Item: any) => {
  cy.wait(5000);
  cy.get('[name="field-keywords"]').click().type(`${Item}{enter}`);
});

Then("I am Click the cart", () => {
  cy.wait(5000);
  cy.get('[id="nav-cart"]').click();
});

Then("I am choose the product and delete it", () => {
  cy.get('[data-action="delete"][value="Delete"]').eq(0).click();
});

Then("I choose a random item from the search results", () => {
  cy.get('[data-asin="B0CHNSDSG6"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').eq(0).click()
  // cy.get('[data-component-type="s-search-result"]').then(($results) => {
  //   // const randomIndex = Math.floor(Math.random() * $results.length);
  //   const randomIndex = Math.floor(Math.random() * 2);
  //   cy.wait(1000);
  //   cy.wrap($results[randomIndex]).click();
  //   cy.wait(4000);
  // });
});

Then("selected Item Add to Cart", () => {
  cy.wait(5000);
  // cy.get(`div [data-feature-name="exports_desktop_undeliverable_buybox"] span.a-declarative a.a-link-normal`).click()
  cy.get('[name="submit.add-to-cart"]').click();
});

Then("selected Item Add to purchase", () => {
  cy.wait(10000);
  cy.get('input[name="submit.buy-now"]').click();
});

Then("I shuld be Choose the Address", () => {
  cy.get('[data-testid="Address_selectShipToThisAddress"]').click();
});

Then("I validate msg", () => {
  cy.get('[data-csa-c-content-id="NATC_SMART_WAGON_CONF_MSG_SUCCESS_CONTENT"]').should('include.text', 'Added to Cart');
});

Then("I should be Validate the Purchase order page", () => {
  cy.get('[data-cel-widget="header"]').should('include.text', 'Checkout');
  cy.get('h3.a-color-state').should('include.text', 'Choose a shipping address');
});

Then("Select the Payment method", () => {
  cy.get('[data-pmts-component-id="pp-6y2mA9-73"]').click();
});

Then("click Use this payment method", () => {
  cy.get('span.a-button-primary [name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]').click();
  cy.log("hello");
});

Then("click Use this payment method", () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen');
  });
});

Then("select the deliver to", () => {
  cy.get('[id="nav-global-location-popover-link"]').click();
  cy.get('[class="a-popover-wrapper"]').contains('Choose your location');
  cy.get('[id="GLUXAddressList"] span.a-button-inner').contains('Pune').click({ force: true });
  cy.get('button[name="glowDoneButton"]').click();
});

Given("I am choose the country", () => {
  cy.wait(1000);
  cy.get('a[aria-label="Choose a country/region for shopping."]').click();
  cy.get('h3.a-spacing-extra-large').should('include.text', 'Website (Country/Region)');
  cy.get('span[id="icp-dropdown"]').first().click();
  cy.get('ul[role="listbox"]').scrollIntoView().contains('India').click({ force: true });
  cy.wait(4000);
  cy.window().then((win) => {
    cy.get('#icp-save-button span.a-button-inner').click();
  });
});


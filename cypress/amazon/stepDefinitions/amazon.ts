
const {Given , When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given("I am visit the Amazon Page", () => {
  cy.visit("https://amozon.com/");
});

Then("click sign button",()=>{
  cy.get('#nav-link-accountList-nav-line-1').click()
  cy.wait(2000)
})

When("I am Enter the valid userName {string}", (username) => {
  cy.get('input[type="email"]').click().type(username)
});

Then("I am Click the Login button", () => {
  cy.get('input[type="submit"]').click()
});

Then("I am Click the Sign button", () => {
  cy.get('input[id="signInSubmit"]').click()
  cy.wait(10000)
});

Then("I am Enter the valid password {string}", (pass) => {
  cy.get('input[type="password"]').click().type(pass)
});

Then("I am search the {string} in SearchBox", (Item) => {
  cy.wait(5000);
  cy.get('[name="field-keywords"]').click().type(`${Item}{enter}`);
  // cy.get('input[placeholder="Search Amazon"]').type(`${Item}{enter}`);
  // cy.get('input[type="text"]').type(`${Item}{enter}`);
});

Then("I am Click the cart", () => {
  cy.wait(5000);
  cy.get('[id="nav-cart"]').click();
});

Then("I am choose the product and delete it", () => {
  cy.get('[data-action="delete"][value="Delete"]').eq(0).click();
});


Then("I choose a random item from the search results", () => {
  cy.get('[data-component-type="s-search-result"]').then(($results) => {
  // cy.get('div.s-title-instructions-style').then(($results) => {
    const randomIndex = Math.floor(Math.random() * $results.length);
    cy.wait(1000)
    cy.wrap($results[randomIndex]).click();
    cy.wait(4000)
  });
});

Then("selected Item Add to Cart",()=>{
  cy.wait(5000)
  cy.get('[name="submit.add-to-cart"]').click()
})

Then("selected Item Add to purchase",()=>{
  cy.wait(10000)
  cy.get('input[name="submit.buy-now"]').click()
})
Then("I shuld be Choose the Address",()=>{
  cy.get('[data-testid="Address_selectShipToThisAddress"]').click()
})

Then("I validate msg", () => {
  cy.get('[data-csa-c-content-id="NATC_SMART_WAGON_CONF_MSG_SUCCESS_CONTENT"]').should('include.text', 'Added to Cart');
});

Then("I should be Validate the Purchase order page", () => {
  cy.get('[data-cel-widget="header"]').should('include.text', 'Checkout');
  cy.get('h3.a-color-state').should('include.text', 'Choose a shipping address');
});

Then("Select the Payment method",()=>{
  cy.get('[data-pmts-component-id="pp-6y2mA9-73"]').click()
})

Then("click Use this payment method",()=>{
  cy.get('span.a-button-primary [name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]').click()
  cy,log("hello")
})


Then("click Use this payment method",()=>{
  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen');
  });

})


Then("select the deliver to", () => {
  cy.get('[id="nav-global-location-popover-link"]').click()
  // cy.get('[class="a-popover-wrapper"]').should('include.text', 'Choose your location');
  cy.get('[class="a-popover-wrapper"]').contains('Choose your location');
  cy.get('[id="GLUXAddressList"] span.a-button-inner').contains('Pune').click({force: true})
  cy.get('button[name="glowDoneButton"]').click()
  // cy.get('[id="GLUXAddressList"] span.a-text-normal').contains('mangoli').click()
  
});
// div[class="a-fixed-left-grid"]


// Given("I am choose the country",()=>{
//   cy.get('a[id="icp-nav-flyout"]').click()
//   cy.get('[class="icp-mkt-change-lnk"]').first().click()
//   cy.get('h3.a-spacing-extra-large').should('include.text', 'Website (Country/Region)');
//   cy.get('span[id="icp-dropdown"]').first().click()
//   cy.get('ul[role="listbox"]').scrollIntoView()
//   .contains('India')
//   .click({ force: true })
//   cy.get('#icp-save-button span.a-button-inner').click()
//  cy.wait(4000)
// })


Given("I am choose the country", () => {
  // Click the link to change the country
  cy.wait(1000)
  cy.get('a[aria-label="Choose a country/region for shopping."]').click();
  // cy.get('[aria-label="Choose a country/region for shopping."]').click();
  // cy.get('[class="icp-mkt-change-lnk"]').first().click();

  // // Ensure the page has loaded the country/region options
  cy.get('h3.a-spacing-extra-large').should('include.text', 'Website (Country/Region)');

  // // Click the dropdown to select a country (e.g., India)
  // // cy.get('span[class="a-button-inner"] span.a-button-text span.a-dropdown-prompt').Secound().click();
  cy.get('span[id="icp-dropdown"]').first().click();
  cy.get('ul[role="listbox"]').scrollIntoView().contains('India').click({ force: true });

  // // Click the "Save Changes" button
  // cy.get('#icp-save-button span.a-button-inner').click();
  
  // // Wait for some time for the changes to take effect (adjust the duration as needed)
  cy.wait(4000);
  // cy.window().then(($window) => {
    //   expect($window.top).not.to.eq($window);
    // });
    cy.window().then((win) => {
      // Interact with elements in the new tab/window
      // For example:
      cy.get('#icp-save-button span.a-button-inner').click();
    // cy.get('#new-tab-element').click();
  });
  // cy.visit('https://www.amazon.in/?ref_=icp_country_from_us');L

  // After making the country selection, you can navigate to a new URL within the same tab
  // For example, navigate to the homepage of the selected country

  // You can continue your test from here on the new page
});

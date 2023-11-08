
const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");

import Login from '../pom/Login'
const login = new Login();
import Pim from '../pom/Pim'
const pim = new Pim();
import EmployeeList from "../pom/EmployeeList";
const employeeList = new EmployeeList();
const dashbordcheckEle1: string = "span.oxd-topbar-header-breadcrumb h6";
const topBarEle: string = "span.oxd-topbar-header-breadcrumb";
const topBarcheckEleText: string = "Dashboard";
const topBaradminEleText: string = "AdminUser Management";
const siderbarEle: string = "a.oxd-main-menu-item span.oxd-text";
const sidebarAdminText: string = "Admin";
const sidebarPIMText: string = "PIM";

Given("I am visit the OrangeHRM Page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.wait(3000);
  cy.log("Test");
});

Then("I should be login OrangeHRM using valid {string} and {string}", (name: string, pass: string) => {
  login.userLogin(name, pass);
});

Then("I should be Validate {string}", (ele: string) => {
  let eletext: string;
  if (ele === "Dashboard") {
    eletext = topBarcheckEleText;
  } else if (ele === "Admin") {
    eletext = topBaradminEleText;
  } else if (ele === "PIM") {
    eletext = sidebarPIMText;
  }
  cy.get(topBarEle).should("have.text", eletext);
});

Then("I should be navigate to the PIM page", () => {
  cy.get(siderbarEle).contains(sidebarPIMText).click();
});

Then("I should be add a new User using {string} and {string} or {string}", (fname: string, mname: string, lname: string) => {
  cy.log("first name ", fname);
  cy.log("middle name ", mname);
  cy.log("last name ", lname);
  pim.addValidite();
  pim.addEmployee(fname, mname, lname);
  // pim.addUserPasswordFun();
});

Then("I should be Validate a new User", () => {
  cy.log("Test");
  cy.wait(4000);
  pim.validateUser();
  employeeList.validateEmployeeList();
});







//
// Then("I should be add a new User for admin",()=>{
//   cy.get('button[type="button"] i.oxd-button-icon').click();
//   cy.get('div.orangehrm-card-container h6.oxd-text').should('have.text','Add User' );
//
//   //add a user
//   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
//   cy.get('.oxd-select-dropdown > :nth-child(2)').click()
//   cy.get('input[placeholder="Type for hints..."]').type('Prashant')
//
// });

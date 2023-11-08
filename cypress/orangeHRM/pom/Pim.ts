//
//
// class Pim {
//     public readonly topBarEle = 'nav.oxd-topbar-body-nav li.oxd-topbar-body-nav-tab';
//     public readonly addEmployeeValidEle = 'div.orangehrm-card-container h6.oxd-text';
//     public readonly toggleBtnEle = 'div.oxd-switch-wrapper';
//     public readonly addEmployeeEleText = 'Add Employee';
//     public readonly employeeListEleText = 'Employee List';
//     public readonly firstNameEle = 'input[placeholder="First Name"]';
//     public readonly middleNameEle = 'input[name="middleName"]';
//     public readonly lastNameEle = 'input[placeholder="Last Name"]';
//     public readonly employeeIdEle = 'div.oxd-grid-2  input.oxd-input';
//     public readonly userNamePassEle = 'div.oxd-input-group input.oxd-input[autocomplete="off"]';
//
//     public addValidite() {
//         cy.get(this.topBarEle).contains(this.addEmployeeEleText).click();
//         cy.get(this.addEmployeeValidEle).should('have.text',this.addEmployeeEleText );
//
//         cy.log("pj")
//
//     }
//     public addEmployee(firstName,middleName,lastName) {
//         cy.get(this.firstNameEle).type(firstName);
//         cy.get(this.middleNameEle).type(middleName);
//         cy.get(this.lastNameEle).type(lastName);
//         // cy.get(this.employeeId).clear().type(`101{enter}`);
//         const randomNumber: number = Math.floor(Math.random() * 900) + 100;
//         globalThis.randomNumber=randomNumber
//         cy.log("globalThis.randomNumber",globalThis.randomNumber)
//         // Generates a random number between 100 and 999
//         // Cypress.env('randomNumber', randomNumber);
//
// // Use the stored random number in Cypress
//         cy.get(this.employeeIdEle)
//             .clear() // Clears the existing text in the input field
//             .type(randomNumber);
//
//         cy.log("globalThis.randomNumber",globalThis.randomNumber)
//
//         cy.get(this.toggleBtnEle).click()
//     }
//     public validateuser() {
//         cy.get(this.topBarEle).contains(this.employeeListEleText).click();
//         cy.log("globalThis.randomNumber",globalThis.elementValue)
//     }
//
//     public addUserPasswordfun(){
//         cy.get(this.userNamePassEle).first().type("aniket123")
//     }
// }
//
// export default Pim;

class Pim {
    public readonly topBarEle: string = 'nav.oxd-topbar-body-nav li.oxd-topbar-body-nav-tab';
    public readonly addEmployeeValidEle: string = 'div.orangehrm-card-container h6.oxd-text';
    public readonly toggleBtnEle: string = 'div.oxd-switch-wrapper';
    public readonly addEmployeeEleText: string = 'Add Employee';
    public readonly employeeListEleText: string = 'Employee List';
    public readonly firstNameEle: string = 'input[placeholder="First Name"]';
    public readonly middleNameEle: string = 'input[name="middleName"]';
    public readonly lastNameEle: string = 'input[placeholder="Last Name"]';
    public readonly employeeIdEle: string = 'div.oxd-grid-2 input.oxd-input';
    public readonly userNamePassEle: string = 'div.oxd-input-group input.oxd-input[autocomplete="off"]';
    public readonly saveBtnEle: string = 'button[type="submit"]';


    public addValidite(): void {
        cy.get(this.topBarEle).contains(this.addEmployeeEleText).click();
        cy.get(this.addEmployeeValidEle).should('have.text', this.addEmployeeEleText);

        cy.log("pj");
    }

    // public addEmployee(firstName: string, middleName: string, lastName: string): void {
    //     cy.get(this.firstNameEle).type(firstName);
    //     cy.get(this.middleNameEle).type(middleName);
    //     cy.get(this.lastNameEle).type(lastName);
    //
    //     const randomNumber: number = Math.floor(Math.random() * 900) + 100;
    //     globalThis.randomNumber = randomNumber;
    //     cy.log("globalThis.randomNumber", globalThis.randomNumber);
    //
    //     cy.get(this.employeeIdEle)
    //         .clear() // Clears the existing text in the input field
    //         .type(`${randomNumber}{enter}`);
    //
    //     cy.log("globalThis.randomNumber", globalThis.randomNumber);
    //
    //     // cy.get(this.toggleBtnEle).click();
    // }
    public addEmployee(firstName: string, middleName: string, lastName: string): void {
        cy.get(this.firstNameEle).type(firstName);
        cy.get(this.middleNameEle).type(middleName);
        cy.get(this.lastNameEle).type(lastName);

        const randomNumber: number = Math.floor(Math.random() * 900) + 100;

        // Store the random number in Cypress environment variables
        Cypress.env('randomNumber', randomNumber);

        cy.log("Cypress.env('randomNumber')", Cypress.env('randomNumber'));

        cy.get(this.employeeIdEle)
            .clear()
            .type(`${randomNumber}{enter}`);

        cy.log("Cypress.env('randomNumber')", Cypress.env('randomNumber'));
    }

    public validateUser(): void {
        cy.get(this.topBarEle).contains(this.employeeListEleText).click();

        // Retrieve the random number from Cypress environment variables

    }


    // public validateUser(): void {
    //     cy.get(this.topBarEle).contains(this.employeeListEleText).click();
    //     cy.log("globalThis.randomNumber==", globalThis.elementValue);
    //     cy.get(this.empIdEle).type(globalThis.elementValue);
    // }

    public addUserPasswordFun(): void {
        cy.get(this.userNamePassEle).eq(0).type("aniket123");
        cy.get(this.userNamePassEle).eq(1).type("Aniket123");
        cy.get(this.userNamePassEle).eq(2).type("Aniket123");
        cy.get(this.saveBtnEle).click()
        cy.get(this.topBarEle).contains(this.employeeListEleText).click();
    }
}

export default Pim;

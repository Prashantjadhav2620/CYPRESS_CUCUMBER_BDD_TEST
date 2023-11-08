class EmployeeList {
    // public readonly validUsernameEle: string = 'div.orangehrm-edit-employee-name h6.oxd-text';
    // public readonly employeeEle: string = 'div.oxd-table-filter-header-title h5.oxd-text';
    public readonly employeeEle: string = 'div.oxd-table-filter-header-title h5.oxd-text';
    public readonly employeeText: string = 'Employee Information';
    public readonly empCardEle: string = 'div.oxd-table-card';
    public readonly empIdEle: string = 'div.oxd-input-group input.oxd-input';
    // public readonly empIdchekEle: string = 'oxd-table-cell';
    public readonly empIdchekEle: string = 'div.oxd-table-cell';

    public validateEmployeeList(): void {
        cy.wait(2000)

        cy.get(this.employeeEle).should('have.text', this.employeeText);
        cy.log('emplooyCheck()');
        // div.oxd-table-filter-header-title h5.oxd-text
        const randomNumber = Cypress.env('randomNumber');

        cy.log("Cypress.env('randomNumber')", randomNumber);
        cy.wait(2000)
        cy.get(this.empIdEle).type(`${randomNumber}{enter}`);
        cy.get(this.empIdchekEle).eq(1).contains(randomNumber)
        // cy.get(this.empIdEle).type(randomNumber.toString());
    }
}

export default EmployeeList;

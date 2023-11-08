class EmplooyList {
    // public readonly validUsernameEle: string = 'div.orangehrm-edit-employee-name h6.oxd-text';
    public readonly employeeEle: string = 'div.oxd-table-filter-header-title h5.oxd-text';
    public readonly employeeText: string = 'Employee Information';

    public emplooyCheck(): void {
        cy.get(this.employeeEle).should('have.text', this.employeeText);
    }
}

export default EmplooyList;

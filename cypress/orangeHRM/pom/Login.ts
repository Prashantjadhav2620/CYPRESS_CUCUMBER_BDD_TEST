class Login {
    public readonly usernameEle: string = "div [name='username']";
    public readonly passwordEle: string = "div [name='password']";
    public readonly submitButtonEle: string = "button[type='submit']";

    public userLogin(username: string, password: string): void {
        cy.get(this.usernameEle).type(username).click();
        cy.get(this.passwordEle).type(password).click();
        cy.get(this.submitButtonEle).click();
    }
}

export default Login
import Actions from "/support/Actions"
const action = new Actions

class Instagram{

public readonly  userEle = `input[name="username"]`
public readonly  userText = `radhe_shyam2620`
public readonly  passEle = `input[name="password"]`
public readonly  passText = `pratiksha`


public readonly login = ():void=> {
    cy.wait(2000)
    // action.clickInputTextInElement(userEle,userText)
    cy.get(this.userEle).type(this.userText)
    
}

}

export default Instagram
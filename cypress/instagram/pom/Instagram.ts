
class Instagram{

public readonly  userEle = `input[name="username"]`
public readonly  userText = `radhe_shyam2620`
public readonly  passEle = `input[name="password"]`
public readonly  passText = `pratiksha`
public readonly  submitBtnEle = `button[type="submit"]`
public readonly  instagramTitleEle = `div svg[aria-label="Instagram"] title`
public readonly  instagramTitleText = `Instagram`
public readonly  profileEle = `div div a[role="link"] img[alt="radhe_shyam2620's profile picture"]`
public readonly  profileTitleEle=`section div a h1`
public readonly  profileTitleText=`radhe_shyam2620`
public readonly  profileSubTitleEle=`section div ul li`
public readonly  postSaveTagTitleEle=`div[role="tablist"] a span`
public readonly  tagTitleEle=`a[href*="/tagged"]`
public readonly  savedTitleEle=`a[href*="/saved"]`
public readonly  postsTitleEle=`a[href="/radhe_shyam2620/"]`
public readonly  sideBarEle=`div svg title`
public readonly  homeEle=`div svg[aria-label="Home"] title`
public readonly  homeText=`Home`
    public readonly login = ():void=> {
        cy.wait(2000)
        cy.get(this.userEle).type(this.userText)
        cy.get(this.passEle).type(this.passText)
        cy.get(this.submitBtnEle).click()
    }

    public  readonly  validateLoginPage = ():void =>{
    cy.get(this.instagramTitleEle).should("contain",this.instagramTitleText);
    }
    public  readonly  clickProfile = ():void =>{
    cy.get(this.profileEle).click();
    }

    public  readonly  validateProfile = ():void =>{
    cy.get(this.profileTitleEle).should("contain",this.profileTitleText);
        const profileSubTitleList =[` posts`,` followers`,` following`]
        for (let i = 0; i < profileSubTitleList.length; i++) {
            cy.get(this.profileSubTitleEle).should("contain", profileSubTitleList[i]);
        }
        cy.log("pj")
        cy.get(this.postsTitleEle).should("contain", 'Posts');
        cy.get(this.tagTitleEle).should("contain", 'Tagged');
        cy.get(this.savedTitleEle).should("contain", 'Saved');

    }

    public  readonly  navigateToHomePage = ():void =>{
        cy.contains(this.homeEle, this.homeText).click();
    }


}

export default Instagram
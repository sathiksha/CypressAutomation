class login{

    setUserName(Username)

    {
        cy.xpath("//input[@placeholder='Username']").type(Username)
    }

    setPassword(password)
    {

        cy.xpath("//input[@placeholder='Password']").type(password)
    }

    ClickLoginButton()
    {
        cy.xpath("//button[@type='submit']").click()
    }

    Verifypage()
    {
        cy.xpath("(//*[text()='Dashboard'])[2]").should('have.text','Dashboard')
    }

}

export default login;
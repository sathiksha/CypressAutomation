class HomePage{

SearchBox(SearchItem)

{
cy.xpath("//input[@placeholder='Search Amazon.in']").type(SearchItem)

}
SearchButton()
{
    cy.xpath("//input[@id='nav-search-submit-button']").click();
}

ProductSelect(){

    cy.xpath("(//div[@class='sg-col-inner'])[4]").click();
}

productPDP()
{
    cy.xpath("//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']").invoke('removeAttr','target').click();
}

AddToCartButton(){

    cy.xpath("//input[@id='add-to-cart-button']").click();
}

GotoCartButton()
{
    cy.xpath("//*[@id='sw-gtc']").click();
}

Qtybutton()
{
    cy.xpath("//*[@id='a-autoid-0-announce']").click();
}

QtySelect()
{
    cy.xpath("//a[@id='quantity_2']").click();
}

proceedbybutton()
{
    cy.xpath("//input[@name='proceedToRetailCheckout']").click();
}

Emailvalue(Emailvalue)
{
    cy.get('#ap_email').type(Emailvalue)
}

ContinueButtonclick()
{
    cy.get('.a-button-inner > #continue').click()
}

PasswordValue(PasswordValue)
{
    cy.get('#ap_password').type(PasswordValue)
}
SignInButton()
{
    cy.get('#signInSubmit').click();
}
}


export default HomePage;
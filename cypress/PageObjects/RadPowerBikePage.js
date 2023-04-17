class RadPowerPage{

SearchIcon()
{
    cy.xpath("(//*[@role='button'])[2]").click();
}

SearchInput(SearchData)
{
    cy.xpath("//*[@name='q']").type(SearchData)
}

SearchButton()
{
    cy.xpath("(//button[@type='submit'])[1]").click();
}

SelectBike()
{
    cy.xpath("//a[contains(text(),'RadWagon 4 Electric Cargo Bike')]").click();
}

BuyNowButton()
{
    cy.get('#addToCartTrigger').click();
}

SelectBikeColor()
{
    cy.xpath("//*[@id='configuration-tab-contents-1']/div[1]/div[1]/div[1]/div/div[2]").click();
}

NextButton()
{
    cy.xpath("//button[text()='Next']").click();
}

BuyNowButton2()
{
    cy.get('#add').click();
}

AddToCartButton()
{
    cy.xpath("//button[text()='Add To Cart']").click();
}

PlusIcon()
{
    cy.xpath("//header/nav[@id='main-nav']/div[2]/div[3]/div[3]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/button[2]").click();
}

BeginCheckOutButton()
{
    cy.xpath("//*[text()='Begin Checkout']").click();
}

AgreeCheckbox()
{
    cy.xpath("//*[@id='agree']").click();
}

CheckoutButton()
{
    cy.xpath("//button[text()='Checkout']").click();
}

EmailValue(EmailData)
{
    cy.get('#checkout_email').type(EmailData);
}
FirstName(FirstNameData)
{
    cy.xpath("//input[@placeholder='First name']").type(FirstNameData);
}

LastName(LastNameData)
{
    cy.xpath("//input[@placeholder='Last name']").type(LastNameData);
}

Address(AddData)
{
    cy.xpath("//input[@placeholder='Address']").type(AddData);
}

AddressSelect()
{
    cy.xpath("//*[text()=' William Street, New York, NY, USA']").click();
}

Phone(PhoneData)
{
    cy.xpath("//input[@placeholder='Phone']").type(PhoneData);
}

ContinueButton()
{

    cy.xpath("//button[@id ='continue_button']")
}

continuePaymentButton()
{
    cy.xpath("//*[text()='Continue to payment']")
}

cardNumber(CardNumberData)
{
    cy.xpath("//input[@placeholder='Card number']").type(CardNumberData);
}

CardName(CardNameData)
{

    cy.xpath("//input[@placeholder='Name on card']").type(CardNameData)
}

ExpireDate(ExpireData)
{
    cy.xpath("//input[@placeholder='Expiration date (MM / YY)']").type(ExpireData)
}

SecurityCode(SecurityData)
{
    cy.xpath("Security code").type(SecurityData)
}

PayNowButton()

{
    cy.xpath("(//*[text()='Pay now'])[1]")
}

}

export default RadPowerPage;
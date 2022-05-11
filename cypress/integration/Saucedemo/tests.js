import loginPage from "../../Functions/loginPage"
import goToWebsite from "../../Functions/goToWebsite"
import loginCredentials from "../../fixtures/loginCredentials.json"
import 'cypress-iframe'
import mainPage from "../../Functions/mainPage"

let username
let password
// import removeProducts from "../../fixtures/removeProducts.json"
// "defaultCommandTimeout": 5000 in caz ca se incarca prea repede pagina si nu se face testul
describe('Saucedemo App', () => {
    before('grab login credentials data', () => {
        username = loginCredentials.username
        password = loginCredentials.password
    })
    it('Visit SwagLabs', () => {
        goToWebsite.visitWebsite()
    })
    it('Login in your account', () => {
        loginPage.loginUsingEmailAndPassword(username,password)
    })
    it('Add Products to cart', () => {
        mainPage.addProductsInCart()
    })
    it('Sort products High to Low Price', () => {
        mainPage.sortProductsHighToLow()
    })
    after('We will log out after all test', () => {
        mainPage.logOutFromApp()
    })
    // it('Remove an item from Cart',()=>{
    //     cy.get(removeProducts.backPack).click()
    //     cy.get(mainPage.shoppingCartBadge).should('include.text', '1')
    // })
})
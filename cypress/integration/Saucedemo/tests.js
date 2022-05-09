import addProducts from "../../Functions/addProducts.js"
import loginPage from "../../Functions/loginPage"
import sortProducts from "../../Functions/sortProducts"
import logOut from "../../Functions/logOut"
import takeData from "../../Functions/takeData"
import goToWebsite from "../../Functions/goToWebsite"
import 'cypress-iframe'


// import removeProducts from "../../fixtures/removeProducts.json"
// "defaultCommandTimeout": 5000 in caz ca se incarca prea repede pagina si nu se face testul
describe('Saucedemo App', () => {
    before('grab login credentials data', () => {
        takeData.readFiles()
    })
    it('Visit SwagLabs', () => {
        goToWebsite.visitWebsite()
    })
    it('Login in your account', () => {
        loginPage.loginUsingEmailAndPassword()
    })
    it('Add Products to cart', () => {
        addProducts.addProductsInCart()
    })
    it('Sort products High to Low Price', () => {
        sortProducts.sortProductsHighToLow()
    })
    after('We will log out after all test', () => {
        logOut.logOutFromApp()
    })
    // it('Remove an item from Cart',()=>{
    //     cy.get(removeProducts.backPack).click()
    //     cy.get(mainPage.shoppingCartBadge).should('include.text', '1')
    // })
})
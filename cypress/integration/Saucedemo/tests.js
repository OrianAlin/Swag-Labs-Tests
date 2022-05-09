import login from "../../fixtures/login.json"
import example from "../../fixtures/example.json"
import mainPage from "../../fixtures/mainPage.json"
import addProducts from "../../fixtures/addProducts.json"
import removeProducts from "../../fixtures/removeProducts.json"
// "defaultCommandTimeout": 5000 in caz ca se incarca prea repede pagina si nu se face testul
describe('Saucedemo App', () => {
    it('Visit SwagLabs', () => {
        cy.visit('/')
        cy.get(login.loginLogo).should('be.visible')
    })
    it('Login in your account', () => {
        cy.get(login.usernameInput).type(example.username)
        cy.get(login.passwordInput).type(example.password)
        cy.get(login.loginButton).click()
        cy.get(mainPage.mainLogo).should('be.visible')
    })
    it('Add Products to cart', ()=>{
        cy.get(addProducts.backpack).click()
        cy.get(mainPage.shoppingCartBadge).should('be.visible')
        cy.get(addProducts.bikeLight).click()
        cy.get(mainPage.shoppingCartBadge).should('include.text', '2')
        // cy.get('.shopping_cart_link').click()
    })
    it('Sort products High to Low Price', ()=>{
        cy.get(mainPage.sortList).select('Price (high to low)')
        cy.get(mainPage.sortList).should('include.text', 'Price (high to low)')
    })
    // it('Remove an item from Cart',()=>{
    //     cy.get(removeProducts.backPack).click()
    //     cy.get(mainPage.shoppingCartBadge).should('include.text', '1')
    // })
})
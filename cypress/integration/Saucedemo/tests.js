import loginPage from "../../Functions/loginPage"
import goToWebsite from "../../Functions/goToWebsite"
import 'cypress-iframe'
import mainPage from "../../Functions/mainPage"
import util from "../../util/encodeData"

let username
let password
// "defaultCommandTimeout": 5000 in caz ca se incarca prea repede pagina si nu se face testul
describe('Saucedemo App', () => {
    before('grab login credentials data', () => {

        cy.fixture('loginCredentials').then((data) => {
            const usrPass = util.decodeData(data.username,data.password)
            username = usrPass.username
            password = usrPass.password

        })
    })

    it('Visit SwagLabs', () => {
        goToWebsite.visitWebsite()

    })
    it('Login in your account', () => {
        cy.log(username)
        loginPage.loginUsingEmailAndPassword(username, password)
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
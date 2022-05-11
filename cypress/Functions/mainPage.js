import mainPage from "../fixtures/mainPage.json";
import addProducts from "../fixtures/addProducts.json"
import login from "../fixtures/login.json";

let addProductsInCart = () =>{
    cy.get(addProducts.backpack).click()
    cy.get(mainPage.shoppingCartBadge).should('be.visible')
    cy.get(addProducts.bikeLight).click()
    cy.get(mainPage.shoppingCartBadge).should('include.text', '2')
}
let sortProductsHighToLow = () =>{
    cy.get(mainPage.sortList).select('Price (high to low)')
    cy.get(mainPage.sortList).should('include.text', 'Price (high to low)')
}
let logOutFromApp = () =>{
    cy.get('#react-burger-menu-btn').click()
    cy.get('.bm-menu').should('be.visible')
    cy.get('#logout_sidebar_link').click()
    cy.get(login.loginLogo).should('be.visible')
}
module.exports = {
    addProductsInCart,
    sortProductsHighToLow,
    logOutFromApp
}
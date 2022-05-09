import mainPage from "../fixtures/mainPage.json";
import addProducts from "../fixtures/addProducts.json"

let addProductsInCart = () =>{
    cy.get(addProducts.backpack).click()
    cy.get(mainPage.shoppingCartBadge).should('be.visible')
    cy.get(addProducts.bikeLight).click()
    cy.get(mainPage.shoppingCartBadge).should('include.text', '2')
}

module.exports = {
    addProductsInCart
}
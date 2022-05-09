import mainPage from "../fixtures/mainPage.json";

let sortProductsHighToLow = () =>{
    cy.get(mainPage.sortList).select('Price (high to low)')
    cy.get(mainPage.sortList).should('include.text', 'Price (high to low)')
    cy.wait(1000)
}

module.exports = {
    sortProductsHighToLow
}
import login from "../fixtures/login.json";

let logOutFromApp = () =>{
    cy.get('#react-burger-menu-btn').click()
    cy.get('.bm-menu').should('be.visible')
    cy.wait(1000)
    cy.get('#logout_sidebar_link').click()
    cy.get(login.loginLogo).should('be.visible')
}

module.exports = {
    logOutFromApp
}
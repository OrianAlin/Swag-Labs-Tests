import login from "../fixtures/login.json";

let visitWebsite = () =>{
    cy.visit('/')
    cy.get(login.loginLogo).should('be.visible')
}

module.exports = {
    visitWebsite
}
const login = require('../fixtures/login.json')
const mainPage = require('../fixtures/mainPage.json')


let loginUsingEmailAndPassword = (username, password) => {

    cy.get(login.usernameInput).type(username)
    cy.get(login.passwordInput).type(password)
    cy.get(login.loginButton).click()
    cy.get(mainPage.mainLogo).should('be.visible')
    cy.log('Login was successful')
}


module.exports = {
    loginUsingEmailAndPassword,

}
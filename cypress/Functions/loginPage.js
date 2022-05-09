const loginCredentials = require('../fixtures/loginCredentials.json')
const login = require('../fixtures/login.json')
const mainPage = require('../fixtures/mainPage.json')
let loginUsingEmailAndPassword = () =>{
    cy.get(login.usernameInput).type(loginCredentials.username)
    cy.get(login.passwordInput).type(loginCredentials.password)
    cy.get(login.loginButton).click()
    cy.get(mainPage.mainLogo).should('be.visible')
}
module.exports = {
    loginUsingEmailAndPassword
}
let readFiles = () =>{
    return cy.readFile('./cypress/fixtures/loginCredentials.json')
}

module.exports = {
    readFiles
}
let readFiles = () =>{
    cy.readFile('C:\\Users\\alin.orian\\IdeaProjects\\Saucedemo\\cypress\\fixtures\\loginCredentials.json').its('username').should('eq', 'standard_user')
    cy.readFile('C:\\Users\\alin.orian\\IdeaProjects\\Saucedemo\\cypress\\fixtures\\loginCredentials.json').its('password').should('eq', 'secret_sauce')
}

module.exports = {
    readFiles
}
const validUsername = 'username';
const validPassword = 'password';


function launchApplication() {
    cy.visit('https://demo.applitools.com/')}
function enterUsername() {
    cy.visit('https://demo.applitools.com/')
    cy.get('#username').type(validUsername)
}
function enterPassword() {
    cy.visit('https://demo.applitools.com/')
    cy.get('#password').type(validPassword)
} 
function clickLoginButton() {
    cy.visit('https://demo.applitools.com/')
    cy.get('#log-in').click();
}
function loginSuccess() {
    cy.get('.top-menu-controls > .logged-user-w > .logged-user-i > .avatar-w > img')
}


describe('assignment3', () => {
    it('websitetest', () => {
       launchApplication
       enterUsername
       enterPassword
       clickLoginButton
       loginSuccess
    });
});








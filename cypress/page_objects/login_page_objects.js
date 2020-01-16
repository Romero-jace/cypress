export class loginPageObjects {
    visit() {
        return cy.visit('https://splice.com/accounts/sign-in')
    }

    usernameField() {
        return cy.get('input[name="username"]')
    }

    passwordField() {
        return cy.get('input[name="password"]')
    }

    loginButton() {
        return cy.get('.s-button').first() // Cypress was picking up the mobile element/attribute as well, sorry I know that's probably not pretty
    }
}
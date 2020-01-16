export class homePageObjects {
    visit() {
        return cy.visit('https://splice.com/')
    }

    logo() {
        return cy.get('[data-qa=navbar-logo]')
    }

    navBarStudio() {
        return cy.get('[data-qa=navbar-studio]')
    }

    navBarCommunity() {
        return cy.get('[data-qa=navbar-community]')
    }

    navBarSounds() {
        return cy.get('[data-qa=navbar-sounds]')
    }

    navBarPlugins() {
        return cy.get('[data-qa=navbar-plugins]')
    }

    navBarBlog() {
        return cy.get('[data-qa=navbar-blog]')
    }

    navBarLogin() {
        return cy.get('[data-qa=navbar-sign-in]')
    }

    navBarSignUp() {
        return cy.get('[data-qa=navbar-sign-up]')
    }
}
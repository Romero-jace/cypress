import { loginPageObjects } from "../../page_objects/login_page_objects";


context ('Login Spec', () => {

    const loginPage = new loginPageObjects();

    beforeEach(() => {
        cy.viewport('macbook-15')
        loginPage.visit();
    });


    it('will log in as user and verify path after login', () => {
        loginPage.usernameField().type('test-splice-jace')
        loginPage.passwordField().type('Splice123$') // would never actually store this raw, just for this purpose
        loginPage.loginButton().click()

        cy.location('pathname').should('eq', '/home')

    });
});
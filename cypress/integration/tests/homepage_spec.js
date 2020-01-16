import { homePageObjects } from "../../page_objects/home_page_objects";

context ('Homepage Tests', () => {

    const homepage = new homePageObjects();

    beforeEach(() => {
        cy.viewport('macbook-15')
        homepage.visit();
    });


    it('will verify correct link location for navbar on homepage', () => {
        homepage.logo()
            .should('be.visible')
            .should('have.attr', 'href', '/')
        homepage.navBarStudio()
            .should('have.attr', 'href', '/features/studio');
        homepage.navBarCommunity()
            .should('have.attr', 'href', '/explore/contests')
        homepage.navBarSounds()
            .should('have.attr', 'href', '/features/sounds');
        homepage.navBarPlugins()
            .should('have.attr', 'href', '/plugins');
        homepage.navBarBlog()
            .should('have.attr', 'href', '/blog');
        homepage.navBarLogin()
            .should('have.attr', 'href', '/accounts/sign-in');
        homepage.navBarSignUp()
            .should('have.attr', 'href', '/accounts/sign-up');

    });
});
describe('setup test', () => {
	it('navigates from the landing page to a secondary page and back', () => {
		cy.visit('/')
		cy.get('a').contains('Home').should('not.exist');

		cy.get('a').contains('About').should('be.visible').click()

		cy.url().should('contain', '/about')
		cy.get('a').contains('About').should('not.exist');

		cy.get('a').contains('Home').should('be.visible').click()

		cy.url().should('not.contain', 'about')
		cy.get('a').contains('About').should('be.visible')
	})
})
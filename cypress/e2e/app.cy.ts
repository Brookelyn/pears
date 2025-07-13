describe("setup test", () => {
  it("allows navigation from the landing page to the consultation flow", () => {
    cy.visit("/");

    cy.get("h1").contains("Welcome").should("be.visible");
    cy.get("p").invoke('text').should('not.be.empty');
    cy.get("a").contains("Start consultation").should("be.visible").as('consultationBtn');

		cy.get('@consultationBtn').click()

		cy.url().should('contain', '/consultation')
  });
});

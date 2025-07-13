describe("setup test", () => {
  it("allows navigation through the consultation flow", () => {
    cy.visit("/");

    cy.get("h1").contains("Welcome").should("be.visible");
    cy.get("p").invoke("text").should("not.be.empty");
    cy.get("a")
      .contains("Start consultation")
      .should("be.visible")
      .as("consultationBtn");

    cy.get("@consultationBtn").click();

    // Step 1
    cy.url().should("contain", "/consultation");
    cy.get("button").contains("Continue").should("not.exist");

    cy.get("button").contains("No").click();

    cy.get("button").contains("Continue").should("exist").click();

    // Step 2
    cy.get("button").contains("Continue").should("not.exist");
    cy.get("button").contains("Yes").click();
    cy.get("button").contains("Continue").should("exist").click();

    // Step 3
    cy.get("button").contains("Continue").should("not.exist");
    cy.get("button").contains("Yes").click();
    cy.get("button").contains("Continue").should("exist").click();

    // Step 4
    cy.get("button").contains("Continue").should("not.exist");
    cy.get("button").contains("Yes").click();
    cy.get("button").contains("Continue").should("exist").click();

    // Step 5
    cy.get("button").contains("Continue").should("not.exist");
    cy.get("button").contains("Yes").click();
    cy.get("button").contains("Continue").should("exist").click();

    // Thank you

    cy.get("h1").contains("Thank you!").should("be.visible");
  });
});

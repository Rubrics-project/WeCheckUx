describe("Test E2E Project", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
    it("test navigation hamburguer menu", () => {
    cy.get(".hamburger-react").click();
    cy.location('pathname').should('include', '/proyectos')
    cy.get('#open-menu').rightclick('bottomLeft', { force: true })
    
    cy.visit("http://localhost:3000/proyectos");
  });
  it("search project element ", () => {
    cy.get("h1").should("contain", "Proyectos").click();
    cy.url().should("include", "http://localhost:3000/proyectos");
  });
});

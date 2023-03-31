describe("Test E2E Project", () => {
  
    it("test navigation hamburguer menu select Project menu", () => {
    cy.visit("http://localhost:3000");
    cy.wait(500);
    cy.get(".hamburger-react").click();
    cy.wait(500);
    cy.get('[href="/proyectos"]').should('contain','Proyectos').click();
       
        
  });
    it("search project element ", () => {
      cy.visit("http://localhost:3000/proyectos");
      cy.get("h1").should("contain", "Proyectos").click();
      cy.url().should("include", "http://localhost:3000/proyectos");
   
    });
});

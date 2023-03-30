import Header from "../../src/components/Header";

describe("testing header to show", () => {
  it("renders correctly", () => {
    cy.mount(<Header />);
    cy.get("img[src='../../src/assets/logo.svg']").should("exist"); 
  });

  it("displays the navigation menu", () => {
    cy.get("[data-testid='header-nav']").should("be.visible");
  });

  it("displays the unlogged user icon by default", () => {
    cy.get("[data-testid='header-unlogged-icon']").should("be.visible");
    cy.get("[data-testid='header-logged-icon']").should("not.exist");
  });

  context("when user is authenticated", () => {
    beforeEach(() => {
      // Log in the user to set isAuthenticated state to true
      cy.login();
    });

    it("displays the logged-in user icon", () => {
      cy.get("[data-testid='header-logged-icon']").should("be.visible");
      cy.get("[data-testid='header-unlogged-icon']").should("not.exist");
    });
  });

});

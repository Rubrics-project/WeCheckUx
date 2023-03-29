import React from "react";
import { mount } from "@cypress/react";
import Header from "../../src/components/Header";

describe('Accordion.cy.jsx', () => {
  it("renders correctly", () => {
    mount(<Header />);
    cy.get("img[src='logo.svg']").should("exist"); // Check for the presence of logo image
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

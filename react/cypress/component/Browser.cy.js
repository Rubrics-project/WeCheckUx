import Browser from "../../src/components/Browser";

describe('Accordion.cy.jsx', () => {
  it("renders correctly", () => {
    cy.mount(<Browser />);
    
    cy.get("form").should("exist");

    cy.get("input").type("example search term").should("have.value", "example search term");

    cy.get("button").should("be.visible").click();

     cy.get("button img").should("have.attr", "src", "/path/to/browserIcon.svg");
  });
});

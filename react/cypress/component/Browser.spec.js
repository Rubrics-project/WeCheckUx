import Browser from "../../src/components/Browser";

describe("Browser component", () => {
  it("renders correctly", () => {
    // Mount the component using the mount command from Cypress React Selector
    cy.mount(<Browser />);
    
    // Check that the form is rendered on the page
    cy.get("form").should("exist");

    // Type a search term into the input field and check that it updates correctly
    cy.get("input").type("example search term").should("have.value", "example search term");

    // Click the browser icon button and check that it is clickable
    cy.get("button").should("be.visible").click();

    // Check that the correct image is rendered inside the button
    cy.get("button img").should("have.attr", "src", "/path/to/browserIcon.svg");
  });
});

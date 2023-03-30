import Browser from "../../src/components/Browser";

describe("Testing Browser", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("renders correctly", () => {

    cy.mount(<Browser/>);
    
    cy.get("form").should("exist");

    // cy.get("input").type("example search term").should("have.value", "example search term");

    // cy.get("button").should("be.visible").click();

    //  cy.get("button img").should("have.attr", "src", "/path/to/browserIcon.svg");
  });
});

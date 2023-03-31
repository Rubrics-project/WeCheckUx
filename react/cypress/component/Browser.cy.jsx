import Browser from "../../src/components/Browser";

describe("Test render browser", () => {
  it("test browser render", () => {
    cy.mount(<Browser />);
    cy.get("form").should("exist");

  });
});

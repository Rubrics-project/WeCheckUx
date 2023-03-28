import Accordion from "../../src/components/Accordion"

describe('Accordion.cy.jsx', () => {
  it('open FQA Accordion', () => {
    cy.mount(<Accordion />);
    cy.get("isToggleOn").click();
  })
})
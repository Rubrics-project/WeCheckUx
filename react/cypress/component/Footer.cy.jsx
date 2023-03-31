import Footer from "../../src/components/Footer"



describe('Test footer go to the github', () => {
  it('test go to github', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    cy.mount(<Footer />);
    cy.wait(500);
    cy.get("a").click();
  })
})


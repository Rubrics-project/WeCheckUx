import Footer from "../../src/components/Footer"


describe('Test footer go to the github', () => {
  it('test go to github', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
    cy.mount(<Footer />);
    cy.get("a").click();
  })
})

//  cy.origin('https://github.com', () => {
//  cy.on('uncaught:exception', (e) => {
//  if (e.message.includes('Things went bad')) {
// // // // we expected this error, so let's ignore it
// // // // and let the test continue
// // // return false
//  }
//  })
//  })
//  cy.visit('https://github.com/Rubrics-project/WeCheckUx')
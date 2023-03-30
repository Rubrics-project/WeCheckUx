import Footer from "../../src/components/Footer"



describe('test footer', () => {
  it('test go to github', () => {
    cy.mount(<Footer />);
    cy.get("a").click();
  })
})

// cy.origin('https://github.com', () => {
// cy.on('uncaught:exception', (e) => {
// if (e.message.includes('Things went bad')) {
// // we expected this error, so let's ignore it
// // and let the test continue
// return false
// }
// })
// })
// cy.visit('https://github.com/Rubrics-project/WeCheckUx')
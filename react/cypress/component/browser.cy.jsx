import Browser from "../../src/components/Browser"

describe('Testing the browser', () => {
    it('Visits the app', () => {
      cy.visit('http://localhost:3000') // replace with your app's URL
      cy.contains(<Browser/>).click()
      cy.get('#my-element').should('be.visible')
    })
  })
  
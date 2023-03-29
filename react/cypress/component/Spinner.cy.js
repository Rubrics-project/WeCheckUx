import Spinner from "../../src/components/Spinner";

describe("Accordion.cy.jsx", () => {
    it('displays a spinner when loading', () => {
        cy.visit('/')
    
        cy.get('div[role="status"]').should('be.visible') 
        cy.get('span.sr-only').should('have.text', 'Loading...') 
      })
    })
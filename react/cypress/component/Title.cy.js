import React from 'react';
import { mount } from '@cypress/react';
import Title from '../../src/components/Title';


describe("Accordion.cy.jsx", () => {
    it('displays the correct title', () => {
      const title = 'Example Title'
      cy.mount(<Title title={title} />) // mount the component with the specified title
  
      cy.get('h1').should('have.text', title) // make sure the title is displayed correctly
    })
  
    it('displays a horizontal line', () => {
      cy.mount(<Title title='Example Title' />) // mount the component
  
      cy.get('hr').should('exist') // make sure the horizontal line exists
    })
  })
  
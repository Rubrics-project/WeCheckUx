import InformationBox from "../../src/components/InformationBox";

describe('Accordion.cy.jsx', () => {
    const text = 'This is some information.';
  
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('renders correctly with text', () => {
      cy.get('div').should('have.class', 'p-3 flex bg-color-blue-light bg-opacity-20 w-full rounded mt-6')
        .find('img').should('have.attr', 'src', 'infoCircle.svg')
        .next().should('have.text', text)
        .and('have.class', 'font-opencustom text-xs text-color-blue-p');
    });
  });
  
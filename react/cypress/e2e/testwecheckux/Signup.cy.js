describe("login", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/registro");
    });
    it("Validate that the user is already registered", () => {
        cy.get('#name').type('Maria Juana');
        cy.get('#surname').type('Vasquez');
        cy.get('#email-address').type('raquelC@gmail.com')
        cy.get('#password').type('12345678');
        cy.get('#password-confrimation').type('12345678');
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.get('.grid > .text-color-blue-p').click();
        cy.get('.mt-8 > :nth-child(3)').should('contain','¡Este email ya existe!');
        cy.get('.mt-8 > :nth-child(4)').should('contain','Por favor acepta el captcha.');
    });
  });
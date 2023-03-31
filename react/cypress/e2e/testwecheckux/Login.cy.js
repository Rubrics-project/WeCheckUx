describe("login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/acceso");
  });
  it("login with incorrect email", () => {
    cy.get("#email-address").type("prueba@gmail.com");
    cy.wait(500);
    cy.get("#password").type("12345678");
    cy.wait(500);
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
    cy.wait(500);
    cy.get(".w-full > .text-color-blue-p").click();
    cy.get('.mt-4 > :nth-child(3)').should('contain','¡Usuario y/o Contraseña incorrectos!');
    cy.get('.mt-4 > :nth-child(4)').should('contain','Por favor acepta el captcha.');
  });
});


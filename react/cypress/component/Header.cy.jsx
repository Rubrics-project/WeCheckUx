import Header from "../../src/components/Header";

describe("Test render Header", () => {
    beforeEach(()=>{ cy.mount(<Header/>)});

    it ('render correctly header', ()=>{
       cy.get("img[alt='Icon Create Rubric']").should("exist");

    });
       
      it("displays the unlogged user icon by default", () => {
        cy.get("[data-testid='header-logged-icon']").should("not.exist");
      });    
    })
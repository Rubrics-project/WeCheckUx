import {screen, render} from '@testing-library/react';
import Browser from "../Browser";



beginEach(cleanup);

 describe("Validaciones del componente browser", () => {
   it("renderiza placeholder del browser", () => {
     render(<Browser />);
    //  screen.debug();
     const title = screen.getAllByText(/Buscar/i);
     expect(title).toBeInTheDocument();
     screen.debug();
   });
 });
//  describe("Validaciones del componente browser", () => {
//   it("button click changes props", () => {
//     render(<Browser />);
  
//     fireEvent.click(getByText("Change Name"));

//     expect(getByText(/Steve/i).textContent).toBe("Steve");
//   });
// });

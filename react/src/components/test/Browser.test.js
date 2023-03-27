import React from 'react';
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
import React from 'react';
import {screen, render} from '@testing-library/react';
import Browser from "../Browser";

beforeEach(() => {
  render(<Browser />);
});

 describe("Validaciones del componente browser", () => {
   it("renderiza placeholder del browser", () => {
       //  screen.debug();
     const title = screen.getAllByText(/Buscar/i);
     expect(title).toBeInTheDocument();
     });
 });

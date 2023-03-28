import {screen, render} from '@testing-library/react';
import Footer from "../Footer";
 
test("Texto Colabora en el código existe dentro del documento", () => {
        render(<Footer/>);
        expect(screen.getByText(/Colabora en el código/i)).toBeInTheDocument();
    })
    
import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import Footer from "../components/Footer";
import Menu from "../components/menu";

export default function Home() {
     
      return (
        <div>
          <Menu/>
          <ButtonPrimary text={"Registrar"} onClick={"pasar onclick"} />
          <ButtonSecondary text={"Cancelar"} onClick={"pasar onclick"} />
          <Footer />
        </div>
      )
    
  }
import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonPrimaryIcon from "../components/Buttons/ButtonPrimaryIcon";
import ButtonPrimaryIconBig from "../components/Buttons/ButtonPrimaryIconBig";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ButtonSecondaryIconData from "../components/Buttons/ButtonSecondaryIconData";
import ButtonSecondaryIconSmall from "../components/Buttons/ButtonSecondaryIconSmall";
import Footer from "../components/Footer";
import Menu from "../components/menu";

export default function Home() {
     
      return (
        <div>
          <Menu/>
          <ButtonPrimary text={"Registrar"} onClick={"pasar onclick"} />
          <ButtonSecondary text={"Cancelar"} onClick={"pasar onclick"} />
          <ButtonPrimaryIconBig text={"Crear mi rúbrica"} onClick={"pasar onclick"} />
          <ButtonPrimaryIcon icon={"./public/assets/edit.svg"} text={"Editar"} onClick={"pasar onclick"} />
          <ButtonPrimaryIcon icon={"./public/assets/evaluate.svg"} text={"Evaluar"} onClick={"pasar onclick"} />
          <ButtonSecondaryIconSmall  text={"Añadir dimensión"} onClick={"pasar onclick"} />
          <ButtonSecondaryIconData text={"Evaluaciones: 20"} onClick={"pasar onclick"} />
          

          <Footer />
        </div>
      )
    
  }
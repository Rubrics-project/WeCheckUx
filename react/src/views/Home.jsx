import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonPrimaryIcon from "../components/Buttons/ButtonPrimaryIcon";
import ButtonPrimaryIconBig from "../components/Buttons/ButtonPrimaryIconBig";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ButtonSecondaryIcon from "../components/Buttons/ButtonSecondaryIcon";
import ButtonSecondaryIconData from "../components/Buttons/ButtonSecondaryIconData";
import ButtonSecondaryIconSmall from "../components/Buttons/ButtonSecondaryIconSmall";
import Footer from "../components/Footer";
import Menu from "../components/menu";
import Create from "./Create";

export default function Home() {
  return (
    <div>
      {/* <Menu/>
          <ButtonPrimary text={"Registrar"} onClick={"pasar onclick"} />
          <ButtonSecondary text={"Cancelar"} onClick={"pasar onclick"} />
          <ButtonPrimaryIconBig text={"Crear mi rúbrica"} onClick={"pasar onclick"} />
          <ButtonPrimaryIcon icon={"./public/assets/edit.svg"} text={"Editar"} onClick={"pasar onclick"} />
          <ButtonPrimaryIcon icon={"./public/assets/evaluate.svg"} text={"Evaluar"} onClick={"pasar onclick"} />
          <ButtonSecondaryIcon text={"Borrar"} onClick={"pasar onclick"} />
          <ButtonSecondaryIconSmall  text={"Añadir dimensión"} onClick={"pasar onclick"} />
          <ButtonSecondaryIconData text={"Evaluaciones: 20"} onClick={"pasar onclick"} /> */}

      <h1 className=" font-opencustom  font-bold text-2xl py-14 px-6">
        ¡Te damos la bienvenida a WeCheck!{" "}
      </h1>

      <p className="text-sm py-5 px-6 ">
        Mejorar la <b>experiencia de usuario</b> (UX) es fundamental para
        asegurar la satisfacción de cada visitante.
      </p>

      <p className="text-sm py-14 px-6">
        En WeCheckUX puedes <b>evaluar, mediante rúbricas</b> creadas por
        diferentes autores y autoras, la UX de <b>cualquier espacio</b>. Además,
        tienes la posibilidad de crear tus propias rúbricas. Por eso, tu
        contribución es muy valiosa.
      </p>

      <p className="px-6">
        Si tienes alguna duda, consulta nuestras <br></br>{" "}
        <a href="url">Preguntas Frecuentes.</a>{" "}
      </p>

      <p className="font-bold py-14 px-7">
        ¡Exprésate libremente y contribuye a la mejora y evaluación del UX en la
        web!
      </p>

      <div className="py-14 px-6 flex space-x-6 ">
        <ButtonPrimary text={"Acceder"} onClick={"pasar onclick"} />
        <ButtonSecondary text={"Registrarme"} onClick={"pasar onclick"} />
      </div>

      <p className=" flex justify-center">O también puedes:</p>
      <div className="flex justify-center">
        <ButtonSecondary
          text={"Acceder de forma anónima"}
          onClick={"pasar onclick"}
        />
      </div>
      <Footer />

      <Create />

      <Footer />
    </div>
  );
}

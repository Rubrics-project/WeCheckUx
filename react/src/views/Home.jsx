import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
// import ButtonPrimaryIcon from "../components/Buttons/ButtonPrimaryIcon";
// import ButtonPrimaryIconBig from "../components/Buttons/ButtonPrimaryIconBig";
// import ButtonSecondaryIcon from "../components/Buttons/ButtonSecondaryIcon";
// import ButtonSecondaryIconData from "../components/Buttons/ButtonSecondaryIconData";
// import ButtonSecondaryIconSmall from "../components/Buttons/ButtonSecondaryIconSmall";

export default function Home() {
  return (
    <>
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

      <p className="font-bold py-12 px-7">
        ¡Exprésate libremente y contribuye a la mejora y evaluación del UX en la
        web!
      </p>

      <div className="py-10 px-6 flex space-x-6 justify-center">
        <Link
          to="/acceso"
          className=" font-opencustom text-color-blue-p font-bold bg-color-grey-bg   px-12 py-2 border-color-grey-border  border border-solid rounded-md "
        >Acceder</Link>
        <Link
          to="/registro"
          className=" font-opencustom text-color-grey-title font-bold bg-color-grey-bg   px-12 py-2 border-color-grey-border  border border-solid rounded-md "
        >Registrarme</Link>
      </div>

      {/* <p className=" flex justify-center">O también puedes:</p>
      <div className="flex justify-center">
        <ButtonSecondary
          text={"Acceder de forma anónima"}
          onClick={"pasar onclick"}
        />
      </div> */}
    </>
  );
}

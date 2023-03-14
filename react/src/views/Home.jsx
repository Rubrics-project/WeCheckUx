import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="font-opencustom font-bold text-2xl py-14">
        ¡Te damos la bienvenida a WeCheck!{" "}
      </h1>

      <p className="font-opencustom text-sm">
        Mejorar la <b>experiencia de usuario</b> (UX) es fundamental para
        asegurar la satisfacción de cada visitante.
      </p>

      <p className="font-opencustom text-sm py-10">
        En WeCheckUX puedes <b>evaluar, mediante rúbricas</b> creadas por
        diferentes autores y autoras, la UX de <b>cualquier espacio</b>. Además,
        tienes la posibilidad de crear tus propias rúbricas. Por eso, tu
        contribución es muy valiosa.
      </p>

      <p className="font-opencustom text-sm">
        Si tienes alguna duda, consulta nuestras <br />{" "}
        <span>
          {" "}
          <Link
            to="/preguntasfrecuentes"
            className="font-opencustom text-sm font-bold text-color-blue-p underline hover:text-color-blue-light"
          >
            Preguntas frecuentes.
          </Link>
        </span>
      </p>

      <p className="font-opencustom text-sm font-bold py-12">
        ¡Exprésate libremente y contribuye a la mejora y evaluación del UX en la
        web!
      </p>

      <div className="w-full grid grid-cols-2 gap-7 mb-20 ">
        <Link
          to="/acceso"
          className="flex justify-center font-opencustom text-color-blue-p font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md "
        >
          Acceder
        </Link>
        <Link
          to="/registro"
          className="flex justify-center font-opencustom text-color-grey-title font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md "
        >
          Registrarme
        </Link>
      </div>
    </>
  );
}

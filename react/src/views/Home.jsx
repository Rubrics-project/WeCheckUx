import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { userAuthContext } from "../context/AuthProvider";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { userToken } = userAuthContext();
  useEffect(() => {
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center md:mx-32 items-center">
        <h1 className="font-latocustom font-semibold text-2xl pt-11 pb-14">
          ¡Te damos la bienvenida a WeCheck!
        </h1>
        <div className="md:flex flex-col md:items-center">
          <p className="font-latocustom text-sm">
            Esto es una plataforma de usuarios para{" "}
            <b> evaluar distintas plataformas digitales mediante rúbricas</b>. Las
            rúbricas son instrumentos de análisis cualitativo que nos permiten
            revisar las propiedades, los puntos fuertes y flojos de una interfaz.
            Este proyecto nace con la intención y el deseo de motivar e incentivar
            el pensamiento crítico entorno al impacto que tienen las interfaces
            gráficas de usuario en nuestro modo de relacionarnos como sociedad.
          </p>

          <p className="font-latocustom text-sm py-10 ">
            En WeCheck puedes evaluar, mediante rúbricas creadas por diferentes
            autores y autoras, la interfaz de cualquier espacio. Además, tienes la
            posibilidad de <b>crear tus propias rúbricas</b> para ponerlas a
            disposición de otros/as usuarios/as que quieran evaluar con sus puntos
            de vista personales, sus conocimientos situados y que quieran compartir
            y sumar su punto de vista con la comunidad. Por eso,{" "}
            <b>tu contribución es muy valiosa</b>.
          </p>
        </div>
        <p className="font-latocustom text-sm md:flex flex-col items-center">
          Si tienes alguna duda, consulta nuestras <br />{" "}
          <span>
            {" "}
            <Link
              to="/preguntasfrecuentes"
              className="font-latocustom text-sm text-color-blue-p underline hover:text-color-blue-light"
            >
              Preguntas frecuentes.
            </Link>
          </span>
        </p>

        <p className="font-latocustom text-sm font-bold py-12 md:flex flex-col items-center">
          ¡Exprésate libremente y contribuye a la mejora y evaluación de las
          interfaces gráficas!
        </p>
      </div>
      {!isAuthenticated ? (
        <div className="w-full flex flex-row gap-7  justify-center">
          <Link
            to="/acceso"
            className="flex w-full md:w-1/4 justify-center font-opencustom text-color-blue-p font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md "
          >
            Acceder
          </Link>
          <Link
            to="/registro"
            className="flex w-full md:w-1/4 justify-center font-opencustom text-color-grey-title font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md"
          >
            Registrarme
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to="/crear"
            className="flex justify-center font-opencustom text-color-blue-p font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md mb-5"
          >
            Crear rúbrica
          </Link>
        </div>
      )}
    </>
  );
}

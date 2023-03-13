import React from "react";
import logo from "../assets/logo.svg";
import loggedIcon from "../assets/loggedIcon.svg";
import Title from "./Title";

export default function Nav() {
  return (
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 flex flex-wrap justify-between items-center dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div class="flex items-center lg:order-2">
        <a
          href="#"
          class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <img src={loggedIcon} alt="PerfilUsuario"></img>
        </a>
      </div>

      <div
        class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu"
      >
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a href="/proyectos">
              <Title title={"Proyectos"} />
            </a>
          </li>
          <li>
            <a href="/crear">
              <Title title={"Crear rúbricas"} />
            </a>
          </li>
          <li>
            <a href="/preguntasfrecuentes">
              <Title title={"Preguntas frecuentes"} />
            </a>
          </li>
          <li>
            <a href="/acceso">
              <Title title={"Acceder"} />
            </a>
          </li>
          <li>
            <a href="/registro">
              <Title title={"Registro"} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

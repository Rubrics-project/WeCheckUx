import React from "react";
import logo from "../../public/assets/logo.svg";
import { useState } from "react"; // import state
import loggedIcon from "../../public/assets/loggedIcon.svg";
import Title from "./Title";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
        <img src={logo} alt="Logo"></img>
      </a>
      <nav>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex rg:flex">
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
        <img src={loggedIcon} alt="PerfilUsuario"></img>
      </nav>
    </div>
  );
}

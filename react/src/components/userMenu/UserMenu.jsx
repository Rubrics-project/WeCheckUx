import React from "react";
import projectsIcon from "../../assets/projectsIcon.svg";
import addIcon from "../../assets/addIcon.svg";
import loggedIcon from "../../assets/loggedIcon.svg";
import logoutIcon from "../../assets/logoutIcon.svg";
import { useState } from "react";

export default function UserMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          
          <div
            className="HAMBURGER-ICON fixed top-[20px] right-[10px] space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <a
            href="#"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 fixed top-[7px] right-[1px] space-y-2 font-medium rounded-lg text-sm px-0 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            <img src={loggedIcon} alt="PerfilUsuario"></img>
          </a>
          </div>
          <div className={isNavOpen ? "showUserMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-38 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-7 w-7 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-right justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-2">
                <div className="UserMenuIcon">
                  <img src={projectsIcon} alt="Icon Project"></img>
                  <a href="/Proyectos">Proyectos</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="UserMenuIcon">
                  <img src={projectsIcon} alt="Icon Project"></img>
                  <a href="/rubricas"> Mis rúbricas</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="UserMenuIcon">
                  <img src={projectsIcon} alt="Icon Project"></img>
                  <a href="/evaluar"> Mis evaluaciones</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="UserMenuIcon">
                  <img src={addIcon} alt="Icon Add"></img>
                  <a href="/crear">Crear rúbrica</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="UserMenuIcon">
                  <img src={logoutIcon} alt="Icon Logout"></img>
                  <a href="/home">Cerrar sesión</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
       `}</style>
    </div>
  );
}

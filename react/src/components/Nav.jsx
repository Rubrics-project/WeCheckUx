import React, { useEffect, useState } from 'react';
import faqIcon from "../assets/faqIcon.svg";
import projectsIcon from "../assets/projectsIcon.svg";
import addIcon from "../assets/addIcon.svg";
import accessIcon from "../assets/accessIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import logoutIcon from "../assets/logoutIcon.svg";

import menuIcon from '../assets/hamburger.svg'



export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    // redirigir a la página de inicio de sesión o a la página principal
  };



  return (

    <div>
      <img
            src={menuIcon}
            alt="Menu Hamburgesa"
            onClick={() => setIsNavOpen((prev) => !prev)}
          ></img>
      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

          {isAuthenticated ? (
            <>
              <a href="/proyectos" className='flex'><img src={projectsIcon} alt="Icon Project"></img>Proyectos</a>
              <a href="/rubricas" className='flex'><img src={projectsIcon} alt="Icon Project"/>Mis Rúbricas</a>
              <a href="/evaluar" className='flex'><img src={projectsIcon} alt="Icon Project"/>Mis Evaluaciones</a>
              <a href="/crear" className='flex'><img src={addIcon} alt="Icon Create Rubric"/>Crear Rúbrica</a>
              <a href="/preguntasfrecuentes" className='flex'><img src={faqIcon} alt="Icon Preguntas frecuentes"></img>Preguntas Frecuentes</a>
              <button onClick={handleLogout}><img src={logoutIcon} alt="Icon Logout"/>Cerrar sesión</button>
            </>
          ) : (
            <>
              <a href="/proyectos" className='flex'><img src={projectsIcon} alt="Icon Project"/>Proyectos</a>
              <a href="/preguntasfrecuentes" className='flex'><img src={faqIcon} alt="Icon Preguntas frecuentes"/>Preguntas Frecuentes</a>
              <a href="/acceso" className='flex'><img src={accessIcon} alt="Icon Login"/>Iniciar sesión</a>
              <a href="/registro" className='flex'><img src={accessIcon} alt="Icon Login"/>Registrarse</a>
            </>
          )}
          <a href="https://github.com/Rubrics-project/WeCheckUx" className='flex'><img src={gitHubIcon} alt="Icon Login"/>Contribuye al proyecto</a>
      </div>


    </div>
    // </Menu>
  )
}


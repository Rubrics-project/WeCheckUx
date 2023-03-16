import React, { useEffect, useState } from 'react';
import faqIcon from "../assets/faqIcon.svg";
import projectsIcon from "../assets/projectsIcon.svg";
import addIconGray from "../assets/addIconGray.svg";
import accessIcon from "../assets/accessIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import logoutIcon from "../assets/logoutIcon.svg";
import Hamburger from "hamburger-react";



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
    window.location.reload();
    // redirigir a la pag q iria
  };



  return (

    <div>
      <div onClick={() => setIsNavOpen((prev) => !prev)}>
      <Hamburger color='#72777D'/>
      </div>
      <div className={isNavOpen ? "absolute z-10 block bg-color-grey-bg py-0 left-0 top-35" : "hidden"} >

          {isAuthenticated ? (
            <>
              <a href="/proyectos" className='flex py-3 px-6   text-color-grey-title font-semibold font-opencustom'><img src={projectsIcon} alt="Icon Project" className='mr-5'></img>Proyectos</a>
              <a href="/rubricas" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={projectsIcon} alt="Icon Project" className='mr-5'/>Mis Rúbricas</a>
              <a href="/evaluar" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={projectsIcon} alt="Icon Project" className='mr-5'/>Mis Evaluaciones</a>
              <a href="/crear" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={addIconGray} alt="Icon Create Rubric" className='mr-5'/>Crear Rúbrica</a>
              <a href="/preguntasfrecuentes" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={faqIcon} alt="Icon Preguntas frecuentes" className='mr-5'></img>Preguntas Frecuentes</a>
              <a onClick={handleLogout} className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-bold font-opencustom'><img src={logoutIcon} alt="Icon Logout" className='mr-5'/>Cerrar sesión</a>
            </>
          ) : (
            <>
              <a href="/proyectos" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={projectsIcon} alt="Icon Project" className='mr-5'/>Proyectos</a>
              <a href="/preguntasfrecuentes" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={faqIcon} alt="Icon Preguntas frecuentes" className='mr-5'/>Preguntas Frecuentes</a>
              <a href="/acceso" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={accessIcon} alt="Icon Registro" className='mr-5'/>Iniciar sesión</a>
              <a href="/registro" className='flex py-3 px-6 border-t border-t-gray-300 text-color-grey-title font-semibold font-opencustom'><img src={accessIcon} alt="Icon Login" className='mr-5'/>Registrarse</a>
            </>
          )}
          <a href="https://github.com/Rubrics-project/WeCheckUx" className='flex py-5 px-6 border-t border-t-gray-300 text-color-grey-title font-light font-opencustom'><img src={gitHubIcon} alt="Icon de logout" className='mr-5'/>Contribuye al proyecto</a>
      </div>


    </div>
  )
}


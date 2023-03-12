import React from "react";
import faqIcon from "../../public/assets/faqIcon.svg";
import projectsIcon from "../../public/assets/projectsIcon.svg";
import addIcon from "../../public/assets/addIcon.svg";
import accessIcon from "../../public/assets/accessIcon.svg";
import gitHubIcon from "../../public/assets/gitHubIcon.svg";
import { useState } from "react";


export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}>
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
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-2">
                <div className="menuIcon">
                  <img src={projectsIcon} alt="Icon Project"></img>
                  <a href="/Proyectos">Proyectos</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="menuIcon">
                  <img src={addIcon} alt="Icon Create Rubric"></img>
                  <a href="/crear"> Crear rúbricas</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="menuIcon">
                  <img src={faqIcon} alt="Icon Preguntas frecuentes"></img>
                  <a href="/preguntasfrecuentes"> Preguntas frecuentes</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="menuIcon">
                  <img src={accessIcon} alt="Icon Login"></img>
                  <a href="/acceso">Acceder</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="menuIcon">
                  <img src={accessIcon} alt="Icon Login"></img>
                  <a href="/registro">Registro</a>
                </div>
              </li>
              <li className="border-b border-gray-400 my-2">
                <div className="menuIcon">
                  <img src={gitHubIcon} alt="Icon Login"></img>
                 <a href="https://github.com/Rubrics-project/WeCheckUx">Contribuye al proyecto</a>
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


    
// import React from "react";
// import faqIcon from "../../public/assets/faqIcon.svg";
// import projectsIcon from "../../public/assets/projectsIcon.svg";
// import addIcon from "../../public/assets/addIcon.svg";
// import accessIcon from "../../public/assets/accessIcon.svg";
// import gitHubIcon from "../../public/assets/gitHubIcon.svg";
// import logo from "../../public/assets/logo.svg";
// import { Link } from "react-router-dom";
// import Create from "../views/Create";

// export default function Menu() {
//   return (
//     <div>
//       <div className="flex items-center justify-between border-b border-gray-400 py-8">
//         <a href="/">
//           <img src={logo} alt="Logo"></img>
//         </a>
//         <nav>
//           <section className="MOBILE-MENU flex lg:hidden">
//             <div className="HAMBURGER-ICON space-y-2">
//               <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//               <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//               <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             </div>

//             <div>
//               <div className="absolute top-0 right-0 px-8 py-8">
//                 <svg
//                   className="h-8 w-8 text-gray-600"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//                 </svg>
//               </div>
//               <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-left justify-between min-h-[250px]">
//                 <li className="border-b border-gray-400 my-2 uppercase">
//                   <div className="menuIcon">
//                     <img src={projectsIcon} alt="Icon Project"></img>
//                     <a href="/Projects">Proyectos</a>
//                   </div>
//                 </li>
//                 <li className="border-b border-gray-400 my-2 uppercase">
//                   <div className="menuIcon">
//                     <img src={addIcon} alt="Icon Create Rubric"></img>
//                     <a href="/crear"> Crear rúbricas</a>
//                   </div>
//                 </li>
//                 <li className="border-b border-gray-400 my-2 uppercase">
//                   <div className="menuIcon">
//                     <img src={faqIcon} alt="Icon Preguntas frecuentes"></img>
//                     <a href="/Fqa"> Preguntas frecuentes</a>
//                   </div>
//                 </li>
//                 <li className="border-b border-gray-400 my-2 uppercase">
//                   <div className="menuIcon">
//                     <img src={accessIcon} alt="Icon Login"></img>
//                     <a href="/Login">Acceder</a>
//                   </div>
//                 </li>
//                 <li className="border-b border-gray-400 my-2 uppercase">
//                   <div className="menuIcon">
//                     <img src={accessIcon} alt="Icon Login"></img>
//                     <a href="/Signup">Registro</a>
//                   </div>
//                 </li>
//                 <li className="border-b border-gray-400 my-2 uppercase">
//                   <div className="menuIcon">
//                     <img src={gitHubIcon} alt="Icon Login"></img>
//                     <a href="/Contibute">Constribuye al proyecto</a>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </section>

//           <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
//             <li>
//               <a href="/Projects">Proyectos</a>
//             </li>
//             <li>
//               <a href="/crear">Crear rúbricas</a>
//             </li>
//             <li>
//               <a href="/Fqa">Preguntas frecuentes</a>
//             </li>
//             <li>
//               <a href="/Login">Acceder</a>
//             </li>
//             <li>
//               <a href="/Signup">Registro</a>
//             </li>
//             </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

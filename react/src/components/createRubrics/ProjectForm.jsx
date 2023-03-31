import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrowIcon.svg";
import ProjectOption from "./ProjectOption";
import { getAllItems } from "../../services/projectsService";

export default function ProjectForm({ handleInputChange }) {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItems();
        setProjects(response);

        // console.log(p)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-8 mb-1">
        <p className="font-opencustom text-sm mb-2">Proyecto:</p>
        <div className="flex bg-color-grey-bg p-3 ">
          <p className="font-opencustom text-xs text-color-grey-title">
            Selecciona el proyecto donde estará ubicada tu rúbrica.
          </p>
        </div>
        <div
          className="flex bg-color-grey-bg p-2 justify-center cursor-pointer mt-1"
          onClick={toggleAccordion}
        >
          <img src={arrow} alt="Icono flecha desplegable" />
        </div>
      </div>
      {isOpen && (
        <>
          <ul className="grid w-full gap-2 md:grid-cols-3 bg-color-grey-bg p-1">
            {projects.map((project, index) => (
              <ProjectOption
                key={index}
                project_value={project.id}
                project_onChange={handleInputChange}
                project_name={project.name}
                project_description={project.description}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

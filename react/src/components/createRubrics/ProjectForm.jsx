import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrowIcon.svg";
import ProjectOption from "./ProjectOption";
import { getAllItems } from "../../services/projectsService";

export default function ProjectForm({ project_value, project_onChange }) {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  const handleProjectChange = (project_value) => {
    // setSelectedProject(project_value);
    if (project_value !== null) {
      setSelectedProject(project_value);}
    
  };
  console.log("-------",selectedProject);

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
                project_value={project.id} //TO DO: cuando selecciona el usuario, pasar id para enviar a db?
                project_name={project.name}
                project_description={project.description}
                onChange={handleProjectChange}
              />
            ))}
          </ul>
          <div>Selected project: {selectedProject}</div>
        </>
      )}
    </>
  );
}

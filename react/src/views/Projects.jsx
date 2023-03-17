import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
import ProjectCard from "../components/projects/ProjectCard";
import Title from "../components/Title";
import { getAllItems } from "../services/projectsService";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Browser />
      <Title title={"Proyectos"} />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project_name={project.name}
          projectOnClick={""} //configurar el onclick que lleva al id del proyecto con todas sus rubricas
          project_url={project.url}
          project_description={project.description}
          //falta llamar a esta info
          // totalRubrics={project.totalRubrics}
          // totalEvaluations={project.totalEvaluations}
        />
      ))}
    </>
  );
}

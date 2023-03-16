import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
<<<<<<< HEAD
import Card from "../components/projects/Card";
=======
import ProjectCard from "../components/ProjectCard";
>>>>>>> dev
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
<<<<<<< HEAD
      {/* HACER BUCLE PARA TRAER TODOS LOS ID DE RUBRICAS DE EL PROYECTO SELECCIONADO */}
      {/* Añadir botones Evaluar y evaluaciones */}
      <Card
        title={"Título proyecto"}
        rubric_description={
          "Problemas de acceso basados en los roles e identidad de género."
        }
        rubric_author={"Juana Arcos"}
        rubric_date={"20/3/2022"}
      />
=======
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
>>>>>>> dev
    </>
  );
}

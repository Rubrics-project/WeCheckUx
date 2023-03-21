import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RubricProject from "../components/Rubrics/RubricProject";
import Title from "../components/Title";
import { getItemById } from "../services/projectsService";

export default function ProjectDetail() {
  const params = useParams();
  // console.log(params.id);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getItemById(params.id)
      .then((response) => {
        console.log(response);
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(projects);
  return (
    <>
      {/* PONER EN EL TITULO EL ID DEL TITULO DEL PROYECTO */}
      <Title title={"Google"} />
      {/* HACER BUCLE PARA TRAER TODOS LOS ID DE RUBRICAS DEL PROYECTO SELECCIONADO (id) */}
      {/* Añadir botones Evaluar y evaluaciones */}

      <RubricProject
        rubric_title={projects.rubric.title}
        rubric_description={projects.rubric.description}
        rubric_author={projects.rubric.user_id}
        rubric_date={projects.rubric.created_at.slice(0, 10)}
      />
    </>
  );
}

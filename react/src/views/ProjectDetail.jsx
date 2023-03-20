import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RubricProject from "../components/Rubrics/RubricProject";
import Title from "../components/Title";
import { getAllItems } from "../services/rubricService";

export default function ProjectDetail() {
  const params = useParams();
  console.log(params);
  const [rubrics, setRubrics] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((response) => {
        setRubrics(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {/* PONER EN EL TITULO EL ID DEL TITULO DEL PROYECTO */}
      <Title title={"Google"} />
      {/* HACER BUCLE PARA TRAER TODOS LOS ID DE RUBRICAS DEL PROYECTO SELECCIONADO (id) */}
      {/* Añadir botones Evaluar y evaluaciones */}
      {rubrics.map((rubric, index) => (
        <RubricProject
          key={index}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          rubric_author={rubric.user_id}
          rubric_date={rubric.created_at.slice(0, 10)}
        />
      ))}
    </>
  );
}

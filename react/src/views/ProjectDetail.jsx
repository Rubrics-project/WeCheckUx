import React from "react";
import RubricProject from "../components/Rubrics/RubricProject";
import Title from "../components/Title";

export default function ProjectDetail() {
  return (
    <>
      {/* PONER EN EL TITULO EL ID DEL TITULO DEL PROYECTO */}
      <Title title={"Google"} />
      {/* HACER BUCLE PARA TRAER TODOS LOS ID DE RUBRICAS DE EL PROYECTO SELECCIONADO */}
      {/* Añadir botones Evaluar y evaluaciones */}
      <Title title={"Google"} />
      <RubricProject
        title={"Título rúbrica"}
        rubric_description={
          "Problemas de acceso basados en los roles e identidad de género."
        }
        rubric_author={"Juana Arcos"}
        rubric_date={"20/3/2022"}
      />
    </>
  );
}

import React from "react";
import RubricComplete from "../components/Rubrics/RubricComplete";

export default function RubricDetail() {
  return (
    <>
      <RubricComplete
        title={"Título de rúbrica"}
        rubric_description={
          "Problemas de acceso basados en los roles e identidad de género."
        }
        rubric_author={"Juana Arcos"}
        rubric_date={"20/3/2022"}
        project_title={"Google"}
        project_url={"www.google.es"}
        project_description={
          "Buscador de contenidos en la red. Analizamos la versión “.es”."
        }
      />
    </>
  );
}

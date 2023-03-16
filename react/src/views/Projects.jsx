import React from "react";
import Browser from "../components/Browser";
import Card from "../components/projects/Card";
import Title from "../components/Title";

export default function Projects() {
  return (
    <>
      <Browser />
      <Title title={"Proyectos"} />
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
    </>
  );
}

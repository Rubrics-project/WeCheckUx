import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Browser from "../components/Browser";
import InformationBox from "../components/InformationBox";
import ProjectHeaderDetail from "../components/projects/ProjectHeaderDetail";
import RubricProject from "../components/Rubrics/RubricProject";
import Title from "../components/Title";
import { getItemById } from "../services/projectsService";
import { getAllItems } from "../services/rubricService";

export default function ProjectDetail() {
  const params = useParams();
  // console.log(params.id);
  const [project, setProject] = useState([]);
  const [rubrics, setRubrics] = useState([]);
  const [searchRubrics, setSearchRubrics] = useState([]);
  const [table, setTable] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getItemById(params.id)
      .then((response) => {
        // console.log(response.project);
        setProject(response.project);
        setRubrics(
          response.project.rubrics.sort(
            (a, b) =>
              a.created_at.slice(0, 10).replace(/(\-)/gm, "") <
              b.created_at.slice(0, 10).replace(/(\-)/gm, "")
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
    getAllItems()
      .then((response) => {
        setTable(response);
        setSearchRubrics(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    filter(e.target.value);
    setBusqueda(e.target.value);
    // console.log("busqueda:" + e.target.value);
  };
  const filter = (termsearch) => {
    let result = table.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(termsearch)) {
        return elemento;
      }
    });
    setSearchRubrics(result);
  };
  return (
    <>
      <Browser busqueda={busqueda} handleChange={handleChange} />
      <Title title={project.name} />
      <ProjectHeaderDetail
        project_url={project.url}
        project_description={project.description}
      />
      <InformationBox
        text={
          "Comprueba en esta lista que la rúbrica que quieres crear no se ha creado. Al final de la lista encontrarás el botón “Crear mi rúbrica”."
        }
      />
      {/* Añadir botones Evaluar y evaluaciones */}
      {rubrics.map((rubric, index) => (
        <RubricProject
          key={index}
          rubric_id={rubric.id}
          project_id={rubric.project_id}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          rubric_author={rubric.user_id}
          rubric_date={rubric.created_at.slice(0, 10)}
        />
      ))}
    </>
  );
}

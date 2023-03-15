import React, { useEffect, useState } from "react";
// import RubricUser from "../components/Rubrics/RubricUser";
import RubricComplete from "../components/Rubrics/RubricComplete";
import Title from "../components/Title";
import { getAllItems } from "../services/rubricService";

export default function MisRubricas() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Title title={"Mis rúbricas"} />
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      {/* <RubricUser title={"Título rúbrica"} /> */}
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
        dimension_title={"Identidad de género"}
        dimension_description={
          "Problemas de acceso basados en los roles e identidad de género."
        }
        criteria_description={
          "Lorem Ipsum is simply dummy text of the printing typesetting text of the printing."
        }
      />
    </>
  );
}

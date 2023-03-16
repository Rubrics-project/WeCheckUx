import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
import RubricUser from "../components/Rubrics/RubricUser";
import Title from "../components/Title";
import { getAllItems } from "../services/rubricService";

export default function MisRubricas() {
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
      <Browser />
      <Title title={"Mis rúbricas"} />
      {rubrics.map((rubric, index) => (
        <RubricUser
          key={index}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          project_title={rubric.project_id} //falta llamar al nombre del proyecto asociado a esta rúbrica
          rubric_date={rubric.created_at.slice(0, 10)}
        />
      ))}
    </>
  );
}

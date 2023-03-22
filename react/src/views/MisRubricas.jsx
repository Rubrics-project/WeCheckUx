import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import Browser from "../components/Browser";
import RubricUser from "../components/Rubrics/RubricUser";
import Title from "../components/Title";
import { getAllItems } from "../services/rubricService";

export default function MisRubricas() {
  const { userToken } = userAuthContext();
  const [rubrics, setRubrics] = useState([]);


  if (!userToken) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {

    getAllItems()

      .then((response) => {
        console.log(response);
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
          rubric_id={rubric.id}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          project_title={rubric.project_id} 
          rubric_date={rubric.created_at.slice(0,10)}
        />
      ))}
    </>
  );
}

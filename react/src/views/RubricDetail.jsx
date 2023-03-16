import React, { useEffect, useState } from "react";
import RubricComplete from "../components/Rubrics/RubricComplete";
import { getAllItems } from "../services/rubricService";

export default function RubricDetail() {
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
      {rubrics.map((rubric, index) => (
        <RubricComplete
          key={index}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          rubric_author={rubric.user_id}
          rubric_date={rubric.created_at.slice(0, 10)}
          project_title={rubric.project_id}
          project_url={rubric.project_id}
          project_description={rubric.project_id}
        />
      ))}
    </>
  );
}

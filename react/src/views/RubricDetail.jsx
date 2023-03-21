import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RubricComplete from "../components/Rubrics/RubricComplete";
import { getItemById } from "../services/projectsService";

export default function RubricDetail() {
  const params = useParams();
  const [rubrics, setRubrics] = useState([]);

  useEffect(() => {
    getItemById(params.id)
      .then((response) => {
        setRubrics(response.project.rubrics);
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

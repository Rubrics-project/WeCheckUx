import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RubricComplete from "../components/Rubrics/RubricComplete";
import { getItemById } from "../services/rubricService";

export default function RubricDetail() {
  const params = useParams();
  const [rubric, setRubric] = useState([]);

  useEffect(() => {
    getItemById(params.id)
      .then((response) => {
        setRubric(response.rubric);

        console.log("setRubrics rubric detail: ", response.rubric);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <RubricComplete
        rubric_title={rubric.title}
        rubric_description={rubric.description}
        rubric_author={rubric.user_id}
        rubric_date={rubric.created_at}
        project_title={rubric.project_id}
        project_url={rubric.project_id}
        project_description={rubric.project_id}
      />
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RubricComplete from "../components/Rubrics/RubricComplete";
import { getItemById } from "../services/rubricService";

export default function RubricDetail() {
  const params = useParams();
  const [rubric, setRubric] = useState([]);
  const [user, setUser] = useState([]);
  const [project, setProject] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    getItemById(params.id)
      .then((response) => {
        console.log("aquuu   ----",response)
        setRubric(response);
        setUser(response.user);
        setProject(response.project);
        setDate(response.created_at.slice(0, 10));
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
        rubric_author={user.name + " " + user.surname}
        rubric_date={date}
        project_title={project.name}
        project_url={project.url}
        project_description={project.description}
      />
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RubricComplete from "../components/Rubrics/RubricComplete";
import Spinner from "../components/Spinner";
import { getItemById } from "../services/rubricService";

export default function RubricDetail() {
  const params = useParams();
  const [rubric, setRubric] = useState([]);
  const [user, setUser] = useState([]);
  const [project, setProject] = useState([]);
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await getItemById(params.id);
        setRubric(response);
        setUser(response.user);
        setProject(response.project);
        setDate(response.created_at.slice(0, 10));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      {isLoading ? (
        <div className="flex justify-center mt-14">
          <Spinner />
        </div>
      ) : (
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
        </>)
      }
    </div>
  );
}

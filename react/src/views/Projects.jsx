import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { getAllItems } from "../services/rubricService";

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((response) => {
        setItems(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Browser />
      <Title title={"Proyectos"} />
      {items.map((item) => (
        <ProjectCard
          key={item.id}
          projectOnClick={""}
          project_name={item.name}
          project_url={item.url}
          project_description={item.description}
          totalRubrics={item.totalRubrics}
          totalEvaluations={item.totalEvaluations}
        />
      ))}
    </>
  );
}

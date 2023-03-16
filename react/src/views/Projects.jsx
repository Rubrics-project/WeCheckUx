import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { getAllItems } from "../services/projectsService";

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Browser />
      <Title title={"Proyectos"} />
      {items.map((item, index) => (
        <ProjectCard
          key={index}
          project_name={item.name}
          projectOnClick={""}
          project_url={item.url}
          project_description={item.description}
          // totalRubrics={item.totalRubrics}
          // totalEvaluations={item.totalEvaluations}
        />
      ))}
    </>
  );
}

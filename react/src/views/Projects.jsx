import React from "react";
import Browser from "../components/Browser";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

export default function Projects() {
  return (
    <>
      <Browser />
      <Title title={"Proyectos"} />
      <ProjectCard
        project_name={"Google"}
        project_description={
          "Lorem Ipsum is simply dummy text of the printing typesetting."
        }
        project_url={"wwww.google.com"}
        projectOnClick={""}
        totalRubrics={"0"}
        totalEvaluations={"0"}
      />
    </>
  );
}

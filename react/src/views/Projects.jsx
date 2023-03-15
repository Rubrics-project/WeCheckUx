import React from "react";
import Browser from "../components/Browser";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

export default function Projects() {
  return (
    <>
      <Browser />
      <Title title={"Proyectos"} />
      <ProjectCard />
    </>
  );
}

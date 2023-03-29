import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
import ProjectCard from "../components/projects/ProjectCard";
import Title from "../components/Title";

import { getAllItems } from "../services/projectsService";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItems();
        setTable(response);
        setProjects(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    filter(e.target.value);
    setSearch(e.target.value);
  };
  const filter = (termsearch) => {
    let result = table.filter((element) => {
      const removeDiacritics = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      const propertiesToSearch = ['name', 'description'];
      if (propertiesToSearch.some(prop => removeDiacritics(element[prop].toString().toLowerCase()).includes(removeDiacritics(termsearch.toLowerCase())))) {
        return element;
      }
      
    });
    setProjects(result);
  };

  return (
    <>
      <Browser search={search} handleChange={handleChange} />
      <Title title={"Proyectos"} />

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          project_name={project.name}
          project_url={project.url}
          project_description={project.description}
        />
      ))}
    </>
  );
}

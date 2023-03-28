import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Browser from "../components/Browser";
import ButtonPrimaryIconBig from "../components/Buttons/ButtonPrimaryIconBig";
import InformationBox from "../components/InformationBox";
import ProjectHeaderDetail from "../components/projects/ProjectHeaderDetail";
import RubricProject from "../components/Rubrics/RubricProject";
import Title from "../components/Title";
import { getItemById } from "../services/projectsService";
import plusIcon from "../assets/addIcon.svg";
import { userAuthContext } from "../context/AuthProvider";

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState([]);
  const [rubrics, setRubrics] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { userToken } = userAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemById(params.id);
        setTable(response.rubrics);

        setProject(response);
        setRubrics(response.rubrics);

        if (userToken) {
          setIsAuthenticated(true);
        }
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
      const propertiesToSearch = ['title', 'description', 'user_name'];
      if (propertiesToSearch.some(prop => removeDiacritics(element[prop].toString().toLowerCase()).includes(removeDiacritics(termsearch.toLowerCase())))) {
        return element;
      }
    });
    setRubrics(result);
  };

  return (
    <>
      <Browser search={search} handleChange={handleChange} />
      <Title title={project.name} />
      <ProjectHeaderDetail
        project_url={project.url}
        project_description={project.description}
      />
      <InformationBox
        text={
          "Comprueba en esta lista que la rúbrica que quieres crear no se ha creado. Al final de la lista encontrarás el botón “Crear mi rúbrica”."
        }
      />
      {rubrics.map((rubric, index) => (
        <RubricProject
          key={index}
          rubric_id={rubric.id}
          project_id={rubric.project_id}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          rubric_author={rubric.user_name}
          rubric_date={rubric.created_at.slice(0, 10)}
        />
      ))}
      <div className="flex justify-center mt-14">
        <ButtonPrimaryIconBig
          src={plusIcon}
          alt={"Icono de añadir"}
          text={"Crear mi rúbrica"}
          to={!isAuthenticated ? "/acceso" : `/crear/${project.id}`}
        />
      </div>
    </>
  );
}

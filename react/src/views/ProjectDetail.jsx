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
import Spinner from "../components/Spinner";

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState([]);
  const [rubrics, setRubrics] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { userToken } = userAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await getItemById(params.id);
        const rubricsResponses = response.rubrics;
        setProject(response);
        setRubrics(rubricsResponses);
        setTable(rubricsResponses);

        // if (userToken) {
        //   setIsAuthenticated(true);
        // }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
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
      {isLoading ? (
        <div className="flex justify-center mt-14">
          <Spinner />
        </div>
      ) : (
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
      {rubrics.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        .map((rubric, index) => (
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
          to={!userToken ? "/acceso" : `/crear/${project.id}`}
        />
      </div>
      </>)}
    </>
  );
}

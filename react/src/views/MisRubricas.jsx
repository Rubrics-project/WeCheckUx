import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import { getItemById } from "../services/userService";

import Spinner from "../components/Spinner";
import Browser from "../components/Browser";
import Title from "../components/Title";
import RubricUser from "../components/Rubrics/RubricUser";
import InformationBox from "../components/InformationBox";

export default function MisRubricas() {
  const { userToken, currentUser } = userAuthContext();
  const [rubrics, setRubrics] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  if (!userToken) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await getItemById(currentUser);
        setTable(response.rubrics);
        setRubrics(response.rubrics);
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
      const propertiesToSearch = ['title', 'description'];
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
          <Title title={"Mis rúbricas"} />
          {rubrics.length === 0 ? (
            <div>
              <InformationBox text={"No tienes rubricas todavía. ¿Te gustaría crear una ahora?"}/>
            <Link
              to="/crear"
              className="flex justify-center font-opencustom text-color-blue-p font-extrabold bg-color-grey-bg px-4 py-2 mt-6 border-color-grey-border border border-solid rounded-md"
            >
              Crear rúbrica
            </Link>
          </div>
          ) : (
            rubrics
              .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
              .map((rubric, index) => (
                <RubricUser
                  key={index}
                  rubric_id={rubric.id}
                  rubric_title={rubric.title}
                  rubric_description={rubric.description}
                  project_title={rubric.project_name.name}
                  rubric_date={rubric.created_at.slice(0, 10)}
                />
              ))
          )}
        </>
      )}
    </>
  );
}






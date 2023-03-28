import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import Browser from "../components/Browser";
import RubricUser from "../components/Rubrics/RubricUser";
import Title from "../components/Title";
import { getItemById } from "../services/userService";

export default function MisRubricas() {
  const { userToken, currentUser } = userAuthContext();
  const [rubrics, setRubrics] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");

  if (!userToken) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemById(currentUser);
        setTable(response.rubrics);
        setRubrics(response.rubrics);
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
      const propertiesToSearch = ['title', 'description'];
      if (propertiesToSearch.some(prop => removeDiacritics(element[prop].toString().toLowerCase()).includes(removeDiacritics(termsearch.toLowerCase())))) {
        return element;
      }
    });
    setRubrics(result);
  };

  return (
    <>
      <Browser search={search} handleChange={handleChange} />
      <Title title={"Mis rúbricas"} />
      {rubrics.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        .map((rubric, index) => (
          <RubricUser
            key={index}
            rubric_id={rubric.id}
            rubric_title={rubric.title}
            rubric_description={rubric.description}
            project_title={rubric.project_name.name}
            rubric_date={rubric.created_at.slice(0, 10)}
          />
        ))}
    </>
  );
}

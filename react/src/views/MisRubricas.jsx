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
        setTable(response.data.user.rubrics);
        setRubrics(response.data.user.rubrics);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    filter(e.target.value);
    setSearch(e.target.value);
    // console.log("busqueda:"+ e.target.value)
  };
  const filter = (termsearch) => {
    let result = table.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(termsearch)) {
        return elemento;
      }
    });
    setRubrics(result);
  };

  return (
    <>
      <Browser search={search} handleChange={handleChange} />
      <Title title={"Mis rúbricas"} />
      {rubrics.map((rubric, index) => (
        <RubricUser
          key={index}
          rubric_id={rubric.id}
          rubric_title={rubric.title}
          rubric_description={rubric.description}
          project_title={rubric.project_id}
          rubric_date={rubric.created_at}
        />
      ))}
    </>
  );
}

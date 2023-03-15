import React, { useEffect, useState } from "react";
import Browser from "../components/Browser";
import RubricUser from "../components/Rubrics/RubricUser";
import Title from "../components/Title";
import { getAllItems } from "../services/rubricService";

export default function MisRubricas() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems()
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Browser />
      <Title title={"Mis rúbricas"} />
      {items.map((item) => (
        <RubricUser
          key={item.id}
          title={item.name}
          rubric_description={item.description}
          project_title={"Google"}
          rubric_date={"20/3/2022"}
        />
      ))}
    </>
  );
}

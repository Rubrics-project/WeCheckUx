import React, { useEffect, useState } from "react";
import Browser from "../components/Browser.jsx";
import { getAllItems } from "../services/userService.js";

export default function Rubrics() {
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
      <div>
        Rubrics
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}

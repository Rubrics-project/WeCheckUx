import React from "react";
import Title from "../components/Title";
import Accordion from "../components/Accordion";

export default function Fqa() {
  return (
    <>
      <Title title={"Preguntas Frecuentes"} />
      <Accordion title="Accordion 1" content="Content for Accordion 1" />
      <Accordion title="Accordion 2" content="Content for Accordion 2" />
      <Accordion title="Accordion 3" content="Content for Accordion 3" />
    </>
  );
}

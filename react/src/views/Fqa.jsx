import React from "react";
import Title from "../components/Title";
import Accordion from "../components/Accordion";

export default function Fqa() {
  return (
    <>
      <Title title={"Preguntas Frecuentes"} />
      <div className="mt-8 space-y-4">
        <Accordion
          title="1. ¿Qué és una interfaz gráfica de usuario?"
          content="Una interfaz gráfica de usuario son las capas interactivas a las que accede una persona para comunicarse con un sistema interactivo. Esto implica botones, metáforas, composición y diseño. Una interfaz gráfica de usuario puede ser el espacio diseñado de una web para conseguir efectuar tareas con sistemas informáticos."
        />
        <Accordion
          title="2. ¿Qué es la WeCheck?"
          content="Se trata de una aplicación web para crear, usar y ver rúbricas para evaluar interfaces gráficas de usuario. El nombre hace referencia al potencial que da la plataforma permitiendo a múltiples usuarios evaluar una misma interfaz o crear nuevas rúbricas. Este hecho permite la creación de evaluaciones libres, abiertas y colaborativas que nos puede ayudar, como sociedad, a ponderar y valorar los puntos buenos y los no tan buenos de cada interfaz."
        />
        <Accordion
          title="3. ¿Qué ocurre si publico una rúbrica con mi autoría?"
          content="Desde “Mis rúbricas” tendrás el control: podrás evaluar y eliminar."
        />
        <Accordion
          title="4. ¿Puedo ver mis rúbricas siendo autor?"
          content="Sí, desde el listado general de proyectos y desde dentro de tu perfil en “Mis rúbricas”."
        />
        <Accordion
          title="5. ¿Qué debo tener en cuenta al crear una rúbrica?"
          content="Recuerda crearlas con un vocabulario respetuoso y de manera concisa."
        />
        <Accordion
          title="6. ¿Puedo aportar como anónimo?"
          content="SDe momento no, pero es una función que se tiene previsto desarrollar en un futuro."
        />
      </div>
    </>
  );
}

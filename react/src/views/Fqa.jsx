import React from "react";
import Title from "../components/Title";
import Accordion from "../components/Accordion";

export default function Fqa() {
  return (
    <>
      <Title title={"Preguntas Frecuentes"} />
      <div className="mt-8 space-y-4">
        <Accordion
          title="1. ¿Qué es la UX?"
          content="Diseño UX hace referencia a la experiencia de usuario, es decir,  a dar forma a una interfaz para mejorar nuestras experiencias y relaciones como usuario cuando estamos navegando en ella."
        />
        <Accordion
          title="2. ¿Para qué sirve el UX?"
          content="Sirve para ayudar y fidelizar al usuario ya que, si la página es sencilla y rápida, el usuario permanecerá en ella por más tiempo."
        />
        <Accordion
          title="3. ¿Qué son rúbricas en UX?"
          content="Las rúbricas son herramientas que ayudan a evaluar la  interfaz de  una web y nos permiten crear críticas constructivas."
        />
        <Accordion
          title="4. ¿Puedo replicar rúbricas?"
          content="Sí, ya seas usuario registrado como usuario anónimo."
        />
        <Accordion
          title="5. ¿Puedo aportar como anónimo?"
          content="Sí, pero ten en cuenta que, una vez publicadas tus rúbricas, emprenden su camino en libertad y ya no podrás modificarlas o eliminarlas, tampoco podrás llevar el control de tus aportes o estadísticas."
        />
        <Accordion
          title="6. ¿Puedo ver mi rúbrica siendo anónimo?"
          content="Sí, desde el listado general de rúbricas pero, recuerda, no tendrás un registro propio de tus aportes."
        />
        <Accordion
          title="7. ¿Qué ocurre si publico una rúbrica con mi autoría?"
          content="Desde tu dashboard tendrás el control: podrás evaluar, modificar, eliminar, ver estadísticas."
        />
        <Accordion
          title="8. ¿Puedo ver mis rúbricas siendo autor?"
          content="Sí, desde el listado general de rúbricas y desde dentro de tu perfil."
        />
        <Accordion
          title="9. ¿Qué debo tener en cuenta al crear una rúbrica?"
          content="Recuerda crearlas con un vocabulario respetuoso y de manera concisa."
        />
      </div>
    </>
  );
}

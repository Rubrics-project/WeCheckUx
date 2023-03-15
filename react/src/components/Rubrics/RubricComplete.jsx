import icon from "../../assets/doubleCheck.svg";
import arrow from "../../assets/arrowIcon.svg";
// import Dimensión from "./Dimension";

export default function Rubric({
  title,
  rubric_description,
  rubric_author,
  rubric_date,
  project_title,
  project_url,
  project_description,
  dimension_title,
  dimension_description,
  criteria_description,
}) {
  return (
    <div className="border rounded border-color-blue-p my-14 overflow-hidden">
      <div className="flex bg-color-grey-bg p-2">
        <img className=" mx-2" src={icon} alt="Icono de doble check" />
        <h2 className="font-latocustom font-bold text-lg ml-1">{title}</h2>
      </div>
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Descripción:
        </h4>
        <p className="font-opencustom text-xs">{rubric_description}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Autor/a:
        </h4>
        <p className="font-opencustom text-xs">{rubric_author}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Fecha de creación:
        </h4>
        <p className="font-opencustom text-xs">{rubric_date}</p>
      </div>
      <hr className=" border-color-blue-p border-t" />
      <div className="space-y-1 pt-3">
        <h4 className="mx-3 font-opencustom text-xs text-color-grey-title ">
          Proyecto:
        </h4>
        <div className="flex bg-color-grey-bg p-2">
          <h2 className="font-latocustom font-bold text-lg ml-1">
            {project_title}
          </h2>
        </div>
      </div>
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">URL:</h4>
        <p className="font-opencustom text-xs">{project_url}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Descripción:
        </h4>
        <p className="font-opencustom text-xs">{project_description}</p>
      </div>
      {/* <Dimensión
        dimension_title={dimension_title}
        dimension_description={dimension_description}
      /> */}
      <>
        {/* Dimension traerla como un componente? */}
        <hr className=" border-color-blue-p border-t" />
        <div className="px-3 space-y-1 py-3">
          <h4 className="font-opencustom text-xs text-color-grey-title ">
            Dimensión:
          </h4>
          <p className="font-opencustom text-xs font-bold">{dimension_title}</p>
        </div>
        <hr className=" border-color-grey-bg border-2" />
        <div className="px-3 space-y-1 py-3">
          <h4 className="font-opencustom text-xs text-color-grey-title ">
            Descripción de la dimensión:
          </h4>
          <p className="font-opencustom text-xs">{dimension_description}</p>
        </div>
        <hr className=" border-color-grey-bg border-2" />
        <div className="space-y-1 py-3">
          <h4 className="pl-3 font-opencustom text-xs text-color-grey-title ">
            Criterio a evaluar:
          </h4>
          <div className="flex bg-color-grey-bg p-3">
            <p className="font-opencustom text-xs">{criteria_description}</p>
          </div>
          <div className="flex bg-color-grey-bg p-3 justify-center">
            <img src={arrow} alt="Icono flecha desplegable" />
          </div>
        </div>
      </>
    </div>
  );
}

import React from "react";
import icon from "../../assets/doubleCheck.svg";

export default function RubricUser({
  title,
  rubric_description,
  project_title,
  rubric_date,
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
      <div className="pt-3 px-3 bg-color-grey-bg">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Proyecto:
        </h4>
        <h2 className="font-latocustom font-bold text-lg pb-3">
          {project_title}
        </h2>
      </div>
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Fecha de creación:
        </h4>
        <p className="font-opencustom text-xs">{rubric_date}</p>
      </div>
    </div>
  );
}

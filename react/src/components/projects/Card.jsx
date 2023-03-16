import React from "react";
import icon from "../../assets/doubleCheck.svg";
import eyeIcon from "../../assets/eyeIcon.svg";

export default function RubricProject({
  title,
  rubric_description,
  rubric_author,
  rubric_date,
}) {
  return (
    <div className="border rounded border-color-blue-p my-14 overflow-hidden">
      <div className="flex justify-between bg-color-grey-bg p-4">
        <div className= "flex row">
          <img className="w-12" src={icon} alt="Icono de doble check" />
          <div className= "flex-column">
            <h2 className="font-latocustom font-bold text-lg ml-1">{title}</h2>
            {/*  Añadir enlace a la db de {website} */}
            <p className= "font-latocustom text-xs text-color-blue-p ml-1">www.proyecto.com{}</p>
          </div>
          </div>
        <img className="m-2 w-7" src={eyeIcon} alt="Icono ver" />
      </div>
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Descripción:
        </h4>
        <p className="font-opencustom text-xs">{rubric_description}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
      <div className="grid grid-cols-2 divide-x py-3 text-center">
       {/*  Añadir enlace a la db para insertar el número total*/}
        <button className="font-opencustom font-bold text-sm text-color-grey-title">Rúbricas: {}</button>
        <button className="font-opencustom font-bold text-sm text-color-blue-p">Evaluaciones: {}</button>
      </div>
      
    </div>
  );
}

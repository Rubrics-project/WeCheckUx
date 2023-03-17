import React from "react";
import icon from "../../assets/doubleCheck.svg";

export default function RubricProject({
  rubric_title,
  rubric_description,
  rubric_author,
  rubric_date,
}) {
  return (
    <div className="border rounded border-color-blue-p my-14 overflow-hidden">
      <div className="flex bg-color-grey-bg p-2">
        <img className=" mx-2" src={icon} alt="Icono de doble check" />
        <h2 className="font-latocustom font-bold text-lg ml-1">
          {rubric_title}
        </h2>
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
    </div>
  );
}

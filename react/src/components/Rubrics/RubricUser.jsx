import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/doubleCheck.svg";
import eye from "../../assets/eyeIconBlue.svg";
import edit from "../../assets/edit.svg";
import erase from "../../assets/deleteIcon.svg";
import ButtonSecondaryIconBlue from "../Buttons/ButtonSecondaryIconBlue";
import ButtonSecondaryIconData from "../Buttons/ButtonSecondaryIconData";

export default function RubricUser({
  rubric_title,
  rubric_description,
  project_title,
  rubric_date,
  rubric_id,
}) {
  return (
    <>
      <div className="flex justify-center gap-4 mt-9 ">
        <ButtonSecondaryIconBlue
          text={"Editar"}
          src={edit}
          alt={"Icono check"}
        />
        <ButtonSecondaryIconData
          text={"Borrar"}
          src={erase}
          alt={"Icono de ojo"}
        />
      </div>
      <div className="border rounded border-color-blue-p my-4 overflow-hidden">
        <div className="grid grid-cols-9 gap-4 justify-between bg-color-grey-bg p-2">
          <div className="col-span-8 flex bg-color-grey-bg p-2">
            <img className="mx-2" src={icon} alt="Icono de doble check" />
            <h2 className="font-latocustom font-bold text-lg ml-1">
              {rubric_title}
            </h2>
          </div>
          <Link
            className="col-span-1 flex align-middle mr-3"
            to={`/mis-rubricas/${rubric_id}`}
          >
            <img src={eye} alt="Icono de ojo" />
          </Link>
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
    </>
  );
}

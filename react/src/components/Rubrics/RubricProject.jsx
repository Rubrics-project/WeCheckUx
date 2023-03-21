import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/doubleCheck.svg";
import eye from "../../assets/eyeIconBlue.svg";
import eyeGrey from "../../assets/eyeIconGrey.svg";
import evaluate from "../../assets/Evaluate.svg";
import ButtonSecondaryIconBlue from "../Buttons/ButtonSecondaryIconBlue";
import ButtonSecondaryIconData from "../Buttons/ButtonSecondaryIconData";

export default function RubricProject({
  rubric_title,
  rubric_description,
  rubric_author,
  rubric_date,
  project_id,
  rubric_id,
}) {
  return (
    <>
      <div className="flex justify-center gap-4 mt-9 ">
        <ButtonSecondaryIconBlue
          text={"Evaluar"}
          src={evaluate}
          alt={"Icono check"}
        />
        <ButtonSecondaryIconData
          text={"Evaluaciones: 20"}
          src={eyeGrey}
          alt={"Icono de ojo"}
        />
      </div>
      <div className="border rounded border-color-blue-p my-5 overflow-hidden">
        <div className="flex justify-between bg-color-grey-bg p-2">
          <div className="flex align-middle">
            <img className=" mx-2" src={icon} alt="Icono de doble check" />
            <h2 className="font-latocustom font-bold text-lg ml-1">
              {rubric_title}
            </h2>
          </div>
          <Link
            className="flex align-middle mr-3"
            to={`/proyectos/${project_id}/rubricas/${rubric_id}`}
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
    </>
  );
}

import icon from "../../assets/doubleCheck.svg";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/rubricService";
import Dimension from "../Rubrics/Dimension";

export default function Rubric({
  rubric_title,
  rubric_description,
  rubric_author,
  rubric_date,
  project_title,
  project_url,
  project_description,
}) {
  const params = useParams();
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    getItemById(params.id)
      .then((response) => {
        setEvaluations(response.evaluations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
      {evaluations.map((evaluation, index) => (
        <Dimension
          key={index}
          dimension_title={evaluation.title}
          dimension_description={evaluation.description}
          criteria_description={evaluation.evaluation_text}
          negative_description={evaluation.negative}
          regular_description={evaluation.regular}
          suficient_description={evaluation.suficient}
          bien_description={evaluation.good}
          excelent_description={evaluation.excelent}
        />
      ))}
    </div>
  );
}

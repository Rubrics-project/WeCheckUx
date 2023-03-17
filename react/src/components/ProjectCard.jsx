import React from "react";
import icon from "../assets/doubleCheckBig.svg";
import eye from "../assets/eyeIconBlue.svg";

export default function ProjectCard({
  project_name,
  project_url,
  project_description,
  projectOnClick,
  // totalRubrics,
  // totalEvaluations,
}) {
  return (
    <div className="border rounded border-color-blue-p my-14 overflow-hidden">
      <div className="flex justify-between align-middle bg-color-grey-bg p-2">
        <div className="flex mb-2">
          <img className=" mx-2" src={icon} alt="Icono de doble check" />
          <div>
            <h2 className="font-latocustom font-bold text-lg mb-0">
              {project_name}
            </h2>
            <p className="font-opencustom text-xs text-color-blue-p mt-0">
              {project_url}
            </p>
          </div>
        </div>
        {/* <button onClick={projectOnClick}> */}
          <button>
          <img className="mr-3" src={eye} alt="Icono de ojo" />
        </button>
      </div>
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Descripción:
        </h4>
        <p className="font-opencustom text-xs">{project_description}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
      <div className="grid grid-cols-2">
        <div className="py-4 flex justify-center align-middle border-solid border-r-4 border-color-grey-bg">
          <h3 className="font-opencustom font-bold text-color-grey-title">
            Rúbricas:{" "}
            <span className="font-opencustom font-bold text-color-grey-title">
              0{/* {totalRubrics} */}
            </span>
          </h3>
        </div>
        <div className="py-4 flex justify-center align-middle">
          <h3 className="font-opencustom font-bold text-color-blue-p ">
            Evaluaciones:{" "}
            <span className="font-opencustom font-bold text-color-blue-p">
              0{/* {totalEvaluations} */}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

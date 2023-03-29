import React from "react";
import icon from "../../assets/doubleCheckBig.svg";

export default function ProjectOption({
  project_value,
  project_name,
  project_description,
}) {
  return (
    <li>
      <input
        type="checkbox"
        id="option"
        value={project_value}
        className="hidden"
      />
      <label
        for="option"
        className="inline-flex items-center justify-between w-full px-3 py-2 text-color-grey-title bg-white border rounded cursor-pointer hover:text-color-blue-p"
      >
        <div className="block">
          <div className="w-full flex text-base font-semibold">
            <img className="w-5 mr-2" src={icon} alt="Icono de doble check" />
            {project_name}
          </div>
          <div className="w-full text-xs">{project_description}</div>
        </div>
      </label>
    </li>
  );
}

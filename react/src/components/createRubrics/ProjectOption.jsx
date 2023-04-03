import React from "react";
import icon from "../../assets/doubleCheckBig.svg";

export default function ProjectOption({
  project_value,
  project_name,
  project_description,
  project_onChange,
}) {
  console.log(project_value);

  return (
    <li>
      <input
        type="radio"
        id={`option-${project_value}`}
        name="project_id"
        value={project_value}
        className="hidden peer"
        onChange={project_onChange}
      />
      <label
        htmlFor={`option-${project_value}`}
        className="font-opencustom  inline-flex items-center justify-between w-full px-3 py-2 text-color-grey-title bg-white border rounded cursor-pointer hover:text-color-blue-s  hover:border-color-blue-s peer-checked:border-color-blue-p peer-checked:text-color-blue-p peer-checked:bg-color-blue-light"
      >
        <div className="block">
          <div className="w-full flex text-sm">
            <img className="w-5 mr-2" src={icon} alt="Icono de doble check" />
            {project_name}
          </div>
          <div className="w-full text-xs">{project_description}</div>
        </div>
      </label>
    </li>
  );
}

import React, { useState } from "react";
import ButtonSecondaryIconData from "../Buttons/ButtonSecondaryIconData";
import CreateDropdown from "./CreateDropdown";
import addIconGray from "../../assets/addIconGray.svg";
import deleteIcon from "../../assets/deleteIcon.svg";

export default function DimensionForm() {
  const [title, setEvaluationTitle] = useState("");
  const [description, setEvaluationDescription] = useState("");
  
  const handleTitleChange = (e) => {
    setEvaluationTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEvaluationDescription(e.target.value);
  };




  return (
    <>
      <label htmlFor="dimension" className="font-opencustom text-xs font-bold">
        Dimensión:
      </label>
      <input
        type="text"
        id="dimension"
        name="dimension"
        value={title}
        onChange={handleTitleChange}
        placeholder="Dimensión"
        className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
      />

      <label htmlFor="description" className="font-opencustom text-xs">
        Descripción de la dimensión:
      </label>
      <textarea
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Descripción"
        className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
      />
      <CreateDropdown />
      <div className="grid w-full grid-cols-2 gap-7 mb-7 mt-5">
        <ButtonSecondaryIconData
          text={"Añadir dimensión"}
          src={addIconGray}
          alt={"Add icon"}
        />
        <ButtonSecondaryIconData
          text={"Eliminar dimensión"}
          src={deleteIcon}
          alt={"Add icon"}
        />
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function DimensionForm() {
  const [title, setEvaluationTitle] = useState("");
  const [description, setEvaluationDescription] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setEvaluationTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setEvaluationDescription(e.target.value);
  };

  return (
    <>
      <hr className=" border-color-grey-bg border-2" />
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
    </>
  );
}

import React from "react";

export default function CreateRubricForm({
  title_value,
  title_onChange,
  description_value,
  description_onChange,
}) {
  return (
    <>
      <div className="px-3">
        <label htmlFor="title" className="font-latocustom text-base font-bold">
          <h1 className="font-latocustom font-bold text-sm mt-3">Título:</h1>
        </label>
        <input
          required
          id="title"
          name="title"
          type="text"
          value={title_value}
          onChange={title_onChange}
          placeholder="Título"
          className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs my-4"
        />

        <label htmlFor="description" className="font-opencustom text-xs">
          Descripción de la rúbrica:
        </label>
        <textarea
          required
          id="description"
          name="description"
          type="text"
          value={description_value}
          onChange={description_onChange}
          placeholder="Descripción de la rúbrica"
          className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom  text-xs mt-2 mb-6"
        />
      </div>
    </>
  );
}

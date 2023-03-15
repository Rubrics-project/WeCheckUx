import React from "react";

export default function Dimensión(dimension_title, dimension_description) {
  return (
    <>
      <hr className=" border-color-blue-p border" />
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Dimensión:
        </h4>
        <p className="font-opencustom text-xs font-bold">{dimension_title}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
      <div className="px-3 space-y-1 py-3">
        <h4 className="font-opencustom text-xs text-color-grey-title ">
          Descripción de la dimensión:
        </h4>
        <p className="font-opencustom text-xs">{dimension_description}</p>
      </div>
      <hr className=" border-color-grey-bg border-2" />
    </>
  );
}

import React from "react";

export default function ProjectHeaderDetail({
  project_url,
  project_description,
}) {
  return (
    <div className="w-full mt-3">
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
      <hr className=" border-color-grey-bg border-2" />
    </div>
  );
}

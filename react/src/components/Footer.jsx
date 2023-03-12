import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full mt-10 absolute bottom-0">
      <div className="bg-gradient-final h-1"></div>
      <a
        href="https://github.com/Rubrics-project/WeCheckUx"
        className="flex  justify-between m-4"
      >
        <p className="font-opencustom text-xs">
          ¿Quieres contribuir a este proyecto?
        </p>

        <div className="flex mr-3">
          <p className="font-opencustom text-color-blue-p text-xs">GitHub</p>
          <img
            className="ml-2"
            src="../../public/assets/gitHubIconBlue.svg"
            alt="Github icon"
          />
        </div>
      </a>
    </div>
  );
}

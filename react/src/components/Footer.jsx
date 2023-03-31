import React from "react";
import githubBlue from "../assets/gitHubIconBlue.svg";

export default function Footer() {
  return (
    <div className="flex flex-col w-full mt-auto">
      <div className="bg-gradient-final h-1"></div>
      <a
        href="https://github.com/Rubrics-project/WeCheckUx"
        className="flex justify-between sm:justify-end m-4"
      >
        <p className="font-opencustom text-xs sm:mr-3">
          ¿Quieres contribuir al código del proyecto?
        </p>

        <div className="flex mr-3">
          <p className="font-opencustom text-color-blue-p text-xs">GitHub</p>
          <img className="ml-2" src={githubBlue} alt="Github icon" />
        </div>
      </a>
    </div>
  );
}

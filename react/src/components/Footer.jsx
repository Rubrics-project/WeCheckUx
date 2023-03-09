import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-screen h-12">
      <a href="https://github.com/Rubrics-project/WeCheckUx" className="flex">
        <p>¿Quieres contribuir a este proyecto?</p>

        <img src="../../public/assets/gitHubIconBlue.svg" alt="Github icon" />
      </a>

      <div className="bg-gradient-final bg-no-repeat h-1 w-full"></div>
    </div>
  );
}

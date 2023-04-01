import React from "react";
import infoIcon from "../assets/infoCircle.svg";

export default function InformationBox({ text }) {
  return (
    <div class="flex justify-center sm:align-center">
      <div className="flex flex-row items-center p-3 bg-color-blue-light bg-opacity-20 w-full sm:w-2/5 rounded mt-6">
        <img className="mr-3" src={infoIcon} alt="information icon" />
        <p className="font-opencustom text-xs text-color-blue-p ">{text}</p>
      </div>
    </div>
  );
}

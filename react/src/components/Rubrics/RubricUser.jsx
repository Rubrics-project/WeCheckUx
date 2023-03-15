import React from "react";
import icon from "../../assets/doubleCheck.svg";

export default function RubricUser({ title }) {
  return (
    <div>
      <div className="flex bg-color-grey-bg">
        <img src={icon} alt="Icono de doble check" />
        <h2 className="font-latocustom font-bold text-lg ml-3 ">{title}</h2>
      </div>
    </div>
  );
}

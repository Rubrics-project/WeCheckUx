import React from "react";
import { useState } from "react";
import arrow from "../../assets/arrowIcon.svg";

export default function Dimensión({
  dimension_title,
  dimension_description,
  criteria_description,
  negative_description,
  regular_description,
  suficient_description,
  bien_description,
  excelent_description,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <hr className=" border-color-blue-p border-t" />
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
      <div className="space-y-1 py-3">
        <h4 className="pl-3 font-opencustom text-xs text-color-grey-title ">
          Criterio a evaluar:
        </h4>
        <div className="flex bg-color-grey-bg p-3">
          <p className="font-opencustom text-xs">{criteria_description}</p>
        </div>
        <div
          className="flex bg-color-grey-bg p-3 justify-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <img src={arrow} alt="Icono flecha desplegable" />
        </div>
        {isOpen && (
          <div>
            <div className=" space-y-1">
              <h4 className="px-3 font-opencustom text-xs text-color-blue-p  ">
                Negativo:
              </h4>
              <hr className=" border-color-grey-bg border-2" />
              <p className="px-3 pt-1 pb-3 font-opencustom text-xs">
                {negative_description}
              </p>
            </div>
            <div className=" space-y-1">
              <hr className=" border-color-grey-bg border-2" />
              <h4 className="px-3 font-opencustom text-xs text-color-blue-p  ">
                Regular:
              </h4>
              <hr className=" border-color-grey-bg border-2" />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {regular_description}
              </p>
            </div>
            <div className=" space-y-1">
              <hr className=" border-color-grey-bg border-2" />
              <h4 className="px-3 font-opencustom text-xs text-color-blue-p  ">
                Suficiente:
              </h4>
              <hr className=" border-color-grey-bg border-2" />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {suficient_description}
              </p>
            </div>
            <div className=" space-y-1">
              <hr className=" border-color-grey-bg border-2" />
              <h4 className="px-3 font-opencustom text-xs text-color-blue-p  ">
                Bien:
              </h4>
              <hr className=" border-color-grey-bg border-2" />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {bien_description}
              </p>
            </div>
            <div className=" space-y-1">
              <hr className=" border-color-grey-bg border-2" />
              <h4 className="px-3 font-opencustom text-xs text-color-blue-p  ">
                Excelente:
              </h4>
              <hr className=" border-color-grey-bg border-2" />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {excelent_description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

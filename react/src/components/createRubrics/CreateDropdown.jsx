import React from "react";
import { useState } from "react";
import arrow from "../../assets/arrowIcon.svg";

export default function CreateDropdown({
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


      <h4 className="font-opencustom text-xs text-color-grey-title ">
          Criterio a evaluar:
        </h4>
      <div className="space-y-1 py-3">
        <div className="flex bg-color-grey-bg p-2">
        <input
            type="text"
            id="evaluation"
            name="evaluation"
            placeholder="Criterio que ha de ser evaluado"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2"
          />
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
            <div className=" space-y-1 mt-2">
              <lable for="negative" className="font-opencustom text-xs">
                Negativo:
              </lable>
              <input
                type="taxt"
                id="negative"
                name="negative"
                placeholder="Descripción del nivel"
                className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
              />
              <p className="px-3 pt-1 pb-3 font-opencustom text-xs">
                {negative_description}
              </p>
              <hr className="border-color-grey-bg border-2"/>
            </div>
            <div className="space-y-1 mt-2">
              <lable for="regular" className="font-opencustom text-xs">
                Regular:
              </lable>
              <input
                type="text"
                id="regular"
                name="regular"
                placeholder="Descripción del nivel"
                className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
              />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {regular_description}
              </p>
              <hr className="border-color-grey-bg border-2"/>
            </div>
            <div className="space-y-1 mt-2">
              <lable for="suficient" className="font-opencustom text-xs">
                Suficiente:
              </lable>
              <input
                type="text"
                id="suficiente"
                name="suficiente"
                placeholder="Descripción del nivel"
                className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
              />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {suficient_description}
              </p>
              <hr className="border-color-grey-bg border-2"/>
            </div>
            <div className="space-y-1 mt-2">
              <lable for="good" className="font-opencustom text-xs">
                Bien:
              </lable>
              <input
                type="text"
                id="suficiente"
                name="good"
                placeholder="Descripción del nivel"
                className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
              />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {bien_description}
              </p>
              <hr className="border-color-grey-bg border-2"/>
            </div>
            <div className="space-y-1 mt-2">
              <lable for="excelent" className="font-opencustom text-xs">
                Excelente:
              </lable>
              <input
                type="text"
                id="excelent"
                name="excelent"
                placeholder="Descripción del nivel"
                className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
              />
              <p className="px-3 py-1 pb-3 font-opencustom text-xs">
                {excelent_description}
              </p>
              <hr className="border-color-grey-bg border-2"/>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

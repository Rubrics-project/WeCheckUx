import React from "react";
import { useState } from "react";
import arrow from "../../assets/arrowIcon.svg";

export default function DimensionForm({
  title_value,
  title_onChange,
  description_value,
  description_onChange,
  evaluation_text_value,
  evaluation_text_onChange,
  negative_value,
  negative_onChange,
  regular_value,
  regular_onChange,
  suficient_value,
  suficient_onChange,
  good_value,
  good_onChange,
  excelent_value,
  excelent_onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <hr className=" border-color-grey-bg border-2 mb-2" />
      <div className="px-3">
        <label
          htmlFor="dimension"
          className="font-opencustom text-xs font-bold"
        >
          Dimensión:
        </label>
        <input
          required
          type="text"
          id="dimension"
          name="dimension"
          value={title_value}
          onChange={title_onChange}
          placeholder="Dimensión"
          className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-4"
        />

        <label htmlFor="description" className="font-opencustom text-xs">
          Descripción de la dimensión:
        </label>

        <textarea
          required
          type="text"
          id="description"
          name="description"
          value={description_value}
          onChange={description_onChange}
          placeholder="Descripción"
          className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2"
        />
      </div>
      <div className="space-y-1 py-3">
        <label
          htmlFor="evaluation_text"
          className="font-opencustom text-xs text-color-grey-title ml-3"
        >
          Criterio a evaluar:
        </label>
        <div className="flex bg-color-grey-bg p-3">
          <textarea
            required
            type="text"
            id="evaluation_text"
            name="evaluation_text"
            value={evaluation_text_value}
            onChange={evaluation_text_onChange}
            placeholder="Criterio que ha de ser evaluado"
            className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs"
          />
        </div>
        <div
          className="flex bg-color-grey-bg p-3 justify-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <img src={arrow} alt="Icono flecha desplegable" />
        </div>
        {isOpen && (
          <div>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="negative"
                  className="font-opencustom font-light text-xs mx-3"
                >
                  Negativo:
                </label>
                <hr className="border-color-grey-bg border-2" />
              </div>
              <div className="px-3">
                <input
                  required
                  type="taxt"
                  id="negative"
                  name="negative"
                  value={negative_value}
                  onChange={negative_onChange}
                  placeholder="Descripción del nivel"
                  className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs"
                />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div>
                <hr className="border-color-grey-border border-0.5 " />
                <label
                  htmlFor="regular"
                  className="font-opencustom text-xs font-light mx-3"
                >
                  Regular:
                </label>
                <hr className="border-color-grey-bg border-2" />
              </div>
              <div className="px-3">
                <input
                  required
                  type="text"
                  id="regular"
                  name="regular"
                  value={regular_value}
                  onChange={regular_onChange}
                  placeholder="Descripción del nivel"
                  className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs"
                />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div>
                <hr className="border-color-grey-border border-0.5 " />
                <label
                  htmlFor="suficient"
                  className="font-opencustom text-xs font-light mx-3"
                >
                  Suficiente:
                </label>
                <hr className="border-color-grey-bg border-2" />
              </div>
              <div className="px-3">
                <input
                  required
                  type="text"
                  id="suficient"
                  name="suficient"
                  value={suficient_value}
                  onChange={suficient_onChange}
                  placeholder="Descripción del nivel"
                  className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs"
                />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div>
                <hr className="border-color-grey-border border-0.5 " />
                <label
                  htmlFor="good"
                  className="font-opencustom text-xs font-light mx-3"
                >
                  Bien:
                </label>
                <hr className="border-color-grey-bg border-2" />
              </div>
              <div className="px-3">
                <input
                  required
                  type="text"
                  id="good"
                  name="good"
                  value={good_value}
                  onChange={good_onChange}
                  placeholder="Descripción del nivel"
                  className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs"
                />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div>
                <hr className="border-color-grey-border border-0.5" />
                <label
                  htmlFor="excelent"
                  className="font-opencustom text-xs font-light mx-3"
                >
                  Excelente:
                </label>
                <hr className="border-color-grey-bg border-2" />
              </div>
              <div className="px-3">
                <input
                  required
                  type="text"
                  id="excelent"
                  name="excelent"
                  value={excelent_value}
                  onChange={excelent_onChange}
                  placeholder="Descripción del nivel"
                  className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs"
                />
              </div>
            </div>
            <hr className="border-color-grey-border border-0.5 mt-5 " />
          </div>
        )}
      </div>
    </>
  );
}

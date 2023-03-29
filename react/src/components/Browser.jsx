import React from "react";
import browserIcon from "../assets/browserIcon.svg";

export default function Browser(props) {
  const { search, handleChange } = props;

  return (
    <form className="my-5 mb-50 flex justify-center w-full">
      <div className="flex relative p-0.5 bg-color-grey-border rounded w-full sm:max-w-lg">
        <input
          className="flex p-2 w-full"
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleChange}
        />
        <button className="flex items-center p-0.5 bg-white align-center">
          <img
            className="fill-current w-6"
            src={browserIcon}
            alt="Browser Icon"
          ></img>
        </button>
      </div>
    </form>
  );
}

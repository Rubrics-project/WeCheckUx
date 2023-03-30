import React from "react";

export default function ButtonSecondary({ text, onClick }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center align-middle font-opencustom text-color-grey-title font-bold bg-color-grey-bg   px-4 py-2 border-color-grey-border  border border-solid rounded-md "
      onClick={onClick}
    >
      {text}
    </button>
  );
}

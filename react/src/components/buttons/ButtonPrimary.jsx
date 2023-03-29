import React from "react";

export default function ButtonPrimary({ text }) {
  return (
    <button
      className="font-opencustom text-color-blue-p font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border  border border-solid rounded-md"
      type="submit"
    >
      {text}
    </button>
  );
}

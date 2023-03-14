import React from "react";

export default function ButtonPrimary({ text }) {
  return (
    <button
      className="font-opencustom text-color-blue-p font-bold text-base px-12 py-2 bg-color-grey-bg border border-color-grey-border-btn border-solid rounded-md"
      type="submit"
    >
      {text}
    </button>
  );
}

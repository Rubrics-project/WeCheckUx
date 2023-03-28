import React from "react";

export default function ButtonSecondaryIconData({ text, src, alt, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex justify-center items-center align-middle font-opencustom text-xs text-color-grey-title font-bold bg-color-grey-bg px-2 py-0.5 border-color-grey-border border border-solid rounded-md "
    >
      <img className="mr-2" src={src} alt={alt} />
      {text}
    </button>
  );
}

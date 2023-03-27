import React from "react";

export default function ButtonSecondaryIconData({ text, src, alt, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center align-middle font-opencustom text-sm text-color-grey-title font-bold bg-color-grey-bg px-2 py-0.5 border-color-grey-border border border-solid rounded-md "
    >
      <img className="mr-2" src={src} alt={alt} />
      {text}
    </button>
  );
}

import React from "react";

export default function ButtonSecondaryIconBlue({ text, src, alt }) {
  return (
    <button className="flex items-center font-opencustom text-sm text-color-blue-s font-bold bg-color-grey-bg px-4 py-0.5 border-color-grey-border border border-solid rounded-md sm:w-26 sm:h-7 w-24">
      <img className="mr-2" src={src} alt={alt}/>
      {text}
    </button>
  );
}

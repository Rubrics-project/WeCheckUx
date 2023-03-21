import React from "react";
import { Link } from "react-router-dom";

export default function ButtonPrimaryIconBig({ text, src, alt, to }) {
  return (
    <Link
      className="font-opencustom text-color-blue-s font-bold text-base px-2.5 py-2 bg-color-grey-bg border border-color-grey-border-btn border-solid rounded-md flex items-center"
      to={to}
    >
      <img className="mr-2" src={src} alt={alt} />
      {text}
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function ButtonSecondary({ text, route_to }) {
  return (
    <Link
      className="flex justify-center items-center align-middle font-opencustom text-color-grey-title font-bold bg-color-grey-bg   px-12 py-2 border-color-grey-border  border border-solid rounded-md "
      to={route_to}
    >
      {text}
    </Link>
  );
}

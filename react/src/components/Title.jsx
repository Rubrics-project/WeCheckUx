import React from "react";

export default function Title({ title }) {
  return (
    <>
      <h1 className="font-latocustom font-bold text-xl mt-14">{title}</h1>
      <hr className="w-full border-color-grey-border" />
    </>
  );
}

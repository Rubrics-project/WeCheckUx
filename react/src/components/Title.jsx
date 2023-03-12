import React from "react";

export default function Title({ title }) {
  return (
    <>
      <h1 className="font-latocustom font-bold text-xl mt-14">{title}</h1>
      <div className="w-full border border-solid border-color-grey-border"></div>
    </>
  );
}

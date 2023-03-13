import React from "react";

export default function Title({ title }) {
  return (
    <>
      <h1 className="font-latocustom font-bold text-xl mt-14">{title}</h1>
      <hr class="w-full border-color-grey-border" />
    </>
  );
}

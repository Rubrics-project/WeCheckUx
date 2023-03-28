import React from "react";
import addIconGray from "../../assets/addIconGraySmall.svg";
import deleteIcon from "../../assets/deleteIconGraySmall.svg";
import ButtonSecondaryIconData from "../Buttons/ButtonSecondaryIconData";

export default function CreateButtonsDimension({
  onClickAddDimension,
  onClickDeleteDimension,
}) {
  return (
    <div className="grid w-full grid-cols-2 gap-5 mb-7 mt-3 px-3">
      <ButtonSecondaryIconData
        text={"Añadir dimensión"}
        src={addIconGray}
        alt={"Añadir dimensión"}
        onClick={onClickAddDimension}
      />
      <ButtonSecondaryIconData
        text={"Eliminar dimensión"}
        src={deleteIcon}
        alt={"Eliminar dimensión"}
        onClick={onClickDeleteDimension}
      />
    </div>
  );
}

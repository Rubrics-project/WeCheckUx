import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/doubleCheck.svg";
import checkBig from "../../assets/doubleCheckBig.svg";
import eye from "../../assets/eyeIconBlue.svg";
import edit from "../../assets/edit.svg";
import erase from "../../assets/deleteIcon.svg";
import ButtonSecondaryIconBlue from "../Buttons/ButtonSecondaryIconBlue";
import ButtonSecondaryIconData from "../Buttons/ButtonSecondaryIconData";
import { deleteItem } from "../../services/rubricService";
import Swal from "sweetalert2";

export default function RubricUser({
  rubric_title,
  rubric_description,
  project_title,
  rubric_date,
  rubric_id,
}) {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    async function handleDelete() {
      try {
        const response = await deleteItem(rubric_id);
      } catch (error) {
        console.error(error);
      }
    }

    if (deleted) {
      handleDelete();
    }
  }, [deleted, rubric_id]);

  const handleDeleteRubric = useCallback(async () => {
    try {
      setDeleted(true);
      await Swal.fire({
        title: `<div className="flex flex-row justify-center bg-color-grey-bg pb-10" style="display: flex;justify-content: center;padding-bottom: 20px;"><img className="flex" src="${checkBig}" alt="Icono doble check" /><h3 className="flex font-opencustom text-xl font-bold text-color-bck">ALERTA</h3></div>`,
        text: "La rúbrica ha sido eliminada.",
        showConfirmButton: false,
        timer: 1000,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
      Swal.fire("¡Error!", "No se pudo eliminar la rúbrica.", "error");
    }
  }, []);

  const handleConfirmDelete = () => {
    Swal.fire({
      title: `<div className="flex flex-row justify-center bg-color-grey-bg pb-10" style="display: flex;justify-content: center;padding-bottom: 20px;"><img className="flex" src="${checkBig}" alt="Icono doble check" /><h3 className="flex font-opencustom text-xl font-bold text-color-bck">ALERTA</h3></div>`,
      text: "Esta acción eliminará tu rúbrica. ¿Deseas continuar?",
      showCancelButton: true,
      confirmButtonColor: "#F6F6F6",
      cancelButtonColor: "#F6F6F6",
      confirmButtonText:
        "<span style='color: #545454;font-weight: 400;'>Sí</span>",
      cancelButtonText:
        "<span style='color: #545454;font-weight: 400;'>No</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteRubric();
      }
    });
  };

  return (
    <>
      <div className="flex justify-center gap-4 mt-9 ">
        <ButtonSecondaryIconBlue
          text={"Editar"}
          src={edit}
          alt={"Icono check"}
        />
        <ButtonSecondaryIconData
          text={"Borrar"}
          src={erase}
          alt={"Icono de ojo"}
          onClick={handleConfirmDelete}
        />
      </div>
      <Link to={`/mis-rubricas/${rubric_id}`}>
        <div className="border rounded border-color-blue-p my-4 overflow-hidden">
          <div className="grid grid-cols-7 gap-4 justify-between bg-color-grey-bg p-2">
            <div className="col-span-6 flex bg-color-grey-bg p-2">
              <img className="mx-2" src={icon} alt="Icono de doble check" />
              <h2 className="font-latocustom font-bold text-lg ml-1">
                {rubric_title}
              </h2>
            </div>
            <div
              className="col-span-1 flex align-middle mr-3"
              to={`/mis-rubricas/${rubric_id}`}
            >
              <img src={eye} alt="Icono de ojo" />
            </div>
          </div>
          <div className="px-3 space-y-1 py-3">
            <h4 className="font-opencustom text-xs text-color-grey-title ">
              Descripción:
            </h4>
            <p className="font-opencustom text-xs">{rubric_description}</p>
          </div>
          <div className="pt-3 px-3 bg-color-grey-bg">
            <h4 className="font-opencustom text-xs text-color-grey-title ">
              Proyecto:
            </h4>
            <h2 className="font-latocustom font-bold text-lg pb-3">
              {project_title}
            </h2>
          </div>
          <div className="px-3 space-y-1 py-3">
            <h4 className="font-opencustom text-xs text-color-grey-title ">
              Fecha de creación:
            </h4>
            <p className="font-opencustom text-xs">{rubric_date}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

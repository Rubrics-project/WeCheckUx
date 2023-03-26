import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/doubleCheck.svg";
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
  const deleteRubricFunction = useCallback(async () => {
    try {
      const response = await deleteItem(rubric_id);
      console.log("rubric data id delete:", response.data.rubrics.rubric_id);
    } catch (error) {
      console.error(error);
    }
  }, [rubric_id]);

  const handleDeleteRubric = useCallback(() => {
    Swal.fire({
      title: "¿Está seguro de que desea eliminar esta rúbrica?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, elimínalo!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRubricFunction();
          Swal.fire("¡Eliminado!", "La rúbrica ha sido eliminada.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire("¡Error!", "No se pudo eliminar la rúbrica.", "error");
        }
      }
    });
  }, [deleteRubricFunction]);

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
          onClick={handleDeleteRubric}
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
            <Link
              className="col-span-1 flex align-middle mr-3"
              to={`/mis-rubricas/${rubric_id}`}
            >
              <img src={eye} alt="Icono de ojo" />
            </Link>
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

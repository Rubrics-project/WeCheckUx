import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import InformationBox from "../components/InformationBox";
import Title from "../components/Title";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ProjectHeaderDetail from "../components/projects/ProjectHeaderDetail";
import CreateDropdown from "../components/createRubrics/CreateDropdown";
import addIconGray from "../assets/addIconGray.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import logo from "../assets/logo.svg";
import ButtonSecondaryIconData from "../components/Buttons/ButtonSecondaryIconData";
import { useEffect } from "react";
import swal from 'sweetalert2';




export default function Create() {

  useEffect(() => {
    showAlert();
  }, []);

  const showAlert = () => {
    Swal.fire({
      imageUrl: logo,
      imageHeight: 100,
      imageWidth: 100,
      imageAlt: 'logo',
      title: "ALERTA",
      text: "Esta acción eliminará tu rúbrica. <br> ¿Deseas continuar?",
      showDenyButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'green',
      denyButtonText: 'No',
      denyButtonColor: 'grey',
      position: "center",
    }).then(response => {
      if(response.isConfirmed){
        Swal.fire('La rúbrica ha sido eliminada.');
      }
    })
  }

  const { userToken } = userAuthContext();
  if (!userToken) {
    return <Navigate to="/acceso" />;
  }

  return (
    <>
      <form action="#" method="post" id="create" className="font-latocustom font-boldmt-2 space-y-1">
        <Title
          title={"Google"} />

        <ProjectHeaderDetail
          project_url={'www.google.com'}
          project_description={'Lorem ipsum'}
        />

        <InformationBox
          text={"Crea una rúbrica para que tú u otras personas la podáis usar para evaluar la experiencia de usuario de una web.”."
          }
        />

        <div className="border rounded border-color-blue-p p-1.5">
          <label for="title" className="font-opencustom text-base font-bold">
            <h1 className="font-latocustom font-bold text-sm mt-3">Título:</h1>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Título"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
          />

          <label for="description" className="font-opencustom text-xs mt-3">
            Descripción de la rúbrica:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Descripción de la rúbrica"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom  text-xs mt-2 mb-6"
          />

          <label for="dimension" className="font-opencustom text-xs font-bold">
            Dimensión:
          </label>
          <input
            type="text"
            id="dimension"
            name="dimension"
            placeholder="Dimensión"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
          />

          <label for="description" className="font-opencustom text-xs">
            Descripción de la dimensión:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Descripción"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-6"
          />
          <CreateDropdown />
          <div className="grid w-full grid-cols-2 gap-7 mb-7 mt-5">
            <ButtonSecondaryIconData
              text={"Añadir dimensión"}
              src={addIconGray}
              alt={"Add icon"}
            />
            <ButtonSecondaryIconData
              text={"Eliminar dimensión"}
              src={deleteIcon}
              alt={"Add icon"}
            />
          </div>
        </div>
        <div>
          <div className="mt-7 grid w-full grid-cols-2 gap-7">
            <ButtonPrimary text={"Guardar"} />
            <ButtonSecondary text={"Cancelar"} />
          </div>
        </div>
      </form>
    </>
  );
}

import React, { useEffect, useState } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import InformationBox from "../components/InformationBox";
import Title from "../components/Title";
import { Navigate, useParams } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ProjectHeaderDetail from "../components/projects/ProjectHeaderDetail";
import DimensionForm from "../components/createRubrics/DimensionForm";
import { getItemById } from "../services/projectsService";

export default function Create() {
  // Pasar currentUser en autor
  const { userToken, currentUser } = userAuthContext();
  const params = useParams();
  // console.log(params.id);
  const [project, setProject] = useState([]);

  if (!userToken) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemById(params.id);
        setProject(response);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Title title={project.name} />

      <ProjectHeaderDetail
        project_url={project.url}
        project_description={project.description}
      />
      <div className="my-5">
        <InformationBox
          text={
            "Crea una rúbrica para que tú u otras personas la podáis usar para evaluar la experiencia de usuario de una web."
          }
        />
      </div>
      <form action="#" method="post" id="create" className="space-y-1">
        <div className="border rounded border-color-blue-p p-2">
          <label
            htmlFor="title"
            className="font-latocustom text-base font-bold"
          >
            <h1 className="font-latocustom font-bold text-sm mt-3">Título:</h1>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Título"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs my-4"
          />

          <label htmlFor="description" className="font-opencustom text-xs">
            Descripción de la rúbrica:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Descripción de la rúbrica"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom  text-xs mt-2 mb-6"
          />
          <DimensionForm />
        </div>
      </form>

      <div className="mt-7 grid w-full grid-cols-2 gap-7">
        <ButtonPrimary text={"Guardar"} />
        <ButtonSecondary text={"Cancelar"} />
      </div>
    </>
  );
}

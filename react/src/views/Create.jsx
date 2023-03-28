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
import { createItem } from "../services/rubricService";

export default function Create() {
  // Pasar currentUser en autor
  const { currentUser } = userAuthContext();
  // console.log(typeof parseInt(currentUser, 10));
  const user_id = parseInt(currentUser, 10);
  const params = useParams();
  // console.log(params.id);
  const [project, setProject] = useState({});
  const [title, setRubricTitle] = useState("");
  const [description, setRubricDescription] = useState("");
  const [project_id, setProjectId] = useState(0);

  if (!currentUser) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemById(params.id);
        setProject(response);
        setProjectId(response.id);

        console.log("id project:", typeof response.id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleTitleChange = (e) => {
    setRubricTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setRubricDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      project_id,
      user_id,
    };
    try {
      const responseCreate = await createItem(formData);
      console.log(responseCreate);
    } catch (err) {
      console.log(JSON.parse(err.request.response).msg);
    }
  };
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
      <form onSubmit={onSubmit} action="#" method="POST" className="space-y-1">
        <div className="border rounded border-color-blue-p p-2">
          <input
            className="hidden"
            type="number"
            name="project_id"
            value={project_id}
            readOnly
          />
          <input
            className="hidden"
            type="number"
            name="user_id"
            value={user_id}
            readOnly
          />
          <label
            htmlFor="title"
            className="font-latocustom text-base font-bold"
          >
            <h1 className="font-latocustom font-bold text-sm mt-3">Título:</h1>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            
            onChange={handleTitleChange}
            placeholder="Título"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs my-4"
          />

          <label htmlFor="description" className="font-opencustom text-xs">
            Descripción de la rúbrica:
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Descripción de la rúbrica"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom  text-xs mt-2 mb-6"
          />
          <DimensionForm />
        </div>
        <div className="mt-7 grid w-full grid-cols-2 gap-7">
          <ButtonPrimary text={"Guardar"} />
          <ButtonSecondary text={"Cancelar"} />
        </div>
      </form>
    </>
  );
}

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
import CreateRubricForm from "../components/createRubrics/CreateRubricForm";
import CreateDropdown from "../components/createRubrics/CreateDropdown";
import CreateButtonsDimension from "../components/createRubrics/CreateButtonsDimension";

export default function Create() {
  const { currentUser } = userAuthContext();
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
    e.preventDefault();
    setRubricTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setRubricDescription(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const onSubmitRubric = async (e) => {
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
        <div className="border rounded border-color-blue-p p-2 mb-7">
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
          <CreateRubricForm
            title_value={title}
            title_onChange={handleTitleChange}
            description_value={description}
            description_onChange={handleDescriptionChange}
          />
          <DimensionForm />
          <CreateDropdown />
          <CreateButtonsDimension
            onClickAddDimension={"funcion para añadir dimension"}
            onClickDeleteDimension={"funcion para eliminar dimesion"}
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-7">
          {/* es de type=submit */}
          <ButtonPrimary text={"Guardar"} />
          <ButtonSecondary text={"Cancelar"} route_to={"/proyectos"} />
        </div>
      </form>
    </>
  );
}

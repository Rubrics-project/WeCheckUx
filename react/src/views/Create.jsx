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
  console.log("id user:", typeof user_id, user_id);
  const params = useParams();
  // console.log(params.id);
  const [project, setProject] = useState({});
  const [project_id, setProjectId] = useState(0);
  const [title, setRubricTitle] = useState("");
  const [description, setRubricDescription] = useState("");
  const [dimensionTitle, setEvaluationDimensionTitle] = useState("");
  const [dimensionDescription, setEvaluationDimensionDescription] =
    useState("");
  const [evaluation_text, setEvaluationText] = useState("");
  const [negative, setNegative] = useState("");
  const [regular, setRegular] = useState("");
  const [suficient, setSuficient] = useState("");
  const [good, setGood] = useState("");
  const [excelent, setExcelent] = useState("");

  if (!currentUser) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemById(params.id);
        setProject(response);
        setProjectId(response.id);

        console.log("id project:", typeof response.id, response.id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleRubricTitleChange = (e) => {
    setRubricTitle(e.target.value);
  };
  const handleRubricDescriptionChange = (e) => {
    setRubricDescription(e.target.value);
  };

  const handleDimensionTitleChange = (e) => {
    setEvaluationDimensionTitle(e.target.value);
  };
  const handleDimensionDescriptionChange = (e) => {
    setEvaluationDimensionDescription(e.target.value);
  };

  const handleEvaluationTextChange = (e) => {
    setEvaluationText(e.target.value);
  };
  const handleNegativeChange = (e) => {
    setNegative(e.target.value);
  };
  const handleRegularChange = (e) => {
    setRegular(e.target.value);
  };
  const handleSuficientChange = (e) => {
    setSuficient(e.target.value);
  };
  const handleGoodChange = (e) => {
    setGood(e.target.value);
  };
  const handleExcelentChange = (e) => {
    setExcelent(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const onSubmitRubric = async (e) => {
    const formDataRubric = {
      title,
      description,
      project_id,
      user_id,
    };
    try {
      const responseCreate = await createItem(formDataRubric);
      console.log(responseCreate);
    } catch (err) {
      console.log(JSON.parse(err.request.response).msg);
    }
    // };
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
        <div className="border rounded border-color-blue-p mb-7">
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
            title_onChange={handleRubricTitleChange}
            description_value={description}
            description_onChange={handleRubricDescriptionChange}
          />
          <DimensionForm
            title_value={dimensionTitle}
            title_onChange={handleDimensionTitleChange}
            description_value={dimensionDescription}
            description_onChange={handleDimensionDescriptionChange}
          />
          <CreateDropdown
            evaluation_text_value={evaluation_text}
            evaluation_text_onChange={handleEvaluationTextChange}
            negative_value={negative}
            negative_onChange={handleNegativeChange}
            regular_value={regular}
            regular_onChange={handleRegularChange}
            suficient_value={suficient}
            suficient_onChange={handleSuficientChange}
            good_value={good}
            good_onChange={handleGoodChange}
            excelent_value={excelent}
            excelent_onChange={handleExcelentChange}
          />
          <CreateButtonsDimension
            onClickAddDimension={"funcion para añadir dimension"}
            onClickDeleteDimension={"funcion para eliminar dimesion"}
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-7">
          {/* boton de type="submit" luego tiene que llevarte a mis-rubricas */}
          <ButtonPrimary text={"Guardar"} />
          <ButtonSecondary text={"Cancelar"} route_to={"/proyectos"} />
        </div>
      </form>
    </>
  );
}

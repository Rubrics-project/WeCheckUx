import React, { useCallback, useEffect, useState } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import InformationBox from "../components/InformationBox";
import Title from "../components/Title";
import { Navigate, useParams } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ProjectHeaderDetail from "../components/projects/ProjectHeaderDetail";
import DimensionForm from "../components/createRubrics/DimensionForm";
import { getItemById } from "../services/projectsService";
import { createItemRubric } from "../services/rubricService";
import { createItemEvaluation } from "../services/evaluationService";
import CreateRubricForm from "../components/createRubrics/CreateRubricForm";
import CreateButtonsDimension from "../components/createRubrics/CreateButtonsDimension";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";
import checkBig from "../assets/doubleCheckBig.svg";

export default function Create() {
  const { currentUser } = userAuthContext();
  const user_id = parseInt(currentUser, 10);
  // console.log("id user:", typeof user_id, user_id);
  const params = useParams();
  // console.log(params.id);
  const [project, setProject] = useState({});
  const [project_id, setProjectId] = useState(0);
  const [title, setRubricTitle] = useState("");
  const [description, setRubricDescription] = useState("");
  const [evaluationDimensionTitle, setEvaluationDimensionTitle] = useState("");
  const [evaluationDimensionDescription, setEvaluationDimensionDescription] =
    useState("");
  const [evaluation_text, setEvaluationText] = useState("");
  const [negative, setNegative] = useState("");
  const [regular, setRegular] = useState("");
  const [suficient, setSuficient] = useState("");
  const [good, setGood] = useState("");
  const [excelent, setExcelent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  if (!currentUser) {
    return <Navigate to="/acceso" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await getItemById(params.id);
        setProject(response);
        setProjectId(response.id);

        // console.log("id project:", typeof response.id, response.id);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
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
    const formDataRubric = {
      title,
      description,
      project_id,
      user_id,
    };
    const formDataEvaluation = {
      title: evaluationDimensionTitle,
      description: evaluationDimensionDescription,
      evaluation_text,
      negative,
      regular,
      suficient,
      good,
      excelent,
      rubric_id: null,
    };
    try {
      const responseCreateRubric = await createItemRubric(formDataRubric);
      console.log(responseCreateRubric);
      const idRubric = responseCreateRubric.id;
      formDataEvaluation.rubric_id = idRubric;
      const responseCreateEvaluation = await createItemEvaluation(
        formDataEvaluation
      );
      console.log(responseCreateEvaluation);
      Swal.fire({
        title: `<div className="flex flex-row justify-center bg-color-grey-bg pb-10" style="display: flex;justify-content: center;padding-bottom: 20px;"><img className="flex" src="${checkBig}" alt="Icono doble check" /><h3 className="flex font-opencustom text-xl font-bold text-color-bck">ALERTA</h3></div>`,
        text: "¡Tu rúbrica ha sido creada con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      window.location.href = "/mis-rubricas";
    } catch (err) {
      console.log(JSON.parse(err.request.response).msg);
    }
  };

  const handleConfirmCancel = () => {
    Swal.fire({
      title: `<div className="flex flex-row justify-center bg-color-grey-bg pb-10" style="display: flex;justify-content: center;padding-bottom: 20px;"><img className="flex" src="${checkBig}" alt="Icono doble check" /><h3 className="flex font-opencustom text-xl font-bold text-color-bck">ALERTA</h3></div>`,
      text: "Esta acción cancelará tu rúbrica. ¿Deseas continuar?",
      showCancelButton: true,
      confirmButtonColor: "#F6F6F6",
      cancelButtonColor: "#F6F6F6",
      confirmButtonText:
        "<span style='color: #545454;font-weight: 400;'>Sí</span>",
      cancelButtonText:
        "<span style='color: #545454;font-weight: 400;'>No</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `<div className="flex flex-row justify-center bg-color-grey-bg pb-10" style="display: flex;justify-content: center;padding-bottom: 20px;"><img className="flex" src="${checkBig}" alt="Icono doble check" /><h3 className="flex font-opencustom text-xl font-bold text-color-bck">ALERTA</h3></div>`,
          text: "La rúbrica ha sido cancelada.",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          window.location.href = "/proyectos";
        });
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-14">
          <Spinner />
        </div>
      ) : (
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
          <form
            onSubmit={onSubmit}
            action="#"
            method="POST"
            className="space-y-1"
          >
            <div className="border rounded border-color-blue-p mb-7 overflow-hidden">
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
                title_value={evaluationDimensionTitle}
                title_onChange={handleDimensionTitleChange}
                description_value={evaluationDimensionDescription}
                description_onChange={handleDimensionDescriptionChange}
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
              //   onClickAddDimension={"TODO: funcion para añadir dimesion"}
              //  onClickDeleteDimension={"TODO: funcion para eliminar dimesion"}
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-7">
              <ButtonPrimary text={"Guardar"} />
              <ButtonSecondary
                text={"Cancelar"}
                onClick={handleConfirmCancel}
              />
            </div>
          </form>
        </>
      )}
    </>
  );
}

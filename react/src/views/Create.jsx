import React from "react";
//import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondaryIconSmall from "../components/buttons/ButtonSecondaryIconSmall";
import InformationBox from "../components/InformationBox";
import Title from "../components/Title";
import dropdownIcon from "../assets/dropdownIcon.svg";
import addIconGray from "../assets/addIconGray.svg";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";

export default function Create() {
  const { userToken } = userAuthContext();
  if (!userToken) {
    return <Navigate to="/acceso" />;
  }
  //   const [validCaptcha, setValidCaptcha] = useState(null);

  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = {
  //       email,
  //       password,
  //     };
  //     try {
  //       const response = await postLogin(formData);
  //       setSuccess(true);
  //       window.location.href = "/proyectos";
  //     } catch (err) {
  //       setError(err.response.data.error);
  //     }
  //     if (captcha.current.getValue()) {
  //       console.log("El usuario no es un robot");
  //       setIsUser(true);
  //       setValidCaptcha(true);
  //     } else {
  //       console.log("Por favor acepta el captcha");
  //       setIsUser(false);
  //       setValidCaptcha(false);
  //     }
  //   };

  return (
    <>
      <form action="#" method="post" id="create" className="font-latocustom font-boldmt-2 space-y-1">
        <Title title={"Google"} />

        <label
          for="url"
          className="text-sm text-color-grey-title"
        >
          URL:
        </label>
        <input
          type="text"
          id="url"
          name="url"
          placeholder={"Ej: www.wecheck.org"}
          className="w-full py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10  focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 "
        />
        <hr class="border-1 color-grey-bg"></hr>

        <label
          for="description:"
          className="text-sm  text-color-grey-title"
        >
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Describe el objetivo de tu rúbrica."
          className="w-full py-2 text-color-bck focus:z-10 focus:outline-none font-opencustom text-base text-xs mt-2"
        />
        <hr class="border-1 color-grey-bg"></hr>

        <div className="content-start bg-color-blue-light text-color-blue-s">
          {
            <InformationBox
              text={
                "Comprueba en esta lista que la rúbrica que quieres crear no se ha creado. Al final de la lista encontrarás el botón “Crear mi rúbrica”."
              }
              onClick={"pasar onclick"}
            />
          }
        </div>

        <div className=" border rounded  border-color-blue-p p-1.5">
          <label for="title" className="font-opencustom text-base font-bold">
            <h1 className="font-latocustom font-bold text-ml mt-3">Título:</h1>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Título"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <label for="description" className="font-opencustom text-sm mt-3">
            Descripción de la rúbrica:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Problemas de acceso basados en los roles e identidad de género."
            className="w-full rounded border border-color-grey-border-btn px-3 py-6 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <label for="dimension" className="font-opencustom text-sm font-bold">
            Dimensión:
          </label>
          <input
            type="text"
            id="dimension"
            name="dimension"
            placeholder="Dimensión"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <label for="description" className="font-opencustom text-sm">
            Descripción de la dimensión:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Descripción"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <lable for="evaluation" className="font-opencustom text-sm">
            {" "}
            Criterio a evaluar:
          </lable>
          <input
            type="text"
            id="evaluation"
            name="evaluation"
            placeholder="Criterio que ha de ser evaluado"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <img className="mr-2" src={dropdownIcon} alt="dropdown icon"></img>

          <lable for="negative" className="font-opencustom text-sm">
            Negativo:
          </lable>
          <input
            type="taxt"
            id="negative"
            name="negative"
            placeholder="Descripción del nivel"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

          <lable for="regular" className="font-opencustom text-sm">
            Regular:
          </lable>
          <input
            type="text"
            id="regular"
            name="regular"
            placeholder="Descripción del nivel"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

          <lable for="suficient" className="font-opencustom text-sm">
            Suficiente:
          </lable>
          <input
            type="text"
            id="suficiente"
            name="suficiente"
            placeholder="Descripción del nivel"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

          <lable for="good" className="font-opencustom text-sm">
            Bien:
          </lable>
          <input
            type="text"
            id="suficiente"
            name="good"
            placeholder="Descripción del nivel"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

          <lable for="excelent" className="font-opencustom text-sm">
            Excelente:
          </lable>
          <input
            type="text"
            id="excelent"
            name="excelent"
            placeholder="Descripción del nivel"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

          {/* <div>  */}
          
          <ButtonSecondaryIconSmall
            text={"Añadir dimensión"}
            src={addIconGray}
          />
          {/* <Link
                to="/"
                className="flex justify-center font-opencustom text-color-grey-title font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md "
              >
              </Link> */}
          {/* </div> */}
        </div>

        {/* <div className="flex justify-center object-contain w-auto">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LelgfUkAAAAALIEUAndhjmpr1K-TDo8S4CqigxX"
                onChange={onChange}
              />
            </div>
            {validCaptcha === false && (
              <div className="flex justify-center text-red-500 font-bold">
                Por favor acepta el captcha.
              </div>
            )} */}

        <div className="flex justify-between">
          <ButtonPrimary text={"Guardar"} />
          <Link
            to="/"
            className=" font-opencustom text-color-grey-title font-bold bg-color-grey-bg px-12 py-2 border-color-grey-border border border-solid rounded-md"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </>
  );
}

import React from 'react'
//import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import InformationBox from '../components/InformationBox';
import Title from "../components/Title";


 export default function Create() {
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
 <form action="#" method="post" id="create" className="mt-2 space-y-1">

    <Title title={"Google"} />

    <label for="url" className="font-opencustom text-sm text-color-grey-title">URL:</label>
            <input type="text" id="url" name="url" placeholder={"www.google.com"}  className="w-full px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10  focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2 "/>
            <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

    <label for="description:" className="font-opencustom text-sm  text-color-grey-title">Description:</label>
    <input type="text" id="description" name="description" placeholder="Buscador de contenidos en la red. Analizamos la versión “.es”."  className="w-full  px-3 py-2 text-color-bck focus:z-10 focus:outline-none font-opencustom text-base mt-2"/>
    <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

    <div className="content-start bg-blue-100 text-color-blue-s">
    {<InformationBox text={"Crea una rúbrica para que tú u otras personas la podáis usar para evaluar la experiencia de usuario de una web."} onClick={"pasar onclick"} />}
    </div>

     <label for="title" className="font-opencustom text-base font-bold">Título:</label>
            <input type="text" id="title" name="title" placeholder="Título"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2 "/>

            <label for="description" className="font-opencustom text-sm">Descripción de la rúbrica:</label>
            <input type="text" id="description" name="description" placeholder="Problemas de acceso basados en los roles e identidad de género." className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <label for="dimension" className="font-opencustom text-sm font-bold">Dimensión:</label>
            <input type="text" id="dimension" name="dimension" placeholder="Dimensión" className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <label for="description" className="font-opencustom text-sm">Descripción de la dimensión:</label>
            <input type="text" id="description" name="description" placeholder="Descripción" className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="evaluation" className="font-opencustom text-sm"> Criterio a evaluar:</lable>
            <input type="text" id="evaluation" name="evaluation" placeholder="Criterio que ha de ser evaluado"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="negative" className="font-opencustom text-sm" >Negativo:</lable>
            <input type="taxt" id="negative" name="negative" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="regular" className="font-opencustom text-sm" >Regular:</lable>
            <input type="text" id="regular" name="regular" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="suficient" className="font-opencustom text-sm" >Suficiente:</lable>
            <input type="text" id="suficiente" name="suficiente" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="good" className="font-opencustom text-sm" >Bien:</lable>
            <input type="text" id="suficiente" name="good" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <lable for="excelent" className="font-opencustom text-sm" >Excelente:</lable>
            <input type="text" id="excelent" name="excelent" placeholder="Descripción del nivel"  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"/>

            <button type="submit">Añadir dimensión</button>

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
                className=" font-opencustom text-color-grey-title font-bold bg-color-grey-bg   px-12 py-2 border-color-grey-border  border border-solid rounded-md "
              >
                Cancelar
              </Link>
            </div>
            </form>
          
         
    </>
  );
}

import React from 'react'
//import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonSecondaryIconSmall from '../components/buttons/ButtonSecondaryIconSmall';
import InformationBox from '../components/InformationBox';
import Title from "../components/Title";
import dropdownIcon from "../assets/dropdownIcon.svg";
import Browser from '../components/Browser'


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
    <div>Create
        <div>Buscador
          <h1>Elegir proyecto</h1>
          <p>Selecciona el proyecto en el que quieras crear tu rúbrica.</p>
          <line x1="18" y1="6" x2="6" y2="18" />
        </div>
    </div>
    
  )
}

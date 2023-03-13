import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import Title from "../components/Title";
import ReCAPTCHA from "react-google-recaptcha";

export default function Signup({
  name,
  surname,
  email,
  password,
  passwordConfirmation,
}) {
  const [validCaptcha, setValidCaptcha] = useState(null);
  const [isUser, setIsUser] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      setValidCaptcha(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validamos los inputs del formulario
    // Si son correctos ya podemos enviar el fomulario, actualizar la Interfaz, etc.

    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      setIsUser(true);
      setValidCaptcha(true);
    } else {
      console.log("Por favor acepta el captcha");
      setIsUser(false);
      setValidCaptcha(false);
    }
  };
  return (
    <>
      {!isUser && (
        <>
          <Title title={"Registrarse"} />
          <form
            onSubmit={onSubmit}
            className="mt-8 space-y-14"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="font-opencustom text-sm">
                  Nombre:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange="" //poner evento {}
                  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <label htmlFor="surname" className="font-opencustom text-sm">
                  Apellidos:
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  required
                  value={surname}
                  onChange="" //poner evento {}
                  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
                  placeholder="Apellidos"
                />
              </div>
              <div>
                <label
                  htmlFor="email-address"
                  className="font-opencustom text-sm"
                >
                  Email:
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange="" //poner evento {}
                  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
                  placeholder="ejemplo@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-opencustom text-sm">
                  Contraseña:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange="" //poner evento {}
                  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
                  placeholder="********"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-opencustom text-sm">
                  Confirmar contraseña:
                </label>
                <input
                  id="password-confrimation"
                  name="password_confirmation"
                  type="password"
                  required
                  value={passwordConfirmation}
                  onChange="" //poner evento {}
                  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
                  placeholder="********"
                />
              </div>
            </div>

            <div className="flex justify-center object-contain w-auto">
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
            )}

            <div className="flex justify-between">
              <ButtonPrimary text={"Registrame"} onClick={"pasar onclick"} />
              <ButtonSecondary text={"Cancelar"} onClick={"pasar onclick"} />
            </div>
          </form>
          <p className="mt-10 font-opencustom text-sm font-normal mb-10">
            ¿Ya tienes una cuenta? Accede a tu cuenta en{" "}
            <span>
              {" "}
              <Link
                to="/acceso"
                className="font-opencustom text-sm font-bold text-color-blue-p underline hover:text-color-blue-light"
              >
                Acceder
              </Link>
            </span>
          </p>
        </>
      )}
    </>
  );
}

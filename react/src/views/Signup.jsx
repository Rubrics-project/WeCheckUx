import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Title from "../components/Title";
import ReCAPTCHA from "react-google-recaptcha";
import { createItem } from "../services/userService";

export default function Signup() {
  const [validCaptcha, setValidCaptcha] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const captcha = useRef(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      setValidCaptcha(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      surname,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    try {
      const response = await createItem(formData);
      setSuccess(true);
      setIsUser(true);
      setValidCaptcha(true);
      window.location.href = "/acceso";
    } catch (err) {
      setError(JSON.parse(err.request.response).msg);
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
            {error && (
              <div className="bg-red-500 rounded py-2 px-3 text-white">
                {error}
              </div>
            )}
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setSurname(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="w-full rounded border border-color-grey-border-btn px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
                  placeholder="********"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <ReCAPTCHA
                className="max-w-3/4 mx-auto"
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

            <div className="w-full grid grid-cols-2 gap-7">
              <ButtonPrimary text={"Registrame"} />
              <Link
                to="/"
                className="flex justify-center font-opencustom text-color-grey-title font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md"
              >
                Cancelar
              </Link>
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
      {isUser && success && (
        <div className="bg-color-blue-p rounded py-2 px-3 text-white">
          ¡Registro exitoso!
        </div>
      )}
    </>
  );
}

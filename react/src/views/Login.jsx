import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Title from "../components/Title";
import ReCAPTCHA from "react-google-recaptcha";
import { postLogin } from "../services/userService";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";

export default function Login() {
  const { userToken } = userAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validUser, setValidUser] = useState(false);

  const [error, setError] = useState("");

  const [validCaptcha, setValidCaptcha] = useState(null);
  const captcha = useRef(null);

  if (userToken) {
    return <Navigate to="/" />;
  }

  const onChange = () => {
    if (captcha.current.getValue()) {
      setValidCaptcha(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    try {
      const response = await postLogin(formData);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
      if (captcha.current.getValue()) {
        console.log("El usuario no es un robot");
        setValidCaptcha(true);
        setValidUser(true);

        window.location.href = "/acceso";
      } else {
        console.log("Acepta el captcha para continuar.");
        setValidCaptcha(false);
        setValidUser(false);
      }
    } catch (err) {
      console.log(error);
      setError(JSON.parse(err.request.response).msg);

      if (!captcha.current.getValue()) {
        console.log("Acepta el captcha para continuar.");
        setValidUser(false);
        setValidCaptcha(false);
      }
    }
  };

  return (
    <>
      {!validUser && (
        <>
          <Title title={"Acceder"} />
          <form
            onSubmit={onSubmit}
            className="mt-4 space-y-14"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4">
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
            </div>
            {error && (
              <div className="bg-red-500 rounded py-2 px-3 text-white">
                {error}
              </div>
            )}
            {validCaptcha === false && (
              <div className="bg-red-500 rounded py-2 px-3 text-white">
                Por favor acepta el captcha.
              </div>
            )}
            <div className="flex flex-col justify-center items-center">
              <ReCAPTCHA
                className="max-w-3/4 mx-auto"
                ref={captcha}
                sitekey="6LelgfUkAAAAALIEUAndhjmpr1K-TDo8S4CqigxX"
                onChange={onChange}
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-7">
              <ButtonPrimary text={"Aceptar"} />
              <Link
                to="/"
                className="flex justify-center font-opencustom text-color-grey-title font-bold bg-color-grey-bg px-4 py-2 border-color-grey-border border border-solid rounded-md "
              >
                Cancelar
              </Link>
            </div>
          </form>

          <p className="mt-10 font-opencustom text-sm font-normal mb-10">
            ¿No tienes cuenta? Crea una nueva cuenta en{" "}
            <span>
              {" "}
              <Link
                to="/registro"
                className="font-opencustom text-sm font-normal hover:font-bold underline text-color-blue-p  "
              >
                Registrarse
              </Link>
            </span>
          </p>
        </>
      )}
      {validUser && (
        <div className="bg-color-blue-p rounded py-2 px-3 text-white">
          ¡Acceso exitoso!
        </div>
      )}
    </>
  );
}

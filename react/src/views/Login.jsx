import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import Title from "../components/Title";

export default function Login({ onSubmit, password, email }) {
  return (
    <>
      <Title title={"Acceder"} />
      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-14"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="space-y-4">
          <div>
            <label htmlFor="email-address" className="font-opencustom text-sm">
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
              className="w-full rounded border border-color-grey-border-btner px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
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
              className="w-full rounded border border-color-grey-border-btner px-3 py-2 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base mt-2"
              placeholder="********"
            />
          </div>
        </div>

        {/* <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
        </div> */}

        <div className="flex justify-between">
          <ButtonPrimary text={"Aceptar"} onClick={"pasar onclick"} />
          <ButtonSecondary text={"Cancelar"} onClick={"pasar onclick"} />
        </div>
      </form>
      <p className="mt-10 font-opencustom text-sm font-normal mb-10">
        ¿No tienes cuenta? Crea una nueva cuenta en{" "}
        <span>
          {" "}
          <Link
            to="/registro"
            className="font-opencustom text-sm font-bold text-color-blue-p underline hover:text-color-blue-light"
          >
            Registrarse
          </Link>
        </span>
      </p>
    </>
  );
}


import { render, fireEvent, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Accordion.cy.jsx", () => {
  it("should render correctly", () => {
    render(<Nav />);
    expect(screen.getByLabelText("Mostrar menú")).toBeInTheDocument();
  });

  it("should show navigation links when the hamburger icon is clicked", () => {
    render(<Nav />);
    fireEvent.click(screen.getByLabelText("Mostrar menú"));
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
    expect(screen.getByText("Mis Rúbricas")).toBeInTheDocument();
    expect(screen.getByText("Mis Evaluaciones")).toBeInTheDocument();
    expect(screen.getByText("Crear Rúbrica")).toBeInTheDocument();
    expect(screen.getByText("Preguntas Frecuentes")).toBeInTheDocument();
    expect(screen.getByText("Cerrar sesión")).toBeInTheDocument();
  });

  it("should show login links when the hamburger icon is clicked and the user is not authenticated", () => {
    render(<Nav />);
    fireEvent.click(screen.getByLabelText("Mostrar menú"));
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
    expect(screen.getByText("Preguntas Frecuentes")).toBeInTheDocument();
    expect(screen.getByText("Acceder / Registro")).toBeInTheDocument();
  });

  it("should log out the user when the logout link is clicked", () => {
    const localStorageSpy = jest.spyOn(window.localStorage.__proto__, "removeItem");
    render(<Nav />);
    fireEvent.click(screen.getByLabelText("Mostrar menú"));
    fireEvent.click(screen.getByText("Cerrar sesión"));
    expect(localStorageSpy).toHaveBeenCalledWith("token");
    expect(localStorageSpy).toHaveBeenCalledWith("user_id");
    expect(window.location.href).toBe("/");
  });
});

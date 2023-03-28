import { userService } from "../user";
import {render, fireEvent } from "@testing-library/react";

const userMock = [
  { name: "Raquel", surname: "Caraballo", email: "RaquelC@gmail.com" },
  { name: "Shima", surname: "Naderi", email: "ShimaN@gmail.com" },
];
describe("test de getAllItem user", () => {
  it("Call function correct",
    () => {
      global.fetch = () =>
        Promise.resolve({
          status: 200,
          JSON: () => Promise.resolve(userMock),
        });

      const response = userService();
      expect(response).resolves.toEqual(userMock);
    });

  it("should call error 404", () => {
    global.fetch = () =>
    Promise.resolve({
      status: 404,
      JSON: () => Promise.resolve(),
    });
    const response = userService();
    expect(response).rejects.toThorow(new error ("Error en servidor"))
  });
  it ("Should call error 500",()=>{
    global.fetch = () => Promise.resolve({
      status: 500,
      JSON: ()=>Promise.resolve()
    })
    const response = userService();
    expect(response).reject.toThorow(new error ("Petición no encontrada"))
  })
});



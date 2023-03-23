import { render, screen } from "@testing-library/react";
import Login from "../../views/Login";

describe("test de vista login", () => {
  test("Testear botón summit", async () => {
    render(<Login />);
    const button_list = await screen.findAllByRole("button");
    expect(button_list).toHaveLength(2);
   
  });
});

// import React from 'react'
// import renderer from 'react-test-renderer'

// import { Browser } from '../Browser'
// describe('Browser', () => {
//   const defaultProps = {}
//   const wrapper = renderer.create(<Browser.test {...defaultProps} />)

//   test('render', () => {
//     expect(wrapper).toMatchSnapshot()
//   })
// })

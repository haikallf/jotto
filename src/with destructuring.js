import React from "react";
import Enzyme, { shallow } from "enzyme";
import Input from "./Input";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import checkPropTypes from "check-prop-types";
import propTypes from "prop-types";
import { checkProps, findByTestAttr } from "./functions";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockSetCurrentGuess = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("renders input without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});

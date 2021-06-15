import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttr, checkProps } from "../test/testUtils";

/**
 * mock entire module
 * const mockCurrentGuess = jest.fn();
 * jest.mock('react',()=>({
 * ...jest.requireActual('react'),
 *  useState :(initialState) => [initialState ,mockCurrentGuess]
 * }))
 */
const defaultProps = { secretWord: "party" };
const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

test("it does not throw error with props passed", () => {
  checkProps(Input, { secretWord: "party" });
});
describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("input box renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not render", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit  does not render", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("input box renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not render", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit  does not render", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});
describe("state controlled input field", () => {
  let wrapper,
    mockSetCurrentGuess = jest.fn(),
    orginalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    orginalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = orginalUseState;
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("state is cleared when submit button is clicked", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault: () => {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});

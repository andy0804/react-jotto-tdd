import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
Enzyme.configure({ adapter: new EnzymeAdapter() });
import { findByTestAttr, findByTestID, checkProps } from "../test/testUtils";
const defaultProps = { success: false };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without errors", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "component-congrats");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when success props is false", () => {
  const wrapper = setup({ success: false });
  const congratsDiv = findByTestAttr(wrapper, "component-congrats");
  expect(congratsDiv.text()).toBe("");
});

test("renders non-empty Congratulations message", () => {
  const wrapper = setup({ success: true });
  const congratsDiv = findByTestID(wrapper, "congrats-message");
  expect(congratsDiv.text().length).not.toBe(0);
});
test("Does not throw warning with expected prop types", () => {
  const expectedProps = { success: false };
  const propError = checkProps(Congrats, expectedProps, "prop", Congrats.name);
  expect(propError).toBeUndefined();
});

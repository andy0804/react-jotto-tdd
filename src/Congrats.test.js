import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
Enzyme.configure({ adapter: new EnzymeAdapter() });
import { findByTestAttr, findByTestID } from "../test/testUtils";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errors", () => {
  const wrapper = setup();
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

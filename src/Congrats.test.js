import React from "react";
import { mount, shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttr, findByTestID, checkProps } from "../test/testUtils";
import { langContext } from "./context/languageContext";
import { languageStrings } from "./helpers/strings";
const defaultProps = { success: false };
// const setup = (props = {}) => {
//   const setupProps = { ...defaultProps, ...props };
//   return shallow(<Congrats {...setupProps} />);
// };
const setup = ({success,language})=> {
   language  = language || 'en';
   success = success || false;
  return mount(<langContext.Provider value={language}><Congrats success={success} /></langContext.Provider>)
}

describe('Language Picker testing',()=>{
  test('correctly renders congrats in english',()=>{
    const wrapper = setup({success:true});
    expect(wrapper.text()).toBe(languageStrings.en.congrats)  

  })
  test('correctly renders congrats in emoji',()=>{
    const wrapper = setup({success:true,language:'emoji'});
    expect(wrapper.text()).toBe(languageStrings.emoji.congrats)
  })
})
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

import React from "react";
import { shallow} from 'enzyme';
import {findByTestAttr,checkProps, findByTestID} from "../test/testUtils";
import LanguagePicker from "./LanguagePicker";
const mockSetLanguage = jest.fn();
const setup =() =>{
 
    return shallow(<LanguagePicker setLanguage={mockSetLanguage}/>)
}

test('renders withou errors',()=>{
    const wrapper = setup();
    const languagePickerComponent = findByTestAttr(wrapper,'component-language-picker')
    expect(languagePickerComponent.exists()).toBe(true)
})

test('Does not throw warnings',()=>{
    checkProps(LanguagePicker,{setLanguage:jest.fn()})
})
test('renders language icons',()=>{ 
    const wrapper = setup();
    const languagePickerButton = findByTestAttr(wrapper,'lang-button')
    expect(languagePickerButton.length).toBeGreaterThan(0)
})
test('calls setLanguage Prop upon click',()=>{
        // simulate a click
        const wrapper = setup();
        const languagePickerButton = findByTestAttr(wrapper,'lang-button')
        const firstIcon = languagePickerButton.first();
        firstIcon.simulate('click');
        expect(mockSetLanguage).toHaveBeenCalled();
})
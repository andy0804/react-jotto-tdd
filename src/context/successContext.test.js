import successContext from "./successContext";
import React from "react";
import { shallow,mount } from "enzyme";


const FunctinalComponent = () => {
    successContext.useSuccess();

    return <div/>
}

test('use Success throws error when not wrapped in provider',()=>{
    expect(()=>{
        shallow(<FunctinalComponent/>)
    }).toThrow('Use success context must be used within a SuccessProvider')

})

test('use Success  does not  throw error when  wrapped in provider',()=>{
    expect(()=>{
        mount(<successContext.SuccessProvider><FunctinalComponent/></successContext.SuccessProvider>)
    }).not.toThrow('Use success context must be used within a SuccessProvider')

})
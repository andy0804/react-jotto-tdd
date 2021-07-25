import guessedWordContext from "./guessedWordContext";
import React from "react";
import { shallow,mount } from "enzyme";


const FunctinalComponent = () => {
    guessedWordContext.useGuessedWords();

    return <div/>
}

test('useGuessedWords throws error when not wrapped in provider',()=>{
    expect(()=>{
        shallow(<FunctinalComponent/>)
    }).toThrow('Use guessedWorkContext  must be used within a GuessedWordsProvider')

})

test('useGuessedWords  does not  throw error when  wrapped in provider',()=>{
    expect(()=>{
        mount(<guessedWordContext.GuessedWordsProvider><FunctinalComponent/></guessedWordContext.GuessedWordsProvider>)
    }).not.toThrow('Use guessedWorkContext  must be used within a GuessedWordsProvider')

})
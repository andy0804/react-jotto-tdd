import React from 'react';
import { mount } from 'enzyme';

import App from "./App"
import { findByTestAttr } from "../test/testUtils"

const setup = (state = {}) => {
    const wrapper = mount(<App />);
    // TODO: apply state

    //add value to the input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } })

    // simulate a click
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() { } })

    // return the wrapper

    return wrapper;

}

describe.only('no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ secretWord: 'party', success: false, guessedWords: [] })

    })
    test('creates guessed words table with 1 row', () => {
        const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(GuessedWordRows).toHaveLength(1);
    })
})

describe.skip('some words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party', success: false,
            guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 },
            ]
        })

    })
    test('add rows to guessed words table', () => {
        const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(GuessedWordRows).toHaveLength(2);
    })
})

describe.skip('some words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party', success: false,
            guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 },
            ]
        })
     //add value to the input box
      const inputBox = findByTestAttr(wrapper, 'input-box');
      inputBox.simulate('change', { target: { value: 'party' } })
  
      // simulate a click
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      submitButton.simulate('click', { preventDefault() { } })

    })



    test('add rows to guessed words table', () => {
        const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(GuessedWordRows).toHaveLength(3);
    })
    test('display congrats', () => {
        const Congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(Congrats.text().length).toBeGreaterThan(0);
    })
})



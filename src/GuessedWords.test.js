import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";
import { languageStrings } from "./helpers/strings";
const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("it does not through error with props passed", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("When no words guessed ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders without error", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});
describe("When words are guessed ", () => {
  let wrapper;

  let guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders guessed words section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("displays correct number of guessed words", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});

describe('Context Testing',()=>{

  test('If instructions are loaded correctly in English',()=>{
    const mockUseContext = jest.fn().mockReturnValue('en')
    React.useContext = mockUseContext;
    const wrapper =  setup({guessedWords:[]});
    const guessInstructions = findByTestAttr(wrapper,'guess-instructions');
    expect(guessInstructions.text()).toBe(languageStrings.en.guessPrompt)
  })
  test('If instructions are loaded correctly in Emoji',()=>{
    const mockUseContext = jest.fn().mockReturnValue('emoji');
    React.useContext = mockUseContext;
    const wrapper = setup({guessedWords:[]});
    const guessInstructions = findByTestAttr(wrapper, "guess-instructions");
    expect(guessInstructions.text()).toBe(languageStrings.emoji.guessPrompt);
  })

})

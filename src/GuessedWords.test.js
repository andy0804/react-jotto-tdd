import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps, findByClassName } from "../test/testUtils";
import GuessedWords from "./GuessedWords";
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
  test("displays column guess number", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-number-col");
    expect(guessedWordsNode.length).toBe(1); 
  });
  test("displays numbers in the guess number column", () => {
    const guessWordColumn = findByTestAttr(wrapper, "guess-number");
    expect(guessWordColumn.map((node) => node.text())[0]).not.toBeNaN();
  });
});
 
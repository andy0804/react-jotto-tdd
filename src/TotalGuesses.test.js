import React from "react";
import { shallow } from "enzyme";
import {TotalGuesses} from "./TotalGuesses";
import { findByTestAttr } from "../test/testUtils";
const defaultProps = { success: false };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test("renders without errors", () => {
  let guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
      ];
  const wrapper = setup({ guesses: guessedWords.length });
  const totalGuessesComponent = findByTestAttr(wrapper, "total-guesses");
  expect(totalGuessesComponent.length).toBe(1);
});
 
test("renders  total Guesses based on guessed words", () => {
 let guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
      ];
  const wrapper = setup({ guesses: guessedWords.length });
  const totalGuessesComponent = findByTestAttr(wrapper, "total-guesses");
  expect(totalGuessesComponent.text()).toBe("Total Guesses : 3");
});



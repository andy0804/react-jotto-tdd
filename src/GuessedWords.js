import React, { useContext } from "react";
import PropTypes from "prop-types";
import { langContext } from "./context/languageContext";
import { TextContext } from "./context/appContext";
import stringsModule from "./helpers/strings"

const GuessedWords = (props) => {
  const language = React.useContext(langContext);
  const textContext = React.useContext(TextContext);
  // const {setData,data} = textContext;
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">{stringsModule.getStringByLanguage(language,'guessPrompt')}</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Guess</th>
              <th scope="col">Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;

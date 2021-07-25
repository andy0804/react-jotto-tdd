import React, { useContext } from "react";
import PropTypes from "prop-types";
import { langContext } from "./context/languageContext";
import stringsModule from "./helpers/strings"

const Input = ({ secretWord, success }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const language = useContext(langContext);
  if (success) {
    return <div data-test="component-input"></div>;
  }
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <label htmlFor="inputBox">{stringsModule.getStringByLanguage(language,'guessPrompt')}</label>
        <input
          id="inputBox"
          data-test="input-box"
          value={currentGuess}
          placeholder={stringsModule.getStringByLanguage(language,'guessInputPlaceholder')}
          type="text"
          className="mb-2 mx-sm-3"
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
          data-test="submit-button"
          className="btn btn-primary mb-2"
        >
            {stringsModule.getStringByLanguage(language,'submit')}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };
export default Input;

import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const success = useSelector(state=> state.success)

  if (success) {
    return <div data-test="component-input"></div>;
  }
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <label htmlFor="inputBox">Enter Guess:</label>
        <input
          id="inputBox"
          data-test="input-box"
          value={currentGuess}
          placeholder="enter guess"
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
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };
export default Input;

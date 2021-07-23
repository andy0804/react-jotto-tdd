import React from "react";
import PropTypes from "prop-types";
import "./Gaveup.css";
const Gaveup = ({ success,secretWord ,gaveUp }) => {
  return (
    <div data-test="component-gaveup">
      {!success && gaveUp && (
        <div className="alert alert-danger">
          <div id="gaveup-message">
             Better luck next time. The secret word is {secretWord}
          </div>
        </div>
      )}
    </div>
  );
};
Gaveup.propTypes = {
  success: PropTypes.bool.isRequired,
  gaveUp: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
};
export default Gaveup;

import React from "react";
import PropTypes from "prop-types";
import "./Congrats.css";
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && (
        <div className="alert alert-success">
          <div id="congrats-message">
            Congratulations ! You have correctly guessed the word
          </div>
        </div>
      )}
    </div>
  );
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;

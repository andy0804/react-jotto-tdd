import React from "react";
import "./Congrats.css";
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && (
        <div id="congrats-message">
          `Congratulations ! You have correctly guessed the word`
        </div>
      )}
    </div>
  );
};

export default Congrats;

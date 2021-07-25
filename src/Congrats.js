import React ,{useContext} from "react";
import PropTypes from "prop-types";
import "./Congrats.css";
import { langContext } from "./context/languageContext";
import stringsModule from "./helpers/strings"
const Congrats = ({ success }) => {
  const language = useContext(langContext);
  console.log('lANGUAGE' ,language)

  return (
    <div data-test="component-congrats">
      {success && (
        <div className="alert alert-success">
          <div id="congrats-message">
          {stringsModule.getStringByLanguage(language,'congrats')}
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

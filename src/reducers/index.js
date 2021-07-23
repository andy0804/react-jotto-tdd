import { combineReducers } from "redux";
import success from "./successReducer";
import  guessedWords from "./guessWordReducer";
import  secretWord  from "./secretWordReducer";
import gaveUp from "./gaveUpReducer";
export default combineReducers({
    success,guessedWords,secretWord,gaveUp
})
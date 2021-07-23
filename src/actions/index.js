import axios from "axios";
import { getLetterMatchCount } from "../helpers";
export const actionTypes = {
    CORRECT_GUESS :'CORRECT_GUESS',
    GUESS_WORD:'GUESS_WORD',
    SET_SECRET_WORD:'SET_SECRET_WORD',
    RESET:'RESET'
}
export function correctGuess() {
    return {type:actionTypes.CORRECT_GUESS};
}
export const guessWord = (guessedWord) => {

    return function(dispatch,getState){
      const secretWord = getState().secretWord;
      const letterMatchCount = getLetterMatchCount(guessedWord,secretWord);

      dispatch({
          type:actionTypes.GUESS_WORD,
          payload:{guessedWord,letterMatchCount}
      })
      if(guessedWord === secretWord){
        dispatch({
            type:actionTypes.CORRECT_GUESS,
        })
      }
    }

}
export const getSecretWord  = () => {
   
    return function(dispatch,getState){
        return new Promise((resolve,reject)=>{
            resolve('party');
            dispatch({type:actionTypes.SET_SECRET_WORD,payload:'party'})
        })
    }
  

}

export const resetJotto = () => {
    return function(dispatch,getState){
        dispatch({type:actionTypes.RESET})
    }
}
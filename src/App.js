import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import {useSelector,useDispatch} from "react-redux";
import React,{useEffect } from "react";
import { getSecretWord, resetJotto } from "./actions";
import { TotalGuesses } from "./TotalGuesses";
import Gaveup from "./Gaveup";
//REDUX version of app
function App() {
  const success = useSelector(state=>state.success);
  const guessedWords = useSelector(state=>state.guessedWords);
  const secretWord = useSelector((state) => state.secretWord);
  const gaveUp = useSelector((state) => state.gaveUp);

 // so that we can dispatch an action
 const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSecretWord());
  },[])
  const reset = () => {
    dispatch(resetJotto())
  }
 
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats reset={reset} success={success} />
      <Gaveup  gaveUp={gaveUp} secretWord={secretWord} success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords
        guessedWords={guessedWords }
      />
      <TotalGuesses guesses={guessedWords.length} />
      {(success || gaveUp) && <button data-test="reset-button" onClick={reset}>Reset</button>}
    </div>
  );
}

export default App;

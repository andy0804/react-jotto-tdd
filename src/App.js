import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import {useSelector,useDispatch} from "react-redux";
import React,{useEffect } from "react";
import { getSecretWord } from "./actions";
import { TotalGuesses } from "./TotalGuesses";
//REDUX version of app
function App() {
  const success = useSelector(state=>state.success);
  const guessedWords = useSelector(state=>state.guessedWords);
  const secretWord = useSelector((state) => state.secretWord);
 // so that we can dispatch an action
 const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSecretWord());
  },[])

 
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords
        guessedWords={guessedWords }
      />
      <TotalGuesses guesses={guessedWords.length} />
    </div>
  );
}

export default App;

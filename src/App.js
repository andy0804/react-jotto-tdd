import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import React,{useEffect ,useState} from "react";
import { useReducer } from "react";
import { getSecretWord } from "./actions";
import appReducer from "./reducer/appReducer";

function App() {
   
  const [state,dispatch] =useReducer(appReducer,{secretWord:''})
  const setSecretWord = (secretWord) => {
    dispatch({type:'setSecretWord',payload:secretWord})
  }
  // this is the context version of the app
  useEffect(()=>{
    getSecretWord(setSecretWord);
  },[])

  const appState = {
    success: false,
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
  }
  const {success ,guessedWords} = appState;
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={state.secretWord} />
      <GuessedWords
        guessedWords={guessedWords }
      />
    </div>
  );
}

export default App;

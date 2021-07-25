import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import React,{useEffect ,useState,useReducer} from "react";
import { getSecretWord } from "./actions";
import appReducer from "./reducer/appReducer";
import {langContext} from "./context/languageContext"
import LanguagePicker from "./LanguagePicker"
import { TextContextProvider } from "./context/appContext";

function App() {
   
  const [state,dispatch] =React.useReducer(
      appReducer,
      { secretWord: null ,language:'en' }
    )

  const setSecretWord = (secretWord) => {
    dispatch({type:'setSecretWord',payload:secretWord})
  }
  const setLanguage = (language) => {
    dispatch({type:'setLanguage',payload:language})
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
 console.log('STATE',state)
  if(!state.secretWord) {
    return (
      <div className="container container-spinner" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>
    )
  }
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <TextContextProvider>
      <LanguagePicker setLanguage={setLanguage}/>
      <langContext.Provider value={state.language}>
      <Congrats success={success} />
      <Input success={success} secretWord={state.secretWord} />
      <GuessedWords
        guessedWords={guessedWords }
      />
      </langContext.Provider>
      </TextContextProvider>
    </div>
  );
}

export default App;

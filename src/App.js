import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import React,{useEffect ,useState,useReducer} from "react";
import { getSecretWord } from "./actions";
import appReducer from "./reducer/appReducer";
const reducer = (state, action) => {
  switch(action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload }
    case 'setLanguage':
      return { ... state, language: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}
function App() {
   
  const [state,dispatch] =React.useReducer(
      appReducer,
      { secretWord: null }
    )
  // const [state, dispatch] = React.useReducer(
  //   reducer,
  //   { secretWord: null, language: 'en' }
  // )
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
      <Congrats success={success} />
      <Input success={success} secretWord={state.secretWord} />
      <GuessedWords
        guessedWords={guessedWords }
      />
    </div>
  );
}

export default App;

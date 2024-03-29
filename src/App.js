import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import React from "react";

function App() {
  // const [success, setSuccess] = React.useState(false);

  // const handleWhenSuccess = (param) => {
  //   setSuccess(param);
  // };
  const state = {
    success: false,
    secretWord:'party',
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
  }
  const {success ,guessedWords,secretWord} = state;
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords
        guessedWords={guessedWords }
      />
    </div>
  );
}

export default App;

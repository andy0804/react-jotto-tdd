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
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <Input success={false} secretWord="party" />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const guessedWorkContext = React.createContext();


function useGuessedWords() {

    const context =  React.useContext(guessedWorkContext);

    if(!context) throw new Error('Use guessedWorkContext  must be used within a GuessedWordsProvider')

    return context;
}

function GuessedWordsProvider(props)  {
    const [guessedWords,setGuessedWords] = React.useState([]);

    const value = React.useMemo(()=>[guessedWords,setGuessedWords],[guessedWords])

    return <guessedWorkContext.Provider value={value}>{props.children}</guessedWorkContext.Provider>

}

export default {GuessedWordsProvider,useGuessedWords}
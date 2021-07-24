export const languageStrings = {
    en: {
     congrats: 'Congratulations! You guessed the word!',
     submit: 'Submit',
     guessPrompt: 'Try to guess the secret word!',
     guessInputPlaceholder: 'enter guess',
     guessColumnHeader: 'Guessed Words',
     guessedWords: 'Guesses',
     matchingLettersColumnHeader: 'Matching Letters',
    },
    emoji: {
     congrats: '🎯🎉',
     submit: '🚀',
     guessPrompt: '🤔🤫🔤',
     guessInputPlaceholder: '⌨️🤔',
     guessedWords: '🤷‍🔤',
     guessColumnHeader: '🤷‍',
     matchingLettersColumnHeader: '✅',
    }
  }

  function getStringByLanguage(languageCode,key,strings=languageStrings){
      if( !strings[languageCode] || !strings[languageCode][key]){
          //fallback to english
          console.warn('Key does not exist')
          return strings.en[key];
      }

      return strings[languageCode][key];

  }
  export default {
      getStringByLanguage
  }
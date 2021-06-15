export function getLetterMatchCount(guessWord, secretWord) {
  //   const mapLetters = {};
  //   const visited = {};
  //   let count = 0;
  //   for (let letter of secretWord) {
  //     mapLetters[letter] = letter;
  //   }
  //   for (let letter of guessWord) {
  //     if (mapLetters[letter] && !visited[letter]) {
  //       count++;
  //       visited[letter] = letter;
  //     }
  //   }
  //   return count;

  const secretLetters = secretWord.split("");
  const guessedLetterSet = new Set(guessWord);
  return secretLetters.filter((letters) => guessedLetterSet.has(letters))
    .length;
}

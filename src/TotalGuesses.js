import React from 'react'

export const TotalGuesses = ({guesses}) => {
    return (
        <div data-test='total-guesses'>
           Total Guesses : {guesses} 
        </div>
    )
}

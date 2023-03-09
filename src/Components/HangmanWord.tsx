import React from 'react'

interface IHangmanWord {
    guessedLetters: string[];
    wordToGuess: string;
}

const HangmanWord = ({ guessedLetters, wordToGuess }: IHangmanWord) => {

  return (
    <div style={{ display: 'flex', gap: '.25em', fontSize: '6rem', fontWeight: 'bold', 
        textTransform: 'uppercase', fontFamily: 'monospace'
    }}>
      { wordToGuess.split("").map((letter, ind) => (
            <span key={ ind } style={{
                borderBottom: '.1em solid black'
            }}>
                <span style={{
                    visibility: guessedLetters.includes(letter) ? 'visible': 'hidden'
                }}>
                    { letter }
                </span>
            </span>
        ))}
    </div>
  )
}

export default HangmanWord

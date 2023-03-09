import React from 'react'

interface IHangmanWord {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
}

const HangmanWord = ({ guessedLetters, wordToGuess, reveal=false }: IHangmanWord) => {

  return (
    <div style={{ display: 'flex', gap: '.25em', fontSize: '4rem', fontWeight: 'bold', 
        textTransform: 'uppercase', fontFamily: 'monospace'
    }}>
      { wordToGuess.split("").map((letter, ind) => (
            <span key={ ind } style={{
                borderBottom: '.12em solid black'
            }}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal ? 'visible': 'hidden',
                    color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
                }}>
                    { letter }
                </span>
            </span>
        ))}
    </div>
  )
}

export default HangmanWord

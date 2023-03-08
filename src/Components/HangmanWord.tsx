import React from 'react'

const HangmanWord = () => {
    const word = 'test';
    const guessedLetters = ['t', 'e', 'g'];
  return (
    <div style={{ display: 'flex', gap: '.25em', fontSize: '6rem', fontWeight: 'bold', 
        textTransform: 'uppercase', fontFamily: 'monospace'
    }}>
      { word.split("").map((letter, ind) => (
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

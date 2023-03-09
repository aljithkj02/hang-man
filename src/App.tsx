import { useState, useEffect, useCallback } from 'react'
import { HangmanDrawing, HangmanWord, Keyboard } from './Components';
import words from './wordList.json';
import './App.css'

function App() { 
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter);
  })

  useEffect(() => {
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters]);

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)) return ;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }, [guessedLetters])

  const handler = (e: KeyboardEvent) => {
    const key = e.key;
    if(!key.match(/^[a-z]$/)) return;
    e.preventDefault();
    addGuessedLetter(key);
  }

  return (
    <div className="App">
      <div style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        Lost Win
      </div>
      
      <HangmanDrawing numberOfGuesses={ incorrectLetters.length } />
      <HangmanWord guessedLetters={ guessedLetters } wordToGuess={ wordToGuess } />
      <div style={{ alignSelf: 'stretch'}}>
        <Keyboard 
          activeLetters={ guessedLetters.filter(letter => (
            wordToGuess.includes(letter)
          ))} 
          inActiveLetters={ incorrectLetters }
          addGuessedLetter={ addGuessedLetter }
        />
      </div>

    </div>
  )
}

export default App

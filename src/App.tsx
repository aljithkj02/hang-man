import { useState, useEffect, useCallback } from 'react'
import { HangmanDrawing, HangmanWord, Keyboard } from './Components';
import words from './wordList.json';
import './App.css'

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() { 
  const [wordToGuess, setWordToGuess] = useState<string>(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter);
  })
  
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => (
    guessedLetters.includes(letter)
  ))

  useEffect(() => {
      document.addEventListener('keypress', handler);
      return () => {
        document.removeEventListener('keypress', handler);
      }
  }, [guessedLetters]);

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return ;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser])

  const handler = (e: KeyboardEvent) => {
    const key = e.key;
    if(!key.match(/^[a-z]$/)) return;
    e.preventDefault();
    addGuessedLetter(key);
  }

  useEffect(() => {
      document.addEventListener('keypress', refresh);
      return () => {
        document.removeEventListener('keypress', refresh);
      }
  }, []);

  const refresh = (e: KeyboardEvent) => {
      const key = e.key;
      if(key !== 'Enter') return;
      e.preventDefault();
      setWordToGuess(getWord());
      setGuessedLetters([]);
  }

  return (
    <div className="App">
      <div style={{
        fontSize: '2rem',
        textAlign: 'center',
        height: '40px'
      }}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </div>
      
      <div style={{ display: 'grid', gap: '20px', justifyContent: 'space-between',
        gridTemplateColumns: '1fr 2fr'
      }}>
        <div>
            <HangmanDrawing numberOfGuesses={ incorrectLetters.length } />
        </div>
        <div style={{ alignSelf: 'end', display: 'flex', justifyContent:'center' }}>
            <HangmanWord reveal={ isLoser } guessedLetters={ guessedLetters } wordToGuess={ wordToGuess } />
        </div>
      </div>
      <div style={{ alignSelf: 'stretch'}}>
        <Keyboard 
          disabled={ isWinner || isLoser }
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

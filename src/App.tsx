import { useState } from 'react'
import { HangmanDrawing, HangmanWord, Keyboard } from './Components';
import words from './wordList.json';
import './App.css'

function App() { 
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="App">
      <div style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        Lost Win
      </div>
      
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

    </div>
  )
}

export default App

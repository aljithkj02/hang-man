import React from 'react'
const  KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

interface IKeyboard {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

const Keyboard = ({ activeLetters, inActiveLetters, addGuessedLetter}: IKeyboard ) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem'}}>
        {KEYS.map((key, ind) => {
            const isActive = activeLetters.includes(key);
            const isInActive = inActiveLetters.includes(key); 
            return (
                <button  className={`keyboardBtn ${isActive? 'active' : ''}
                  ${isInActive? 'inactive' : ''} `} 
                  key={ key } disabled={isInActive || isActive}
                  onClick={() => addGuessedLetter(key)}
                >
                    {key}
                </button>
            )
        })}
    </div>
  )
}

export default Keyboard

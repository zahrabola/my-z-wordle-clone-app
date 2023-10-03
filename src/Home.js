import React from "react";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useState } from "react";
import {defaultwordleboard } from "./Components/Words";
export const AppContext = createContext();

const Home = () => {
  const [board, setBoard] = useState(defaultwordleboard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0})
  
  const onSelectLetter = (keyValue) => {
    if(currentAttempt.letterPos > 4) return;
    const currrentNewBoard = [...board]
    currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
    setBoard(currrentNewBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
  }
   const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    setCurrentAttempt ({attempt : currentAttempt.attempt + 1, letterPos: 0 });
   }

   const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const currrentNewBoard = [...board]
    currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(currrentNewBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -1 })
    
   }
  return (
    <div>
      <nav>
        <h1> Wordle - zahra's clone</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onEnter, onDelete  }}>
        <div className="game">
        <Board />
        <Keyboard />
        </div>  
      </AppContext.Provider>
    </div>
  );
};

export default Home;
// using context api
//currentAttempt is a usestate object 

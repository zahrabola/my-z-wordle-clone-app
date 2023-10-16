import React, { useEffect } from "react";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useState } from "react";
import {defaultwordleboard, wordGenerateSet } from "./Components/Words";
export const AppContext = createContext();

const Home = () => {
  const [board, setBoard] = useState(defaultwordleboard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0})
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])


  const correctWord = "RIGHT"

useEffect(() => {
  wordGenerateSet().then((words) => {
    //console.log(words)
    setWordSet(words.wordSet);
  })
}, [])

const onEnter = () => {
  if (currentAttempt.letterPos !== 5) return;

  let currentWord = "";
  for (let i = 0; i < 5; i++) {
    currentWord += board[currentAttempt.attempt][i];
  }
  if (wordSet.has(currentWord.toLowerCase())) {
    setCurrentAttempt({attempt : currentAttempt.attempt + 1, letterPos: 0 });
  } 
  else {
    alert("Word not found! Try Again");
  }
  if (currentWord === correctWord){
    alert ("Game Ended ")

  }
 }

 const onDelete = () => {
  if (currentAttempt.letterPos === 0) return;
  const currrentNewBoard = [...board]
  currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
  setBoard(currrentNewBoard)
  setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -1 })
  
 }

 

  const onSelectLetter = (keyValue) => {
    if(currentAttempt.letterPos > 4) return;
    const currrentNewBoard = [...board]
    currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
    setBoard(currrentNewBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
  }
  
  return (
    <div>
      <nav>
        <h1> Wordle - zahra's clone</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onEnter, onDelete, correctWord, setDisabledLetters, disabledLetters}}>
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
// create useeffect that only runs once - giving access to the word set from word.js

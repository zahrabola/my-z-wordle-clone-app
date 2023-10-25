import React, { useEffect } from "react";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useState } from "react";
import {defaultwordleboard, wordGenerateSet } from "./Components/Words";
import GameOver from "./Components/GameOver";
export const AppContext = createContext();

const Home = () => {
  const [board, setBoard] = useState(defaultwordleboard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0});
  const [wordSet, setWordSet] = useState(new Set())
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([])
  const [gameOver, setgameOver] = useState({gameOver:false,  guessedWord: false,})




useEffect(() => {
  wordGenerateSet().then((words) => {
       //console.log(words)
    setWordSet(words.wordSet);
    setCorrectWord(words.todaysWord);
  });
}, []);

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
setgameOver({gameOver: true, guessedWord:true})
return

  }
  ///console.log(currentAttempt);
  if (currentAttempt.attempt === 5){
    setgameOver({gameOver: true, guessedWord:false})
    return;
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
      <AppContext.Provider 
      value={{ 
           board,
           setBoard,
           currentAttempt, 
           setCurrentAttempt,
           onSelectLetter, 
           onEnter, 
           onDelete, 
           correctWord, 
           setDisabledLetters, 
           disabledLetters, 
           setgameOver,
           gameOver}}>
         <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div> 
      </AppContext.Provider>
    </div>
  );
};

export default Home;
// using context api
//currentAttempt is a usestate object 
// create useeffect that only runs once - giving access to the word set from word.js

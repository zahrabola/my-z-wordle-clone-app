import React from "react";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useState } from "react";
import {defaultwordleboard } from "./Components/Words";
export const AppContext = createContext();

const Home = () => {
  const [board, setBoard] = useState(defaultwordleboard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0})
  
  const onSelectLetter = () => {

  }
   const onEnter = () => {

   }

   const onDelete = () => {

    
   }
  return (
    <div>
      <nav>
        <h1> Wordle - zahra's clone</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt }}>
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

import React from "react";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useState } from "react";
import {defaultwordleboard } from "./Components/Words";
export const AppContext = createContext();

const Home = () => {
  const [board, setBoard] = useState(defaultwordleboard);
  return (
    <div>
      <nav>
        <h1> Wordle - zahra's clone</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
};

export default Home;
// using context api

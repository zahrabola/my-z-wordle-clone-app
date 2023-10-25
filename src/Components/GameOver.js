import React, { useContext } from "react";
import { AppContext } from '../Home';
const GameOver = () => {
    const { currentAttempt,gameOver, correctWord, board,setBoard,onSelectLetter,onDelete, } = useContext(AppContext);
    return (
        <div className="gameOver">
           <h3>{gameOver.guessedWord }</h3>
           <h1>Correct: {correctWord}</h1>
           {gameOver.guessedWord && (<h3> You guessed in {currentAttempt.attempt} attempts</h3>)}
        </div>
    );
}

export default GameOver;

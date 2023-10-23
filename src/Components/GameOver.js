import React, { useContext } from "react";
import { AppContext } from '../Home';
const GameOver = () => {
    const { board, setBoard, currentAttempt,gameOver, setgameOver, onSelectLetter, correctWord, onDelete } = useContext(AppContext);
    return (
        <div className="gameOver">
           <h3>{gameOver.guessedWord ? "You guessed correctly" : "Sorry, wrong answer"}</h3>
           <h1>Correct: {correctWord}</h1>
           {gameOver. guessedWord && (<h3> You guessed in {currentAttempt} attempts</h3>)}
        </div>
    );
}

export default GameOver;

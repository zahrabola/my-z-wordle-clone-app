import React, {useContext} from 'react';
import { AppContext } from '../Home';


const Key = ({keyValue, bigKey}) => {
    const {board, setBoard,currentAttempt, setCurrentAttempt } = useContext(AppContext);
    const selectLetter = () => {
        const currrentNewBoard = [...board]
        currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
        setBoard(currrentNewBoard)
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
    }
    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>
        {keyValue}
        </div>
    );
}

export default Key;
//taking in the value of the key through props
// conditional logic for the enter and delte
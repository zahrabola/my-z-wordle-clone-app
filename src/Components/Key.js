import React, {useContext} from 'react';
import { AppContext } from '../Home';


const Key = ({keyValue, bigKey}) => {
    const {board, setBoard} = useContext(AppContext);
    const selectLetter = () => {
        const currrentNewBoard = [...board]
        currrentNewBoard[0][0] = keyValue
        setBoard(currrentNewBoard)
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
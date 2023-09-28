import React, {useContext} from 'react';
import { AppContext } from '../Home';

const Letter = ({letterPos, attemptVal}) => {
    const {board} = useContext(AppContext)
    const letter = board[attemptVal][letterPos]
    return (
        <div className='letter'>
            {letter}
        </div>
    );
}

export default Letter;
// attemptVal - value
// letterpos = letter postion 
import React from 'react';

const Letter = ({letterPos, attemptVal}) => {
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
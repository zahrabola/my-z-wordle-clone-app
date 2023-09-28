import React from 'react';

const Key = ({keyValue, bigKey}) => {
    return (
        <div className='key' id={bigKey && "big"}>
        {keyValue}
        </div>
    );
}

export default Key;
//taking in the value of the key through props
// conditional logic for the enter and delte
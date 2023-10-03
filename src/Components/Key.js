import React, {useContext} from 'react';
import { AppContext } from '../Home';


const Key = ({keyValue, bigKey}) => {
    const {onSelectLetter, onEnter, onDelete } = useContext(AppContext);


    const selectLetter = () => {
if (keyValue === "Enter") {
/*if (currentAttempt.letterPos !== 5) return;
/setCurrentAttempt ({attempt : currentAttempt.attempt + 1, letterPos: 0 }); */
onEnter()
} else if (keyValue === "Delete"){
    /*if (currentAttempt.letterPos === 0) return;
    const currrentNewBoard = [...board]
    currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(currrentNewBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos -1 })
*/
onDelete()
} else {
  /*  if(currentAttempt.letterPos > 4) return;
    const currrentNewBoard = [...board]
    currrentNewBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
    setBoard(currrentNewBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1}) */
    onSelectLetter(keyValue)
}
    
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
//conditional rendering if statements greater than 4 return a press enter
//logic inside enter - enter functionality 
// delete funcutionality 
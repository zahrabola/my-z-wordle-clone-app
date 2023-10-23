import React, {useContext} from 'react';
import { AppContext } from '../Home';


const Key = ({keyValue, bigKey, disabled }) => {
    const {onSelectLetter, onEnter, onDelete, gameOver } = useContext(AppContext);


    const selectLetter = () => {
      if (gameOver.gameOver) return;
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
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
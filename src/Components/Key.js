import React, {useContext} from 'react';
import { AppContext } from '../Home';


const Key = ({keyValue, bigKey}) => {
    const {onSelectLetter, onEnter, onDelete } = useContext(AppContext);


    const selectLetter = () => {
if (keyValue === "Enter") {

onEnter()
} else if (keyValue === "Delete"){

onDelete()
} else {

    onSelectLetter(keyValue)
}
    
}
    return (
        <div   className="key" id={bigKey && "big"} onClick={selectLetter}>
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
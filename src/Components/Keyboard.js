import { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from '../Home';
const Keyboard = () => {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];


  const {
    onEnter,
    onDelete,
    onSelectLetter,
    currentAttempt,
    disabledLetters,
    gameOver,
  board
  } = useContext(AppContext);

 
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currentAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyValue={"DELETE"} bigKey />
      </div>
    </div>
  );
}
export default Keyboard;
/// creating keyboard
/// creating an array for each line of letters
// return a div
// key compent takes in the value of the key through props keyvalue
// useeffect will call a function that will handle the events on the keyboard - key down to use the keyboard with an event listner
// usecallback fuction - hooks - will wil stop reuploading in functions 
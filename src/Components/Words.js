import wordbank from '../wordle-bank.txt'
export const defaultwordleboard = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
]


export const wordGenerateSet = async () => {
let wordSet;
let todaysWord;
await fetch(wordbank).then((response) => response.text())
.then((result) => {
////console.log(result)
const wordArray = result.split("\n")
todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
wordSet = new Set(wordArray)
})
return {wordSet, todaysWord}
};
// empty letters like the board,  - one array represent a new attempt
// board will represent each letter on each cell of the board and new attempt 
// creating a function generating word set 
// sets in javascript - check if the words exists 
const readLineSync=require("readline-sync")
const inputArray=readLineSync.question("Enter the arr without commas")
const arr=[...inputArray]
function getSquares(number){
    return number**2;
}
const output=arr.map(getSquares)
console.log(output)

const readLineSync=require("readline-sync")
const inputArray=readLineSync.question("Enter the arr without commas")
const arr=[...inputArray]
function getSquares(number){
    return number**2;
}
function cube(number){
    return number**3;
}
// Using without map function
function output(operation){
tempArray=[];
for(let number of arr){
    tempArray.push(getSquares(number));
}
return tempArray;
}
const value=output(getSquares)
console.log(value)
// Using Map function
const result=arr.map(getSquares)
console.log(result)

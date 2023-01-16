const readLineSync=require("readline-sync");
const inputArray=readLineSync.question("Enter array :");
const arr=[...inputArray];
function SquareofNumbers(){
    let Square=[];
    for(let numbers of arr){
        Square.push(numbers**2)
}
    return Square;
}
const squareOfInput=SquareofNumbers();
console.log(squareOfInput);
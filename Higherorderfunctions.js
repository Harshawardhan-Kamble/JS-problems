const readLineSync=require("readline-sync");
const inputArray=readLineSync.question("Enter array :");
const arr=[...inputArray];
// function SquareofNumbers(){
//     let Square=[];
//     for(let numbers of arr){
//         Square.push(numbers**2)
// }
//     return Square;
// }
// const squareOfInput=SquareofNumbers();
// console.log(squareOfInput);
// function CubeofNumbers(){
//     let Cube=[];
//     for(let numbers of arr){
//         Cube.push(numbers**3)
// }
//     return Cube;
// }
// const cubeOfInput=CubeofNumbers();
// console.log(cubeOfInput);
function square(number){
    return (number**2);
}
function cube(number){
    return (number**3);
}
function output (operation,arr){
    let tempArray=[];
    for (let number of arr){
    tempArray.push(operation(number))
}
return tempArray;
}
const value=output(cube,arr);
console.log(value)

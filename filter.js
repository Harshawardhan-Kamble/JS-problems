const readLineSync=require("readline-sync")
const inputArray=readLineSync.question("Enter an array without using commas")
const arr=[...inputArray]
// Without using filter function
function output(){
    let tempArray=[];
    for (let number of arr){
        if(number>5){
            tempArray.push(number)
        }
    }
    return tempArray;
}
const result=output();
console.log(result);
// Using filter function and using general function
function greaterThan5(number){
    if(number>5){
        return number;
    }
}
const values=arr.filter(greaterThan5)
console.log(values)
// Using filter function and arrow function
const filterUsingArrow=arr.filter((number)=>number>5)
console.log(filterUsingArrow)
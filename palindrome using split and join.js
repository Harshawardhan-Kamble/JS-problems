const readlineSync=require("readline-sync")
const inputStr=readlineSync.question("Enter a word to check for Palindrome : ");
let toUpperCaseStr=inputStr.slice(0,inputStr.length).toUpperCase();
const inputStrModified=`${toUpperCaseStr}`
const convertedArray=inputStrModified.split("");
console.log(convertedArray);
const reversedArray=convertedArray.reverse();
const backToString=reversedArray.join("");
console.log(backToString);
if (backToString===inputStrModified){
    console.log(`${inputStrModified} is a palindrome`)
}
else {
    console.log(`${inputStrModified} is not a palindrome`)
}

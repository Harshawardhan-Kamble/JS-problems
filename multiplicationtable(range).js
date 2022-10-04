const readlineSync=require("readline-sync")
var startingNumber =Number(readlineSync.question("Enter a number to start: "))//Takes a string 
var endingNumber =Number(readlineSync.question("Enter a number till where it should stop: "))
function multiply (num,end){
    let i=1
    for (;i<=10;i++){
        console.log(num +"*"+i+"="+num*i);
    }
    if (num<end){
        if (i>=11){
        multiply(num+1,end)
    }
    }
}
multiply(startingNumber,endingNumber)
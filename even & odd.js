const readlineSync=require("readline-sync")
let startingNumber=Number(readlineSync.question("Enter a starting number: "));
let endingNumber=Number(readlineSync.question("Enter a ending number: "));
for(let i=startingNumber;i<=endingNumber;i++){
    if(i%2==0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}



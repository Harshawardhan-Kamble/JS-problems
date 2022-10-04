const readlineSync=require("readline-sync")
const number=readlineSync.question("n = ")
var symbol="* ";
for(let i=0;i<=number;i++){
    console.log(symbol.repeat(i));
}
for(let i=number-1;i>=1;i--){
    console.log(symbol.repeat(i));
}
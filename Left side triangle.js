// Without using repeat property
const readlineSync=require("readline-sync")
const number=readlineSync.question("n = ")
var symbol="";
for(let i=1;i<=number;i++){
    for(let j=1;i>=j;j++){
        symbol+="* "
    }
    symbol+="\n";
}
console.log(symbol)
//using repeat and just one loop
var symbol_1="* ";
for(let i=0;i<=number;i++){
    console.log(symbol_1.repeat(i));
}
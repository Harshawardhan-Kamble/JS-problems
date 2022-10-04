// Without using repeat property
const readlineSync=require("readline-sync")
const n=readlineSync.question("n = ")

var symbol="";
for(let i=0;i<n;i++){
    for(let j=0;(i+j)<n;j++){
        symbol+="* "
    }
    symbol+="\n";
}
console.log(symbol)

//using repeat and just one loop
var symbol_1="* ";
for(let i=n;i>=1;i--){
    console.log(symbol_1.repeat(i));
}
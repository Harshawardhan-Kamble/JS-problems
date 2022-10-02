const readlineSync=require("readline-sync")
const n=readlineSync.question(`Enter a number s`)
for(let i=1;i<=10;i++){
    let product=n*i;
    console.log(n+" * "+i+" = "+product)
}
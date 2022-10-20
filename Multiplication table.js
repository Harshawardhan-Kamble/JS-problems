const readlineSync=require("readline-sync")
const number=readlineSync.question(`Enter a number`)
for(let i=1;i<=10;i++){
    let product=number*i;
    console.log(`${number} * ${i} = ${product}`)
}
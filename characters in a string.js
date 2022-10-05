const readlineSync=require("readline-sync")
const userName=readlineSync.question("Name = ")
let count=0;
for(let i=0;i<=userName.length;i++){
    count++;
}
console.log(`Number of characters in ${userName} is ${count}`)
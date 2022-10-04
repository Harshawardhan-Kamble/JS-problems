//Print the difference  in multiplication table in one like in case of 8,4 it is 4 8 12 16 20 24 28 32 36 40

const readlineSync =require("readline-sync")
const n1= readlineSync.question("Enter number 1 : ")
const n2= readlineSync.question("Enter number 2 : ")
for (let i=1;i<=10;i++){
    let product=(n1*i)-(n2*i);
    process.stdout.write(`${product} `)
}

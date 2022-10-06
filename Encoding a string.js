const readlineSync=require("readline-sync");
const word=readlineSync.question("Enter a word: ");
const number=Number(readlineSync.question("Enter a number: "));
for (let i=0;i<word.length;i++){
   let ascii_code=Number(word.charCodeAt(i)+number);

let encoded_code=String.fromCharCode(ascii_code);
   process.stdout.write(`${encoded_code},`)
}

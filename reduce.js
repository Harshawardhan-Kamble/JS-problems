const arr= [1,2,3,4,5,6,7,8,9]
// Without using Reduce function
function findSum(){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
const sumOfTheElements=findSum();
console.log(sumOfTheElements)
// Reduce function
const sumUsingReduceFunction=arr.reduce((acc,curr)=>{
    acc+=curr;
    return acc;
})
console.log(sumUsingReduceFunction)






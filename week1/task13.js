console.log("task 13");


//Develop a script that employs the reduce function to find the sum of all elements in an array.
//Print the original array and the final sum.


const arr = [1,2,3,4,5];
console.log(arr)
const i = 0;      
const sum = arr.reduce((sum, curr) => sum + curr , i);
console.log(`sum of the given arr : ` + sum);
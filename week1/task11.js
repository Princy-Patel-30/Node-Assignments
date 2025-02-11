console.log("task 10");

//Write a JavaScript program that uses the map function to transform an array of numbers. 
// Square each element in the array and create a new array with the squared values. 
// Print both the original and transformed arrays.

const arr = [11,12,13,14,15];
console.log(arr);
const sqarr = arr.map((i) => i * i);   //map transforms each arr[i] into sq of its value /
console.log(sqarr);
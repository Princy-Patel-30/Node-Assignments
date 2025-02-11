console.log("task 12");

//Create a program that utilizes the filter function to extract even numbers from an array of integers.
//Print the original array and the filtered array containing only even numbers.

const arr = [12,21,23,32,34,43,45,54];
console.log("Original array: ", arr);

const even = arr.filter(i => i % 2 == 0);
console.log("Filtered array: ", even);

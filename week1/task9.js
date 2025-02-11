console.log("task 9");

// Create a program that declares variables with different data types: a number (age), 
// a string (name), and a boolean (isStudent). Perform operations like concatenating the name
// with a greeting, converting the age to a string,
// and combining the boolean value with a string to form a sentence. Print the results.

var age = 30;
console.log(typeof(age)); 
const Name = "Princy";
const isStudent = true; 

let t = age.toString();  //primitive data types are immutable and hence need to be stored in new variable.
console.log(typeof(t)); 
console.log(`Hello, my name is ${Name}, my age is ${age}, and I am a student: ${isStudent}.`);
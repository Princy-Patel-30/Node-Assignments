console.log("task 6");


//Write a script that utilizes const for declaring constants. 
// Attempt to reassign values to these constants and observe the behavior.
//Include comments explaining the concept of immutability with const and when it is 
// appropriate to use it.

const y = 4;
// y= 2;                                                // accidental  re-assignement of constant value
console.log(y);
const user = {
    name: "princy",
    age: 21
};
user.age = 31; // This is allowed
console.log(user); 
// You cannot reassign the user object
// user = {name : "heya"};


console.log("task7");

//Develop a program that highlights the differences in scoping between let and var.
//  Create a block-scoped variable using let and a function-scoped variable using var. 
// Attempt to access these variables outside their respective scopes and explain the results in the comments.


var t= 3;
let y = 9;

if(true){
    let y = 6;
    console.log(y);
};
console.log(y);
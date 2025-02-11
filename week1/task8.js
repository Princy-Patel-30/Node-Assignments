console.log("task 8:");

//Create a document outlining best practices for variable declaration in modern JavaScript.
//  Include guidelines on when to use let, var, or const, taking into consideration block scoping, hoisting
// , and the immutability of constants. Provide code examples to illustrate each best practice.



// let in modern js  : block scope and can be reassigned 
let count = 0;

for (let i = 0; i < 5; i++) {
    count += i; //Reassigning count
}

console.log(count); 
//var in modern js  : is a global scope and can result in bugs 
function varscoped() {
    if (true) {
        var x = 30; //Function-scoped
    }
    console.log(x); 
}
varscoped();


// const in modern js : block scoped constant value and cannot be reasigned

const maxRetries = 5;     
let currentRetry = 0;           // Descriptive naming for better understandiing of code 

while (currentRetry < maxRetries) {
    currentRetry++;
}
// Use `let` and `const` to take advantage of block scoping,
//  which limits the visibility of variables to the block in which they are defined.
function blockScopeExample() {
    if (true) {
        let blockScoped = "I am block scoped";
        const alsoBlockScoped = "I am also block scoped";
        console.log(blockScoped); 
        console.log(alsoBlockScoped);
    }
}
blockScopeExample();

// Understand that `var` declarations are hoisted to the top of their function or global scope,
//  while `let` and `const` are hoisted but cannot be accessed before their declaration.
function hoistingExample() {
    console.log("Before declaration, hoistedVar:", hoistedVar); 
    var hoistedVar = "I am hoisted"; // Declaration is hoisted, but initialization is not
    console.log("After declaration, hoistedVar:", hoistedVar); 

    let hoistedLet = "I am also hoisted"; // 'let' is hoisted but not initialized
    console.log("After declaration, hoistedLet:", hoistedLet); 
}

hoistingExample();


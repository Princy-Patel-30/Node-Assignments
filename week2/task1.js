// Create example of function currying using closure and bind Ex. 
// multiply by 2 from multiplication function


//function currying using closure 
function multiply(a) {
    return function(b) {
        return a * b;
    }
}
const multiplication = multiply(5); 
console.log(multiplication(4));



//function currying using bind 
const multiply1 = (a, b) => {
    return a * b;
}
const multiply2 = multiply1.bind(null, 2);   //
console.log(multiply2(3)); 



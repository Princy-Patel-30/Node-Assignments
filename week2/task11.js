// Create function that in which you have to pass number in diff function call and when you want
// result at the end you have to call function with no argument.
// Ex. magicFunction(2)(3)(4)(5)()


function magicFunction(num) {
    let sum = num;
    function innerFunction(nextNum) {
        if (nextNum !== undefined) {
            sum += nextNum;
            return innerFunction; 
        } else {
            return sum;
        }
    }
    return innerFunction; 
}

const result = magicFunction(2)(3)(4)(5)(); 
console.log(result);
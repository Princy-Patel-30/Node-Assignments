console.log("task 15");
//Define an object called calculator with properties x and y.
//  Add a method named calculate to the object, 
// which takes an operation string ("add", "subtract", "multiply", "divide") 
// and uses an arrow function to perform the corresponding operation on x and y. 
// Inside the arrow function, use the "this" keyword to access the object properties.
//  Test the calculator with different operations.
const calculator = {
    x: 12,
    y: 3,
    calculate: function(operation) {
        const perform = (op) => {
            switch (op) {
                case "add":
                    return this.x + this.y; 
                case "subtract":
                    return this.x - this.y;
                case "multiply":
                    return this.x * this.y;
                case "divide":
                    return this.y !== 0 ? this.x / this.y : " " ;
                default:
                    return "not a operation given in que";
            }
        };

        return perform(operation);
    }
};

console.log(calculator.calculate("add"));      
console.log(calculator.calculate("subtract")); 
console.log(calculator.calculate("multiply"));  
console.log(calculator.calculate("divide"));  
console.log(calculator.calculate("percent"));   
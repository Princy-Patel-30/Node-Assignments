console.log("task 14 ");

//Create an object called person with properties name and age.
//Add a method named introduce to the object, which logs a message using the "this" keyword 
//to reference the name and age properties.
//Call the introduce method to introduce the person.

const person = {
    Name: "Princy",
    Age: 21,

    introduce: function() {
        console.log(`Hello, my name is ${this.Name} and I am ${this.Age} years old.`);
    }
};

person.introduce();
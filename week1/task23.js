console.log("task 23");


//Create a constructor function called Person that takes name and age as parameters and 
// assigns them as properties. Add a method greet to the prototype of the constructor,
//  which logs a greeting message using the person's name. 
// Instantiate two objects using the Person constructor and call the greet method on both.


function Person (name, age){
    this.name = name;
    this.age = age;
}
    Person.prototype.greet = function () {
        console.log(`greetings! person name is ${this.name}`)

}
const person1 = new Person("rani" , 21);
person1.greet();
const person2 = new Person("raja" , 43);
person2.greet();
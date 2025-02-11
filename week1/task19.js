console.log("task 19");


//Create two objects named originalObject and modifiedObject.
//Assign the same properties to both objects. Modify one property in modifiedObject and observe how it 
//affects the other object due to reference
//Log the properties of both objects to the console.


const originalObject = {
    Name :"princy",
    age : 21,
};
console.log(originalObject.Name)
console.log(originalObject.age)
const modifiedObject =originalObject;

modifiedObject.Name = "wertj";

console.log(modifiedObject.Name)

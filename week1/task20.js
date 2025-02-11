console.log("task 20");


//Create an object called originalPerson with properties name, age, and an array hobbies. 
//Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson
//and deepCopyPerson. Modify the hobbies array in one of the copies and observe how it affects the original object. 
//Log the properties of all three objects. 

//shallow copy changes the orignal value also 
const originalPerson = {
    name : "princy",
    age : 21,
    hobbies : ["reading", "swimming", "dancing"]
}

let shallowCopyPerson = {...originalPerson};
let deepcopyPerson = JSON.parse(JSON.stringify(originalPerson));
shallowCopyPerson.hobbies.push("gaming");
deepcopyPerson.hobbies.push("traveling");

console.log(" Original Object :", originalPerson);
console.log("Shallow Copy:", shallowCopyPerson);
console.log(" Deep Copy", deepCopyPerson);


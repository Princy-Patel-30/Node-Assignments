console.log("task  21 ");


//Create two objects user1 and user2 with similar properties.
//  Write a function compareObjects that compares the properties of both objects.
//  The function should log whether the objects are equal or not based on their properties. 
// Test the function with user1 and user2


const user1 = {
    name : "princy",
    age : 21,
}

const user2 = {
    name : "princy",
    age : 21,
}



//converting into 
function compareObjects(obj1 , obj2){
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
        console.log("yes they are same");
    }
    else {
        console.log("no they are different");
    }
}
compareObjects(user1, user2);
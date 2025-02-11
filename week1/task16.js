// console.log("task 16");

// //Create a constructor function named Car that takes a brand parameter.
// //Inside the constructor, create an object property carInfo with a nested method named displayInfo.
// //The displayInfo method should use the "this" keyword to access both the brand property of the object and a parameter passed to the displayInfo method. 
// // Instantiate a Car object and call the displayInfo method.

function Car(brand) {
    this.carInfo = {
        displayInfo: function(model) {
            console.log(`Brand: ${this.brand}, Model: ${model}`);
        }
    };
    this.brand = brand;
}

const myCar = new Car("BMW");
myCar.carInfo.displayInfo("M5");


//In this implementation, when you call myCar.carInfo.displayInfo("M5"),
//  the this keyword inside the displayInfo method refers to the carInfo object, not the Car instance. 
// As a result, this.brand is undefined because carInfo does not have a brand property.
//to solve that we use bind to explicitly set the this context of the displayInfo method to the Car1 instance. 

function Car(brand) {
    this.brand = brand;
    this.carInfo = {
        displayInfo : function(model){
            console.log(`The brand of the car is ${this.brand} and the model : ${model}`);
        }
    }
}
const Car1 = new Car("BMW");
const t =Car1.carInfo.displayInfo.bind(Car1);
t("m5");



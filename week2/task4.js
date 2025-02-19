// Create Car constructor function that takes parameters such as name, brand, and year.
//  Include a method displayInfo that prints the car details. 
// Create an instance using the constructor function and call the displayInfo method.

function Car(name , brand , year) {
    this.name = name,
    this.brand = brand,
    this.year = year;
    this.displayinfo = function(){
        console.log(`the car name  ${this.name} and the brand is ${this.brand} with year ${this.year}`)    }
};

const car2 = new Car("merc" , "M5" ,  1998);
car2.displayinfo();
//Create an object called student with properties name, 
// age, and an array grades. Add a method named calculateAverage to the object, 
// which calculates and returns the average of the grades. Iterate through the object properties
//  using a loop and log each property and its value.
//  Call the calculateAverage method and log the result.


const student = {
    name: "PRINCY",
    age: 21,
    grades: [90, 98, 92, 93, 96],

    calculateAverage: function() {
        let t = this.grades.length;
        const i = 0 ;
        let total = this.grades.reduce((sum, curr) => sum + curr, i);
        return total / t;
    }
};

for (let key in student) {
    if (typeof student[key] !== 'function') {
        console.log(`${key}: ${student[key]}`);
    }
}

console.log(`average :`,student.calculateAverage());

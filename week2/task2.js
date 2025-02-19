// Create program of which required map, filter chaining, and after that replace that with reduce
// Ex. 
const students = [
{ name: 'jeel', age: 21 }, //student
{ name: 'franklin', age: 25 },
{ name: 'vivek', age: 26 },
{ name: 'hardik', age: 23 },
]

// create array of name of student  whose age is greater than 18
const arr = students.filter( x => x.age > 18).map( x => x.name);   
console.log(arr);


//using reduce method
const arr2 = students.reduce((acc, student) => {
    if (student.age > 18)
         {
        acc.push(student.name); 
        }
          return acc;
     },  []);    
  console.log(arr2);
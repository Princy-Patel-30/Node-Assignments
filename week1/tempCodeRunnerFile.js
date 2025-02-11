console.log("task 10");

//Develop a script that uses an array to store the days of the week.
//  Use array methods such as push, pop, shift, or unshift to modify the array.
//  Print the array after each modification.
//  Additionally, use the indexOf method to find the index of a specific day.


const arr = ["mon" , "tue" , "wed" , "thru" , "fri" , "sat" , "sun"];

console.log(`original array is :`, arr);

arr.pop();
console.log(`After pop:`, arr);

arr.push("week");
console.log(`After push:`, arr);

arr.shift();
console.log(`After shift:`, arr);

arr.unshift("mon");
console.log(`After unshift:`, arr);


const t = arr.indexOf("mon");
console.log(`index of mon is :${t}`);
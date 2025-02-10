console.log("this is my task 2");

//Create a program that uses a while loop to iterate through an array of strings.
// Inside the loop, use forEach to print each string with an appended exclamation mark.
// The loop should terminate once the length of the current string exceeds 8 characters.
// Comment on the differences between while and forEach in this context.


const arr = ["hello", "world", "sanya", "tisha", "princyesst", "gkg" , "fefjwf" , "wwafw", "grgg"];
let i = 0; 
while (i < arr.length) {  
    let curr = arr[i];
    if (curr.length > 8) {
        break;    
    }  
    [curr].forEach(str => console.log(str + "!"));   
    i++; 
}



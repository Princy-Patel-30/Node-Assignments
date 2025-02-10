//1.Write a JavaScript program that uses a for loop to iterate over an array of numbers.
// 2.Within the loop, implement a condition to break out of the loop when a number greater than 5 is encountered. 
// Additionally, use continue to skip the iteration when the number is exactly 3.
//  Print the elements before and after applying these control flow statements.

const arr = [1,2,3,6,5];

for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] > 5 ){
    console.log(arr[i]);
    break;
    }
    else if (arr[i] ==3){
        continue;
    }
    console.log(arr[i]);
};
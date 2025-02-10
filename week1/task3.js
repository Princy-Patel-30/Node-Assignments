console.log("task 3");

//Develop a JavaScript script that utilizes nested loops (either for or while). 
// The outer loop should iterate from 1 to 3, and the inner loop from 1 to 5. 
// Use break to exit the inner loop when the current iteration count of the inner loop is equal to the outer loop's current iteration count. 
// Print the values of both loop variables to demonstrate the breaking condition.


for (let i = 1 ; i <=3 ; i++){
    for (let j = 1 ; j <=5 ; j++){
        if(j==i){
            break;
        }
        console.log(i, j);       
}
}
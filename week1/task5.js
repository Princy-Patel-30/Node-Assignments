console.log("task5");


//Create a program that demonstrates variable hoisting in JavaScript.
//Declare variables using both var and let within functions and blocks, and then attempt to access these variables before and after their declarations.
//Explain the behavior observed in the comments.


let i=2;  //block scoped
var t=21; //global scoped
const r = 10;//block scoped and cannot be reassigned 

function varhoisted(){                         //hoisting for var
    console.log(varhoisted);
    var varhoisted = 4;
    console.log(varhoisted);
}
varhoisted();
function LChoisted(){
    // console.log(Hlet);                      //hoisted let and var is invalid;
    //console.log(Hconst);
   let  Hlet = 3;
   const Hconst = 40;
   console.log(Hlet);
    console.log(Hconst);
}
LChoisted();


function LCblockhoisted(){
    if (true){
        let Hblocklet =20;
        const Hblockconst = 11;       //const and let are block scoped and hence will be only accesible to its block 
        console.log("Hblocklet: " + Hblocklet);
        console.log("Hblockconst: " + Hblockconst); 
    }

}
LCblockhoisted();

console.log("task4");

//Write a JavaScript program with comments explaining the differences between let, var, 
// and const in terms of variable declaration. 
// Include examples that showcase the scope of each type of variable and any restrictions they might have.

let i=2;  //block scoped
var t=21; //global scoped
const r = 10;//block scoped and cannot be reassigned 

function letfunc(){
    let i = 10;
    if (true){
        console.log(i);
    }
    console.log(i);
}
letfunc();
function varfunc(){
    var t =21;
    console.log(t);
}
varfunc();
function constfunc(){                             //const is block scope 
    const r = 3;
    console.log(r);
}
constfunc();
console.log(r);

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
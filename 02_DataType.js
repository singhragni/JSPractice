"Use Strict" // Use for strit mode.

// number
// string = " ",
// bigInt = ,
// null ,
// underfined there is no value 
// symbole - when we are taling about unique value.
// type of


console.log(typeof null) // object
console.log(typeof undefined); // undefined

// primitive nd not primitive .

// how we stroe data in memmeory and access them .that sis catrigroes -----primitive and non premitive 


// Refrence (non primitives)
// Array Objecys, Functions
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);


const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(sym2===sym3)


let bigIn = 11111111111111111111111111111111;


// array 

const heros = ["hr", "n", "dogs"];

console.log([...heros])

// obj
let myObj ={
    name:"ragini",
    age:22
}
console.log(myObj);

// function 

let myFunction = ()=>{
    console.log("hellow world");
}

myFunction()

console.log(typeof myFunction)

console.log(typeof bigIn)



/**
 * var , let , const 
 */

// var has local and global scope
var x =9;
let y =9;
if(y==9)
{x =90;
    console.log("d")
    let y = 19;
}


//let y = 90; this will give u err
console.log(y);

const z = 90;
if(y == 19){
    z =100;
z =10;
console.log(z)
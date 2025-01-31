// protype -----

function test(){
    let x = "scooty";
    function show(){
        console.log("i am show function");
    }
}

test.prototype.myOwnFunction = function(value){
        return (this.x = value);
}

let z = new test();


console.log(Object.values(test));


let a = new Array(1,3); console.log(a);

// let aww[4]; this is now allowed 
const ar = [1,2,3,,4];
// ar[9] = 9;

ar.forEach(myFun);

function myFun(value,index,arr){
    console.log("d")
    console.log(arr[1]);
}


console.log(test.prototype);
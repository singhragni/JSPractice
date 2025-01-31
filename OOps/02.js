function test(){
    console.log("hi from there");
}

test.prototype.myProperty = "hi from my property";
const myName = new test();
console.log(myName.myProperty);


//------------------


const A = {
    x:12,
    y :90
}

const teacher = {
    s :"rag",
    y : "test"
}


// Object.setPrototypeOf(teacher,A);

// console.log(teacher.x);


// console.log(Object.getOwnPropertyDescriptors(teacher))


// Object.getPrototypeOf("foo");


let x = {
    s: {
      value: 'rag',
      writable: true,
      enumerable: true,
      configurable: true
    },
    y: {
      value: 'test',
      writable: true,
      enumerable: true,
      configurable: true
    }
  }

//   console.log(Object.entries(x))

//   Object.keys(x).forEach((k,i,ar)=>{ console.log(ar[i])})

for (let i in x){
}



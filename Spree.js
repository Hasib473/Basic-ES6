// array copy
const arr1 =[1,2,3,4,5];
const arr2 = [...arr1]
console.log(arr2);

// Array marge 

let a =[1,2,3];
let b =[4,5,6];
let marge = [...a,...b];
console.log(marge);

// Object copy
let person={
    name:'Hasib',
    age:24
};
let clone = {...person};
console.log(clone);

// object marge 

// object marge same as array marge. Only should use curly bacess 


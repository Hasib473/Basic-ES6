// // old 

// function add (a,b ){
//     return a+b;
// }
// console.log(add(3,4));

// but in the arrow function we can write this code very easyly

// one line return

const add = (a,b) => a+b;
console.log(add(10,10))

// Single paramitter   (optional first backeet() )

const square = x => x*x;
console.log(`squre is ${square(4)}`);

// no parramert 

const noParammeter = ()=> 'hello world';
console.log(noParammeter());

// this problem

function normalFunc() {
  console.log(this);
}
normalFunc(); // Window (in browser)

// Arrow function
const arrowFunc = () => {
  console.log(this);
}
arrowFunc(); 


// filter using arrow function for filtering even number

const numbers=[1,3,4,5,6,7,8,9];
const evenNumbers = numbers.filter(x => x%2 === 0 )
console.log(evenNumbers);
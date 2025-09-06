// Array Distructuring
let numbers =[12,13,14];
let [a,b,c]=numbers;
console.log(a);
console.log(b);
console.log(c);

// Skipping values 

let arr =[1,2,3,4];
let [x, , y]=arr;
console.log(y);

// default values

let arrys =[1];
let [i,j=10]=arrys
console.log(i,j);

// object distructuring 

let person ={
    name:'Hasib',
    age: 24
}
let {name,age}=person;
console.log(name);
console.log(age);

// defarrent variable name
let student ={id:101,dept:'cse'};
let {id:stuedentId, dept:studentdept}=student;
console.log(studentdept);
console.log(stuedentId);
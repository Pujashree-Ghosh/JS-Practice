

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);  
console.log(...arrValue); 

// copy array
const arr1 = [1,2];
const arr2 = [...arr1, 3,4,5]; 
console.log(...arr1);
console.log(...arr2);

//clone array

let arr3 = [ 31, 32, 33];
let arr4 = arr3;

console.log(...arr3); 
console.log(...arr4); 

arr3.push(34);

console.log(...arr3); 
console.log(...arr4); 

//clone with spread operator

let arr5 = [ 51, 52, 53, 54];


let arr6 = [...arr5];

console.log(...arr5); 
console.log(...arr6);

arr5.push(55);

console.log(...arr5);
console.log(...arr6); 


//with obj

const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };


const obj3 = {...obj1, ...obj2};

console.log(obj3);
// console.log(...obj3); 


//REST PARAMETER
let func = function(...args) {
    console.log(args);
}
var a=[1647];
func(3); 
func(4, 5, 6); 
func(...a);

//MULTIPLE ARGUMENT USING SPREAD OPERATOR
function sum(x, y ,z) {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1); 

//another eg

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

console.log(numberStore);


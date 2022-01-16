console.log(a);
console.log(typeof a);
console.log(x);
console.log(f);
console.log(typeof f);
f();

var a = 7;
let x = 5;
const c = 78;
function f() {
  console.log("hoisting");
}

console.log(x);
console.log(typeof x);

console.log(c);
console.log(typeof c);

var func = () => {
  console.log("arrow function");
};
console.log(func);
console.log(typeof func);
console.log(func());

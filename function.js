// var d=10;
// function a(){
//     var d=27;
//     console.log(d);
// }
// a();
// console.log(typeof a);
// console.log(d);
// var arr=()=>{
//     console.log("pg");
// }
// console.log(arr);
// console.log(typeof arr);

// var w = myFunction(2, 3);
// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction);
// console.log(w);

// function myFunc(a, b) {

//     console.log(a + b);
//   }
//   myFunc(4, 4);

//   function myFunc1(a, b) {

//     return a + b;
//   }
//   console.log(myFunc1(5, 5));

//   const p = function(a, b) {return a * b};
//   console.log(p(5,10));

//   // self invoking function

// (function () {
//     console.log("hello");  // I will invoke myself
//   })();

// first class function

//1 

// var b = function (p) {
//   console.log(p);
// }
// b(function xyz() {

// });

// //2

// var b = function (p) {
//   return function () {
//     console.log("hi");
//   }
// }
// console.log(b());

// //3

// var b = function (p) {
//   console.log(p);
// }
// function xyz() {

// }

// b(xyz);

//callback functions

setTimeout(function (){
  console.log("cbfunc");
}, 4000);

function s(t){
  console.log("s");
  t();
}
s(function u(){
  console.log("t");
})
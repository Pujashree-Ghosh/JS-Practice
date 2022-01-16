//1

// function getItems() {
//   return [10, 20];
// }

// let items = getItems();
// let thirdItem = items[2] != undefined ? items[2] : 0;

// console.log(thirdItem);

// using destructing assignment

// let [, , thirdItem = 0] = getItems();

// console.log(thirdItem);

//2

// function getScores() {
//   return [70, 80, 90];
// }
// let scores = getScores();
// let x = scores[0],
//   y = scores[1],
//   z = scores[2];
// console.log(x);
// console.log(y);
// console.log(z);

//using destructing assignment

// let [x, y, z] = getScores();

// console.log(x);
// console.log(y);
// console.log(z);

//3

function getScores() {
  return [70, 80, 90, 100];
}

// let [x, y, z] = getScores();

// console.log(x);
// console.log(y);
// console.log(z);

//using destructing assignment

let [x, y, ...args] = getScores();
console.log(x);
console.log(y);
console.log(args);

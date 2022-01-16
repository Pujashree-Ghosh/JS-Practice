const mySet = new Set();

console.log("initially the metSet set looks like:", mySet);

mySet.add("hi");
mySet.add("this");
mySet.add("is");
mySet.add("your");
mySet.add("js");
mySet.add("code");
mySet.add("js");
mySet.add("hi");
mySet.add("is");
mySet.add("for");

console.log("The metSet set now looks like:", mySet);

console.log(mySet.has("js"));
console.log(mySet.has("pujashree"));

mySet.delete("this");
mySet.delete("your");

console.log("After deletion metSet set looks like:", mySet);

//use a constructor to initialize the set

let cset = new Set([
  1,
  2,
  3,
  4,
  "hello",
  true,
  { name: "pujashree", age: 28 },
  "set",
]);

console.log(cset);

console.log(cset.size);

//Iterating a Set

for (let item of cset) {
  console.log("Item is :", item);
}

//or

cset.forEach((item) => {
  console.log("item is:", item);
});

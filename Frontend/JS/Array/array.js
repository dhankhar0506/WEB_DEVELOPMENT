const arr = [10, 20, 40, 12, 20, 70];

console.log("Before:", arr);

// length
console.log("Length:", arr.length); // 6

// push() -> Adds element(s) to the end
arr.push(100);
console.log("push(100):", arr);

// pop() -> Removes the last element
arr.pop();
console.log("pop():", arr);

// unshift() -> Adds element(s) to the beginning
arr.unshift(300);
console.log("unshift(300):", arr);

// shift() -> Removes the first element
arr.shift();
console.log("shift():", arr);

// includes() -> Checks whether an element exists
console.log("Includes 100:", arr.includes(100));

// indexOf() -> Returns the first index of an element
console.log("Index of 3:", arr.indexOf(3));
console.log("Index of 20:", arr.indexOf(20));

// lastIndexOf() -> Returns the last index of an element
console.log("Last index of 3:", arr.lastIndexOf(3));
console.log("Last index of 20:", arr.lastIndexOf(20));

// find() -> Returns the first element that satisfies the condition
const result = arr.find((item) => item > 20);
console.log("find:", result);

// findIndex() -> Returns the index of the first element
// that satisfies the condition
const result_1 = arr.findIndex((item) => item > 20);
console.log("findIndex:", result_1);

// slice() -> Returns a portion of an array without modifying the original
console.log("slice:", arr.slice(2, 4));

// splice() -> Adds/removes/replaces elements in the original array
arr.splice(1, 3, 200, 400, 120);
console.log("splice(startIndex, deleteCount, newElements):", arr);

// ==================================================
// Iteration Methods
// ==================================================

const arr_1 = [1, 2, 3, 4, 5];

console.log("Iteration Methods Start:", arr_1);

// forEach() -> Executes a function for each element
arr_1.forEach((item) => {
  console.log(item);
});

// map() -> Creates a new array by transforming each element
const new_Arr = arr_1.map((item) => item * 2);
console.log("map:", new_Arr);

// filter() -> Creates a new array with elements that satisfy a condition
const new_Arr_1 = arr_1.filter((item) => item !== 4);
console.log("filter:", new_Arr_1);

// reduce() -> Reduces the array to a single value
const new_Arr_2 = arr_1.reduce((acc, item) => {
  return acc + item;
}, 0.1);

console.log("reduce:", new_Arr_2);

console.log("Finally arr_1:", arr_1);

// ==================================================
// Sorting / Reversing
// ==================================================

const arr_3 = [21, 17, 0, 2, 88];

console.log("Before sort:", arr_3);

arr_3.sort((a, b) => a - b);

console.log("After sort:", arr_3);

// toSorted() -> Returns a sorted copy without modifying the original
const arr_4 = [5, 1, 4, 2, 3];

console.log("Before toSorted:", arr_4);

const sortedArr = arr_4.toSorted((a, b) => a - b);

console.log("After toSorted:", sortedArr);
console.log("Original array:", arr_4);

// reverse() -> Reverses the original array
const arr_5 = [1, 2, 3, 4, 5];

console.log("Before reverse:", arr_5);

arr_5.reverse();

console.log("After reverse:", arr_5);

// toReversed() -> immutable

const a = [1, 2];

const b = [3, 4];

const c = [5, 6];

const result_10 = a.concat(b);
const result_20 = [...a, ...b, ...c];

console.log("concat", result_10);
console.log("spread", result_20);

// Fill
const newArray = new Array(5);
console.log("before Fill: ", newArray);

newArray.fill(0)

console.log("After Fill: ", newArray);
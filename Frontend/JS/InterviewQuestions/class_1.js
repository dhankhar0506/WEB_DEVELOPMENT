// ============================================================
// JavaScript Practice
// ============================================================

// ============================================================
// 1. Array Comparison
// ============================================================

// Arrays are reference types.
// Two separately created arrays have different references.

//console.log([] == []); // false
//console.log([] === []); // false

// const a = [];
// const b = a;

//console.log(a == b); // true
//console.log(a === b); // true

// ============================================================
// 2. Confirm Popup
// ============================================================

// confirm() is a browser feature.
// It returns:
// true  → OK
// false → Cancel

// const result = confirm("Are you sure?");
// console.log(result);

// ============================================================
// 3. Two Sum Using HashMap
// ============================================================

function find18(arr, target) {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const remaining = target - arr[i];

    if (hashMap.has(remaining)) {
      return [i, hashMap.get(remaining)];
    }

    hashMap.set(arr[i], i);
  }

  return [];
}

const arr = [15, 100, 35, 20, 7, 11];

// Sort array in ascending order
const sortArray = arr.sort((a, b) => a - b);

// console.log(sortArray);

// Find two numbers whose sum is 18
// const result = find18(arr, 18);
// console.log(result);

// ============================================================
// 4. Post-Increment Operator
// ============================================================

let num = 100;

let z = num++;

// Post-increment:
// First assign the current value to z,
// then increase num by 1.

// console.log(z);        // 100
// console.log(num);      // 101
// console.log(num + z);  // 201

// ============================================================
// 5. Reverse Every Word in a String
// ============================================================

let str = "hello world javascript";

// console.log(str.split(" "));

let updatedArr = str
  .split(" ")
  .map((item) => item.split("").reverse().join(""));

// console.log(updatedArr);

// Output:
// ["olleh", "dlrow", "tpircsavaj"]

// ============================================================
// 6. Reverse a Single Word
// ============================================================

let word = "gourav";

// Step-by-step
const sp = word.split("");
const rev = sp.reverse();
const jn = rev.join("");

// console.log(jn); // "varuog"

// Shorter version

let reversed = word.split("").reverse().join("");

// console.log(reversed); // "varuog"

// ============================================================
// 7. Character count
// ============================================================
function charCount(str) {
  const arr = str.split("");
  const hashMap = new Map();

  for (let item of arr) {
    if (hashMap.has(item)) {
      hashMap.set(item, hashMap.get(item) + 1);
    } else {
      hashMap.set(item, 1);
    }
  }
  return hashMap;
}

const str_1 = "my name is gourav";
// const result_1 = charCount(str_1);
// console.log(result_1);

// ============================================================
// 8. seprate Character and number
// ============================================================

function seprateNumber(arr) {
  const char = [];
  const number = [];
  arr.forEach((element) => {
    if (typeof element === "string") {
      char.push(element);
    } else {
      number.push(element);
    }
  });
  return [char, number];
}

const arr_1 = ["a", 1, "b", 2, "c", 3];
// const result_1 = seprateNumber(arr_1);
// console.log(result_1);

// ============================================================
// 9. swap two numbers
// ============================================================

let a_1 = 10;
let b_1 = 20;
// console.log(`a: ${a_1}  b: ${b_1}`);

const temp = b_1;
b_1 = a_1;
a_1 = temp;

// console.log(`Swap => a: ${a_1}  b: ${b_1}`);

// OR
let a_2 = 10;
let b_2 = 20;
// console.log(`a: ${a_2}  b: ${b_2}`);

[a_2, b_2] = [b_2, a_2];

// console.log(`Swap=>: a: ${a_2}  b: ${b_2}`);

// ============================================================
// 10. Intersection of Two Arr
// ============================================================

// NOTE: arr1 and arr2 must be sorted
function intersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let intersectionArr = [];

  const len_1 = arr1.length;
  const len_2 = arr2.length;

  while (i < len_1 && j < len_2) {
    if (arr1[i] == arr2[j]) {
      intersectionArr.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return intersectionArr;
}

const arr_3 = [1, 2, 3, 4, 5];
const arr_4 = [3, 4, 5, 6, 7];

const result_4 = intersection(arr_3, arr_4);
// console.log(result_4);

// ============================================================
// 11. Mulitplication using Reduce method
// ============================================================

const arr_5 = [1, 2, 3, 4, 5];

const multiplication = arr_5.reduce((acc, num) => {
  return acc * num;
}, 1);

// console.log("resul",multiplication)

// ============================================================
// 12. Call API using Fetch
// ============================================================

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

// ============================================================
// 13. Scope
// ============================================================

var a = 50;
{
  var a = 5000;
}

let b = a;
{
  let b = 3000;
}

// console.log("A:", a);
// console.log("B:", b);

// ============================================================
// 14. return element more than one count
// ============================================================

function moreThanOne(arr) {
  const hashMap = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) {
      hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    } else {
      hashMap.set(arr[i], 1);
    }
  }
  for (let [key, value] of hashMap) {
    if (value > 1) {
      result.push(key);
    }
  }
  return result;
}

function optimized(arr) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const finalArr = [...map].filter(([key, value]) => {
    return value > 1;
  });
  return finalArr.map(([key]) => key);
}

const arr_7 = [2, 2, 1, 5, 6, 8, 10, 1, 7, 8];
// const sol = moreThanOne(arr_7);
// console.log(sol);

const sol = optimized(arr_7);
console.log(sol);



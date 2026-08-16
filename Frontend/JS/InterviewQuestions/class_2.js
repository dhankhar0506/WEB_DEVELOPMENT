// ============================================================
// 1. Return First Repeated Character
// ============================================================

function firstRepeatedChar(str) {
  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }

    seen.add(char);
  }

  return null;
}

const str = "geeksforgeeks";

// console.log(firstRepeatedChar(str)); // "e"

// ============================================================
// 2. Object vs `this`
// ============================================================

// "use strict";

let obj = {
  name: "gourav",

  greet: function () {
    return this.name;
  },
};

let a = obj.greet;
let b = obj;

// console.log("B:", b.greet());
// console.log("A:", a());
// console.log("Obj:", obj.greet());

// ============================================================
// 3. Find Duplicate Elements
// ============================================================

function duplicate(arr) {
  const hashmap = new Map();

  for (let item of arr) {
    hashmap.set(item, (hashmap.get(item) || 0) + 1);
  }

  return [...hashmap]
    .filter(([key, value]) => {
      return value > 1;
    })
    .map(([key]) => {
      return key;
    });
}

const arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];

// const result_1 = duplicate(arr_2);

// T.C → O(n)
// S.C → O(n)

// console.log(result_1); // [2, 5]

// ============================================================
// 4. `!` Operator Handling
// ============================================================

let abc = 2;

let a_3 = !--abc;
// abc: 2 → 1
// !1 → !true → false

let b_3 = !--abc;
// abc: 1 → 0
// !0 → !false → true

// console.log("B:", b_3);

// console.log(a_3, b_3); // false true

// ============================================================
// 5. Comma Operator
// ============================================================

// ➡️ Execute all expressions from left to right.
// ➡️ Return only the last expression's value.
// ============================================================

function sum() {
  console.log("hello");
  return 2 + 2;
}

function square() {
  console.log("hii");
  return 4 * 4;
}

let a_4 = (sum(), square());

// console.log(a_4); // 16

// ============================================================
// Output of Comma Operator
// ============================================================

// sum() executes first
// → prints "hello"
// → returns 4
//
// square() executes second
// → prints "hii"
// → returns 16
//
// Comma operator returns only the last value
// → a_4 = 16

// ============================================================
// Output of Comma Operator
// ============================================================

function stringJoint(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let i = 0;
  let j = 0;

  let result = [];

  while (i < len1 && j < len2) {
    result.push([str1[i] + str2[j]]);
    i++;
    j++;
  }
  return result.join(",");
}

let str1 = "Gourav";
let str2 = "Dhankhar";

const result_3 = stringJoint(str1, str2);
// console.log(result_3);

// ============================================================
// longest word in string
// ============================================================

function longestString(str) {
  const arr = str.split(" ");
  console.log(arr);
  let longestWord = "";
  for (let item of arr) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }

  return longestWord;
}

const str_3 = "this is my JS preparation series";

const result_4 = longestString(str_3);

console.log(result_4); // preparation



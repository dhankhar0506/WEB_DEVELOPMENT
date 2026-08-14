# Array

## 1. What is an Array?

* An array is an **ordered collection** used to store multiple values in a single variable.
* An array is a **mutable, dynamic, ordered collection** in JavaScript used to store multiple values. It is a specialized object.

```javascript
const data = ["Gourav", 25, true, null, { city: "Delhi" }, [1, 2]];

typeof([]); // "object"

new Array(10, 20, 30);
```

---

## 2. Is Array Primitive or Non-Primitive?

* Array is **non-primitive** and technically a special type of object.

```javascript
const arr = [1, 2, 3];

typeof arr; // "object"

Array.isArray(arr); // true
```

---

## 3. Arrays are Mutable

Arrays are mutable, meaning we can modify the same existing array.

```javascript
const arr = [10, 20, 30];

arr[0] = 100;

console.log(arr);
// [100, 20, 30]
```

---

## 4. Array Index

Array indexing starts from **0**.

---

## 5. `length`

Returns the number of elements.

```javascript
const arr = [10, 20, 30];

arr.length; // 3
```

> `length` is a **property**, not a method.

---

## 6. `push()`

Adds element(s) to the **end**.

```javascript
const arr = [1, 2, 3];

arr.push(4);

console.log(arr);
// [1, 2, 3, 4]
```

---

## 7. `pop()`

Removes the last element and returns it.

```javascript
const arr = [1, 2, 3];

const removed = arr.pop();

console.log(removed); // 3
console.log(arr);     // [1, 2]
```

---

## 8. `unshift()`

Adds element(s) to the **beginning**.

```javascript
const arr = [2, 3];

arr.unshift(1);

console.log(arr);
// [1, 2, 3]
```

---

## 9. `shift()`

Removes the first element and returns it.

```javascript
const arr = [1, 2, 3];

arr.shift();

console.log(arr);
// [2, 3]
```

### `push()`, `pop()`, `unshift()`, `shift()`

**All four mutate the original array.**

| Method      | Operation | Position |
| ----------- | --------- | -------- |
| `push()`    | Add       | END      |
| `pop()`     | Remove    | END      |
| `unshift()` | Add       | START    |
| `shift()`   | Remove    | START    |

---

## 10. `includes()`

Checks whether a value exists. Returns a **boolean**.

```javascript
const arr = [10, 20, 30];

arr.includes(20); // true
arr.includes(50); // false
```

---

## 11. `indexOf()`

Returns the **first index** of a value.

```javascript
const arr = [10, 20, 30];

arr.indexOf(20); // 1
```

> Not found → `-1`

---

## 12. `lastIndexOf()`

Returns the index of the **last occurrence**.

```javascript
const arr = [10, 20, 10, 30];

arr.lastIndexOf(10); // 2
```

---

## 13. `find()`

Returns the **first element** that satisfies a condition.

> `find()` = first matching element.

```javascript
const arr = [10, 20, 30, 40];

const result = arr.find(num => num > 20);

console.log(result); // 30
```

---

## 14. `findIndex()`

Returns the **index of the first matching element**.

```javascript
const arr = [10, 20, 30, 40];

arr.findIndex(num => num > 20);
// 2
```

---

## 15. `slice()`

Returns a portion of an array **without modifying the original array**.

```javascript
slice(start, end)
```

* `slice()` supports negative indexes.
* Does **NOT** mutate the original array.

```javascript
const arr = [10, 20, 30, 40];

const result = arr.slice(1, 3);

console.log(result);
// [20, 30]

console.log(arr);
// [10, 20, 30, 40]
```

---

## 16. `splice()`

Used to **add, remove or replace** elements in the original array.

* `splice()` mutates the original array.
* Syntax:

```javascript
splice(startIndex, deleteCount)
```

Example:

```javascript
const arr = [10, 20, 30, 40];

arr.splice(1, 2);
// Start at index 1, delete 2 elements.

console.log(arr);
// [10, 40]
```

### Can `splice()` add multiple elements?

Yes.

```javascript
arr.splice(startIndex, deleteCount, item1, item2, item3, ...);
```

```javascript
const arr = [10, 20, 30];

arr.splice(1, 0, 100, 200, 300);

console.log(arr);
// [10, 100, 200, 300, 20, 30]
```

---

# Iteration Methods

## 1. `forEach()`

Executes a function for each array element.

* `forEach()` is mainly used when you want to perform an action for each element.
* `return`

```javascript
const arr = [10, 20, 30];

arr.forEach(num => {
  console.log(num);
});
```

---

## 2. `map()`

Transforms every element and returns a **new array**.

> `map()` = transform each element → new array.

```javascript
const arr = [1, 2, 3];

const result = arr.map(num => num * 2);

console.log(result);
// [2, 4, 6]
```

---

## 3. `filter()`

Returns a **new array** containing elements that pass a condition.

```javascript
const arr = [10, 20, 30, 40];

const result = arr.filter(num => num > 20);

console.log(result);
// [30, 40]
```

---

## 4. `reduce()`

Reduces an array into **one final accumulated value**.

```javascript
const arr = [10, 20, 30];

const total = arr.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(total);
// 60
```

---

## 5. `some()`

Checks whether **at least one** element satisfies a condition.

> `some` = at least **ONE**

```javascript
const arr = [10, 20, 30];

arr.some(num => num > 25);
// true
```

---

## 6. `every()`

Checks whether **all elements** satisfy a condition.

> `every` = **ALL**

```javascript
const arr = [10, 20, 30];

arr.every(num => num > 5);
// true
```

---

## Iteration Methods Quick Comparison

| Method      | Purpose           | Returns         |
| ----------- | ----------------- | --------------- |
| `map()`     | Transform **ALL** | New Array       |
| `filter()`  | Select matching   | New Array       |
| `find()`    | First match       | Element         |
| `some()`    | Any match?        | Boolean         |
| `every()`   | All match?        | Boolean         |
| `reduce()`  | Accumulate        | One final value |
| `forEach()` | Perform action    | `undefined`     |

---

# Sorting / Reversing

## 1. `reverse()`

Reverses the original array.

* Mutates original array.

```javascript
const arr = [1, 2, 3];

arr.reverse();

console.log(arr);
// [3, 2, 1]
```

---

## 2. `toReversed()`

Returns a new array instead of mutating the original.

```javascript
const reversed = arr.toReversed();
```

---

## 3. `sort()`

Sorts the original array.

```javascript
const names = ["Rahul", "Aman", "Gourav"];

names.sort();
```

For numbers:

```javascript
const arr = [100, 5, 20, 2];

arr.sort();

console.log(arr);
// [100, 2, 20, 5]
```

> By default, `sort()` compares values as strings.

---

## 4. `sort()` for Numbers

### Ascending

```javascript
const arr = [100, 5, 20, 2];

arr.sort((a, b) => a - b);

// [2, 5, 20, 100]
```

### Descending

```javascript
arr.sort((a, b) => b - a);
```

> In both cases the original array mutates.

---

## 5. `toSorted()`

Returns a **new array**.

```javascript
const sorted = arr.toSorted((a, b) => a - b);
```

---

## 6. Array ↔ String

```javascript
const arr = ["HTML", "CSS", "JS"];

arr.join(" ");
// "HTML CSS JS"
```

---

## 7. `concat()`

Combines arrays and returns a **new array**.

```javascript
const a = [1, 2];

const b = [3, 4];

const result = a.concat(b);

console.log(result);
// [1, 2, 3, 4]
```

---

## 8. Spread Operator for Concatenation

Often we use spread for concatenation.

```javascript
const result = [...a, ...b];
```

---

# `Array.isArray()`

Checks whether something is an array.

```javascript
Array.isArray([1, 2]);
// true

Array.isArray({});
// false
```

---

# Mutating Methods

These methods modify the original array.

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

---

# Non-Mutating Methods

These return a new value/array without changing the original array itself:

```text
map()
filter()
slice()
concat()
toSorted()
toReversed()
```

---

# Find Maximum Number and Minimum

```javascript
const arr = [10, 50, 20];

Math.max(...arr);
// 50

Math.min(...arr);
// 10
```

---

# IMPORTANT POINTS

* **Homogeneous** → all elements have the same data type.
* **Heterogeneous** → elements can have different data types.
* **Interview:** JavaScript arrays can be homogeneous or heterogeneous; the language does not require all elements to have the same type.

---

## Arrays Use Indexes

Array elements are accessed using indexes starting from `0`.

```javascript
const arr = ["HTML", "CSS", "JS"];
```

### Access Last Element

```javascript
arr[arr.length - 1];
// JS

arr.at(-1);
// JS
```

---

# Delete Elements in Array

```javascript
const arr = [10, 20, 30];

delete arr[1];
```

---

# JavaScript Array Static Methods

> **Instance method** → called on an existing array: `arr.map()`.

> **Static method** → called directly on the `Array` constructor: `Array.from()`.

---

## 1. `Array.isArray()`

Checks whether a value is an array.

```javascript
Array.isArray([1, 2, 3]);
// true

Array.isArray({});
// false

Array.isArray("hello");
// false

Array.isArray(null);
// false
```

---

## 2. `Array.from()`

Creates a new array from an **iterable or array-like object**.

```javascript
Array.from("Gourav");

// ["G", "o", "u", "r", "a", "v"]
```

---

## 3. `Array.of()`

Creates a new array from the arguments you provide.

```javascript
Array.of(10, 20, 30);

// [10, 20, 30]
```

---

## 4. `new Array()` vs `Array.of()`

```javascript
new Array(5);
// 5 empty slots

Array.of(5);
// [5]
// only one element with value 5
```

---

## 5. `keys()`

Returns an iterator containing array indexes.

```javascript
const arr = ["HTML", "CSS", "JS"];

const keys = arr.keys();

console.log([...keys]);
// [0, 1, 2]
```

---

## 6. `values()`

Returns an iterator containing the array values.

```javascript
const arr = ["HTML", "CSS", "JS"];

console.log([...arr.values()]);
// ["HTML", "CSS", "JS"]
```

---

## 7. `fill()`

```javascript
const arr = new Array(5);

arr.fill(0);

// [0, 0, 0, 0, 0]
```

---

# Sparse Elements

A **sparse array** is an array that has empty/missing slots between its elements.

```javascript
const arr = [10, , 30];

console.log(arr);
// [10, empty, 30]

console.log(arr.length);
// 3
```

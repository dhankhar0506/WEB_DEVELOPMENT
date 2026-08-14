# JavaScript — Spread, Functions, Conditionals & Loops

---

# 1. Spread Operator `...`

The **Spread Operator** is used to spread elements of an iterable into individual values.

### Copy an Array

Creates a **shallow copy**.

```js
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);
// [1, 2, 3]
```

> **Important:** Spread creates a **shallow copy**, not a deep copy.

### Combine Arrays

```js
const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result);
// [1, 2, 3, 4]
```

---

# 2. Rest Operator `...`

The **Rest Operator** uses the same `...` syntax as Spread, but its purpose is different.

> **Rest collects the remaining values into a single array or object.**

### Rest with Objects

```js
const user = {
    name: "Gourav",
    age: 25,
    city: "Delhi"
};

const { name, ...rest } = user;

console.log(rest);
// { age: 25, city: "Delhi" }
```

### Spread vs Rest

| Spread                   | Rest                             |
| ------------------------ | -------------------------------- |
| Expands values           | Collects values                  |
| Used to copy/combine     | Used to collect remaining values |
| `const arr2 = [...arr1]` | `const { name, ...rest } = user` |

---

# 3. What is Enumerable?

**Enumerable** is a property attribute that decides whether a property should appear during common object enumeration operations.

It allows us to exclude/hide a property from common object listing methods, copying operations, and loops, while the property still exists in the object.

### Example

```js
const user = {
    name: "Gourav",
    age: 25
};

Object.defineProperty(user, "id", {
    value: 101,
    enumerable: false
});

console.log(user.id);
// 101

console.log(Object.keys(user));
// ["name", "age"]
```

> `id` exists in the object, but it is **not enumerated** by `Object.keys()`.

---

## What is an Enumeration Operation?

**Enumeration** simply means going through or listing an object's properties one by one.

Common examples:

```js
Object.keys()
Object.values()
Object.entries()

for...in
```

---

## Making a Method Non-Enumerable

We can also make a method non-enumerable.

```js
const user = {
    name: "Gourav"
};

Object.defineProperty(user, "greet", {
    value: function () {
        console.log("Hello");
    },
    enumerable: false
});
```

The method still exists:

```js
user.greet();
// Hello
```

But it will not appear in:

```js
Object.keys(user);
```

---

## Enumerable vs Non-Enumerable

```text
USER OBJECT

┌──────────────────────────┐
│ name: "Gourav"     👁️    │ enumerable
│ age: 25            👁️    │ enumerable
│ city: "Delhi"      👁️    │ enumerable
│ internalId: 9283   🙈    │ non-enumerable
└──────────────────────────┘
```

---

# 4. Conditionals

**Conditional statements** allow us to execute different code based on whether a condition is `true` or `false`.

---

## `if...else if...else`

```js
const marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}
```

### Flow

```text
marks >= 90
     ↓
   false
     ↓
marks >= 70
     ↓
   true
     ↓
   "B"
```

---

# 5. `switch`

`switch` is useful when we need to compare one value against multiple possible cases.

```js
const role = "admin";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    case "guest":
        console.log("Guest access");
        break;

    default:
        console.log("Invalid role");
}
```

### `break`

> Without `break`, JavaScript continues executing the next cases.

This is called **fall-through**.

---

# 6. Ternary Operator `? :`

The **ternary operator** is a short way to write a simple `if...else`.

```js
const result = age >= 18 ? "Adult" : "Minor";
```

### Structure

```text
condition ? valueIfTrue : valueIfFalse
```

---

# 7. `&&` for Conditional Execution

`&&` can be used to execute something only when the left-side condition is truthy.

```js
const isLoggedIn = true;

isLoggedIn && console.log("Welcome!");
```

If `isLoggedIn` is `false`, the right side is not executed.

---

# 8. Functions

A **function** is a reusable block of code designed to perform a particular task.

### Example

```js
function add(a, b) {
    return a + b;
}

add(10, 20);
// 30
```

### Important Terms

| Term     | Meaning           |
| -------- | ----------------- |
| `add`    | Function name     |
| `a, b`   | Parameters        |
| `10, 20` | Arguments         |
| `return` | Sends result back |

---

# 9. Different Types of Functions

## 9.1 Function Declaration

```js
function greet(name) {
    return `Hello ${name}`;
}

greet("Gourav");
```

> Function declarations are **hoisted**, so calling the function before its declaration works.

```js
greet("Gourav");

function greet(name) {
    return `Hello ${name}`;
}
```

---

## 9.2 Function Expression

A **function expression** is a function stored in a variable.

```js
const greet = function () {
    console.log("Hello");
};

greet();
```

---

## 9.3 Arrow Function

Arrow functions provide a shorter syntax for writing functions.

```js
const add = (a, b) => {
    return a + b;
};
```

### Implicit Return

```js
const square = n => n * n;
```

> **Important:** Arrow functions don't have their own `this`.

---

## 9.4 Callback Function

A **callback function** is a function passed to another function to be executed later or when needed.

```js
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Gourav");
}

processUser(greet);
```

Here:

```text
greet → Callback Function
processUser → Function receiving the callback
```

---

# 10. Higher-Order Function

A **Higher-Order Function** is a function that:

1. Takes another function as an argument, **or**
2. Returns another function.

### Example

```js
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;

calculate(10, 20, add);
// 30
```

Here:

```text
calculate → Higher-Order Function
add       → Callback Function
```

### Common Higher-Order Array Methods

```js
map()
filter()
reduce()
forEach()
```

---

# 11. IIFE

**IIFE = Immediately Invoked Function Expression**

A function that is executed immediately after it is created.

```js
(function () {
    console.log("Hello");
})();
```

### Flow

```text
Create Function
      ↓
Immediately Execute
      ↓
"Hello"
```

---

# 12. Generator Function

A **Generator Function** is a special function that can pause and resume execution.

It is declared using `function*`.

```js
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

gen.next();
// { value: 1, done: false }

gen.next();
// { value: 2, done: false }
```

> Generator functions use `yield` to pause execution and `next()` to resume it.

---

# 13. Loops

A **loop** repeatedly executes code until a condition is met or a sequence has been processed.

---

## 13.1 `for` Loop

Best when you need control over the index.

```js
const arr = ["A", "B", "C"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Output:

```text
A
B
C
```

---

## 13.2 `while` Loop

Runs while a condition remains `true`.

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Output:

```text
0
1
2
3
4
```

---

## 13.3 `do...while` Loop

Executes **at least once**, then checks the condition.

```js
let i = 10;

do {
    console.log(i);
    i++;
} while (i < 5);
```

Output:

```text
10
```

> Even though `i < 5` is `false`, the code runs once before checking the condition.

---

## 13.4 `for...of`

Used to iterate over **values of iterables**.

```js
const arr = ["React", "Node", "MongoDB"];

for (const value of arr) {
    console.log(value);
}
```

Output:

```text
React
Node
MongoDB
```

### Common Iterables

* Array
* String
* Map
* Set

> **Important:** Plain JavaScript objects are not iterable by default, which is why `for...of` doesn't directly work on them.

---

## 13.5 `for...in`

Used to iterate over **enumerable string property keys of an object**, including inherited enumerable ones.

```js
const user = {
    name: "Gourav",
    age: 25
};

for (const key in user) {
    console.log(key);
}
```

Output:

```text
name
age
```

### `for...in` vs `for...of`

| `for...in`                    | `for...of`           |
| ----------------------------- | -------------------- |
| Iterates over keys/properties | Iterates over values |
| Commonly used with objects    | Used with iterables  |
| `name`, `age`                 | `"Gourav"`, `25`     |

---

# 14. `break` and `continue`

## `break`

**Stops the loop completely.**

```js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Output:

```text
0
1
2
```

---

## `continue`

**Skips only the current iteration.**

```js
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
0
1
3
4
```

---

# 15. Iterable vs Enumerable

These two concepts are different.

| Enumerable                                                | Iterable                                             |
| --------------------------------------------------------- | ---------------------------------------------------- |
| Related to **object properties**                          | Related to **values**                                |
| Determines whether a property participates in enumeration | Determines whether values can be produced one-by-one |
| Used by operations such as `Object.keys()` and `for...in` | Used by `for...of`, spread, etc.                     |
| Property-focused                                          | Value/sequence-focused                               |

### Easy Memory Trick

```text
Enumerable
    ↓
Object Properties
    ↓
"Should this property be listed?"

Iterable
    ↓
Values
    ↓
"Can I get values one by one?"
```

---

# 16. `instanceof`

`instanceof` checks whether an object's prototype chain contains the `prototype` property of a constructor.

### Example

```js
const arr = [1, 23, 4];

console.log(arr instanceof Array);
// true
```

### More Examples

```js
[] instanceof Array;
// true

{} instanceof Object;
// true

"hello" instanceof String;
// false
```

> **Important:** Primitive strings are not instances of `String`. A `String` object created with `new String()` is.

```js
new String("hello") instanceof String;
// true
```

---

# ⭐ Quick Revision

| Topic                     | Key Point                                               |
| ------------------------- | ------------------------------------------------------- |
| **Spread `...`**          | Expands/copies values                                   |
| **Rest `...`**            | Collects remaining values                               |
| **Enumerable**            | Controls whether a property participates in enumeration |
| **Conditional**           | Executes code based on a condition                      |
| **`if...else`**           | Handles conditional logic                               |
| **`switch`**              | Compares one value against multiple cases               |
| **Ternary**               | Short `if...else`                                       |
| **`&&`**                  | Can conditionally execute the right side                |
| **Function**              | Reusable block of code                                  |
| **Callback**              | Function passed to another function                     |
| **Higher-Order Function** | Takes/returns another function                          |
| **IIFE**                  | Immediately executed function                           |
| **Generator**             | Function that can pause/resume                          |
| **`for`**                 | Index-based loop                                        |
| **`while`**               | Runs while condition is true                            |
| **`do...while`**          | Runs at least once                                      |
| **`for...of`**            | Iterates over values                                    |
| **`for...in`**            | Iterates over enumerable keys                           |
| **`break`**               | Stops loop                                              |
| **`continue`**            | Skips current iteration                                 |
| **Iterable**              | Produces values one-by-one                              |
| **Enumerable**            | Property can participate in enumeration                 |
| **`instanceof`**          | Checks prototype-chain relationship                     |

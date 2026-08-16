# JavaScript Interview Notes

## 1. What is Call Stack?

> The **Call Stack** is a data structure in JavaScript that keeps track of function calls and their execution order. It follows the **LIFO (Last In, First Out)** principle.

### Example

```js
function a() {
    b();
}

function b() {
    console.log("Hello");
}

a();
```

### Call Stack Flow

```text
a()
 ↓
b()
 ↓
console.log()
 ↓
b() removed
 ↓
a() removed
```

---

# 2. Normal Function vs Arrow Function

## What is a Function?

> A **function** is a reusable block of code designed to perform a specific task or functionality.

## What is an Arrow Function?

> An **arrow function** is a concise way of writing functions. It also uses **lexical `this`**, meaning it inherits `this` from its surrounding scope.

### Main Difference

| Normal Function                              | Arrow Function                    |
| -------------------------------------------- | --------------------------------- |
| Has its own `this`                           | Does not have its own `this`      |
| `this` depends on how the function is called | `this` is inherited lexically     |
| Can be used as a constructor with `new`      | Cannot be used as a constructor   |
| Has a `prototype` property                   | Does not have its own `prototype` |

> **Important:** You cannot use the `new` keyword with an arrow function. Arrow functions do not have their own `this` or `prototype`, so they cannot be used as constructors.

---

# 3. What is `new` Keyword?

> The **`new` keyword** is used to create a new object from a constructor function.

It:

1. Creates a new object.
2. Sets `this` to that new object.
3. Links the object's prototype to the constructor's prototype.
4. Returns the new object.

### Example

```js
function User(name) {
    this.name = name;
}

const user = new User("Gourav");

console.log(user.name); // Gourav
```

---

# 4. Is an Arrow Function Hoisted?

> Arrow functions don't have special hoisting behavior. Their hoisting behavior depends on how they are declared.

When an arrow function is assigned to `let` or `const`, the variable declaration is hoisted but remains in the **Temporal Dead Zone (TDZ)** until initialization.

### Example

```js
greet();

const greet = () => {
    console.log("Hello");
};
```

### What Happens?

```text
greet
 ↓
const declaration
 ↓
Hoisted but in TDZ
 ↓
Cannot access before initialization
```

Therefore, you cannot use an arrow function before its declaration when it is assigned to `const`.

---

# 5. What is Event Loop?

> The **Event Loop** is a mechanism that continuously checks whether the **Call Stack** is empty and, when it is, moves queued callbacks into the Call Stack for execution.

The Event Loop coordinates between the **Call Stack** and different queues.

> **Important:** Microtasks are given priority and are processed before the next task/macrotask.

### Example

```js
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

### Output

```text
1
4
3
2
```

### Why?

```text
Synchronous Code
      ↓
   1, 4
      ↓
Microtask Queue
(Promise)
      ↓
      3
      ↓
Task / Macrotask Queue
(setTimeout)
      ↓
      2
```

---

# 6. What is Currying?

> **Currying** is a technique of converting a function that takes multiple arguments into a sequence of nested functions, where each function takes one argument.

### Example

```js
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

add(1)(2)(3); // 6
```

---

# 7. Types of Popup Boxes

JavaScript running in a browser can use the following browser-provided popup APIs:

## 1. `alert()`

```js
alert("Hello!");
```

Displays a message to the user.

## 2. `confirm()`

```js
const result = confirm("Are you sure?");
```

Displays a confirmation dialog and returns a boolean.

## 3. `prompt()`

```js
const name = prompt("Enter your name:");
```

Displays a dialog that allows the user to enter a value.

> **Important:** `alert()`, `confirm()`, and `prompt()` are **Web APIs provided by the browser**, not built into the JavaScript language itself.

---

# 8. Function Declaration vs Function Expression

## Function Declaration

> A **function declaration** is a function defined using the `function` keyword with a function name.

```js
function add(a, b) {
    return a + b;
}
```

## Function Expression

> A **function expression** is a function that is created and assigned to a variable.

```js
const add = function (a, b) {
    return a + b;
};
```

### Function Expression in Memory

```text
Variable Environment           Heap
      add ──────────────────→ Function Object
                              ┌──────────────┐
                              │ (a, b)       │
                              │ return a + b │
                              └──────────────┘
```

---

# 9. What is a Polyfill in JavaScript?

> A **polyfill** is a piece of JavaScript code that provides the functionality of a modern JavaScript feature in environments that do not support that feature natively.

### Simple Idea

```text
Modern JavaScript Feature
          ↓
Browser does not support it
          ↓
Polyfill provides equivalent functionality
```

---

# 10. `JSON.parse()`

> `JSON.parse()` converts a **JSON string into a JavaScript object/value**.

### Example

```js
const jsonString = '{"name":"Gourav","age":25}';

const obj = JSON.parse(jsonString);

console.log(obj);
```

### Result

```js
{
    name: "Gourav",
    age: 25
}
```

---

# 11. `JSON.stringify()`

> `JSON.stringify()` converts a **JavaScript object/value into a JSON string**.

### Example

```js
const user = {
    name: "Gourav",
    age: 25
};

const jsonString = JSON.stringify(user);

console.log(jsonString);
```

### Result

```text
{"name":"Gourav","age":25}
```

> **Interview Tip:** The correct method name is `JSON.stringify()`, not `JSON.stringfy()`.

---

# 12. `call()`, `apply()`, and `bind()`

> `call()`, `apply()`, and `bind()` are used to explicitly set the value of `this` inside a function.

### Example Object

```js
const user1 = {
    name: "Gourav"
};

const user2 = {
    name: "Rahul"
};
```

---

## `call()`

> `call()` immediately calls the function and accepts arguments individually.

```js
function greet(age, city, job) {
    console.log(this.name, age, city, job);
}

const user = {
    name: "Gourav"
};

greet.call(user, 25, "Roorkee", "Developer");
```

---

## `apply()`

> `apply()` immediately calls the function and accepts arguments as an array (more precisely, an array-like object).

```js
function.apply(thisValue, [arg1, arg2, arg3]);
```

### Example

```js
greet.apply(user, [25, "Roorkee", "Developer"]);
```

---

## `bind()`

> `bind()` does **not** immediately call the function. It returns a new function with `this` permanently bound to the specified object.

### Example

```js
const newGreet = greet.bind(user);

newGreet(25, "Roorkee", "Developer");
```

### Quick Comparison

| Method    | Calls Immediately? | Arguments              |
| --------- | ------------------ | ---------------------- |
| `call()`  | Yes                | Individually           |
| `apply()` | Yes                | Array / array-like     |
| `bind()`  | No                 | Returns a new function |

---

# 13. JavaScript Operator `+` and Type Coercion

> **Type coercion** is the conversion of one data type into another during an operation.

## `+` Operator

When one operand is a string, `+` commonly performs string concatenation.

```js
"1" + 2      // "12"
2 + "1"      // "21"
5 + "10"     // "510"
```

---

## Boolean + Number

```js
true + 1     // 2
false + 1    // 1
```

Because:

```text
true  → 1
false → 0
```

---

## `null` + Number

```js
null + 1     // 1
```

`null` is converted to `0` in numeric operations.

---

## `undefined` + Number

```js
undefined + 1    // NaN
```

`undefined` becomes `NaN` during numeric conversion.

---

# 14. `-` Operator

The `-` operator performs numeric conversion.

```js
"2" - 1       // 1
"10" - "5"    // 5
"10" - 2      // 8
```

---

# 15. String × Number

```js
"5" * 2       // 10
"10" * "2"    // 20
```

---

# 16. String ÷ Number

```js
"10" / 2      // 5
"20" / "5"    // 4
```

---

# 17. Boolean Conversion in Arithmetic

```js
true + true      // 2
false + false    // 0
true + false     // 1
```

Because:

```text
true  → 1
false → 0
```

---

# 18. `null` in Arithmetic

`null` is converted to `0` in numeric operations.

```js
null + 1     // 1
null - 1     // -1
null * 5     // 0
null / 2     // 0
```

---

# 19. `undefined` in Arithmetic

`undefined` is converted to `NaN` in numeric operations.

```js
undefined + 1   // NaN
undefined - 1   // NaN
undefined * 2   // NaN
undefined / 2   // NaN
```

---

# 20. Arrays and Strings

In these operations, arrays can be converted to strings.

```js
[] + []         // ""
[] + 1          // "1"
[1] + 1         // "11"
[1, 2] + 1      // "1,21"
```

### Important

```text
[]       → ""
[1]      → "1"
[1, 2]   → "1,2"
```

---

# 21. `NaN`

`NaN` means **Not-a-Number**.

It commonly appears when a value cannot be converted into a valid number.

```js
"hello" - 1       // NaN
undefined + 1     // NaN
```

---

# 22. Important Equality Interview Points

```js
null == undefined     // true
null === undefined    // false

null == 0             // false
null == false         // false
null == ""            // false
```

### `==` vs `===`

```text
==   → Loose equality → Type coercion may occur
===  → Strict equality → Type and value must match
```

---

# 23. Object + Array

```js
console.log(obj + []);
// [object Object]
```

This happens because objects and arrays can be converted to primitive/string values during the `+` operation.

---

# 24. Session Storage vs Local Storage

> Both `localStorage` and `sessionStorage` are **Web Storage APIs** used by the browser to store data as key-value pairs.

---

## `localStorage`

> `localStorage` persists even after closing the tab or browser. It remains until you manually remove it or the site/browser clears it.

### Example

```js
localStorage.setItem("name", "Gourav");

const name = localStorage.getItem("name");

console.log(name); // Gourav

localStorage.removeItem("name");

// localStorage.clear();
```

---

## `sessionStorage`

> `sessionStorage` persists while the browser tab remains open. When that tab is closed, its data is normally cleared.

### Example

```js
sessionStorage.setItem("name", "Gourav");

const name = sessionStorage.getItem("name");

console.log(name); // Gourav

sessionStorage.removeItem("name");

// sessionStorage.clear();
```

### Comparison

| `localStorage`                 | `sessionStorage`                                     |
| ------------------------------ | ---------------------------------------------------- |
| Persists after closing the tab | Normally cleared when the tab is closed              |
| Persists after browser restart | Does not normally persist after the tab session ends |
| Manually cleared or removed    | Cleared when the session ends                        |
| Stored as key-value pairs      | Stored as key-value pairs                            |

---

# 25. Truthy and Falsy Values

## Falsy Values

The following values are falsy in JavaScript:

```js
false
0
-0
0n
""
null
undefined
NaN
```

> An empty string `""` is falsy.

---

## Truthy Values

Examples of truthy values:

```js
true
1
-1
"hello"
"0"
"false"
[]
{}
function() {}
```

### Important Interview Point

Even though these values may appear "empty", they are **truthy**:

```js
[]
{}
```

---

# 26. Named Export vs Default Export

## Named Export

> A **named export** allows us to export multiple variables, functions, classes, etc. from a module using their specific names.

### Example

```js
// math.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

### Import

```js
import { add, subtract } from "./math.js";
```

> Named exports are imported using **curly braces `{}`**.

---

## Default Export

> A **default export** is used to export one main value from a module.

A module can have only **one default export**.

### Example

```js
// math.js

export default function add(a, b) {
    return a + b;
}
```

### Import

```js
import add from "./math.js";
```

> Curly braces `{}` are **not used** with a default import.

---

# Named vs Default Export — Quick Comparison

| Named Export                               | Default Export                            |
| ------------------------------------------ | ----------------------------------------- |
| Can have multiple named exports            | Only one default export per module        |
| Uses `{}` during import                    | Does not use `{}`                         |
| Import name normally matches exported name | Import name can be chosen by the importer |
| `import { add } from "./math.js"`          | `import add from "./math.js"`             |

### Interview Answer

> **Named exports** are used when a module exports multiple specific values, and they are imported using curly braces. **Default export** is used for the main value of a module and is imported without curly braces.

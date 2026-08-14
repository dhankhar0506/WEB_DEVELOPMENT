# JavaScript Variables & Data Types — Interview Notes

## 1. What is a Variable?

> A variable is a named container used to store a value in memory.

---

## 2. Ways to Declare Variables

```js
var a = 10;
let b = 20;
const c = 30;
```

---

## 3. Difference Between `var`, `let`, and `const`

| Keyword | Re-declare | Re-assign | Scope    | Hoisted         |
| ------- | ---------- | --------- | -------- | --------------- |
| `var`   | ✅          | ✅         | Function | ✅ (`undefined`) |
| `let`   | ❌          | ✅         | Block    | ✅ (TDZ)         |
| `const` | ❌          | ❌         | Block    | ✅ (TDZ)         |

---

## 4. What are Data Types?

> A data type tells what kind of value a variable contains.

```js
let age = 25;        // Number
let name = "Gourav"; // String
```

JavaScript data types are divided into two types:

```text
Primitive
Non-Primitive (Reference)
```

---

## 5. Primitive Data Types

| Type      | Example         |
| --------- | --------------- |
| String    | `"hello"`       |
| Number    | `10`, `10.5`    |
| BigInt    | `123n`          |
| Boolean   | `true`, `false` |
| Undefined | `undefined`     |
| Null      | `null`          |
| Symbol    | `Symbol("id")`  |

---

## 6. Declaration

> Declaration means creating/introducing a variable using `var`, `let`, or `const`.

```js
let age;
var name;
const country = "India";
```

> **With `const`, you must initialize it during declaration.**

---

## 7. Initialization

> Initialization means giving a variable its first value.

```js
let age;     // Declaration
age = 25;    // Initialization
```

---

## 8. Mutation

> Mutation means changing the existing value/object itself without replacing it with a new object.

### Object Mutation

```js
const person = {
    name: "Gourav"
};

person.name = "Rahul"; // Mutation
person.age = 25;       // Mutation
```

### Array Mutation

```js
const arr = [1, 2, 3];

arr[0] = 10;   // ✅ Mutation — update
arr.push(4);   // ✅ Mutation — add
arr.pop();     // ✅ Mutation — remove
```

> Mutation does not mean only changing an existing element. Mutation means changing the state/content of an existing object or array.

---

## 9. Immutability

> Immutability means the existing value itself cannot be changed.

Primitive values such as strings, numbers, booleans, etc. are immutable.

```js
let name = "Gourav";

name[0] = "S"; // Doesn't change the string

console.log(name); // "Gourav"
```

---

## 10. `undefined` vs `null`

### `undefined`

> A variable has been declared but not assigned a value.

```js
let value;

console.log(value); // undefined
typeof value;       // "undefined"
```

### `null`

> Meaning: An intentional assignment of "no value."

Unlike `undefined`, JavaScript does not assign `null` automatically — you set it explicitly.

```js
let value = null;

typeof value; // "object"
```

---

## 11. Symbol

> Symbol is a primitive data type used to create unique values.

```js
const id1 = Symbol();
const id2 = Symbol();

console.log(id1 === id2); // false
```

---

## 12. `typeof`

> `typeof` is an operator used to check the type of a value.

```js
typeof function() {}; // "function"

typeof [];             // "object"
typeof null;           // "object" ⚠️

typeof 10;             // "number"
typeof "Gourav";       // "string"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof 10n;            // "bigint"
typeof Symbol();       // "symbol"

typeof NaN;            // "number"
typeof Infinity;       // "number"
```

---

## 13. Copy by Value

> Copy by value means the actual value is copied into another variable.

This happens with primitive values.

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

`b` gets its own primitive value. Changing `b` doesn't affect `a`.

---

## 14. Copy by Reference

> With objects, copying a variable copies the reference to the same object, not a new independent object.

Because both variables refer to the same object:

```js
let person1 = {
    name: "Gourav"
};

let person2 = person1;

person2.name = "Rahul";

console.log(person1.name); // Rahul
```

Both variables refer to the same object:

```text
person1 ───┐
           │
           ▼
       { name: "Gourav" }
           ▲
           │
person2 ───┘
```

> The object reference is copied, so both variables can refer to the same object.

---

## 15. What is Autoboxing?

> Almost everything in JavaScript can behave like an object, but not everything is actually an object.

> Primitives are not objects, but JavaScript provides temporary wrapper/object-like behavior that allows primitives to access methods such as those on `String.prototype` and `Number.prototype`. This is called **autoboxing**.

Conceptually:

```text
Primitive
   ↓
"Gourav"
   ↓
JavaScript temporarily gives
object-like wrapper behavior
   ↓
String.prototype
   ↓
toUpperCase()
slice()
includes()
```

---

## 16. What is `NaN`?

> `NaN` stands for **"Not-a-Number"**. It represents an invalid numeric result.

Example:

```js
const result = Number("hello");

console.log(result); // NaN

0 / 0; // NaN
```

---

## 17. Shallow Copy

> Shallow copy creates a new top-level object, but nested objects are still shared by reference.

It copies the first/top level, while nested objects remain shared references.

```js
const person1 = {
    name: "Gourav",
    address: {
        city: "Jalandhar"
    }
};

const person2 = { ...person1 }; // Using spread operator
```

Conceptually:

```text
person1 ──► { name: "Gourav" }
                 │
                 ▼
          { city: "Jalandhar" }
                 ▲
                 │
person2 ──► { name: "Gourav" }
```

---

## 18. Deep Copy

> Deep copy creates a completely independent copy, including nested objects.

```js
const person1 = {
    name: "Gourav",
    address: {
        city: "Jalandhar"
    }
};

const person2 = structuredClone(person1);

const person3 = JSON.parse(
    JSON.stringify(person1)
);
```

---

## 19. Property vs Method in JavaScript

```js
const person = {
    name: "Gourav", // Property
    age: 25,        // Property

    greet() {       // Method
        return "Hello";
    }
};
```

### Property

A property stores data about an object.

```js
name: "Gourav"
age: 25
```

### Method

A method is a function stored inside an object.

```js
greet() {
    return "Hello";
}
```

### Quick Revision

```text
Property → Stores data
Method   → Function inside an object
```

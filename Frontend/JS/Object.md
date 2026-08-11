# JavaScript Objects — Interview Notes

## 1. What is an Object?

* An object is a collection of **key-value pairs** used to store related data.
* Object is a **Non-Primitive** data type.

```js
const person = {
    name: "Gourav",
    age: 25,

    greet() {
        console.log("Hello");
    }
};
```

* `name`, `age` → Keys / Properties
* `"Gourav"`, `25`, `"Jalandhar"` → Values

---

## 2. What is a Property?

A **property** is a key-value pair inside an object.

```js
const user = {
    name: "Gourav",
    age: 25
};
```

Here:

```text
name → "Gourav"
age  → 25
```

Both are properties of the object.

---

## 3. What is a Method?

A **method** is a function stored as an object's property.

```js
const user = {
    name: "Gourav",

    greet() {
        console.log("Hello");
    }
};
```

Here `greet()` is a method.

---

# 4. Creating Objects

## 4.1 Object Literal

```js
const user = {
    name: "Gourav",
    age: 25
};
```

---

## 4.2 `new Object()`

```js
const user = new Object();

user.name = "Gourav";
user.age = 25;
```

---

# 5. `Object.create()`

`Object.create()` creates a new object with the given object as its prototype.

So yes, `Object.create()` is commonly used for **prototype-based inheritance**.

```js
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);

user.name = "Gourav";

user.greet(); // Hello
```

Here:

```text
person
  ↓
prototype of user
  ↓
user
```

---

# 6. Accessing Object Properties

## 6.1 Dot Notation

```js
const user = {
    name: "Gourav",
    age: 25
};

console.log(user.name); // Gourav
```

---

## 6.2 Bracket Notation

Bracket notation is useful when:

* The property name is dynamic.
* There is a space in the property name.

Example:

```js
const user = {
    name: "Gourav",
    age: 25
};

const key = "name";

console.log(user[key]); // Gourav
```

### Dynamic Property Example

```js
const key = "age";

console.log(user[key]); // 25
```

---

# 7. Add / Update / Delete Properties

## Add Property

```js
const user = {
    name: "Gourav"
};

user.age = 25;
```

There is no `age` property in the object, so JavaScript adds it as a new property.

---

## Update Property

```js
const user = {
    name: "Gourav",
    age: 26
};

user.age = 32;
```

The existing `age` value is updated from `26` to `32`.

---

## Delete Property

```js
delete user.age;
```

The `age` property is removed from the object.

---

# 8. Object Methods

When a function is stored inside an object, we call it a **method**.

```js
const user = {
    name: "Gourav",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet(); // Hello Gourav
```

Here:

```text
user
 ├── name → "Gourav"
 └── greet() → Method
```

---

# 9. Important Built-in Object Methods

## 9.1 `Object.keys()`

Returns an array containing the object's keys.

```js
const user = {
    name: "Gourav",
    age: 25
};

console.log(Object.keys(user));
```

Output:

```js
["name", "age"]
```

---

## 9.2 `Object.values()`

Returns an array containing the object's values.

```js
console.log(Object.values(user));
```

Output:

```js
["Gourav", 25]
```

---

## 9.3 `Object.entries()`

Returns key-value pairs.

```js
console.log(Object.entries(user));
```

Output:

```js
[
    ["name", "Gourav"],
    ["age", 25]
]
```

---

# 10. Loop Through Object Using `Object.entries()`

```js
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

Output:

```text
name Gourav
age 25
```

---

# 11. `Object.fromEntries()`

`Object.fromEntries()` converts key-value pairs back into an object.

```js
const arr = [
    ["name", "Gourav"],
    ["age", 25]
];

const user = Object.fromEntries(arr);

console.log(user);
```

Output:

```js
{
    name: "Gourav",
    age: 25
}
```

---

# 12. `Object.assign()`

`Object.assign()` is used to **copy or merge objects**.

```js
const obj1 = {
    name: "Gourav"
};

const obj2 = {
    age: 25
};

const result = Object.assign({}, obj1, obj2);

console.log(result);
```

### Using Spread Operator

The same result can be achieved using the spread operator:

```js
const result = {
    ...obj1,
    ...obj2
};
```

---

# 13. `Object.hasOwn()`

`Object.hasOwn()` checks whether a property exists **directly on the object**.

```js
const user = {
    name: "Gourav"
};

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age"));  // false
```

---

# 14. `in` Operator

The `in` operator checks whether a property exists in the object **or its prototype chain**.

```js
const user = {
    name: "Gourav"
};

console.log("name" in user); // true
```

### Important Interview Difference

```text
Object.hasOwn()
        ↓
Checks only own properties

in operator
        ↓
Checks own properties + prototype chain
```

> **`Object.hasOwn()` checks own properties, while `in` also checks the prototype chain.**

---

# 15. `Object.getPrototypeOf()`

`Object.getPrototypeOf()` returns the prototype object from which an object inherits properties and methods.

```js
const parent = {
    greet() {}
};

const child = Object.create(parent);

console.log(Object.getPrototypeOf(child) === parent);
// true
```

Here:

```text
parent
  ↓
Prototype
  ↓
child
```

---

# 16. `Object.freeze()`

`Object.freeze()` prevents:

* Adding properties
* Deleting properties
* Modifying properties

Example:

```js
const user = {
    name: "Gourav",
    age: 25
};

Object.freeze(user);

user.age = 30;       // Won't change
user.city = "Delhi"; // Won't add
delete user.name;    // Won't delete
```

So:

```text
Adding      ❌
Deleting    ❌
Modifying   ❌
```

---

# 17. `Object.seal()`

`Object.seal()` prevents:

* Adding properties ❌
* Deleting properties ❌

But existing values can be modified ✅.

```js
const user = {
    name: "Gourav",
    age: 25
};

Object.seal(user);

user.age = 30;       // ✅
user.city = "Delhi"; // ❌
delete user.name;    // ❌
```

### `freeze()` vs `seal()`

```text
Object.freeze()
    ↓
Add       ❌
Delete    ❌
Modify    ❌

Object.seal()
    ↓
Add       ❌
Delete    ❌
Modify    ✅
```

> Both `seal()` and `freeze()` are **shallow**.

The nested `address` object is not automatically frozen or sealed.

---

# 18. Object Destructuring

Object destructuring allows us to extract properties from an object into variables.

```js
const user = {
    name: "Gourav",
    age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output:

```text
Gourav
25
```

---

# 19. Loop Through an Object

## `for...in`

`for...in` is used to iterate over the enumerable properties of an object.

```js
const user = {
    name: "Gourav",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}
```

Output:

```text
name Gourav
age 25
```

---

# Quick Interview Revision

| Concept                       | Simple Meaning                                   |
| ----------------------------- | ------------------------------------------------ |
| **Object**                    | Collection of key-value pairs                    |
| **Property**                  | Key-value pair inside an object                  |
| **Method**                    | Function stored as an object property            |
| **Object Literal**            | `{}` syntax used to create an object             |
| **`new Object()`**            | Creates an object using the Object constructor   |
| **`Object.create()`**         | Creates an object with a specified prototype     |
| **Dot Notation**              | `user.name`                                      |
| **Bracket Notation**          | `user[key]`                                      |
| **`Object.keys()`**           | Returns object keys                              |
| **`Object.values()`**         | Returns object values                            |
| **`Object.entries()`**        | Returns key-value pairs                          |
| **`Object.fromEntries()`**    | Converts key-value pairs into an object          |
| **`Object.assign()`**         | Copies/merges objects                            |
| **`Object.hasOwn()`**         | Checks own property                              |
| **`in`**                      | Checks property in object + prototype chain      |
| **`Object.getPrototypeOf()`** | Gets an object's prototype                       |
| **`Object.freeze()`**         | Prevents adding, deleting, and modifying         |
| **`Object.seal()`**           | Prevents adding/deleting but allows modification |
| **Destructuring**             | Extracts properties into variables               |
| **`for...in`**                | Loops through object properties                  |

---

# Final Memory Trick

```text
OBJECT
  ↓
Key + Value
  ↓
Property
  ↓
Function inside object
  ↓
Method

Access
  ↓
.        → Dot notation
[]       → Bracket notation

Object Methods
  ↓
keys()
values()
entries()
fromEntries()
assign()
hasOwn()

Prototype
  ↓
Object.create()
Object.getPrototypeOf()

Protection
  ↓
freeze() → Nothing changes
seal()   → Existing values can change

Loop
  ↓
for...in
```

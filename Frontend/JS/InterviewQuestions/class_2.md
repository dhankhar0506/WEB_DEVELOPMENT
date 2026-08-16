# JavaScript Interview Notes

## 1. Defer vs Async

### `defer`

`defer` downloads the JavaScript file while HTML is being parsed, but executes it after HTML parsing is complete.

```html
<script src="app.js" defer></script>
```

### `async`

`async` downloads the JavaScript file while HTML is being parsed and executes it immediately when the file finishes downloading.

**Use `async` when:**

- The script is independent.
- The script doesn't depend on the DOM or other scripts.

### Defer vs Async

```text
defer → Download → Wait for HTML → Execute

async → Download → Execute immediately
```

---

## 2. What Does "Browser Parses HTML" Mean?

HTML parsing is the process where the browser reads the HTML code and converts it into a structured tree called the **DOM (Document Object Model)**.

```text
HTML Code
    ↓
HTML Parsing
    ↓
DOM Tree
    ↓
Browser Renders Page
```

---

## 3. Event Bubbling

Event bubbling is when an event propagates from the **target element upward** through its parent elements toward the root (`document`).

```text
Button
   ↑
Parent
   ↑
Grandparent
   ↑
Document
```

The event starts at the target element and moves upward.

---

## 4. Event Capturing

Event capturing is when an event propagates from the **root toward the target element**.

```text
Document
   ↓
Grandparent
   ↓
Parent
   ↓
Button
```

The event starts from the root and moves toward the target element.

---

## 5. Promise Chaining

Promise chaining is a technique of executing multiple asynchronous operations sequentially, where each operation depends on the result of the previous operation.

```text
Promise
   ↓
.then()
   ↓
.then()
   ↓
.then()
```

### Example

```javascript
fetchUser()
  .then((user) => fetchPosts(user.id))
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));
```

---

## 6. Shallow Copy vs Deep Copy

### Shallow Copy

A shallow copy creates a new object, but nested objects/arrays are still shared through the same references.

```text
user.address ──────┐
                   ↓
              Same object
                   ↑
copy.address ──────┘
```

### Example

```javascript
const user = {
  name: "Gourav",
  address: {
    city: "Roorkee",
  },
};

const copy = { ...user };
```

Here:

```javascript
user !== copy; // true
user.address === copy.address; // true
```

The outer object is copied, but the nested `address` object is still shared.

---

### Deep Copy

A deep copy creates a completely independent copy, including nested objects and arrays, with separate references.

```text
user.address → Object A

copy.address → Object B
```

### Common Approaches

#### 1. `structuredClone()`

```javascript
const copy = structuredClone(user);
```

#### 2. `JSON.parse()` + `JSON.stringify()`

```javascript
const copy = JSON.parse(JSON.stringify(user));
```

> `structuredClone()` is generally preferred for deep cloning supported data because it handles more JavaScript data types than the JSON approach.

---

## 7. What is Destructuring?

Destructuring is a JavaScript feature that allows us to extract values from an object or array and store them in variables in a simple way.

### Object Destructuring

```javascript
const user = {
  name: "Gourav",
  age: 25,
};

const { name, age } = user;

console.log(name); // Gourav
console.log(age); // 25
```

### Array Destructuring

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

---

## 8. Object vs `this`

### Example

```javascript
let obj = {
  name: "gourav",

  greet: function () {
    console.log(this.name);
  },
};

let a = obj.greet;
let b = obj;

console.log("B:", b.greet());

console.log("A:", a());

console.log("Obj:", obj.greet());
```

### Important Concept

> `this` depends on how the function is called, not where the function was created.

### `obj.greet()`

```javascript
obj.greet();
```

Here, `this` refers to `obj`.

### `b.greet()`

```javascript
b.greet();
```

Here, `this` also refers to `b`, which points to the same object.

### `a()`

```javascript
a();
```

Here, the function is called without an object receiver, so `this` is different.

### Reference Diagram

#### Lexical Environment

```text
obj ───────────────┐
                   │
a ─────────────────┼────→ Function greet
                   │
b ─────────────────┘
```

#### Heap

```text
Object
┌─────────────────────┐
│ name → "gourav"     │
│ greet ──────────────┼──→ Function
└─────────────────────┘
```

> The important interview point is that assigning a method to another variable does not preserve the original object as `this`.

---

## 9. What is a Callback Function?

A callback function is a function that is passed as an argument to another function and is called later by that function.

### Example

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function message() {
  console.log("Welcome!");
}

greet("Gourav", message);
```

### Flow

```text
message
   ↓
Passed as argument
   ↓
greet()
   ↓
callback()
```

---

## 10. Pure vs Impure Function

### Pure Function

A pure function always gives the same output for the same input and does not cause side effects outside the function.

### Example

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5
```

```text
Same Input
    ↓
Same Output
```

---

### Impure Function

An impure function can produce different results for the same input or can modify data outside the function.

### Example

```javascript
let count = 0;

function increment() {
  count++;
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2
```

The function modifies the external variable `count`.

```text
External Data
     ↑
     │
Function
     │
Modifies External Data
```

---

## 11. DOM — Document Object Model

DOM represents the HTML document as a tree of objects and allows JavaScript to access and manipulate HTML elements.

### Example

```html
<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>
```

### DOM Tree

```text
Document
   │
   └── body
       ├── h1
       │   └── "Hello"
       │
       └── button
           └── "Click"
```

### JavaScript Can Use the DOM To:

- Select elements
- Change content
- Change styles
- Add/remove elements
- Handle events

### Example

```javascript
document.querySelector("h1").textContent = "Hello Gourav";
```

---

## 12. BOM — Browser Object Model

BOM allows JavaScript to interact with the **browser environment**, not directly with the HTML document.

BOM is a browser-provided object model that allows JavaScript to interact with the browser.

### BOM Structure

```text
JavaScript
    ↓
Browser Environment
    ↓
BOM
├── window
├── location
├── history
├── navigator
└── screen
```

### Common BOM Objects

| Object      | Use                                 |
| ----------- | ----------------------------------- |
| `window`    | Represents the browser window       |
| `location`  | Access/change current URL           |
| `history`   | Work with browser history           |
| `navigator` | Information about browser/device    |
| `screen`    | Information about the user's screen |

---

## 13. DOM vs BOM

| DOM                          | BOM                                             |
| ---------------------------- | ----------------------------------------------- |
| Works with web page/document | Works with browser environment                  |
| Represents HTML              | Represents browser features                     |
| `document`                   | `window`                                        |
| Manipulates HTML elements    | Manages URL, history, browser information, etc. |

### Overall Structure

```text
Browser
│
├── BOM → Browser
│   ├── window
│   ├── location
│   ├── history
│   ├── navigator
│   └── screen
│
└── DOM → Web Page
    └── document
```

JavaScript Interview Notes

Defer vs Async

defer

defer downloads the JavaScript file while HTML is being parsed, but executes it after HTML parsing is complete.

<script src="app.js" defer></script>

async

async downloads the JavaScript file while HTML is being parsed and executes it immediately when the file finishes downloading.

Use async when:
The script is independent and doesn't depend on the DOM or other scripts.

Defer vs Async

defer → Download → Wait for HTML → Execute

async → Download → Execute immediately

What Does "Browser Parses HTML" Mean?

HTML parsing is the process where the browser reads the HTML code and converts it into a structured tree called the DOM (Document Object Model).

HTML Code
↓
HTML Parsing
↓
DOM Tree
↓
Browser Renders Page

Event Bubbling

Event bubbling is when an event propagates from the target element upward through its parent elements toward the root (document).

Button
↑
Parent
↑
Grandparent
↑
Document

The event starts at the target element and moves upward.

Event Capturing

Event capturing is when an event propagates from the root toward the target element.

Document
↓
Grandparent
↓
Parent
↓
Button

The event starts from the root and moves toward the target element.

Promise Chaining

Promise chaining is a technique of executing multiple asynchronous operations sequentially, where each operation depends on the result of the previous operation.

Promise
↓
.then()
↓
.then()
↓
.then()

Example:

fetchUser()
.then((user) => fetchPosts(user.id))
.then((posts) => console.log(posts))
.catch((error) => console.log(error));

Shallow Copy vs Deep Copy

Shallow Copy

A shallow copy creates a new object, but nested objects/arrays are still shared through the same references.

user.address ──────┐
↓
Same object
↑
copy.address ──────┘

Example:

const user = {
name: "Gourav",
address: {
city: "Roorkee"
}
};

const copy = { ...user };

Here:

user !== copy // true
user.address === copy.address // true

The outer object is copied, but the nested address object is still shared.

Deep Copy

A deep copy creates a completely independent copy, including nested objects and arrays, with separate references.

user.address → Object A

copy.address → Object B

Common approaches:

1. structuredClone()

const copy = structuredClone(user);

2. JSON.parse() + JSON.stringify()

const copy = JSON.parse(JSON.stringify(user));

structuredClone() is generally preferred for deep cloning supported data because it handles more JavaScript data types than the JSON approach.

What is Destructuring?

Destructuring is a JavaScript feature that allows us to extract values from an object or array and store them in variables in a simple way.

Object Destructuring

const user = {
name: "Gourav",
age: 25
};

const { name, age } = user;

console.log(name); // Gourav
console.log(age); // 25

Array Destructuring

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

Object vs this

Consider:

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

Important Concept

this depends on how the function is called, not where the function was created.

obj.greet();

Here, this refers to obj.

b.greet();

Here, this also refers to b, which points to the same object.

But:

a();

Here, the function is called without an object receiver, so this is different.

Reference Diagram

Lexical Environment

obj ───────────────┐
│
a ─────────────────┼────→ Function greet
│
b ─────────────────┘

Heap

Object
┌─────────────────────┐
│ name → "gourav" │
│ greet ──────────────┼──→ Function
└─────────────────────┘

The important interview point is that assigning a method to another variable does not preserve the original object as this.

What is a Callback Function?

A callback function is a function that is passed as an argument to another function and is called later by that function.

Example:

function greet(name, callback) {
console.log("Hello " + name);
callback();
}

function message() {
console.log("Welcome!");
}

greet("Gourav", message);

Here:

message
↓
Passed as argument
↓
greet()
↓
callback()

Pure vs Impure Function

Pure Function

A pure function always gives the same output for the same input and does not cause side effects outside the function.

Example:

function add(a, b) {
return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

Same Input
↓
Same Output

Impure Function

An impure function can produce different results for the same input or can modify data outside the function.

Example:

let count = 0;

function increment() {
count++;
return count;
}

console.log(increment()); // 1
console.log(increment()); // 2

The function modifies the external variable count.

External Data
↑
│
Function
│
Modifies External Data

DOM — Document Object Model

DOM represents the HTML document as a tree of objects and allows JavaScript to access and manipulate HTML elements.

Example:

<body>
    <h1>Hello</h1>
    <button>Click</button>
</body>

The browser creates a DOM tree:

Document
│
└── body
├── h1
│ └── "Hello"
│
└── button
└── "Click"

JavaScript can use the DOM to:

Select elements

Change content

Change styles

Add/remove elements

Handle events

Example:

document.querySelector("h1").textContent = "Hello Gourav";

BOM — Browser Object Model

BOM allows JavaScript to interact with the browser environment, not directly with the HTML document.

BOM is a browser-provided object model that allows JavaScript to interact with the browser.

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

Common BOM Objects

Object

Use

window

Represents the browser window

location

Access/change current URL

history

Work with browser history

navigator

Information about browser/device

screen

Information about the user's screen

DOM vs BOM

DOM

BOM

Works with web page/document

Works with browser environment

Represents HTML

Represents browser features

document

window

Manipulates HTML elements

Manages URL, history, browser information, etc.

Browser
│
├── BOM → Browser
│ ├── window
│ ├── location
│ ├── history
│ ├── navigator
│ └── screen
│
└── DOM → Web Page
└── document

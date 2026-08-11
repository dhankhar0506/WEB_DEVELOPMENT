## DOM = Document Object Model
->DOM is a tree-like object representation of an HTML document created by the browser, which allows JavaScript to read, modify, add, and remove elements, attributes, styles, and content.
-> HTML
    <body>
        <h1>Hello</h1>
        <p>Welcome</p>
    </body>

->DOM representation

    Document
    ↓
    html
    ├── head
    └── body
        ├── h1
        │    └── "Hello"
        └── p
            └── "Welcome"

## is DOM Part of JavaScript? 
-> No. DOM is a Web API provided by the browser, not part of the JavaScript language itself.

## What is window? 
-> window is the global object in a normal browser page and represents the browser window/tab environment.
    window(with the help of window obj JS accessed these API like documents, location)
    │
    ├── document
    ├── location
    ├── history
    ├── localStorage
    └── ...

## What is document?
-> document is the object representing the currently loaded HTML document.


<h1 id="title">Hello</h1>

<p class="text">One</p>
<p class="text">Two</p>

## Selecting DOM Elements
1. getElementById()
    -> const title = document.getElementById("title");  // Returns an HTMLCollection. 
2. getElementsByClassName()
    -> const elements = document.getElementsByClassName("text"); // Returns an HTMLCollection.
3. getElementsByTagName()
    -> const paragraphs = document.getElementsByTagName("p"); // Returns an HTMLCollection.

4. querySelector() // return NodeList
    ->  document.querySelector("#title");
        document.querySelector(".text");
        document.querySelector("p");

5. querySelectorAll() -> Returns all matching elements. // return NodeList
    -> const items = document.querySelectorAll(".item");

    ->querySelector()
        → first matching element

    querySelectorAll()
        → all matching elements as NodeList



# Reading and chnaging content 
<div id="box">
    <p>Hello</p>
</div>


1. innerHTML
    - const box = document.querySelector("#box");
    - console.log(box.innerHTML)
    -> <p>Hello</p>

    - chnage
        - box.innerHTML = "<h1>Welcome</h1>";

2. textContent
    - const title = document.querySelector("h1");
    - title.textContent = "Hello Gourav";

## Changing Styles & Classes
-> element.style.color = "red";
-> element.style.backgroundColor = "black";

-> element.classList.add("active");
-> element.classList.remove("active");
-> element.classList.toggle("active");
-> element.classList.contains("active");

## Attributes
-> element.getAttribute("href");
-> element.setAttribute("href", "/home");
-> element.removeAttribute("href");
-> element.hasAttribute("href");

## DOM Traversal
<div>
  <p>One</p>
  <p id="two">Two</p>
  <p>Three</p>
</div>
-> element.parentElement;
-> element.children;
-> element.firstElementChild;
-> element.lastElementChild;
-> element.nextElementSibling;
-> element.previousElementSibling;




DOM — Document Object Model

1. What is DOM?

DOM is a tree-like object representation of an HTML document created by the browser, which allows JavaScript to read, modify, add, and remove elements, attributes, styles, and content.

HTML

<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>

DOM Representation

Document
↓
html
├── head
└── body
    ├── h1
    │   └── "Hello"
    └── p
        └── "Welcome"

2. Is DOM Part of JavaScript?

No. DOM is a Web API provided by the browser, not part of the JavaScript language itself.

3. What is window?

window is the global object in a normal browser page and represents the browser window/tab environment.

JavaScript can access browser APIs through the window object:

window
│
├── document
├── location
├── history
├── localStorage
└── ...

4. What is document?

document is the object representing the currently loaded HTML document.

Example:

<h1 id="title">Hello</h1>

<p class="text">One</p>
<p class="text">Two</p>

Selecting DOM Elements

5. getElementById()

const title = document.getElementById("title");

→ Returns the element with the specified ID.

6. getElementsByClassName()

const elements = document.getElementsByClassName("text");

→ Returns an HTMLCollection.

7. getElementsByTagName()

const paragraphs = document.getElementsByTagName("p");

→ Returns an HTMLCollection.

8. querySelector()

document.querySelector("#title");
document.querySelector(".text");
document.querySelector("p");

→ Returns the first matching element.

9. querySelectorAll()

const items = document.querySelectorAll(".item");

→ Returns all matching elements as a NodeList.

Quick Comparison

getElementById()       → Single element
getElementsByClassName() → HTMLCollection
getElementsByTagName()   → HTMLCollection
querySelector()        → First matching element
querySelectorAll()     → All matching elements → NodeList

Reading and Changing Content

Given:

<div id="box">
    <p>Hello</p>
</div>

10. innerHTML

Reads HTML content:

const box = document.querySelector("#box");

console.log(box.innerHTML);
// <p>Hello</p>

Changes HTML content:

box.innerHTML = "<h1>Welcome</h1>";

11. textContent

Reads or changes text content:

const title = document.querySelector("h1");

title.textContent = "Hello Gourav";

Changing Styles & Classes

12. Changing Styles

element.style.color = "red";
element.style.backgroundColor = "black";

13. classList

element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");

add()      → Add class
remove()   → Remove class
toggle()   → Add/remove class
contains() → Check whether class exists

Attributes

14. Attribute Methods

element.getAttribute("href");
element.setAttribute("href", "/home");
element.removeAttribute("href");
element.hasAttribute("href");

getAttribute()    → Get attribute value
setAttribute()    → Add/change attribute
removeAttribute() → Remove attribute
hasAttribute()    → Check whether attribute exists

DOM Traversal

Given:

<div>
    <p>One</p>
    <p id="two">Two</p>
    <p>Three</p>
</div>

For the element:

const element = document.querySelector("#two");

15. Traversal Properties

element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;

parentElement          → Parent element
children               → Child elements
firstElementChild      → First child element
lastElementChild       → Last child element
nextElementSibling     → Next sibling element
previousElementSibling → Previous sibling element

Quick Interview Revision

DOM
→ Browser-created tree-like representation of HTML.

JavaScript
→ Uses DOM Web APIs to interact with the page.

window
→ Browser's global object.

document
→ Currently loaded HTML document.

getElementById()
→ Element by ID.

getElementsByClassName()
→ HTMLCollection.

getElementsByTagName()
→ HTMLCollection.

querySelector()
→ First matching element.

querySelectorAll()
→ All matching elements → NodeList.

innerHTML
→ Read/change HTML.

textContent
→ Read/change text.

style
→ Change inline styles.

classList
→ Add/remove/toggle/check classes.

getAttribute()
→ Read attribute.

setAttribute()
→ Add/change attribute.

removeAttribute()
→ Remove attribute.

hasAttribute()
→ Check attribute.

parentElement
→ Parent.

children
→ Child elements.

firstElementChild
→ First child.

lastElementChild
→ Last child.

nextElementSibling
→ Next sibling.

previousElementSibling
→ Previous sibling.
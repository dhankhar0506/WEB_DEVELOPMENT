# JavaScript Interview Questions — DOM

---

# 1. What is DOM?

**DOM = Document Object Model**

> **DOM is a tree-like object representation of an HTML document created by the browser, which allows JavaScript to read, modify, add, and remove elements, attributes, styles, and content.**

### HTML

```html
<body>
  <h1>Hello</h1>
  <p>Welcome</p>
</body>
```

### DOM Representation

```text
Document
   ↓
html
├── head
└── body
    ├── h1
    │   └── "Hello"
    └── p
        └── "Welcome"
```

---

# 2. Is DOM Part of JavaScript?

**No.**

DOM is a **Web API provided by the browser**, not part of the JavaScript language itself.

JavaScript uses the DOM Web API to interact with the HTML page.

---

# 3. What is `window`?

> **`window` is the global object in a normal browser page and represents the browser window/tab environment.**

JavaScript can access browser APIs through the `window` object:

```text
window
│
├── document
├── location
├── history
├── localStorage
└── ...
```

---

# 4. What is `document`?

> **`document` is the object representing the currently loaded HTML document.**

Example:

```html
<h1 id="title">Hello</h1>

<p class="text">One</p>
<p class="text">Two</p>
```

---

# Selecting DOM Elements

## 5. `getElementById()`

```javascript
const title = document.getElementById("title");
```

→ Returns the element with the specified ID.

---

## 6. `getElementsByClassName()`

```javascript
const elements = document.getElementsByClassName("text");
```

→ Returns an **HTMLCollection**.

---

## 7. `getElementsByTagName()`

```javascript
const paragraphs = document.getElementsByTagName("p");
```

→ Returns an **HTMLCollection**.

---

## 8. `querySelector()`

```javascript
document.querySelector("#title");

document.querySelector(".text");

document.querySelector("p");
```

→ Returns the **first matching element**.

---

## 9. `querySelectorAll()`

```javascript
const items = document.querySelectorAll(".item");
```

→ Returns **all matching elements as a NodeList**.

---

## Quick Comparison

| Method                     | Returns                          |
| -------------------------- | -------------------------------- |
| `getElementById()`         | Single element                   |
| `getElementsByClassName()` | HTMLCollection                   |
| `getElementsByTagName()`   | HTMLCollection                   |
| `querySelector()`          | First matching element           |
| `querySelectorAll()`       | All matching elements → NodeList |

---

# Reading and Changing Content

Given:

```html
<div id="box">
  <p>Hello</p>
</div>
```

---

## 10. `innerHTML`

### Read HTML

```javascript
const box = document.querySelector("#box");

console.log(box.innerHTML);
// <p>Hello</p>
```

### Change HTML

```javascript
box.innerHTML = "<h1>Welcome</h1>";
```

> `innerHTML` reads or changes the HTML inside an element.

---

## 11. `textContent`

Reads or changes the text content:

```javascript
const title = document.querySelector("h1");

title.textContent = "Hello Gourav";
```

> `textContent` works with the text content of an element.

---

# Changing Styles & Classes

## 12. Changing Styles

```javascript
element.style.color = "red";

element.style.backgroundColor = "black";
```

---

## 13. `classList`

```javascript
element.classList.add("active");

element.classList.remove("active");

element.classList.toggle("active");

element.classList.contains("active");
```

### Methods

| Method       | Purpose                    |
| ------------ | -------------------------- |
| `add()`      | Add class                  |
| `remove()`   | Remove class               |
| `toggle()`   | Add/remove class           |
| `contains()` | Check whether class exists |

---

# Attributes

## 14. Attribute Methods

```javascript
element.getAttribute("href");

element.setAttribute("href", "/home");

element.removeAttribute("href");

element.hasAttribute("href");
```

### Methods

| Method              | Purpose                        |
| ------------------- | ------------------------------ |
| `getAttribute()`    | Get attribute value            |
| `setAttribute()`    | Add/change attribute           |
| `removeAttribute()` | Remove attribute               |
| `hasAttribute()`    | Check whether attribute exists |

---

# DOM Traversal

Given:

```html
<div>
  <p>One</p>
  <p id="two">Two</p>
  <p>Three</p>
</div>
```

Select the element:

```javascript
const element = document.querySelector("#two");
```

---

## 15. Traversal Properties

```javascript
element.parentElement;

element.children;

element.firstElementChild;

element.lastElementChild;

element.nextElementSibling;

element.previousElementSibling;
```

### Meaning

| Property                 | Meaning                  |
| ------------------------ | ------------------------ |
| `parentElement`          | Parent element           |
| `children`               | Child elements           |
| `firstElementChild`      | First child element      |
| `lastElementChild`       | Last child element       |
| `nextElementSibling`     | Next sibling element     |
| `previousElementSibling` | Previous sibling element |

---

# Quick Interview Revision

```text
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
```

---

# Final Interview Crux

> **DOM is the browser-created object representation of HTML. JavaScript interacts with the DOM through browser Web APIs such as `document`. We can select elements, change their content/styles/classes/attributes, and navigate between elements using DOM traversal properties.**

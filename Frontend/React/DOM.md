# DOM — Document Object Model

## What is DOM?

> **DOM (Document Object Model)** is a tree-like representation of an HTML document created by the browser. JavaScript uses the DOM to access and modify HTML elements.

### HTML

```html
<html>
    <body>
        <h1>Hello</h1>
        <button>Click</button>
    </body>
</html>
```

### DOM

```text
Document
│
└── html
    │
    └── body
        │
        ├── h1
        │    Hello
        │
        └── button
             Click
```

---

# What is Real DOM?

> The **Real DOM** is the actual DOM created and maintained by the browser. It is responsible for displaying the UI on the screen.

JavaScript can directly modify the Real DOM.

```js
document.getElementById("title").innerText = "Hi";
```

Here:

```text
JavaScript
    ↓
DOM API
    ↓
Real DOM
    ↓
UI changes
```

---

# Problem with Real DOM

Suppose your page contains:

```text
Navbar

Profile

Products

Footer
```

If only the **Products** section changes:

```text
Navbar
Profile
Products  ← Changed
Footer
```

The browser may need to perform work such as:

* Recalculate styles
* Reflow the layout
* Repaint affected areas

This can become expensive, especially for large applications with many nested elements and frequent updates.

---

# What is Virtual DOM?

> **Virtual DOM** is a lightweight JavaScript object representation of the structure of the Real DOM.

React uses the Virtual DOM to determine what has changed before updating the Real DOM.

```text
Previous Virtual DOM
        ↓
      Compare
        ↑
New Virtual DOM
        ↓
Find changes
        ↓
Update required parts
        ↓
Real DOM
```

> React compares the previous Virtual DOM with the new Virtual DOM and updates the required changed parts of the Real DOM.

---

# Virtual DOM vs Real DOM

| Real DOM                          | Virtual DOM                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| Actual DOM created by the browser | JavaScript representation of UI maintained by React                                       |
| Lives in the browser              | Exists in JavaScript memory                                                               |
| DOM operations can be expensive   | Comparing JavaScript representations is generally cheaper than unnecessary DOM operations |
| Directly affects the UI           | Used to determine what should change                                                      |
| Browser manages it                | React manages its UI representation                                                       |

---

# Why is Virtual DOM Better / Faster Than Real DOM?

The browser does not have a built-in **React-style diffing algorithm** that compares a previous UI representation with a new UI representation and decides the minimum set of updates for you.

The browser provides DOM APIs, and JavaScript code can use those APIs to update the DOM.

React solves this by maintaining a representation of the UI, comparing the previous and current representations using its **diffing/reconciliation process**, and determining the required DOM updates.

Then ReactDOM applies those changes to the **Real DOM**.

### Flow

```text
React State / Props Change
          ↓
     New UI Tree
          ↓
   Previous UI Tree
          ↓
   Diffing / Reconciliation
          ↓
 Find What Changed
          ↓
Required DOM Updates
          ↓
       Real DOM
          ↓
      UI Updates
```

---

# 🔥 Interview Answer

### What is DOM?

> DOM is a tree-like representation of an HTML document created by the browser. JavaScript uses the DOM to access and modify HTML elements.

### What is Real DOM?

> Real DOM is the actual DOM maintained by the browser that represents the document and is used to display the UI.

### What is Virtual DOM?

> Virtual DOM is a JavaScript representation of the UI that React uses to determine what needs to change before updating the Real DOM.

### Why does React use Virtual DOM?

> React uses a Virtual DOM representation so it can compare the previous and new UI trees, determine the required changes through reconciliation, and apply the necessary updates to the Real DOM.

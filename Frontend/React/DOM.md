## WHAT IS DOM?
-> DOM (Document Object Model) is a tree-like representation of an HTML document created by the browser. JavaScript uses the DOM to access and modify HTML elements.

-> HTML
    <html>
        <body>
            <h1>Hello</h1>
            <button>Click</button>
        </body>
    </html>

-> DOM
    Document
    │
    └── html
        │
        └── body
            │
            ├── h1
            │     Hello
            │
            └── button
                Click

## What is Real DOM?
-The Real DOM is the actual DOM created and maintained by the browser. It is responsible for displaying the UI on the screen.
    > document.getElementById("title").innerText = "Hi";
    > JavaScript changes the Real DOM.

## Problem with Real DOM
-> Suppose your page is => 
                            Navbar

                            Profile

                            Products

                            Footer 
    - Even if only one part changes (like the Products section in your example),
    - The browser has to recalculate styles, reflow the layout, and repaint the entire page.
    - This process is slow and inefficient, especially for large applications with many nested elements.

## What is Virtual Dom?
- Virtual DOM is a lightweight JavaScript object that represents the structure of the Real DOM.
- React compares the previous Virtual DOM with the new Virtual DOM and updates only the changed parts of the Real DOM. 
- React uses it to determine what has changed before updating the Real DOM.

## Virtual DOM & Real DOM
| Real DOM                      | Virtual DOM                               |
| ----------------------------- | ----------------------------------------- |
| Actual DOM created by browser | JavaScript object created by React        |
| Lives in browser              | Lives in memory                           |
| Updating is expensive         | Creating/comparing objects is inexpensive |
| Directly affects UI           | Used to determine what should change      |
| Browser manages it            | React manages it                          |

## Why Virtual DOM is better / faster than Real DOM?
-> The browser does not have a built-in Diffing Algorithm to compare the previous UI with the new UI. It only executes DOM operations provided by JavaScript. React solves this problem by maintaining a Virtual DOM, comparing the previous and current Virtual DOM using its Diffing Algorithm (Reconciliation), and generating the minimum required DOM updates. ReactDOM then applies only those changes to the Real DOM.

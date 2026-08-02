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
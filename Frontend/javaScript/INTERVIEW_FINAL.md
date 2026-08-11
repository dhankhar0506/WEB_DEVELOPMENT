## ## What is JavaScript?

JavaScript is a high-level, interpreted scripting language used to make web pages interactive. Runs in the browser and also on the server (Node.js).
1. Interpreted -> JavaScript code is executed line by line by the JavaScript engine (like Chrome's V8).

2. Dynamically Typed -> You don't need to specify the data type of a variable. JavaScript automatically determines it at runtime.

3. Event Driven ->JavaScript is an event-driven language because it waits for events such as button clicks, keyboard input, timers, or API responses. When an event occurs, JavaScript executes the associated callback function. This makes JavaScript ideal for interactive web applications.

## Makes Web Pages Interactive
    * Manipulates HTML & CSS.
    * Validates forms.
    * Handles API requests.
    * Creates dynamic web applications.

> JavaScript itself is NOT asynchronous. JavaScript is a synchronous, single-threaded language.

> The environment (Browser or Node.js) provides asynchronous features.

##  What is Synchronous?
- One task executes completely before the next task starts. (JavaScript executes line by line.)

##  What is Asynchronous?
- A task starts, but JavaScript doesn't wait for it to finish. It continues executing the next lines.

        JavaScript
        (Single Thread)

               │
               ▼
          Call Stack
               │
───────────────┼────────────────
               │
      Runtime Environment
      (Browser / Node.js)

   Browser APIs        Node.js APIs
   - setTimeout()      - fs.readFile()
   - fetch()           - HTTP
   - DOM Events        - Database
   - AJAX              - Sockets

               │
               ▼
         Callback Queue
               │
               ▼
           Event Loop
               │
               ▼
      JavaScript Executes Callback





JavaScript
What is JavaScript?
JavaScript is a high-level, interpreted scripting language used to make web pages interactive. It runs in the browser and also on the server using Node.js.

Key Characteristics
Interpreted

JavaScript code is executed line by line by the JavaScript engine, such as Chrome's V8.

Dynamically Typed

You don't need to specify the data type of a variable.

JavaScript automatically determines it at runtime.

Event Driven

JavaScript is event-driven because it waits for events such as:

Button clicks

Keyboard input

Timers

API responses

When an event occurs, JavaScript executes the associated callback function.

This makes JavaScript ideal for interactive web applications.

Makes Web Pages Interactive
JavaScript can:

* Manipulate HTML & CSS
* Validate forms
* Handle API requests
* Create dynamic web applications
Is JavaScript Asynchronous?
JavaScript itself is NOT asynchronous. JavaScript is a synchronous, single-threaded language.

The environment (Browser or Node.js) provides asynchronous features.

JavaScript
    ↓
Synchronous
    ↓
Single-threaded
What is Synchronous?
Synchronous means one task executes completely before the next task starts.

JavaScript normally executes code line by line.

Task 1
  ↓
Task 2
  ↓
Task 3
Task 2 starts only after Task 1 finishes.

What is Asynchronous?
Asynchronous means a task starts, but JavaScript doesn't wait for it to finish. It continues executing the next lines.

The runtime environment handles the time-consuming operation.

Asynchronous Flow
                 JavaScript
               (Single Thread)
                     │
                     ▼
                Call Stack
                     │
                     ▼
          Runtime Environment
            (Browser / Node.js)
                     │
              ┌──────┴──────┐
              ▼             ▼
        Browser APIs     Node.js APIs
              │             │
        ┌─────┼─────┐   ┌───┼────────┐
        ▼     ▼     ▼   ▼   ▼        ▼
    setTimeout fetch DOM  fs  HTTP  Database
                    Events     Sockets
              │
              ▼
         Callback Queue
              │
              ▼
          Event Loop
              │
              ▼
       JavaScript Executes
          Callback
Browser APIs
setTimeout()
fetch()
DOM Events
AJAX
Node.js APIs
fs.readFile()
HTTP
Database
Sockets
Quick Interview Revision
Topic	Simple Definition
JavaScript	High-level scripting language used to make web pages interactive
Interpreted	Code is executed by a JavaScript engine
Dynamically Typed	Variable data types are determined at runtime
Event Driven	Code responds to events and executes callback functions
Synchronous	One task completes before the next task starts
Asynchronous	JavaScript continues while an external operation is in progress
Single Threaded	JavaScript executes its main code using a single call stack
Browser / Node.js	Runtime environments that provide asynchronous APIs
Event Loop	Helps move callbacks toward the call stack when it is available
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
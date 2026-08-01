# INTERVIEW QUESTIONS

## 1. What is JavaScript Runtime Environment?
A JavaScript Runtime Environment is the complete environment where JavaScript code executes.
Provides extra features so JS can interact with the outside world.
These APIs are not part of the engine. They’re provided by the runtime (browser or Node.js).
    Browser Runtime
    │
    ├── JavaScript Engine
    ├── Memory Heap
    ├── Call Stack
    ├── Web APIs
    ├── Callback Queue
    ├── Microtask Queue
    └── Event Loop

## 2 What is JavaScript Engine?
- A JavaScript Engine is the program that reads, compiles, and executes JavaScript code.
- It converts JavaScript into machine code so the CPU can execute it.
- JavaScript Engine
│
├── Memory Heap
└── Call Stack

- [Responsibilities]
    Parse code
    Compile code
    Execute code
    Manage memory
    Garbage Collection

👉  Created by the engine when running code.
        - Global Execution Context → created once when script starts.
        - Function Execution Contexts → created each time a function runs.

👉 The engine itself does not provide timers, DOM, or networking. It’s just the execution core.

## 3. Difference Between JavaScript Engine and Runtime

| JavaScript Engine             | JavaScript Runtime                               |
| ----------------------------- | ------------------------------------------------ |
| Executes JavaScript           | Complete environment to run JavaScript           |
| Contains Heap & Call Stack    | Contains Engine + Web APIs + Event Loop + Queues |
| Converts JS into Machine Code | Provides everything required for execution       |
| Example: V8                   | Example: Chrome Browser, Node.js                 |


JavaScript Runtime
│
├── JavaScript Engine(V8)
│     ├── Memory Heap   (manages memory allocation)
│     └── Call Stack    (tracks function execution)
│
├── Web APIs (Browser-provided features: DOM, fetch, setTimeout, etc.)
│
├── Event Loop (coordinates execution between stack & queues)
│
├── Callback/Task Queue (macrotasks: setTimeout, setInterval, I/O, etc.)
│
└── Microtask Queue (promises, MutationObserver, queueMicrotask)

## 4. What is Memory Heap?
The Memory Heap is a large area of memory where JavaScript stores data such as objects, arrays, and functions.
    Memory Heap
    +--------------------+
    | Object             |
    | Array              |
    | Function           |
    | String             |
    | Number             |
    +--------------------+

👉 Primitive values (like numbers, strings, booleans, null, undefined) are usually stored directly in the stack (inside execution context).
👉 Variables that hold objects/arrays/functions → the reference (pointer) is stored in the stack, but the actual data lives in the heap.


## 5. What is Call Stack?
Call Stack keeps track of function execution order using the Last In, First Out (LIFO) principle.
Functions are: Pushed when called. and Popped when completed

                            Start
                              
                            Call Stack

                            +------+
                            |Global|
                            +------+

                            one()

                            +------+
                            | one  |
                            |Global|
                            +------+

                            two()

                            +------+
                            | two  |
                            | one  |
                            |Global|
                            +------+

                            console.log()

                            +--------------+
                            | console.log  |
                            | two          |
                            | one          |
                            | Global       |
                            +--------------+

                            After completion

                            +------+
                            |Global|
                            +------+

                            Empty
                        
## 6. Why is JavaScript Single-Threaded?
JavaScript is single-threaded because it has only one Call Stack, so it executes one task at a time.
    console.log("A");
    console.log("B");
    console.log("C");
    JavaScript cannot execute all three simultaneously because there is only one Call Stack.

## Then how does JavaScript handle async operations?
- JavaScript is single-threaded because it has only one Call Stack and executes one task at a time. Asynchronous work is handled by the runtime using Web APIs, queues, and the Event Loop

   JavaScript
       │
       ▼
  Call Stack
       │
       ▼
  Web APIs
       │
       ▼
  Task Queue / Microtask Queue
       │
       ▼
  Event Loop
       │
       ▼
  Call Stack

## 7. What is Execution Context?
- An Execution Context is the environment in which JavaScript code is executed.
- Every execution context has two phases:

    Execution Context
    │
    ├── Memory Creation Phase
    │      ├── Variables → undefined
    │      ├── Function → Complete function stored
    │      └── this initialized
    │
    └── Code Execution Phase
        ├── Variables get values
        ├── Statements execute
        └── Functions are called

## 8. Difference Between Global and Function Execution Context
| Global Execution Context (GEC) | Function Execution Context (FEC)      |
| ------------------------------ | ------------------------------------- |
| Created first                  | Created whenever a function is called |
| Created only once              | Created every function call           |
| Exists until program ends      | Destroyed after function finishes     |
| Represents the whole program   | Represents one function execution     |


## 9. What Happens When a Function is Called?
        
        function one() {
            two();
        }

        function two() {
            console.log("Hello");
        }

        one();


- Step 1 : Global Execution Context is created.
          - Call Stack

          +--------+
          | Global |
          +--------+

- Step 2: one() is called.
    JavaScript creates a Function Execution Context.
        +--------+
        | one()  |
        +--------+
        | Global |
        +--------+

- Step 3: Inside one(), two() is called.
        Another execution context is created.
        +--------+
        | two()  |
        +--------+
        | one()  |
        +--------+
        | Global |
        +--------+

Step 4: console.log() executes.
        +--------------+
        | console.log  |
        +--------------+
        | two()        |
        +--------------+
        | one()        |
        +--------------+
        | Global       |
        +--------------+

## 10. Why Does Stack Overflow Happen?
- A Stack Overflow occurs when the Call Stack becomes full because functions keep getting added without being removed.
    - function test() {
        test();
    }

    test();


## 11. What is Asynchronous Programming?
- Asynchronous programming is a way of writing code where tasks don’t block each other. 
- Instead of waiting for one task to finish before starting the next, the program can continue running other code while the first task completes in the background.
      
    console.log("Start");

    setTimeout(() => {
          console.log("Task Completed");
      }, 2000);

    console.log("End");

- Output
    - Start
    - End
    - Task Completed

## 12.  How to solve this Problem?
- JavaScript runs on a single thread (one call stack). Without async, long tasks (like fetching data from a server) would freeze the browser.Async programming solves this by using:
    - Web APIs (like fetch, setTimeout)
    - Event Loop (manages execution order)
    - Task Queue & Microtask Queue (store callbacks/promises until ready)
  
## 13.  What are Web APIs?
- Web APIs are features provided by the browser (or by the Node.js runtime) that help JavaScript perform asynchronous operations.
- Common Web APIs
    - setTimeout()
    - setInterval()
    - DOM APIs (document, window)
    - fetch()
    - XMLHttpRequest
    - Geolocation
    - Local Storage
    - WebSocket
    - Browser Runtime

JavaScript Engine
│
├── Memory Heap
└── Call Stack

Web APIs
├── setTimeout
├── fetch
├── DOM
├── Geolocation
└── Local Storage

## 14. Difference Between Synchronous and Asynchronous Code
| Synchronous                                         | Asynchronous                                                 |
| --------------------------------------------------- | ------------------------------------------------------------ |
| Executes line by line                               | Doesn't wait for long-running tasks                          |
| Blocks the next statement                           | Allows other code to continue                                |
| One task at a time                                  | Multiple tasks can progress concurrently through the runtime |
| Simpler execution flow                              | Uses callbacks, promises, or async/await                     |
| Example: Variable assignment, loops, function calls | Example: `setTimeout()`, `fetch()`, file reading             |

## 15 What is Task Queue?
The Task Queue (also called the Callback Queue or Macrotask Queue) stores callbacks from asynchronous operations that are ready to execute.
- These callbacks wait until:
    The Call Stack is empty.
    All Microtasks have been executed.
- Common APIs that use the Task Queue
    setTimeout()
    setInterval()
    DOM Events (click, keyup, etc.)
    MessageChannel
    setImmediate() (Node.js)

## 16. What is Microtask Queue?
The Microtask Queue stores Promise callbacks and other high-priority asynchronous tasks that execute before Task Queue callbacks.
JavaScript executes all microtasks before processing any task in the Task Queue.

# 17. Difference Between Task Queue and Microtask Queue
| Task Queue (Macrotask Queue)                | Microtask Queue                                                      |
| ------------------------------------------- | -------------------------------------------------------------------- |
| Lower priority                              | Higher priority                                                      |
| Used by `setTimeout()`, DOM events          | Used by Promises and `queueMicrotask()`                              |
| Executes after all microtasks               | Executes immediately after synchronous code finishes                 |
| Processes one task per event loop iteration | Processes **all** pending microtasks before moving to the Task Queue |














## What is a Promise?
- A Promise is a JavaScript object that represents the future result of an asynchronous operation.

- It is like saying: "I don't have the result now, but I promise I'll give it to you later."
For example:
    Downloading data from a server
    Reading a file
    Database query
    Waiting for a timer

- (3 stages)
Pending
   │
   ├──► Fulfilled (Success)
   │
   └──► Rejected (Failed)

## Who creates (sends) the Promise?
- Browser/Node APIs return Promises (Most Common)
- fetch() immediately returns a Promise.
  - fetch()
      ↓
    Promise
- You didn't create it. The fetch API created it for you.
  
## You can create your own Promise?
- const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Found");
    } else {
        reject("Error");
    }

});






## How do we handle a Promise?
1.    const promise = new Promise((resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Data Loaded");
        } else {
            reject("Server Error");
        }

    });

    promise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Done");
        });


2.  Using async/await
    async function getUsers() {

        try {
            const response = await fetch("/users");

            console.log(response);

        } catch (error) {

            console.log(error);

        }

    }

    getUsers();



## How does fetch() use Promises?
fetch() immediately returns a pending Promise and the browser starts the network request. JavaScript continues executing other code. When the response arrives, the Promise becomes fulfilled or rejected, the corresponding callback (.then() or .catch()) is placed in the Microtask Queue, and once the Call Stack is empty, the Event Loop moves that callback to the Call Stack. JavaScript creates a new Function Execution Context for the callback, executes it, and then removes it from the stack.
    fetch()

        │
        ▼
    Browser starts HTTP request
        │
        ▼
    fetch() immediately returns Promise (Pending)
        │
        ▼
    JavaScript continues executing
        │
        ▼
    Call Stack becomes empty
        │
        ▼
    Server sends response
        │
        ▼
    Promise becomes Fulfilled / Rejected
        │
        ▼
    .then() / .catch() callback
        │
        ▼
    Microtask Queue
        │
    (Event Loop)
        ▼
    Call Stack
        │
        ▼
    Function Execution Context created
        │
        ▼
    Callback executes
        │
        ▼
    Function context removed



## What is the Event Loop?
The Event Loop is a mechanism in the JavaScript runtime that continuously checks:
    Is the Call Stack empty?
    If yes, move callbacks from the Microtask Queue or Task Queue to the Call Stack.

                        Browser Runtime
                            │
                            ▼
    +-------------+     +------------------+
    | Call Stack  |◄────|    Event Loop    |
    +-------------+     +------------------+
        ▲                    ▲
        │                    │
    +----------------+   +----------------+
    | Microtask Queue|   |   Task Queue   |
    +----------------+   +----------------+

##  Why is the Event Loop Needed?
- JavaScript is single-threaded. It has only one Call Stack, so it can execute only one function at a time.
- Without the Event Loop:
    JavaScript would never know when to execute the setTimeout() callback.
    The callback would remain in the queue forever.

##  Why Does Promise Execute Before setTimeout()?'
- Promise callbacks execute before setTimeout() callbacks because they are placed in the Microtask Queue, which has higher priority than the Task Queue.

## Complete JavaScript Async Flow
                    JavaScript Code
                        │
                        ▼
                    Call Stack
                        │
            ┌──────────────┴──────────────┐
            │                             │
            ▼                             ▼
    Synchronous Code              Async APIs
                                (fetch, setTimeout)
                                        │
                                        ▼
                            Browser / Node Runtime
                                        │
                        ┌──────────────┴──────────────┐
                        │                             │
                    Promise Settled              Timer Finished
                        │                             │
                        ▼                             ▼
                Microtask Queue               Task Queue
                        │                             │
                        └──────────────┬──────────────┘
                                        ▼
                                    Event Loop
                                        │
                            Call Stack is Empty?
                                        │
                                    Yes ▼
                        Execute ALL Microtasks First
                                        │
                                        ▼
                            Execute ONE Task Next
                                        │
                                        ▼
                        Create Function Execution Context
                                        │
                                        ▼
                                Execute Callback

## Is fetch() Part of JavaScript?
- NO
- fetch() is not part of JavaScript. It is a Browser API (or Node.js API) that returns a Promise.
- It is provided by the Browser Runtime (or by Node.js runtime). JavaScript only calls it.

## What are Browser APIs?
- Browser APIs are features provided by the browser that JavaScript can use to perform tasks that the language itself cannot.
- Without Browser APIs, JavaScript could only perform basic language operations (variables, functions, loops, objects, etc.).

| Browser API             | Purpose                 |
| ----------------------- | ----------------------- |
| `fetch()`               | Make HTTP requests      |
| `setTimeout()`          | Run code after a delay  |
| `setInterval()`         | Run code repeatedly     |
| DOM API                 | Access and modify HTML  |
| `localStorage`          | Store data in browser   |
| `navigator.geolocation` | Get user location       |
| `WebSocket`             | Real-time communication |

## How Are Timers Implemented?
- Timers are implemented by the browser (or Node.js runtime). setTimeout() registers a timer with the runtime, and when the timer expires, the callback is added to the Task Queue. The Event Loop executes it after the Call Stack is empty and all Microtasks have been processed.
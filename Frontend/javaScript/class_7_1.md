# JavaScript Runtime — Interview Questions

---

# 1. What is JavaScript Runtime Environment?

A **JavaScript Runtime Environment** is the complete environment where JavaScript code executes.

It provides extra features so JavaScript can interact with the outside world.

These APIs are **not part of the JavaScript Engine**. They’re provided by the runtime, such as the **browser or Node.js**.

### Browser Runtime

```text
Browser Runtime
│
├── JavaScript Engine
├── Memory Heap
├── Call Stack
├── Web APIs
├── Callback Queue
├── Microtask Queue
└── Event Loop
```

### Simple Interview Definition

> **JavaScript Runtime Environment is the complete environment where JavaScript executes. It contains the JavaScript Engine along with APIs, queues, and the Event Loop required to interact with the outside world and handle asynchronous operations.**

---

# 2. What is JavaScript Engine?

A **JavaScript Engine** is the program that reads, compiles, and executes JavaScript code.

It converts JavaScript into machine code so the CPU can execute it.

### JavaScript Engine

```text
JavaScript Engine
│
├── Memory Heap
└── Call Stack
```

## Responsibilities

The JavaScript Engine is responsible for:

* Parse code
* Compile code
* Execute code
* Manage memory
* Garbage Collection

### Execution Contexts

Execution Contexts are created by the engine when running code.

```text
Execution Context
│
├── Global Execution Context
│      └── Created once when script starts
│
└── Function Execution Context
       └── Created each time a function runs
```

👉 **Global Execution Context** → created once when script starts.

👉 **Function Execution Contexts** → created each time a function runs.

> **Important:** The engine itself does not provide timers, DOM, or networking. It’s just the execution core.

---

# 3. Difference Between JavaScript Engine and Runtime

| JavaScript Engine             | JavaScript Runtime                               |
| ----------------------------- | ------------------------------------------------ |
| Executes JavaScript           | Complete environment to run JavaScript           |
| Contains Heap & Call Stack    | Contains Engine + Web APIs + Event Loop + Queues |
| Converts JS into Machine Code | Provides everything required for execution       |
| Example: V8                   | Example: Chrome Browser, Node.js                 |

### Complete Structure

```text
JavaScript Runtime
│
├── JavaScript Engine (V8)
│     │
│     ├── Memory Heap
│     │     └── Manages memory allocation
│     │
│     └── Call Stack
│           └── Tracks function execution
│
├── Web APIs
│     └── Browser-provided features:
│         DOM, fetch, setTimeout, etc.
│
├── Event Loop
│     └── Coordinates execution between
│         stack & queues
│
├── Callback / Task Queue
│     └── Macrotasks:
│         setTimeout, setInterval, I/O, etc.
│
└── Microtask Queue
      └── Promises, MutationObserver,
          queueMicrotask
```

### Easy Difference

```text
JavaScript Engine
       ↓
Executes JavaScript


JavaScript Runtime
       ↓
Engine + APIs + Queues + Event Loop
```

---

# 4. What is Memory Heap?

The **Memory Heap** is a large area of memory where JavaScript stores data such as objects, arrays, and functions.

```text
Memory Heap

+--------------------+
| Object             |
| Array              |
| Function           |
| String             |
| Number             |
+--------------------+
```

👉 Primitive values like:

* Numbers
* Strings
* Booleans
* `null`
* `undefined`

are usually explained as being stored directly in the execution context/stack-related memory.

👉 Variables that hold:

* Objects
* Arrays
* Functions

hold a **reference (pointer)** to the actual data.

Conceptually:

```text
Variable
   │
   │ Reference
   ▼
Memory Heap
```

Example:

```js
const user = {
    name: "Gourav"
};
```

Conceptually:

```text
Execution Context

user
 │
 │ reference
 ▼

Memory Heap

+----------------------+
| {                    |
|   name: "Gourav"     |
| }                    |
+----------------------+
```

---

# 5. What is Call Stack?

The **Call Stack** keeps track of function execution order using the:

> **Last In, First Out (LIFO)** principle.

Functions are:

* **Pushed** when called.
* **Popped** when completed.

### Execution Flow

```text
Start

Call Stack

+--------+
| Global |
+--------+


one()

+--------+
| one    |
+--------+
| Global |
+--------+


two()

+--------+
| two    |
+--------+
| one    |
+--------+
| Global |
+--------+


console.log()

+--------------+
| console.log  |
+--------------+
| two          |
+--------------+
| one          |
+--------------+
| Global       |
+--------------+


After Completion

+--------+
| Global |
+--------+


Finally

Empty
```

### Simple Definition

> **Call Stack is a LIFO data structure that keeps track of currently executing functions. Functions are pushed when called and popped when completed.**

---

# 6. Why is JavaScript Single-Threaded?

JavaScript is single-threaded because it has only **one Call Stack**, so it executes one task at a time.

Example:

```js
console.log("A");
console.log("B");
console.log("C");
```

JavaScript cannot execute all three simultaneously because there is only one Call Stack.

Execution:

```text
console.log("A")
       ↓
console.log("B")
       ↓
console.log("C")
```

Output:

```text
A
B
C
```

---

## Then How Does JavaScript Handle Async Operations?

JavaScript is single-threaded because it has only one Call Stack and executes one task at a time.

Asynchronous work is handled by the runtime using:

* Web APIs
* Queues
* Event Loop

### Flow

```text
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
```

### Interview Answer

> **JavaScript itself uses a single Call Stack, but asynchronous operations are handled by the runtime environment using Web APIs, queues, and the Event Loop.**

---

# 7. What is Execution Context?

An **Execution Context** is the environment in which JavaScript code is executed.

Every execution context has two phases:

```text
Execution Context
│
├── Memory Creation Phase
│      │
│      ├── Variables → undefined
│      ├── Function → Complete function stored
│      └── this initialized
│
└── Code Execution Phase
       │
       ├── Variables get values
       ├── Statements execute
       └── Functions are called
```

## Memory Creation Phase

During this phase:

* Memory is prepared for variables.
* Function declarations are stored.
* `this` is initialized.

> **Note:** For the simplified interview model, `var` variables are initialized with `undefined`. `let` and `const` are hoisted differently and remain uninitialized in the TDZ until their declaration is evaluated.

## Code Execution Phase

During this phase:

* Variables get values.
* Statements execute.
* Functions are called.

---

# 8. Difference Between Global and Function Execution Context

| Global Execution Context (GEC) | Function Execution Context (FEC)      |
| ------------------------------ | ------------------------------------- |
| Created first                  | Created whenever a function is called |
| Created only once              | Created every function call           |
| Exists until program ends      | Destroyed after function finishes     |
| Represents the whole program   | Represents one function execution     |

### Easy Memory Trick

```text
Program Starts
      ↓
GEC


Function Called
      ↓
FEC
```

---

# 9. What Happens When a Function is Called?

Consider:

```js
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

## Step 1 — Global Execution Context is Created

```text
Call Stack

+--------+
| Global |
+--------+
```

---

## Step 2 — `one()` is Called

JavaScript creates a **Function Execution Context**.

```text
+--------+
| one()  |
+--------+
| Global |
+--------+
```

---

## Step 3 — Inside `one()`, `two()` is Called

Another execution context is created.

```text
+--------+
| two()  |
+--------+
| one()  |
+--------+
| Global |
+--------+
```

---

## Step 4 — `console.log()` Executes

```text
+--------------+
| console.log  |
+--------------+
| two()        |
+--------------+
| one()        |
+--------------+
| Global       |
+--------------+
```

Then each function finishes in reverse order.

```text
console.log()
     ↓
Pop

two()
     ↓
Pop

one()
     ↓
Pop

Global
```

This happens because the Call Stack follows:

> **LIFO — Last In, First Out**

---

# 10. Why Does Stack Overflow Happen?

A **Stack Overflow** occurs when the Call Stack becomes full because functions keep getting added without being removed.

Example:

```js
function test() {
    test();
}

test();
```

Here:

```text
test()
  ↓
test()
  ↓
test()
  ↓
test()
  ↓
test()
  ↓
...
```

The function continuously calls itself.

New execution contexts keep getting pushed onto the Call Stack.

Eventually:

```text
Call Stack
+--------+
| test() |
+--------+
| test() |
+--------+
| test() |
+--------+
| test() |
+--------+
| test() |
+--------+
|  ...   |
+--------+
```

The stack reaches its limit.

This causes:

```text
Stack Overflow
```

Common browser error:

```text
RangeError: Maximum call stack size exceeded
```

---

# 11. What is Asynchronous Programming?

> **Asynchronous programming is a way of writing code where tasks don't block each other.**

Instead of waiting for one task to finish before starting the next, the program can continue running other code while the first task completes in the background/runtime.

Example:

```js
console.log("Start");

setTimeout(() => {
    console.log("Task Completed");
}, 2000);

console.log("End");
```

### Output

```text
Start
End
Task Completed
```

### Flow

```text
Start
  ↓
setTimeout()
  ↓
Timer handled asynchronously
  ↓
Continue
  ↓
End
  ↓
Timer completes
  ↓
Task Completed
```

---

# 12. How to Solve This Problem?

JavaScript runs on a single thread (**one Call Stack**).

Without async, long tasks like fetching data from a server would block JavaScript and could freeze the browser.

Async programming solves this using:

* **Web APIs** — like `fetch()`, `setTimeout()`
* **Event Loop** — manages execution order
* **Task Queue & Microtask Queue** — store callbacks/promises until ready

### Flow

```text
Long Running Operation
        ↓
Runtime / Web API
        ↓
JavaScript Continues
        ↓
Operation Completes
        ↓
Queue
        ↓
Event Loop
        ↓
JavaScript Executes Result
```

---

# 13. What are Web APIs?

> **Web APIs are features provided by the browser (or similar runtime-provided APIs in other environments) that help JavaScript interact with the environment and perform operations, including asynchronous operations.**

## Common Web APIs

* `setTimeout()`
* `setInterval()`
* DOM APIs (`document`, `window`)
* `fetch()`
* `XMLHttpRequest`
* Geolocation
* Local Storage
* WebSocket
* Browser Runtime features

### Architecture

```text
JavaScript Engine
│
├── Memory Heap
└── Call Stack


Web APIs
│
├── setTimeout
├── fetch
├── DOM
├── Geolocation
└── Local Storage
```

### Important Point

Web APIs are **not part of the core JavaScript language engine**.

They are provided by the environment.

```text
JavaScript Engine
       +
Browser APIs
       +
Event Loop
       +
Queues

       ↓

Browser JavaScript Runtime
```

---

# 14. Difference Between Synchronous and Asynchronous Code

| Synchronous                                         | Asynchronous                                                 |
| --------------------------------------------------- | ------------------------------------------------------------ |
| Executes line by line                               | Doesn't wait for long-running tasks                          |
| Blocks the next statement                           | Allows other code to continue                                |
| One task at a time                                  | Multiple tasks can progress concurrently through the runtime |
| Simpler execution flow                              | Uses callbacks, promises, or async/await                     |
| Example: Variable assignment, loops, function calls | Example: `setTimeout()`, `fetch()`, file reading             |

### Synchronous

```text
Task 1
  ↓
Finish
  ↓
Task 2
  ↓
Finish
  ↓
Task 3
```

### Asynchronous

```text
Start Async Task
      ↓
Runtime Handles It
      ↓
JavaScript Continues
      ↓
Async Task Completes
      ↓
Callback / Continuation
```

---

# 15. What is Task Queue?

The **Task Queue** is also commonly called:

* Callback Queue
* Macrotask Queue

It stores callbacks/tasks from asynchronous operations that are ready to execute.

These callbacks wait until:

1. The current Call Stack / task has finished.
2. Pending Microtasks have been executed before the next task is selected.

## Common APIs Associated with Tasks

* `setTimeout()`
* `setInterval()`
* DOM Events (`click`, `keyup`, etc.)
* `MessageChannel`
* `setImmediate()` — Node.js

### Flow

```text
setTimeout()
     ↓
Runtime Timer
     ↓
Timer Completes
     ↓
Task Queue
     ↓
Wait
     ↓
Event Loop
     ↓
Call Stack
```

---

# 16. What is Microtask Queue?

> **The Microtask Queue stores Promise callbacks and other high-priority asynchronous tasks that execute before the next Task Queue callback.**

JavaScript executes pending microtasks before processing the next regular task.

Common examples:

* Promise `.then()`
* Promise `.catch()`
* Promise `.finally()`
* `queueMicrotask()`
* `MutationObserver` in browsers

### Flow

```text
Promise Settles
      ↓
.then() callback
      ↓
Microtask Queue
      ↓
Current synchronous code finishes
      ↓
Microtasks execute
```

### Important

```text
Microtask Queue
       ↓
Runs before
       ↓
Next Task Queue Task
```

---

# 17. Difference Between Task Queue and Microtask Queue

| Task Queue (Macrotask Queue)                | Microtask Queue                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------ |
| Lower priority                              | Higher priority                                                                |
| Used by `setTimeout()`, DOM events          | Used by Promises and `queueMicrotask()`                                        |
| Executes after pending microtasks           | Executes immediately after current synchronous code/task finishes              |
| Processes one task per event loop iteration | Processes **all** pending microtasks before moving to the next Task Queue task |

---

## Example — Task Queue vs Microtask Queue

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### Output

```text
Start
End
Promise
Timeout
```

### Why?

```text
Synchronous Code
      │
      ├── Start
      │
      ├── setTimeout → Task Queue
      │
      ├── Promise → Microtask Queue
      │
      └── End
      │
      ▼
Synchronous Code Finishes
      │
      ▼
Microtask Queue
      │
      ▼
Promise
      │
      ▼
Task Queue
      │
      ▼
Timeout
```

Therefore:

```text
Start
  ↓
End
  ↓
Promise
  ↓
Timeout
```

---

# Complete JavaScript Runtime Flow

```text
                  JavaScript Code
                         │
                         ▼
                  JavaScript Engine
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
         Memory Heap           Call Stack
                                    │
                                    │
                                    ▼
                            Async API Called
                                    │
                                    ▼
                              Web APIs /
                            Runtime Features
                                    │
                                    ▼
                           Async Work Completes
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
             Microtask Queue                   Task Queue
                    │                               │
                    └───────────────┬───────────────┘
                                    │
                                    ▼
                               Event Loop
                                    │
                                    ▼
                               Call Stack
                                    │
                                    ▼
                                Execute
```

---

# Quick Interview Revision

| Topic                   | Simple Definition                                          |
| ----------------------- | ---------------------------------------------------------- |
| **Runtime Environment** | Complete environment where JavaScript executes             |
| **JavaScript Engine**   | Reads, compiles and executes JavaScript                    |
| **Memory Heap**         | Memory used for objects and runtime data                   |
| **Call Stack**          | Tracks function execution using LIFO                       |
| **Single Thread**       | JavaScript uses one main Call Stack                        |
| **Execution Context**   | Environment where JavaScript code executes                 |
| **GEC**                 | Execution Context created for global code                  |
| **FEC**                 | Execution Context created for each function call           |
| **Stack Overflow**      | Call Stack exceeds its limit                               |
| **Async Programming**   | Allows JavaScript to continue while runtime work completes |
| **Web APIs**            | Browser/runtime-provided features                          |
| **Task Queue**          | Stores ready tasks such as timer/event callbacks           |
| **Microtask Queue**     | Stores Promise reactions and other microtasks              |
| **Event Loop**          | Coordinates when queued work can execute                   |

---

# Final Interview Flow to Remember

```text
JavaScript Code
      ↓
JS Engine
      ↓
Call Stack
      ↓
Synchronous Code Executes
      ↓
Async Operation?
    /       \
   No       Yes
   │         │
   │         ▼
   │    Runtime / Web API
   │         │
   │         ▼
   │    Work Completes
   │         │
   │     ┌───┴────┐
   │     ▼        ▼
   │ Microtask   Task
   │   Queue     Queue
   │     │        │
   │     └───┬────┘
   │         ▼
   │     Event Loop
   │         │
   └─────────┤
             ▼
         Call Stack
             ↓
           Execute
```

## One-Line Memory Trick

**JS Engine executes → Call Stack tracks → Runtime handles async work → Microtasks/Tasks wait in queues → Event Loop coordinates execution → Call Stack executes them.**

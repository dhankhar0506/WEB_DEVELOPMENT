# Node.js — Requests, Threads, Event Loop & Call Stack

## How Does Node.js Handle Multiple Requests?

Node.js handles multiple requests using a **single main JavaScript thread**, an **Event Loop**, and **non-blocking asynchronous I/O**.

```text
Multiple Requests
       ↓
   Node.js Server
       ↓
Main JavaScript Thread
       ↓
    Event Loop
       ↓
Non-Blocking Async Operations
       ↓
Requests can be handled without
blocking the main JavaScript thread
```

### Example

Suppose 3 requests arrive:

```text
Request 1 → Database operation
Request 2 → API operation
Request 3 → File operation
```

Node.js does not wait for Request 1 to finish before starting Request 2.

```text
Request 1
   ↓
Async operation starts
   ↓
Main thread continues

Request 2
   ↓
Async operation starts
   ↓
Main thread continues

Request 3
   ↓
Async operation starts
```

When the asynchronous operations complete, their callbacks are made ready for execution and the Event Loop coordinates their execution on the main JavaScript thread.

---

# Why is Node.js Called Single-Threaded?

Node.js is called **single-threaded** because JavaScript code is primarily executed on **one main JavaScript thread**.

```text
Node.js
   ↓
Main JavaScript Thread
   ↓
Executes JavaScript
```

> **Important:** Single-threaded does not mean Node.js has only one thread.

---

# Does Node.js Actually Use Multiple Threads?

**Yes.**

Node.js can use multiple threads, but JavaScript normally runs on the **main JavaScript thread**.

Multiple threads can be used by:

### 1. libuv Thread Pool

Used for certain asynchronous operations.

```text
libuv Thread Pool
      ↓
Background work
```

### 2. Worker Threads

Used for CPU-intensive JavaScript.

```text
Worker Thread
      ↓
CPU-intensive JavaScript
```

### 3. Other Internal/Runtime Mechanisms

Node.js and the operating system can also use other threads internally.

---

# A Request is Something Like This

```js
app.get("/users", async (req, res) => {

  console.log("Request received");  // JS code

  const users = await User.find();  // Async I/O

  console.log("Data received");     // JS code

  res.json(users);                  // JS code
});
```

### What Happens?

```text
Request arrives
      ↓
Route handler starts
      ↓
console.log()
      ↓
User.find()
      ↓
Async database operation starts
      ↓
JavaScript does not block waiting
      ↓
Other requests can be handled
      ↓
Database operation completes
      ↓
Callback/continuation becomes ready
      ↓
JavaScript continues
      ↓
console.log("Data received")
      ↓
res.json(users)
```

> The exact database mechanism depends on the database driver. Not every database operation is handled by the libuv thread pool.

---

# What are Worker Threads?

**Worker Threads** are separate JavaScript threads created by a Node.js application to run **CPU-intensive JavaScript without blocking the main JavaScript thread**.

### Use Worker Threads For:

* Heavy calculations
* Large data processing
* CPU-intensive JavaScript
* Image/data processing done in JavaScript

```text
Main JavaScript Thread
        ↓
    Worker Thread
        ↓
CPU-intensive JavaScript
```

### Example

```text
Main Thread
    ↓
Receives Request
    ↓
Sends heavy calculation
    ↓
Worker Thread
    ↓
Performs calculation
    ↓
Returns result
    ↓
Main Thread
    ↓
Sends Response
```

---

# What is the Thread Pool?

The **Thread Pool** is a group of worker threads maintained by **libuv** that Node.js can use for certain asynchronous operations.

```text
             libuv Thread Pool
                    ↓
          ┌─────────────────┐
          │   Worker 1      │
          │   Worker 2      │
          │   Worker 3      │
          │   Worker 4      │
          └─────────────────┘
```

The default libuv thread-pool size is **4 workers**.

> The thread pool is managed internally by libuv. You normally do not create these workers yourself.

---

# Worker Thread vs Thread Pool

| Worker Thread                                   | libuv Thread Pool                                               |
| ----------------------------------------------- | --------------------------------------------------------------- |
| Explicitly created by the application           | Managed internally by libuv                                     |
| Runs JavaScript code                            | Handles certain background operations                           |
| Uses `worker_threads`                           | Part of libuv                                                   |
| Best for CPU-intensive JavaScript               | Used for certain async I/O, crypto, DNS, etc.                   |
| Has its own JavaScript/V8 execution environment | Not used as a separate JS environment for your application code |

---

# What is the Event Queue?

The **Event Queue** is a general term for the places where callbacks or other scheduled work wait until the Event Loop can coordinate their execution on the main JavaScript thread.

Node.js has different phases and queues involved in scheduling asynchronous work.

A simplified view:

```text
                  Event Loop
                      ↓
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
   Timer Work      I/O Work     Check Work
        ↓             ↓             ↓
  setTimeout()       I/O       setImmediate()

                  +
               Microtasks
               ├── process.nextTick()
               └── Promise callbacks
```

### Important Point

Node.js does **not** have one single queue for every type of asynchronous callback.

Different types of work are handled in different **Event Loop phases/queues**, and microtasks have their own priority rules.

---

# Microtasks

Microtasks include:

* `process.nextTick()`
* Promise callbacks such as `.then()`, `.catch()`, and `.finally()`

```text
Microtasks
    ├── process.nextTick()
    └── Promise callbacks
```

### Important Priority

In Node.js, `process.nextTick()` has special priority and is processed before the Promise microtask queue.

```text
process.nextTick()
       ↓
Promise callbacks
       ↓
Event Loop continues
```

---

# What is the Call Stack?

The **Call Stack** is a data structure used by JavaScript to keep track of the functions that are currently being executed.

It follows:

> **LIFO — Last In, First Out**

### Example

```js
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

### Call Stack Flow

```text
first()
   ↓
second()
   ↓
console.log()
```

The last function added to the stack is the first one removed.

```text
Push → Add function to stack
Pop  → Remove completed function
```

---

# Call Stack Example

```text
        Call Stack
        ┌──────────────┐
        │ console.log  │ ← Executes first
        ├──────────────┤
        │ second()     │
        ├──────────────┤
        │ first()      │
        └──────────────┘
```

After `console.log()` finishes:

```text
        Call Stack
        ┌──────────────┐
        │ second()     │
        ├──────────────┤
        │ first()      │
        └──────────────┘
```

After `second()` finishes:

```text
        Call Stack
        ┌──────────────┐
        │ first()      │
        └──────────────┘
```

---

# Complete Node.js Request Flow

```text
Client
  ↓
HTTP Request
  ↓
Node.js Server
  ↓
Main JavaScript Thread
  ↓
Call Stack
  ↓
Route Handler
  ↓
Async Operation
  ↓
┌─────────────────────────────┐
│ OS / libuv / External       │
│ Service / Database Driver   │
└─────────────────────────────┘
  ↓
Operation completes
  ↓
Callback / Promise continuation
becomes ready
  ↓
Event Loop
  ↓
Microtasks / appropriate
Event Loop phase
  ↓
Call Stack
  ↓
JavaScript executes
  ↓
res.json()
  ↓
HTTP Response
  ↓
Client
```

---

# Easy Way to Remember

```text
Call Stack
    ↓
Executes JavaScript
```

```text
Event Loop
    ↓
Coordinates when async work
can be processed
```

```text
Thread Pool
    ↓
Background work for certain
libuv-supported operations
```

```text
Worker Threads
    ↓
Run CPU-intensive JavaScript
```

```text
Event Queue / Event Loop Phases
    ↓
Hold or schedule callbacks/work
until they can be executed
```

# Interview Definitions

| Topic                         | Simple Definition                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Node.js Multiple Requests** | Node.js handles many requests using the main JS thread, Event Loop, and non-blocking asynchronous operations. |
| **Single-Threaded**           | JavaScript is primarily executed on one main JavaScript thread.                                               |
| **Worker Thread**             | A separate JavaScript thread used mainly for CPU-intensive JavaScript work.                                   |
| **Thread Pool**               | A group of libuv-managed worker threads used for certain asynchronous operations.                             |
| **Event Loop**                | Mechanism that coordinates asynchronous work and callback execution.                                          |
| **Event Queue**               | General term for queues/places where scheduled callbacks or work wait for processing.                         |
| **Call Stack**                | Data structure that tracks currently executing JavaScript functions.                                          |
| **Microtask**                 | High-priority asynchronous work such as `process.nextTick()` and Promise callbacks.                           |
| **Blocking**                  | Program waits for an operation to finish before continuing.                                                   |
| **Non-Blocking**              | Program starts an operation and continues other work without waiting.                                         |

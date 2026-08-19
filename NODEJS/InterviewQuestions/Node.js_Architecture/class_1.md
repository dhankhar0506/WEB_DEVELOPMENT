# Node.js Runtime — Complete Interview Notes

## What is Node.js Runtime?

The **Node.js runtime** is the environment that allows JavaScript code to run **outside the browser**.

```text
JavaScript Code
      ↓
Node.js Runtime
      ↓
V8 + Node.js APIs + libuv
      ↓
Operating System
```

---

# What Does the Node.js Runtime Provide?

Node.js provides built-in APIs/modules that give JavaScript access to **system and server-side features**.

| Feature                      | Node.js API/Module                                |
| ---------------------------- | ------------------------------------------------- |
| File system                  | `fs`                                              |
| HTTP / Networking            | `http`, `https`                                   |
| Environment variables        | `process.env`                                     |
| Operating system information | `os`                                              |
| Timers                       | `setTimeout()`, `setInterval()`, `setImmediate()` |
| Modules                      | `require()`, `import`                             |

---

# Node.js Built-in Modules

Common Node.js built-in modules include:

* `fs`
* `http`
* `https`
* `os`
* `path`
* `crypto`
* `events`

---

# What is V8?

**V8** is Google's open-source JavaScript engine, written mainly in C++, that **compiles and executes JavaScript code**.

Node.js uses the **V8 engine** to execute JavaScript outside the browser.

```text
JavaScript Code
      ↓
V8 Engine
      ↓
Executes JavaScript
```

> **Important:** V8 executes JavaScript. It does not provide Node.js-specific APIs such as `fs` or `http`.

---

# What is the Event Loop?

The **Event Loop** is a mechanism in Node.js that continuously checks for completed asynchronous operations and coordinates their callbacks so they can be executed by the **main JavaScript thread**.

```text
Async Operation
      ↓
Operation completes
      ↓
Callback becomes ready
      ↓
Event Loop
      ↓
Call Stack
      ↓
JavaScript callback executes
```

> The Event Loop helps Node.js handle many asynchronous operations without blocking the main JavaScript thread.

---

# What is libuv?

**libuv** is a C library used by Node.js to provide the infrastructure for **asynchronous and non-blocking operations**.

libuv helps Node.js handle asynchronous work using mechanisms such as:

* Event Loop
* OS asynchronous facilities
* Thread Pool
* Timers

```text
Node.js
   ↓
libuv
   ├── Event Loop
   ├── OS async mechanisms
   ├── Thread Pool
   └── Timers
```

---

# What is a Thread?

A **thread** is a unit of execution within a process that can perform work.

Example:

```text
Worker 1 → Read file
Worker 2 → Process data
Worker 3 → Encrypt data
Worker 4 → Another task
```

---

# Main Features of libuv

## 1. Event Loop

One of the most important features of libuv is the **Event Loop**.

It coordinates asynchronous operations and determines when their callbacks can be executed.

---

## 2. Non-Blocking I/O

libuv helps Node.js perform **non-blocking I/O**.

Node.js can start an I/O operation and continue executing other JavaScript instead of waiting for the operation to finish.

---

## 3. Thread Pool

libuv provides a worker **thread pool** for certain operations that cannot efficiently be handled directly through the operating system's asynchronous mechanisms.

### Default Size

The libuv thread pool has **4 worker threads by default**.

```text
             libuv
                ↓
      ┌─────────────────┐
      │   Thread Pool   │
      │                 │
      │   Worker 1      │
      │   Worker 2      │
      │   Worker 3      │
      │   Worker 4      │
      └─────────────────┘
```

> The thread-pool size can be changed using the `UV_THREADPOOL_SIZE` environment variable.

---

# What Does the libuv Thread Pool Handle?

The thread pool is used for certain operations that need background worker threads.

## 1. File System

Examples:

```text
fs.readFile()
fs.writeFile()
fs.readdir()
```

Some asynchronous file-system operations use the libuv thread pool.

---

## 2. Cryptography

Some asynchronous cryptographic operations can use the thread pool.

Examples include certain operations from Node.js `crypto` APIs.

---

## 3. DNS

Certain DNS operations can use the libuv thread pool.

For example, some hostname-resolution APIs may use the thread pool when the operating system's asynchronous DNS facilities are not used.

---

> **Important Correction:** `setTimeout()`, `setInterval()`, and `setImmediate()` are handled by Node.js/libuv's **timer and event-loop mechanisms**. They are **not worker-thread-pool tasks**.

---

# What Happens When All 4 Threads Are Busy?

Suppose four thread-pool operations are already running:

```text
Thread Pool

Worker 1 → Task A
Worker 2 → Task B
Worker 3 → Task C
Worker 4 → Task D
```

Now another operation arrives:

```text
Task E
```

Since all workers are busy, Task E waits in the **thread-pool work queue**.

```text
Worker 1 → Task A
Worker 2 → Task B
Worker 3 → Task C
Worker 4 → Task D
                 ↓
          Waiting Queue
                 ↓
              Task E
```

When one worker becomes available:

```text
Worker 2 → Task B completed
                 ↓
              Task E
                 ↓
       Picked up by Worker 2
```

> The thread pool has a fixed number of workers, but the work queue can contain additional tasks waiting for an available worker.

---

# What Happens After the Thread Finishes?

Example: `fs.readFile()`

```text
1. JavaScript calls fs.readFile()
                ↓
2. Node.js fs API
                ↓
3. Node.js/libuv determines how to perform the operation
                ↓
4. libuv thread pool handles the file operation
                ↓
5. File is read
                ↓
6. Worker finishes
                ↓
7. Completion is reported
                ↓
8. Callback becomes ready
                ↓
9. Event Loop coordinates callback execution
                ↓
10. Main JavaScript thread executes callback
```

---

# Is libuv the Same as Node.js API?

**No.**

For example:

```text
fs
↓
Node.js Built-in API
```

`fs` is the **API you use**.

libuv is part of the **underlying infrastructure Node.js uses** to implement asynchronous behavior.

```text
Your JavaScript
      ↓
Node.js API
      ↓
libuv / OS
      ↓
Operating System
```

> **Simple:** `fs` is what you use; libuv is part of what Node.js uses internally.

---

# What is a Worker Thread?

A **Worker Thread** is a separate JavaScript execution thread within the same Node.js process.

It is mainly used for **CPU-intensive JavaScript tasks** so that the main thread and Event Loop remain responsive.

Examples:

* Complex JavaScript calculations
* Large data processing
* CPU-heavy algorithms

```text
Node.js Application
        ↓
┌─────────────────────────────┐
│ Main Thread                 │
│                             │
│ → Normal JavaScript         │
│ → Event Loop                │
└─────────────────────────────┘
        ↓
┌─────────────────────────────┐
│ Worker Thread               │
│                             │
│ → CPU-heavy JavaScript      │
│ → Heavy calculations        │
└─────────────────────────────┘
```

---

# How Do You Create a Worker Thread?

You explicitly create a Worker Thread using Node.js's `worker_threads` module.

```js
const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Result from worker:", result);
});

worker.on("error", (error) => {
  console.log("Worker error:", error);
});

worker.on("exit", (code) => {
  console.log("Worker exited with code:", code);
});
```

Worker Threads are designed for running JavaScript code in **parallel**, especially CPU-intensive JavaScript work.

---

# Worker Thread Example

```text
Complex JavaScript calculation
            ↓
       Worker Thread
            ↓
      Calculation
            ↓
        Result
            ↓
       Main Thread
```

Examples:

```text
Complex JavaScript calculation
Large data processing
CPU-heavy JS algorithm
```

---

# Worker Thread vs libuv Thread Pool

| Worker Thread                                   | libuv Thread Pool                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| You explicitly create it                        | Managed internally by libuv                                               |
| Runs JavaScript code                            | Runs certain background operations                                        |
| Uses `worker_threads`                           | Part of libuv                                                             |
| Good for CPU-heavy JavaScript                   | Used for certain async I/O, crypto, DNS, etc.                             |
| Has its own JavaScript/V8 execution environment | Not a separate JavaScript execution environment for your application code |
| Can run JavaScript in parallel                  | Used internally for supported asynchronous operations                     |

### Easy Difference

```text
Worker Thread
      ↓
You create it
      ↓
Runs your JavaScript
      ↓
CPU-intensive work
```

```text
libuv Thread Pool
      ↓
Node.js/libuv manages it
      ↓
Runs certain background operations
      ↓
fs / crypto / some DNS operations
```

---

# What is Non-Blocking I/O?

**Non-blocking I/O** means Node.js starts an I/O operation but **does not wait for it to finish**.

It continues executing other JavaScript code while the I/O operation is being handled asynchronously.

Node.js uses **Node.js APIs, libuv, and operating-system facilities** to handle asynchronous I/O.

### Example

```js
const fs = require("node:fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log("File reading completed");
});

console.log("Hello");
```

### Output

```text
Hello
File reading completed
```

### Flow

```text
fs.readFile()
      ↓
Start file reading
      ↓
Node.js does NOT wait
      ↓
console.log("Hello")
      ↓
File reading finishes
      ↓
Callback becomes ready
      ↓
Callback executes
```

---

# What is Asynchronous Programming?

**Asynchronous programming** means an operation does not force the program to wait for it to complete before doing other work.

```text
Start Task A
     ↓
Task A is waiting
     ↓
Do Task B
     ↓
Task A completes
     ↓
Handle Task A result
```

---

# What is Synchronous Programming?

**Synchronous programming** means tasks are executed one after another, and the program waits for the current operation to finish before moving to the next operation.

```text
Task A
  ↓
Wait until A finishes
  ↓
Task B
  ↓
Wait until B finishes
  ↓
Task C
```

---

# What is Blocking?

**Blocking** means the program waits for the current operation to finish before continuing to the next operation.

```text
Task A
  ↓
WAIT
  ↓
A finishes
  ↓
Task B
```

---

# What is Non-Blocking?

**Non-blocking** means the program starts an operation and continues executing other code without waiting for that operation to finish.

```text
Task A starts
     ↓
Don't wait
     ↓
Task B executes
     ↓
Task A completes later
     ↓
Handle Task A result
```

---

# Server-Side — Node.js

On the server side, asynchronous operations are provided through **Node.js APIs** and handled using **libuv and operating-system facilities**.

Examples:

```text
fs.readFile()
http.request()
```

### Example Flow

```text
JavaScript
    ↓
Node.js API
    ↓
libuv / OS
    ↓
Asynchronous Operation
    ↓
Completion
    ↓
Event Loop
    ↓
Callback
    ↓
Main JavaScript Thread
```

---

# Client-Side — Browser

In the browser, asynchronous operations are provided through **Browser/Web APIs** and handled by the browser's runtime and operating system.

Examples:

```text
fetch()
setTimeout()
DOM events
```

### Browser Flow

```text
JavaScript
    ↓
Browser/Web API
    ↓
Browser Runtime / OS
    ↓
Asynchronous Operation
    ↓
Completion
    ↓
Event Loop
    ↓
Callback
    ↓
JavaScript
```

---

# Node.js Runtime — Complete Picture

```text
                 Node.js Runtime
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
        V8                    Node.js APIs
          │                         │
          │              ┌──────────┼──────────┐
          │              ↓          ↓          ↓
          │             fs        http       crypto
          │
          ↓
   Executes JavaScript
                       │
                       ↓
                     libuv
                       │
          ┌────────────┼─────────────┐
          ↓            ↓             ↓
      Event Loop    Thread Pool    OS APIs
          │            │
          │            ├── File System
          │            ├── Crypto
          │            └── Some DNS
          │
          ↓
    Callback execution
          │
          ↓
    Main JS Thread
```

---

# Important Interview Points

### Node.js

> Runtime environment that allows JavaScript to run outside the browser.

### V8

> JavaScript engine that executes JavaScript code.

### Node.js APIs

> Provide JavaScript access to server-side and system features.

### libuv

> C library that provides Node.js with the infrastructure for asynchronous operations, including the Event Loop, thread pool, timers, and OS integration.

### Event Loop

> Coordinates asynchronous operations and callback execution without blocking the main JavaScript thread.

### Thread Pool

> A set of worker threads managed by libuv for certain operations such as file-system work, some crypto operations, and certain DNS operations.

### Worker Thread

> A separate JavaScript execution thread that you explicitly create for CPU-intensive JavaScript work.

### Blocking

> The program waits for an operation to finish.

### Non-Blocking

> The program starts an operation and continues other work without waiting for it to finish.

### Synchronous

> Operations are performed sequentially, with the current operation completing before the next one proceeds.

### Asynchronous

> An operation can be started without making the program wait for its completion.

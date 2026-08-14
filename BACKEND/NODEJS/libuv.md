# What is libuv?

-> **libuv** is a C library used by Node.js that provides:

* Event Loop
* Asynchronous I/O
* Thread Pool
* Timers
* Networking support
* File system operations

-> Without libuv, Node.js could not perform asynchronous operations efficiently.

-> **libuv is a bridge between JavaScript and the Operating System.**

-> The Operating System actually performs most low-level work (network I/O, disk I/O, timers, CPU scheduling). libuv provides a common API so Node.js can work the same way on Windows, Linux, and macOS.

---

## Browser Example

```text
fetch("/users");

JavaScript
    │
    ▼
Browser API (fetch)
    │
    ▼
Browser Engine
    │
    ▼
Operating System
    │
    ▼
TCP/IP Stack
    │
    ▼
Server
```

---

## Node.js Example

```text
fs.readFile("data.txt");

JavaScript
    │
    ▼
Node.js fs API
    │
    ▼
libuv
    │
    ▼
Operating System
    │
    ▼
Disk
```

---

# Why was libuv created?

-> JavaScript is **single-threaded**.

-> Without libuv:

```javascript
fs.readFile("data.txt");
```

-> would block the entire application.

-> libuv solves this problem by:

* Delegating slow operations
* Using asynchronous APIs
* Managing worker threads
* Working with the Operating System

```text
JavaScript Code
    │
    ▼
Node.js
    │
    ▼
libuv
    │
    ├── Event Loop
    ├── Thread Pool
    ├── Timers
    ├── File System
    └── Networking
```

---

# Why Node.js Uses libuv?

Because JavaScript cannot:

* Read files asynchronously
* Create an Event Loop
* Handle networking
* Manage worker threads

libuv provides the infrastructure that allows Node.js to perform these operations asynchronously.

---

# Responsibilities of libuv

## 1. Event Loop

The Event Loop is responsible for:

* Checking completed async tasks
* Moving callbacks to the Call Stack
* Executing callbacks when the stack is empty

---

## 2. Thread Pool

Some operations cannot be handled directly by the Operating System asynchronously.

### Used For

* File System
* Crypto
* Compression
* Some DNS lookups

---

## 3. File System

* Node.js doesn't know how to read files.
* libuv communicates with the Operating System.

```text
Node.js
   ↓
libuv
   ↓
Operating System
   ↓
Disk
```

---

## 4. Networking

Networking includes:

* HTTP
* HTTPS
* TCP
* UDP

---

# Does libuv Handle Context Switching?

❌ **No. The Operating System does.**

libuv only:

* Creates the worker thread pool
* Assigns tasks
* Receives completion notifications

The **Operating System** decides:

* Which CPU core runs which thread
* When to pause/resume a thread (context switching)

---

# Who is Responsible for Low-Level Tasks?

-> The **Operating System** is responsible for low-level operations such as:

* Reading files
* Sending network packets
* Managing timers
* Scheduling threads
* Interacting with hardware

-> **Browser APIs** (in browsers) and **libuv** (in Node.js) act as intermediaries between JavaScript and the Operating System.

They:

* Expose convenient APIs to JavaScript
* Delegate work to the Operating System or worker threads when appropriate
* Notify the Event Loop when the operation completes

---

# Difference Between Low-Level Task and High-Level Task

## High-Level Tasks

-> High-level tasks are operations that developers write using APIs, such as:

```javascript
fs.readFile();
fetch();
setTimeout();
```

-> They describe **what the application wants to do**.

---

## Low-Level Tasks

-> Low-level tasks are the actual hardware and operating system operations required to complete those requests, such as:

* Opening files
* Reading data from disk
* Sending network packets
* Scheduling threads
* Managing memory
* Handling timers

-> The **Operating System performs these low-level tasks**, while runtimes like the browser and Node.js provide high-level APIs that abstract these details.

---

# So What Does libuv Do?

-> libuv is **not the Operating System**.

> Think of it as a **manager/coordinator**.

It:

1. Receives async tasks from Node.js.
2. Decides whether to use the thread pool or OS async I/O.
3. Submits the work.
4. Waits for completion notifications.
5. Wakes up the Event Loop.

-> It doesn't read the SSD or send network packets itself.

```text
Node.js
   │
   ▼
libuv
   │
   ├── Thread Pool
   │
   └── Operating System Async I/O
              │
              ▼
           Hardware
```

---

# What is a Network Packet?

-> A **network packet** is a small piece of data sent over a network.

-> A packet is like a parcel delivered by a courier.

-> If you want to send a large object, you don't send it as one giant package—you split it into many smaller packages.

```text
Large Data
    ↓
┌────────┬────────┬────────┬────────┐
│Packet 1│Packet 2│Packet 3│Packet 4│
└────────┴────────┴────────┴────────┘
    ↓
Network
    ↓
Destination
```

---

# Does Every Async Task Use a Thread?

No.

There are different categories of asynchronous operations.

## Category 1: Network I/O

**Usually No Worker Thread**

-> No libuv worker thread is occupied just because the database is taking time.

Examples:

* HTTP requests
* MongoDB queries
* MySQL queries
* WebSockets
* TCP sockets

---

## Category 2: File System / Crypto / Compression

These operations commonly use the **libuv worker thread pool**.

Examples:

* File System operations
* Cryptographic operations
* Compression
* Some DNS lookups

---

# Which Operations Use libuv Worker Threads?

| Operation         | Uses Worker Thread? |
| ----------------- | ------------------- |
| `fs.readFile()`   | ✅ Yes               |
| `fs.writeFile()`  | ✅ Yes               |
| `crypto.pbkdf2()` | ✅ Yes               |
| `zlib.gzip()`     | ✅ Yes               |
| Some DNS lookups  | ✅ Yes               |
| HTTP Request      | ❌ No                |
| MongoDB Query     | ❌ No                |
| MySQL Query       | ❌ No                |
| WebSocket         | ❌ No                |
| TCP Socket        | ❌ No                |

> **Interview Point:** Not every asynchronous operation uses the libuv thread pool. Network I/O is generally handled using OS-level asynchronous networking mechanisms, while operations such as file system, crypto, and compression commonly use the worker pool.

---

# Does libuv Create More Than 4 Threads?

-> No, libuv does not automatically create more worker threads.

-> It uses a **fixed-size thread pool**.

### By Default

-> libuv creates **4 worker threads**.

---

## Suppose 6 Tasks Arrive

```javascript
fs.readFile("a.txt");
fs.readFile("b.txt");
fs.readFile("c.txt");
fs.readFile("d.txt");
fs.readFile("e.txt");
fs.readFile("f.txt");
```

### What happens?

```text
Thread 1 → a.txt
Thread 2 → b.txt
Thread 3 → c.txt
Thread 4 → d.txt

e.txt → Waiting
f.txt → Waiting
```

-> Suppose Thread 2 finishes.

```text
Thread 2 Finished
       ↓
Take Next Waiting Task
       ↓
e.txt Starts
```

Then another available thread can take the next waiting task.

---

# Does libuv Automatically Create More Threads?

-> **No.**

It doesn't keep creating new threads because:

* More threads consume more memory.
* More threads increase context switching.
* Too many threads can reduce performance.

---

# Browser APIs and Node.js APIs

Browser APIs and Node.js APIs are similar in purpose, but they are implemented differently.

---

## Browser → Who Handles `setTimeout()`?

```text
JavaScript
    │
    ▼
Browser API
    │
    ├── Timer
    ├── DOM
    ├── Fetch
    ├── WebSocket
    └── Local Storage
```

-> The browser (Chrome, Firefox, Edge) implements these APIs.

---

## Node.js

-> Node.js doesn't have a browser.

-> Node.js APIs are built using **libuv** (for timers, file system, networking, etc.).

---

# Browser vs Node.js

| Browser                              | Node.js                     |
| ------------------------------------ | --------------------------- |
| Browser APIs                         | Node.js APIs                |
| Implemented by Chrome/Firefox/Safari | Implemented by Node.js      |
| No libuv                             | Uses libuv internally       |
| Has DOM                              | No DOM                      |
| Has `document`, `window`             | Has `fs`, `http`, `process` |

---

# Why Doesn't Chrome Use 4 Threads?

Because Chrome has much more work than Node.js.

It has to:

* Render HTML
* Paint CSS
* Execute JS
* Play Video
* Play Audio
* Decode Images
* Download Files
* Handle Mouse
* Handle Keyboard

-> A modern browser is a much larger environment than the Node.js runtime and uses many processes and threads for different responsibilities.

---

# ⭐ Interview Crux

> **libuv is a C library used internally by Node.js to provide the Event Loop, asynchronous I/O infrastructure, timers, networking support, and a worker thread pool. It acts as a bridge/coordinator between Node.js and the Operating System.**

### Remember the flow:

```text
JavaScript
    ↓
Node.js
    ↓
libuv
    ↓
┌──────────────────────────┐
│ OS Async I/O             │
│          OR              │
│ libuv Worker Thread Pool │
└──────────────────────────┘
    ↓
Operation Completes
    ↓
Event Loop
    ↓
Callback
    ↓
Call Stack
    ↓
JavaScript Executes
```

### Most Important Interview Points

1. **libuv is written in C.**
2. **Node.js uses libuv internally.**
3. **libuv provides the Event Loop infrastructure.**
4. **libuv provides a worker thread pool.**
5. **Default worker pool size is 4.**
6. **File-system operations commonly use the worker pool.**
7. **Crypto and compression can use the worker pool.**
8. **Network I/O generally does not occupy a libuv worker thread.**
9. **The Operating System performs the actual low-level operations.**
10. **The OS, not libuv, performs CPU scheduling and context switching.**
11. **libuv coordinates async work and completion notifications.**
12. **Not every async operation uses a worker thread.**

# Browser, Server & Node.js

## Browser

* Where the user interacts with the application (clicks, types, scrolls).
* Collects those actions and turns them into requests (like “show me my profile” or “submit this form”).

```text
Browser
    │
    ├── HTML
    ├── CSS
    └── JavaScript
```

---

## Server

* Receives the request from the browser.
* Processes it:

  * Checks databases
  * Runs logic
  * Validates data
* Prepares a response (like “Here’s your profile info” or “Form submitted successfully”).

### Server Responsibilities

* Business logic
* Authentication
* Database operations
* APIs
* File handling

---

## Back to Browser

* The server sends the response back.
* The browser renders it visually so the user sees updated content.

---

# JavaScript vs Node.js vs Browser JavaScript

## JavaScript is the same language, so what's the difference between Node.js and Browser JavaScript?

> The JavaScript language is the same, but the runtime environment is different.

### Difference

JavaScript is the same programming language in both environments, but the runtime is different.

### Browser JavaScript

JavaScript runs inside the browser runtime and has access to Browser APIs like:

* DOM
* `window`
* `document`
* `localStorage`
* `fetch()`

### Node.js

JavaScript runs inside the Node.js runtime, which provides APIs such as:

* `fs`
* `http`
* `process`
* `Buffer`
* `crypto`

Node.js has no DOM or `window`, but it can:

* Access the file system
* Create servers
* Interact with the operating system

---

# What is Runtime?

> A runtime is the environment where JavaScript code executes.

JavaScript needs a runtime because by itself it cannot:

```text
Read files
Create servers
Access the DOM
Send HTTP requests
Use timers
```

---

# Browser Runtime

The browser provides APIs such as:

```text
DOM
Window
Document
Fetch
Local Storage
Session Storage
History
Location
```

---

# Node.js Provides

Node.js provides APIs such as:

```text
File System
HTTP Server
Process
Buffer
Streams
Crypto
OS module
```

---

# Browser vs Node.js

| Feature            | Browser                      | Node.js                           |
| ------------------ | ---------------------------- | --------------------------------- |
| Runtime            | Browser                      | Node.js                           |
| Main Purpose       | Frontend                     | Backend                           |
| Global Object      | `window` (also `globalThis`) | `global` (also `globalThis`)      |
| DOM                | ✅ Yes                        | ❌ No                              |
| `document`         | ✅ Yes                        | ❌ No                              |
| `window`           | ✅ Yes                        | ❌ No                              |
| `fetch()`          | ✅ Yes                        | ✅ Yes (built into modern Node.js) |
| File System (`fs`) | ❌ No                         | ✅ Yes                             |
| HTTP Server        | ❌ No                         | ✅ Yes                             |
| `process`          | ❌ No                         | ✅ Yes                             |
| `Buffer`           | ❌ No                         | ✅ Yes                             |
| Local Storage      | ✅ Yes                        | ❌ No                              |

---

# Why Were PHP/Java Servers Slower for I/O-Heavy Workloads?

Suppose three users request a file.

Each request occupied a thread, even while just waiting.

### Problems

* Lots of threads
* More RAM
* CPU overhead from switching between threads
* Lower scalability

---

# Node.js Model

Node.js uses:

* Single JavaScript thread
* Event Loop
* Non-blocking I/O
* `libuv` for asynchronous operations

---

# Why Was Node.js Created?

Ryan Dahl created Node.js to:

* Run JavaScript on the server
* Use one language for frontend and backend
* Solve the scalability problems of blocking I/O
* Handle many concurrent connections efficiently
* Build fast, real-time web applications

---

# Who Creates Threads?

> The application (program) creates threads, and the Operating System manages and schedules them.

### Step 1: Process Starts

The Operating System creates the Node.js process.

```text
Operating System
       ↓
Node.js Process
       ↓
Main Thread Created
```

> Every process starts with at least one thread (the main thread).

### Step 2: Can More Threads Be Created?

> Yes. The application decides if it needs more threads.

```text
Node Process
     ↓
Main JavaScript Thread
```

If asynchronous work needs background threads, `libuv` creates a worker thread pool **(4 by default)**.

---

# Who Decides How Many Threads?

> It depends on the application.

### Chrome Browser Needs

```text
Rendering
Network
Audio
Video
GPU
```

### Node.js Needs

```text
JavaScript Execution
File Reading
DNS
Compression
Crypto
```

---

# Why Not Create 1000 Threads?

Because threads are expensive.

Each thread needs:

* Memory (stack)
* CPU scheduling
* Context switching
* Management

---

# How Node.js Actually Works

```text
             Node.js Process
    ┌───────────────────────────────────────┐
    │                                       │
    │  Main JavaScript Thread               │
    │  (Call Stack + Event Loop)            │
    │                                       │
    └──────────────┬────────────────────────┘
                   │
                   │ Async Task
                   ▼
        libuv / Operating System
        (Background)
                   │
        Worker Threads (when needed)
                   │
                   ▼
            File Read / Crypto /
            DNS / Compression
                   │
                   ▼
            Task Completed
                   │
                   ▼
        Callback Queue / Promise Queue
                   │
                   ▼
            Event Loop
                   │
                   ▼
        Main JavaScript Thread
        Executes Callback
```

---

# How to Handle 100,000 User Requests for Data?

## Step 1: Browser Sends Request

The browser sends a request to the Node.js server.

---

## Step 2: Node.js Receives Request

* The HTTP request event occurs.
* Node.js executes the route callback.

---

## Step 3: MongoDB Query Starts

Node.js sends the query to MongoDB.

> Now Node.js doesn't search the database itself.

---

## Step 4: MongoDB Searches

```text
MongoDB
   ↓
Read Database Files
   ↓
Find 100000 Records
   ↓
Prepare Result
```

---

## Step 5: Node.js Waits Asynchronously

> While MongoDB is working, it does not block the main thread.

Node.js can continue handling other requests.

---

## Step 6: MongoDB Sends Response

MongoDB sends the result back.

---

## Step 7: Node.js Receives the Response

When the network response arrives:

* The Operating System notifies `libuv`.
* `libuv` notifies the Event Loop.
* The Event Loop resumes the JavaScript callback.
* Or resolves the Promise if you're using `await`.

```text
MongoDB
   ↓
Operating System
   ↓
libuv
   ↓
Event Loop
   ↓
JavaScript
```

---

# Where Are the Records Stored?

## RAM (Memory)

> The records are stored in the Node.js process memory (RAM).

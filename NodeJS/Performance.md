# Node.js Performance

-> **Performance** is about making your Node.js application **fast, scalable, and memory-efficient**.

```text
Performance
│
├── Event Loop Blocking
├── Memory Leaks
├── Garbage Collection
├── Streams
├── Worker Threads
├── Cluster
└── Caching
```

---

# What is Performance?

-> Node.js performance is improved by avoiding **Event Loop blocking**, preventing **memory leaks**, relying on V8's **Garbage Collector**, using **streams** for large files, offloading CPU-intensive JavaScript work to **Worker Threads**, using **Cluster** to utilize multiple CPU cores, and **caching** frequently accessed data to reduce database queries and improve response times.

---

# Event Loop Blocking

-> **Event Loop blocking** occurs when the main JavaScript thread is busy executing a long-running synchronous or CPU-intensive task, preventing other requests from being processed.

### Problem

-> Avoid CPU-intensive synchronous work on the main thread because it blocks the Event Loop and delays all incoming requests.

### Solutions

* **Worker Threads**
* **Child Process**
* **Another Service**

```text
Request
   ↓
CPU-Intensive Task
   ↓
Main Thread Busy
   ↓
Event Loop Blocked
   ↓
Other Requests Wait
```

---

# Memory Leaks

-> A **memory leak** occurs when memory that is no longer needed is still referenced, preventing the Garbage Collector from freeing it.

### Simple Example

```text
Object created
     ↓
No longer needed
     ↓
Still referenced
     ↓
Garbage Collector cannot remove it
     ↓
Memory remains occupied
```

---

# Garbage Collection

-> **Garbage Collection (GC)** is the automatic process in the V8 engine that frees memory occupied by objects that are no longer reachable.

```text
Object created
     ↓
Object used
     ↓
Object no longer reachable
     ↓
Garbage Collector
     ↓
Memory freed
```

---

# Streams

-> **Streams** process data in small chunks instead of loading the entire data into memory.

### Why Use Streams?

-> Useful when working with large files or large amounts of data.

```text
Large File
    ↓
Chunk
    ↓
Process
    ↓
Chunk
    ↓
Process
    ↓
Completed
```

---

# Worker Threads

-> **Worker Threads** allow CPU-intensive JavaScript code to run in parallel on separate threads without blocking the main Event Loop.

### Use Worker Threads When:

* Heavy calculations
* CPU-intensive JavaScript operations
* Long-running computations

---

# How to Create a Worker Thread?

Suppose you have a heavy calculation.

```js
const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
    console.log(result);
});
```

### Flow

```text
Main Thread
     │
     │ Heavy Calculation
     ▼
Worker Thread
     │
     │ Calculation
     ▼
Result
     │
     ▼
Main Thread
```

---

# Cluster

-> **Cluster** allows multiple Node.js processes to run on different CPU cores, improving scalability and throughput.

-> Cluster is a built-in Node.js module that creates multiple Node.js processes (**workers**), allowing your application to use multiple CPU cores.

### Important

> One CPU core can handle multiple processes.

```text
CPU
│
├── Core 1 → Chrome + VS Code
│
├── Core 2 → Node.js + MongoDB
│
├── Core 3 → Spotify + Windows Services
│
└── Core 4 → Browser + Antivirus
```

-> The OS switches between them very quickly.

> A CPU core is the hardware that actually executes instructions (computations) of a process.

---

# Caching Basics

-> **Caching** stores frequently accessed data in memory so future requests can be served faster without repeating expensive operations.

## Rule to Decide

```text
Is it requested frequently?
        ↓
Is it expensive (DB/API/calculation)?
        ↓
Does it change rarely?
        ↓
      YES
        ↓
   Cache it ✅
```

### Example

-> **Product List** ✅ → Cache

-> Store it in **Redis**.

---

# Where Can Cache Be Stored?

```text
Cache
│
├── RAM ✅ (Fast)
│   │
│   ├── Redis
│   ├── Node.js Map
│   └── JavaScript Object
│
└── Hard Disk (Slower)
    │
    ├── Browser Cache
    ├── CDN Cache Files
    └── Application Disk Cache
```

---

# What is Redis?

-> **Redis** is one of the most popular tools used for caching in modern applications because it’s fast, lightweight, and designed to store data in memory.

### Simple Idea

```text
Client
   ↓
Node.js API
   ↓
Check Redis
   │
   ├── Data Found → Return Data ⚡
   │
   └── Data Not Found
          ↓
       MongoDB
          ↓
       Store in Redis
          ↓
       Return Data
```

---

# Performance Quick Revision

| Concept                 | Main Purpose                                                 |
| ----------------------- | ------------------------------------------------------------ |
| **Event Loop Blocking** | Avoid long-running work on the main thread                   |
| **Memory Leak**         | Prevent unnecessary memory from remaining referenced         |
| **Garbage Collection**  | Automatically frees unreachable objects                      |
| **Streams**             | Process large data in chunks                                 |
| **Worker Threads**      | Run CPU-intensive JavaScript without blocking the Event Loop |
| **Cluster**             | Use multiple Node.js processes/CPU cores                     |
| **Caching**             | Reduce expensive repeated operations                         |
| **Redis**               | Fast in-memory data store commonly used for caching          |

### Interview Crux

```text
Node.js Performance
        │
        ├── Avoid Event Loop Blocking
        │
        ├── Prevent Memory Leaks
        │
        ├── Use Streams for Large Data
        │
        ├── Worker Threads → CPU-intensive Tasks
        │
        ├── Cluster → Multiple CPU Cores
        │
        └── Redis → Caching
```

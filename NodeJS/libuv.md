## What is libuv?
-> libuv is a C library used by Node.js that provides:
    - Event Loop
    - Asynchronous I/O
    - Thread Pool
    - Timers
    - Networking support
    - File system operations
-> Without libuv, Node.js could not perform asynchronous operations efficiently.
-> libuv is a bridge between JavaScript and the Operating System.
-> The Operating System actually performs most low-level work (network I/O, disk I/O, timers, CPU scheduling). libuv provides a common API so Node.js can work the same way on Windows, Linux, and macOS.
 
- fetch("/users");
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

- fs.readFile("data.txt");
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


## Why was libuv created?
-> JavaScript is single-threaded. 
    - Without libuv,
    - fs.readFile("data.txt");
    - would block the entire application.   
    - libuv solves this problem by:
        Delegating slow operations
        Using asynchronous APIs
        Managing worker threads
        Working with the Operating Syste

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


## Why Node.js Uses libuv?
Because JavaScript cannot:
    Read files asynchronously
    Create an Event Loop
    Handle networking
    Manage worker threads

## Responsibilities of libuv
    1. Event Loop: The Event Loop is responsible for
        Checking completed async tasks
        Moving callbacks to the Call Stack
        Executing callbacks when the stack is empty
    
    2. Thread Pool
        Some operations cannot be handled directly by the Operating System asynchronously.
            Used For
            File System
            Crypto
            Compression
            Some DNS lookups
    
    3. File System
        - Node.js doesn't know how to read files.
        - libuv communicates with the Operating System.
    
    4. Networking
            Networking includes
                HTTP
                HTTPS
                TCP
                UDP



## Does libuv Handle Context Switching?
❌ No. The Operating System does.

libuv only:
    Creates the worker thread pool
    Assigns tasks
    Receives completion notifications

The OS decides
    Which CPU core runs which thread
    When to pause/resume a thread (context switching)



## Who are responsible for Low level task?
-> Yes. The Operating System is responsible for low-level operations such as reading files, sending network packets, managing timers, scheduling threads, and interacting with hardware. 
-> Browser APIs (in browsers) and libuv (in Node.js) act as intermediaries between JavaScript and the Operating System. They expose convenient APIs to JavaScript, delegate work to the Operating System or worker threads when appropriate, and notify the Event Loop when the operation completes.


## differnce between low level task and high level task?
-> High-level tasks are operations that developers write using APIs, such as fs.readFile(), fetch(), or setTimeout(). They describe what the application wants to do.
-> Low-level tasks are the actual hardware and operating system operations required to complete those requests, such as opening files, reading data from disk, sending network packets, scheduling threads, managing memory, and handling timers.
-> The Operating System performs these low-level tasks, while runtimes like the browser and Node.js provide high-level APIs that abstract these details.




## So What Does libuv Do?
libuv is not the Operating System.
Think of it as a manager/coordinator.
It:
    Receives async tasks from Node.js
    Decides whether to use the thread pool or OS async I/O
    Submits the work
    Waits for completion notifications
    Wakes up the Event Loop

It doesn't read the SSD or send network packets itself.


## What is a Network Packet?
- A network packet is a small piece of data sent over a network.
- A packet is like a parcel delivered by a courier.
- If you want to send a large object, you don't send it as one giant package—you split it into many smaller packages.

## Does Every Async Task Use a Thread?
Category 1: Network I/O (Usually No Worker Thread)
    - No libuv worker thread is occupied just because the database is taking time.
Category 2: File System / Crypto / Compression

## Which Operations Use libuv Worker Threads?
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


## Does libuv create more than 4 thread?
-> No, libuv does not automatically create more worker threads. It uses a fixed-size thread pool.
-> By Default -> libuv creates 4 worker threads.

-> Suppose 6 Tasks Arrive
        fs.readFile("a.txt");
        fs.readFile("b.txt");
        fs.readFile("c.txt");
        fs.readFile("d.txt");
        fs.readFile("e.txt");
        fs.readFile("f.txt");

-> What happens?
    Thread 1 → a.txt
    Thread 2 → b.txt
    Thread 3 → c.txt
    Thread 4 → d.txt

    e.txt → Waiting
    f.txt → Waiting

-> Suppose Thread 2 finishes.
    Thread 2 Finished
        ↓
    Take Next Waiting Task
        ↓
    e.txt Starts

## Does libuv Automatically Create More Threads?
->No. It doesn't keep creating new threads because:
    More threads consume more memory.
    More threads increase context switching.
    Too many threads can reduce performance.

## Browser APIs and Node.js APIs are similar in purpose, but they are implemented differently.
Browser -> Who handles setTimeout()?
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
    -> The browser (Chrome, Firefox, Edge) implements these APIs.

Node.js -> Node.js doesn't have a browser.
    -> Node.js APIs are built using libuv (for timers, file system, networking, etc.).

## | Browser                              | Node.js                     |
    | ------------------------------------ | --------------------------- |
    | Browser APIs                         | Node.js APIs                |
    | Implemented by Chrome/Firefox/Safari | Implemented by Node.js      |
    | No libuv                             | Uses libuv internally       |
    | Has DOM                              | No DOM                      |
    | Has `document`, `window`             | Has `fs`, `http`, `process` |

## Why Doesn't Chrome Use 4 Threads?
Because Chrome has much more work than Node.js.
    It has to
        Render HTML
        Paint CSS
        Execute JS
        Play Video
        Play Audio
        Decode Images
        Download Files
        Handle Mouse
        Handle Keyboard
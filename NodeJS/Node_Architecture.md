# Node.js Architecture

## Node.js Architecture is Based on Four Core Concepts

### 1. Single-Threaded Model

-> Node.js executes JavaScript using **one main thread**.

-> There is only **one Call Stack**, so only one JavaScript statement executes at a time.

---

### 2. Event-Driven Architecture

-> Node.js uses an **Event-Driven Architecture**, where actions such as completed I/O operations generate events that are handled by the Event Loop.

---

### 3. Non-Blocking I/O

-> Node.js does not block the main thread while waiting for I/O operations.

---

### 4. Asynchronous Execution

-> Asynchronous execution means Node.js starts a task and continues executing other code instead of waiting.

---

## Why is Node.js Still Fast?

-> Because the **main thread doesn't wait for slow operations**.

```text
             Client Requests
                  │
                  ▼
          Node.js Application
                  │
    ┌─────────────┴─────────────┐
    │                           │
    ▼                           ▼
Main JavaScript Thread      Async Operation?
(Call Stack + Event Loop)          │
    │                              │
    │                         Yes ─┘
    │                              ▼
    │                         Node.js APIs
    │                              │
    │                            libuv
    │                              │
    │              ┌───────────────┴───────────────┐
    │              │                               │
    │              ▼                               ▼
    │      Operating System                Worker Threads
    │     (Network I/O, Sockets)      (File, Crypto, zlib, DNS)
    │              │                               │
    └──────────────┴───────────────────────────────┘
                   │
                   ▼
             Task Completed
                   │
                   ▼
               Event Loop
                   │
                   ▼
          Callback / Promise
                   │
                   ▼
        Main JS Thread Executes
                   │
                   ▼
             Send Response
```

## Key Point

> **Node.js is fast because JavaScript runs on a single main thread, while slow I/O operations are handled asynchronously without blocking that thread.**

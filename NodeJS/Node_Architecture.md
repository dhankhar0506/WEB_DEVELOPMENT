## Node.js architecture is based on four core concepts:
    Single-threaded Model:
        -> Node.js executes JavaScript using one main thread.
        -> There is only one Call Stack, so only one JavaScript statement executes at a time.
    Event-Driven Architecture
    Non-Blocking I/O
        -> Node.js does not block the main thread while waiting for I/O operations.
    Asynchronous Execution
        -> Asynchronous execution means Node.js starts a task and continues executing other code instead of waiting.
## Why is it still fast?
-> Because the main thread doesn't wait for slow operations.

                
                
                 Client Requests
                      │
                      ▼
              Node.js Application
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
 Main JavaScript Thread        Async Operation?
(Call Stack + Event Loop)           │
        │                           │
        │                    Yes ───┘
        │                           ▼
        │                       Node.js APIs
        │                           │
        │                         libuv
        │                           │
        │          ┌────────────────┴────────────────┐
        │          │                                 │
        │     Operating System                Worker Threads
        │    (Network I/O, Sockets)      (File, Crypto, zlib, DNS)
        │          │                                 │
        └──────────┴─────────────────────────────────┘
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

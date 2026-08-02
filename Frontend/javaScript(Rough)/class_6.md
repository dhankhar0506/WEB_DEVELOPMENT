## JavaScript Runtime Architecture

                    JavaScript Runtime Environment
                  ┌───────────────────────────┐
                  │        JS Engine          │
                  │                           │
                  │  Memory Heap              │
                  │  (stores objects/data)    │
                  │                           │
                  │  ┌─────────────────────┐  │
                  │  │     Call Stack      │  │
                  │  │                     │  │
                  │  │  function3()        │  │
                  │  │  function2()        │  │
                  │  │  function1()        │  │
                  │  │  Global Context     │  │
                  │  └─────────────────────┘  │
                  └────────────┬──────────────┘
                               │
                               │ ① Async work
                               ▼
                ┌───────────────────────────────┐
                │          Web APIs             │
                │                               │
                │ setTimeout()                  │
                │ DOM Events                    │
                │ Fetch API                     │
                │ File API                      │
                │ Geolocation                   │
                │ WebSocket                     │
                └───────────┬───────────┬───────┘
                            │           │
                     Promise│           │Timer/Event
                            ▼           ▼
                  ┌──────────────┐  ┌──────────────┐
                  │Microtask Queue│ │  Task Queue  │
                  └──────┬────────┘ └──────┬───────┘
                         │                 │
                         └────────┬────────┘
                                  ▼
                           ┌─────────────┐
                           │ Event Loop  │
                           └──────┬──────┘
                                  │
                                  ▼
                          Call Stack (if empty)


## Step 1: Program Starts
    console.log("Start");

    setTimeout(() => { // asyn function
        console.log("Timeout");
    }, 1000);

    console.log("End");

## Step 2: Global Execution Context is Created
    The JS Engine creates the Global Execution Context and pushes it into the Call Stack.
    JS Engine
    │
    ├── Memory Heap
    │
    └── Call Stack

## Step 3: JavaScript Executes Code Line by Line
    JavaScript starts reading each line.

## Step 4: Async Function is Found
- JS  does NOT wait.
- Instead, it sends the timer to the Web APIs.
- Call Stack
      │
      ▼
Web APIs
(setTimeout timer starts)

## Step 5: Continue Executing Remaining Code
- Now the whole program finishes. Call Stack becomes empty.

## Step 6: Web API Finishes the Async Work
    After 1 second, the timer completes.
    () => {
    console.log("Hello");
    }

    is moved to the Task Queue.
    Web APIs
        │
        ▼
    Task Queue

## Step 7: Event Loop Checks the Call Stack
The Event Loop continuously asks: Is the Call Stack empty?
If Yes → Move the callback from the queue to the Call Stack.
    Task Queue
        │
        ▼
    Event Loop
        │
        ▼
    Call Stack

## Step 8: Callback Executes
    The callback is now on the Call Stack.


## Question1 : How does JavaScript know whether code is async or sync?
-  JavaScript recognizes asynchronous functions because they are predefined asynchronous APIs provided by the browser (or Node.js runtime), such as setTimeout, fetch, and addEventListener.

## 2. Once JavaScript finds async code, is it removed from the Call Stack?
YES

## 3. How do Web APIs handle async work?
- Web APIs are browser features written in languages like C++
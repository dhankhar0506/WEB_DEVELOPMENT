# JavaScript Runtime Architecture

## What is the JavaScript Runtime Environment?

> **The JavaScript Runtime Environment is the complete environment that allows JavaScript code to execute. It includes the JavaScript Engine plus runtime features such as Web APIs, queues, and the Event Loop.**

In a browser, the simplified architecture looks like this:

```text id="5x46mp"
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
                           │ Async Work
                           ▼
            ┌───────────────────────────────┐
            │          Web APIs             │
            │                               │
            │ setTimeout()                  │
            │ DOM Events                    │
            │ Fetch API                     │
            │ File-related Browser APIs     │
            │ Geolocation                   │
            │ WebSocket                     │
            └───────────┬───────────┬───────┘
                        │           │
                 Promise│           │Timer/Event
                 Related│           │Callbacks
                        ▼           ▼
              ┌────────────────┐ ┌──────────────┐
              │Microtask Queue │ │  Task Queue  │
              └───────┬────────┘ └──────┬───────┘
                      │                 │
                      └────────┬────────┘
                               ▼
                        ┌─────────────┐
                        │ Event Loop  │
                        └──────┬──────┘
                               │
                               ▼
                       Call Stack
                    (when appropriate)
```

---

# Main Parts of JavaScript Runtime

```text id="nnd3s2"
JavaScript Runtime
        │
        ├── JavaScript Engine
        │      ├── Call Stack
        │      └── Memory Heap
        │
        ├── Runtime APIs / Web APIs
        │
        ├── Microtask Queue
        │
        ├── Task / Callback Queue
        │
        └── Event Loop
```

---

# 1. JavaScript Engine

The JavaScript Engine executes JavaScript code.

Examples:

* V8 → Chrome, Node.js
* SpiderMonkey → Firefox
* JavaScriptCore → Safari

For our interview understanding:

```text id="4t8cqa"
JavaScript Engine
      │
      ├── Call Stack
      │
      └── Memory Heap
```

---

# 2. Call Stack

> **The Call Stack is a LIFO data structure that keeps track of currently executing JavaScript function calls/execution contexts.**

Example:

```js id="ic16kw"
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

Conceptually:

```text id="kufw3j"
┌─────────────────────┐
│ three()             │ ← Currently executing
├─────────────────────┤
│ two()               │
├─────────────────────┤
│ one()               │
├─────────────────────┤
│ Global Context      │
└─────────────────────┘
```

Because the Call Stack follows:

> **LIFO — Last In, First Out**

---

# 3. Memory Heap

> **The Memory Heap is a region of memory used for dynamically allocated objects and other runtime data.**

Example:

```js id="bveqfv"
const user = {
    name: "Gourav"
};
```

Conceptually:

```text id="v48ojf"
user
 │
 │ reference
 ▼
Memory Heap

{
    name: "Gourav"
}
```

---

# 4. Web APIs

> **Web APIs are features provided by the browser environment, not by the JavaScript language itself.**

Examples include:

* `setTimeout()`
* DOM Events
* Fetch API
* Geolocation
* WebSocket
* Browser file-related APIs

This is an important distinction:

```text id="7m34qn"
JavaScript Language
       ≠
Browser Web APIs
```

JavaScript can **call** these APIs, but they are provided by the browser runtime.

---

# 5. Task Queue / Callback Queue

> **The Task Queue contains tasks/callbacks that are ready to run after asynchronous operations such as timers or certain events complete.**

Examples commonly associated with tasks include:

```text id="96ix9g"
setTimeout callback
setInterval callback
DOM event callback
```

You may hear:

```text id="0shzyf"
Task Queue
```

or:

```text id="5y8efp"
Callback Queue
```

In basic JavaScript interviews, these terms are often used for the queue containing timer/event callbacks.

---

# 6. Microtask Queue

> **The Microtask Queue contains microtasks that should run before the next regular task is processed.**

Common examples:

```text id="8wue6a"
Promise .then()
Promise .catch()
Promise .finally()
queueMicrotask()
```

This is extremely important:

```text id="tfm0ab"
Microtask Queue
       ↓
Higher priority than
       ↓
Task Queue
```

More precisely, after the current JavaScript task/call stack finishes, the runtime drains pending microtasks before taking the next task.

---

# 7. Event Loop

> **The Event Loop coordinates when queued asynchronous work gets a chance to execute on the JavaScript thread.**

Simple interview understanding:

```text id="4ps5ph"
Current JavaScript finishes
          ↓
Call Stack becomes available
          ↓
Run pending Microtasks
          ↓
Take next Task
          ↓
Execute it
```

The Event Loop helps JavaScript handle asynchronous operations even though normal JavaScript execution uses a single main Call Stack.

---

# Example — `setTimeout()`

Consider:

```js id="0g38px"
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");
```

What will be the output?

```text id="5c3e2m"
Start
End
Timeout
```

Let's understand why.

---

# Step 1 — Program Starts

```js id="ggljmx"
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");
```

JavaScript starts executing the program.

---

# Step 2 — Global Execution Context is Created

The JavaScript Engine creates the **Global Execution Context** and makes it active on the Call Stack.

Conceptually:

```text id="r26xkn"
JS Engine
    │
    ├── Memory Heap
    │
    └── Call Stack
            │
            ▼
      Global Context
```

Call Stack:

```text id="6o4c2q"
┌──────────────────────┐
│ Global Context       │
└──────────────────────┘
```

---

# Step 3 — JavaScript Executes Code Line by Line

First:

```js id="9u8wp4"
console.log("Start");
```

Output:

```text id="y53h2m"
Start
```

Then JavaScript reaches:

```js id="vqte2n"
setTimeout(() => {
    console.log("Timeout");
}, 1000);
```

---

# Step 4 — Async Runtime API is Called

`setTimeout()` is provided by the runtime environment.

The timer is handled outside the normal JavaScript Call Stack by the host/runtime.

Conceptually:

```text id="zlj6p7"
Call Stack
     │
     │ setTimeout(...)
     ▼
Browser Timer Facility / Web API
     │
     ▼
Timer Starts
```

JavaScript does **not block the Call Stack waiting for one second**.

Instead, it continues executing the remaining synchronous code.

---

# Step 5 — Continue Executing Remaining Code

JavaScript moves to:

```js id="yvc8ue"
console.log("End");
```

Output:

```text id="9o2s73"
End
```

So far:

```text id="vmp32m"
Start
End
```

The synchronous global code then finishes.

---

# Step 6 — Runtime Completes the Timer

After **at least approximately 1000 ms**, the timer becomes eligible and its callback can be queued as a task.

The callback:

```js id="89r8no"
() => {
    console.log("Timeout");
}
```

is placed into the appropriate **Task Queue**.

Conceptually:

```text id="3pr1e9"
Timer Facility
      │
      ▼
Timer Completes / Becomes Eligible
      │
      ▼
Task Queue

┌────────────────────────────┐
│ () => console.log(...)     │
└────────────────────────────┘
```

> **Important:** `1000ms` does not mean the callback is guaranteed to execute exactly after 1000ms. It means it cannot run before the timer becomes eligible, and actual execution depends on the event loop and other pending work.

---

# Step 7 — Event Loop Checks Execution State

The Event Loop coordinates when the queued task can execute.

Simplified interview flow:

```text id="ntkkmx"
Task Queue
    │
    ▼
Event Loop
    │
    ▼
JavaScript Call Stack
```

Once the current synchronous work is finished and the runtime reaches the appropriate event-loop step, the queued callback can execute.

---

# Step 8 — Callback Executes

The callback executes:

```js id="0b22yx"
() => {
    console.log("Timeout");
}
```

Output:

```text id="5p2pxw"
Timeout
```

Final output:

```text id="aj0z4z"
Start
End
Timeout
```

---

# Complete `setTimeout()` Flow

```text id="fym7y7"
console.log("Start")
        │
        ▼
Output → Start
        │
        ▼
setTimeout(callback, 1000)
        │
        ▼
Runtime Timer / Web API
        │
        │ Timer runs outside normal
        │ JS Call Stack
        │
        ▼
console.log("End")
        │
        ▼
Output → End
        │
        ▼
Current Synchronous Code Finishes
        │
        ▼
Timer Eligible / Complete
        │
        ▼
Callback enters Task Queue
        │
        ▼
Event Loop
        │
        ▼
Callback Executes
        │
        ▼
Output → Timeout
```

---

# Important: `setTimeout(0)` Does NOT Run Immediately

Consider:

```js id="dn5u0v"
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Many beginners think:

```text id="rq9vbj"
Start
Timeout
End
```

❌ Wrong.

Actual output:

```text id="2rricv"
Start
End
Timeout
```

Why?

Because even with:

```js id="x3oskj"
setTimeout(callback, 0);
```

the callback is scheduled as a future task.

It must wait until the current synchronous JavaScript finishes.

```text id="3qx89f"
Current JS
    ↓
Start
    ↓
setTimeout(0)
    ↓
Callback scheduled
    ↓
End
    ↓
Current synchronous work finishes
    ↓
Callback gets chance to execute
    ↓
Timeout
```

So:

> **`setTimeout(0)` means schedule the callback as soon as the runtime allows after the minimum delay, not execute it immediately.**

---

# Microtask Queue vs Task Queue

This is one of the **most important JavaScript interview topics**.

Consider:

```js id="rfb56c"
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```text id="x9i5w3"
Start
End
Promise
Timeout
```

Why?

Because:

```text id="jjcqu3"
Promise callback
      ↓
Microtask Queue


setTimeout callback
      ↓
Task Queue
```

After the current synchronous work finishes:

```text id="yuf6m4"
Current synchronous JS finishes
            ↓
Drain Microtask Queue
            ↓
Take next Task
```

Therefore:

```text id="h3uy3r"
Promise
```

executes before:

```text id="1u1v5p"
Timeout
```

---

# Complete Promise + Timer Flow

```text id="97akg6"
console.log("Start")
        ↓
Start

setTimeout(...)
        ↓
Timer handled by runtime
        ↓
Eventually callback → Task Queue


Promise.resolve().then(...)
        ↓
Promise reaction scheduled
        ↓
Microtask Queue


console.log("End")
        ↓
End

Current synchronous JS finishes
        ↓
Drain Microtask Queue
        ↓
Promise callback
        ↓
Output → Promise
        ↓
Next Task
        ↓
Timeout callback
        ↓
Output → Timeout
```

Final:

```text id="xf64p4"
Start
End
Promise
Timeout
```

---

# Question 1 — How Does JavaScript Know Whether Code is Async or Sync?

A more accurate interview explanation is:

> **JavaScript executes normal JavaScript statements synchronously on the Call Stack. Asynchronous behavior comes from APIs and language/runtime mechanisms that schedule work to complete later, such as timers, events, network requests, Promises, and async/await.**

It is not simply:

> "JavaScript sees an async function and automatically sends it away."

Instead, different APIs have different defined behaviors.

For example:

```js id="8w1jzw"
setTimeout(callback, 1000);
```

The runtime knows `setTimeout` is a timer API because that API is implemented by the environment.

Similarly:

```js id="dy7zhl"
fetch(url);
```

starts network-related asynchronous work through the runtime/browser networking facilities and returns a Promise.

---

# Question 2 — Once JavaScript Finds Async Code, Is It Removed From the Call Stack?

The simple answer needs a small correction.

It is **not accurate to say that the whole async function is simply removed from the Call Stack and sent to Web APIs.**

For:

```js id="wn92kx"
setTimeout(callback, 1000);
```

what happens conceptually is:

```text id="ehlk78"
setTimeout() called
      ↓
Runtime registers timer + callback
      ↓
setTimeout() call returns
      ↓
Its stack frame finishes normally
      ↓
JavaScript continues
```

The runtime handles the timer.

Later:

```text id="b26j3m"
Timer becomes eligible
      ↓
Callback queued
      ↓
Event Loop
      ↓
Callback executes
```

So the better interview answer is:

> **The asynchronous API call itself executes on the Call Stack and returns quickly after registering/delegating the work. The runtime handles the asynchronous operation, and its callback or continuation is scheduled to execute later.**

---

# Question 3 — How Do Web APIs Handle Async Work?

> **Web APIs are browser-provided capabilities implemented by the browser, largely using native code and underlying operating-system facilities. They can handle operations such as timers, networking, DOM events, geolocation, and other browser functionality outside the JavaScript Call Stack.**

Conceptually:

```text id="03am8j"
JavaScript
    │
    │ Calls API
    ▼
Browser Web API
    │
    │ Browser / OS handles work
    ▼
Operation Completes
    │
    ▼
Queue appropriate continuation
    │
    ▼
Event Loop
    │
    ▼
JavaScript executes callback
```

---

# Question 4 — Is JavaScript Asynchronous?

> **JavaScript execution on the main thread is synchronous and uses a single Call Stack, but the runtime environment provides mechanisms that allow JavaScript programs to perform asynchronous operations.**

So:

```text id="p0sl7y"
JavaScript Execution
        ↓
Single Call Stack
        ↓
Synchronous execution

BUT

Browser / Node.js Runtime
        ↓
Timers
Networking
Events
Promises
I/O
        ↓
Allows asynchronous programming
```

---

# Question 5 — What is the Event Loop?

> **The Event Loop coordinates execution between JavaScript's Call Stack and queued work, allowing asynchronous callbacks and continuations to run when the current JavaScript execution permits.**

Simplified:

```text id="2gsbtz"
Call Stack
    ↓
Current task finishes
    ↓
Microtasks
    ↓
Next task
    ↓
Execute
```

---

# Question 6 — What Has Higher Priority: Microtask or Task Queue?

**Microtasks run before the next regular task.**

```text id="zgm4wr"
Current synchronous task
        ↓
Microtask Queue
        ↓
Task Queue / Next Task
```

Common microtasks:

```text id="xvt0my"
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
```

Common tasks:

```text id="qadp38"
setTimeout()
setInterval()
many DOM event callbacks
```

---

# Question 7 — Does `fetch()` Go to the Task Queue?

Not directly.

```js id="m9gdrh"
fetch(url)
    .then(data => {
        // ...
    });
```

Simplified flow:

```text id="frwm0z"
fetch()
   ↓
Browser networking/runtime
   ↓
Request completes
   ↓
Promise settles
   ↓
.then() reaction
   ↓
Microtask Queue
   ↓
Execute after current JS
```

So Promise reactions from `fetch()` are handled as **microtasks**.

---

# Browser vs Node.js Runtime

The overall idea is similar, but the environment differs.

## Browser

```text id="s5x75g"
JavaScript
   ↓
V8 / Other JS Engine
   +
Web APIs
   +
Event Loop
   +
Queues
```

## Node.js

```text id="2uj34h"
JavaScript
   ↓
V8
   +
Node.js APIs
   +
libuv
   +
Event Loop
   +
Queues
```

Node.js does not provide browser Web APIs like the DOM.

Instead, Node.js provides APIs for things such as:

```text id="tbtv8a"
File System
Networking
Servers
Timers
Processes
Streams
```

---

# Complete JavaScript Runtime Architecture

```text id="0ucf0p"
                 JavaScript Code
                        │
                        ▼
                JavaScript Engine
                        │
               ┌────────┴────────┐
               │                 │
               ▼                 ▼
          Memory Heap       Call Stack
                                  │
                                  │
                     Calls Runtime APIs
                                  │
                                  ▼
                     Browser Web APIs
                                  │
                    ┌─────────────┴────────────┐
                    │                          │
                    ▼                          ▼
            Promise Reactions            Timers / Events
                    │                          │
                    ▼                          ▼
            Microtask Queue               Task Queue
                    │                          │
                    └───────────┬──────────────┘
                                │
                                ▼
                           Event Loop
                                │
                                ▼
                         JavaScript Thread
                                │
                                ▼
                            Call Stack
```

---

# Quick Interview Revision

| Concept               | Simple Definition                                 |
| --------------------- | ------------------------------------------------- |
| **JS Engine**         | Executes JavaScript                               |
| **Call Stack**        | Tracks currently executing JS/function calls      |
| **Memory Heap**       | Stores dynamically allocated objects/runtime data |
| **Web APIs**          | Browser-provided runtime capabilities             |
| **Task Queue**        | Holds tasks such as timer/event callbacks         |
| **Microtask Queue**   | Holds Promise reactions and other microtasks      |
| **Event Loop**        | Coordinates when queued work executes             |
| **`setTimeout()`**    | Schedules a timer task for later                  |
| **Promise `.then()`** | Schedules a microtask when the Promise settles    |
| **`fetch()`**         | Starts async network work and returns a Promise   |
| **Node.js**           | Uses V8 + Node APIs + libuv/event loop            |

---

# Most Important Interview Flow

```text id="wmt70q"
        Synchronous JavaScript
                 ↓
             Call Stack
                 ↓
          Async API Called
                 ↓
        Runtime Handles Work
                 ↓
       Operation Becomes Ready
                 ↓
         ┌───────┴────────┐
         │                │
         ▼                ▼
   Microtask Queue    Task Queue
         │                │
         └───────┬────────┘
                 ↓
            Event Loop
                 ↓
        JavaScript Executes
          Scheduled Work
```

## One-Line Memory Trick

**Call Stack executes JS → Runtime handles async work → Promise reactions go to Microtasks → Timers/events become Tasks → Event Loop schedules them → Microtasks run before the next Task.**

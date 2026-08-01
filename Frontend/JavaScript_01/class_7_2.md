# Promises, Event Loop & JavaScript Async Flow — Interview Notes

---

# What is a Promise?

> **A Promise is a JavaScript object that represents the future result of an asynchronous operation.**

It is like saying:

> **"I don't have the result now, but I promise I'll give it to you later."**

Promises are commonly used with operations such as:

* Downloading data from a server
* Reading a file
* Database query
* Waiting for a timer

---

## Promise Has 3 States

A Promise can be in one of three states:

```text
              Pending
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
   Fulfilled           Rejected
   (Success)            (Failed)
```

### 1. Pending

The asynchronous operation is still running.

```text
Promise
   ↓
Pending
```

### 2. Fulfilled

The operation completed successfully.

```text
Promise
   ↓
Fulfilled
   ↓
Success Value
```

### 3. Rejected

The operation failed.

```text
Promise
   ↓
Rejected
   ↓
Error / Reason
```

### Important

Once a Promise becomes **fulfilled or rejected**, it is considered **settled**.

```text
Promise
   │
   ├── Pending
   │
   └── Settled
         │
         ├── Fulfilled
         └── Rejected
```

---

# Who Creates (Sends) the Promise?

## Browser / Node APIs Return Promises — Most Common

Many APIs return Promises.

For example:

```js
fetch("/users");
```

`fetch()` immediately returns a Promise.

```text
fetch()
   ↓
Promise
```

You didn't manually create that Promise.

The `fetch()` API created/returned it for you.

Example:

```js
const promise = fetch("/users");

console.log(promise);
```

Conceptually:

```text
fetch()
   ↓
Browser / Runtime
   ↓
Promise
   ↓
Initially Pending
```

---

# Can You Create Your Own Promise?

**Yes.**

JavaScript provides the `Promise` constructor.

```js
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Found");
    } else {
        reject("Error");
    }

});
```

Here:

```text
new Promise(...)
      │
      ├── resolve()
      │      ↓
      │   Fulfilled
      │
      └── reject()
             ↓
          Rejected
```

### `resolve()`

Used when the operation succeeds.

```js
resolve("Data Found");
```

Promise becomes:

```text
Fulfilled
```

### `reject()`

Used when the operation fails.

```js
reject("Error");
```

Promise becomes:

```text
Rejected
```

---

# How Do We Handle a Promise?

There are two common ways:

```text
Promise Handling
      │
      ├── 1. .then() / .catch() / .finally()
      │
      └── 2. async / await
```

---

# 1. Using `.then()`, `.catch()` and `.finally()`

```js
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Server Error");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done");
    });
```

### `.then()`

Used to handle a successfully fulfilled Promise.

```js
.then((result) => {
    console.log(result);
})
```

Conceptually:

```text
Promise Fulfilled
       ↓
    .then()
       ↓
Handle Result
```

---

### `.catch()`

Used to handle a rejected Promise/error.

```js
.catch((error) => {
    console.log(error);
})
```

Conceptually:

```text
Promise Rejected
       ↓
    .catch()
       ↓
Handle Error
```

---

### `.finally()`

Runs after the Promise settles, whether it is fulfilled or rejected.

```js
.finally(() => {
    console.log("Done");
});
```

Conceptually:

```text
       Promise
          │
     ┌────┴────┐
     ▼         ▼
 Fulfilled   Rejected
     │         │
     └────┬────┘
          ▼
      .finally()
```

---

# 2. Using `async/await`

Promises can also be handled using:

```text
async / await
```

Example:

```js
async function getUsers() {

    try {
        const response = await fetch("/users");

        console.log(response);

    } catch (error) {

        console.log(error);

    }

}

getUsers();
```

Here:

```text
async function
      ↓
fetch()
      ↓
Promise
      ↓
await
      ↓
Wait for Promise settlement
      ↓
Continue function
```

Errors can be handled using:

```js
try {
    // async operation
} catch (error) {
    // handle error
}
```

---

# How Does `fetch()` Use Promises?

`fetch()` immediately returns a **pending Promise**, and the browser starts the network request.

JavaScript continues executing other code.

When the response arrives, the Promise becomes fulfilled or rejected.

The corresponding Promise reaction such as `.then()` or `.catch()` is scheduled through the **Microtask Queue**.

Once the current JavaScript execution has completed, pending microtasks get their chance to execute.

JavaScript creates a Function Execution Context for the callback when that callback executes.

---

## Complete `fetch()` Flow

```text
fetch()
   │
   ▼
Browser starts HTTP request
   │
   ▼
fetch() immediately returns Promise
(Pending)
   │
   ▼
JavaScript continues executing
   │
   ▼
Server sends response
   │
   ▼
Promise becomes
Fulfilled / Rejected
   │
   ▼
.then() / .catch() callback
   │
   ▼
Microtask Queue
   │
   ▼
Event Loop / Runtime Scheduling
   │
   ▼
Call Stack
   │
   ▼
Function Execution Context created
   │
   ▼
Callback executes
   │
   ▼
Function context removed
```

---

## Example

```js
console.log("Start");

fetch("/users")
    .then((response) => {
        console.log("Response Received");
    })
    .catch((error) => {
        console.log(error);
    });

console.log("End");
```

Conceptually:

```text
Start
  ↓
fetch()
  ↓
Promise returned
  ↓
Network request continues
  ↓
JavaScript continues
  ↓
End
  ↓
Response arrives
  ↓
Promise settles
  ↓
.then() reaction becomes a microtask
  ↓
Callback executes
```

---

# What is the Event Loop?

> **The Event Loop is a mechanism in the JavaScript runtime that coordinates the execution of queued asynchronous work with JavaScript's Call Stack.**

A simplified interview explanation is:

```text
Is current JavaScript / Call Stack finished?
                │
                ▼
              Yes
                │
                ▼
Process Microtasks
                │
                ▼
Process Next Task
```

### Architecture

```text
                    Browser Runtime
                         │
                         ▼

+----------------+     +------------------+
|   Call Stack   |◄────|    Event Loop    |
+----------------+     +------------------+
        ▲                     ▲
        │                     │
+----------------+    +----------------+
|Microtask Queue |    |   Task Queue   |
+----------------+    +----------------+
```

---

# Why is the Event Loop Needed?

JavaScript is single-threaded.

It has only one main Call Stack, so it can execute only one JavaScript function/task at a time.

Without runtime scheduling and the Event Loop:

* JavaScript would not coordinate when queued asynchronous callbacks should execute.
* `setTimeout()` callbacks would remain waiting in their queue.
* Promise callbacks would not get their scheduled opportunity to execute.

Conceptually:

```text
Async Work Completes
       ↓
Callback Ready
       ↓
Queue
       ↓
Event Loop
       ↓
JavaScript Executes Callback
```

---

# Why Does Promise Execute Before `setTimeout()`?

Promise callbacks execute before `setTimeout()` callbacks because Promise reactions are placed in the **Microtask Queue**, while timer callbacks are placed in the **Task Queue**.

Pending microtasks are processed before the next regular task.

```text
Promise
   ↓
Microtask Queue
   ↓
Higher Priority


setTimeout()
   ↓
Task Queue
   ↓
Runs after pending microtasks
```

---

## Example

```js
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

```text
Start
End
Promise
Timeout
```

### Execution Flow

```text
console.log("Start")
        ↓
      Start

setTimeout()
        ↓
Timer handled by runtime
        ↓
Callback → Task Queue

Promise.resolve().then()
        ↓
Callback → Microtask Queue

console.log("End")
        ↓
       End

Current synchronous JS finishes
        ↓
Process Microtask Queue
        ↓
     Promise
        ↓
Process Next Task
        ↓
     Timeout
```

---

# Complete JavaScript Async Flow

```text
                    JavaScript Code
                         │
                         ▼
                     Call Stack
                         │
            ┌────────────┴────────────┐
            │                         │
            ▼                         ▼
    Synchronous Code              Async APIs
                              (fetch, setTimeout)
                                      │
                                      ▼
                           Browser / Node Runtime
                                      │
                       ┌──────────────┴──────────────┐
                       │                             │
                 Promise Settled                Timer Finished
                       │                             │
                       ▼                             ▼
                Microtask Queue                 Task Queue
                       │                             │
                       └──────────────┬──────────────┘
                                      ▼
                                  Event Loop
                                      │
                           Current JS Finished?
                                      │
                                  Yes ▼
                       Execute ALL Microtasks First
                                      │
                                      ▼
                           Execute ONE Task Next
                                      │
                                      ▼
                       Create Function Execution Context
                                      │
                                      ▼
                              Execute Callback
```

---

# Is `fetch()` Part of JavaScript?

**NO.**

`fetch()` is not part of the core JavaScript language.

It is provided by the runtime environment.

In browsers:

```text
fetch()
   ↓
Browser API
```

Modern Node.js environments also provide `fetch()` as a runtime API.

JavaScript only calls it.

```text
JavaScript
    │
    │ calls
    ▼
fetch()
    │
    ▼
Runtime handles network operation
    │
    ▼
Promise returned
```

---

# What are Browser APIs?

> **Browser APIs are features provided by the browser that JavaScript can use to perform tasks that the language itself cannot perform on its own.**

Without Browser APIs, JavaScript would mainly have its core language capabilities such as:

* Variables
* Functions
* Loops
* Objects
* Arrays
* Classes
* Language-level Promise functionality
* Other ECMAScript features

Browser APIs provide access to browser/environment capabilities.

---

## Common Browser APIs

| Browser API             | Purpose                 |
| ----------------------- | ----------------------- |
| `fetch()`               | Make HTTP requests      |
| `setTimeout()`          | Run code after a delay  |
| `setInterval()`         | Run code repeatedly     |
| DOM API                 | Access and modify HTML  |
| `localStorage`          | Store data in browser   |
| `navigator.geolocation` | Get user location       |
| `WebSocket`             | Real-time communication |

---

# How Are Timers Implemented?

Timers are implemented by the browser or Node.js runtime.

For example:

```js
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

When JavaScript calls `setTimeout()`:

```text
setTimeout()
     │
     ▼
Runtime registers timer
     │
     ▼
JavaScript continues
     │
     ▼
Timer expires
     │
     ▼
Callback added to Task Queue
     │
     ▼
Current JavaScript finishes
     │
     ▼
Pending Microtasks processed
     │
     ▼
Event Loop selects next task
     │
     ▼
Callback Executes
```

---

# Important: Timer Delay Does Not Mean Exact Execution Time

Consider:

```js
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

`1000ms` means the callback becomes eligible after the timer delay.

It does **not** guarantee:

```text
Exactly 1000ms → callback executes
```

The callback may have to wait because:

```text
Timer Expires
     ↓
Callback Ready
     ↓
Task Queue
     ↓
Current JS still running?
     ↓
Wait
     ↓
Microtasks pending?
     ↓
Process them
     ↓
Next Task
     ↓
Timer callback executes
```

---

# Promise + Event Loop + Runtime Connection

This is the complete connection you should understand for interviews:

```text
                 JavaScript
                     │
                     ▼
                 Call Stack
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
   Synchronous Code       Async Runtime API
                                │
                     ┌──────────┴──────────┐
                     │                     │
                     ▼                     ▼
                   fetch()             setTimeout()
                     │                     │
                     ▼                     ▼
              Network Request            Timer
                     │                     │
                     ▼                     ▼
              Promise Settles        Timer Completes
                     │                     │
                     ▼                     ▼
              Microtask Queue          Task Queue
                     │                     │
                     └──────────┬──────────┘
                                │
                                ▼
                           Event Loop
                                │
                                ▼
                     Microtasks Before
                        Next Task
                                │
                                ▼
                          Call Stack
                                │
                                ▼
                       Callback Executes
```

---

# Quick Interview Revision

| Concept             | Simple Definition                                            |
| ------------------- | ------------------------------------------------------------ |
| **Promise**         | Object representing the future result of an async operation  |
| **Pending**         | Operation is still in progress                               |
| **Fulfilled**       | Operation completed successfully                             |
| **Rejected**        | Operation failed                                             |
| **Settled**         | Promise is fulfilled or rejected                             |
| **`resolve()`**     | Fulfills a Promise                                           |
| **`reject()`**      | Rejects a Promise                                            |
| **`.then()`**       | Handles fulfilled Promise/result                             |
| **`.catch()`**      | Handles rejected Promise/error                               |
| **`.finally()`**    | Runs after Promise settles                                   |
| **`async/await`**   | Cleaner syntax for working with Promises                     |
| **`fetch()`**       | Runtime API for HTTP/network requests that returns a Promise |
| **Microtask Queue** | Holds Promise reactions and other microtasks                 |
| **Task Queue**      | Holds tasks such as timer callbacks                          |
| **Event Loop**      | Coordinates when queued work executes                        |
| **Browser APIs**    | Browser-provided capabilities available to JavaScript        |
| **Timer**           | Runtime-managed delayed scheduling mechanism                 |

---

# Most Important Interview Flow

```text
fetch()
   ↓
Returns Promise
   ↓
Promise Pending
   ↓
Network Request
   ↓
JavaScript Continues
   ↓
Response Arrives
   ↓
Promise Settles
   ↓
.then() / .catch()
   ↓
Microtask Queue
   ↓
Current JS Finishes
   ↓
Microtask Executes
   ↓
Function Execution Context
   ↓
Callback Executes
```

---

# Final One-Line Memory Tricks

### Promise

**Promise = Future result of an asynchronous operation.**

### Promise States

**Pending → Fulfilled OR Rejected**

### Promise Handling

**`.then()` → Success | `.catch()` → Error | `.finally()` → Always after settlement**

### Promise vs Timer

**Promise reaction → Microtask Queue → Before next Task**

**`setTimeout()` → Task Queue → After pending Microtasks**

### `fetch()`

**`fetch()` → Runtime API → Returns Promise → Network request → Promise settles → Microtask**

### Event Loop

**Current JS finishes → Process Microtasks → Execute next Task.**

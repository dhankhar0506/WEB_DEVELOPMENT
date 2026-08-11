# Callbacks

-> A callback is a function passed as an argument to another function that is executed after a task is completed.

---

# Callback Hell

Callback Hell occurs when multiple callbacks are nested inside each other, making the code difficult to read and maintain.

### Problems

* Difficult to read
* Difficult to debug
* Difficult to maintain

---

# Promises

-> A Promise is an object that represents the eventual success or failure of an asynchronous operation.

---

# Async / Await

-> Async/Await is syntactic sugar over Promises that makes asynchronous code look like synchronous code.

-> `await` pauses only the current async function, not the entire Node.js application.

---

# Error-First Callback Pattern

-> A Node.js convention where the first callback parameter is always the error (`err`) and the second parameter is the successful result (`data`).

```js
fs.readFile("data.txt", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(data.toString());
});
```

---

# Working of Promises

-> When `fetch()` is called, the Browser API starts the network request and immediately returns a Promise in the **Pending** state.

-> JavaScript continues executing other code.

-> When the request completes, the Browser API resolves or rejects the Promise.

-> At that point, the Promise's `.then()` or `.catch()` callback is placed into the **Microtask Queue**.

-> Once the Call Stack is empty, the Event Loop moves the microtask callback to the Call Stack, where it executes.

### Promise Flow

```text
fetch() is called
        │
        ▼
   JavaScript
        │
        ▼
   Browser API
        │
        ├── Browser starts the HTTP request.
        │
        └── fetch() immediately returns a Promise.
                    │
                    ▼
              Promise State
                    │
                    ▼
                 Pending
```

### Server Sends Response

```text
Server sends response
        │
        ▼
Browser receives the data
        │
        ▼
Promise changes
        │
Pending
        │
        ▼
Fulfilled ✅
        │
        ▼
.then() callback
        │
        ▼
Microtask Queue
```

### Event Loop Executes the Callback

```text
Call Stack becomes empty
        │
        ▼
Event Loop checks:
Call Stack Empty?
        │
       Yes
        │
        ▼
Move .then() callback
to Call Stack
        │
        ▼
Execute callback
```

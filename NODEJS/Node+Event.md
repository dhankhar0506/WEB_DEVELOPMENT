# What is Node.js? (Definition)

-> Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 JavaScript Engine that allows JavaScript to run outside the browser, mainly on the server.

* Node.js is an open-source, cross-platform JavaScript runtime built on Google's V8 engine that allows JavaScript to run on the server.
* It uses a single-threaded, event-driven, non-blocking I/O architecture, making it fast and efficient for handling many concurrent requests.
* It is widely used for REST APIs, real-time applications, streaming services, and microservices.
* However, it is not ideal for CPU-intensive tasks like video rendering or complex scientific computations because those can block the event loop.

---

# Features of Node.js

> **Asynchronous**

Asynchronous means Node.js does not wait for a task to finish before executing the next line of code.

Instead, it starts the task, continues executing other code, and handles the result later.

> **Non-Blocking I/O**

Non-Blocking I/O means Node.js does not block the main thread while waiting for Input/Output operations like file reading, database queries, or API requests.

```text
Read File
(wait...)

Read File
    ↓
Continue Other Work
    ↓
Notify when done
```

> **Single Threaded**

Node.js uses one main thread.

* Node.js executes JavaScript using one main thread.
* Only one JavaScript statement executes at a time on that thread.
* Instead of creating hundreds of threads, it uses:

  * Event Loop
  * Callback Queue
  * Worker Threads (internally for some tasks)

> **Fast Execution**

Uses Google's V8 Engine.

* V8 converts JavaScript into machine code.

> **Huge Package Ecosystem**

> **Streaming Support**

Reads data in chunks.

---

# Where NOT to Use Node.js (Interview Notes)

-> Node.js is excellent for I/O-intensive applications (APIs, chat, streaming), but it is not the best choice for CPU-intensive tasks because JavaScript runs on a single main thread. A long CPU-bound task can block the Event Loop and delay other requests.

| ✅ Use Node.js           | ❌ Avoid Node.js                  |
| ----------------------- | -------------------------------- |
| REST APIs               | Heavy CPU calculations           |
| Chat Applications       | Video rendering                  |
| Real-Time Notifications | Large image processing pipelines |
| Streaming Services      | Machine Learning training        |
| Microservices           | Scientific simulations           |
| WebSockets              | Large-scale data analytics       |
| CRUD Applications       | CPU-bound parallel computation   |

---

# What are Events?

-> An event is a signal that something has happened in the application.

* User registered
* Payment successful
* Order placed
* File uploaded
* Email sent
* Data received

---

# How Node.js Handles Events?

=> Express internally uses Node.js EventEmitter for HTTP request events.

* Developers normally don't call `emit()` or `on()` for incoming requests.
* We mainly use EventEmitter to create our own custom backend events, such as:

  * `userRegistered`
  * `orderPlaced`
  * `paymentSuccess`

These events can trigger multiple backend tasks after one business action, such as:

* Email
* Logging
* Notifications
* Analytics

---

# Event-Driven

-> Event-Driven means the application waits for events to happen, and when an event occurs, it executes the associated callback function.

-> An event is not an async task. Often, an event starts an async task, and when the async task finishes, it generates another event.

## Login Flow (Browser + Node.js)

### User enters:

```text
Username: Gourav
Password: 123456
        ↓
Clicks Login Button
```

### Browser Registers Event

```text
Click Event
    ↓
Callback = loginUser()
```

### Step 3: Callback Sends Request

```text
Browser
    ↓
POST /login
    ↓
Node.js Server
```

-> Now Node.js receives request.

-> Node.js reads Request.

### Database Query (Async Task)

-> Database Query is **NOT an event**.

-> It is an **Asynchronous Task**.

```text
Node.js
    ↓
Database Query
    ↓
Check Password
    ↓
Database Responds
    ↓
Authorized? → YES / NO
    ↓
Browser Receives Response
    ↓
Browser Shows Popup
```

---

# EventEmitter

-> EventEmitter is a class provided by Node.js's built-in `events` module that allows us to create, emit, and listen for events.

* EventEmitter is a class provided by Node.js.
* It is the object responsible for managing events.

> Think of it as a notification system.

```js
const emitter = new EventEmitter();
```

It is used for:

* Creating events
* Listening to events
* Triggering events

---

## User Object

```js
const user = {
    id: 101,
    name: "Gourav",
    email: "gourav@example.com"
};
```

---

## Register a Listener Using `.on()`

```js
emitter.on("userRegistered", (user) => {
    console.log(user.email);
});
```

---

## Trigger the Event

We can send data when emitting:

```js
emitter.emit("userRegistered", user);
```

---

## `.once()`

* Registers a listener that runs only one time.

---

## `.off()`

* Removes a listener.

---

## `.eventNames()`

* Returns all registered event names.

---

## Callback Function

* Runs when the event occurs.

---

# EventEmitter Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listener
emitter.on("orderPlaced", (order) => {
    console.log("Send email for order:", order.id);
});

// Some condition/action
const order = {
    id: 101,
    payment: true
};

if (order.payment) {
    emitter.emit("orderPlaced", order);
}
```

---

# Built-in Events (Provided by Node.js)

## HTTP Request

-> Triggered when a client sends a request to the server.

**Used for:**

* Login
* Register
* Fetch Data
* File Upload
* REST APIs

---

## TCP Connection

TCP (Transmission Control Protocol) is a protocol that creates a reliable connection between two computers before data is exchanged.

**Used for:**

* Chat applications
* Real-time/network communication

---

## Stream Data

-> Triggered when a chunk of data is available while reading a stream.

---

## Stream End

-> Triggered when all data has been read from a readable stream.

---

## Stream Error

-> Triggered when an error occurs during stream operations.

---

## Process Exit

-> Triggered when the Node.js application is about to terminate.

> "Application under execution is called process."

```text
Application Closing
        │
        ├── Close Database Connection
        ├── Close Redis Connection
        ├── Stop Background Jobs
        ├── Flush Logs
        ├── Delete Temporary Files
        ├── Clear Cache
        └── Release Resources
```

---

# Custom Events (Created by You)

-> A custom event is simply an event that we as developers define ourselves based on our application's needs.

Examples:

```text
userRegistered
userLoggedIn
forgotPassword
paymentSuccess
orderPlaced
courseCompleted
```

---

# Limitations of Node.js

-> **Not Good for CPU-Intensive Tasks**

Heavy calculations block the event loop.

-> **Single Thread Limitation**

One blocked task can delay others if it runs on the main thread.

---

# How Async Works

-> When JavaScript encounters an asynchronous operation (like `setTimeout`, file I/O, or an HTTP request), it hands that operation to the Browser APIs or Node.js APIs.

The JavaScript call stack becomes free to continue executing other code while the asynchronous work happens in the background.

## Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");
```

### Execution Flow

-> The Call Stack starts executing.

-> Now it reaches:

```js
setTimeout(...)
```

* `setTimeout` is not part of JavaScript.
* It is provided by Node.js APIs (or Browser APIs in the browser).
* Node.js registers the timer and immediately frees the call stack.
* The main thread does not wait for 2 seconds.

-> The Call Stack continues.

### Output

```text
Start
End
```

-> The Node.js Timer API keeps counting 2 seconds.

-> When the timer finishes, its callback is placed into the Callback Queue (Task Queue).

-> The Event Loop is always checking:

```text
Is Call Stack Empty?
```

-> If **Yes** → Move callback to Call Stack.

---

# What is Node.js? (Definition)

-> Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 JavaScript Engine that allows JavaScript to run outside the browser, mainly on the server.

* Node.js is an open-source, cross-platform JavaScript runtime built on Google's V8 engine that allows JavaScript to run on the server.
* It uses a single-threaded, event-driven, non-blocking I/O architecture, making it fast and efficient for handling many concurrent requests.
* It is widely used for REST APIs, real-time applications, streaming services, and microservices.
* However, it is not ideal for CPU-intensive tasks like video rendering or complex scientific computations because those can block the event loop.

---

# Features of Node.js

> **Asynchronous**

Asynchronous means Node.js does not wait for a task to finish before executing the next line of code.

-> Instead, it starts the task, continues executing other code, and handles the result later.

> **Non-Blocking I/O**

Non-Blocking I/O means Node.js does not block the main thread while waiting for Input/Output operations like file reading, database queries, or API requests.

```text
Read File
(wait...)

Read File
    ↓
Continue Other Work
    ↓
Notify when done
```

> **Single Threaded**

Node.js uses one main thread.

* Node.js executes JavaScript using one main thread.
* Only one JavaScript statement executes at a time on that thread.
* Instead of creating hundreds of threads, it uses:

  * Event Loop
  * Callback Queue
  * Worker Threads (internally for some tasks)

> **Fast Execution**

Uses Google's V8 Engine.

```text
V8 converts JavaScript into machine code.
```

> **Huge Package Ecosystem**

> **Streaming Support**

Reads data in chunks.

---

# Where NOT to Use Node.js (Interview Notes)

-> Node.js is excellent for I/O-intensive applications (APIs, chat, streaming), but it is not the best choice for CPU-intensive tasks because JavaScript runs on a single main thread. A long CPU-bound task can block the Event Loop and delay other requests.

## Use Cases

| ✅ Use Node.js           | ❌ Avoid Node.js                  |
| ----------------------- | -------------------------------- |
| REST APIs               | Heavy CPU calculations           |
| Chat Applications       | Video rendering                  |
| Real-Time Notifications | Large image processing pipelines |
| Streaming Services      | Machine Learning training        |
| Microservices           | Scientific simulations           |
| WebSockets              | Large-scale data analytics       |
| CRUD Applications       | CPU-bound parallel computation   |

---

# What are Events?

-> An event is a signal that something has happened in the application.

```text
User registered
Payment successful
Order placed
File uploaded
Email sent
Data received
```

---

# How Node.js Handles Events?

=> Express internally uses Node.js EventEmitter for HTTP request events.

* Developers normally don't call `emit()` or `on()` for incoming requests.
* We mainly use EventEmitter to create our own custom backend events, such as:

  * `userRegistered`
  * `orderPlaced`
  * `paymentSuccess`

where multiple backend tasks (email, logging, notifications, analytics, etc.) need to be triggered after one business action.

---

# Event-Driven

-> Event-Driven means the application waits for events to happen, and when an event occurs, it executes the associated callback function.

-> An event is not a async task. Often, an event starts an async task, and when the async task finishes, it generates another event.

## Login Flow (Browser + Node.js)

### User enters:

```text
Username: Gourav
Password: 123456
        ↓
Clicks Login Button
```

### Browser Registers Event

```text
Click Event
    ↓
Callback = loginUser()
```

### Step 3: Callback Sends Request

```text
Browser
    ↓
POST /login
    ↓
Node.js Server
```

-> Now Node.js Receives Request.

-> Node.js reads Request.

### Database Query (Async Task)

-> Database Query is **NOT an event**.

-> It is an **Asynchronous Task**.

```text
Database Query
    ↓
Check Password
    ↓
Database Responds
    ↓
Authorized? → YES/NO
    ↓
Browser Receives Response
    ↓
Browser Shows Popup
```

---

# EventEmitter

-> EventEmitter is a class provided by Node.js's built-in `events` module that allows us to create, emit, and listen for events.

* EventEmitter is a class provided by Node.js.
* The object responsible for managing events.

> Think of it as a notification system.

```js
const emitter = new EventEmitter();
```

-> Creating events
-> Listening to events
-> Triggering events

---

## User Object

```js
const user = {
    id: 101,
    name: "Gourav",
    email: "gourav@example.com"
};
```

---

## Register a Listener Using `.on()`

```js
emitter.on("userRegistered", (user) => {
    console.log(user.email);
});
```

---

## Trigger the Event

-> We can send this data when emitting:

```js
emitter.emit("userRegistered", user);
```

---

## `.once()`

-> Registers a listener that runs only one time.

---

## `.off()`

-> Removes a listener.

---

## `.eventNames()`

-> Returns all registered event names.

---

## Callback Function

-> Runs when the event occurs.

---

# Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listener
emitter.on("orderPlaced", (order) => {
    console.log("Send email for order:", order.id);
});

// Some condition/action
const order = {
    id: 101,
    payment: true
};

if (order.payment) {
    emitter.emit("orderPlaced", order);
}
```

---

# Built-in Events (Provided by Node.js)

### HTTP Request

-> Triggered when a client sends a request to the server.

**Used for:**

* Login
* Register
* Fetch Data
* File Upload
* REST APIs

### TCP Connection

TCP (Transmission Control Protocol) is a protocol that creates a reliable connection between two computers before data is exchanged.

**Used for:**

* Chat applications
* Real-time/network communication

### Stream Data

-> Triggered when a chunk of data is available while reading a stream.

### Stream End

-> Triggered when all data has been read from a readable stream.

### Stream Error

-> Triggered when an error occurs during stream operations.

### Process Exit

-> Triggered when the Node.js application is about to terminate.

-> "Application under execution is called process."

```text
Application Closing
        │
        ├── Close Database Connection
        ├── Close Redis Connection
        ├── Stop Background Jobs
        ├── Flush Logs
        ├── Delete Temporary Files
        ├── Clear Cache
        └── Release Resources
```

---

# Custom Events (Created by You)

-> A custom event is simply an event that we as developers define ourselves based on our application's needs.

Examples:

```text
userRegistered
userLoggedIn
forgotPassword
paymentSuccess
orderPlaced
courseCompleted
```

---

# Limitations of Node.js

-> Not Good for CPU-Intensive Tasks => Heavy calculations block the event loop.

-> Single Thread Limitation => One blocked task can delay others if it runs on the main thread.

---

# HOW ASYNC WORKS

-> When JavaScript encounters an asynchronous operation (like `setTimeout`, file I/O, or an HTTP request), it hands that operation to the Browser APIs or Node.js APIs.

The JavaScript call stack becomes free to continue executing other code while the asynchronous work happens in the background.

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");
```

-> The Call Stack starts executing.

-> Now it reaches:

```js
setTimeout(...)
```

* `setTimeout` is not part of JavaScript.
* It is provided by Node.js APIs (or Browser APIs in the browser).
* Node.js registers the timer and immediately frees the call stack.
* The main thread does not wait for 2 seconds.

-> The Call Stack continues.

### Output

```text
Start
End
```

-> The Node.js Timer API keeps counting 2 seconds.

-> When the timer finishes, its callback is placed into the Callback Queue (Task Queue).

-> The Event Loop is always checking:

```text
Is Call Stack Empty?
```

-> If Yes → Move callback to Call Stack.

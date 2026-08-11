# Child Process in Node.js

## Why Child Process?

> Node.js has one main JavaScript thread.

Suppose a user requests:

* Generate PDF
* This task takes 20 seconds.

```text
     User 1
        ↓
    Generate PDF (20 sec)
        ↓
    Main Thread Busy ❌
        ↓
    User 2 also waits ❌
```

### Solution

> "I won't do this on my main thread."

```text
            Main Process
                 ↓
         Create Child Process
                 ↓
         Child Generates PDF
                 ↓
     Main Process Serves Other Users
```

---

## When Do We Use Child Processes?

Child processes are useful for running heavy or external tasks separately from the main Node.js process.

* Generate Large PDF
* Video Conversion (FFmpeg)
* Run Python Script
* Image Processing

---

# Child Process Methods

## 1. `spawn()`

> Starts another process and gives the output little by little (stream).

```js
const { spawn } = require("child_process");
```

Useful when the process produces a large or continuous amount of output.

---

## 2. `exec()`

> Runs a command and waits until it finishes, then returns all the output at once.

```js
const { exec } = require("child_process");
```

Useful when the command produces a relatively small amount of output.

---

## 3. `fork()`

> Creates another Node.js process to run another JavaScript file.

```js
const { fork } = require("child_process");
```

`fork()` is specifically designed for creating another **Node.js process**.

---

# Difference Between `libuv` and Child Process

| Task                    | libuv | Child Process |
| ----------------------- | :---: | :-----------: |
| Read file               |   ✅   |       ❌       |
| Write file              |   ✅   |       ❌       |
| Database query          |   ✅   |       ❌       |
| HTTP request            |   ✅   |       ❌       |
| Generate PDF            |   ❌   |       ✅       |
| Run Python AI model     |   ❌   |       ✅       |
| FFmpeg video conversion |   ❌   |       ✅       |
| Image compression       |   ❌   |       ✅       |

---

## Interview Point

> **libuv** handles asynchronous I/O operations for Node.js, while **Child Processes** are used when we need to run another process separately, especially for external programs or CPU/heavy tasks.

# Child Process

## What is a Child Process?

-> A **Child Process** is a separate OS process created by a parent process. It has its own memory space and is independently managed by the operating system.

-> Use a **child process** when you need to run another program, command, or separate process independently from your main Node.js application.

## Is `child_process` Built into Node.js?

**YES.**

Node.js provides the built-in **`child_process` module** to create and manage child processes.

## Examples

* **FFmpeg** → Video compression
* **Python program** → ML processing
* **Shell command** → System operation
* **Another Node.js application** → Run independently

---

# How is a Child Process Created?

Node.js provides the built-in `child_process` module.

### Example using `fork()`

```js
const { fork } = require("child_process");

const child = fork("./worker.js");

child.send({
    task: "calculate",
    number: 100000000
});

child.on("message", (result) => {
    console.log("Result from child:", result);
});
```

### Flow

```text
Main Application
        ↓
┌──────────────────┐
│   Main Process   │
│   API / Server   │
└──────────────────┘
        │
        │ IPC
        ↓
┌──────────────────┐
│  Child Process   │
│                  │
│   Compression    │
└──────────────────┘
```

---

# What is `fork()`?

-> `fork()` creates a **new Node.js child process** and automatically provides an **IPC (Inter-Process Communication)** channel between the parent and child process.

### Simple Meaning

```text
Parent Node.js Process
        ↓
      fork()
        ↓
New Node.js Child Process
        ↓
     IPC Communication
```

---

# What is `spawn()`?

-> `spawn()` starts a **new process** to run an external program or executable.

### Example

```text
Node.js Application
        ↓
     spawn()
        ↓
      FFmpeg
        ↓
 Video Compression
```

Use `spawn()` when you want to run an external program and handle its input/output streams.

---

# What is `exec()`?

-> `exec()` executes a **command through a shell** and provides the command's output to your Node.js application.

### Example

```text
Node.js Application
        ↓
      exec()
        ↓
   Shell Command
        ↓
     Output
        ↓
Node.js Application
```

### Simple Difference

* `fork()` → Runs another **Node.js file** + provides IPC.
* `spawn()` → Runs an **external program/executable**.
* `exec()` → Runs a **shell command** and gives its output to Node.js.

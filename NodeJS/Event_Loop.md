# What is Event Loop?

The Event Loop continuously checks different phases for completed asynchronous tasks and moves their callbacks to the Call Stack when JavaScript is free to execute them.

### Remember:

* ✅ JavaScript runs on one main thread.
* ✅ Async tasks are handled by the Operating System or libuv.
* ✅ The Event Loop decides when callbacks can execute.

---

# Event Loop Phases

```text
Event Loop

1. Timers
   Runs callbacks of:
   setTimeout()
   setInterval()
       ↓

2. Pending Callbacks
       ↓

3. Idle / Prepare
   An internal phase used by libuv
   to prepare for the next phase.
       ↓

4. Poll ⭐
   Handles completed I/O operations like:
   File read
   Database response
   HTTP request
   Network events
       ↓

5. Check
       ↓

6. Close Callbacks
   Runs callbacks when resources like
   sockets or streams are closed.

Repeat...
```

> Each Event Loop phase has its own queue of callbacks, and each phase is responsible for a different type of asynchronous operation.

---

# Event Loop

```text
        Event Loop
```

```text
┌────────────────────────────────────┐
│ Timers Phase                       │
│ Queue: setTimeout(), setInterval() │
└────────────────────────────────────┘
                ↓
┌────────────────────────────────────┐
│ Pending Callbacks                  │
│ Queue: Some system callbacks       │
└────────────────────────────────────┘
                ↓
┌────────────────────────────────────┐
│ Idle / Prepare                     │
│ Internal libuv work                │
└────────────────────────────────────┘
                ↓
┌────────────────────────────────────┐
│ Poll Phase                         │
│ Queue: File, Network, DB I/O       │
└────────────────────────────────────┘
                ↓
┌────────────────────────────────────┐
│ Check Phase                        │
│ Queue: setImmediate()              │
└────────────────────────────────────┘
                ↓
┌────────────────────────────────────┐
│ Close Callbacks                    │
│ Queue: socket.on('close')          │
└────────────────────────────────────┘
```

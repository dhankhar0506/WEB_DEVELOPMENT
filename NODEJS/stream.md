# Node.js Streams

-> A **stream** is a way to process data piece-by-piece (**chunks**) instead of loading the entire data into memory at once.

```text
5 GB File
   ↓
 Chunk
   ↓
 Process
   ↓
Next Chunk
   ↓
 Process
   ↓
   ...
```

---

# Readable Stream

-> A **Readable stream** is a stream from which we read/receive data.

-> Node reads the file in chunks.

---

# Writable Stream

-> A **Writable stream** is a stream where we send/write data.

---

# Duplex Stream

-> A **Duplex stream** is a stream that supports both reading and writing.

```text
Duplex Stream
│
├── Read data  ← incoming data
│
└── Write data → outgoing data
```

### Example: Chat Connection

```text
Client                  Server
  │                        │
  │ "Hello" ─────────────→ │  Server READS
  │                        │
  │ ←───────────── "Hi"    │  Server WRITES
```

---

# Transform Stream

-> A **Transform stream** is a special type of Duplex stream.

-> It receives data, changes/transforms it, and outputs new data.

---

# What is Backpressure?

-> **Backpressure** occurs when a writable/consumer side cannot process data as quickly as the readable/producer side provides it.

---

# Types of Streams — Quick Revision

1. **Stream** → Processes data chunk by chunk instead of loading the entire data into memory.

2. **Readable Stream** → Used when we read/receive data in chunks.
   Example: reading a large file.

3. **Writable Stream** → Used when we write/send data in chunks.
   Example: writing a large file.

4. **Duplex Stream** → Supports both reading and writing in chunks. The readable and writable data can be different.
   Example: TCP socket.

5. **Transform Stream** → Receives chunks → processes/transforms them → outputs transformed chunks.
   Example: compression or encryption.

---

# Creating Streams

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("large.txt");

const writeStream = fs.createWriteStream("output.txt");
```

---

# ReadStream Methods / Events

## `"data"` Event

-> `"data"` event is called whenever a chunk becomes available.

```javascript
readStream.on("data", (chunk) => {
    console.log(chunk);
});
```

---

## `"end"` Event

-> `"end"` event is triggered when there is no more data to read.

```javascript
readStream.on("end", () => {
    console.log("Reading completed");
});
```

---

## `"error"` Event

-> `"error"` event is triggered if something goes wrong.

```javascript
readStream.on("error", (err) => {
    console.log(err);
});
```

---

## `pause()` and `resume()`

-> You can temporarily stop and restart a readable stream.

```javascript
readStream.pause();

readStream.resume();
```

---

# Writable Stream

```text
Writable Stream is used to write/send data in chunks to a destination.
```

## `write()`

```javascript
writeStream.write("Hello ");

writeStream.write("Gourav");
```

---

## `.end()` — Stop Writing

```javascript
writeStream.end();
```

---

## `.destroy()` — Terminate Stream

```javascript
writeStream.destroy();
```

---

## `"finish"` Event

```javascript
writeStream.on("finish", () => {
    console.log("Writing completed");
});
```

-> Emitted when you've called `.end()` and all data has been passed through the writable stream.

---

## `"error"` Event

```javascript
writeStream.on("error", (err) => {
    console.log(err);
});
```

---

## `"close"` Event

```javascript
writeStream.on("close", () => {
    console.log("Stream closed");
});
```

---

# `pipe()`

-> `pipe()` connects a **Readable Stream** to a **Writable Stream**.

-> `pipe()` automatically coordinates **backpressure**.

```javascript
readStream.pipe(writeStream);
```

### Example

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("large.mp4");

const writeStream = fs.createWriteStream("copy.mp4");

readStream.pipe(writeStream);
```

### Flow

```text
large.mp4
    ↓
Read chunk
    ↓
Write chunk
    ↓
Read chunk
    ↓
Write chunk
    ↓
...
    ↓
copy.mp4
```

---

# `.unpipe()`

-> `unpipe()` disconnects a previously connected stream.

---

# `pipeline()`

-> It works, but when you have multiple connected streams, error handling and cleanup become more complicated.

-> `pipeline()` connects a whole chain and provides better centralized error handling and cleanup.

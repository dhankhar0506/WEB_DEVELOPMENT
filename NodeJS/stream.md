## Node.js Streams
-> A stream is a way to process data piece-by-piece (chunks) instead of loading the entire data into memory at once.
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

## Readable Stream
-> A Readable stream is a stream from which we read/receive data.
    ->Node reads the file in chunks.

## Writable Stream
-> A Writable stream is a stream where we send/write data.

## Duplex Stream
->  a stream that supports both reading and writing.
    Duplex Stream
        │
        ├── Read data  ← incoming data
        │
        └── Write data → outgoing data
    
    -> Imagine a chat connection:
        Client                  Server
        │                        │
        │ "Hello" ─────────────→ │  Server READS
        │                        │
        │ ←───────────── "Hi"    │  Server WRITES

## Transform Stream
A Transform stream is a special type of Duplex stream.
-> It receives data, changes/transforms it, and outputs new data

## What is Backpressure?
Backpressure occurs when a writable/consumer side cannot process data as quickly as the readable/producer side provides it.

1. Stream → Processes data chunk by chunk instead of loading the entire data into memory.
2. Readable Stream → Used when we read/receive data in chunks. Example: reading a large file.
3. Writable Stream → Used when we write/send data in chunks. Example: writing a large file.
4. Duplex Stream → Supports both reading and writing in chunks. The readable and writable data can be different. Example: TCP socket.
5. Transform Stream → Receives chunks → processes/transforms them → outputs transformed chunks. Example: compression or encryption.

## Creating streams
- const fs = require("fs");
- const readStream = fs.createReadStream("large.txt");
- const writeStream = fs.createWriteStream("output.txt");

# ReadStream methods
-> "data" event Called whenever a chunk becomes available.
    readStream.on("data", (chunk) => {
        console.log(chunk);
    });

-> "end" event : Triggered when there is no more data to read.
    readStream.on("end", () => {
        console.log("Reading completed");
    })

-> "error" event => Triggered if something goes wrong.
    readStream.on("error", (err) => {
        console.log(err);
    });

-> pause() and .resume() => You can temporarily stop and restart a readable stream.
    readStream.pause();
    readStream.resume();

## Writable Stream =>
    Writable Stream is used to write/send data in chunks to a destination.
-> writeStream.write("Hello ");
-> writeStream.write("Gourav");

-> .end() — stop writing => writeStream.end();

-> .destroy() — terminate stream => writeStream.destroy();

    - writeStream.on("finish", () => {
        console.log("Writing completed");
    });
    Emitted when you've called .end() and all data has been passed through the writable stream.

    - writeStream.on("error", (err) => {
        console.log(err);
    });

    - writeStream.on("close", () => {
        console.log("Stream closed");
    });

## pipe 
-> pipe() connects a Readable Stream to a Writable Stream.
-> pipe() automatically coordinates backpressure.
-> readStream.pipe(writeStream);
    const fs = require("fs");

    const readStream =  fs.createReadStream("large.mp4");
    const writeStream =fs.createWriteStream("copy.mp4");

    readStream.pipe(writeStream);
    
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

## .unpipe()
-> unpipe() disconnects a previously connected stream.

## pipeline()
-> It works, but when you have multiple connected streams, error handling and cleanup become more complicated.
-> pipeline() connects a whole chain and provides better centralized error handling and cleanup.
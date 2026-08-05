## What is Thread Pool?
-> A Thread Pool is a group of worker threads managed by libuv that executes certain asynchronous tasks in the background without blocking the main JavaScript thread.
Memory Trick:
    Main Thread = Boss 👨‍💼
    Thread Pool = Workers 👷👷👷👷

## Why is it called single-threaded?

Because: Only one thread executes JavaScript code (Call Stack + Event Loop).
-> The worker threads do not execute your JavaScript. They only perform background work.

## Default Thread Pool Size
-> 4

## UV_THREADPOOL_SIZE
-> We can increase the thread pool.
-> UV_THREADPOOL_SIZE=8 node server.js

## Tasks Handled by Thread Pool
1. File System
2. Crypto 
3. Compression (zlib)
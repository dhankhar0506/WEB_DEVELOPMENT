## Error Handling
-> Error handling is the process of detecting, managing, and responding to errors so that the application can continue running safely or fail gracefully.
-> try...catch is an error-handling mechanism that catches errors and prevents the application from crashing, allowing the program to handle the error gracefully and continue execution where appropriate.

## Types of Errors in Node.js / JavaScript
-> 
- SyntaxError → Invalid JavaScript syntax (e.g., missing bracket).
- ReferenceError → Using a variable that hasn’t been defined.
- TypeError → Passing a value of the wrong type (e.g., calling a number like a function).
- RangeError → Value not within expected range (e.g., invalid array length).

## try...catch 
-> try...catch is used to catch synchronous errors and errors thrown inside an async function after using await

## What is a synchronous error?
An error that occurs immediately during normal sequential execution. It can usually be caught using try...catch.

## What is an asynchronous error?
An error that occurs after an asynchronous operation completes, such as in a callback, timer, or I/O operation. It is handled using callback error parameters, Promise rejection handlers, or try...catch with async/await.


## "Can try...catch catch every error?"

-> No. try...catch catches synchronous errors and errors from awaited Promises inside an async function. It does not catch errors from asynchronous callback APIs like fs.readFile() unless those APIs report the error through their callback (or you convert them to Promises and await them).

## How to Handle Errors in Asynchronous Operations?
-> Async Operation
    │
    ├── Callback

    ├── Promise

    └── Async/Await

1. callback 
    const fs = require("fs");
    fs.readFile("abc.txt", (err, data) => {

        if (err) {
            console.log(err.message);
            return;
        }

        console.log(data.toString());

    });

2. Promise Error Handling
     fetchUsers()
        .then(users => {
            console.log(users);
        })
        .catch(err => {
            console.log(err.message);
        });
3. Async/Await Error Handling + Use try...catch.
    async function getUsers() {

        try {

            const users = await fetchUsers();

            console.log(users);

        } catch (err) {

            console.log(err.message);

        }

    }
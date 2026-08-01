# INTERVIEW QUESTIONS-2nd

## Hoisting
-> Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before the code executes.

[Declaration] → This is when JavaScript says: “Okay, I’ll reserve a spot in memory for this variable.”
[Initialization]  → This is when you actually give that variable a value.
       
        Example: 
            var a;          // Declaration hoisted
            console.log(a); // undefined
            a = 10;         // Initialization stays here

## Is let hoisted?
Yes. But it remains uninitialized until its declaration is executed, so accessing it beforehand throws a ReferenceError.

## Temporal Dead Zone (TDZ)
-> only let and const create TDZ
-> Temporal Dead Zone (TDZ) is the time between the variable's memory creation (during the Memory Creation Phase) and its initialization (when the declaration statement executes in the Execution Phase). During this period, if you try to access the variable, JavaScript throws a ReferenceError.'

## Scope
Scope determines where a variable can be accessed in your code.

## Types of Scope

1. Global Scope : A variable declared outside any function or block is in the Global Scope.
    Global variables are accessible almost everywhere.
            let company = "Google";
            function show() {
                console.log(company);
            }
            show();
            console.log(company);

2. Function Scope
Variables declared inside a function are only available inside that function.

3. Block Scope 
A variable declared inside {} can only be accessed inside that block.
example : if else for while switch

- Lexical Scope (very important for Closures)


function test() {

    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }

    console.log(x); // ✅ 10
    console.log(y); // ❌ ReferenceError
    console.log(z); // ❌ ReferenceError
}

test();

- VAR create only functional scope
- Because var ignores block scope and belongs to the entire function.
- because var and let create a block scope


## lexical scope 
Lexical Scope means JavaScript determines which variables a function can access based on where the function is declared (written) in the source code, not where it is called.
        let a = 10;

        function outer() {
            let b = 20;

            function inner() {
                console.log(a);
                console.log(b);
            }

            return inner;
        }

        const myFunc = outer();
        myFunc(); // it still access the a and b    

## "outer() has finished executing and is removed from the call stack. Then how can inner() still access b?"
Normally, when a function finishes, its execution context is removed from the call stack. However, if an inner function still references variables from the outer function, JavaScript keeps those variables alive in memory. This preserved memory is called a closure. 


## What is a Lexical Environment? 
A Lexical Environment is like a storage box for a scope. It stores all the variables/functions of that scope and also remembers its parent (outer) scope.

## What is Closure?
A Closure is created when an inner function remembers and can access the variables of its outer function even after the outer function has finished executing.

## Scope Chain.
-> The Scope Chain is JavaScript's process of searching for a variable from the current scope to its outer scopes until it reaches the global scope


## step 1
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }

    return inner;
}

const myFunc = outer();

myFunc();   


##  Execution Context
    Execution Context
    │
    ├── Lexical Environment
    ├── Variable Environment
    └── this'

## Call Stack
The Call Stack is a stack that keeps track of which Execution Context is currently running.

## step 4
A Lexical Environment stores the variables and functions of a scope and a reference to its outer Lexical Environment.

## 4. Scope Chain
Scope Chain is the process JavaScript uses to search for variables from the current scope to outer scopes.

## 5. Heap Memory
Heap Memory stores objects, arrays, and functions (reference values).

## closure
A Closure is a function together with the Lexical Environment in which it was created. It allows the function to access variables from its outer scope even after the outer function has finished executing.

## Garbage Collector
Garbage Collection is the process of automatically removing unused memory from a JavaScript program.
You cannot control it: JavaScript engines (like V8 in Chrome and Node.js) decide when to run the Garbage Collector.

## Diff between lexical and variable environment

| Lexical Environment      | Variable Environment                          |
| ------------------------ | --------------------------------------------- |
| Stores `let` and `const` | Stores `var`                                  |
| Supports block scope     | Function scope only                           |
| Supports TDZ             | No TDZ                                        |
| Used for Scope Chain     | Not responsible for Scope Chain               |
| Used by Closures         | Not directly used by Closures                 |
| Has outer reference      | Doesn't conceptually focus on outer reference |




## What is a Callback?
A callback is a function passed to another function and executed later, often after an asynchronous task completes.
    
    function greet(name, callback) {
        console.log("Hello " + name);
        callback();
    }

    function sayBye() {
        console.log("Bye");
    }

    greet("Gourav", sayBye);

## What is Callback Hell?
Callback Hell is the situation where multiple nested callbacks make code difficult to read, maintain, and debug.
        1. Login User
            ↓
        2. Get User Details
            ↓
        3. Check Cart
            ↓
        4. Make Payment
            ↓
        5. Send Email
        
        function login(callback) {
            setTimeout(() => {
                console.log("✅ Login Successful");
                callback();
            }, 1000);
        }

        function getUser(callback) {
            setTimeout(() => {
                console.log("✅ User Data Loaded");
                callback();
            }, 1000);
        }

        function getCart(callback) {
            setTimeout(() => {
                console.log("✅ Cart Loaded");
                callback();
            }, 1000);
        }

        function makePayment(callback) {
            setTimeout(() => {
                console.log("✅ Payment Successful");
                callback();
            }, 1000);
        }

        function sendEmail(callback) {
            setTimeout(() => {
                console.log("✅ Email Sent");
                callback();
            }, 1000);
        }

        login(() => {

            getUser(() => {

                getCart(() => {

                    makePayment(() => {

                        sendEmail(() => {

                            console.log("🎉 Order Completed");

                        });

                    });

                });

            });

        });


This is called Callback Hell or the Pyramid of Doom.

Problems:

❌ Hard to read
❌ Hard to debug
❌ Difficult error handling
❌ Deep nesting


##  What is a Promise?
A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation
          Promise

             │

   ┌─────────┼─────────┐

Pending   Fulfilled   Rejected

## Creating a Promise
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {

        resolve("Payment Successful");

    } else {

        reject("Payment Failed");

    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));
.finally(() => console.log("Finished")); // always runs
output => Payment Successful

resolve() → Success
reject() → Failure


## promise solution
login()
    .then(getUser)
    .then(getOrders)
    .then(makePayment)
    .then(() => {
        console.log("Done");
    })
    .catch(error => {
        console.log(error);
    });

## What is Async/Await?
Async/Await is a cleaner syntax for working with Promises. The async keyword makes a function return a Promise, and the await keyword pauses the execution of that async function until the Promise settles (fulfills or rejects). It makes asynchronous code easier to read and write without blocking the rest of JavaScript.

async function test() {

    try {

        const data = await getData();

        console.log(data);

    } catch (err) {

        console.log(err);

    }

}



##  comparison
| Feature           | Callback            | Promise                        |
| ----------------- | ------------------- | ------------------------------ |
| Readability       | ❌ Poor (nested)     | ✅ Better (chaining)            |
| Error Handling    | ❌ At every callback | ✅ Single `.catch()`            |
| Callback Hell     | ❌ Possible          | ✅ Avoided                      |
| Chaining          | ❌ Difficult         | ✅ Easy                         |
| States            | ❌ No                | ✅ Pending, Fulfilled, Rejected |
| Modern JavaScript | Less preferred      | Preferred                      |

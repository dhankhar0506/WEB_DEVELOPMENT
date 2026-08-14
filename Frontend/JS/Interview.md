# JavaScript Interview Questions — Part 2

---

# 1. What is Hoisting?

> **Hoisting is JavaScript's behavior where variable and function declarations are processed before the code executes.**

A common mental model is that declarations are "moved to the top of their scope," although JavaScript does not literally move the code.

## Declaration vs Initialization

### Declaration

This is when JavaScript says:

> "Okay, I'll reserve a spot in memory for this variable."

### Initialization

This is when the variable gets its initial value.

### Example

```js
var a;

console.log(a);

a = 10;
```

Conceptually:

```text
var a;          // Declaration processed/hoisted

console.log(a); // undefined

a = 10;         // Assignment stays here
```

So:

```text
Memory Creation Phase
        ↓
a → undefined

Code Execution Phase
        ↓
console.log(a)
        ↓
undefined
        ↓
a = 10
        ↓
a → 10
```

---

# 2. Is `let` Hoisted?

**Yes.**

But it remains **uninitialized** until its declaration is executed.

Therefore, accessing it beforehand throws:

```text
ReferenceError
```

Example:

```js
console.log(a);

let a = 10;
```

Conceptually:

```text
Memory Creation

a → <uninitialized>
      ↓
     TDZ

Code Execution

console.log(a)
      ↓
ReferenceError
```

---

# 3. Temporal Dead Zone — TDZ

> **Temporal Dead Zone (TDZ) is the period between entering the scope where a `let` or `const` binding exists and the point where its declaration initializes it. During this period, accessing the variable throws a `ReferenceError`.**

`let` and `const` have TDZ behavior.

```text
Scope Starts
     ↓
Binding Exists
     ↓
<uninitialized>
     ↓
┌─────────────────┐
│       TDZ       │
└─────────────────┘
     ↓
Declaration Executes
     ↓
Variable Initialized
     ↓
TDZ Ends
```

Example:

```js
console.log(a);

let a = 10;
```

Result:

```text
ReferenceError:
Cannot access 'a' before initialization
```

---

# 4. What is Scope?

> **Scope determines where a variable can be accessed in your code.**

In simple words:

```text
Scope = Where can I use this variable?
```

---

# 5. Types of Scope

Important types:

```text
Scope
 │
 ├── Global Scope
 │
 ├── Function Scope
 │
 ├── Block Scope
 │
 └── Lexical Scope
```

---

## 5.1 Global Scope

A variable declared outside any function or block is in the **Global Scope**.

Global variables can generally be accessed from inner scopes unless shadowed or otherwise restricted by the environment.

Example:

```js
let company = "Google";

function show() {
    console.log(company);
}

show();

console.log(company);
```

Output:

```text
Google
Google
```

Conceptually:

```text
Global Scope

company = "Google"
      │
      ▼
show()
      │
      ▼
Can access company
```

---

## 5.2 Function Scope

Variables declared with `var` inside a function belong to that function's scope.

Example:

```js
function test() {
    var age = 25;

    console.log(age);
}

test();
```

But:

```js
console.log(age);
```

outside the function cannot access that local variable.

---

## 5.3 Block Scope

A block is generally code inside:

```text
{ }
```

Examples include blocks associated with:

* `if`
* `else`
* `for`
* `while`
* `switch`
* Standalone `{}` blocks

`let` and `const` are **block-scoped**.

Example:

```js
if (true) {
    let a = 10;
    const b = 20;
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

---

# `var` vs `let` vs `const` Scope

Consider:

```js
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
```

Why?

Because:

```text
var
 ↓
Function Scoped
 ↓
Ignores ordinary block scope


let
 ↓
Block Scoped


const
 ↓
Block Scoped
```

Therefore:

> **`var` creates function scope, while `let` and `const` support block scope.**

`var` declared inside the `if` block still belongs to the entire `test()` function.

---

# 6. What is Lexical Scope?

> **Lexical Scope means JavaScript determines which variables a function can access based on where the function is declared/written in the source code, not where it is called.**

This is extremely important for understanding:

> **Closures**

Example:

```js
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

myFunc();
```

`inner()` was created inside:

```js
function outer() {
    // ...
}
```

Therefore it has access to the lexical environment where it was created.

```text
Global Scope

a = 10
   │
   ▼
outer()
   │
   ├── b = 20
   │
   ▼
inner()
   │
   ├── Can access b
   │
   └── Can access a
```

Even though:

```js
const myFunc = outer();

myFunc();
```

calls `inner()` later, it can still access:

```text
a
b
```

because scope depends on **where the function was defined**, not where it was called.

---

# 7. Important Closure Question

## `outer()` Has Finished Executing and is Removed From the Call Stack. Then How Can `inner()` Still Access `b`?

Normally, when a function finishes, its Execution Context is removed from the Call Stack.

However, if an inner function still references variables from the outer function, those required variables remain reachable.

This preserved relationship is called a:

> **Closure**

Example:

```js
function outer() {

    let b = 20;

    function inner() {
        console.log(b);
    }

    return inner;
}

const myFunc = outer();

myFunc();
```

Flow:

```text
outer()
   ↓
b = 20
   ↓
inner() created
   ↓
inner remembers outer lexical environment
   ↓
outer() returns inner
   ↓
outer() finishes
   ↓
outer() removed from Call Stack
   ↓
myFunc()
   ↓
inner executes
   ↓
Still accesses b
   ↓
Closure
```

---

# 8. What is a Lexical Environment?

> **A Lexical Environment is an internal structure associated with a scope that keeps track of identifiers in that scope and a reference to its outer Lexical Environment.**

Simple understanding:

> **Lexical Environment = Storage for current scope + reference to outer scope**

Conceptually:

```text
Lexical Environment
       │
       ├── Variables
       ├── Functions / bindings
       │
       └── Outer Reference
                │
                ▼
       Parent Lexical Environment
```

Example:

```js
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
    }
}
```

Conceptually:

```text
inner Lexical Environment
        │
        ├── c = 30
        │
        └── Outer Reference
                 ↓
outer Lexical Environment
        │
        ├── b = 20
        │
        └── Outer Reference
                 ↓
Global Lexical Environment
        │
        └── a = 10
```

---

# 9. What is Closure?

> **A Closure is a function together with the Lexical Environment in which it was created. It allows the function to access variables from its outer scope even after the outer function has finished executing.**

Example:

```js
function outer() {

    let count = 0;

    function inner() {
        count++;

        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

Why does `count` survive?

Because:

```text
inner()
   ↓
Still references
   ↓
count
   ↓
Outer Lexical Environment remains reachable
   ↓
Closure
```

---

# 10. What is Scope Chain?

> **The Scope Chain is JavaScript's process of searching for a variable from the current scope to its outer scopes until it reaches the global scope.**

Consider:

```js
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
```

When JavaScript searches for:

```js
c
```

it finds it in:

```text
inner()
```

For:

```js
b
```

it searches:

```text
inner
  ↓
outer
  ↓
Found b
```

For:

```js
a
```

it searches:

```text
inner
  ↓
outer
  ↓
global
  ↓
Found a
```

Complete:

```text
inner Scope
     │
     │ c → Found
     │
     ▼
outer Scope
     │
     │ b → Found
     │
     ▼
Global Scope
     │
     │ a → Found
     ▼
End
```

---

# 11. Execution Context

An Execution Context can be conceptually connected with:

```text
Execution Context
│
├── Lexical Environment
├── Variable Environment
└── this
```

> **Execution Context is the environment in which JavaScript code is evaluated and executed.**

---

# 12. Call Stack

> **The Call Stack is a stack that keeps track of which Execution Context/function call is currently running.**

Example:

```js
function outer() {
    inner();
}

function inner() {
    console.log("Hello");
}

outer();
```

Conceptually:

```text
┌────────────────────┐
│ inner()            │
├────────────────────┤
│ outer()            │
├────────────────────┤
│ Global Context     │
└────────────────────┘
```

When `inner()` finishes:

```text
┌────────────────────┐
│ outer()            │
├────────────────────┤
│ Global Context     │
└────────────────────┘
```

---

# 13. Lexical Environment — Important Point

A Lexical Environment stores/represents the variables and functions/bindings of a scope and maintains a reference to its outer Lexical Environment.

```text
Current Lexical Environment
            │
            ├── Variables
            ├── Functions / bindings
            │
            └── Outer Reference
                     ↓
             Outer Environment
```

This outer reference helps JavaScript perform:

> **Scope Chain lookup**

---

# 14. Scope Chain — Important Point

Scope Chain is the process JavaScript uses to search for variables from the current scope to outer scopes.

```text
Current Scope
     ↓
Outer Scope
     ↓
Outer Scope
     ↓
Global Scope
```

If JavaScript cannot find the variable anywhere in the accessible chain:

```text
ReferenceError
```

---

# 15. Heap Memory

> **Heap Memory stores dynamically allocated objects, arrays, functions, and other runtime data.**

Examples:

```js
const user = {
    name: "Gourav"
};

const numbers = [10, 20, 30];

function test() {}
```

Conceptually:

```text
Reference
   │
   ▼
Heap Memory

┌──────────────────┐
│ Objects          │
│ Arrays           │
│ Functions        │
│ Runtime Data     │
└──────────────────┘
```

Closures may keep referenced data reachable in memory even after an outer function has returned.

---

# 16. Closure — Final Definition

> **A Closure is a function together with the Lexical Environment in which it was created. It allows the function to access variables from its outer scope even after the outer function has finished executing.**

Memory trick:

```text
Function
    +
Outer Variables
    +
Lexical Environment
    =
Closure
```

---

# 17. Garbage Collector

> **Garbage Collection is the process of automatically reclaiming memory that is no longer reachable/needed by a JavaScript program.**

JavaScript automatically manages memory.

You normally do not manually decide exactly when garbage collection runs.

JavaScript engines such as **V8** decide when to run the Garbage Collector.

Conceptually:

```text
Object Created
      ↓
Stored in Memory
      ↓
Still Reachable?
    /       \
  Yes       No
   │         │
 Keep      Eligible for
Memory     Garbage Collection
```

---

# 18. Difference Between Lexical Environment and Variable Environment

For interview learning, these terms are often introduced conceptually as follows:

| Lexical Environment                           | Variable Environment                                          |
| --------------------------------------------- | ------------------------------------------------------------- |
| Tracks lexical bindings and scope information | Tracks variable-declaration environment information           |
| Important for lexical/block scoping           | Important for `var`-style/function-level declaration handling |
| Connected with `let`/`const` behavior         | Connected with `var` behavior                                 |
| Has an outer environment reference            | Exists as part of execution-context environment handling      |
| Important for Scope Chain                     | Related to declaration storage/environment                    |
| Important for understanding Closures          | Also part of the execution-context model                      |

### Easy Interview Understanding

```text
Execution Context
      │
      ├── Lexical Environment
      │      ↓
      │   Scope / outer references
      │
      ├── Variable Environment
      │      ↓
      │   Variable declaration environment
      │
      └── this
```

---

# 19. What is a Callback?

> **A callback is a function passed to another function so that the receiving function can call it, often later or after some work completes.**

Example:

```js
function greet(name, callback) {

    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Bye");
}

greet("Gourav", sayBye);
```

Flow:

```text
greet()
   ↓
"Hello Gourav"
   ↓
callback()
   ↓
sayBye()
   ↓
"Bye"
```

Output:

```text
Hello Gourav
Bye
```

### Important

Callbacks are **not always asynchronous**.

The above callback:

```js
callback();
```

runs synchronously.

But callbacks are also heavily used with asynchronous APIs:

```js
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

---

# 20. What is Callback Hell?

> **Callback Hell is the situation where multiple nested callbacks make code difficult to read, maintain, and debug.**

Example scenario:

```text
1. Login User
      ↓
2. Get User Details
      ↓
3. Check Cart
      ↓
4. Make Payment
      ↓
5. Send Email
```

Functions:

```js
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
```

Now we execute them:

```js
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
```

Structure:

```text
login()
   │
   └── getUser()
          │
          └── getCart()
                 │
                 └── makePayment()
                        │
                        └── sendEmail()
```

This is called:

> **Callback Hell**

or:

> **Pyramid of Doom**

---

## Problems With Callback Hell

❌ Hard to read

❌ Hard to debug

❌ Difficult error handling

❌ Deep nesting

---

# 21. What is a Promise?

> **A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.**

A Promise has three states:

```text
              Promise
                 │
        ┌────────┼────────┐
        │        │        │
        ▼        ▼        ▼
     Pending  Fulfilled  Rejected
```

### Pending

```text
Operation still running
```

### Fulfilled

```text
Operation successful
```

### Rejected

```text
Operation failed
```

---

# 22. Creating a Promise

```js
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
    .catch(error => console.log(error))
    .finally(() => console.log("Finished"));
```

Output:

```text
Payment Successful
Finished
```

Here:

```text
resolve()
    ↓
Success
    ↓
Fulfilled


reject()
    ↓
Failure
    ↓
Rejected
```

---

# 23. Promise Solution to Callback Hell

Instead of deeply nesting callbacks:

```text
login
  └── getUser
       └── getOrders
            └── makePayment
```

Promises allow chaining:

```js
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
```

Conceptually:

```text
login()
   ↓
getUser()
   ↓
getOrders()
   ↓
makePayment()
   ↓
Done
```

This produces a flatter and easier-to-read structure.

---

# 24. What is Async/Await?

> **Async/Await is cleaner syntax for working with Promises.**

The:

```js
async
```

keyword makes a function return a Promise.

The:

```js
await
```

keyword pauses the execution of that **async function** until the awaited Promise settles.

It does **not block the entire JavaScript thread** while waiting.

Example:

```js
async function test() {

    try {

        const data = await getData();

        console.log(data);

    } catch (err) {

        console.log(err);

    }

}
```

Conceptually:

```text
async function
      ↓
getData()
      ↓
Returns Promise
      ↓
await
      ↓
Pause this async function
      ↓
Other JavaScript can continue
      ↓
Promise settles
      ↓
Resume async function
      ↓
data
```

---

# Why Use `try...catch` With Async/Await?

A rejected awaited Promise can be handled using:

```js
try {

    const data = await getData();

} catch (error) {

    console.log(error);

}
```

Flow:

```text
Promise
   │
   ├── Fulfilled
   │      ↓
   │    try continues
   │
   └── Rejected
          ↓
        catch
```

---

# 25. Callback vs Promise

| Feature           | Callback                                | Promise                                  |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| Readability       | ❌ Poor when deeply nested               | ✅ Better with chaining                   |
| Error Handling    | ❌ Can become scattered across callbacks | ✅ Can use `.catch()` for a Promise chain |
| Callback Hell     | ❌ Possible                              | ✅ Helps avoid deep callback nesting      |
| Chaining          | ❌ Difficult                             | ✅ Easy                                   |
| States            | ❌ No Promise states                     | ✅ Pending, Fulfilled, Rejected           |
| Modern JavaScript | Still used and important                | Preferred for many async workflows       |

---

# Callback → Promise → Async/Await Evolution

```text
Callbacks
    │
    │ Problem
    ▼
Callback Hell
    │
    │ Cleaner solution
    ▼
Promises
    │
    │ Cleaner syntax
    ▼
Async / Await
```

---

# Complete Connection

These topics are strongly connected:

```text
                    JavaScript
                        │
                        ▼
                 Execution Context
                        │
            ┌───────────┴───────────┐
            │                       │
            ▼                       ▼
     Lexical Environment       Call Stack
            │
            ▼
      Lexical Scope
            │
            ▼
       Scope Chain
            │
            ▼
         Closure
            │
            ▼
      Memory Reachability
            │
            ▼
    Garbage Collection


              Async JavaScript
                    │
                    ▼
                 Callback
                    │
                    ▼
             Callback Hell
                    │
                    ▼
                 Promise
                    │
                    ▼
              Async / Await
```

---

# Most Important Interview Definitions

| Topic                   | Simple Definition                                                    |
| ----------------------- | -------------------------------------------------------------------- |
| **Hoisting**            | Declarations are processed before normal code execution              |
| **TDZ**                 | Period where `let`/`const` binding exists but cannot yet be accessed |
| **Scope**               | Determines where a variable can be accessed                          |
| **Global Scope**        | Variables accessible from global code and eligible inner scopes      |
| **Function Scope**      | Scope belonging to a function                                        |
| **Block Scope**         | Scope created by a block for `let`/`const`                           |
| **Lexical Scope**       | Scope depends on where a function is defined                         |
| **Lexical Environment** | Scope's bindings + reference to outer environment                    |
| **Scope Chain**         | Search from current scope toward outer scopes                        |
| **Closure**             | Function + remembered lexical environment                            |
| **Call Stack**          | Tracks active function calls/execution contexts                      |
| **Heap**                | Memory used for dynamically allocated runtime data                   |
| **Garbage Collection**  | Automatically reclaims unreachable memory                            |
| **Callback**            | Function passed to another function to be called by it               |
| **Callback Hell**       | Deep nested callbacks that make code difficult to manage             |
| **Promise**             | Object representing eventual async success/failure                   |
| **Async/Await**         | Cleaner syntax for Promise-based asynchronous code                   |

---

# Final Interview Memory Map

```text
var
 ↓
Function Scope
 ↓
Hoisted + undefined


let / const
 ↓
Block Scope
 ↓
Hoisted + TDZ


Function Defined
 ↓
Lexical Scope
 ↓
Lexical Environment
 ↓
Scope Chain
 ↓
Closure
 ↓
Outer Variables Remain Reachable


Async Work
 ↓
Callbacks
 ↓
Callback Hell
 ↓
Promises
 ↓
.then() / .catch() / .finally()
 ↓
Async / Await
 ↓
try / catch
```

## One-Line Revision

**Hoisting prepares declarations → TDZ protects uninitialized `let`/`const` → Scope controls accessibility → Lexical Scope depends on where a function is written → Scope Chain searches outward → Closure remembers outer variables → Callbacks can create Callback Hell → Promises flatten async flows → Async/Await makes Promise code easier to read.**

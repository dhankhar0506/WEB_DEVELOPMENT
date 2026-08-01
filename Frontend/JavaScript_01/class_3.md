# Chapter 2 — JavaScript Execution Context

## What is an Execution Context?

An **Execution Context** is the environment in which JavaScript code is evaluated and executed.

Execution contexts are created by the JavaScript engine (such as V8), managed through the **Call Stack**, and interact with memory used for values such as objects, arrays, functions, and other data.

> **Simple Definition:** An Execution Context is like a workspace created by JavaScript to execute a particular piece of code.

---

# 1. Suppose We Write This Code

```js id="apzndc"
let a = 10;

function add() {
    let b = 20;
    console.log(a + b);
}

add();
```

Now let's understand what happens internally.

---

# Step 1 — V8 Processes the JavaScript Code

Before executing the program, V8 processes the JavaScript source code.

Simplified flow:

```text id="w4iw6x"
JavaScript Code
      │
      ▼
Tokenization / Parsing
      │
      ▼
     AST
      │
      ▼
   Ignition
      │
      ▼
   Bytecode
```

The generated instructions can then be executed by V8.

---

# Step 2 — V8 Creates Global Execution Context (GEC)

## What is Global Execution Context?

> **Global Execution Context (GEC) is the first execution context created when a JavaScript program starts executing.**

It contains information required for executing the global code, such as:

* Global variables
* Global functions
* `this`
* Scope / lexical environment information

Conceptually:

```text id="3zvtyq"
Global Execution Context
┌────────────────────────────┐
│ Variables                  │
│ a                          │
│                            │
│ Functions                  │
│ add()                      │
│                            │
│ this                       │
│ Scope Information          │
└────────────────────────────┘
```

---

# Step 3 — Global Execution Context Enters the Call Stack

## What is the Call Stack?

> **Call Stack is a LIFO (Last In, First Out) stack that keeps track of the currently executing execution contexts.**

Initially:

```text id="1fd17y"
Call Stack

┌──────────────────────┐
│ Global Context       │
└──────────────────────┘
```

Since the Global Execution Context is created first, it becomes the base execution context.

---

# Step 4 — Memory Creation Phase

When an Execution Context is created, we can conceptually understand its processing in two phases:

```text id="2fc3hz"
Execution Context
       │
       ├── 1. Memory Creation Phase
       │
       └── 2. Code Execution Phase
```

## Phase 1 — Memory Creation Phase

JavaScript prepares memory/bindings for declarations before executing the statements.

Conceptually, the engine scans/processes declarations such as:

```js id="h5j3zg"
let a = 10;

function add() {
    let b = 20;
}
```

For interview understanding:

```text id="0tn8nx"
"I found a variable."
        ↓
Create its binding

"I found a function declaration."
        ↓
Make the function available
```

### Important Note About `let`

A common simplified explanation says:

```text id="o2r1yu"
a → undefined
```

However, for `let` and `const`, this is not technically the same behavior as `var`.

`let` and `const` bindings are created during environment setup but remain **uninitialized** until their declaration is evaluated.

This period is called the **Temporal Dead Zone (TDZ)**.

So a more accurate representation for our code is:

```text id="xevqwf"
Global Execution Context

┌────────────────────────────────┐
│ a   → <uninitialized / TDZ>     │
│ add → function(){...}           │
└────────────────────────────────┘
```

If we had:

```js id="1vt2yc"
var a = 10;
```

then the simplified memory representation would be:

```text id="9c44jf"
a → undefined
```

before assignment.

---

## What About `b`?

Our code is:

```js id="6agkz4"
function add() {
    let b = 20;
}
```

`b` belongs to the **Function Execution Context of `add()`**, not the Global Execution Context.

Therefore, before `add()` is called:

```text id="mjz8q7"
Global Context

a
add()

NOT b
```

`b` will be handled when `add()` executes.

---

# Phase 2 — Code Execution Phase

Now JavaScript executes the global code.

```js id="e88l1c"
let a = 10;
```

Now:

```text id="12g3v8"
a → 10
```

The function declaration is available:

```text id="9a6d5h"
add → function(){...}
```

Conceptually:

```text id="dx9cx6"
Global Execution Context

┌──────────────────────────────┐
│ a   → 10                     │
│                              │
│ add → function(){...}        │
└──────────────────────────────┘
```

Then JavaScript reaches:

```js id="k5o5yg"
add();
```

Now something important happens.

---

# Step 5 — Function Execution Context (FEC)

When:

```js id="7f35jg"
add();
```

is called, JavaScript needs a new execution environment for that function.

Conceptually:

```text id="bzub9h"
"I need another workspace
for this function."
```

So JavaScript creates a **Function Execution Context**.

## What is Function Execution Context?

> **A Function Execution Context is a new execution context created every time a function is invoked.**

It contains information needed for that particular function call, such as:

* Local variables
* Function parameters / arguments
* `this`
* Scope / lexical environment information

For:

```js id="sx7c9r"
function add() {
    let b = 20;
    console.log(a + b);
}
```

a new execution context is created when:

```js id="cc7lyi"
add();
```

runs.

Conceptually:

```text id="i9z6zo"
Function Execution Context — add()

┌──────────────────────────────┐
│ Local Variables              │
│                              │
│ b                            │
│                              │
│ Arguments                    │
│ this                         │
│ Scope Information            │
└──────────────────────────────┘
```

---

# Step 6 — Call Stack Pushes the Function Context

The newly created Function Execution Context is pushed onto the **Call Stack**.

Before calling `add()`:

```text id="ym3ac8"
┌──────────────────────┐
│ Global Context       │
└──────────────────────┘
```

After calling `add()`:

```text id="hkgdm7"
┌──────────────────────┐
│ add() Context        │ ← Currently executing
├──────────────────────┤
│ Global Context       │
└──────────────────────┘
```

Because the Call Stack follows:

> **LIFO — Last In, First Out**

The most recently pushed context executes first.

---

# Step 7 — Memory Creation for `add()`

The Function Execution Context also prepares its local bindings.

For:

```js id="x8tkmd"
function add() {
    let b = 20;
    console.log(a + b);
}
```

Conceptually before evaluating the `let b = 20` declaration:

```text id="8dw8je"
add() Execution Context

┌─────────────────────────────┐
│ b → <uninitialized / TDZ>   │
└─────────────────────────────┘
```

During execution:

```js id="m6d5y1"
let b = 20;
```

Now:

```text id="6x98yb"
b → 20
```

---

# Step 8 — Memory Heap

## What is Memory Heap?

> **Memory Heap is a large region of memory used for dynamically allocated data such as objects, arrays, functions, and other runtime structures.**

For interview-level understanding, variables can hold references to objects stored in heap-managed memory.

Example:

```js id="5zpcfv"
let person = {
    name: "Gourav"
};
```

Conceptually:

```text id="blnykw"
Variable / Binding
┌────────────────────────────┐
│ person                     │
│      │                     │
└──────│─────────────────────┘
       │
       │ Reference
       ▼

Memory Heap
┌───────────────────────────┐
│ {                         │
│   name: "Gourav"          │
│ }                         │
└───────────────────────────┘
```

---

## Primitive vs Reference Values

### Primitive Values

Examples:

```js id="higznm"
let age = 25;
let name = "Gourav";
let active = true;
let value = null;
```

Primitive values include:

* String
* Number
* Boolean
* `null`
* `undefined`
* `symbol`
* `bigint`

### Objects / Reference Values

Examples:

```js id="uhyyw8"
let person = {
    name: "Gourav"
};

let numbers = [10, 20, 30];

function test() {}
```

These involve objects/reference semantics.

> **Important:** Don't explain this in an interview as "objects go to the heap because they are too large." Size is not the reason. Heap-managed allocation is related to their dynamic lifetime and object/reference semantics.

---

# Step 9 — Execute the Function

Now the `add()` function executes:

```js id="tg7bgp"
let b = 20;

console.log(a + b);
```

`b` is found in the function's local scope:

```text id="c3jzxr"
b → 20
```

But where does `a` come from?

`a` is not declared inside `add()`.

So JavaScript looks in the outer lexical scope.

```text id="m5hnss"
add() Local Scope
       │
       │ Search for a
       ▼
Global Scope
       │
       ▼
a → 10
```

Therefore:

```js id="9y8rfn"
console.log(a + b);
```

becomes:

```text id="2c2q0r"
10 + 20
   ↓
  30
```

Output:

```text id="iugftj"
30
```

This lookup through outer scopes is related to the **Scope Chain / Lexical Environment**.

---

# Step 10 — Function Finishes

After `add()` finishes:

```text id="gq3qg1"
add() completed
       ↓
Function Execution Context
removed from Call Stack
```

Before:

```text id="f6kex4"
┌──────────────────────┐
│ add() Context        │
├──────────────────────┤
│ Global Context       │
└──────────────────────┘
```

After:

```text id="58onb1"
┌──────────────────────┐
│ Global Context       │
└──────────────────────┘
```

The `add()` execution context is no longer active.

---

# Step 11 — Program Ends

After all global code finishes:

```text id="g7tk06"
Global Execution Context
        ↓
Program finishes
        ↓
Global Context no longer executing
```

The Call Stack becomes empty.

```text id="7ptoxf"
Call Stack

┌──────────────────────┐
│                      │
│        Empty         │
│                      │
└──────────────────────┘
```

---

# Complete Execution Flow

For this code:

```js id="r8id98"
let a = 10;

function add() {
    let b = 20;
    console.log(a + b);
}

add();
```

The complete conceptual flow is:

```text id="t2e58m"
JavaScript Source Code
        │
        ▼
V8 Processes Code
        │
        ▼
AST / Bytecode
        │
        ▼
Create Global Execution Context
        │
        ▼
Push Global Context to Call Stack
        │
        ▼
Prepare Global Bindings
        │
        ├── a
        └── add()
        │
        ▼
Execute Global Code
        │
        ▼
a = 10
        │
        ▼
add() called
        │
        ▼
Create Function Execution Context
        │
        ▼
Push add() Context
        │
        ▼
Prepare Function Bindings
        │
        └── b
        │
        ▼
Execute Function
        │
        ▼
b = 20
        │
        ▼
Find a through Outer Scope
        │
        ▼
10 + 20
        │
        ▼
Output → 30
        │
        ▼
add() finishes
        │
        ▼
Pop add() Context
        │
        ▼
Global Code finishes
        │
        ▼
Global Context finishes
        │
        ▼
Call Stack Empty
```

---

# Execution Context + Call Stack + Heap

Understand these three separately:

```text id="dbvycc"
              JavaScript Engine
                     │
         ┌───────────┼────────────┐
         │           │            │
         ▼           ▼            ▼
Execution Context  Call Stack   Memory Heap
         │           │            │
         │           │            │
   Environment     Tracks      Dynamically
   for executing   active      allocated
   code            contexts    objects/data
```

### Execution Context

> **Where code executes.**

### Call Stack

> **Keeps track of active execution contexts using LIFO.**

### Memory Heap

> **Memory region used for dynamically allocated objects and runtime data.**

---

# Important Interview Questions

## 1. What is an Execution Context?

> **An Execution Context is the environment in which JavaScript code is evaluated and executed. It contains information about variables, functions, `this`, and scope required during execution.**

---

## 2. What is Global Execution Context?

> **Global Execution Context is the first execution context created when JavaScript starts executing the program's global code.**

---

## 3. What is Function Execution Context?

> **A Function Execution Context is created every time a function is invoked and contains the information needed to execute that function call.**

---

## 4. When is Function Execution Context Created?

Not when the function is defined:

```js id="r2x6k3"
function add() {
}
```

It is created when the function is **called**:

```js id="khvwxs"
add();
```

So:

```text id="aw2h7u"
Function Defined
      ↓
No FEC yet

Function Called
      ↓
Create FEC
```

---

## 5. What is Call Stack?

> **The Call Stack is a LIFO data structure used by JavaScript to keep track of currently executing execution contexts/function calls.**

---

## 6. What Does LIFO Mean?

**LIFO = Last In, First Out**

```text id="zyh5ao"
Global()
   ↓
add()
   ↓
test()
```

Stack:

```text id="rmmjbm"
┌───────────┐
│ test()    │ ← removed first
├───────────┤
│ add()     │
├───────────┤
│ Global    │
└───────────┘
```

---

## 7. What is Memory Heap?

> **Memory Heap is a region of memory used by the JavaScript engine for dynamically allocated objects and other runtime data.**

---

## 8. Does Every Function Call Create a New Execution Context?

**Yes.**

```js id="r1zkph"
function test() {
    console.log("Hello");
}

test();
test();
test();
```

Each invocation gets its own Function Execution Context.

```text id="3z05yj"
test() → FEC #1

test() → FEC #2

test() → FEC #3
```

---

## 9. What Happens When a Function Finishes?

Its active Function Execution Context is removed from the **Call Stack**.

```text id="52otve"
Function Called
      ↓
Create FEC
      ↓
Push onto Stack
      ↓
Execute
      ↓
Function Ends
      ↓
Pop from Stack
```

---

## 10. What is Stack Overflow?

If functions keep calling without terminating, the Call Stack can exceed its limit.

Example:

```js id="9pq8q6"
function test() {
    test();
}

test();
```

Conceptually:

```text id="hdnqqq"
test()
 ↓
test()
 ↓
test()
 ↓
test()
 ↓
test()
 ↓
...
```

Eventually:

```text id="gl52p1"
RangeError: Maximum call stack size exceeded
```

This is called a **Stack Overflow**.

---

# Quick Interview Revision

| Concept               | Simple Definition                                               |
| --------------------- | --------------------------------------------------------------- |
| **Execution Context** | Environment where JS code executes                              |
| **GEC**               | Execution context for global code                               |
| **FEC**               | Execution context created for a function call                   |
| **Call Stack**        | Tracks active execution contexts/function calls                 |
| **LIFO**              | Last In, First Out                                              |
| **Memory Creation**   | Environment/bindings are prepared before statements execute     |
| **Execution Phase**   | Statements are executed                                         |
| **Heap**              | Memory region for dynamically allocated objects/runtime data    |
| **TDZ**               | Period where `let`/`const` binding exists but isn't initialized |
| **Scope Chain**       | Mechanism for looking through outer lexical scopes              |
| **Stack Overflow**    | Call Stack exceeds its allowed size                             |

---

# Final Interview Flow

```text id="wybrch"
             JavaScript Starts
                    ↓
          Global Execution Context
                    ↓
             Call Stack Push
                    ↓
       Memory / Environment Setup
                    ↓
             Execute Code
                    ↓
              Function Call?
                 /      \
               No        Yes
               │          ↓
               │      Create FEC
               │          ↓
               │      Push to Stack
               │          ↓
               │      Execute Function
               │          ↓
               │      Function Ends
               │          ↓
               │      Pop from Stack
               │
               ▼
         Global Code Ends
                    ↓
            Program Finished
```

## One-Line Memory Trick

**Execution Context = Workspace → Call Stack = Tracks active work → Heap = Dynamic object/data memory → Function Call = New FEC → Function Ends = FEC popped from stack.**

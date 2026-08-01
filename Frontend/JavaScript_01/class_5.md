# JavaScript Execution Flow

This is the complete flow of how JavaScript executes a program using the **Global Execution Context, Function Execution Context, Memory Creation Phase, Code Execution Phase, and Call Stack**.

---

## Complete Execution Flow

```text id="f0eyqw"
1. Program Starts
        │
        ▼
2. JavaScript creates the Global Execution Context (GEC)
        │
        ▼
3. Pushes the Global Execution Context into the Call Stack
        │
        ▼
4. Starts the Memory Creation Phase of the Global Execution Context
        │
        ▼
5. Scans / processes the entire global code
        │
        ├── Creates bindings/memory for variables
        │
        ├── Stores function declarations
        │
        ├── Initializes var variables to undefined
        │
        └── Creates let/const bindings as uninitialized (TDZ)
        │
        ▼
6. Memory Creation Phase completes
        │
        ▼
7. Starts the Code Execution Phase
        │
        ▼
8. Executes code line by line
        │
        ├── Assigns values to variables
        │
        ├── Executes console.log()
        │
        └── When a function is called...
                │
                ▼
9. Creates a Function Execution Context (FEC)
        │
        ▼
10. Pushes the Function Execution Context onto the Call Stack
        │
        ▼
11. Executes the Function Execution Context
        │
        ├── Memory Creation Phase
        │
        └── Code Execution Phase
        │
        ▼
12. Function finishes
        │
        ▼
13. Removes (Pops) the Function Execution Context
    from the Call Stack
        │
        ▼
14. Resumes the previous Execution Context
    (Global Context in this example)
        │
        ▼
15. Global code finishes
        │
        ▼
16. Global Execution Context finishes /
    is removed from the active Call Stack
        │
        ▼
17. Program Ends
```

---

# Step-by-Step Explanation

## Step 1 — Program Starts

JavaScript starts executing the program.

```text id="u8hv6x"
JavaScript Program
        ↓
      Start
```

---

## Step 2 — Global Execution Context is Created

JavaScript creates the **Global Execution Context (GEC)**.

> **Global Execution Context is the first execution context created for executing the global JavaScript code.**

```text id="05rm91"
Program Starts
      ↓
Global Execution Context
```

---

## Step 3 — GEC Enters the Call Stack

The Global Execution Context becomes the active execution context.

Conceptually:

```text id="ajot1k"
Call Stack

┌─────────────────────┐
│ Global Context      │
└─────────────────────┘
```

---

## Step 4 — Memory Creation Phase Starts

The Global Execution Context has two conceptual phases:

```text id="op5l7i"
Global Execution Context
        │
        ├── Memory Creation Phase
        │
        └── Code Execution Phase
```

First, JavaScript performs the **Memory Creation Phase**.

---

## Step 5 — JavaScript Processes Global Declarations

During the Memory Creation Phase, JavaScript prepares bindings/memory for declarations.

```text id="06ce22"
Global Code
     ↓
Memory Creation Phase
     ↓
┌─────────────────────────────┐
│ Variables                   │
│ Functions                   │
│ Scope Information           │
└─────────────────────────────┘
```

For `var`:

```js id="yqf4eo"
var a = 10;
```

Initially:

```text id="v9ybqi"
a → undefined
```

For `let` and `const`:

```js id="nwphtq"
let b = 20;
const c = 30;
```

Their bindings exist but are initially:

```text id="j5xplm"
b → <uninitialized>
c → <uninitialized>

       ↓
      TDZ
```

Function declarations are made available:

```js id="utctsl"
function add() {
    // ...
}
```

Conceptually:

```text id="xsr40k"
add → function(){...}
```

---

## Step 6 — Memory Creation Phase Completes

Once the required environment/bindings have been prepared:

```text id="0zskwn"
Memory Creation Phase
        ↓
     Complete
```

JavaScript moves to the next phase.

---

# Step 7 — Code Execution Phase Starts

Now JavaScript starts executing statements.

```text id="o4kzcm"
Memory Creation
      ↓
   Complete
      ↓
Code Execution
```

---

## Step 8 — JavaScript Executes Code Line by Line

JavaScript executes statements in order.

Example:

```js id="um2rs5"
var a = 10;

console.log(a);

add();
```

Flow:

```text id="3qdyfv"
var a = 10
     ↓
a → 10

console.log(a)
     ↓
Output → 10

add()
     ↓
Function Call
```

When JavaScript encounters a function call:

```js id="6em35q"
add();
```

it needs a new execution context for that particular invocation.

---

# Step 9 — Function Execution Context is Created

A new **Function Execution Context (FEC)** is created.

> **A new Function Execution Context is created every time a function is invoked.**

Example:

```js id="ggtgv5"
function add() {
    let x = 20;
}

add();
```

Calling:

```js id="kpkvsc"
add();
```

creates:

```text id="lj19m7"
Function Execution Context

        add()
```

---

# Step 10 — Function Context Enters Call Stack

Before the function call:

```text id="4ysowj"
┌─────────────────────┐
│ Global Context      │
└─────────────────────┘
```

After `add()` is called:

```text id="0g9lsc"
┌─────────────────────┐
│ add() Context       │ ← Currently executing
├─────────────────────┤
│ Global Context      │
└─────────────────────┘
```

The Call Stack follows:

> **LIFO — Last In, First Out**

---

# Step 11 — Function Execution Context Executes

The Function Execution Context also goes through its own setup and execution.

```text id="zbgihd"
Function Execution Context
          │
          ├── Memory Creation Phase
          │
          └── Code Execution Phase
```

Example:

```js id="6s9e9u"
function add() {
    let x = 20;
    let y = 30;

    console.log(x + y);
}
```

Conceptually:

```text id="bpkcqx"
add() Execution Context
        │
        ▼
Memory Creation
        │
        ├── x → <uninitialized>
        └── y → <uninitialized>
        │
        ▼
Code Execution
        │
        ├── x → 20
        ├── y → 30
        │
        ▼
console.log(x + y)
        │
        ▼
       50
```

---

# Step 12 — Function Finishes

After all statements inside the function have executed:

```text id="0pt9n7"
add()
  ↓
Execution Complete
```

The function's active execution context is no longer needed on the Call Stack.

---

# Step 13 — Function Context is Popped

Before:

```text id="id3a68"
┌─────────────────────┐
│ add() Context       │
├─────────────────────┤
│ Global Context      │
└─────────────────────┘
```

After `add()` finishes:

```text id="kt1xt6"
┌─────────────────────┐
│ Global Context      │
└─────────────────────┘
```

So:

```text id="tqtf3m"
Function Ends
     ↓
FEC Popped
     ↓
Previous Context Becomes Active
```

---

# Step 14 — Global Execution Continues

JavaScript continues executing from where the function was called.

Example:

```js id="fctd9k"
console.log("Before");

add();

console.log("After");
```

Flow:

```text id="34hwwh"
console.log("Before")
        ↓
add()
        ↓
Create FEC
        ↓
Execute add()
        ↓
FEC removed
        ↓
Return to Global Context
        ↓
console.log("After")
```

---

# Step 15 — Global Code Finishes

Eventually, JavaScript reaches the end of the global code.

```text id="3usg01"
Global Code
    ↓
All statements executed
    ↓
Finished
```

---

# Step 16 — Global Execution Context Finishes

Once the global code has finished executing, the Global Execution Context is no longer the active executing context.

Conceptually:

```text id="fng4as"
Call Stack

┌─────────────────────┐
│ Global Context      │
└─────────────────────┘

        ↓

Global Code Finished

        ↓

┌─────────────────────┐
│                     │
│       Empty         │
│                     │
└─────────────────────┘
```

---

# Step 17 — Program Ends

For a simple synchronous script with no further runtime work:

```text id="m5j52n"
Call Stack Empty
      ↓
No More Code
      ↓
Program Finished
```

> **Note:** In environments such as browsers or Node.js, the runtime may continue running if there are pending timers, events, network operations, servers, or other asynchronous work.

---

# Example — Complete Flow

Consider:

```js id="sn1p8d"
var a = 10;

function add() {
    let b = 20;

    console.log(a + b);
}

add();

console.log("Done");
```

### Execution

```text id="2zg78m"
Program Starts
      ↓
Create GEC
      ↓
Push GEC
      ↓
Memory Creation
      │
      ├── a → undefined
      └── add → function
      ↓
Code Execution
      ↓
a → 10
      ↓
add() called
      ↓
Create FEC
      ↓
Push FEC
      ↓
┌─────────────────────┐
│ add() Context       │
├─────────────────────┤
│ Global Context      │
└─────────────────────┘
      ↓
add() Memory Creation
      │
      └── b → <uninitialized>
      ↓
add() Code Execution
      │
      └── b → 20
      ↓
console.log(a + b)
      ↓
Output → 30
      ↓
add() finishes
      ↓
Pop add() FEC
      ↓
┌─────────────────────┐
│ Global Context      │
└─────────────────────┘
      ↓
Continue Global Code
      ↓
console.log("Done")
      ↓
Output → Done
      ↓
Global Code Finishes
      ↓
Call Stack Empty
      ↓
Program Finished
```

---

# Most Important Interview Flow

```text id="v6qrsw"
        JavaScript Program
               ↓
        Create Global EC
               ↓
        Push into Stack
               ↓
        Memory Creation
               ↓
        Code Execution
               ↓
          Function Call
               ↓
        Create Function EC
               ↓
        Push into Stack
               ↓
        Memory Creation
               ↓
        Code Execution
               ↓
        Function Finishes
               ↓
         Pop Function EC
               ↓
    Resume Previous Context
               ↓
      Global Code Finishes
               ↓
         Stack Becomes Empty
```

---

# Quick Revision

| Step   | What Happens                         |
| ------ | ------------------------------------ |
| **1**  | Program starts                       |
| **2**  | Global Execution Context created     |
| **3**  | GEC becomes active on Call Stack     |
| **4**  | Memory Creation Phase starts         |
| **5**  | Variables/functions are prepared     |
| **6**  | Memory Creation completes            |
| **7**  | Code Execution Phase starts          |
| **8**  | Code executes line by line           |
| **9**  | Function call creates FEC            |
| **10** | FEC pushed onto Call Stack           |
| **11** | Function's setup + execution happens |
| **12** | Function finishes                    |
| **13** | FEC popped from Call Stack           |
| **14** | Previous context resumes             |
| **15** | Global code finishes                 |
| **16** | GEC finishes / stack becomes empty   |
| **17** | Simple program ends                  |

---

## Interview Answer

If the interviewer asks **"Explain how JavaScript code executes"**, you can say:

> **JavaScript first creates a Global Execution Context and makes it active on the Call Stack. The execution context is commonly explained in two phases: memory creation and code execution. During setup, declarations are prepared; `var` is initialized with `undefined`, `let` and `const` remain uninitialized in the TDZ, and function declarations are made available. Then JavaScript executes the code. Whenever a function is called, a new Function Execution Context is created and pushed onto the Call Stack. After the function finishes, its context is popped and execution resumes in the previous context. This continues until the global code is complete.**

### One-Line Memory Trick

**GEC → Push → Memory → Execute → Function Call → FEC → Push → Memory → Execute → Pop → Resume → Global Ends.**

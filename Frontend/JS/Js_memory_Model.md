# JavaScript Interview Questions — JavaScript Memory Model

---

# 1. JavaScript Memory Model

A simple way to understand JavaScript memory:

```text
                     Memory
           ┌──────────────────────┐
           │     Heap Memory      │
           │                      │
           │ Objects              │
           │ Arrays               │
           │ Functions            │
           └──────────────────────┘
                     ▲
                     │ References
                     │
           ┌──────────────────────┐
           │   Execution Context  │
           │                      │
           │ Lexical Environment  │
           │ this Binding         │
           │ Code Execution       │
           └──────────────────────┘
```

### Main Concepts

```text
JavaScript Memory Model
│
├── Heap Memory
│
├── Execution Context
│     ├── Lexical Environment
│     ├── this Binding
│     └── Code Execution
│
└── References
```

---

# 2. Heap Memory

> **Heap Memory is a large region of memory used for dynamic memory allocation, where objects, arrays, functions, and other reference-type data are stored.**

Example:

```javascript
const obj = {
  name: "Gourav"
};

function test() {}
```

Conceptually:

```text
obj
 │
 │ Reference
 ▼
Heap
 │
 └── {
       name: "Gourav"
     }


test
 │
 │ Reference
 ▼
Heap
 │
 └── Function Object
```

> **Objects, arrays, and functions are reference values and are conceptually stored in Heap Memory.**

---

# 3. Objects and Arrays in Heap Memory

## Object

```javascript
const obj = {
  name: "Gourav"
};
```

Conceptually:

```text
Execution Context

obj ────────────────┐
                    │
                    ▼
               Heap Memory
               ┌──────────────┐
               │ Object       │
               │              │
               │ name:Gourav  │
               └──────────────┘
```

The variable `obj` holds a reference to the object.

The actual object data is stored in heap memory.

## Array

```javascript
const numbers = [10, 20, 30];
```

Conceptually:

```text
Execution Context

numbers
   │
   │ reference
   ▼

Heap Memory

┌───────────────────┐
│ Array             │
│                   │
│ 0 → 10            │
│ 1 → 20            │
│ 2 → 30            │
└───────────────────┘
```

---

# 4. Functions in Heap Memory

Functions are also objects in JavaScript.

```javascript
function test() {
  console.log("Hello");
}
```

Conceptually:

```text
test
 │
 │ reference
 ▼

Heap Memory

┌─────────────────────┐
│ Function Object     │
│                     │
│ test()              │
│                     │
│ console.log("Hello")│
└─────────────────────┘
```

---

# 5. Lexical Environment

> **A Lexical Environment stores the variables and functions of a scope and also keeps a reference to its outer Lexical Environment.**

Simple structure:

```text
Lexical Environment
│
├── Variables
├── Function bindings/references
└── Outer Environment Reference
```

For objects, arrays, and functions, the environment holds the corresponding binding/reference rather than embedding the whole object directly in the variable binding.

---

# 6. Lexical Environment Example

Consider:

```javascript
function outer() {
  let a = 10;

  function inner() {
    let b = 20;

    console.log(a, b);
  }

  return inner;
}

const myFunc = outer();

myFunc();
```

Output:

```text
10 20
```

When `outer()` runs, conceptually:

```text
outer() Execution Context
│
├── Lexical Environment
│     ├── a = 10
│     │
│     └── inner ───────────────┐
│                              ▼
│                         Function Object
│                         in Heap Memory
│
└── Outer Reference
       │
       ▼
Global Environment
```

Inside `inner()`:

```text
inner Lexical Environment
│
├── b = 20
│
└── Outer Reference
       │
       ▼
outer Lexical Environment
       │
       └── a = 10
```

Therefore, when JavaScript evaluates:

```javascript
console.log(a, b);
```

It searches:

```text
b
↓
Current Lexical Environment
↓
20
```

and:

```text
a
↓
Not in current environment
↓
Check Outer Environment
↓
10
```

Output:

```text
10 20
```

---

# 7. Scope Chain

The outer references form the basis of the **scope chain**.

```text
inner()
│
│ b = 20
▼
outer()
│
│ a = 10
▼
Global Scope
│
▼
End
```

When JavaScript needs a variable:

```text
Current Scope
     ↓
   Found?
  ┌───┴───┐
 Yes      No
  │        │
 Use       ▼
       Outer Scope
           ↓
         Found?
```

> **Scope Chain** = the path JavaScript follows to find a variable from the current scope to outer scopes.

---

# 8. Closure

Consider:

```javascript
function outer() {
  let a = 10;

  function inner() {
    let b = 20;

    console.log(a, b);
  }

  return inner;
}

const myFunc = outer();

myFunc();
```

Normally:

```text
outer()
   ↓
Function finishes
   ↓
Execution Context removed
```

But `inner()` still needs access to `a`.

Therefore, the required outer lexical environment remains reachable.

```text
myFunc
 │
 ▼
inner Function
 │
 │ remembers lexical environment
 ▼
outer Lexical Environment
 │
 └── a = 10
```

> **Closure = a function together with access to its remembered lexical environment.**

---

# 9. `this` Binding

> **For a normal function, the value of `this` is determined when the function is called. The execution context for that invocation has a `this` binding.**

Conceptually:

```text
Execution Context
┌──────────────────────────┐
│ Lexical Environment      │
├──────────────────────────┤
│ this Binding             │
│      │                   │
│      ▼                   │
│      ?                   │
├──────────────────────────┤
│ Code Execution           │
└──────────────────────────┘
```

When the function is invoked, JavaScript determines what `this` should be according to the call style.

---

# 10. Object Method Call

```javascript
function test() {
  console.log(this);
}

const obj = {
  test
};

obj.test();
```

For:

```javascript
obj.test();
```

the object before the dot is `obj`.

Therefore:

```text
this → obj
```

Conceptually:

```text
obj.test()
   │
   ▼
test() Execution Context

┌──────────────────────────┐
│ Lexical Environment      │
├──────────────────────────┤
│ this → obj               │
├──────────────────────────┤
│ Code Execution           │
└──────────────────────────┘
```

### Easy Interview Rule

For:

```javascript
obj.test();
```

look immediately before the dot:

```text
obj.test()
↑
obj
```

Therefore:

```text
this → obj
```

---

# 11. Plain Function Call

Consider:

```javascript
function test() {
  console.log(this);
}

test();
```

There is no object receiver.

The result depends on the environment/mode.

### Non-Strict Browser Script

```text
this → window
```

### Strict Mode

```javascript
"use strict";

function test() {
  console.log(this);
}

test();
```

Result:

```text
this → undefined
```

> ES modules are strict by default.

### Interview Answer

> **For a plain normal-function call, `this` is `undefined` in strict mode. In a non-strict browser script, it generally becomes the global object (`window`).**

---

# 12. Function Reference — `obj.test()` vs `x()`

Consider:

```javascript
function test() {
  console.log(this);
}

const obj = {
  test
};

const x = obj.test;

x();
```

Important:

```javascript
const x = obj.test;
```

does **not** copy the object relationship.

It only gives `x` a reference to the same function.

```text
obj
│
└── test ────────────┐
                     │
                     ▼
                  Function
                     ▲
                     │
x ───────────────────┘
```

### `obj.test()`

```javascript
obj.test();
```

The receiver is `obj`.

```text
this → obj
```

### `x()`

```javascript
x();
```

The call is now simply:

```text
x()
```

The original object receiver is lost.

In strict mode:

```text
this → undefined
```

In a non-strict browser script:

```text
this → window
```

> **`x` is a variable containing a function reference. It is not an object receiver.**

Compare:

```javascript
x();
```

with:

```javascript
obj.x();
```

Only the second one has an object receiver.

---

# 13. Why Doesn't a Normal Function Permanently Store `this`?

Because the same function can be called by different objects.

```javascript
function show() {
  console.log(this.name);
}

const user1 = {
  name: "Gourav",
  show
};

const user2 = {
  name: "Rahul",
  show
};
```

Both objects reference the same function:

```text
user1.show ──────┐
                 │
                 ▼
              Function
                 ▲
                 │
user2.show ──────┘
```

Now:

```javascript
user1.show();
```

```text
this → user1

Output → Gourav
```

But:

```javascript
user2.show();
```

```text
this → user2

Output → Rahul
```

> **A normal function's `this` is determined by how it is invoked, not by the object where the function was originally created/stored.**

---

# 14. Lexical Environment vs `this`

Do not confuse:

```text
Lexical Environment
```

with:

```text
this
```

Conceptually:

```text
Execution Context
│
├── Lexical Environment
│     ├── Local Variables
│     ├── Function Bindings
│     └── Outer Reference
│
└── this Binding
       │
       └── Depends on invocation
           for normal functions
```

Example:

```javascript
function show() {
  let age = 24;

  console.log(age);
  console.log(this.name);
}
```

Conceptually:

```text
Execution Context
│
├── Lexical Environment
│     │
│     └── age = 24
│
└── this Binding
       │
       └── some object / undefined etc.
```

---

# 15. Scope vs `this`

### Scope

Determined lexically by where the code is written.

```text
Where was the function written?
        ↓
Lexical Scope
```

### `this` for Normal Functions

Usually determined by how the function is called.

```text
How was the function called?
        ↓
this
```

### Memory Trick

```text
Scope
  ↓
WHERE written


this
  ↓
HOW called
```

---

# 16. Arrow Functions and `this`

Arrow functions do **not** create their own `this` binding.

Example:

```javascript
const obj = {
  name: "Gourav",

  show() {
    const arrow = () => {
      console.log(this.name);
    };

    arrow();
  }
};

obj.show();
```

`show()` is called as:

```text
obj.show()
```

Therefore:

```text
show() this → obj
```

The arrow function captures that surrounding `this`.

```text
obj.show()
   │
   ▼
show Execution Context
   │
   └── this → obj
          │
          ▼
       Arrow Function
          │
          └── Uses outer this
                 │
                 ▼
                obj
```

Output:

```text
Gourav
```

> **Arrow functions use the `this` value from their surrounding lexical context.**

---

# 17. Complete Memory Model

```text
                    JavaScript Program
                           │
                           ▼
                    Execution Context
                           │
            ┌──────────────┼──────────────┐
            │              │              │
            ▼              ▼              ▼
   Lexical Environment  this Binding  Code Execution
            │              │
            │              ▼
            │         Current this
            │         for invocation
            ▼
       Variables
       Function refs
       Outer Reference
            │
            │ References
            ▼
                    Heap Memory
            ┌────────────────────────┐
            │ Objects                │
            │ Arrays                 │
            │ Functions              │
            │ Other dynamic data     │
            └────────────────────────┘
```

---

# 18. Heap + Lexical Environment + `this` Example

```javascript
const user = {
  name: "Gourav",

  show() {
    let message = "Hello";

    console.log(message);
    console.log(this.name);
  }
};

user.show();
```

Conceptually:

```text
Heap Memory
│
└── user Object
     │
     ├── name → "Gourav"
     │
     └── show → Function
```

When:

```javascript
user.show();
```

runs:

```text
show() Execution Context
│
├── Lexical Environment
│     │
│     └── message = "Hello"
│
├── this Binding
│     │
│     └── user
│
└── Code Execution
       │
       ├── console.log(message)
       │
       └── console.log(this.name)
```

Output:

```text
Hello
Gourav
```

---

# 19. Quick Interview Definitions

| Concept                 | Simple Definition                                                           |
| ----------------------- | --------------------------------------------------------------------------- |
| **Heap Memory**         | Memory area used for dynamically allocated objects, arrays, functions, etc. |
| **Execution Context**   | Environment in which JavaScript code is executed                            |
| **Lexical Environment** | Stores scope bindings and an outer-environment reference                    |
| **Reference**           | Value/link used to access an object/function stored elsewhere in memory     |
| **`this` Binding**      | The `this` value associated with a function invocation                      |
| **Scope Chain**         | Search path from current lexical environment to outer environments          |
| **Closure**             | Function together with access to its remembered lexical environment         |

---

# 20. Most Important Interview Rules

### Heap Memory

```text
Objects
Arrays
Functions
   ↓
Heap Memory
```

### Lexical Environment

```text
Variables
Function bindings
Outer Reference
   ↓
Lexical Environment
```

### Normal Function `this`

```text
How was the function called?
           ↓
      Determine this
```

### Method Call

```javascript
obj.test();
```

```text
this → obj
```

### Plain Function

```javascript
test();
```

```text
Strict mode
     ↓
undefined

Non-strict browser script
     ↓
window
```

### Function Reference

```javascript
const x = obj.test;

x();
```

```text
Original obj receiver lost
```

### Arrow Function

```text
No own this
    ↓
Uses surrounding lexical this
```

---

# 21. Final Memory Trick

```text
                JavaScript Memory
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
   Execution Context           Heap Memory
          │                         │
          ├── Lexical Env           ├── Objects
          │                         ├── Arrays
          ├── this Binding          └── Functions
          │
          └── Code Execution
```

Remember:

```text
Lexical Environment
        ↓
"What variables can I access?"


this
        ↓
"For a normal function, how was I called?"


Heap
        ↓
"Where are objects/functions dynamically stored?"
```

# Final One-Line Revision

> **Heap stores objects, arrays, and functions → lexical environments maintain scope bindings and outer references → execution contexts manage function execution and `this` → normal-function `this` depends on how the function is called → `obj.fn()` gives `this = obj` → extracting the function loses that receiver → arrow functions capture `this` from their surrounding context.**

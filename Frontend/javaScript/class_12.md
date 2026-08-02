# JavaScript Interview Questions — JavaScript Memory Model

---

# 1. JavaScript Memory Model

A simple way to understand JavaScript memory:

```text
                    Memory
           ┌──────────────────────┐
           │ Heap Memory          │
           │                      │
           │ Objects              │
           │ Arrays               │
           │ Functions            │
           └──────────────────────┘

                    ▲
                    │ References
                    │

           ┌──────────────────────┐
           │ Execution Context    │
           │                      │
           │ Lexical Environment  │
           │ this Binding         │
           │ Code Execution       │
           └──────────────────────┘
```

Main concepts:

```text
JavaScript Memory Model
│
├── Heap Memory
├── Execution Context
│      ├── Lexical Environment
│      ├── this Binding
│      └── Code Execution
│
└── References
```

---

# 2. Heap Memory

> **Heap Memory is a large region of memory used for dynamic memory allocation, where objects, arrays, functions, and other reference-type data are stored.**

Example:

```js
const obj = {
    name: "Gourav"
};

function test() {}
```

Conceptually:

```text
Heap Memory
│
├── Object
│      │
│      └── name → "Gourav"
│
└── Function Object
       │
       └── test()
```

So we can think:

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
```

And:

```text
test
 │
 │ Reference
 ▼
Heap
 │
 └── Function Object
```

---

# 3. Objects in Heap Memory

Consider:

```js
const obj = {
    name: "Gourav"
};
```

Conceptually:

```text
Execution Context
│
│
├── obj ──────────────┐
│                     │
                      ▼
                 Heap Memory
                 ┌──────────────┐
                 │ Object       │
                 │              │
                 │ name:Gourav  │
                 └──────────────┘
```

The variable:

```js
obj
```

holds a reference to the object.

The actual object data is stored in heap memory.

---

# 4. Arrays in Heap Memory

Example:

```js
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

# 5. Functions in Heap Memory

Functions are also objects in JavaScript.

Example:

```js
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

So:

> **Objects, arrays, and functions are reference values and are conceptually stored in Heap Memory.**

---

# 6. What is a Lexical Environment?

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

# 7. Lexical Environment Example

Consider:

```js
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

Let's understand the memory relationship.

---

# 8. `outer()` Lexical Environment

When:

```js
outer();
```

runs, conceptually:

```text
outer() Execution Context
│
├── Lexical Environment
│      │
│      ├── a = 10
│      │
│      └── inner ───────────────┐
│                               │
│                               ▼
│                          Function Object
│                          in Heap Memory
│
└── Outer Reference
       │
       ▼
Global Environment
```

---

# 9. `inner()` Lexical Environment

Inside:

```js
function inner() {

    let b = 20;

    console.log(a, b);
}
```

`inner()` has access to:

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

Therefore:

```js
console.log(a, b);
```

can find:

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

# 10. Connection With Scope Chain

The outer references form the basis of the scope chain.

```text
inner()
│
│ b = 20
│
▼
outer()
│
│ a = 10
│
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
Use      ▼
      Outer Scope
          ↓
        Found?
```

This process is called the:

> **Scope Chain**

---

# 11. Connection With Closure

Consider again:

```js
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

But:

```js
inner()
```

still needs:

```js
a
```

Therefore the required outer lexical environment remains reachable.

Conceptually:

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

This gives us a:

> **Closure**

---

# 12. What is `this` Binding?

> **For a normal function, the value of `this` is determined when the function is called. The execution context for that invocation has a `this` binding.**

Simple conceptual representation:

```text
Execution Context
┌──────────────────────────┐
│                          │
│ Lexical Environment      │
│                          │
├──────────────────────────┤
│                          │
│ this Binding             │
│      │                   │
│      ▼                   │
│      ?                   │
│                          │
├──────────────────────────┤
│                          │
│ Code Execution           │
│                          │
└──────────────────────────┘
```

When the function is invoked, JavaScript determines what `this` should be according to the call style.

---

# 13. Example — Object Method

Consider:

```js
function test() {
    console.log(this);
}

const obj = {
    test
};

obj.test();
```

Ask:

```text
Object before the dot?
        ↓
       YES
        ↓
       obj
```

Therefore, for this normal method call:

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

---

# 14. Easy Rule for Normal Method Calls

For a normal function called like:

```js
obj.test();
```

look immediately before the dot:

```text
obj.test()
↑
│
obj
```

So:

```text
this → obj
```

This is a very useful interview shortcut.

---

# 15. Plain Function Call

Consider:

```js
function test() {
    console.log(this);
}

test();
```

There is no object receiver:

```text
test()
↑
│
No object before a dot
```

The result depends on the JavaScript environment/mode.

### Non-strict browser script

A plain function call commonly gets:

```text
this → window
```

### Strict mode

```js
"use strict";

function test() {
    console.log(this);
}

test();
```

gives:

```text
this → undefined
```

ES modules are strict by default.

So for interviews, don't simply say:

> `test()` always gives `window`.

Better answer:

> **For a plain normal-function call, `this` is `undefined` in strict mode. In a non-strict browser script, it generally becomes the global object (`window`).**

---

# 16. Function Reference Problem

Consider:

```js
function test() {
    console.log(this);
}

const obj = {
    test
};

const x = obj.test;

x();
```

Initially:

```text
obj
│
└── test ─────────────┐
                      │
                      ▼
                  Function
                      ▲
                      │
x ────────────────────┘
```

Important:

```js
const x = obj.test;
```

does NOT copy the object relationship.

It only gives `x` a reference to the same function.

---

# 17. `obj.test()` vs `x()`

When we call:

```js
obj.test();
```

the receiver is:

```text
obj
```

Therefore:

```text
this → obj
```

But when:

```js
x();
```

runs, the call is no longer:

```text
obj.test()
```

It is simply:

```text
x()
```

So:

```text
Original object receiver lost
```

In strict mode:

```text
this → undefined
```

In a non-strict browser script:

```text
this → window
```

---

# 18. Important Correction — `x` is NOT the `this` Object

It would be incorrect to think:

```text
x()
↑
x is before ()
↓
this → x
```

No.

`x` is a variable containing a function reference.

It is not an object receiver in a member call.

Compare:

```js
x();
```

with:

```js
obj.x();
```

Only the second one has an object receiver:

```text
obj.x()
↑
obj
```

---

# 19. Memory-Level Example

Consider:

```js
const obj = {
    name: "Gourav",

    test() {
        console.log(this.name);
    }
};

const x = obj.test;
```

Memory:

```text
Execution Context

obj ───────────────────┐
                       │
x ───────────────┐     │
                 │     │
                 ▼     ▼

             Heap Memory

      ┌─────────────────────┐
      │ obj                 │
      │                     │
      │ name → "Gourav"     │
      │                     │
      │ test ────────┐      │
      └──────────────│──────┘
                     │
                     ▼
              Function Object
                     ▲
                     │
                     └──── x
```

Both:

```js
obj.test
```

and:

```js
x
```

refer to the same function object.

But `this` is not permanently stored as:

```text
this → obj
```

inside that normal function.

---

# 20. Why Doesn't a Normal Function Permanently Store `this`?

Because the same function can be called by different objects.

Example:

```js
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

```js
user1.show();
```

gives:

```text
this → user1

Output → Gourav
```

But:

```js
user2.show();
```

gives:

```text
this → user2

Output → Rahul
```

Same function.

Different `this`.

Therefore:

> **A normal function's `this` is determined by how it is invoked, not by the object where the function was originally created/stored.**

---

# 21. Execution Context + `this`

Suppose:

```js
user1.show();
```

JavaScript creates a Function Execution Context for `show()`.

Conceptually:

```text
show() Execution Context

┌──────────────────────────────┐
│ Lexical Environment          │
├──────────────────────────────┤
│ this → user1                 │
├──────────────────────────────┤
│ Code                         │
│                              │
│ console.log(this.name)       │
└──────────────────────────────┘
```

Later:

```js
user2.show();
```

creates another execution context:

```text
show() Execution Context

┌──────────────────────────────┐
│ Lexical Environment          │
├──────────────────────────────┤
│ this → user2                 │
├──────────────────────────────┤
│ Code                         │
│                              │
│ console.log(this.name)       │
└──────────────────────────────┘
```

Same function code.

Different invocation.

Different `this`.

---

# 22. Lexical Environment vs `this`

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
│      │
│      ├── Local Variables
│      ├── Function Bindings
│      └── Outer Reference
│
└── this Binding
       │
       └── Depends on invocation
           for normal functions
```

For example:

```js
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
│      │
│      └── age = 24
│
└── this Binding
       │
       └── some object / undefined etc.
```

---

# 23. Important Difference — Scope vs `this`

### Scope

Determined lexically by where code is written.

```text
Where was the function written?
        ↓
Lexical Scope
```

### `this` for normal functions

Usually determined by how the function is called.

```text
How was the function called?
        ↓
this
```

Memory trick:

```text
Scope
 ↓
WHERE written


this
 ↓
HOW called
```

---

# 24. Arrow Functions Are Different

Arrow functions do not create their own `this` binding.

Example:

```js
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

The arrow function then captures that surrounding `this`.

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

---

# 25. Complete Memory Model

```text
                    JavaScript Program
                           │
                           ▼
                  Execution Context
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
 Lexical Environment   this Binding     Code Execution
          │                │
          │                │
          ▼                ▼
   Variables          Current this
   Function refs      for invocation
   Outer Reference
          │
          │ References
          ▼
                    Heap Memory
          ┌────────────────────────┐
          │                        │
          │ Objects                │
          │ Arrays                 │
          │ Functions              │
          │ Other dynamic data     │
          │                        │
          └────────────────────────┘
```

---

# 26. Heap + Lexical Environment + `this` Example

```js
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

```js
user.show();
```

runs:

```text
show() Execution Context
│
├── Lexical Environment
│      │
│      └── message = "Hello"
│
├── this Binding
│      │
│      └── user
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

# 27. Quick Interview Definitions

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

# 28. Most Important Interview Rules

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

```js
obj.test();
```

```text
this → obj
```

### Plain Function

```js
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

```js
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

# 29. Final Memory Trick

```text
               JavaScript Memory
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
   Execution Context            Heap Memory
          │                         │
          ├── Lexical Env           ├── Objects
          │                         ├── Arrays
          ├── this Binding          └── Functions
          │
          └── Code Execution
```

And remember:

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

**Heap stores objects, arrays, and functions → lexical environments maintain scope bindings and outer references → execution contexts manage function execution and `this` → normal-function `this` depends on how the function is called → `obj.fn()` gives `this = obj` → extracting the function loses that receiver → arrow functions capture `this` from their surrounding context.**

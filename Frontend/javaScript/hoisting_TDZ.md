# Hoisting and Temporal Dead Zone (TDZ)

## What is Hoisting?

> **Hoisting is JavaScript's behavior where declarations are processed before the code is executed, during the creation/setup phase of an execution context.**

Because declarations are processed before execution, variables and functions can behave as if JavaScript already knows about them before reaching their declaration line.

However, **`var`, `let`, `const`, and function declarations behave differently during hoisting.**

---

# Hoisting with `var`

Consider:

```js id="a07rmw"
console.log(a);

var a = 10;

console.log(a);
```

## Step 1 — Memory Creation Phase

During the Memory Creation Phase, JavaScript finds:

```js id="lws9mz"
var a;
```

For `var`, JavaScript creates the variable and initializes it with:

```text id="t7cnv6"
a → undefined
```

So:

```text id="p8wfhg"
Memory Creation Phase

a → undefined
```

---

# Step 2 — Code Execution Phase

Now JavaScript starts executing code line by line.

### Line 1

```js id="x9cn6j"
console.log(a);
```

JavaScript checks memory:

```text id="uttrgj"
a → undefined
```

Therefore:

```text id="wwr5ru"
Output:

undefined
```

---

### Line 2

```js id="qj82gr"
var a = 10;
```

Now the value is assigned:

```text id="vy54vb"
Memory

a → 10
```

---

### Line 3

```js id="29lbdq"
console.log(a);
```

JavaScript checks memory:

```text id="9wkj61"
a → 10
```

Output:

```text id="x5kwu1"
10
```

---

# Complete `var` Execution Flow

```text id="2rxh2p"
                Code Using var

                console.log(a);
                var a = 10;
                console.log(a);

                        │
                        ▼
──────────────────────────────────
        Memory Creation Phase
──────────────────────────────────

                a → undefined

                        │
                        ▼
──────────────────────────────────
         Code Execution Phase
──────────────────────────────────

Line 1

console.log(a)
        ↓
   undefined


Memory

a → undefined


──────────────────────────────────

Line 2

var a = 10
        ↓

Memory

a → 10


──────────────────────────────────

Line 3

console.log(a)
        ↓
       10
```

---

# Hoisting with `let`

Now consider:

```js id="ddgfez"
console.log(a);

let a = 10;

console.log(a);
```

`let` is also **hoisted**, but it behaves differently from `var`.

During environment setup, the binding for `a` exists, but it is **not initialized yet**.

Conceptually:

```text id="y9xglz"
a → <uninitialized>
```

The period where the variable exists but cannot be accessed is called the:

> **Temporal Dead Zone (TDZ)**

---

# What is Temporal Dead Zone (TDZ)?

> **The Temporal Dead Zone is the period between entering a scope and the point where a `let` or `const` declaration is initialized, during which accessing that variable throws a `ReferenceError`.**

Simple idea:

```text id="7nndc6"
Scope Starts
     │
     ▼
Variable Binding Created
     │
     ▼
┌─────────────────────────┐
│           TDZ           │
│                         │
│ Cannot access variable  │
└─────────────────────────┘
     │
     ▼
Declaration Executes
let a = 10
     │
     ▼
TDZ Ends
     │
     ▼
Can Access a
```

---

# Step 1 — Memory Creation Phase with `let`

Code:

```js id="6al7z1"
console.log(a);

let a = 10;

console.log(a);
```

During setup:

```text id="9dhc0j"
a → <uninitialized>

TDZ Starts
```

Unlike `var`:

```text id="cndgwc"
var a

a → undefined
```

With `let`:

```text id="1moxzc"
let a

a → <uninitialized>
```

---

# Step 2 — Code Execution Phase

### Line 1

```js id="q6l3ml"
console.log(a);
```

JavaScript knows that `a` exists.

But `a` is currently in the **TDZ**.

Therefore:

```text id="9cpnln"
ReferenceError:
Cannot access 'a' before initialization
```

The program stops at this point.

Therefore:

```js id="6mbysx"
let a = 10;
```

doesn't execute.

And:

```js id="f0o47x"
console.log(a);
```

doesn't execute either.

---

# Complete `let` Execution Flow

```text id="waz3s6"
                Code Using let

                console.log(a);

                let a = 10;

                console.log(a);

                        │
                        ▼
──────────────────────────────────
        Memory Creation Phase
──────────────────────────────────

             a → <uninitialized>

                  TDZ Starts

                        │
                        ▼
──────────────────────────────────
         Code Execution Phase
──────────────────────────────────

Line 1

console.log(a)

        ↓

ReferenceError

Cannot access 'a'
before initialization

        ↓

Program Stops ❌


Line 2 → Not Executed

Line 3 → Not Executed
```

---

# What Happens When `let` Declaration is Reached?

Consider a valid example:

```js id="4pnobq"
let a = 10;

console.log(a);
```

Before execution reaches the declaration:

```text id="a9pcxy"
a → <uninitialized>

TDZ
```

When:

```js id="8x0tah"
let a = 10;
```

executes:

```text id="r9dk9q"
a → 10

TDZ Ends
```

Now:

```js id="qhvgu7"
console.log(a);
```

works.

Output:

```text id="g9qmpn"
10
```

So:

```text id="j1dcmg"
Scope Starts
     ↓
a binding created
     ↓
<uninitialized>
     ↓
     TDZ
     ↓
let a = 10 executes
     ↓
a → 10
     ↓
TDZ Ends
     ↓
Can use a
```

---

# `var` vs `let` During Hoisting

This is a **very important interview difference**.

| `var`                         | `let`                               |
| ----------------------------- | ----------------------------------- |
| Hoisted                       | Hoisted                             |
| Initialized with `undefined`  | Remains uninitialized initially     |
| Can access before declaration | Cannot access before initialization |
| Returns `undefined`           | Throws `ReferenceError`             |
| No TDZ in the same sense      | Has TDZ                             |
| Function scoped               | Block scoped                        |

Example:

```js id="utkbai"
console.log(a);
var a = 10;
```

Output:

```text id="iwlcp8"
undefined
```

But:

```js id="2z98vp"
console.log(b);
let b = 20;
```

Output:

```text id="fn60ps"
ReferenceError
```

---

# What About `const`?

`const` behaves similarly to `let` regarding hoisting and TDZ.

```js id="4gs3yn"
console.log(a);

const a = 10;
```

Result:

```text id="23p12z"
ReferenceError:
Cannot access 'a' before initialization
```

So:

```text id="vtmz67"
let
 ↓
Hoisted
 ↓
Uninitialized
 ↓
TDZ


const
 ↓
Hoisted
 ↓
Uninitialized
 ↓
TDZ
```

---

# `var` vs `let` vs `const`

| Feature                     | `var`           | `let`            | `const`          |
| --------------------------- | --------------- | ---------------- | ---------------- |
| Hoisted                     | ✅ Yes           | ✅ Yes            | ✅ Yes            |
| Initially initialized       | `undefined`     | ❌ No             | ❌ No             |
| TDZ                         | ❌ No            | ✅ Yes            | ✅ Yes            |
| Access before declaration   | `undefined`     | `ReferenceError` | `ReferenceError` |
| Scope                       | Function        | Block            | Block            |
| Reassignment                | ✅ Yes           | ✅ Yes            | ❌ No             |
| Redeclaration in same scope | ✅ Generally yes | ❌ No             | ❌ No             |

---

# Important Interview Question: Are `let` and `const` Hoisted?

**Yes.**

A common mistake is saying:

> "`let` and `const` are not hoisted." ❌

They **are hoisted**, but unlike `var`, they are not initialized to `undefined` during environment setup.

Instead:

```text id="9hmlhl"
let / const
     ↓
Binding Created
     ↓
Uninitialized
     ↓
TDZ
     ↓
Declaration Executes
     ↓
Initialized
```

That's why accessing them before initialization throws:

```text id="z7cp33"
ReferenceError
```

---

# How Can We Prove `let` is Hoisted?

Consider:

```js id="jyj7ru"
let a = 100;

{
    console.log(a);

    let a = 200;
}
```

You might think:

```text id="v4q28s"
console.log(a)
should find outer a = 100
```

But it throws:

```text id="c79r7f"
ReferenceError:
Cannot access 'a' before initialization
```

Why?

Because the inner:

```js id="1h0y5w"
let a = 200;
```

creates a binding for `a` for the entire block.

Before its declaration executes, that inner `a` is in the **TDZ**.

Conceptually:

```text id="qq5u90"
Global Scope

a → 100


        ↓ Enter Block


Block Scope

a → <uninitialized>
        ↑
        │
       TDZ


console.log(a)
       ↓
JavaScript finds INNER a
       ↓
But it is uninitialized
       ↓
ReferenceError
```

This demonstrates that the inner `let` binding exists before the declaration line is evaluated.

---

# Hoisting with Function Declarations

Function declarations are also hoisted.

Example:

```js id="ot0cxi"
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text id="76mv39"
Hello
```

Why?

Because the function declaration is made available before normal statement execution.

Conceptually:

```text id="iwn8q6"
Creation / Setup

greet → function(){...}
```

Therefore:

```js id="g1ldq7"
greet();
```

works even though the function declaration appears later in the source code.

---

# Function Declaration vs Function Expression

Important interview question.

### Function Declaration

```js id="1o0zxp"
greet();

function greet() {
    console.log("Hello");
}
```

Works:

```text id="lcc6my"
Hello
```

---

### Function Expression with `var`

```js id="om5ubj"
greet();

var greet = function () {
    console.log("Hello");
};
```

During creation:

```text id="vt0ycc"
greet → undefined
```

Therefore:

```js id="eptu2b"
greet();
```

is effectively trying to call:

```js id="eq6jwk"
undefined();
```

So you'll get a runtime error such as:

```text id="b72jhr"
TypeError:
greet is not a function
```

---

### Function Expression with `let`

```js id="k6iw7u"
greet();

let greet = function () {
    console.log("Hello");
};
```

`greet` is in the TDZ.

Therefore:

```text id="sfjdzl"
ReferenceError:
Cannot access 'greet' before initialization
```

---

# Function Hoisting Comparison

```text id="pgj1pa"
function greet() {}
        ↓
Function available during setup
        ↓
Can call before declaration ✅


var greet = function() {}
        ↓
greet → undefined initially
        ↓
Calling before assignment ❌
TypeError


let greet = function() {}
        ↓
greet → uninitialized
        ↓
TDZ
        ↓
Calling before initialization ❌
ReferenceError
```

---

# What Actually Gets Hoisted?

For interview purposes, don't imagine JavaScript physically moving code to the top.

For example:

```js id="8p2n5l"
console.log(a);

var a = 10;
```

JavaScript does **not literally rewrite it** as:

```js id="pt0t5c"
var a;

console.log(a);

a = 10;
```

That's only a useful mental model.

More accurately:

> **Declarations are processed and bindings are created as part of setting up the execution context before normal statement execution begins.**

---

# Important Interview Questions

## 1. What is Hoisting?

> **Hoisting is JavaScript's behavior where declarations are processed before code execution as part of execution-context setup.**

---

## 2. Is `var` Hoisted?

**Yes.**

It is initialized with:

```js id="0wz63j"
undefined
```

Therefore:

```js id="umf7g6"
console.log(a);
var a = 10;
```

outputs:

```text id="idp9d3"
undefined
```

---

## 3. Are `let` and `const` Hoisted?

**Yes.**

But they remain uninitialized until their declaration is evaluated.

Therefore they stay in the:

> **Temporal Dead Zone**

---

## 4. What is TDZ?

> **TDZ is the period between entering a scope and the point where a `let` or `const` binding is initialized. Accessing the variable during this period throws a `ReferenceError`.**

---

## 5. When Does TDZ Start?

Conceptually, when execution enters the variable's scope.

```text id="8uy9qa"
Scope Begins
     ↓
TDZ Starts
```

---

## 6. When Does TDZ End?

When execution evaluates the declaration and initializes the binding.

```js id="qv4j4u"
let a = 10;
```

After this executes:

```text id="2v1mct"
TDZ Ends
```

---

# Quick Interview Revision

| Concept                                  | Definition                                                     |
| ---------------------------------------- | -------------------------------------------------------------- |
| **Hoisting**                             | Declarations are processed before normal code execution        |
| **`var` Hoisting**                       | Binding is created and initialized with `undefined`            |
| **`let` Hoisting**                       | Binding is created but remains uninitialized                   |
| **`const` Hoisting**                     | Binding is created but remains uninitialized                   |
| **TDZ**                                  | Period where `let`/`const` exists but can't be accessed        |
| **TDZ Error**                            | `ReferenceError`                                               |
| **Function Declaration**                 | Function is available before its source declaration is reached |
| **Function Expression with `var`**       | Variable starts as `undefined`                                 |
| **Function Expression with `let/const`** | Variable is in TDZ                                             |

---

# Final Mental Model

```text id="i1brg1"
              Execution Context Created
                       │
                       ▼
             Environment Setup
                       │
          ┌────────────┼────────────┐
          │            │            │
         var          let          const
          │            │            │
          ▼            ▼            ▼
     undefined    uninitialized  uninitialized
                       │            │
                       └─────┬──────┘
                             ▼
                            TDZ
                             │
                             ▼
                  Declaration Executes
                             │
                             ▼
                       Initialized
```

## One-Line Interview Trick

**`var` → Hoisted + `undefined`**

**`let` → Hoisted + TDZ**

**`const` → Hoisted + TDZ**

**Function Declaration → Hoisted with function available**

**TDZ → Cannot access before initialization → `ReferenceError`**




JavaScript — Hoisting & Temporal Dead Zone (TDZ)

1. What is Hoisting?

Hoisting is JavaScript's behavior where declarations are processed before the code is executed, during the creation/setup phase of an execution context.

Because declarations are processed before execution, variables and functions can behave as if JavaScript already knows about them before reaching their declaration line.

var, let, const, and function declarations behave differently during hoisting.

Hoisting with var

console.log(a);

var a = 10;

console.log(a);

Memory Creation Phase

JavaScript finds:

var a;

For var, JavaScript creates the variable and initializes it with:

a → undefined

Code Execution Phase

console.log(a);

Output:

undefined

Then:

var a = 10;

Memory becomes:

a → 10

Then:

console.log(a);

Output:

10

var Flow

Code Using var
      ↓
Memory Creation Phase
      ↓
a → undefined
      ↓
Code Execution Phase
      ↓
console.log(a) → undefined
      ↓
a = 10
      ↓
console.log(a) → 10

Hoisting with let

console.log(a);

let a = 10;

console.log(a);

let is also hoisted, but it behaves differently from var.

During environment setup:

a → <uninitialized>

The period where the variable exists but cannot be accessed is called the:

Temporal Dead Zone (TDZ)

2. What is Temporal Dead Zone (TDZ)?

The Temporal Dead Zone is the period between entering a scope and the point where a let or const declaration is initialized, during which accessing that variable throws a ReferenceError.

TDZ Flow

Scope Starts
     ↓
Variable Binding Created
     ↓
┌──────────────────────┐
│         TDZ          │
│                      │
│ Cannot access value  │
└──────────────────────┘
     ↓
Declaration Executes
     ↓
let a = 10
     ↓
TDZ Ends
     ↓
Can Access a

let — Memory Creation Phase

console.log(a);

let a = 10;

console.log(a);

During setup:

a → <uninitialized>
TDZ Starts

Unlike var:

var a
↓
a → undefined

With let:

let a
↓
a → <uninitialized>

let — Code Execution Phase

When JavaScript reaches:

console.log(a);

JavaScript knows that a exists, but a is currently in the TDZ.

Result:

ReferenceError:
Cannot access 'a' before initialization

The program stops at this point.

Therefore:

let a = 10;

and the following:

console.log(a);

do not execute.

Complete let Flow

Code Using let
      ↓
Memory Creation Phase
      ↓
a → <uninitialized>
      ↓
TDZ Starts
      ↓
console.log(a)
      ↓
ReferenceError
      ↓
Program Stops ❌

When Does TDZ End?

Consider:

let a = 10;

console.log(a);

Before execution reaches the declaration:

a → <uninitialized>
TDZ

When:

let a = 10;

executes:

a → 10
TDZ Ends

Now:

console.log(a);

works.

Output:

10

Flow

Scope Starts
    ↓
a binding created
    ↓
<uninitialized>
    ↓
TDZ
    ↓
let a = 10 executes
    ↓
a → 10
    ↓
TDZ Ends
    ↓
Can use a

var vs let During Hoisting

var

let

Hoisted

Hoisted

Initialized with undefined

Remains uninitialized initially

Can access before declaration

Cannot access before initialization

Returns undefined

Throws ReferenceError

No TDZ in the same sense

Has TDZ

Function scoped

Block scoped

Example:

console.log(a);
var a = 10;

Output:

undefined

But:

console.log(b);
let b = 20;

Output:

ReferenceError

What About const?

const behaves similarly to let regarding hoisting and TDZ.

console.log(a);

const a = 10;

Result:

ReferenceError:
Cannot access 'a' before initialization

Conceptually:

let
 ↓
Hoisted
 ↓
Uninitialized
 ↓
TDZ

const
 ↓
Hoisted
 ↓
Uninitialized
 ↓
TDZ

var vs let vs const

Feature

var

let

const

Hoisted

✅ Yes

✅ Yes

✅ Yes

Initially initialized

undefined

❌ No

❌ No

TDZ

❌ No

✅ Yes

✅ Yes

Access before declaration

undefined

ReferenceError

ReferenceError

Scope

Function

Block

Block

Reassignment

✅ Yes

✅ Yes

❌ No

Redeclaration in same scope

✅ Generally yes

❌ No

❌ No

Important Interview Question: Are let and const Hoisted?

Yes.

A common mistake is:

"let and const are not hoisted." ❌

Correct:

They are hoisted, but unlike var, they are not initialized to undefined during environment setup.

Instead:

let / const
     ↓
Binding Created
     ↓
Uninitialized
     ↓
TDZ
     ↓
Declaration Executes
     ↓
Initialized

Accessing them before initialization throws:

ReferenceError

How Can We Prove let is Hoisted?

let a = 100;

{
    console.log(a);

    let a = 200;
}

You might think:

console.log(a)
should find outer a = 100

But it throws:

ReferenceError:
Cannot access 'a' before initialization

Why?

The inner:

let a = 200;

creates a binding for a for the entire block.

Before its declaration executes, that inner a is in the TDZ.

Conceptually:

Global Scope
    a → 100
        ↓
Enter Block
        ↓
Block Scope
    a → <uninitialized>
        ↑
       TDZ
        ↓
console.log(a)
        ↓
JavaScript finds INNER a
        ↓
But it is uninitialized
        ↓
ReferenceError

This demonstrates that the inner let binding exists before the declaration line is evaluated.

Hoisting with Function Declarations

Function declarations are also hoisted.

greet();

function greet() {
    console.log("Hello");
}

Output:

Hello

The function declaration is made available before normal statement execution.

Conceptually:

Creation / Setup
      ↓
greet → function(){...}

Therefore:

greet();

works even though the function declaration appears later in the source code.

Function Declaration vs Function Expression

Function Declaration

greet();

function greet() {
    console.log("Hello");
}

Works:

Hello

Function Expression with var

greet();

var greet = function () {
    console.log("Hello");
};

During creation:

greet → undefined

Therefore:

greet();

is effectively trying to call:

undefined();

Result:

TypeError:
greet is not a function

Function Expression with let

greet();

let greet = function () {
    console.log("Hello");
};

greet is in the TDZ.

Result:

ReferenceError:
Cannot access 'greet' before initialization

Function Hoisting Comparison

function greet() {}
        ↓
Function available during setup
        ↓
Can call before declaration ✅

var greet = function() {}
        ↓
greet → undefined initially
        ↓
Calling before assignment ❌
TypeError

let greet = function() {}
        ↓
greet → uninitialized
        ↓
TDZ
        ↓
Calling before initialization ❌
ReferenceError

What Actually Gets Hoisted?

For interview purposes, don't imagine JavaScript physically moving code to the top.

Example:

console.log(a);

var a = 10;

JavaScript does not literally rewrite it as:

var a;

console.log(a);

a = 10;

That is only a useful mental model.

More accurately:

Declarations are processed and bindings are created as part of setting up the execution context before normal statement execution begins.

Important Interview Questions

1. What is Hoisting?

Hoisting is JavaScript's behavior where declarations are processed before code execution as part of execution-context setup.

2. Is var Hoisted?

Yes.

It is initialized with:

undefined

Therefore:

console.log(a);
var a = 10;

outputs:

undefined

3. Are let and const Hoisted?

Yes.

But they remain uninitialized until their declaration is evaluated and therefore stay in the TDZ.

4. What is TDZ?

TDZ is the period between entering a scope and the point where a let or const binding is initialized. Accessing the variable during this period throws a ReferenceError.

5. When Does TDZ Start?

Conceptually, when execution enters the variable's scope.

Scope Begins
     ↓
TDZ Starts

6. When Does TDZ End?

When execution evaluates the declaration and initializes the binding:

let a = 10;

After this executes:

TDZ Ends

Quick Interview Revision

Concept

Definition

Hoisting

Declarations are processed before normal code execution

var Hoisting

Binding is created and initialized with undefined

let Hoisting

Binding is created but remains uninitialized

const Hoisting

Binding is created but remains uninitialized

TDZ

Period where let/const exists but can't be accessed

TDZ Error

ReferenceError

Function Declaration

Function is available before its source declaration is reached

Function Expression with var

Variable starts as undefined

Function Expression with let/const

Variable is in TDZ

Final Mental Model

Execution Context Created
        ↓
Environment Setup
        ↓
   ┌────┼────┐
   │    │    │
  var  let  const
   │    │    │
   ▼    ▼    ▼
undefined  uninitialized
              │
              └──────┐
                     ↓
                    TDZ
                     ↓
             Declaration Executes
                     ↓
                 Initialized

One-Line Interview Trick

var → Hoisted + undefined

let → Hoisted + TDZ

const → Hoisted + TDZ

Function Declaration → Hoisted with function available

TDZ → Cannot access before initialization → ReferenceError
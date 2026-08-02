# JavaScript Interview Questions — `this`, `call()`, `apply()` and `bind()`

---

# 1. What is `this` in JavaScript?

> **`this` is a keyword whose value depends on how a function is called.**

A simple interview rule for normal method calls:

> **`this` points to the object that is calling the function.**

Or remember:

```text
this
 ↓
Who called the function?
```

Example:

```js
const person = {
    name: "John",

    sayHi: function () {
        console.log(this.name);
    }
};

person.sayHi();
```

Output:

```text
John
```

Why?

Because:

```text
person.sayHi()
   ↑
   │
Caller = person
```

Therefore:

```text
this → person
```

and:

```js
this.name
```

becomes:

```js
person.name
```

which is:

```text
John
```

---

# 2. Important Rule — `this` Depends on How a Function is Called

Suppose:

```js
const user = {
    name: "Gourav",

    show() {
        console.log(this.name);
    }
};

user.show();
```

Here:

```text
user.show()
 ↑
 │
Caller
```

Therefore:

```text
this → user
```

Output:

```text
Gourav
```

But the same function can behave differently if we remove it from the object and call it separately.

---

# 3. Problem 1 — Function Reference

Consider:

```js
const user = {
    name: "Gourav",

    show() {
        console.log(this.name);
    }
};

const x = user.show;
```

Memory-level understanding:

```text
[Memory]

user
│
├── name = "Gourav"
│
└── show ----------------------+
                               |
                               ▼
                        function show() {
                            console.log(this.name);
                        }
                               ▲
                               |
x -----------------------------+
```

`x` has:

```text
✔ Function reference
```

But `x` does **not** contain:

```text
❌ name
❌ user object
❌ permanently stored this
```

The important point is:

```js
const x = user.show;
```

does **not** permanently bind `this` to `user`.

It only copies the function reference.

---

## `user.show()` vs `x()`

### Case 1

```js
user.show();
```

Call style:

```text
user.show()
 ↑
 │
Caller = user
```

Therefore:

```text
this → user
```

---

### Case 2

```js
x();
```

Now the function is being called as a plain function.

```text
x()
```

There is no:

```text
user.show()
```

call anymore.

So the original `user` object is not automatically used as `this`.

This is why:

> **`this` depends on the call site, not simply where the function was originally stored.**

---

# 4. Problem 2 — Sharing the Same Function Between Objects

Consider:

```js
const person = {

    name: "Rahul",

    show() {
        console.log(this.name);
    }

};
```

Memory:

```text
person
│
├── name ─────► "Rahul"
│
└── show ─────► Function Object (0x100)
```

Now create another object:

```js
const student = {
    name: "Amit"
};
```

Memory:

```text
person
│
├── name ─────► "Rahul"
│
└── show ─────► Function (0x100)


student
│
└── name ─────► "Amit"
```

Now:

```js
student.show = person.show;
```

After assignment:

```text
person
│
├── name ─────► "Rahul"
│
└── show ─────► Function (0x100)


student
│
├── name ─────► "Amit"
│
└── show ─────► Function (0x100)
```

Important:

> It does **not create a new copy of the function**. It creates another reference to the same function.

Conceptually:

```text
person.show ───┐
               │
               ▼
          Function 0x100
               ▲
               │
student.show ──┘
```

Now:

```js
person.show();
```

prints:

```text
Rahul
```

because:

```text
this → person
```

But:

```js
student.show();
```

prints:

```text
Amit
```

because:

```text
this → student
```

Even though both properties reference the **same function**.

This proves:

> **For normal functions, `this` is determined by how the function is called.**

---

# 5. Problem 3 — `setTimeout(user.show, 1000)`

Consider:

```js
const user = {

    name: "Gourav",

    show() {
        console.log(this.name);
    }

};

setTimeout(user.show, 1000);
```

The important thing happening here is:

```js
user.show
```

is passed as a **function reference**.

We are NOT doing:

```js
user.show();
```

at that moment.

Conceptually:

```text
user
│
├── name = "Gourav"
│
└── show ────────┐
                 │
                 ▼
              Function
                 │
                 │ function reference
                 ▼
            setTimeout()
```

So the original method call context:

```text
user.show()
```

is lost.

In browser-style interview examples, this can result in `this.name` not referring to `user.name`, so `"Gourav"` is not obtained.

The key interview point is:

> **Passing `user.show` passes only the function reference; it does not preserve `user` as `this`.**

---

# 6. How Can We Fix the `setTimeout()` Problem?

One solution is:

```js
setTimeout(() => user.show(), 1000);
```

Here we are not directly passing:

```js
user.show
```

Instead, we pass an arrow callback:

```js
() => user.show()
```

Later `setTimeout()` executes that callback.

Inside the callback:

```js
user.show();
```

is explicitly called.

Therefore:

```text
user.show()
 ↑
 │
Caller = user
```

and:

```text
this → user
```

Output:

```text
Gourav
```

---

# 7. Problem 4 — Arrow Function as an Object Method

Consider:

```js
const obj = {

    name: "Gourav",

    show: () => {
        console.log(this.name);
    }

};

obj.show();
```

You might think:

```text
obj.show()
 ↑
 │
obj called it
 ↓
this → obj
```

But that rule does **not** work the same way for arrow functions.

Why?

> **Arrow functions do not create their own `this`.**

Instead, they use `this` from the surrounding lexical context.

This behavior is called:

> **Lexical `this`**

So:

```js
show: () => {
    console.log(this.name);
}
```

does not get `this` from:

```js
obj.show()
```

The arrow function uses the surrounding `this`.

Therefore, in the common browser/module interview scenario, it will not access:

```js
obj.name
```

as you might expect.

---

# 8. Normal Function vs Arrow Function `this`

## Normal Function

```js
const obj = {

    name: "Gourav",

    show() {
        console.log(this.name);
    }

};

obj.show();
```

Here:

```text
obj.show()
   ↓
this → obj
```

Output:

```text
Gourav
```

---

## Arrow Function

```js
const obj = {

    name: "Gourav",

    show: () => {
        console.log(this.name);
    }

};

obj.show();
```

Arrow function:

```text
Does NOT create its own this
        ↓
Uses surrounding lexical this
```

So:

> **Do not normally use an arrow function as an object method when you need `this` to refer to that object.**

---

# 9. What is Lexical `this`?

> **Lexical `this` means an arrow function does not create its own `this`; instead, it captures `this` from its surrounding context.**

Memory trick:

```text
Normal Function
      ↓
this depends on call


Arrow Function
      ↓
No own this
      ↓
Capture surrounding this
```

---

# 10. Problem 5 — Arrow Function Inside a Method

Consider:

```js
const obj = {

    name: "Gourav",

    show() {

        const x = () => {
            console.log(this.name);
        };

        x();
    }

};

obj.show();
```

Memory:

```text
obj (0x100)
│
├── name ─────► "Gourav"
│
└── show ─────► Function (0x500)
```

First:

```js
obj.show();
```

Since `show()` is a normal method:

```text
obj.show()
 ↑
 │
Caller = obj
```

Therefore:

```text
this inside show()
        ↓
       obj
```

Now inside `show()`:

```js
const x = () => {
    console.log(this.name);
};
```

The arrow function does not create its own `this`.

It captures the surrounding `this`.

The surrounding `this` is:

```text
obj
```

Therefore:

```text
Arrow x
   ↓
No own this
   ↓
Capture this from show()
   ↓
this → obj
   ↓
this.name
   ↓
"Gourav"
```

Output:

```text
Gourav
```

---

# 11. Problem 6 — Normal Inner Function vs Arrow Function

Consider:

```js
const user = {

    name: "Gourav",

    show() {

        console.log("A:", this.name);

        const inner = function () {
            console.log("B:", this.name);
        };

        const arrow = () => {
            console.log("C:", this.name);
        };

        inner();

        arrow();
    }

};

user.show();
```

Expected interview output in the common strict-mode/module explanation:

```text
A: Gourav
B: undefined / error depending on environment and mode
C: Gourav
```

Let's understand each one.

---

## A — `this` Inside `show()`

```js
user.show();
```

Therefore:

```text
this → user
```

So:

```js
console.log("A:", this.name);
```

prints:

```text
A: Gourav
```

---

## B — `this` Inside Normal `inner()`

```js
inner();
```

This is a plain function call.

It is NOT:

```text
user.inner()
```

Therefore it does not inherit `this` from `show()`.

```text
inner()
  ↓
Normal function
  ↓
Has its own this behavior
  ↓
Does NOT capture show()'s this
```

So it does not automatically access:

```text
user.name
```

---

## C — `this` Inside Arrow Function

```js
arrow();
```

Arrow functions don't create their own `this`.

So:

```text
arrow
  ↓
captures this from show()
  ↓
show() has this → user
  ↓
arrow this → user
```

Therefore:

```text
C: Gourav
```

---

# 12. Normal Function vs Arrow Function

| Normal Function                      | Arrow Function                                      |
| ------------------------------------ | --------------------------------------------------- |
| Has dynamic `this` behavior          | Does not create its own `this`                      |
| `this` depends on how it is called   | Captures surrounding `this`                         |
| Can be useful as object methods      | Useful for preserving outer `this`                  |
| `call/apply/bind` can set its `this` | `call/apply/bind` cannot replace its lexical `this` |

Memory trick:

```text
Normal Function
      ↓
"Who called me?"


Arrow Function
      ↓
"What was surrounding this?"
```

---

# 13. Why Do We Need `call()`, `apply()`, and `bind()`?

JavaScript gives us three methods that let us explicitly control the `this` value of **normal functions**:

```text
call()
apply()
bind()
```

They are useful when:

```text
Function
   ↓
Needs a specific object as this
```

---

# 14. `call()` Method

Consider:

```js
function printName() {
    console.log(this.name);
}

const student1 = {
    name: "Gourav"
};
```

Normally:

```js
printName();
```

is a plain function call.

So `this` is not automatically:

```text
student1
```

But we can explicitly set it:

```js
printName.call(student1);
```

Output:

```text
Gourav
```

---

# 15. What Happens With `call()`?

When we write:

```js
printName.call(student1);
```

we are essentially saying:

> **"Execute `printName` immediately and use `student1` as `this` for this call."**

Conceptually:

```text
printName.call(student1)
          ↓
Create Function Execution Context
          ↓
this
 │
 ▼
student1
 │
 ▼
name = "Gourav"
```

Therefore:

```js
this.name
```

becomes:

```js
student1.name
```

Output:

```text
Gourav
```

---

# 16. `call()` Behind the Scenes

Memory:

```text
student1
│
└── name → "Gourav"


printName
│
└── Function
```

Then:

```js
printName.call(student1);
```

During the call:

```text
Execution Context

this
 │
 ▼
student1
 │
 ▼
name
 │
 ▼
"Gourav"
```

---

# 17. Passing Arguments With `call()`

Syntax:

```js
function.call(thisValue, arg1, arg2, arg3);
```

Example:

```js
function introduce(age, city) {

    console.log(
        this.name,
        age,
        city
    );

}

const user = {
    name: "Gourav"
};

introduce.call(user, 24, "Delhi");
```

Here:

```text
this → user

age → 24

city → "Delhi"
```

The arguments are passed:

> **Separately**

---

# 18. What is `apply()`?

> **`apply()` immediately executes the function and sets `this` to the object you provide.**

It is very similar to `call()`.

Main difference:

> **Arguments are passed inside an array or array-like value.**

Syntax:

```js
function.apply(thisValue, [arg1, arg2, arg3]);
```

Example:

```js
function introduce(age, city) {

    console.log(
        this.name,
        age,
        city
    );

}

const user = {
    name: "Gourav"
};

introduce.apply(user, [24, "Delhi"]);
```

Output:

```text
Gourav 24 Delhi
```

---

# 19. `call()` vs `apply()`

### `call()`

```js
introduce.call(user, 24, "Delhi");
```

Arguments:

```text
24, "Delhi"
```

are passed separately.

### `apply()`

```js
introduce.apply(user, [24, "Delhi"]);
```

Arguments:

```text
[24, "Delhi"]
```

are passed as an array/array-like value.

Memory trick:

```text
call
 ↓
Comma-separated arguments


apply
 ↓
Array of arguments
```

---

# 20. What is `bind()`?

> **`bind()` creates a new function with a fixed `this` value.**

Important:

> **`bind()` does NOT immediately call the function.**

Example:

```js
function greet() {
    console.log(this.name);
}

const user = {
    name: "Gourav"
};

const x = greet.bind(user);
```

At this point:

```text
greet.bind(user)
       ↓
Creates NEW function
       ↓
this fixed to user
       ↓
Does NOT execute yet
```

Then:

```js
x();
```

Output:

```text
Gourav
```

---

# 21. How Does `bind()` Work?

```js
const x = greet.bind(user);
```

Conceptually:

```text
greet
  │
  ▼
Original Function
  │
  │ bind(user)
  ▼
New Bound Function
  │
  └── this → user
```

Now:

```js
x();
```

uses:

```text
this → user
```

---

# 22. Why is `bind()` Useful With Callbacks?

Remember this problem:

```js
setTimeout(user.show, 1000);
```

Passing:

```js
user.show
```

does not preserve the original method-call receiver.

We can use:

```js
setTimeout(user.show.bind(user), 1000);
```

Now:

```text
user.show
    ↓
bind(user)
    ↓
New Bound Function
    ↓
this fixed to user
    ↓
Passed to setTimeout
    ↓
Executed later
    ↓
this → user
```

Therefore it can print:

```text
Gourav
```

---

# 23. `call()` vs `apply()` vs `bind()`

| Feature                    | `call()`             | `apply()`                                 | `bind()`                    |
| -------------------------- | -------------------- | ----------------------------------------- | --------------------------- |
| Sets `this`                | ✅                    | ✅                                         | ✅                           |
| Executes immediately       | ✅                    | ✅                                         | ❌                           |
| Returns new bound function | ❌                    | ❌                                         | ✅                           |
| Arguments                  | Separately           | Array/array-like                          | Can pre-set arguments       |
| Common use                 | Immediate invocation | Immediate invocation with array-like args | Callbacks / later execution |

---

# 24. Easy Memory Trick

```text
call()
 ↓
CALL NOW
 ↓
Arguments separately


apply()
 ↓
CALL NOW
 ↓
Arguments in ARRAY


bind()
 ↓
CALL LATER
 ↓
Returns new function
```

Remember:

> **Call → Commas**

> **Apply → Array**

> **Bind → Bound function**

---

# 25. Why Do We Send Arrow Functions as Callback Functions?

Consider:

```js
setTimeout(() => user.show(), 1000);
```

Here:

```js
() => user.show()
```

is an anonymous arrow function.

We are passing the arrow function itself as a callback/reference to:

```js
setTimeout()
```

We are NOT immediately executing:

```js
user.show()
```

Conceptually:

```text
setTimeout(
    () => user.show(),
    1000
)
```

Flow:

```text
Create Arrow Function
        ↓
Pass Function Reference
        ↓
setTimeout receives callback
        ↓
Timer starts
        ↓
Timer completes
        ↓
Callback becomes ready
        ↓
Callback executes
        ↓
Inside callback:
user.show()
        ↓
this → user
        ↓
"Gourav"
```

---

# 26. Why Does This Work?

```js
setTimeout(() => user.show(), 1000);
```

Because when the arrow callback eventually executes, it explicitly performs:

```js
user.show();
```

That is a method call.

Therefore:

```text
user.show()
 ↑
 │
Receiver = user
```

So:

```text
this → user
```

This is different from:

```js
setTimeout(user.show, 1000);
```

where only the method's function reference is passed.

---

# 27. Three Important Callback Examples

## Case 1 — Direct Function Reference

```js
setTimeout(user.show, 1000);
```

Conceptually:

```text
Pass show function reference
        ↓
Original user.show() call is lost
        ↓
this is not preserved as user
```

---

## Case 2 — Arrow Callback

```js
setTimeout(() => user.show(), 1000);
```

Conceptually:

```text
Pass arrow callback
        ↓
Later arrow executes
        ↓
user.show()
        ↓
this → user
```

---

## Case 3 — `bind()`

```js
setTimeout(user.show.bind(user), 1000);
```

Conceptually:

```text
user.show
    ↓
bind(user)
    ↓
Create bound function
    ↓
this fixed to user
    ↓
setTimeout executes later
    ↓
this → user
```

---

# 28. `this` Complete Decision Flow

For interview questions, first ask:

> **What type of function is this?**

```text
Function
   │
   ├───────────────┐
   │               │
   ▼               ▼
Normal Function   Arrow Function
   │               │
   ▼               ▼
Check HOW         No own this
it is called       │
   │               ▼
   │           Use surrounding
   │               this
   │
   ├── obj.fn()
   │      ↓
   │   this → obj
   │
   ├── fn.call(obj)
   │      ↓
   │   this → obj
   │
   ├── fn.apply(obj)
   │      ↓
   │   this → obj
   │
   └── fn.bind(obj)
          ↓
       Bound this
```

---

# 29. Most Important `this` Interview Rules

## Rule 1 — Object Method

```js
obj.show();
```

For a normal method:

```text
this → obj
```

---

## Rule 2 — Function Reference

```js
const x = obj.show;

x();
```

The original object relationship is not preserved for `this`.

---

## Rule 3 — Arrow Function

```js
const x = () => {
    console.log(this);
};
```

Arrow function:

```text
No own this
    ↓
Uses surrounding lexical this
```

---

## Rule 4 — `call()`

```js
fn.call(obj);
```

```text
this → obj
Execute NOW
```

---

## Rule 5 — `apply()`

```js
fn.apply(obj, [a, b]);
```

```text
this → obj
Execute NOW
Arguments → Array
```

---

## Rule 6 — `bind()`

```js
const newFn = fn.bind(obj);
```

```text
this → obj
Does NOT execute now
Returns new function
```

---

# 30. Quick Interview Revision

| Concept                | Simple Definition                                                |
| ---------------------- | ---------------------------------------------------------------- |
| **`this`**             | Value determined mainly by how a normal function is called       |
| **Method Call**        | `obj.fn()` generally gives `this → obj`                          |
| **Function Reference** | Passing `obj.fn` does not preserve `obj` as `this`               |
| **Arrow Function**     | Doesn't create its own `this`                                    |
| **Lexical `this`**     | Arrow captures `this` from surrounding context                   |
| **`call()`**           | Executes immediately with specified `this`                       |
| **`apply()`**          | Same as call, but arguments are passed as array/array-like       |
| **`bind()`**           | Returns a new function with bound `this`                         |
| **Callback**           | Function passed to another function for later/current invocation |

---

# 31. Most Important Interview Example

```js
const user = {

    name: "Gourav",

    show() {
        console.log(this.name);
    }

};
```

### Direct Method

```js
user.show();
```

```text
this → user
Output → Gourav
```

### Reference

```js
const x = user.show;

x();
```

```text
Original receiver lost
this is not automatically user
```

### `call()`

```js
x.call(user);
```

```text
this → user
Output → Gourav
```

### `apply()`

```js
x.apply(user);
```

```text
this → user
Output → Gourav
```

### `bind()`

```js
const y = x.bind(user);

y();
```

```text
this → user
Output → Gourav
```

### Arrow Callback

```js
setTimeout(() => user.show(), 1000);
```

```text
Arrow callback executes
       ↓
user.show()
       ↓
this → user
       ↓
Gourav
```

---

# Final `this` Memory Map

```text
                         this
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
      Normal Function              Arrow Function
             │                           │
             ▼                           ▼
      Check Call Site               No own this
             │                           │
      ┌──────┼────────┐                  ▼
      │      │        │            Capture outer
      ▼      ▼        ▼                 this
 obj.fn()  call()   apply()
      │      │        │
      ▼      ▼        ▼
 this=obj  manual   manual
            this     this

             bind()
               │
               ▼
       New Bound Function
               │
               ▼
          Fixed this
```

# Final One-Line Revision

**Normal function → `this` depends on how it is called → `obj.fn()` gives `this = obj` → passing `obj.fn` loses that receiver → arrow functions don't have their own `this` → `call()` and `apply()` execute immediately with manual `this` → `bind()` returns a new function with bound `this`.**

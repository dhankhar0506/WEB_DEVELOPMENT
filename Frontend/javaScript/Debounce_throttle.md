# JavaScript Interview Questions — Debouncing, Throttling & Memory Leaks

---

# 1. What is Debouncing in JavaScript?

> **Debouncing delays the execution of a function until the user stops triggering the event for a specified amount of time.**

Simple meaning:

```text
Keep triggering event
        ↓
Cancel previous timer
        ↓
Start a new timer
        ↓
User stops
        ↓
Wait for delay
        ↓
Execute function once
```

---

# 2. Why Do We Need Debouncing?

Suppose you have a search box.

The user types:

```text
G
Go
Gou
Gour
Goura
Gourav
```

Without debounce:

```text
G       → API Call
Go      → API Call
Gou     → API Call
Gour    → API Call
Goura   → API Call
Gourav  → API Call
```

So:

```text
6 keystrokes
     ↓
6 API Calls
```

This creates unnecessary API requests.

---

# 3. With Debouncing

Suppose debounce delay is:

```text
500ms
```

User types:

```text
G
Go
Gou
Gour
Goura
Gourav
```

But every new keystroke resets the timer.

```text
User typing...
      ↓
Timer reset
      ↓
User typing...
      ↓
Timer reset
      ↓
User stops typing
      ↓
Wait 500ms
      ↓
Only 1 API Call
```

So:

```text
Gourav
   ↓
User stops
   ↓
500ms passes
   ↓
API Call
```

---

# 4. Debounce Code

```js
function search(value) {
    console.log("Searching:", value);
}

function debounce(fn, delay) {

    let timer;

    return function (value) {

        // Cancel the previous timer (if any)
        clearTimeout(timer);

        // Create a new timer
        timer = setTimeout(() => {

            fn(value);

        }, delay);
    };
}

const debounceSearch = debounce(search, 500);

const input = document.getElementById("search");

input.addEventListener("input", (e) => {

    debounceSearch(e.target.value);

});
```

---

# 5. Step-by-Step Debounce Execution

First:

```js
const debounceSearch = debounce(search, 500);
```

We call:

```text
debounce()

fn ---------> search()

delay ------> 500

timer ------> undefined
```

The `debounce()` function returns another function.

```js
return function (value) {

    clearTimeout(timer);

    timer = setTimeout(() => {

        fn(value);

    }, delay);
};
```

Now:

```js
debounceSearch
```

contains a reference to this returned function.

---

# 6. Memory-Level Understanding of Debounce

When:

```js
debounce(search, 500);
```

executes:

```text
debounce() Execution Context
│
├── fn -------> search()
│
├── delay ----> 500
│
└── timer ----> undefined
```

Then `debounce()` returns:

```text
Returned Function
```

Normally, after a function finishes:

```text
Execution Context
      ↓
Removed from Call Stack
```

But the returned function still uses:

```text
fn
delay
timer
```

Therefore these variables must remain accessible.

This creates a **closure**.

```text
Returned Function
      │
      ▼
   Closure
      │
      ├── fn --------> search()
      │
      ├── delay -----> 500
      │
      └── timer -----> undefined
```

So:

```js
const debounceSearch = debounce(search, 500);
```

conceptually gives us:

```text
debounceSearch
      │
      ▼
Returned Function
      │
      ▼
Closure
│
├── fn → search
├── delay → 500
└── timer → undefined
```

---

# 7. Why is Closure Important in Debouncing?

Every time we call:

```js
debounceSearch("G");
```

the returned function needs access to the same:

```js
timer
```

variable.

Then:

```js
debounceSearch("Go");
```

again needs access to that same timer so it can cancel the previous timeout.

Therefore:

> **Debouncing depends on closure to preserve the timer between function calls.**

Memory trick:

```text
debounce()
   ↓
Creates timer
   ↓
Returns function
   ↓
Function remembers timer
   ↓
Closure
```

---

# 8. Why Do We Clear the Timer?

This is the most important part of debouncing:

```js
clearTimeout(timer);
```

Without clearing the previous timer, every event would create another timer.

Then every timer could eventually execute.

That would defeat the purpose of debouncing.

---

# 9. Without `clearTimeout()`

Suppose:

```text
delay = 500ms
```

### User types `p`

Time:

```text
0ms
```

Call:

```js
debounceSearch("p");
```

Browser/runtime timer conceptually:

```text
+-----+----------------+-------------+
| ID  | Callback       | Time Left   |
+-----+----------------+-------------+
| 101 | search("p")    | 500ms       |
+-----+----------------+-------------+
```

---

### User types `y`

Time:

```text
100ms
```

Call:

```js
debounceSearch("py");
```

Without clearing the previous timer:

```text
+-----+----------------+-------------+
| ID  | Callback       | Time Left   |
+-----+----------------+-------------+
| 101 | search("p")    | ~400ms      |
| 102 | search("py")   | 500ms       |
+-----+----------------+-------------+
```

---

### User types another character

Time:

```text
200ms
```

Suppose:

```js
debounceSearch("pyq");
```

Now:

```text
+-----+----------------+-------------+
| ID  | Callback       | Time Left   |
+-----+----------------+-------------+
| 101 | search("p")    | ~300ms      |
| 102 | search("py")   | ~400ms      |
| 103 | search("pyq")  | 500ms       |
+-----+----------------+-------------+
```

Eventually:

```text
Timer 101 finishes
      ↓
search("p")

Timer 102 finishes
      ↓
search("py")

Timer 103 finishes
      ↓
search("pyq")
```

Result:

```text
Multiple API Calls ❌
```

So we need:

```js
clearTimeout(timer);
```

---

# 10. With `clearTimeout()`

Suppose delay is:

```text
3000ms
```

### Step 1 — User types `p`

Time:

```text
0ms
```

Call:

```js
debounceSearch("p");
```

Timer:

```text
+----+----------------+---------+
| ID | Callback       | Time    |
+----+----------------+---------+
| 1  | search("p")    | 3000ms  |
+----+----------------+---------+
```

And:

```text
timer → 1
```

---

### Step 2 — User types `y`

Time:

```text
100ms
```

Before creating another timer:

```js
clearTimeout(timer);
```

Since:

```text
timer → 1
```

JavaScript/runtime cancels:

```text
Timer 1
```

Then:

```js
timer = setTimeout(() => {

    search("py");

}, 3000);
```

A completely new timer is created.

Conceptually:

```text
Old Timer

ID 1 → search("p")

       ❌ Cancelled


New Timer

ID 2 → search("py")

       3000ms
```

Now:

```text
timer → 2
```

---

# 11. Debounce Timer Flow

```text
User types "G"
      ↓
Create Timer 1
      ↓

User types "Go"
      ↓
clearTimeout(Timer 1)
      ↓
Create Timer 2
      ↓

User types "Gou"
      ↓
clearTimeout(Timer 2)
      ↓
Create Timer 3
      ↓

User types "Gourav"
      ↓
clearTimeout(previous timer)
      ↓
Create Final Timer
      ↓
User stops typing
      ↓
500ms passes
      ↓
search("Gourav")
```

Only the final call executes.

---

# 12. Real-Life Uses of Debouncing

Debouncing is useful when the **final action matters**.

Examples:

```text
Search Input
Auto Save
Form Validation
Resize handling
Autocomplete
API Search Suggestions
```

For example:

```text
User typing search query
       ↓
Don't call API yet
       ↓
User stops
       ↓
Call API once
```

---

# 13. Better Reusable Debounce Function

A more reusable debounce implementation is:

```js
function debounce(fn, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            fn.apply(this, args);

        }, delay);
    };
}
```

Now it supports:

```text
Multiple Arguments
+
Correct dynamic `this`
```

Instead of only:

```js
function (value)
```

we use:

```js
function (...args)
```

So any number of arguments can be received.

---

# 14. Why `fn.apply(this, args)`?

Suppose our original function depends on:

```js
this
```

Then simply calling:

```js
fn(...args);
```

may not preserve the caller's desired `this`.

Using:

```js
fn.apply(this, args);
```

lets us call `fn` with the wrapper's current `this` and pass the arguments as an array.

Remember:

```text
apply()
│
├── Calls function immediately
├── Manually sets this
└── Arguments passed as array
```

---

# 15. What is Throttling?

> **Throttling ensures that a function runs at most once within a specified time interval.**

Simple meaning:

```text
Events continuously happening
        ↓
Execute
        ↓
Block for some time
        ↓
Allow execution again
        ↓
Execute
```

For the implementation below:

> **Throttle executes immediately on the first event, blocks subsequent events while the timer is running, and allows execution again only after the timer finishes.**

---

# 16. Why Do We Need Throttling?

Suppose a user is scrolling.

Scroll events can happen continuously:

```text
Scroll
Scroll
Scroll
Scroll
Scroll
Scroll
Scroll
Scroll
```

Without throttling:

```text
Function
Function
Function
Function
Function
Function
Function
```

With a throttle of:

```text
500ms
```

we limit how often the function can run.

Conceptually:

```text
Event → Execute

100ms → Ignore
200ms → Ignore
300ms → Ignore
400ms → Ignore

500ms → Allow again

Next event → Execute
```

---

# 17. Throttle Code

```js
const search = {

    search(value) {

        console.log(
            this.name,
            "Calling API with:",
            value
        );
    }
};

function throttle(fn, delay) {

    let canRun = true;

    return function (...args) {

        if (!canRun) return;

        canRun = false;

        fn.apply(this, args);

        setTimeout(() => {

            canRun = true;

        }, delay);
    };
}
```

---

# 18. Using the Throttle Function

```js
const user1 = {

    name: "Gourav"

};

user1.throttleSearch = throttle(
    search.search,
    500
);

user1.throttleSearch("React");
```

Output:

```text
Gourav Calling API with: React
```

Another object:

```js
const user2 = {

    name: "Dhankhar"

};

user2.throttleSearch = throttle(
    search.search,
    500
);

user2.throttleSearch("JavaScript");
```

Output:

```text
Dhankhar Calling API with: JavaScript
```

---

# 19. Memory-Level Throttling

When:

```js
throttle(search.search, 500);
```

executes:

```text
throttle()
│
├── fn -------> search.search
├── delay ----> 500
└── canRun ---> true
```

Then throttle returns:

```js
function (...args) {

    if (!canRun) return;

    canRun = false;

    fn.apply(this, args);

    setTimeout(() => {
        canRun = true;
    }, delay);
}
```

This returned function uses:

```text
fn
delay
canRun
```

Therefore:

```text
Returned Function
      │
      ▼
   Closure
      │
      ├── fn
      ├── delay
      └── canRun
```

Again, **closure** is important.

---

# 20. How Throttling Works

Initially:

```text
canRun = true
```

First event:

```text
Event
  ↓
canRun === true
  ↓
canRun = false
  ↓
Execute function
  ↓
Start timer
```

Now suppose more events occur:

```text
Event
  ↓
canRun === false
  ↓
return
  ↓
Ignore
```

After the delay:

```js
setTimeout(() => {

    canRun = true;

}, delay);
```

Now:

```text
canRun = true
```

So the next event can execute the function again.

---

# 21. Why `apply()` is Used in Throttle

Inside:

```js
return function (...args) {

    fn.apply(this, args);

};
```

Suppose:

```js
user1.throttleSearch("React");
```

Because the returned wrapper is called as a method of `user1`, inside that normal wrapper:

```text
this → user1
```

Then:

```js
fn.apply(this, args);
```

becomes conceptually:

```js
search.search.apply(
    user1,
    ["React"]
);
```

Therefore inside:

```js
search.search
```

we get:

```text
this → user1
```

And:

```js
this.name
```

becomes:

```text
Gourav
```

---

# 22. Same Throttle With `user2`

Call:

```js
user2.throttleSearch("JavaScript");
```

Inside the wrapper:

```text
this → user2
```

Then:

```js
fn.apply(this, args);
```

conceptually becomes:

```js
search.search.apply(
    user2,
    ["JavaScript"]
);
```

Therefore:

```text
this.name
    ↓
"Dhankhar"
```

Output:

```text
Dhankhar Calling API with: JavaScript
```

---

# 23. Debounce vs Throttle

| Debounce                        | Throttle                                            |
| ------------------------------- | --------------------------------------------------- |
| Waits until user stops          | Limits execution to at most once per interval       |
| Timer resets on repeated events | Repeated events are blocked/limited during interval |
| Final action matters            | Continuous updates matter                           |
| Search box                      | Scroll                                              |
| Auto-save                       | Resize                                              |
| Search suggestions              | Mouse movement                                      |
| Form validation                 | Continuous event tracking                           |

---

# 24. Easy Debounce vs Throttle Example

Imagine an elevator.

### Debounce

The elevator waits until people stop entering.

```text
Person enters
     ↓
Wait

Another enters
     ↓
Reset wait

Another enters
     ↓
Reset wait

Nobody enters
     ↓
Wait finishes
     ↓
Door closes
```

This is similar to:

```text
Debounce
```

---

### Throttle

Imagine a gate that allows one action and then locks temporarily.

```text
Person
  ↓
Allowed

Gate locked for 500ms

Person → Blocked
Person → Blocked

500ms finishes

Gate opens

Next Person
  ↓
Allowed
```

This is similar to:

```text
Throttle
```

---

# 25. Interview Definition — Debouncing

> **Debouncing delays function execution until a specified amount of time has passed since the last event. Every new event cancels the previous timer and starts a new one.**

---

# 26. Interview Definition — Throttling

> **Throttling limits how frequently a function can execute, allowing it to run at most once during a specified time interval.**

---

# 27. Most Important Difference

```text
DEBOUNCE

Event
Event
Event
Event
Event

       ↓ user stops

       Function
```

Whereas:

```text
THROTTLE

Event Event Event Event Event Event Event
  ↓              ↓              ↓
Function       Function       Function
```

Simple:

```text
Debounce
   ↓
"Wait until you stop"


Throttle
   ↓
"Slow down how often you run"
```

---

# 28. What is a Memory Leak?

> **A memory leak occurs when memory that is no longer needed cannot be reclaimed because it is still reachable/referenced.**

JavaScript has automatic Garbage Collection.

Normally:

```text
Create Object
    ↓
Use Object
    ↓
No references remain
    ↓
Eligible for Garbage Collection
```

But with a memory leak:

```text
Create Object
    ↓
Use Object
    ↓
Object no longer needed
    ↓
Something still references it
    ↓
Garbage Collector sees it as reachable
    ↓
Memory remains allocated
```

---

# 29. Garbage Collector Connection

Remember:

> **Garbage Collection is the process of automatically reclaiming memory that is no longer reachable/needed by the program.**

Conceptually:

```text
Object
  ↓
Any reachable reference?
   │
 ┌─┴─┐
Yes  No
 │    │
Keep  Eligible for
      Garbage Collection
```

Memory leaks happen when unwanted references remain.

---

# 30. Common Causes of Memory Leaks

Important causes:

```text
Memory Leaks
│
├── Unremoved Event Listeners
├── Timers Not Cleared
├── Closures Holding Large Objects
├── Unnecessary Global References
└── Detached DOM References
```

---

# 31. Cause 1 — Unremoved Event Listeners

Example:

```js
const button = document.getElementById("btn");

function handleClick() {

    console.log("Clicked");

}

button.addEventListener(
    "click",
    handleClick
);
```

If a listener or related references remain registered longer than necessary, they can keep associated data reachable.

So when appropriate, cleanup can be:

```js
button.removeEventListener(
    "click",
    handleClick
);
```

This is especially important in long-running applications/components where listeners are repeatedly attached and removed.

---

# 32. Cause 2 — Timers Not Cleared

Example:

```js
setInterval(() => {

    console.log("Running");

}, 1000);
```

`setInterval()` continues running until it is cancelled.

Better:

```js
const interval = setInterval(() => {

    console.log("Running");

}, 1000);
```

When no longer needed:

```js
clearInterval(interval);
```

Flow:

```text
setInterval()
     ↓
Callback repeatedly scheduled
     ↓
Still active
     ↓
Associated references may remain needed
```

Cleanup:

```text
clearInterval()
     ↓
Stop future interval scheduling
```

---

# 33. Cause 3 — Closures Holding Large Objects

Closures are useful.

We already used them in:

```text
Debouncing
Throttling
```

But a closure can also keep data reachable longer than necessary.

Example:

```js
function createFunction() {

    const largeData = new Array(1000000);

    return function () {

        console.log(largeData.length);

    };
}

const fn = createFunction();
```

The returned function references:

```js
largeData
```

Therefore:

```text
fn
 │
 ▼
Returned Function
 │
 ▼
Closure
 │
 ▼
largeData
```

Even after:

```text
createFunction()
```

finishes, `largeData` remains reachable because the returned function still uses it.

This is not automatically a memory leak—it becomes a problem when the data is retained unnecessarily.

---

# 34. Closure: Useful vs Memory Problem

Closure itself is NOT a memory leak.

For example:

```js
function debounce(fn, delay) {

    let timer;

    return function () {

        // uses timer

    };
}
```

This closure is intentional.

But:

```text
Closure
   ↓
Keeps huge unnecessary data
   ↓
Function remains reachable forever
   ↓
Memory cannot be reclaimed
```

can contribute to a memory leak.

Important interview point:

> **Closures do not automatically cause memory leaks. They cause problems only when they unintentionally keep unnecessary data reachable for longer than needed.**

---

# 35. Debouncing + Closure + Timer Connection

```text
debounce(search, 500)
        │
        ▼
Creates
        │
        ├── fn
        ├── delay
        └── timer
        │
        ▼
Returns Function
        │
        ▼
Closure keeps variables alive
        │
        ▼
Every Event
        │
        ▼
clearTimeout(previous timer)
        │
        ▼
Create New Timer
        │
        ▼
User Stops
        │
        ▼
Final Timer Completes
        │
        ▼
search() Executes
```

---

# 36. Throttling + Closure + Timer Connection

```text
throttle(fn, 500)
        │
        ▼
Creates
        │
        ├── fn
        ├── delay
        └── canRun = true
        │
        ▼
Returns Function
        │
        ▼
Closure
        │
        ▼
First Event
        │
        ▼
canRun = false
        │
        ▼
fn()
        │
        ▼
Timer Starts
        │
        ▼
Other Events Ignored
        │
        ▼
Timer Ends
        │
        ▼
canRun = true
        │
        ▼
Next Event Allowed
```

---

# 37. Interview Questions

## Q1. What is Debouncing?

> **Debouncing delays execution until the user stops triggering an event for a specified period.**

---

## Q2. Why is `clearTimeout()` used in Debouncing?

> **`clearTimeout()` cancels the previous pending timer so only the latest timer can complete and execute the function.**

Without it:

```text
Multiple timers
     ↓
Multiple function calls
```

With it:

```text
Previous timer cancelled
     ↓
New timer
     ↓
Final call only
```

---

## Q3. Why is Closure Used in Debouncing?

> **The returned debounce function needs to remember the same `timer`, `fn`, and `delay` values across multiple calls, so closure keeps those variables accessible.**

---

## Q4. What is Throttling?

> **Throttling limits function execution so it runs at most once within a specified time interval.**

---

## Q5. Why is Closure Used in Throttling?

Because the returned function needs to remember:

```text
fn
delay
canRun
```

between calls.

---

## Q6. Why Do We Use `apply()` in the Throttle Function?

> **`apply()` executes the original function with the wrapper's current `this` value and forwards the arguments as an array.**

Example:

```js
fn.apply(this, args);
```

---

## Q7. Debounce vs Throttle?

> **Debounce waits until events stop. Throttle limits how frequently the function can execute while events continue.**

---

## Q8. Where is Debouncing Used?

```text
Search Box
Autocomplete
Auto Save
Form Validation
```

---

## Q9. Where is Throttling Used?

```text
Scroll
Resize
Mouse Move
Continuous Event Tracking
```

---

## Q10. What is a Memory Leak?

> **A memory leak occurs when memory is no longer logically needed but remains reachable because some reference still exists, preventing it from being reclaimed.**

---

## Q11. Common Causes of Memory Leaks?

```text
Unremoved Event Listeners
Timers Not Cleared
Closures Holding Unnecessary Data
Detached DOM References
Long-Lived Global References
```

---

# 38. Quick Interview Revision

| Concept                     | Meaning                                   |
| --------------------------- | ----------------------------------------- |
| **Debounce**                | Wait until events stop                    |
| **Throttle**                | Limit execution frequency                 |
| **`clearTimeout()`**        | Cancel previous timeout                   |
| **Closure in Debounce**     | Remembers `timer`, `fn`, `delay`          |
| **Closure in Throttle**     | Remembers `canRun`, `fn`, `delay`         |
| **`apply()`**               | Sets `this` and passes arguments as array |
| **Memory Leak**             | Unneeded memory remains reachable         |
| **Garbage Collector**       | Reclaims unreachable memory               |
| **`clearInterval()`**       | Stops an interval                         |
| **`removeEventListener()`** | Removes a registered listener             |

---

# 39. Final Memory Trick

```text
DEBOUNCE

"Wait until user STOPS"

Typing → Typing → Typing → STOP → Wait → Execute
```

```text
THROTTLE

"Execute, then WAIT before allowing another execution"

Execute → Block → Block → Allow → Execute
```

```text
MEMORY LEAK

"No longer needed,
but still referenced"
```

---

# Final One-Line Revision

**Debouncing waits until repeated events stop before executing → `clearTimeout()` cancels the previous pending timer → closure remembers the timer → throttling limits execution to at most once per interval → `apply()` can preserve the wrapper's `this` and arguments → memory leaks occur when unnecessary data remains reachable and therefore cannot be reclaimed by garbage collection.**











JavaScript Interview Notes — Debouncing, Throttling & Memory Leaks

1. Debouncing

Debouncing delays function execution until a specified amount of time has passed since the last event. Every new event cancels the previous timer and starts a new one.

Simple Flow

Event → Cancel previous timer → Start new timer
      → Event again → Reset timer
      → User stops → Wait for delay → Execute once

Why Do We Need Debouncing?

Useful when the final action matters, such as a search box.

Without debounce:

G → API Call
Go → API Call
Gou → API Call
Gour → API Call
Goura → API Call
Gourav → API Call

With 500ms debounce:

G → Go → Gou → Gour → Goura → Gourav
                    ↓
              User stops
                    ↓
                 500ms
                    ↓
              1 API Call

Debounce Code

function search(value) {
    console.log("Searching:", value);
}

function debounce(fn, delay) {
    let timer;

    return function (value) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(value);
        }, delay);
    };
}

const debounceSearch = debounce(search, 500);

const input = document.getElementById("search");

input.addEventListener("input", (e) => {
    debounceSearch(e.target.value);
});

Why clearTimeout()?

clearTimeout(timer);

It cancels the previous pending timer.

Without it:

Event → Timer 1
Event → Timer 2
Event → Timer 3
        ↓
All timers execute
        ↓
Multiple function/API calls ❌

With it:

Event → Timer 1
Event → Cancel Timer 1 → Timer 2
Event → Cancel Timer 2 → Timer 3
        ↓
Only final timer executes

Debounce + Closure

When:

debounce(search, 500);

runs, it creates:

fn → search
delay → 500
timer → undefined

The returned function still needs these variables after debounce() finishes.

Therefore, a closure keeps them accessible:

Returned Function
      ↓
   Closure
      ├── fn
      ├── delay
      └── timer

Debouncing depends on closure to preserve the timer between calls.

Reusable Debounce

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

This supports:

Multiple arguments
+
Correct dynamic `this`

Why fn.apply(this, args)?

fn.apply(this, args);

apply():

Calls the function
Sets this
Passes arguments as an array

2. Throttling

Throttling limits how frequently a function can execute, allowing it to run at most once during a specified time interval.

For the implementation below, throttle:

Executes immediately on the first event, blocks subsequent events while the timer is running, and allows execution again after the timer finishes.

Simple Flow

Events continuously happen
        ↓
Execute
        ↓
Block temporarily
        ↓
Delay finishes
        ↓
Allow next execution

Why Do We Need Throttling?

Useful when events happen continuously, such as:

Scroll
Resize
Mouse Move
Continuous Event Tracking

Example with 500ms:

Event → Execute

100ms → Ignore
200ms → Ignore
300ms → Ignore
400ms → Ignore

500ms → Allow again

Next event → Execute

Throttle Code

const search = {
    search(value) {
        console.log(
            this.name,
            "Calling API with:",
            value
        );
    }
};

function throttle(fn, delay) {
    let canRun = true;

    return function (...args) {
        if (!canRun) return;

        canRun = false;

        fn.apply(this, args);

        setTimeout(() => {
            canRun = true;
        }, delay);
    };
}

Using Throttle

const user1 = {
    name: "Gourav"
};

user1.throttleSearch = throttle(
    search.search,
    500
);

user1.throttleSearch("React");
// Gourav Calling API with: React

const user2 = {
    name: "Dhankhar"
};

user2.throttleSearch = throttle(
    search.search,
    500
);

user2.throttleSearch("JavaScript");
// Dhankhar Calling API with: JavaScript

How Throttling Works

Initially:

canRun = true

First event:

Event
 ↓
canRun === true
 ↓
canRun = false
 ↓
Execute function
 ↓
Start timer

During the delay:

Event
 ↓
canRun === false
 ↓
return
 ↓
Ignore

After the delay:

setTimeout(() => {
    canRun = true;
}, delay);

Now the next event can execute.

Throttle + Closure

The returned function needs access to:

fn
delay
canRun

Therefore closure keeps them available:

Returned Function
      ↓
   Closure
      ├── fn
      ├── delay
      └── canRun

Why apply() in Throttle?

When:

user1.throttleSearch("React");

the wrapper's:

this → user1

Then:

fn.apply(this, args);

conceptually calls:

search.search.apply(user1, ["React"]);

Therefore inside search.search:

this.name

is:

"Gourav"

For user2:

this → user2
this.name → "Dhankhar"

3. Debounce vs Throttle

Debounce

Throttle

Waits until events stop

Limits execution frequency

Timer resets on every event

Events are blocked/limited during interval

Final action matters

Continuous updates matter

Search box

Scroll

Auto-save

Resize

Search suggestions

Mouse movement

Form validation

Event tracking

Easy Memory Trick

Debounce → "Wait until you stop"

Throttle → "Slow down how often you run"

Real-Life Example

Debounce — Elevator:

Person enters
    ↓
Wait
Another person enters
    ↓
Reset wait
Nobody enters
    ↓
Wait finishes
    ↓
Door closes

Throttle — Gate:

Person → Allowed
        ↓
Gate locked temporarily
        ↓
Others → Blocked
        ↓
Delay finishes
        ↓
Next person → Allowed

4. Memory Leaks

A memory leak occurs when memory that is no longer needed cannot be reclaimed because it is still reachable/referenced.

JavaScript uses automatic Garbage Collection.

Normally:

Create Object
    ↓
Use Object
    ↓
No references remain
    ↓
Eligible for Garbage Collection

Memory leak:

Object no longer needed
        ↓
Some reference still exists
        ↓
Garbage Collector sees it as reachable
        ↓
Memory remains allocated

Garbage Collection

Garbage Collection automatically reclaims memory that is no longer reachable/needed.

Object
  ↓
Reachable?
 ┌──┴──┐
Yes   No
 ↓     ↓
Keep  Eligible for GC

5. Common Causes of Memory Leaks

Memory Leaks
│
├── Unremoved Event Listeners
├── Timers Not Cleared
├── Closures Holding Unnecessary/Large Data
├── Unnecessary Global References
└── Detached DOM References

Unremoved Event Listeners

const button = document.getElementById("btn");

function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);

When no longer needed, remove the listener:

button.removeEventListener("click", handleClick);

This is especially important when listeners are repeatedly attached/removed in long-running applications or components.

Timers Not Cleared

const interval = setInterval(() => {
    console.log("Running");
}, 1000);

When no longer needed:

clearInterval(interval);

Flow:

setInterval()
     ↓
Callback repeatedly scheduled
     ↓
Still active

Cleanup:

clearInterval()
     ↓
Stop future interval scheduling

Closures Holding Large Objects

function createFunction() {
    const largeData = new Array(1000000);

    return function () {
        console.log(largeData.length);
    };
}

const fn = createFunction();

The returned function references largeData:

fn
 ↓
Returned Function
 ↓
Closure
 ↓
largeData

Even after createFunction() finishes, largeData remains reachable because the returned function uses it.

This is not automatically a memory leak. It becomes a problem when the data is retained unnecessarily.

Important Interview Point

Closures do not automatically cause memory leaks. They can contribute to leaks when they unintentionally keep unnecessary data reachable for longer than needed.

6. Debouncing + Closure + Timer

debounce(search, 500)
        ↓
Creates:
├── fn
├── delay
└── timer
        ↓
Returns Function
        ↓
Closure keeps variables alive
        ↓
Event
        ↓
clearTimeout(previous timer)
        ↓
Create New Timer
        ↓
User Stops
        ↓
Final Timer Completes
        ↓
search() Executes

7. Throttling + Closure + Timer

throttle(fn, 500)
        ↓
Creates:
├── fn
├── delay
└── canRun = true
        ↓
Returns Function
        ↓
Closure
        ↓
First Event
        ↓
canRun = false
        ↓
fn()
        ↓
Timer Starts
        ↓
Other Events Ignored
        ↓
Timer Ends
        ↓
canRun = true
        ↓
Next Event Allowed

8. Important Interview Questions

Q1. What is Debouncing?

Debouncing delays execution until the user stops triggering an event for a specified period.

Q2. Why is clearTimeout() used?

It cancels the previous pending timer so only the latest timer can execute the function.

Q3. Why is Closure Used in Debouncing?

The returned function needs to remember the same timer, fn, and delay values across calls.

Q4. What is Throttling?

Throttling limits function execution so it runs at most once within a specified time interval.

Q5. Why is Closure Used in Throttling?

Because the returned function needs to remember:

fn
delay
canRun

Q6. Why use apply() in Debounce/Throttle?

apply() calls the original function with the wrapper's current this value and passes arguments as an array.

Q7. Debounce vs Throttle?

Debounce waits until events stop. Throttle limits how frequently the function can execute while events continue.

Q8. Where is Debouncing Used?

Search Box
Autocomplete
Auto Save
Form Validation
API Search Suggestions

Q9. Where is Throttling Used?

Scroll
Resize
Mouse Move
Continuous Event Tracking

Q10. What is a Memory Leak?

Memory that is no longer logically needed but remains reachable because a reference still exists, preventing garbage collection.

Q11. Common Causes of Memory Leaks?

Unremoved Event Listeners
Timers Not Cleared
Closures Holding Unnecessary Data
Detached DOM References
Long-Lived Global References

9. Quick Interview Revision

Concept

Meaning

Debounce

Wait until events stop

Throttle

Limit execution frequency

clearTimeout()

Cancel previous timeout

Closure in Debounce

Remembers timer, fn, delay

Closure in Throttle

Remembers canRun, fn, delay

apply()

Sets this and passes arguments as an array

Memory Leak

Unneeded memory remains reachable

Garbage Collector

Reclaims unreachable memory

clearInterval()

Stops an interval

removeEventListener()

Removes a registered listener

10. Final Memory Trick

DEBOUNCE
"Wait until user STOPS"

Typing → Typing → Typing → STOP → Wait → Execute

THROTTLE
"Execute, then WAIT before allowing another execution"

Execute → Block → Block → Allow → Execute

MEMORY LEAK
"No longer needed,
but still referenced"

One-Line Revision

Debouncing waits until repeated events stop before executing → clearTimeout() cancels the previous pending timer → closure remembers the timer → throttling limits execution to at most once per interval → apply() can preserve the wrapper's this and arguments → memory leaks occur when unnecessary data remains reachable and cannot be reclaimed by garbage collection.
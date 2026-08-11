# JavaScript Interview Questions — Debouncing, Throttling & Memory Leaks

---

# 1. Debouncing

> **Debouncing delays the execution of a function until the user stops triggering the event for a specified amount of time.**

### Simple Meaning

```text
Event keeps happening
       ↓
Cancel previous timer
       ↓
Start a new timer
       ↓
Event stops
       ↓
Wait for delay
       ↓
Execute function once
```

---

## Why Do We Need Debouncing?

Suppose we have a search box.

User types:

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

# 2. Debouncing Example

Suppose the debounce delay is `500ms`.

```text
User types
    ↓
Timer starts
    ↓
User types again
    ↓
Previous timer cancelled
    ↓
New timer starts
    ↓
User stops typing
    ↓
500ms passes
    ↓
API Call
```

For:

```text
G
Go
Gou
Gour
Goura
Gourav
```

Only:

```text
Gourav
   ↓
User stops typing
   ↓
500ms
   ↓
API Call
```

---

# 3. Debounce Code

```js
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
```

---

# 4. How Debounce Works

When:

```js
const debounceSearch = debounce(search, 500);
```

executes:

```text
debounce()
│
├── fn -------> search()
├── delay ----> 500
└── timer ----> undefined
```

`debounce()` returns another function:

```js
return function (value) {
  clearTimeout(timer);

  timer = setTimeout(() => {
    fn(value);
  }, delay);
};
```

Therefore:

```text
debounceSearch
      ↓
Returned Function
      ↓
Closure
      │
      ├── fn → search
      ├── delay → 500
      └── timer
```

---

# 5. Closure in Debouncing

The returned function needs access to the same:

```js
timer
```

between multiple calls.

For example:

```js
debounceSearch("G");
debounceSearch("Go");
debounceSearch("Gou");
```

Each call must access the **same timer** so the previous timer can be cancelled.

Therefore:

> **Debouncing depends on closure to preserve the timer between function calls.**

### Memory Trick

```text
debounce()
    ↓
Creates timer variable
    ↓
Returns function
    ↓
Returned function remembers timer
    ↓
Closure
```

---

# 6. Why `clearTimeout()` Is Important

This is the most important part of debouncing:

```js
clearTimeout(timer);
```

It cancels the previous pending timer before creating a new one.

Without it:

```text
Event
 ↓
Timer 1

Event
 ↓
Timer 2

Event
 ↓
Timer 3

All timers eventually execute
        ↓
Multiple function calls ❌
```

With it:

```text
Event
 ↓
Timer 1
 ↓
New event
 ↓
Cancel Timer 1
 ↓
Timer 2
 ↓
New event
 ↓
Cancel Timer 2
 ↓
Final Timer
 ↓
Execute once
```

---

# 7. Debounce Timer Flow

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

# 8. Real-Life Uses of Debouncing

Debouncing is useful when the **final action matters**.

```text
Search Input
Autocomplete
Search Suggestions
Auto Save
Form Validation
Resize Handling
```

Example:

```text
User typing search query
        ↓
Don't call API yet
        ↓
User stops typing
        ↓
Call API once
```

---

# 9. Reusable Debounce Function

A more reusable implementation:

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

This supports:

```text
Multiple Arguments
        +
Dynamic `this`
```

Instead of:

```js
function (value)
```

we use:

```js
function (...args)
```

so any number of arguments can be passed.

---

# 10. Why `fn.apply(this, args)`?

If the original function depends on:

```js
this
```

we may want to preserve the wrapper's current `this`.

```js
fn.apply(this, args);
```

`apply()`:

```text
apply()
│
├── Calls a function
├── Sets `this`
└── Passes arguments as an array
```

Example:

```js
fn.apply(this, args);
```

---

# 11. Throttling

> **Throttling limits how frequently a function can execute, allowing it to run at most once within a specified time interval.**

For the implementation below:

> **Throttle executes immediately on the first event, blocks subsequent events while the timer is running, and allows execution again after the timer finishes.**

### Simple Meaning

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

---

# 12. Why Do We Need Throttling?

Scroll events can happen continuously:

```text
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

With a throttle of `500ms`:

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

# 13. Throttle Code

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

# 14. Using Throttle

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

# 15. Closure in Throttling

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

The returned function uses these variables:

```text
fn
delay
canRun
```

Therefore, a closure keeps them accessible.

```text
Returned Function
      ↓
Closure
      │
      ├── fn
      ├── delay
      └── canRun
```

> **Throttling uses closure to remember the execution state between calls.**

---

# 16. How Throttling Works

Initially:

```text
canRun = true
```

### First Event

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

### More Events During the Delay

```text
Event
 ↓
canRun === false
 ↓
return
 ↓
Ignore
```

### After Delay

```js
setTimeout(() => {
  canRun = true;
}, delay);
```

Now:

```text
canRun = true
```

The next event can execute again.

---

# 17. Why `apply()` Is Used in Throttle

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

Because the wrapper is called as a method:

```text
user1.throttleSearch()
```

inside the normal wrapper:

```text
this → user1
```

Then:

```js
fn.apply(this, args);
```

conceptually becomes:

```js
search.search.apply(
  user1,
  ["React"]
);
```

Therefore inside `search.search`:

```text
this → user1
```

and:

```js
this.name
```

becomes:

```text
Gourav
```

---

# 18. Throttle with `user2`

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

# 19. Debounce vs Throttle

| Debounce                    | Throttle                               |
| --------------------------- | -------------------------------------- |
| Waits until events stop     | Limits execution frequency             |
| Timer resets on every event | Events are limited during the interval |
| Final action matters        | Continuous updates matter              |
| Search box                  | Scroll                                 |
| Auto-save                   | Resize                                 |
| Search suggestions          | Mouse movement                         |
| Form validation             | Continuous event tracking              |

### Easy Difference

```text
DEBOUNCE

Event → Event → Event → Event
                       ↓
                  User stops
                       ↓
                    Execute
```

```text
THROTTLE

Event → Event → Event → Event → Event → Event
  ↓                          ↓
Execute                   Execute
```

### Memory Trick

```text
Debounce
   ↓
"Wait until you stop"

Throttle
   ↓
"Slow down how often you run"
```

---

# 20. Real-Life Example

## Debounce — Elevator

The elevator waits until people stop entering.

```text
Person enters
     ↓
Wait
     ↓
Another enters
     ↓
Reset wait
     ↓
Another enters
     ↓
Reset wait
     ↓
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

## Throttle — Gate

A gate allows one action and temporarily blocks the next ones.

```text
Person
  ↓
Allowed
  ↓
Gate locked for 500ms
  ↓
Person → Blocked
Person → Blocked
  ↓
500ms finishes
  ↓
Gate opens
  ↓
Next Person → Allowed
```

This is similar to:

```text
Throttle
```

---

# 21. Memory Leaks

> **A memory leak occurs when memory is no longer logically needed but remains reachable because some reference still exists, preventing it from being reclaimed.**

JavaScript has automatic garbage collection.

### Normal Case

```text
Create Object
     ↓
Use Object
     ↓
No references remain
     ↓
Eligible for Garbage Collection
```

### Memory Leak

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

# 22. Garbage Collection

> **Garbage Collection is the process of automatically reclaiming memory that is no longer reachable/needed by the program.**

Conceptually:

```text
Object
  ↓
Any reachable reference?
     │
 ┌───┴───┐
Yes     No
 │       │
Keep    Eligible for
        Garbage Collection
```

Memory leaks happen when unwanted references remain.

---

# 23. Common Causes of Memory Leaks

```text
Memory Leaks
│
├── Unremoved Event Listeners
├── Timers Not Cleared
├── Closures Holding Unnecessary Data
├── Long-Lived Global References
└── Detached DOM References
```

---

# 24. Unremoved Event Listeners

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

When the listener is no longer needed, remove it:

```js
button.removeEventListener(
  "click",
  handleClick
);
```

This is especially important in long-running applications/components where listeners are repeatedly attached and removed.

---

# 25. Timers Not Cleared

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

### Flow

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

# 26. Closures Holding Large Objects

Closures are useful in:

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

Conceptually:

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

> This is **not automatically a memory leak**. It becomes a problem when the data is retained unnecessarily.

---

# 27. Closure: Useful vs Memory Problem

Closure itself is **NOT** a memory leak.

Example:

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
Function remains reachable for a long time
   ↓
Memory cannot be reclaimed
```

can contribute to a memory leak.

> **Closures do not automatically cause memory leaks. They can cause problems when they unintentionally keep unnecessary data reachable for longer than needed.**

---

# 28. Debouncing + Closure + Timer

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
Closure keeps variables accessible
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

# 29. Throttling + Closure + Timer

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

# 30. Important Interview Questions

## Q1. What is Debouncing?

> **Debouncing delays execution until the user stops triggering an event for a specified period.**

---

## Q2. Why is `clearTimeout()` used in Debouncing?

> **`clearTimeout()` cancels the previous pending timer so only the latest timer can complete and execute the function.**

```text
Previous timer
      ↓
clearTimeout()
      ↓
Cancelled
      ↓
New timer
      ↓
Final call
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

## Q6. Why Do We Use `apply()` in Throttle?

> **`apply()` executes the original function with a specified `this` value and passes the arguments as an array.**

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
Search Suggestions
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

## Q11. What Causes Memory Leaks?

```text
Unremoved Event Listeners
Timers Not Cleared
Closures Holding Unnecessary Data
Detached DOM References
Long-Lived Global References
```

---

# 31. Quick Interview Revision

| Concept                     | Meaning                                      |
| --------------------------- | -------------------------------------------- |
| **Debounce**                | Wait until events stop                       |
| **Throttle**                | Limit execution frequency                    |
| **`clearTimeout()`**        | Cancel previous timeout                      |
| **Closure in Debounce**     | Remembers `timer`, `fn`, `delay`             |
| **Closure in Throttle**     | Remembers `canRun`, `fn`, `delay`            |
| **`apply()`**               | Sets `this` and passes arguments as an array |
| **Memory Leak**             | Unneeded memory remains reachable            |
| **Garbage Collector**       | Reclaims unreachable memory                  |
| **`clearInterval()`**       | Stops an interval                            |
| **`removeEventListener()`** | Removes a registered event listener          |

---

# 32. Final Memory Trick

### Debounce

```text
"WAIT UNTIL USER STOPS"

Typing
  ↓
Typing
  ↓
Typing
  ↓
STOP
  ↓
Wait
  ↓
Execute
```

### Throttle

```text
"EXECUTE, THEN WAIT"

Execute
   ↓
Block
   ↓
Block
   ↓
Allow
   ↓
Execute
```

### Memory Leak

```text
"No longer needed,
but still referenced"
```

---

# Final One-Line Revision

> **Debouncing waits until repeated events stop before executing → `clearTimeout()` cancels the previous pending timer → closure remembers the timer → throttling limits execution to at most once per interval → `apply()` can preserve the wrapper's `this` and pass arguments → memory leaks occur when unnecessary data remains reachable and therefore cannot be reclaimed by garbage collection.**

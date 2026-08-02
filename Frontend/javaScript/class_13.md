# JavaScript Interview Questions — Events & Event Propagation

---

# JavaScript Events

```text
Events
│
├── Event Object
├── Event Listener
├── Event Handler
├── Event Target
├── currentTarget
├── Event Flow
│     ├── Capturing Phase
│     ├── Target Phase
│     └── Bubbling Phase
├── Event Propagation
├── stopPropagation()
├── stopImmediatePropagation()
├── preventDefault()
├── Default Action
├── Event Delegation
├── Custom Events
├── Event Loop (different topic)
└── Passive Events
```

---

# 1. What is an Event?

> **An event is an action or occurrence that happens in the browser which JavaScript can respond to.**

Examples:

```text
Mouse Click
Double Click
Key Press
Scroll
Mouse Move
Form Submit
Resize
Input Change
```

Example:

```js
document.getElementById("btn").addEventListener("click", () => {
    alert("Clicked using addEventListener!");
});
```

Another example:

```js
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

Flow:

```text
User Action
    ↓
Event Occurs
    ↓
Browser Detects Event
    ↓
Event Listener
    ↓
Event Handler Executes
```

---

# 2. What is an Event Listener?

> **An event listener waits for a specific event on an element and invokes the registered handler when that event occurs.**

Example:

```js
button.addEventListener("click", handleClick);
```

Here:

```text
button
   │
   ▼
Event Listener
   │
   │ waiting for
   ▼
"click"
   │
   ▼
handleClick()
```

Simple way to remember:

```text
Listener = Waits
Handler  = Runs
```

---

# 3. What is an Event Handler?

> **An event handler is the function that executes when the event occurs.**

Example:

```js
button.addEventListener("click", function () {
    console.log("Button clicked");
});
```

Here:

```js
function () {
    console.log("Button clicked");
}
```

is the **event handler**.

---

# 4. Event Listener vs Event Handler

Consider:

```js
btn.addEventListener("click", function (event) {
    console.log("Button Clicked");
});
```

Here:

### Event

```text
click
```

### Event Listener Registration

```js
btn.addEventListener(...)
```

### Event Handler

```js
function (event) {
    console.log("Button Clicked");
}
```

Simple interview difference:

| Event Listener                | Event Handler                     |
| ----------------------------- | --------------------------------- |
| Registers/waits for an event  | Function executed for the event   |
| Uses `addEventListener()`     | Contains the actual logic         |
| Associated with an event type | Runs when the event is dispatched |

Memory trick:

```text
Listener
   ↓
"I am waiting for click"


Handler
   ↓
"Click happened, run me"
```

---

# 5. What is an Event Object?

> **The Event Object is automatically created by the browser when an event occurs and contains information about that event.**

Example:

```js
btn.addEventListener("click", function (event) {

    console.log(event);

});
```

The browser automatically provides:

```js
event
```

to the handler.

---

# 6. Why Do We Need an Event Object?

The event object tells us things like:

```text
Which element triggered the event?
What type of event occurred?
Where was the mouse?
Which keyboard key was pressed?
When did the event occur?
Can the default behavior be prevented?
```

Conceptually, you can imagine an event object like:

```js
const event = {

    type: "click",

    target: button,

    currentTarget: button,

    clientX: 200,

    clientY: 100,

    timeStamp: 123456,

    preventDefault() {},

    stopPropagation() {}

};
```

This is only a simplified conceptual representation.

The actual browser `Event` object contains many properties and methods depending on the event type.

---

# 7. Important Event Object Properties

Some important properties are:

```text
event.type
event.target
event.currentTarget
event.timeStamp
event.clientX
event.clientY
event.key
```

Example:

```js
button.addEventListener("click", function (event) {

    console.log(event.type);

    console.log(event.target);

    console.log(event.currentTarget);

});
```

---

# 8. What is `event.target`?

> **`event.target` is the element where the event originally occurred.**

Example HTML:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

Suppose we click:

```text
button
```

Then:

```text
event.target
      ↓
button
```

Even if the listener is attached to the parent.

---

# 9. What is `event.currentTarget`?

> **`event.currentTarget` is the element whose event listener is currently executing.**

Example:

```js
parent.addEventListener("click", function (event) {

    console.log(event.target);

    console.log(event.currentTarget);

});
```

If the button is clicked:

```text
event.target
     ↓
button


event.currentTarget
     ↓
parent
```

Why?

Because:

```text
button
  ↓
Originally triggered the event


parent
  ↓
Contains the currently executing listener
```

---

# 10. `target` vs `currentTarget`

This is an important interview question.

| `event.target`                              | `event.currentTarget`                       |
| ------------------------------------------- | ------------------------------------------- |
| Element where event originated              | Element whose listener is currently running |
| Usually remains the same during propagation | Changes as different listeners execute      |
| Useful in event delegation                  | Useful to identify listener owner           |

Example:

```text
Parent
│
└── Button ← Clicked
```

Listener attached to:

```text
Parent
```

Then:

```text
target        → Button

currentTarget → Parent
```

Memory trick:

> **target = Where it started**

> **currentTarget = Where the current listener is running**

---

# 11. What is Event Propagation?

> **Event Propagation is the process by which an event travels through the DOM tree when an event occurs.**

It has three phases:

```text
Capturing
    ↓
 Target
    ↓
Bubbling
```

Complete flow:

```text
Window
  │
  ▼
Document
  │
  ▼
HTML
  │
  ▼
Body
  │
  ▼
Parent
  │
  ▼
Target
  │
  ▼
Parent
  │
  ▼
Body
  │
  ▼
HTML
  │
  ▼
Document
  │
  ▼
Window
```

First it travels **down**.

Then it reaches the **target**.

Then it travels **up**.

---

# 12. Event Flow

Suppose:

```html
<div id="grandParent">

    Grand Parent

    <div id="parent">

        Parent

        <button id="child">
            Click Me
        </button>

    </div>

</div>
```

DOM structure:

```text
Window
  │
Document
  │
HTML
  │
Body
  │
Grand Parent
  │
Parent
  │
Button
```

If we click the button:

```text
          CAPTURING
              ↓

Window
  ↓
Document
  ↓
HTML
  ↓
Body
  ↓
Grand Parent
  ↓
Parent
  ↓
Button

        TARGET PHASE

          Button

          BUBBLING
              ↑

Button
  ↑
Parent
  ↑
Grand Parent
  ↑
Body
  ↑
HTML
  ↑
Document
  ↑
Window
```

---

# 13. Capturing Phase

> **During the Capturing Phase, the event travels from the top of the DOM tree toward the target element.**

Flow:

```text
Window
  ↓
Document
  ↓
HTML
  ↓
Body
  ↓
Parent
  ↓
Target
```

By default, listeners are normally registered for the bubbling phase.

To listen during capturing:

```js
element.addEventListener("click", handler, {
    capture: true
});
```

You can also write:

```js
element.addEventListener("click", handler, true);
```

---

# 14. Capturing Example

```js
grandParent.addEventListener(
    "click",
    () => {
        console.log("Grand Parent");
    },
    true
);

parent.addEventListener(
    "click",
    () => {
        console.log("Parent");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Child");
    },
    true
);
```

When the child is clicked, conceptually the capturing order is:

```text
Grand Parent
     ↓
Parent
     ↓
Child
```

---

# 15. Target Phase

> **The Target Phase occurs when the event reaches the actual element where the event originated.**

Example:

```html
<button id="child">
    Click Me
</button>
```

If the user clicks the button:

```text
event.target
     ↓
child
```

The event has reached its target.

---

# 16. Bubbling Phase

> **During the Bubbling Phase, the event travels from the target element back upward through its ancestors.**

Bubbling is the normal/default listener behavior for most common bubbling events.

Flow:

```text
Target
  ↑
Parent
  ↑
Body
  ↑
HTML
  ↑
Document
  ↑
Window
```

Example:

```js
parent.addEventListener("click", () => {

    console.log("Parent clicked");

});
```

If a child button is clicked and the event bubbles:

```text
Button Click
    ↓
Button
    ↓
Parent listener can run
```

---

# 17. Bubbling Example

HTML:

```html
<div id="parent">

    <button id="child">
        Click
    </button>

</div>
```

JavaScript:

```js
parent.addEventListener("click", () => {

    console.log("Parent");

});

child.addEventListener("click", () => {

    console.log("Child");

});
```

Click the child.

Typical bubbling order:

```text
Child
  ↓
Parent
```

Output:

```text
Child
Parent
```

---

# 18. Capturing vs Bubbling

| Capturing                    | Bubbling                |
| ---------------------------- | ----------------------- |
| Top → Target                 | Target → Top            |
| Travels downward             | Travels upward          |
| Enable using `capture: true` | Default listener phase  |
| Less commonly used directly  | Very commonly used      |
| Can intercept before target  | Powers event delegation |

Memory trick:

```text
Capturing
   ↓
TOP TO BOTTOM


Bubbling
   ↑
BOTTOM TO TOP
```

---

# 19. What is `stopPropagation()`?

> **`stopPropagation()` stops an event from propagating further through the DOM propagation path.**

It can prevent the event from continuing to other elements during capturing or bubbling.

Example:

```js
child.addEventListener("click", (event) => {

    event.stopPropagation();

    console.log("Child");

});
```

Suppose the parent also has:

```js
parent.addEventListener("click", () => {

    console.log("Parent");

});
```

Normally:

```text
Child
 ↓
Parent
```

But with:

```js
event.stopPropagation();
```

the event stops from continuing to the parent.

Output:

```text
Child
```

---

# 20. `stopPropagation()` Does NOT Mean `preventDefault()`

These two methods solve different problems.

```text
stopPropagation()
        ↓
Stops event travelling


preventDefault()
        ↓
Stops browser's default action
```

This distinction is very important.

---

# 21. What is `stopImmediatePropagation()`?

> **`stopImmediatePropagation()` stops propagation and also prevents other listeners registered on the same element from executing for that event.**

Example:

```js
button.addEventListener("click", (event) => {

    console.log("Handler 1");

    event.stopImmediatePropagation();

});

button.addEventListener("click", () => {

    console.log("Handler 2");

});
```

When clicked:

```text
Handler 1
```

The second listener does not execute.

---

# 22. `stopPropagation()` vs `stopImmediatePropagation()`

Suppose:

```js
button.addEventListener("click", handler1);

button.addEventListener("click", handler2);
```

### `stopPropagation()`

Stops the event from moving farther through the propagation path, but it does not by itself stop other listeners on the same element.

### `stopImmediatePropagation()`

Stops:

```text
Other listeners on same element
+
Further propagation
```

Memory trick:

```text
stopPropagation()
        ↓
Stop travelling


stopImmediatePropagation()
        ↓
Stop travelling
+
Stop remaining listeners here
```

---

# 23. What is a Default Action?

Some HTML elements have built-in browser behavior.

Examples:

```text
<a>        → Navigate to another page

<form>     → Submit form

checkbox   → Toggle checked state

input      → Accept/edit input
```

These are browser default actions.

---

# 24. What is `preventDefault()`?

> **`preventDefault()` prevents the browser's default action associated with an event when that event is cancelable.**

Example:

```html
<a href="https://google.com" id="link">
    Google
</a>
```

JavaScript:

```js
const link = document.getElementById("link");

link.addEventListener("click", (event) => {

    event.preventDefault();

    console.log("Link clicked");

});
```

Without:

```js
event.preventDefault();
```

the browser normally navigates to:

```text
google.com
```

With:

```js
event.preventDefault();
```

the navigation is prevented.

---

# 25. Form Example With `preventDefault()`

HTML:

```html
<form id="form">

    <input type="text">

    <button type="submit">
        Submit
    </button>

</form>
```

JavaScript:

```js
form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Handle form using JavaScript");

});
```

Without `preventDefault()`, the form's default submission behavior occurs.

With it:

```text
Form Submit
     ↓
preventDefault()
     ↓
Default browser submission prevented
     ↓
Run our JavaScript logic
```

---

# 26. `preventDefault()` vs `stopPropagation()`

| `preventDefault()`                     | `stopPropagation()`                       |
| -------------------------------------- | ----------------------------------------- |
| Stops browser default behavior         | Stops propagation through DOM             |
| Doesn't automatically stop propagation | Doesn't automatically stop default action |
| Common for forms/links                 | Common for nested event handlers          |

Example:

```js
event.preventDefault();
```

means:

```text
Don't perform browser default action
```

Whereas:

```js
event.stopPropagation();
```

means:

```text
Don't continue propagating this event
```

---

# 27. What is Event Delegation?

> **Event Delegation is a technique where we attach one event listener to a parent element instead of attaching separate listeners to multiple child elements.**

It works because of:

> **Event Bubbling**

Suppose:

```html
<ul id="list">

    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
    <li>Orange</li>

</ul>
```

Instead of:

```js
const items = document.querySelectorAll("li");

items.forEach((item) => {

    item.addEventListener("click", () => {
        console.log("Clicked");
    });

});
```

we can attach one listener:

```js
const list = document.getElementById("list");

list.addEventListener("click", (event) => {

    if (event.target.matches("li")) {

        console.log(event.target.textContent);

    }

});
```

---

# 28. How Does Event Delegation Work?

Suppose:

```text
UL
│
├── LI Apple
├── LI Mango
├── LI Banana
└── LI Orange
```

Listener exists only on:

```text
UL
```

User clicks:

```text
LI Mango
```

Flow:

```text
LI Mango clicked
      ↓
event.target = LI
      ↓
Event bubbles
      ↓
UL listener
      ↓
Check event.target
      ↓
Handle Mango click
```

So we don't need separate listeners for every `li`.

---

# 29. Why Use Event Delegation?

Main advantages:

```text
Event Delegation
│
├── Fewer Event Listeners
├── Better Efficiency
├── Less Repetitive Code
├── Easier Maintenance
└── Works With Dynamically Added Children
```

One of the biggest advantages is dynamic elements.

Suppose later we add:

```js
const item = document.createElement("li");

item.textContent = "Grapes";

list.appendChild(item);
```

The parent listener can still handle clicks from the new child because the event bubbles to the parent.

---

# 30. Event Delegation Interview Definition

> **Event Delegation uses event bubbling to handle events from multiple child elements using a single listener attached to a common parent.**

Memory:

```text
Many Children
     │
     ▼
One Parent
     │
     ▼
One Listener
```

---

# 31. Complete Event Example

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {

    console.log("Button Clicked");

});
```

Let's identify everything.

### 1. Event

```text
click
```

User clicks the button.

---

### 2. Event Listener

```js
btn.addEventListener(...)
```

The event listener waits for a specific event.

Conceptually:

```text
Button
  │
  ▼
👮 Listener

"I am waiting..."

"If someone clicks,
I'll execute the handler."
```

---

### 3. Event Handler

The handler is:

```js
function (event) {

    console.log("Button Clicked");

}
```

This function runs when the event occurs.

---

### 4. Event Object

```js
event
```

is automatically provided by the browser and contains details about the event.

---

# 32. Real-Life Example — Preventing Repeated API Calls

Suppose:

```text
User clicks Submit
        ↓
API Call


User clicks again
        ↓
API Call Again


User clicks again
        ↓
API Call Again
```

Sometimes we want the listener to work only once.

Example:

```js
const submitBtn = document.getElementById("submit");

function handleSubmit() {

    console.log("Calling API...");

    submitBtn.removeEventListener(
        "click",
        handleSubmit
    );
}

submitBtn.addEventListener(
    "click",
    handleSubmit
);
```

First click:

```text
Click
 ↓
handleSubmit()
 ↓
Calling API...
 ↓
removeEventListener()
```

Second click:

```text
Click
 ↓
Listener no longer registered
 ↓
Nothing happens
```

---

# 33. What is `removeEventListener()`?

> **`removeEventListener()` is used to remove an event listener that was previously registered using `addEventListener()`.**

Basic syntax:

```js
element.removeEventListener(
    eventType,
    handler
);
```

Example:

```js
button.removeEventListener(
    "click",
    handleClick
);
```

---

# 34. Important Rule of `removeEventListener()`

To remove the listener, you need the **same function reference** used when adding it.

For matching, the event type and relevant capture setting must also correspond.

The most important interview rule is:

> **Same function reference must be provided.**

---

# 35. ❌ Wrong `removeEventListener()`

```js
button.addEventListener("click", () => {

    console.log("Hi");

});

button.removeEventListener("click", () => {

    console.log("Hi");

});
```

Why doesn't this work?

Because every arrow function expression creates a new function object.

Conceptually:

```text
First arrow
    ↓
Function Object 0x100


Second arrow
    ↓
Function Object 0x200
```

Even though the code looks identical:

```text
0x100 ≠ 0x200
```

Therefore the listener cannot be removed using the second function.

---

# 36. ✅ Correct `removeEventListener()`

Store the function reference:

```js
const handleClick = () => {

    console.log("Clicked");

};

button.addEventListener(
    "click",
    handleClick
);

button.removeEventListener(
    "click",
    handleClick
);
```

Memory:

```text
handleClick
    │
    ▼
Function Object
    ▲
    │
addEventListener()
    │
    │ same reference
    ▼
removeEventListener()
```

Now JavaScript can identify the registered listener.

---

# 37. Why Does Function Reference Matter?

Consider:

```js
function handleClick() {

    console.log("Clicked");

}
```

Memory:

```text
handleClick
    │
    ▼
Function Object 0x100
```

Then:

```js
button.addEventListener(
    "click",
    handleClick
);
```

stores/registers that function reference.

Later:

```js
button.removeEventListener(
    "click",
    handleClick
);
```

uses the same reference:

```text
0x100
```

Therefore the listener can be removed.

---

# 38. Use Cases of `removeEventListener()`

Common use cases:

* Prevent multiple clicks or API calls
* Remove listeners during component cleanup
* Prevent unnecessary event handling
* Reduce unwanted retained references
* Disable event handling when no longer needed

---

# 39. Easier Alternative for One-Time Events

For a listener that should automatically run only once, `addEventListener()` supports:

```js
{
    once: true
}
```

Example:

```js
submitBtn.addEventListener(
    "click",
    () => {

        console.log("Calling API...");

    },
    {
        once: true
    }
);
```

Now:

```text
First Click
    ↓
Handler Executes
    ↓
Listener automatically removed


Second Click
    ↓
Handler doesn't execute
```

This is useful when you want one-time event handling.

---

# 40. What are Custom Events?

JavaScript allows us to create our own events.

Example:

```js
const event = new CustomEvent("userLogin", {

    detail: {
        username: "Gourav"
    }

});
```

Listen for it:

```js
document.addEventListener(
    "userLogin",
    (event) => {

        console.log(event.detail.username);

    }
);
```

Dispatch it:

```js
document.dispatchEvent(event);
```

Output:

```text
Gourav
```

Flow:

```text
Create CustomEvent
       ↓
Register Listener
       ↓
dispatchEvent()
       ↓
Event Occurs
       ↓
Handler Executes
```

---

# 41. What is `dispatchEvent()`?

> **`dispatchEvent()` manually dispatches an event on an EventTarget.**

Example:

```js
const event = new Event("hello");

button.addEventListener("hello", () => {

    console.log("Hello Event");

});

button.dispatchEvent(event);
```

Output:

```text
Hello Event
```

---

# 42. What are Passive Event Listeners?

A listener can be registered with:

```js
{
    passive: true
}
```

Example:

```js
window.addEventListener(
    "touchmove",
    handleMove,
    {
        passive: true
    }
);
```

A passive listener tells the browser that the handler will not call `preventDefault()` for that event.

This can help the browser optimize scrolling-related interactions.

Conceptually:

```text
Browser
   ↓
"Could this handler cancel scrolling?"
   ↓
passive: true
   ↓
"No"
   ↓
Browser can optimize accordingly
```

Important:

> **Do not use `preventDefault()` in a listener registered as passive.**

---

# 43. Event Loop vs Events

Don't confuse:

```text
DOM Events
```

with:

```text
Event Loop
```

They are related to browser/runtime behavior but are different concepts.

### Event

```text
User clicks
     ↓
click event
     ↓
Event handler
```

### Event Loop

```text
Call Stack
Queues
Async callbacks
     ↓
Event Loop coordinates execution
```

So:

> **Event = Something happened**

> **Event Loop = Runtime mechanism that coordinates when queued asynchronous callbacks/tasks get a chance to execute**

---

# 44. Complete Event Flow

Suppose the user clicks a button:

```text
User Clicks Button
        │
        ▼
Browser Creates Event Object
        │
        ▼
Event Propagation Begins
        │
        ▼
Capturing Phase
        │
Window
  ↓
Document
  ↓
HTML
  ↓
Body
  ↓
Parent
        │
        ▼
Target Phase
        │
      Button
        │
        ▼
Bubbling Phase
        │
Parent
  ↓
Body
  ↓
HTML
  ↓
Document
  ↓
Window
```

During this process, registered listeners for the relevant phase may run.

---

# 45. Complete Event Mental Model

```text
                    User Action
                        │
                        ▼
                       Event
                        │
                        ▼
                 Browser Creates
                  Event Object
                        │
                        ▼
                Event Propagation
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      Capturing       Target       Bubbling
          │             │             │
          ▼             ▼             ▼
     Top → Down      Actual       Bottom → Up
                     Element
                        │
                        ▼
                Registered Listener
                        │
                        ▼
                  Event Handler
                        │
          ┌─────────────┼──────────────────┐
          │             │                  │
          ▼             ▼                  ▼
 preventDefault() stopPropagation()  Business Logic
```

---

# 46. Important Interview Questions

## What is an Event?

> **An event is an action or occurrence in the browser that JavaScript can respond to.**

---

## What is an Event Listener?

> **An event listener registers a function to be invoked when a particular event occurs on an element.**

---

## What is an Event Handler?

> **An event handler is the function that executes in response to an event.**

---

## What is an Event Object?

> **The Event Object is automatically created by the browser and contains information about the event.**

---

## What is Event Propagation?

> **Event Propagation is the process through which an event travels through the DOM tree during capturing, target, and bubbling phases.**

---

## What is Event Capturing?

> **Capturing is the phase where an event travels from the top of the DOM tree toward the target.**

---

## What is Event Bubbling?

> **Bubbling is the phase where an event travels from the target upward through its ancestors.**

---

## What is `event.target`?

> **The element where the event originated.**

---

## What is `event.currentTarget`?

> **The element whose listener is currently executing.**

---

## What is `stopPropagation()`?

> **Stops the event from propagating further through the DOM propagation path.**

---

## What is `stopImmediatePropagation()`?

> **Stops propagation and prevents remaining listeners on the same element from executing.**

---

## What is `preventDefault()`?

> **Prevents the browser's default action for a cancelable event.**

---

## What is Event Delegation?

> **Event Delegation attaches one listener to a common parent and handles child events through event bubbling.**

---

## What is `removeEventListener()`?

> **It removes a previously registered event listener using the same function reference and matching listener information.**

---

# 47. Quick Interview Revision Table

| Concept                          | Simple Meaning                              |
| -------------------------------- | ------------------------------------------- |
| **Event**                        | Something happens in the browser            |
| **Event Listener**               | Waits/registers for an event                |
| **Event Handler**                | Function executed for the event             |
| **Event Object**                 | Contains information about the event        |
| **`target`**                     | Where the event originated                  |
| **`currentTarget`**              | Element whose listener is running           |
| **Capturing**                    | Top → Target                                |
| **Target Phase**                 | Event reaches actual target                 |
| **Bubbling**                     | Target → Top                                |
| **Propagation**                  | Event travelling through DOM                |
| **`stopPropagation()`**          | Stops further propagation                   |
| **`stopImmediatePropagation()`** | Also stops remaining same-element listeners |
| **`preventDefault()`**           | Stops browser default action                |
| **Event Delegation**             | One parent listener handles child events    |
| **`removeEventListener()`**      | Removes registered listener                 |
| **Custom Event**                 | Developer-created event                     |
| **Passive Listener**             | Promises not to cancel default behavior     |

---

# 48. Final Interview Memory Trick

```text
EVENT OCCURS
     ↓
Browser creates Event Object
     ↓
CAPTURING
Top → Target
     ↓
TARGET
     ↓
BUBBLING
Target → Top
     ↓
Listeners Run
     ↓
Handlers Execute
```

And remember:

```text
target
   ↓
"Who originally triggered me?"


currentTarget
   ↓
"Whose listener is running?"


stopPropagation()
   ↓
"Stop travelling"


stopImmediatePropagation()
   ↓
"Stop travelling + other listeners here"


preventDefault()
   ↓
"Don't perform browser default action"


Event Delegation
   ↓
"One parent listener for many children"


removeEventListener()
   ↓
"Same function reference"
```

# Final One-Line Revision

**Event occurs → browser creates an event object → event travels through capturing → reaches target → usually bubbles upward → listeners invoke handlers → `target` tells where it started → `currentTarget` tells whose listener is running → `stopPropagation()` stops propagation → `preventDefault()` stops default browser behavior → event delegation uses bubbling to handle many children with one parent listener.**

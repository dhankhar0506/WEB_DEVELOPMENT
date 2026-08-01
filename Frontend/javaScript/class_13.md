## JavaScript Events
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

1. What is an Event? => An event is an action that happens in the browser.
     Examples:  Mouse Click
                Double Click
                Key Press
                Scroll
                Mouse Move
                Form Submit
                Resize
                Input Change
   
    document.getElementById("btn").addEventListener("click", () => {
         alert("Clicked using addEventListener!");
    });


    button.addEventListener("click", () => {
        console.log("Button clicked");
    });

2. Event Listener : An event listener is a function that waits for an event and executes when that event occurs.
3. Event Handler : An event handler is the function that is executed when an event occurs.
4. Event Object : Automatically created by the browser.


## Event Propagation
-> Event Propagation is the process by which an event travels through the DOM tree when an event occurs.
It has 3 phases:    Capturing
                        ↓
                    Target
                        ↓
                    Bubbling

## Capturing Phase => 
=> The event travels from the top of the DOM (Window → Document → HTML → Body → Parent) down to the target element.
    element.addEventListener(event, handler, {
        capture: true
    });

    <div id="grandParent">
        Grand Parent

        <div id="parent">
            Parent

            <button id="child">
                Click Me
            </button>

        </div>
    </div>

##  Target Phase
=> The event reaches the actual element that triggered the event.

## Bubbling Phase (Default)
=> The event bubbles up from the target element back to the top of the DOM (Parent → Body → HTML → Document → Window).

## stopPropagation()
=> The `stopPropagation()` method is used to stop the event from propagating further in the capturing and bubbling phases. It prevents the event from reaching other elements in the DOM tree.

## preventDefault()
=> Stops the browser's default action for an element.

    <a href="https://google.com" id="link">Google</a>
    
    const link = document.getElementById("link");

    link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Link clicked");
    });
    => Without preventDefault() => it redirect to google.com
    => With preventDefault() => it will not redirect to google.com





## event Delegation 
=>Event Delegation is a technique where we attach one event listener to a parent element instead of adding listeners to multiple child elements.

## Why do we have an Event Object?
    Which element was clicked?
    Mouse position?
    Keyboard key?
    Event type?
    Timestamp?

    const event = { event object
        type: "click",
        target: button,
        currentTarget: button,
        clientX: 200,
        clientY: 100,
        timeStamp: 123456,
        preventDefault(){},
        stopPropagation(){}
    }























## example

        const btn = document.getElementById("btn");

        btn.addEventListener("click", function (event) {
            console.log("Button Clicked");
        });
    1.  Event => click (User clicks the button.)
    2.  Event Listener => btn.addEventListener(...) An event listener waits for a specific event to happen.
                      Button
                        │
                        ▼
                    👮 Listener

                    "I am waiting..."

                    "If someone clicks,
                    I'll execute the function."
    3. Event Handler => The handler is the function:
                 function (event) {
                    console.log("Button Clicked");
                }

    4. Event Object: The object automatically passed/ created by the browser containing details about the event.










## real life example
    User clicks Submit
            ↓
    API Call

    User clicks again
            ↓
    API Call Again

    User clicks again
            ↓
    API Call Again

    const submitBtn = document.getElementById("submit");

    function handleSubmit() {
        console.log("Calling API...");

        submitBtn.removeEventListener("click", handleSubmit);
    }

    submitBtn.addEventListener("click", handleSubmit);

## removeEventListener()

### Definition

`removeEventListener()` is used to remove an event listener that was previously added using `addEventListener()`. It removes the listener only if you provide the **same event type** and the **same function reference**.

### Syntax

```javascript
element.removeEventListener(eventType, handler);
```

### ❌ Wrong

```javascript
button.addEventListener("click", () => {
    console.log("Hi");
});

button.removeEventListener("click", () => {
    console.log("Hi");
});
```

**Why?**

Each arrow function creates a **new function object**, so their references are different. `removeEventListener()` removes listeners by **function reference**, not by comparing the function's code.

### ✅ Correct

```javascript
const handleClick = () => {
    console.log("Clicked");
};

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```

### Use Cases

- Prevent multiple clicks or API calls
- Remove listeners during component cleanup
- Prevent memory leaks
- Disable event handling when no longer needed

### Interview Tip

> **`removeEventListener()` removes an event listener by matching the event type and the exact same function reference used in `addEventListener()`.**
<!-- ## What is an Error Boundary?
-> An Error Boundary is a React component that catches JavaScript errors in its child component tree and shows a fallback UI instead of letting the entire UI crash.

## What Errors Do Error Boundaries Catch?
Error boundaries catch errors that happen during:
- Rendering
- Lifecycle methods

## Error boundaries do not catch every type of error.
They do not automatically catch errors in:
    Event handlers
    setTimeout
    Promises / async callbacks
    Server-side rendering -->

    # React Error Boundary

## What is an Error Boundary?

> An **Error Boundary** is a React component that catches JavaScript errors in its child component tree and shows a **fallback UI** instead of letting the entire UI crash.

### Simple Example

```text id="d2v4gk"
Parent Component
       ↓
Error Boundary
       ↓
Child Component
       ↓
Error occurs ❌
       ↓
Error Boundary catches it
       ↓
Fallback UI
```

Instead of the application showing a completely broken UI, the Error Boundary can display something like:

```text id="5l3jqu"
Something went wrong.
Please try again.
```

---

# What Errors Do Error Boundaries Catch?

Error boundaries catch errors that happen during:

* **Rendering**
* **Lifecycle methods**

### Example

If a child component throws an error while rendering:

```jsx id="u4f7av"
function Profile() {
    throw new Error("Something went wrong!");

    return <h1>Profile</h1>;
}
```

An Error Boundary can catch this error and show its fallback UI.

---

# What Errors Do Error Boundaries NOT Catch?

Error boundaries do **not** automatically catch every type of error.

They do not automatically catch errors in:

* **Event handlers**
* **`setTimeout`**
* **Promises / async callbacks**
* **Server-side rendering**

### Example: Event Handler

```jsx id="5k2v8n"
function Button() {
    const handleClick = () => {
        throw new Error("Button error");
    };

    return <button onClick={handleClick}>Click</button>;
}
```

An Error Boundary does not automatically catch this event-handler error.

For event handlers, you need to handle the error yourself:

```jsx id="g5q5jn"
const handleClick = () => {
    try {
        // Some operation
    } catch (error) {
        console.error(error);
    }
};
```

---

# Error Boundary Summary

```text id="3m7z8c"
Error Boundary
      ↓
Catches errors in child component tree
      ↓
Shows fallback UI
```

### Catches

```text id="qv0x5g"
Rendering errors
Lifecycle method errors
```

### Does NOT Automatically Catch

```text id="2w2r1n"
Event handler errors
setTimeout errors
Promise / async callback errors
Server-side rendering errors
```

## Interview Definition

> **An Error Boundary is a React component that catches errors during rendering and lifecycle methods in its child component tree and displays a fallback UI instead of allowing the affected UI to crash.**

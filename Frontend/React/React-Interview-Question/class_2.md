# Advanced React Interview Notes

## React.memo()

### What is React.memo()?

`React.memo()` is a **performance optimization** that tells React:

> "If this component's props haven't changed, you can skip rendering it."

* `React.memo()` can prevent unnecessary child re-renders.
* It is a React API / **Higher-Order Component (HOC)** that memoizes a component.

### Why Use React.memo()?

Normally, when a parent re-renders:

```text
Parent re-renders
        ↓
Child normally re-renders
```

With `React.memo()`:

```text
Parent re-renders
        ↓
React checks Child's props
        ↓
     Props same?
      ↓      ↓
    Yes      No
     ↓        ↓
   Skip     Render
```

If the child's props have not changed, React can skip rendering that child.

---

## Shallow Comparison

`React.memo()` performs a **shallow comparison** of props by default.

It checks whether each prop has the same **value/reference** as before.

* **Primitive values** → compares the value.
* **Objects, arrays, and functions** → compares the reference.

### Example

```js
const name = "Gourav";
```

Primitive value:

```text
"hello" === "hello"
→ true
```

Object:

```js
const obj1 = {};
const obj2 = {};
```

```text
obj1 === obj2
→ false
```

Even though both objects contain the same data, they are different objects in memory and therefore have different references.

---

## When Can React.memo() Fail to Prevent a Re-render?

`React.memo()` may fail to prevent a re-render when props contain **objects, arrays, or functions** because shallow comparison checks their references.

When the parent re-renders and creates new objects, arrays, or functions, their references change.

Therefore:

```text
Parent re-renders
        ↓
New object / array / function created
        ↓
Reference changes
        ↓
React.memo() sees props as changed
        ↓
Child re-renders
```

---

# useCallback()

### What is useCallback()?

We use `useCallback()` when we want to **preserve the same function reference between re-renders**, as long as its dependencies haven't changed.

```js
const handleClick = useCallback(() => {
    console.log("Hello");
}, []);
```

### Why is useCallback() Useful with React.memo()?

When passing a function to a `React.memo()` child, `useCallback()` can preserve the function reference.

```text
Parent re-renders
        ↓
useCallback()
        ↓
Same function reference
        ↓
React.memo()
        ↓
Props appear unchanged
        ↓
Child can skip re-render
```

---

# useMemo() vs useCallback()

## useMemo()

Use `useMemo()` when you have an **expensive calculation** and don't want to calculate it again on every render.

```text
Re-render
    ↓
Dependencies same?
   ↓        ↓
 Yes       No
  ↓         ↓
Use       Calculate
previous   again
result
```

Example:

```js
const result = useMemo(() => {
    return expensiveCalculation(data);
}, [data]);
```

`useMemo()` caches the **result/value** of a calculation.

---

## useCallback()

`useCallback()` caches the **function itself** between renders.

Use `useCallback()` when you need to preserve a function reference, especially when passing the function to a `React.memo()` child.

```js
const handleClick = useCallback(() => {
    console.log("Clicked");
}, []);
```

### Simple Difference

```text
useMemo()
→ Memoizes a value/result

useCallback()
→ Memoizes a function
```

---

# Referential Equality

### What is Referential Equality?

Referential equality means checking whether two **objects or functions point to the same reference** in memory.

Example:

```js
const obj1 = {};
const obj2 = obj1;

console.log(obj1 === obj2);
```

Output:

```text
true
```

Both variables point to the same object reference.

But:

```js
const obj1 = {};
const obj2 = {};

console.log(obj1 === obj2);
```

Output:

```text
false
```

They are two different object references.

---

# React Virtualization

## What is Virtualization?

Virtualization is a **performance technique** where you only render the items that are currently visible on the user's screen, rather than loading an entire massive list into the browser.

> A technique where only the visible fraction of a large dataset is rendered to the DOM at any given moment.

---

## Why is Virtualization Needed?

Rendering thousands of DOM elements can cause:

* Slow initial rendering
* High memory usage
* Slow scrolling
* More DOM work
* Poor UI performance

### Main Goal

Virtualization keeps web applications **fast and responsive** by preventing browser freezing, excessive memory usage, and slow rendering caused by loading thousands of DOM nodes simultaneously.

---

# Windowing

### What is Windowing?

Windowing means creating a small **"window"** that contains only the currently visible items from a large list.

For example:

```text
10,000 items

        VISIBLE WINDOW
    ┌─────────────┐
    │ Item 500    │
    │ Item 501    │
    │ Item 502    │
    │ Item 503    │
    │ Item 504    │
    └─────────────┘

Items outside window
→ Not rendered
```

When the user scrolls:

```text
Scroll ↓

Old visible items
→ Removed from DOM

New visible items
→ Added to DOM
```

---

## Visible Items

Virtualization calculates which items are **currently visible** in the viewport.

Only those items need to be rendered.

---

## Virtual Scrolling

Virtual scrolling means that when the user scrolls, the visible items in the window are **changed/replaced**.

This creates the effect that the user is scrolling through the entire `10,000`-item list, even though only a small number of items are actually rendered in the DOM.

```text
Large List
    ↓
Only visible items rendered
    ↓
User scrolls
    ↓
Old items removed
    ↓
New items rendered
    ↓
User feels like the entire list is scrolling
```

---

## react-window

`react-window` is a popular library for implementing **virtualization/windowing** in React applications.

---

# React Render Phase vs Commit Phase

## Render Phase

The **Render Phase** is where React figures out what the UI should look like.

* React calculates what changes are required.
* React creates/reconciles the new element tree.
* **The actual DOM is NOT changed during the Render Phase.**

## Commit Phase

The **Commit Phase** is where React applies the required changes to the **actual DOM**.

```text
State Update
     ↓
Render Phase
     ↓
React calculates changes
     ↓
Commit Phase
     ↓
DOM updated
```

---

## Which Phase Can Be Interrupted?

The **Render Phase** can be interrupted.

React can:

```text
Start rendering
      ↓
Pause
      ↓
Do higher-priority work
      ↓
Resume rendering
      ↓
Continue
```

The Commit Phase is different because React applies the actual DOM changes.

---

# useEffect()

`useEffect()` runs **after React commits the DOM update** and generally after the browser paints the updated UI.

```text
React Render
      ↓
Commit
      ↓
DOM Updated
      ↓
Browser Paint
      ↓
useEffect()
```

### Common Use Cases

`useEffect()` is commonly used for:

* API calls
* Subscriptions
* Timers
* Synchronizing with external systems

---

# useLayoutEffect()

`useLayoutEffect()` runs **after the DOM is updated but before the browser displays the updated UI**.

```text
React Render
      ↓
Commit
      ↓
DOM Updated
      ↓
useLayoutEffect()
      ↓
Browser Paint
      ↓
User sees UI
```

### Common Use Cases

`useLayoutEffect()` is mainly used for:

* DOM measurement
* Positioning elements
* Scrolling
* Making visual DOM changes that must happen before the browser paints the UI

### Simple Difference

```text
useEffect()
→ DOM updated
→ Browser paints
→ Effect runs

useLayoutEffect()
→ DOM updated
→ Effect runs
→ Browser paints
```

---

# React Batching

## What is Batching?

Batching means React **groups multiple state updates together and processes them in one render** instead of rendering after every individual state update.

Example:

```js
setCount();
setName();
setAge();
```

Instead of:

```text
setCount()
   ↓
Render

setName()
   ↓
Render

setAge()
   ↓
Render
```

React can batch them:

```text
setCount()
setName()
setAge()
     ↓
   Batch
     ↓
One Render
```

### Main Benefit

Batching reduces unnecessary renders and improves application performance.

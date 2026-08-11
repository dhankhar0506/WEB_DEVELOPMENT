# React Diffing, Fiber & Optimization

## 1. Diffing Algorithm

> **Diffing** is the process of comparing the old Virtual DOM with the new Virtual DOM to find the minimum changes required to update the Real DOM.

```text
Old Virtual DOM
       ↓
   Diffing
       ↑
New Virtual DOM
       ↓
Find what changed
       ↓
Update required parts
       ↓
Real DOM
```

---

# 2. Fiber

### Definition

> **Fiber** is React's reconciliation engine introduced in React 16 that breaks rendering work into small units, allowing React to pause, resume, prioritize, and schedule rendering efficiently.

### Important Interview Point

> **Fiber does not determine which components changed.**

* **Virtual DOM + Diffing Algorithm** → Determine what has changed.
* **Fiber** → Schedules and prioritizes rendering work.
* **React** → Updates the required parts of the Real DOM.

```text
Virtual DOM
     ↓
Diffing
     ↓
What changed?
     ↓
Fiber
     ↓
Schedule / Prioritize Rendering Work
     ↓
Real DOM Update
```

---

# Working of Fiber

React Fiber allows React to break rendering work into smaller units.

Suppose an API returns **1000 products**.

```text
API
 ↓
1000 Products
 ↓
React starts rendering
 ↓
Fiber breaks rendering into small units
 ↓
React completes some work
 ↓
React yields control to browser
 ↓
Browser handles user interaction
 ↓
React continues rendering
```

### Example

Suppose React is rendering a large list of products.

```text
1000 Products
      ↓
React starts rendering
      ↓
Some products rendered
      ↓
React yields control
      ↓
User clicks search box
      ↓
Browser handles input
      ↓
React gets control again
      ↓
Remaining work continues
```

React itself handles:

* Scheduling
* Prioritization
* Pausing
* Resuming

React decides based on:

* Available time
* Priority
* Browser workload

---

# Fiber Example with Search

Suppose an API returns **1000 products**.

React starts rendering them, but Fiber breaks the rendering work into small units instead of processing everything in one long task.

```text
API returns 1000 products
          ↓
React starts rendering
          ↓
Fiber breaks work into small units
          ↓
Some products rendered
          ↓
React yields control to browser
          ↓
User starts typing in search box
          ↓
Browser handles high-priority input
          ↓
React gets control again
```

Once the browser is free:

```text
React resumes rendering
        OR
React discards outdated work
        ↓
Starts rendering filtered product list
```

> This ability to **pause, resume, prioritize, and even abandon outdated work** is the key advantage of React Fiber.

---

# 3. React Optimization

> **Optimization** means making React faster by reducing unnecessary renders and expensive calculations.

### Important React Optimization Techniques

1. `React.memo()`
2. `useMemo()`
3. `useCallback()`
4. Lazy Loading
5. Code Splitting
6. Debouncing
7. Throttling

---

## `React.memo()`

Used to prevent unnecessary re-renders of a component when its props have not changed.

```text
Parent Re-renders
       ↓
Child props unchanged
       ↓
React.memo()
       ↓
Child can skip re-render
```

---

## `useMemo()`

Used to memoize an expensive calculated value.

```text
Expensive Calculation
        ↓
useMemo()
        ↓
Reuse previous result
        ↓
Avoid unnecessary calculation
```

---

## `useCallback()`

Used to memoize a function reference.

```text
Function
   ↓
useCallback()
   ↓
Same function reference
   ↓
Useful when passing callbacks to optimized child components
```

---

## Lazy Loading

> Loads a component only when it is actually needed.

```text
User needs component
        ↓
Component loads
        ↓
Component renders
```

---

## Code Splitting

> Divides a large JavaScript bundle into smaller chunks so that only required code can be loaded.

```text
Large Bundle
     ↓
Code Splitting
     ↓
Small Chunks
     ↓
Load when required
```

---

## Debouncing

> Delays execution until repeated events stop for a specified amount of time.

Common use cases:

* Search
* Autocomplete
* Validation
* Auto-save

```text
Typing → Typing → Typing → STOP
                         ↓
                       Wait
                         ↓
                      Execute
```

---

## Throttling

> Limits a function so it executes at most once within a specified time interval.

Common use cases:

* Scroll
* Resize
* Mouse movement

```text
Execute
   ↓
Wait / Block
   ↓
Allow
   ↓
Execute
```

---

# 4. Synchronous Rendering

> **Synchronous rendering** means React performs all rendering work in one continuous task without pausing.

During this time, the JavaScript thread is busy, so the browser cannot process other tasks like:

* Clicks
* Typing
* Scrolling

until React finishes.

### Example

```text
React starts rendering
        ↓
Rendering takes 200ms
        ↓
User clicks button
        ↓
Browser waits ❌
        ↓
Rendering completes
        ↓
Now browser handles click
```

### Problem

If rendering takes a long time:

```text
Long Rendering Task
        ↓
JavaScript thread busy
        ↓
Browser cannot respond immediately
        ↓
UI feels slow / blocked
```

---

# 🔥 Quick Interview Revision

| Topic                     | Simple Definition                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Diffing**               | Compares old and new Virtual DOM to determine required changes                       |
| **Fiber**                 | React's reconciliation engine that breaks rendering work into units and schedules it |
| **Fiber's Main Job**      | Pause, resume, prioritize, schedule, and abandon rendering work when needed          |
| **Virtual DOM + Diffing** | Determines what changed                                                              |
| **React.memo()**          | Prevents unnecessary component re-renders when props are unchanged                   |
| **useMemo()**             | Memoizes a calculated value                                                          |
| **useCallback()**         | Memoizes a function reference                                                        |
| **Lazy Loading**          | Loads code only when needed                                                          |
| **Code Splitting**        | Splits a large bundle into smaller chunks                                            |
| **Debouncing**            | Executes after repeated events stop                                                  |
| **Throttling**            | Limits execution frequency                                                           |
| **Synchronous Rendering** | Rendering happens in one continuous task without yielding                            |

# React Interview Notes

## Why React Over HTML + CSS + JavaScript?

1. **React is not automatically faster than JavaScript.**

   * Vanilla JavaScript can also update only the required DOM element.

2. **Component-Based**

   * Break a large UI into small, reusable components.

```text
App
├── Navbar
├── Product
└── Cart
```

3. **Declarative**

   * We tell React what the UI should look like instead of manually changing the DOM.

4. **State Management**

   * When state changes, React automatically updates the related UI.

5. **Reconciliation**

   * React compares the old and new UI and determines what changed.

6. **Fiber**

   * React can manage, prioritize, pause, and resume rendering work.

7. **Reusable Code**

   * Components can be reused throughout the application.

8. **Maintainable**

   * Large applications are easier to organize and maintain.

9. **Performance Optimizations**

   * React provides batching, memoization, virtualization support, lazy loading, etc.

---

# Why Is React Efficient?

React is efficient because it avoids unnecessary work when updating the UI.

* **Reconciliation** → Finds what actually changed.
* **Efficient DOM updates** → Updates only the required DOM parts.
* **Batching** → Groups multiple state updates together.
* **Fiber** → Helps React schedule and prioritize rendering work.
* **Memoization** → Can prevent unnecessary renders/calculations.
* **Virtualization** → Renders only visible items for very large lists.

---

# Reconciliation

## What Is Reconciliation?

Reconciliation is React's process of comparing the **previous and new element trees** to determine the minimum DOM changes required.

## Why Does React Need Reconciliation?

Reconciliation helps React determine:

* What changed.
* What needs to be updated in the Real DOM.
* Which existing elements can be reused.

**Keys** help React maintain the identity of elements in lists.

---

# Virtual DOM

The **Virtual DOM** is a lightweight JavaScript-object-based representation of the UI.

React uses it to keep track of the UI structure and determine what needs to change when state or props change.

---

# Real DOM

The **Real DOM** is the actual browser DOM that represents the HTML page.

---

# How Does React Identify Changes?

React compares the previous UI representation with the new UI representation and checks what is different.

### 1. Different Element Type

```text
<div>  →  <div>   → Same
<div>  →  <span>  → Different
```

### 2. Same Element Type

If the element type is the same, React can reuse the existing element and update its content.

### 3. Key in Lists

A **key** is a unique identifier that React uses to identify each item in a list.

---

# Re-render vs DOM Update

### Re-render

A **re-render** means React runs the component again to calculate what the UI should look like.

### DOM Update

A **DOM update** means React actually changes something in the browser's Real DOM.

> A re-render does not always cause a Real DOM update.

```text
Re-render
   ↓
React calculates the UI
   ↓
Reconciliation
   ↓
Is there an actual change?
   ↓
Yes → Update DOM
No  → No DOM update
```

---

# Role of `key`

`key` helps React identify which item is which when rendering lists.

React uses keys during list reconciliation to identify:

* Which items are the same.
* Which items were added.
* Which items were removed.
* Which items were moved.

Therefore, stable and unique keys help React preserve the correct component identity and state.

---

# Why Should We Avoid Array Index as Key?

We should avoid using the **array index as a key** when the list can be:

* Added to.
* Removed from.
* Reordered.

### Before

```text
Gourav → key 0
Rahul  → key 1
Amit   → key 2
```

Suppose we add `"Raj"` at the beginning.

### After

```text
Raj    → key 0
Gourav → key 1
Rahul  → key 2
Amit   → key 3
```

The keys now point to different items.

Therefore, when a list can change order or have items inserted/removed, use a **stable and unique value** as the key.

---

# Reconciliation of Lists

React uses keys during list reconciliation to identify and match items between the previous and new lists.

```text
Previous List
     ↓
React compares keys
     ↓
New List
     ↓
Identify:
- Same items
- Added items
- Removed items
- Moved items
```

Stable keys help React preserve the correct component identity and state.

---

# Fiber

## What Is Fiber?

**React Fiber** is React's internal architecture for handling rendering and reconciliation work efficiently.

It represents the UI as a **Fiber tree** and allows React to:

* Prioritize rendering work.
* Pause rendering work.
* Resume rendering work.
* Discard rendering work when needed.

---

# Fiber Architecture

Fiber architecture represents the React application as a tree of **Fiber nodes**, where each node represents a unit of rendering work.

```text
App
├── Header
├── Main
│   ├── Card
│   └── Card
└── Footer
```

---

# Concurrent Rendering

Concurrent Rendering means React can:

```text
Work on rendering
      ↓
Pause that work
      ↓
Handle more important updates
      ↓
Continue the previous work
```

React can also discard previous rendering work when necessary.

> Concurrent rendering does not mean React renders multiple UIs simultaneously. It means React can manage rendering work by deciding what should happen first and when.

---

# Scheduling

**Scheduling** means React decides which update should be handled first based on its priority.

For example:

```text
User interaction
      ↓
Higher priority
      ↓
Handle first

Large background update
      ↓
Lower priority
      ↓
Handle later
```

---

# Why Was Fiber Introduced?

Before Fiber, React's rendering work was mostly synchronous, so a large update could block the UI until it finished.

Fiber was introduced to make rendering more flexible and responsive by allowing React to:

* Prioritize work.
* Pause work.
* Resume work.
* Discard work when needed.

---

# What Is a Fiber Node?

A **Fiber Node** is an internal data structure in React that represents a unit of rendering work.

It stores the information React needs for:

* Reconciliation.
* Scheduling.
* Updating the UI.

A Fiber Node is React's internal representation of a unit in the UI tree.

```text
        App
         ↓
    ┌────┼────┐
    ↓    ↓    ↓
 Header Main Footer
```

Each part can be represented internally by a Fiber node.

---

# Render Phase

The **Render Phase** is when React:

* Runs components.
* Performs reconciliation.
* Determines what changes are needed in the UI.

The Render Phase calculates what the UI should look like.

---

# Commit Phase

The **Commit Phase** is when React applies the changes determined during the Render Phase to the DOM.

```text
Render Phase
     ↓
React determines changes
     ↓
Commit Phase
     ↓
Changes applied to DOM
```

---

# Interruptible Rendering

If a high-priority task, such as typing or clicking, occurs while React is in the middle of a slow render:

```text
Slow rendering work
       ↓
User clicks / types
       ↓
React pauses or abandons slow work
       ↓
Handles user interaction
       ↓
Resumes background work later
```

This helps keep the UI responsive.

---

# Prioritizing Updates

Prioritizing updates means React can treat some updates as **more urgent than others** and process the important work first.

For example:

```text
Higher Priority
      ↓
User interactions
      ↓
Typing
Clicking
Pressing a button
Direct UI interactions
```

Compared with:

```text
Lower Priority
      ↓
Large list updates
Expensive filtering
Non-urgent UI updates
Transition updates
```

---

# How Does Fiber Enable Concurrent Rendering?

Fiber enables concurrent rendering by breaking rendering work into **units** that React can:

* Schedule.
* Prioritize.
* Pause.
* Resume.
* Discard.

React can do this before committing the final result to the DOM.

---

# React Node

A **React Node** is anything React can render.

Examples:

```jsx
<div>Hello</div>
```

```text
"Hello"
```

```text
123
```

```jsx
<Component />
```

```text
null
```

---

# React Scheduling / Fiber Scheduling

## What Is React Scheduling?

React Scheduling is the process by which React **prioritizes and manages updates** so that urgent work, such as user interactions, can be handled before less important work.

### Simple Flow

```text
React Scheduler
       ↓
Decides Priority
"Which update is more important?"
       ↓
Fiber
       ↓
Manages Rendering Work
       ↓
Can Pause → Resume → Continue
       ↓
Commit
       ↓
DOM Update
```

---

# Which Work Has Higher Priority?

## Higher Priority

```text
User Interactions
├── Typing
├── Clicking
├── Pressing a button
└── Direct UI interactions
```

## Lower Priority

```text
├── Large list updates
├── Expensive filtering
├── Non-urgent UI updates
└── Transition updates
```

---

# `useTransition`

`useTransition` is a React Hook used to mark a state update as **non-urgent**.

This allows React to prioritize more important UI interactions, such as typing or clicking, before rendering the expensive update.

```jsx
startTransition(() => {
    setQuery(value);
});
```

### Simple Idea

```text
User typing
    ↓
Urgent
    ↓
Handle immediately

Large UI update
    ↓
Non-urgent
    ↓
Can be handled later
```

---

# `useDeferredValue`

`useDeferredValue` is a React Hook that allows a value to temporarily **lag behind its latest value**.

This helps ensure that expensive UI using that value doesn't block more important user interactions.

```jsx
const deferredSearch = useDeferredValue(search);
```

### Simple Idea

```text
search
  ↓
Latest value immediately available

deferredSearch
  ↓
Can temporarily lag
  ↓
Expensive UI can update later
```

---

# Complete React Mental Model

```text
COMPONENTS / JSX
        ↓
React Elements
        ↓
FIBER TREE
   ┌────┼────┐
   ↓    ↓    ↓
 Fiber Fiber Fiber
 Node  Node  Node
   ↓
Rendering Work
        ↓
Render Phase
        ↓
Reconciliation
        ↓
What has changed?
        ↓
Commit Phase
        ↓
Real DOM
```

---

# What Causes a Component to Re-render?

A component can re-render because of:

### 1. State Update

When you update state using a React state setter, React schedules a re-render.

```jsx
setCount(10);
```

### 2. Parent Re-render

If a parent component re-renders, its child components normally also re-render.

### 3. Props Change

When a component receives new props, it can re-render.

### 4. Context Change

If a component uses a context and the context value changes, that component can re-render.

---

# Does Re-render Mean DOM Update?

**No.**

A component can re-render without React making an actual change to the Real DOM.

```text
Component Re-render
       ↓
React calculates UI
       ↓
Reconciliation
       ↓
No actual change
       ↓
No DOM update
```

---

# Does Changing a Normal Variable Cause a Re-render?

**No.**

Changing a normal JavaScript variable does not tell React that the UI needs to be rendered again.

React state should be used when a value needs to trigger a UI update.

---

# Render Phase vs Commit Phase

### Render Phase

React calculates what the UI should look like.

### Commit Phase

React applies the required changes to the actual DOM.

```text
State / Props Update
        ↓
Render Phase
        ↓
Calculate Changes
        ↓
Commit Phase
        ↓
Update Real DOM
```

---

# Update Queue

The **Update Queue** is an internal React mechanism that stores state updates until React processes them.

Example:

```text
setCount(1) ─┐
setCount(2) ─┼──→ Update Queue
setCount(3) ─┘
```

React processes the updates from the queue according to its rendering and scheduling logic.

---

# Batching

## What Is Batching?

Batching means React groups multiple state updates together and processes them in **fewer renders**.

Instead of:

```text
Update 1
   ↓
Render

Update 2
   ↓
Render

Update 3
   ↓
Render
```

React can batch them:

```text
Update 1 ─┐
Update 2 ─┼──→ Batch → Render
Update 3 ─┘
```

### Example

```jsx
setCount();
setName();
setAge();
```

React can group these updates and process them together.

---

# Lanes

**Lanes** are React's internal way of representing the **priority/category of updates**.

Example:

```text
Update A → High Priority Lane
Update B → Low Priority Lane
Update C → High Priority Lane
```

Lanes help React determine which updates should be processed first.

---

# Complete Update Flow

```text
User clicks button
       ↓
React event handler runs
       ↓
handleClick()
       ↓
setCount()
setName()
setAge()
       ↓
Updates are batched
       ↓
React processes them together
       ↓
One render
       ↓
Commit
       ↓
DOM Update
```

---

# ⭐ Interview Quick Revision

| Concept                  | Simple Definition                                                             |
| ------------------------ | ----------------------------------------------------------------------------- |
| **Reconciliation**       | React compares previous and new UI to determine what changed.                 |
| **Virtual DOM**          | JavaScript representation of the UI used by React to track UI changes.        |
| **Real DOM**             | Actual DOM maintained by the browser.                                         |
| **Key**                  | Helps React identify list items and preserve their identity.                  |
| **Fiber**                | React's internal architecture for managing rendering and reconciliation work. |
| **Fiber Node**           | A unit of rendering work in React's Fiber tree.                               |
| **Scheduling**           | Decides which update should be handled first.                                 |
| **Concurrent Rendering** | Allows React to pause, resume, prioritize, or discard rendering work.         |
| **Render Phase**         | React calculates what the UI should look like.                                |
| **Commit Phase**         | React applies changes to the actual DOM.                                      |
| **Re-render**            | React runs a component again to calculate its UI.                             |
| **DOM Update**           | React actually changes the browser DOM.                                       |
| **Batching**             | Groups multiple state updates into fewer renders.                             |
| **Update Queue**         | Stores state updates until React processes them.                              |
| **Lanes**                | Internal mechanism for representing update priority/category.                 |
| **useTransition**        | Marks an update as non-urgent.                                                |
| **useDeferredValue**     | Allows a value to temporarily lag behind the latest value.                    |
| **React Node**           | Anything React can render.                                                    |

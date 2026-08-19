<!-- ##  Avoiding Unnecessary Render
-> An unnecessary render happens when a React component re-renders even though its displayed UI does not need to change.
    Parent re-renders
        ↓
    Child also re-renders
        ↓
    But Child's data didn't change
        ↓
    Unnecessary work ❌

Ways to reduce unnecessary renders:
    React.memo
    useMemo
    useCallback
    Keep state where it is actually needed

## Component Splitting
-> Instead of putting everything into one huge component, split it into smaller components.
-> Component splitting makes code easier to maintain and can reduce unnecessary rendering work.
    Dashboard
    ├── Navbar
    ├── Sidebar
    ├── User Profile
    ├── Cart
    ├── Products
    └── Footer

## State Colocation
-> Put the state closer to where it's used
-> State colocation means keeping state as close as possible to the components that actually need it.

## Context Optimization
-> Context is useful for sharing data, but context updates can cause all consumers of that context to re-render when the provided value changes.
    Context changes
        ↓
    Components using that context
        ↓
    May re-render
> Optimization techniques
    - Split contexts    
        One huge Context
        ├── User
        ├── Theme
        ├── Cart
        └── Settings

    
## React Profiler
-> React Profiler is a tool used to find performance problems in React applications.
It helps you understand:
    Which components rendered
    How often they rendered
    How long rendering took
    Which updates caused rendering

>Example 
    User clicks button
        ↓
    React renders
        ↓
    Profiler records
        ↓
    You inspect:
    Which component?
    How long?
    Why did it render?


## React <Profiler> API
- React provides a built-in Profiler component:

    import { Profiler } from "react";
    <Profiler id="App" onRender={callback}>
        <App />
    </Profiler>

>Slow Components
: Profiler helps you find components that take a long time to render.
    App
    ↓
    ProductList
    ↓
    ProductCard

    ProductList → 50ms ❌
    ProductCard → 2ms ✅

> Unnecessary Renders
-> Profiler can help identify components that are rendering even though their output doesn't need to change.

> Expensive Renders
-> A component may render only occasionally but take a lot of time to render. -->

# React Performance Optimization

## Avoiding Unnecessary Renders

> An unnecessary render happens when a React component re-renders even though its displayed UI does not need to change.

### Example

```text id="x8qz7m"
Parent re-renders
       ↓
Child also re-renders
       ↓
But Child's data didn't change
       ↓
Unnecessary work ❌
```

### Ways to Reduce Unnecessary Renders

* `React.memo()`
* `useMemo()`
* `useCallback()`
* Keep state where it is actually needed

---

# Component Splitting

> Instead of putting everything into one huge component, split it into smaller components.

Component splitting makes code easier to maintain and can reduce unnecessary rendering work.

### Example

```text id="8b5yqk"
Dashboard
├── Navbar
├── Sidebar
├── User Profile
├── Cart
├── Products
└── Footer
```

Instead of having all the UI and logic inside one large `Dashboard` component, we divide it into smaller components.

### Benefits

* Easier to maintain
* Easier to understand
* Components can be reused
* Can reduce unnecessary rendering work

---

# State Colocation

> State colocation means keeping state as close as possible to the components that actually need it.

### Example

If only a `SearchBox` needs search state, keep the state inside or near the `SearchBox` instead of putting it in the top-level `App`.

```text id="g7a4k2"
Before:

App
 ↓
Search State
 ↓
Many Components
 ↓
Only SearchBox needs it


Better:

App
 ↓
SearchBox
 ↓
Search State
```

### Simple Definition

> **Put the state closer to where it is used.**

This can reduce unnecessary re-renders because unrelated components do not need to re-render when that state changes.

---

# Context Optimization

> Context is useful for sharing data, but context updates can cause all consumers of that context to re-render when the provided value changes.

### Example

```text id="k3x8pm"
Context changes
      ↓
Components using that context
      ↓
May re-render
```

### Problem with One Large Context

```text id="5h4w1s"
One huge Context
├── User
├── Theme
├── Cart
└── Settings
```

If the context value changes, multiple components consuming that context may re-render, even if they only need a different part of the data.

---

## Context Optimization Techniques

### Split Contexts

Instead of one large context, create separate contexts.

```text id="c4x2pz"
UserContext
    ↓
User-related components

ThemeContext
    ↓
Theme-related components

CartContext
    ↓
Cart-related components

SettingsContext
    ↓
Settings-related components
```

This can reduce the number of components affected by an individual context update.

---

# React Profiler

> React Profiler is a tool used to find performance problems in React applications.

It helps you understand:

* Which components rendered
* How often they rendered
* How long rendering took
* Which updates caused rendering

### Example

```text id="p8w3yn"
User clicks button
       ↓
React renders
       ↓
Profiler records
       ↓
You inspect:
       ↓
Which component?
How long?
Why did it render?
```

---

# React `<Profiler>` API

React provides a built-in `Profiler` component:

```jsx id="3yqk8n"
import { Profiler } from "react";

<Profiler id="App" onRender={callback}>
    <App />
</Profiler>
```

The `onRender` callback receives information about the render, which can be used to analyze performance.

---

# Slow Components

Profiler helps you find components that take a long time to render.

### Example

```text id="j9z2kx"
App
 ↓
ProductList
 ↓
ProductCard

ProductList → 50ms ❌
ProductCard → 2ms  ✅
```

Here, `ProductList` takes more time to render, so it may need further investigation or optimization.

---

# Unnecessary Renders

> Profiler can help identify components that are rendering even though their output doesn't need to change.

Example:

```text id="m3c7qd"
State changes
     ↓
Parent renders
     ↓
Child renders
     ↓
Child output is the same
     ↓
Unnecessary render
```

Profiler helps identify these rendering patterns.

---

# Expensive Renders

> A component may render only occasionally but take a lot of time to render.

For example:

```text id="7kq4vw"
ProductList
     ↓
Expensive calculation
     ↓
Long render time
```

Even if `ProductList` renders only once in a while, a long render time can still affect application performance.

---

# Quick Interview Summary

```text id="k4n8bw"
Avoid Unnecessary Renders
→ React.memo()
→ useMemo()
→ useCallback()
→ Keep state where it is needed

Component Splitting
→ Break large components into smaller components

State Colocation
→ Keep state close to where it is used

Context Optimization
→ Avoid unnecessary large contexts
→ Split contexts when appropriate

React Profiler
→ Find rendering performance problems
→ Shows what rendered
→ Shows how often it rendered
→ Shows render duration
→ Helps investigate why components rendered
```

## Interview-Friendly Definitions

**Unnecessary Render:**

> A render that happens even though the component's displayed UI does not need to change.

**Component Splitting:**

> Breaking a large component into smaller, focused components.

**State Colocation:**

> Keeping state as close as possible to the components that use it.

**Context Optimization:**

> Structuring and using context carefully to reduce unnecessary consumer re-renders.

**React Profiler:**

> A React performance tool used to analyze component rendering and identify performance problems.

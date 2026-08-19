<!-- ## useState 
useState is a React Hook used in functional components to store and manage data that can change over time. When the state changes, React re-renders the component with the updated value.
>const [state, setState] = useState(initialValue);

->state means data that a component needs to remember and that can change over time.

## state preservation
->React preserves state across re-renders. The initial value is used only during initialization, and React returns the existing state value on subsequent renders.

## Lazy initialization 
=> It means giving useState a function so React calculates the initial state only when it initializes the state, instead of evaluating that calculation on every render.
> const [data, setData] = useState(() => expensiveCalculation());


## State Snapshot
-> A state snapshot is the fixed state value available to a component during a particular render.
-> When state changes, the current render keeps its old value, and the new value is available in the next render.
    
    First render → count = 0  → snapshot
    Second render → count = 1 → new snapshot
    Third render → count = 2  → new snapshot

-> The state value inside the current render does not change. React processes the update and gives the new state to the next render.

## Functional Updates
-> The new state depends on the previous state.
-> If the next state depends on the previous state, prefer functional updates.
    setCount(prev => prev + 1);



Example:
    import { useState } from "react";

    function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
        setCount
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
        </div>
    );
    } -->
    # React `useState()`

## What is `useState()`?

`useState` is a React Hook used in functional components to **store and manage data that can change over time**.

When the state changes, React **re-renders the component with the updated value**.

### Basic Structure

```jsx
const [state, setState] = useState(initialValue);
```

* **`state`** → Current state value.
* **`setState`** → Function used to update the state.
* **`initialValue`** → Initial value of the state.

> **State** means data that a component needs to remember and that can change over time.

---

# State Preservation

React **preserves state across re-renders**.

The initial value is used only during initialization, and React returns the **existing state value on subsequent renders**.

```text
Initial Render
     ↓
useState(0)
     ↓
state = 0
     ↓
State Update
     ↓
Component Re-renders
     ↓
Existing state is preserved
```

---

# Lazy Initialization

Lazy initialization means giving `useState` a **function** so React calculates the initial state only when it initializes the state, instead of evaluating that calculation on every render.

```jsx
const [data, setData] = useState(() => expensiveCalculation());
```

### Example

```jsx
const [data, setData] = useState(() => {
  return expensiveCalculation();
});
```

> Lazy initialization is useful when calculating the initial state is expensive.

---

# State Snapshot

A **state snapshot** is the fixed state value available to a component during a particular render.

When state changes, the current render keeps its old value, and the new value is available in the **next render**.

```text
First render  → count = 0 → snapshot
Second render → count = 1 → new snapshot
Third render  → count = 2 → new snapshot
```

### Important Point

The state value inside the **current render does not change**.

React processes the update and gives the new state to the **next render**.

```text
Current Render
count = 0
    ↓
setCount(1)
    ↓
React processes update
    ↓
Next Render
count = 1
```

---

# Functional Updates

Functional updates are used when the **new state depends on the previous state**.

If the next state depends on the previous state, prefer a **functional update**.

```jsx
setCount(prev => prev + 1);
```

Here:

* `prev` → previous state value
* `prev + 1` → new state value

---

# Example — Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
```

---

# Why Use Functional Updates?

When the new state depends on the previous state, functional updates are safer and clearer.

```jsx
setCount(prev => prev + 1);
```

Instead of:

```jsx
setCount(count + 1);
```

For example, if multiple updates depend on the previous value:

```jsx
const increase = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};
```

The updates are processed using the latest previous state values.

```text
count = 0
   ↓
+1 → 1
   ↓
+1 → 2
   ↓
+1 → 3
```

---

# Interview Definition

> **`useState` is a React Hook used to add state to functional components. When the state is updated, React re-renders the component with the new state value.**

## Easy Way to Remember

```text
useState
   ↓
Stores data
   ↓
Data changes
   ↓
State update
   ↓
React re-renders
   ↓
UI gets updated
```

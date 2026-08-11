# Props & State

## What are Props?

**Props (Properties)** are read-only data passed from a parent component to a child component.

They are used to make components **reusable and dynamic**.

> **Props = Data passed from Parent → Child**

Props in React are **read-only inputs** passed from parent to child components, making the UI dynamic and reusable with different data.

---

## Props Flow

```text
Parent Component
        │
        │  name="Gourav"
        ▼
Child Component
        │
        ▼
props.name
        │
        ▼
Display UI
```

### Parent Component

```jsx
function App() {
    return (
        <>
            <Student name="Gourav" />
            <Student name="Rahul" />
        </>
    );
}
```

### Child Component

```jsx
function Student(props) {
    return <h1>Hello {props.name}</h1>;
}
```

### Output

```text
Hello Gourav
Hello Rahul
```

---

## Can Child Modify Props?

**No ❌**

Props are **read-only (immutable)**.

---

## Why Are Props Immutable?

Props are immutable because they are **owned by the parent component**.

Allowing a child to modify them would:

* Break React's one-way data flow
* Make the application's state harder to predict
* Make debugging more difficult

---

# What is One-Way Data Flow?

**One-Way Data Flow** means data always flows in one direction:

```text
Parent Component
       │
       │ Props
       ▼
Child Component
```

> Data flows from **Parent → Child** through Props.

---

# Importance of Props

### 1. Make UI Dynamic

Components can display different content based on the props they receive.

### 2. Enable Reusability

The same component can be reused with different data.

```jsx
<Student name="Gourav" />
<Student name="Rahul" />
```

### 3. Read-Only

Props cannot be changed inside the child component.

> Props are immutable.

---

## Why Use Props?

> To pass data from **parent to child** and make components **reusable**.

---

# What is State?

**State** is data managed inside a component that can change over time.

Whenever the state changes, React re-renders the component and updates the UI.

### Example

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </>
    );
}
```

### Flow

```text
Initial State
    ↓
count = 0
    ↓
User clicks button
    ↓
setCount(count + 1)
    ↓
State changes
    ↓
React re-renders
    ↓
UI updates
```

---

## Can We Modify State?

**Yes ✅**

State can be changed using its **setter function**.

```jsx
setCount(count + 1);
```

> State should be updated through the setter function rather than directly modifying the state variable.

---

## Why Use State?

State is used to store data that **changes over time**, such as:

* Counters
* Form values
* User input
* UI state

---

# Props vs State

| Props              | State                           |
| ------------------ | ------------------------------- |
| Passed by Parent   | Managed by Component            |
| Read-only          | Can be changed                  |
| Immutable          | Mutable through setter function |
| Used to pass data  | Used to store changing data     |
| Parent controls it | Component controls it           |

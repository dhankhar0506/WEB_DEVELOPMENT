<!-- ## Controlled Component
-> A controlled component is a form element whose value is controlled by React state.
    
    import { useState } from "react";
    function Form() {
        const [name, setName] = useState("");

        return (
            <input
            value={name} // React controls the input.
            onChange={(e) => setName(e.target.value)}
            />
        );
    }

## benifits
1. Easy Validation
2. Real-Time UI Update
3. Easy Conditional UI
4. Easy to Modify/Transform Data
5. Single Source of Truth -> Single Source of Truth means  UI is controlled by that state, keeping the data consistent and easier to manage.

## Uncontrolled Component
->  An uncontrolled component is a form element whose value is mainly managed by the DOM instead of React state.
    import { useRef } from "react";
    function Form() {
        const inputRef = useRef(null);

        const handleSubmit = () => {
            console.log(inputRef.current.value);
        };

        return (
            <>
            <input ref={inputRef} />

            <button onClick={handleSubmit}>
                Submit
            </button>
            </>
        );
    } -->

    # React Controlled and Uncontrolled Components

## Controlled Component

> A controlled component is a form element whose value is **controlled by React state**.

### Example

```jsx
import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    return (
        <input
            value={name} // React controls the input.
            onChange={(e) => setName(e.target.value)}
        />
    );
}
```

### How It Works

```text
User types
    ↓
onChange event
    ↓
setName()
    ↓
React state updates
    ↓
Component re-renders
    ↓
Input value comes from state
```

---

## Benefits of Controlled Components

### 1. Easy Validation

You can validate the input value whenever the user types.

```jsx
if (name.length < 3) {
    // Show validation error
}
```

### 2. Real-Time UI Update

The UI can update immediately whenever the state changes.

### 3. Easy Conditional UI

You can easily show or hide UI based on the input value.

```jsx
{name && <p>Hello {name}</p>}
```

### 4. Easy to Modify/Transform Data

You can modify or transform the input value before storing or displaying it.

```jsx
onChange={(e) => setName(e.target.value.toUpperCase())}
```

### 5. Single Source of Truth

> Single Source of Truth means the **React state controls the UI value**, keeping the data consistent and easier to manage.

```text
        React State
             ↓
        Input Value
             ↓
          UI
```

---

# Uncontrolled Component

> An uncontrolled component is a form element whose value is mainly managed by the **DOM instead of React state**.

React does not store the current input value in state.

Instead, we can use a **ref** to access the DOM element when we need its value.

### Example

```jsx
import { useRef } from "react";

function Form() {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        console.log(inputRef.current.value);
    };

    return (
        <>
            <input ref={inputRef} />

            <button onClick={handleSubmit}>
                Submit
            </button>
        </>
    );
}
```

### How It Works

```text
User types
    ↓
DOM manages input value
    ↓
User clicks Submit
    ↓
inputRef.current.value
    ↓
Get value from DOM
```

---

# Controlled vs Uncontrolled

| Feature              | Controlled   | Uncontrolled    |
| -------------------- | ------------ | --------------- |
| Value managed by     | React state  | DOM             |
| Uses `useState`      | Yes          | Usually no      |
| Uses `useRef`        | Not required | Commonly used   |
| Real-time validation | Easy         | Less convenient |
| UI based on input    | Easy         | Less convenient |
| Data control         | More control | Less control    |

---

## Simple Difference

```text
Controlled Component
→ React State controls the input

Uncontrolled Component
→ DOM controls the input
```

### Interview Definition

> **Controlled component:** The form input value is controlled by React state.

> **Uncontrolled component:** The form input value is managed by the DOM, and React accesses it using a ref when needed.

# React Forms

## What are Forms?

> **Forms** are used to collect user input such as:

* Login
* Registration
* Search
* Feedback
* Payment

---

# Ways to Handle Forms in React

In React, there are two ways to handle forms:

1. **Controlled Components**
2. **Uncontrolled Components**

---

# 1. Controlled Component

> A **Controlled Component** is a form element whose value is controlled by **React State**.

The input value is stored in state, and every change updates the state using `onChange`.

### Flow

```text
User Types
    │
    ▼
onChange Event
    │
    ▼
setState()
    │
    ▼
React State Updated
    │
    ▼
Input Value Updated
```

### Example

```jsx
import { useState } from "react";

function Login() {

    const [name, setName] = useState("");

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>{name}</h2>
        </>
    );
}
```

### Important

```jsx
value={name}
```

The input value comes from React state.

```jsx
onChange={(e) => setName(e.target.value)}
```

Every time the user types:

```text
Input
  ↓
onChange
  ↓
setName()
  ↓
State changes
  ↓
Component re-renders
  ↓
Input gets updated value
```

---

# Select Example

A `<select>` can also be a controlled component.

```jsx
import { useState } from "react";

function App() {

    const [city, setCity] = useState("");

    return (
        <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
        >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Jaipur">Jaipur</option>
        </select>
    );
}
```

Here:

```jsx
value={city}
```

controls the selected option using React state.

---

# Checkbox

Checkboxes use `checked` instead of `value` to control their checked state.

```jsx
import { useState } from "react";

function App() {

    const [checked, setChecked] = useState(false);

    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />

            {checked && <h2>Accepted</h2>}
        </>
    );
}
```

### Flow

```text
User checks checkbox
        ↓
onChange
        ↓
e.target.checked
        ↓
setChecked()
        ↓
State updated
        ↓
Component re-renders
        ↓
"Accepted" displayed
```

---

# Radio Buttons

```jsx
import { useState } from "react";

function App() {

    const [gender, setGender] = useState("");

    return (
        <>
            <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
            />
            Male

            <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
            />
            Female

            <h2>{gender}</h2>
        </>
    );
}
```

### Important

```jsx
checked={gender === "Male"}
```

The radio button is checked when:

```text
gender === "Male"
```

is `true`.

---

# 2. Uncontrolled Component

> An **Uncontrolled Component** is a form element where the input value is managed by the **DOM instead of React State**.

React accesses the value using a **Ref**.

```text
User Types
    ↓
DOM stores value
    ↓
React does not control every change
    ↓
useRef can access the DOM value
```

---

# What is `useRef`?

> `useRef` is a React Hook used to access DOM elements directly or store mutable values without causing a component re-render.

It returns an object containing a `.current` property.

`useRef` can be useful when we need to:

* Access a DOM element
* Focus an input
* Read a file input
* Scroll to an element
* Play or pause a video
* Store a timer/interval ID
* Store a previous value
* Work with third-party libraries

> Since changing `ref.current` does not trigger a re-render, it is useful for values that do not need to immediately update the JSX.

---

# `useRef` Example

```jsx
import { useRef } from "react";

function Counter() {

    const countRef = useRef(0);

    const increase = () => {
        countRef.current++;
        console.log(countRef.current);
    };

    return (
        <>
            <h1>{countRef.current}</h1>

            <button onClick={increase}>
                Increment
            </button>
        </>
    );
}
```

### What happens?

When the button is clicked:

```text
countRef.current++
        ↓
Value changes
        ↓
Console updates
        ↓
UI does NOT update
```

For example:

```text
Click 1 → Console: 1
Click 2 → Console: 2
Click 3 → Console: 3
```

But the `<h1>` does not automatically update because changing `ref.current` does **not** trigger a re-render.

---

# `useRef` Use Cases

| Use Case                  | Why useRef?                            |
| ------------------------- | -------------------------------------- |
| **Focus Input**           | Call `focus()` on DOM element          |
| **File Upload**           | Read selected files                    |
| **Scroll**                | Scroll to an element                   |
| **Timer**                 | Store interval ID                      |
| **Previous Value**        | Store previous value without re-render |
| **Video**                 | Play/Pause video                       |
| **Third-party Libraries** | Access DOM elements                    |

---

# Can We Use `useRef` Instead of `useState` for All Inputs?

> ❌ **No.** Because `useRef` does not trigger a re-render.

If the UI depends on the input value, use `useState`.

### Examples

Use `useState` when you need:

* Validation
* Live search
* Error messages
* Enabling/disabling buttons
* Conditional rendering
* Displaying the current value in the UI

```text
Input changes
     ↓
Does UI need to update?
     │
   ┌─┴─┐
  YES  NO
   ↓    ↓
useState useRef
```

---

# What is Re-render?

> **Re-render** means React executes the component function again to generate a new JSX/UI description.

It **does NOT reload the page**.

React then compares the new Virtual DOM with the previous one and updates the required parts of the Real DOM.

### Important

```text
Re-render ≠ Page Reload
```

A re-render means:

```text
State / Props Changed
        ↓
Component function executes again
        ↓
New JSX
        ↓
New Virtual DOM
        ↓
Compare with previous Virtual DOM
        ↓
Update required DOM parts
        ↓
Browser displays updated UI
```

---

# Re-render Example

Suppose:

```jsx
const [count, setCount] = useState(0);
```

When:

```jsx
setCount(1);
```

is called:

```text
State Changed
     ↓
Counter() executes again
     ↓
return <h1>1</h1>
     ↓
New Virtual DOM
     ↓
Compare
     ↓
Update only <h1>
     ↓
Browser shows 1
```

### Notice

```text
❌ Page Reload
❌ Browser Refresh

Only:

✅ Component executes again
```

---

# Controlled vs Uncontrolled Components

| Controlled                              | Uncontrolled                                      |
| --------------------------------------- | ------------------------------------------------- |
| React State controls the value          | DOM controls the value                            |
| Uses `useState`                         | Commonly uses `useRef`                            |
| `value` / `checked` controlled by state | Value remains in the DOM                          |
| `onChange` updates React state          | React reads the value when needed                 |
| Causes re-render when state changes     | Ref changes don't cause re-render                 |
| Useful when UI depends on input         | Useful when React doesn't need every input change |

---

# 🔥 Interview Quick Revision

> **Controlled Component** → Form value is controlled by React state.

> **Uncontrolled Component** → Form value is controlled by the DOM.

> **useState** → Use when changing the value should update the UI.

> **useRef** → Use when you need a DOM reference or a mutable value without causing a re-render.

> **Re-render** → React executes the component again to generate the updated UI description; it does not reload the page.

### Most Important Flow

```text
CONTROLLED

User Input
    ↓
onChange
    ↓
setState()
    ↓
State Update
    ↓
Re-render
    ↓
UI Update
```

```text
UNCONTROLLED

User Input
    ↓
DOM stores value
    ↓
useRef
    ↓
Read value when needed
    ↓
No automatic re-render
```

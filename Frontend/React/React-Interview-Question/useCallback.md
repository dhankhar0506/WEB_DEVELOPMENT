<!-- ## useCallback() in React
-> useCallback is a React Hook that remembers a function reference between renders and creates a new function only when its dependencies change.

    <!-- Parent -->
        import { useCallback, useState } from "react";
        import Student from "./Student";

        function App() {
            const [count, setCount] = useState(0);

            const handleStudentClick = useCallback(() => {
                console.log("Student clicked");
            }, []);

            return (
                <>
                <button onClick={() => setCount(count + 1)}>
                    Count: {count}
                </button>

                <Student onClick={handleStudentClick} />
                </>
            );
        }
        
    <!-- Child -->
        import React from "react";
        const Student = React.memo(({ onClick }) => {
        console.log("Student rendered");
            return (
                <button onClick={onClick}>
                Student Button
                </button>
            );
        });

        export default Student; -->

        # `useCallback()` in React

> `useCallback()` is a React Hook that **remembers a function reference between renders** and creates a new function only when its dependencies change.

---

# Why Do We Need `useCallback()`?

Functions are objects in JavaScript, so a function created inside a component gets a **new reference on every render**.

For example:

```jsx
function App() {
    const handleClick = () => {
        console.log("Clicked");
    };
}
```

Every time `App` re-renders:

```text
Render 1 → Function A
Render 2 → Function B
Render 3 → Function C
```

Even though the function does the same thing, its reference is different.

This can cause unnecessary child re-renders when the function is passed as a prop to a component wrapped with `React.memo()`.

---

# `useCallback()` + `React.memo()`

`useCallback()` is especially useful when passing a function to a child component that uses `React.memo()`.

### Without `useCallback()`

```text
Parent re-renders
       ↓
New function created
       ↓
New function reference
       ↓
Child receives different prop
       ↓
React.memo() sees prop changed
       ↓
Child re-renders
```

### With `useCallback()`

```text
Parent re-renders
       ↓
useCallback() returns same function reference
       ↓
Child receives same function reference
       ↓
React.memo() sees props unchanged
       ↓
Child does NOT re-render
```

---

# Complete Example

## Parent — `App.jsx`

```jsx
import { useCallback, useState } from "react";
import Student from "./Student";

function App() {
    const [count, setCount] = useState(0);

    const handleStudentClick = useCallback(() => {
        console.log("Student clicked");
    }, []);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <Student onClick={handleStudentClick} />
        </>
    );
}

export default App;
```

---

## Child — `Student.jsx`

```jsx
import React from "react";

const Student = React.memo(({ onClick }) => {
    console.log("Student rendered");

    return (
        <button onClick={onClick}>
            Student Button
        </button>
    );
});

export default Student;
```

---

# How This Example Works

Initially:

```text
App renders
   ↓
handleStudentClick created
   ↓
Student receives function
   ↓
Student renders
```

Now click the `Count` button:

```text
count changes
    ↓
App re-renders
    ↓
useCallback() returns the same function reference
    ↓
Student receives the same onClick reference
    ↓
React.memo() checks props
    ↓
Props unchanged
    ↓
Student does NOT re-render
```

---

# Why `[]` is Used Here?

```jsx
const handleStudentClick = useCallback(() => {
    console.log("Student clicked");
}, []);
```

The empty dependency array means the function does not depend on any changing value from the component.

Therefore, React can keep the same function reference across renders.

```text
Render 1 → Function A
Render 2 → Function A
Render 3 → Function A
```

---

# `useCallback()` with Dependencies

If the function uses a value that can change, that value should be included in the dependency array.

```jsx
const handleStudentClick = useCallback(() => {
    console.log(name);
}, [name]);
```

Now:

```text
name same
   ↓
Same function reference

name changes
   ↓
New function reference
```

---

# `useCallback()` vs `useMemo()`

| Hook            | Memoizes                   |
| --------------- | -------------------------- |
| `useCallback()` | Function reference         |
| `useMemo()`     | Calculated value/reference |

### Simple Way to Remember

```text
useCallback()
→ Remembers a function

useMemo()
→ Remembers a value
```

---

# Important Interview Point

> `useCallback()` does **not** prevent a component from re-rendering by itself.

It is mainly useful when a function is passed as a prop to a memoized child, such as one wrapped with `React.memo()`.

```text
useCallback()
      +
React.memo()
      ↓
Can prevent unnecessary child re-renders
```

## Interview Definition

> **`useCallback()` is a React Hook that memoizes a function reference and returns the same function between renders until its dependencies change.**

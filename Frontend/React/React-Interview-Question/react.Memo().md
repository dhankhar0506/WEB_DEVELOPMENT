<!-- ## React.memo() 
It is used to prevent a functional component from re-rendering when its props have not changed.

> Without React.memo()
   
    function App() {
        const [count, setCount] = useState(0);

        return (
            <>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <Student name="Gourav" />
            </>
        );
    }

    function Student({ name }) {
        console.log("Student rendered");
        return <h2>{name}</h2>;
    }
    
    - When you click the button:
        count changes
            ↓
        App re-renders
            ↓
        Student also re-renders

    - Even though: Student's name = "Gourav" hasn't changed.


> With React.memo()
    import React from "react";

    const Student = React.memo(function Student({ name }) {
        console.log("Student rendered");
        return <h2>{name}</h2>;
    });
        count changes
        ↓
        App re-renders
        ↓
        Student receives same name
        ↓
        React.memo checks props
        ↓
        Props unchanged
        ↓
        Student does NOT re-render


## React.memo() fails in obj , array and function
-> React.memo() can be ineffective when object or function props receive a new reference on every parent render, even if their contents are unchanged."

    function App() {
        const student = {
            name: "Gourav"
        };

        return <Student student={student} />;
    }

    const Student = React.memo(({ student }) => {
        console.log("Student rendered");

        return <h2>{student.name}</h2>;
    });

    Render 1: student → Object A
    Render 2:student → Object B

    Even though:
        Object A → { name: "Gourav" }
        Object B → { name: "Gourav" }
        
    they are different references: ObjectA === ObjectB // false

## How can we fix it?
Use useMemo() to keep the object reference stable:
    Render 1 → Object A
    Render 2 → Object A
    Render 3 → Object A -->

# React.memo()

> `React.memo()` is used to prevent a functional component from re-rendering when its **props have not changed**.

It is a **performance optimization** that can skip unnecessary child re-renders.

---

# Without React.memo()

```jsx
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <Student name="Gourav" />
        </>
    );
}

function Student({ name }) {
    console.log("Student rendered");

    return <h2>{name}</h2>;
}
```

### When You Click the Button

```text
count changes
     ↓
App re-renders
     ↓
Student also re-renders
```

Even though:

```text
Student's name = "Gourav"
```

hasn't changed.

---

# With React.memo()

```jsx
import React from "react";

const Student = React.memo(function Student({ name }) {
    console.log("Student rendered");

    return <h2>{name}</h2>;
});
```

Now:

```text
count changes
     ↓
App re-renders
     ↓
Student receives same name
     ↓
React.memo checks props
     ↓
Props unchanged
     ↓
Student does NOT re-render
```

### Important Point

`React.memo()` performs a **shallow comparison** of props by default.

---

# React.memo() with Objects, Arrays, and Functions

> `React.memo()` can be ineffective when object, array, or function props receive a **new reference on every parent render**, even if their contents are unchanged.

### Example

```jsx
function App() {
    const student = {
        name: "Gourav"
    };

    return <Student student={student} />;
}

const Student = React.memo(({ student }) => {
    console.log("Student rendered");

    return <h2>{student.name}</h2>;
});
```

Every time `App` renders, this object is created again:

```javascript
const student = {
    name: "Gourav"
};
```

So the references are different.

### Render 1

```text
student → Object A
```

### Render 2

```text
student → Object B
```

Even though:

```text
Object A → { name: "Gourav" }
Object B → { name: "Gourav" }
```

They are different references:

```javascript
ObjectA === ObjectB; // false
```

Therefore, `React.memo()` considers the prop changed and the child can re-render.

---

# Why Does This Happen?

Objects, arrays, and functions are compared by **reference**, not by their contents.

```javascript
const obj1 = { name: "Gourav" };
const obj2 = { name: "Gourav" };

console.log(obj1 === obj2); // false
```

Although their contents are the same, they are two different objects in memory.

---

# How Can We Fix It?

Use `useMemo()` to keep the object reference stable.

```jsx
import { useMemo } from "react";

function App() {
    const student = useMemo(() => {
        return {
            name: "Gourav"
        };
    }, []);

    return <Student student={student} />;
}
```

Now the reference remains stable:

```text
Render 1 → Object A
Render 2 → Object A
Render 3 → Object A
```

So `React.memo()` can recognize that the `student` prop has not changed.

---

# React.memo() + useMemo()

```text
Parent re-renders
       ↓
React.memo checks child props
       ↓
Object / Array / Function?
       ↓
Is the reference the same?
      ↙        ↘
    Yes         No
     ↓           ↓
Skip render   Re-render
```

`useMemo()` can help keep an object or array reference stable.

Similarly, `useCallback()` can help keep a **function reference** stable.

---

# Interview Summary

```text
React.memo()
→ Prevents unnecessary functional component re-renders
→ Checks props using shallow comparison
→ Works well with primitive props

Problem:
→ Objects, arrays, and functions can get new references
→ New reference = prop considered changed

Solution:
→ useMemo() → stabilize object/array reference
→ useCallback() → stabilize function reference
```

### Simple Interview Definition

> **React.memo() is a performance optimization that allows React to skip re-rendering a functional component when its props have not changed.**

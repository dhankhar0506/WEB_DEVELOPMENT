<!-- ## UseContext 
-> useContext is used to share data with multiple components without passing props through every component.

## What is Prop Drilling?
-> Prop drilling happens when data is passed from a parent component through multiple intermediate components to reach a deeply nested child, even though those intermediate components don't use the data themselves.

> Step 1: Create Context
    import { createContext } from "react";
    const UserContext = createContext();

> Step 2: Provide Data
    function App() {
        const user = "Gourav";

        return (
            <UserContext.Provider value={user}>
            <Dashboard />
            </UserContext.Provider>
        );
    }
    -> Everything inside the Provider can access: user

> Step 3: Consume Data
    import { useContext } from "react";

    function Dashboard() {
        const user = useContext(UserContext);

        return <h1>Hello {user}</h1>;
    }


## Real-Life Example — Student Profile
    src/
    ├── context/
    │   ├── StudentContext.jsx
    │   └── StudentProvider.jsx
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Dashboard.jsx
    │   └── StudentProfile.jsx
    │
    ├── App.jsx
    └── main.jsx

> Step 1 — Create Context : StudentContext.jsx
    
    import { createContext } from "react";
    const StudentContext = createContext(null);

    export default StudentContext;

> Step 2 — Create Provider : StudentProvider.jsx
> Here you can keep the shared state and API logic:
> 
    import { useState } from "react";
    import StudentContext from "./StudentContext";

    function StudentProvider({ children }) {
        const [student, setStudent] = useState({
            name: "Gourav",
            email: "gourav@example.com",
            rollNo: "12345",
            course: "Data Science",
        });

        return (
            <StudentContext.Provider
            value={{
                student,
                setStudent,
            }}
            >
            {children}
            </StudentContext.Provider>
        );
    }

    export default StudentProvider;

>Step 3 — Wrap Your Application
    Usually in main.jsx / main.tsx

    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import StudentProvider from "./StudentProvider";

    ReactDOM.createRoot(document.getElementById("root")).render(
        <StudentProvider>
            <App />
        </StudentProvider>
    );

> Step 4 — Get Student Details in Profile
    import { useContext } from "react";
    import StudentContext from "./StudentContext";

    function StudentProfile() {
        const { student } = useContext(StudentContext);
        return (
            <div>
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
            <p>Roll No: {student.rollNo}</p>
            <p>Course: {student.course}</p>
            </div>
        );
    }

    export default StudentProfile; -->

    # React `useContext()`

## What is `useContext()`?

> `useContext()` is used to share data with multiple components without passing props through every component.

It is useful when many components need access to the same data.

```text
Context
   ↓
Multiple Components
   ↓
Can access shared data
```

---

# What is Prop Drilling?

> Prop drilling happens when data is passed from a parent component through multiple intermediate components to reach a deeply nested child, even though those intermediate components don't use the data themselves.

### Example

```text
Parent
  ↓ props
Component A
  ↓ props
Component B
  ↓ props
Component C
  ↓ props
Child
```

The intermediate components only pass the data forward.

### With Context

```text
              Context
             /   |   \
            ↓    ↓    ↓
        Component A  Component B
                       ↓
                    Child
```

The child can directly access the shared data using `useContext()`.

---

# How to Use `useContext()`

There are three main steps:

```text
1. Create Context
       ↓
2. Provide Data
       ↓
3. Consume Data
```

---

# Step 1 — Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

---

# Step 2 — Provide Data

```jsx
function App() {
    const user = "Gourav";

    return (
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    );
}
```

Everything inside the `Provider` can access:

```text
user = "Gourav"
```

---

# Step 3 — Consume Data

```jsx
import { useContext } from "react";

function Dashboard() {
    const user = useContext(UserContext);

    return <h1>Hello {user}</h1>;
}
```

Here:

```text
UserContext.Provider
        ↓
value = "Gourav"
        ↓
useContext(UserContext)
        ↓
user = "Gourav"
```

---

# Real-Life Example — Student Profile

## Project Structure

```text
src/
├── context/
│   ├── StudentContext.jsx
│   └── StudentProvider.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Dashboard.jsx
│   └── StudentProfile.jsx
│
├── App.jsx
└── main.jsx
```

---

# Step 1 — Create Context

### `StudentContext.jsx`

```jsx
import { createContext } from "react";

const StudentContext = createContext(null);

export default StudentContext;
```

---

# Step 2 — Create Provider

### `StudentProvider.jsx`

Here you can keep the shared state and API logic.

```jsx
import { useState } from "react";
import StudentContext from "./StudentContext";

function StudentProvider({ children }) {
    const [student, setStudent] = useState({
        name: "Gourav",
        email: "gourav@example.com",
        rollNo: "12345",
        course: "Data Science",
    });

    return (
        <StudentContext.Provider
            value={{
                student,
                setStudent,
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;
```

---

# Step 3 — Wrap Your Application

Usually in `main.jsx` / `main.tsx`.

### `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StudentProvider from "./StudentProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StudentProvider>
        <App />
    </StudentProvider>
);
```

Now every component inside `StudentProvider` can access the student data.

```text
StudentProvider
       ↓
      App
       ↓
 ┌─────┼─────────────┐
 ↓     ↓             ↓
Navbar Dashboard StudentProfile
                       ↓
                 useContext()
                       ↓
                   student
```

---

# Step 4 — Get Student Details in Profile

### `StudentProfile.jsx`

```jsx
import { useContext } from "react";
import StudentContext from "./StudentContext";

function StudentProfile() {
    const { student } = useContext(StudentContext);

    return (
        <div>
            <h2>{student.name}</h2>

            <p>Email: {student.email}</p>

            <p>Roll No: {student.rollNo}</p>

            <p>Course: {student.course}</p>
        </div>
    );
}

export default StudentProfile;
```

---

# How the Complete Flow Works

```text
StudentContext
      ↓
Creates shared context
      ↓
StudentProvider
      ↓
Provides student + setStudent
      ↓
App
      ↓
StudentProfile
      ↓
useContext(StudentContext)
      ↓
Gets student data
```

---

# Context Can Share State and Functions

The Provider can provide both data and functions:

```jsx
<StudentContext.Provider
    value={{
        student,
        setStudent,
    }}
>
    {children}
</StudentContext.Provider>
```

Then a child can access both:

```jsx
const { student, setStudent } = useContext(StudentContext);
```

So Context can be used to share:

* State
* State update functions
* User information
* Theme
* Authentication information
* Application settings
* Other shared data

---

# Important Point — Context Does Not Automatically Mean Global State

> Context provides a way to make data available to components without manually passing props through every level.

It is commonly used for shared application data, but it is not itself a complete state-management solution.

For example:

```text
Context
   +
useState / useReducer
   ↓
Shared State
```

---

# `useContext()` vs Prop Drilling

### Prop Drilling

```text
Parent
  ↓ props
Child A
  ↓ props
Child B
  ↓ props
Child C
```

### Context

```text
           Context Provider
             /    |    \
            ↓     ↓     ↓
        Child A Child B Child C
                         ↓
                    useContext()
```

---

# Interview Summary

```text
useContext()
→ Access shared context data directly

Context
→ Allows data to be shared with components without manually
  passing props through every level

Prop Drilling
→ Passing props through intermediate components that don't need
  the data themselves

createContext()
→ Creates a Context

Provider
→ Provides the data

useContext()
→ Consumes the data
```

## Interview-Friendly Definition

> **`useContext()` is a React Hook used to access data from a Context without passing props through every intermediate component.**

### Basic Flow

```text
createContext()
      ↓
Provider
      ↓
value
      ↓
useContext()
      ↓
Component gets shared data
```

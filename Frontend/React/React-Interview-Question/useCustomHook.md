<!-- ## useCustomHook
->  custom Hook is created when we have reusable stateful logic or functionality that is needed in multiple components across the application. We put that logic inside a custom Hook and reuse it wherever needed.

## Custom Hook for API Logic
- Suppose multiple components need to fetch student data.
- Without a custom Hook, every component might repeat:

> 1. Create useFetch.js
    import { useEffect, useState } from "react";
    function useFetch(url) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
            try {
                setLoading(true);
                const  response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

            fetchData();
        }, [url]);

        return {data,loading,error,};
    }

    export default useFetch;

> 2. Use it in Student Component

    import useFetch from "./useFetch";

    function Students() {
        const { data: students, loading,error,} = useFetch("/api/students");
        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }

    return (
            <div>
            <h2>Students</h2>

            {students?.map((student) => (
                <p key={student.id}>
                {student.name}
                </p>
            ))}
            </div>
        );
    }

    export default Students; -->

    # React Custom Hooks

## What is a Custom Hook?

> A **custom Hook** is created when we have reusable **stateful logic or functionality** that is needed in multiple components across the application.

We put that logic inside a custom Hook and reuse it wherever needed.

### Simple Idea

```text
Reusable Logic
      ↓
Custom Hook
      ↓
Multiple Components
```

### Important Point

> A custom Hook is a JavaScript function whose name starts with `use` and can use other React Hooks such as `useState`, `useEffect`, etc.

Examples:

```text
useFetch()
useAuth()
useForm()
useLocalStorage()
```

---

# Custom Hook for API Logic

Suppose multiple components need to fetch student data.

Without a custom Hook, every component might repeat:

```text
Fetch API
   ↓
Manage loading
   ↓
Manage error
   ↓
Store response data
```

Instead, we can put this reusable API logic inside a custom Hook.

```text
useFetch()
   ├── API request
   ├── Loading state
   ├── Error state
   └── Response data
```

---

# 1. Create `useFetch.js`

```jsx
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error,
    };
}

export default useFetch;
```

---

# How `useFetch()` Works

```text
Component
    ↓
useFetch("/api/students")
    ↓
useEffect()
    ↓
fetch(url)
    ↓
API Response
    ↓
┌───────────────┬──────────────┐
↓               ↓              ↓
data          loading         error
```

The Hook returns:

```jsx
{
    data,
    loading,
    error
}
```

So any component using the Hook can access these values.

---

# 2. Use It in Student Component

```jsx
import useFetch from "./useFetch";

function Students() {
    const {
        data: students,
        loading,
        error,
    } = useFetch("/api/students");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Students</h2>

            {students?.map((student) => (
                <p key={student.id}>
                    {student.name}
                </p>
            ))}
        </div>
    );
}

export default Students;
```

---

# Understanding the Student Component

This line:

```jsx
const {
    data: students,
    loading,
    error,
} = useFetch("/api/students");
```

means:

```text
useFetch("/api/students")
        ↓
Returns
        ↓
data
loading
error
```

The `data` property is renamed to `students`:

```text
data → students
```

---

# Loading State

While the API request is running:

```jsx
if (loading) {
    return <p>Loading...</p>;
}
```

The user sees:

```text
Loading...
```

---

# Error State

If the API request fails:

```jsx
if (error) {
    return <p>Error: {error}</p>;
}
```

The user sees the error message.

---

# Displaying the Data

Once the API request succeeds:

```jsx
{students?.map((student) => (
    <p key={student.id}>
        {student.name}
    </p>
))}
```

The students are displayed.

---

# Complete Flow

```text
Students Component
        ↓
useFetch("/api/students")
        ↓
useEffect()
        ↓
Fetch API
        ↓
┌───────────────┐
│ API Response  │
└───────┬───────┘
        ↓
   Is request successful?
      /          \
    Yes           No
     ↓             ↓
   data          error
     ↓             ↓
Display data   Show error

While waiting:
     ↓
loading = true
     ↓
Show "Loading..."
```

---

# Why Use a Custom Hook?

### Without Custom Hook

Multiple components may repeat the same API logic:

```text
Students
  ├── fetch()
  ├── loading
  └── error

Teachers
  ├── fetch()
  ├── loading
  └── error

Courses
  ├── fetch()
  ├── loading
  └── error
```

### With Custom Hook

```text
             useFetch()
            /    |     \
           ↓     ↓      ↓
      Students Teachers Courses
```

The API logic is written once and reused.

---

# Benefits of Custom Hooks

* **Code Reusability** → Write the logic once and reuse it.
* **Cleaner Components** → Components focus more on UI.
* **Less Duplicate Code** → Avoid repeating the same state and effect logic.
* **Better Maintainability** → Changes to the shared logic can be made in one place.
* **Separation of Concerns** → UI logic and reusable stateful logic can be separated.

---

# Interview-Friendly Definition

> **A custom Hook is a reusable JavaScript function that starts with `use` and contains reusable stateful logic using React Hooks.**

### Example

```text
useFetch()
→ Reusable API fetching logic

useAuth()
→ Reusable authentication logic

useForm()
→ Reusable form logic
```

### Key Point

> **Custom Hooks share logic, not the same state.**

If two components call:

```jsx
useFetch("/api/students");
```

each component gets its **own Hook state and effect**, unless the Hook is specifically designed to use shared state from another source.

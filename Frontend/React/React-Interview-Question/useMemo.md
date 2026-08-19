<!-- ## useMemo() in React
-> useMemo is a React Hook that remembers (memoizes) the result of a calculation and reuses it until its dependencies change.
    const [number, setNumber] = useState(10);

    const result = useMemo(() => {
        console.log("Calculation running...");
        return number * 100;
    }, [number]);

    other state changes
        ↓
    component re-renders
        ↓
    number hasn't changed
        ↓
    useMemo reuses 1000
        ↓
    calculation doesn't run again

> If number changes:
    number changes
        ↓
    dependency changed
        ↓
    calculation runs again
        ↓
    new result

## example
    import { useMemo, useState } from "react";

    function StudentList() {
        const [search, setSearch] = useState("");
        const [count, setCount] = useState(0);

        const students = [
            "Gourav",
            "Rahul",
            "Aman",
            "Gaurav",
            "Rohit",
        ];

        // Expensive calculation
        const filteredStudents = useMemo(() => {
            console.log("Filtering students...");

            return students.filter((student) =>
            student.toLowerCase().includes(search.toLowerCase())
            );
        }, [search]);

        return (
            <div>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search student"
                />

                <button onClick={() => setCount(count + 1)}>
                    Count: {count}
                </button>

                {filteredStudents.map((student) => (
                    <p key={student}>{student}</p>
                ))}
            </div>
        );
    }

    export default StudentList; -->
    # React `useMemo()`

## What is `useMemo()` in React?

`useMemo` is a React Hook that **remembers (memoizes) the result of a calculation** and reuses it until its dependencies change.

### Basic Example

```jsx
const [number, setNumber] = useState(10);

const result = useMemo(() => {
  console.log("Calculation running...");
  return number * 100;
}, [number]);
```

### How `useMemo()` Works

```text
Other state changes
        ↓
Component re-renders
        ↓
number hasn't changed
        ↓
useMemo reuses 1000
        ↓
Calculation doesn't run again
```

### If `number` Changes

```text
number changes
        ↓
Dependency changed
        ↓
Calculation runs again
        ↓
New result
```

> **Important:** `useMemo` memoizes the **result/value of a calculation**, not the function itself.

---

# Example — Filtering Students

```jsx
import { useMemo, useState } from "react";

function StudentList() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const students = [
    "Gourav",
    "Rahul",
    "Aman",
    "Gaurav",
    "Rohit",
  ];

  // Expensive calculation
  const filteredStudents = useMemo(() => {
    console.log("Filtering students...");

    return students.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search student"
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {filteredStudents.map((student) => (
        <p key={student}>{student}</p>
      ))}
    </div>
  );
}

export default StudentList;
```

## What Happens in This Example?

### When `search` changes:

```text
search changes
      ↓
Component re-renders
      ↓
useMemo sees search changed
      ↓
Filtering runs again
      ↓
New filteredStudents result
```

### When only `count` changes:

```text
count changes
      ↓
Component re-renders
      ↓
search hasn't changed
      ↓
useMemo reuses previous result
      ↓
Filtering doesn't run again
```

## Interview Definition

> **`useMemo` is used to memoize an expensive calculation so that the calculation is not repeated on every render unless its dependencies change.**

### Easy Way to Remember

```text
useMemo → remembers a VALUE
useCallback → remembers a FUNCTION
```

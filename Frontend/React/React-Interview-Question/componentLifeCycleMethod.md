<!-- ## React Component Lifecycle
-> Component lifecycle means the different stages a React component goes through from being created to being removed from the UI.

1. Mounting — Component is Created
            - Mounting means the component is created and added to the DOM. 
            
            function Student() {
                return <h1>Gourav</h1>;
            }

            useEffect(() => {
                console.log("Component mounted");
            }, []);

2. Updating — Component Changes
            - A component updates when its state or props change.

3. Unmounting — Component Removed
                Unmounting means React removes the component from the UI tree. 

## example
    import { useEffect, useState } from "react";
    function StudentProfile() {
        const [name, setName] = useState("Gourav");

        // 1️⃣ Mount + Update
        useEffect(() => {
            console.log("Effect: Component mounted/updated");

            // 3️⃣ Cleanup
            return () => {
            console.log("Cleanup: Previous effect or component unmounted");
            };
        }, [name]);

        return (
            <div>
            <h1>Student Profile</h1>

            <h2>Name: {name}</h2>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>
            </div>
        );
    }

    function App() {
        const [showProfile, setShowProfile] = useState(true);

        return (
            <div>
            <button onClick={() => setShowProfile(!showProfile)}>
                Show / Hide Profile
            </button>

            {showProfile && <StudentProfile />}
            </div>
        );
    }

    export default App; -->

    # React Component Lifecycle

> Component lifecycle means the different stages a React component goes through from being **created to being removed from the UI**.

A React component mainly goes through three stages:

```text
Mounting
   ↓
Updating
   ↓
Unmounting
```

---

# 1. Mounting — Component is Created

> Mounting means the component is created and added to the DOM.

### Example

```jsx
function Student() {
    return <h1>Gourav</h1>;
}
```

We can use `useEffect()` with an empty dependency array to run an effect when the component mounts:

```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);
```

### Flow

```text
Component Created
       ↓
Component Added to DOM
       ↓
useEffect() runs
```

---

# 2. Updating — Component Changes

> A component updates when its **state or props change**.

For example:

```jsx
const [name, setName] = useState("Gourav");

setName("Rahul");
```

When `setName("Rahul")` is called:

```text
State Changes
     ↓
Component Re-renders
     ↓
Updated UI
```

---

# 3. Unmounting — Component Removed

> Unmounting means React removes the component from the UI tree.

For example:

```jsx
{showProfile && <StudentProfile />}
```

When `showProfile` becomes `false`, React removes `StudentProfile` from the UI.

```text
showProfile = true
       ↓
StudentProfile exists
       ↓
showProfile = false
       ↓
StudentProfile removed
       ↓
Unmount
```

---

# Component Lifecycle with `useEffect`

`useEffect()` can be used to perform side effects during the component lifecycle.

Example:

```jsx
useEffect(() => {
    console.log("Effect: Component mounted/updated");

    return () => {
        console.log("Cleanup: Previous effect or component unmounted");
    };
}, [name]);
```

Here, `[name]` means the effect runs when `name` changes.

The cleanup function runs:

* Before the effect runs again when `name` changes.
* When the component is unmounted.

---

# Complete Example

```jsx
import { useEffect, useState } from "react";

function StudentProfile() {
    const [name, setName] = useState("Gourav");

    // Mount + Update
    useEffect(() => {
        console.log("Effect: Component mounted/updated");

        // Cleanup
        return () => {
            console.log(
                "Cleanup: Previous effect or component unmounted"
            );
        };
    }, [name]);

    return (
        <div>
            <h1>Student Profile</h1>

            <h2>Name: {name}</h2>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>
        </div>
    );
}

function App() {
    const [showProfile, setShowProfile] = useState(true);

    return (
        <div>
            <button onClick={() => setShowProfile(!showProfile)}>
                Show / Hide Profile
            </button>

            {showProfile && <StudentProfile />}
        </div>
    );
}

export default App;
```

---

# Understanding the Example

## When `StudentProfile` is First Rendered

```text
StudentProfile created
        ↓
Mounted
        ↓
useEffect runs
        ↓
"Effect: Component mounted/updated"
```

---

## When Name Changes

User clicks:

```text
Change Name
      ↓
setName("Rahul")
      ↓
State changes
      ↓
Component re-renders
      ↓
Previous effect cleanup runs
      ↓
useEffect runs again
```

The cleanup happens before the new effect for the changed dependency.

---

## When StudentProfile is Removed

User clicks:

```text
Show / Hide Profile
        ↓
showProfile = false
        ↓
<StudentProfile /> is removed
        ↓
StudentProfile unmounts
        ↓
Cleanup function runs
```

---

# React Component Lifecycle Summary

```text
                React Component
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
      Mounting     Updating    Unmounting
          │           │           │
       Created    State/Props    Removed
          │         change         │
          ↓           ↓           ↓
       Added to    Re-render    Removed from
         DOM          UI           UI
          │           │           │
          ↓           ↓           ↓
      useEffect    Effect +     Cleanup
                    Cleanup
```

## Interview-Friendly Definition

> **React component lifecycle is the process a component goes through from mounting, to updating, to unmounting.**

### Three Main Stages

1. **Mounting** → Component is created and added to the UI.
2. **Updating** → Component re-renders when its state or props change.
3. **Unmounting** → Component is removed from the UI.

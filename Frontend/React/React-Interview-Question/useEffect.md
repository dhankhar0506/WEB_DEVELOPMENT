<!-- ## what is Use-Effect()?
-> useEffect is a React Hook used to perform side effects. Side effects are operations outside the component's  rendering logic, such as API calls, timers (setTimeout, setInterval), event listeners, subscriptions, and browser APIs.
-> Effects run after React commits the render to the DOM.
->Structure:
        useEffect(() => {
        // side effect

        return () => {
            // cleanup (optional)
        };
        }, [dependencies]);


## Important points
- No dependency array → runs after every render.
- [] → runs after the component mounts; it doesn't re-run due to dependency changes.
- [value] → runs after mount and again when value changes.
- Cleanup -> Cleanup runs before the effect runs again and when the component unmounts.
          - Unmount means the component is removed from the React UI tree
  
## When does a component unmount?
-Unmount means React removes a component from the UI (DOM) because it is no longer being rendered.

1. Simple Example — API Call
   import { useEffect, useState } from "react";

   function Users() {
     const [users, setUsers] = useState([]);

     useEffect(() => {
       fetch("https://api.example.com/users")
         .then(res => res.json())
         .then(data => {
           setUsers(data);
         });
     }, []);

     return (
       <div>
         {users.map(user => (
           <p key={user.id}>{user.name}</p>
         ))}
       </div>
     );
   }

2. Dependency Array
   
   1. No dependency array => Runs after every render.
        useEffect(() => {
            console.log("Effect");
        }); 
    
    2. Empty dependency array : runs after the component mounts; it doesn't re-run due to dependency changes.
        useEffect(() => {
            console.log("Component mounted");
        }, []);
    
    3. With dependency: Runs after mount and when dependency value changes.
        const [count, setCount] = useState(0);
        useEffect(() => {
            console.log("Count changed");
        }, [count]);

3. Cleanup Example
    useEffect(() => {
        const timer = setInterval(() => {
        console.log("Running...");
        }, 1000);

        return () => {
        clearInterval(timer);
        };
    }, []);


<!-- ---------------------------------------------- -->
<!-- ---------------------------------------------- -->
<!-- ---------------------------------------------- -->

## useLayoutEffect
It is a React Hook that runs after React updates the DOM but before the updated UI is displayed to the user.
useLayoutEffect runs synchronously and can block the browser from painting.

    import { useLayoutEffect, useRef, useState } from "react";
    function App() {
      const boxRef = useRef(null);

      const [size, setSize] = useState({
        width: 0,
        height: 0,
      });

      useLayoutEffect(() => {
          const box = boxRef.current;

          const width = box.getBoundingClientRect().width;
          const height = box.getBoundingClientRect().height;

          console.log(boxRef.current.scrollWidth);
          console.log(boxRef.current.scrollHeight);

          setSize({
            width,
            height,
          });
      }, []);

    return (
      <>
        <div
          ref={boxRef}
          style={{
            width: "200px",
            height: "150px",
            background: "lightblue",
          }}
        >
          My Box
        </div>

        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>
      </>
    );
  }

  export default App -->

# React `useEffect` and `useLayoutEffect`

## What is `useEffect()`?

`useEffect` is a React Hook used to perform **side effects**.

Side effects are operations outside the component's rendering logic, such as:

* API calls
* Timers (`setTimeout`, `setInterval`)
* Event listeners
* Subscriptions
* Browser APIs

> Effects run after React commits the render to the DOM.

### Structure

```jsx
useEffect(() => {
  // side effect

  return () => {
    // cleanup (optional)
  };
}, [dependencies]);
```

---

## Important Points

* **No dependency array** → Runs after every render.
* **`[]`** → Runs after the component mounts; it doesn't re-run due to dependency changes.
* **`[value]`** → Runs after mount and again when `value` changes.
* **Cleanup** → Cleanup runs before the effect runs again and when the component unmounts.

  * **Unmount** means the component is removed from the React UI tree.

---

## When Does a Component Unmount?

**Unmount** means React removes a component from the UI (DOM) because it is no longer being rendered.

---

# 1. Simple Example — API Call

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

# 2. Dependency Array

## 1. No Dependency Array

Runs after **every render**.

```jsx
useEffect(() => {
  console.log("Effect");
});
```

---

## 2. Empty Dependency Array

Runs after the component **mounts**; it doesn't re-run due to dependency changes.

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

## 3. With Dependency

Runs after mount and when the **dependency value changes**.

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

# 3. Cleanup Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

### What Happens?

```text
Component Mounts
       ↓
useEffect runs
       ↓
setInterval starts
       ↓
"Running..." every 1 second
       ↓
Component Unmounts
       ↓
Cleanup runs
       ↓
clearInterval(timer)
```

---

# `useLayoutEffect`

`useLayoutEffect` is a React Hook that runs **after React updates the DOM but before the updated UI is displayed to the user**.

`useLayoutEffect` runs **synchronously** and can block the browser from painting.

### Simple Flow

```text
React renders
      ↓
DOM is updated
      ↓
useLayoutEffect runs
      ↓
Browser paints UI
```

---

## Example of `useLayoutEffect`

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function App() {
  const boxRef = useRef(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const box = boxRef.current;

    const width = box.getBoundingClientRect().width;
    const height = box.getBoundingClientRect().height;

    console.log(boxRef.current.scrollWidth);
    console.log(boxRef.current.scrollHeight);

    setSize({
      width,
      height,
    });
  }, []);

  return (
    <>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "150px",
          background: "lightblue",
        }}
      >
        My Box
      </div>

      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </>
  );
}

export default App;
```

---

# `useEffect` vs `useLayoutEffect`

| `useEffect`                                             | `useLayoutEffect`                                    |
| ------------------------------------------------------- | ---------------------------------------------------- |
| Runs after the browser paints the UI                    | Runs before the browser paints the updated UI        |
| Usually used for API calls, timers, subscriptions, etc. | Usually used for DOM measurements and layout changes |
| Does not normally block painting                        | Can block painting                                   |
| Runs asynchronously relative to painting                | Runs synchronously after DOM updates                 |

### Easy Way to Remember

```text
useEffect

Render
  ↓
DOM Update
  ↓
Browser Paints UI
  ↓
useEffect runs
```

```text
useLayoutEffect

Render
  ↓
DOM Update
  ↓
useLayoutEffect runs
  ↓
Browser Paints UI
```

> **Interview Point:** Use `useEffect` for most side effects. Use `useLayoutEffect` when you need to measure or modify the DOM before the user sees the updated UI.

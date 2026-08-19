# React Batching and State Updates

## Batching

> React groups multiple state updates together and performs a **single re-render** instead of rendering after every update.

### Example

```jsx
const handleClick = () => {
    setName("Gourav");
    setAge(25);
    setCity("Punjab");
};
```

Instead of:

```text
setName()
   ↓
Re-render

setAge()
   ↓
Re-render

setCity()
   ↓
Re-render
```

React batches them:

```text
setName()
setAge()
setCity()
   ↓
Single Re-render
```

### Why Batching?

Batching improves performance by reducing unnecessary re-renders.

---

## Async-Looking State Update

> React state updates are **not actually asynchronous**, but they **look asynchronous** because the updated state is not available in the current render; it becomes available in the **next render**.

### Example

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(1);

    console.log(count); // 0
};
```

Here, `console.log(count)` prints `0` because the current render still has `count = 0`.

After React processes the state update:

```text
setCount(1)
     ↓
React schedules state update
     ↓
Component re-renders
     ↓
count = 1
```

### Interview Point

> **State updates are scheduled by React, and the updated state is available in the next render—not immediately in the current render.**

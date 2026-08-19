<!-- ## UseRef
->useRef is a React Hook used to store a value that persists between renders without causing a re-render when that value changes.
    const ref = useRef(initialValue);
    ref.current

1. To directly access a DOM element when we need to perform an imperative action like focus(), select(), play(), or pause().

2. To store a mutable value that persists between renders without causing a re-render when the value changes.

## example 

1. Real-Life Example — Access an Input
    
    import { useRef } from "react";
    function App() {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
        <input ref={inputRef} />

        <button onClick={handleClick}>
            Focus Input
        </button>
        </>
    );
    }

2. File upload
   import React from 'react';
   import { useRef } from "react";
   
   function App() {
     const fileInputRef = useRef(null);

     const handleUploadClick = () => {
       fileInputRef.current.click();
     };

     const handleFileChange = (event) => {
       const file = event.target.files[0];

       if (file) {
         console.log(file);
       }
     };

     return (
       <>
         <input
           type="file"
           ref={fileInputRef}
           onChange={handleFileChange}
           hidden
         />

         <button onClick={handleUploadClick}>
           Upload File
         </button>
       </>
     );
   }

export default App -->

# React `useRef()`

## What is `useRef()`?

`useRef` is a React Hook used to **store a value that persists between renders without causing a re-render when that value changes**.

### Basic Structure

```jsx
const ref = useRef(initialValue);

ref.current;
```

The value stored inside `ref.current` persists between renders.

---

## Uses of `useRef()`

### 1. Accessing DOM Elements

`useRef` can be used to directly access a DOM element when we need to perform an imperative action such as:

* `focus()`
* `select()`
* `play()`
* `pause()`
* `click()`

### 2. Storing Mutable Values

`useRef` can store a mutable value that **persists between renders without causing a re-render when the value changes**.

---

# Examples

## 1. Real-Life Example — Access an Input

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />

      <button onClick={handleClick}>
        Focus Input
      </button>
    </>
  );
}

export default App;
```

### How It Works

```text
<input ref={inputRef} />
        ↓
inputRef.current
        ↓
Input DOM element
        ↓
inputRef.current.focus()
        ↓
Input gets focus
```

---

# 2. File Upload Example

```jsx
import React from "react";
import { useRef } from "react";

function App() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log(file);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />

      <button onClick={handleUploadClick}>
        Upload File
      </button>
    </>
  );
}

export default App;
```

### How It Works

```text
User clicks "Upload File"
          ↓
handleUploadClick()
          ↓
fileInputRef.current.click()
          ↓
Hidden file input opens
          ↓
User selects a file
          ↓
onChange runs
          ↓
handleFileChange()
          ↓
event.target.files[0]
          ↓
Selected file
```

---

# `useRef()` vs `useState()`

| `useRef()`                                       | `useState()`                        |
| ------------------------------------------------ | ----------------------------------- |
| Value persists between renders                   | Value persists between renders      |
| Changing `.current` does **not** cause re-render | Updating state **causes** re-render |
| Commonly used for DOM access and mutable values  | Used for values that affect the UI  |
| Access value using `ref.current`                 | Access value directly               |

### Easy Way to Remember

```text
useState
   ↓
Value changes
   ↓
Component re-renders
   ↓
UI updates
```

```text
useRef
   ↓
ref.current changes
   ↓
Component does NOT re-render
   ↓
Value is still preserved
```

## Interview Definition

> **`useRef` is a React Hook used to persist a mutable value between renders without causing a re-render when the value changes. It is also commonly used to directly access DOM elements.**

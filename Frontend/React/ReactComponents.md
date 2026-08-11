# React Components

## What is a Component?

> A **Component** is an independent and reusable piece of UI that returns JSX. Multiple components can be combined to build a complete application.

* Functional Components do not have lifecycle methods like Class Components.
* Instead, they use **Hooks**.

---

# Types of Components

There are mainly two types of React components:

1. **Class Components** — Older approach
2. **Functional Components** — Modern and preferred approach

---

# 1. Functional Component

> A **Functional Component** is a JavaScript function that returns JSX.

```jsx
function App() {
    return (
        <h1>Hello React</h1>
    );
}
```

---

# Why Functional Components Are Popular?

```text
- Easy to write
- Less code
- Faster to understand
- Supports Hooks
- Preferred in modern React
```

---

# Functional Component with State

Functional components can use **Hooks** such as `useState` to manage state.

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}
```

### Flow

```text
Initial State
    ↓
count = 0
    ↓
User clicks button
    ↓
setCount(count + 1)
    ↓
State changes
    ↓
Component re-renders
    ↓
Updated UI
```

---

# 2. Class Components

> A **Class Component** is an ES6 class that extends `React.Component` and returns JSX using the `render()` method.

Example structure:

```jsx
class App extends React.Component {

    render() {
        return (
            <h1>Hello React</h1>
        );
    }
}
```

---

# What Does `extends React.Component` Mean?

```jsx
class App extends React.Component
```

`extends React.Component` means the class **inherits React's built-in functionality**.

A Class Component extends `React.Component`, which means it inherits React's built-in functionality such as:

* `setState()`
* `props`
* `state`
* Lifecycle methods

---

# Q2. Why Extend `React.Component`?

We extend `React.Component` to inherit React functionality such as:

```text
setState()
state
props
lifecycle methods
```

---

# Main Parts of a Class Component

## 1. Constructor

> The **constructor** is called first when the component is created.

It is used to:

* Initialize state
* Bind methods

Example:

```jsx
constructor(props) {
    super(props);

    this.state = {
        count: 0
    };
}
```

---

## 2. State

> **State** is an object that stores data that can change during the lifetime of a component.

Example:

```jsx
this.state = {
    count: 0
};
```

---

## 3. `setState()`

> `setState()` is used to update the state and trigger a re-render.

Example:

```jsx
this.setState({
    count: this.state.count + 1
});
```

---

## 4. `render()`

> `render()` returns JSX that React displays on the screen.

Example:

```jsx
render() {
    return (
        <h1>{this.state.count}</h1>
    );
}
```

---

# Lifecycle Methods in Class Components

Class Components have lifecycle methods that run at different stages of a component's lifetime.

---

## 1. `componentDidMount()`

> `componentDidMount()` is a lifecycle method that runs once after the component is rendered (mounted) on the screen.

It is mainly used for:

* API calls
* Event listeners
* Timers

Example:

```jsx
componentDidMount() {
    // API call
}
```

---

## 2. `componentDidUpdate()`

> `componentDidUpdate()` is a lifecycle method that runs after the component is re-rendered due to changes in state or props.

It is mainly used to perform actions **after an update**.

Example:

```jsx
componentDidUpdate() {
    // Action after state/props change
}
```

---

## 3. `componentWillUnmount()`

> `componentWillUnmount()` is a lifecycle method that runs just before the component is removed from the screen.

It is mainly used to **clean up resources**, such as:

* Timers
* Event listeners
* Subscriptions

Example:

```jsx
componentWillUnmount() {
    // Cleanup
}
```

---

# Class Component Lifecycle Flow

```text
        User Opens Profile
                │
                ▼
        componentDidMount()
             (API Call)

        ----------------------------

        User Updates Profile
                │
                ▼
        componentDidUpdate()
       (After State/Props Change)

        ----------------------------

        User Leaves Profile
                │
                ▼
        componentWillUnmount()
              (Cleanup)
```

---

# 🔥 Quick Interview Revision

| Topic                        | Simple Definition                                                 |
| ---------------------------- | ----------------------------------------------------------------- |
| **Component**                | Independent and reusable piece of UI                              |
| **Functional Component**     | JavaScript function that returns JSX                              |
| **Class Component**          | ES6 class that extends `React.Component`                          |
| **Hooks**                    | Used by functional components to use React features such as state |
| **`React.Component`**        | Base class providing React functionality to class components      |
| **Constructor**              | Initializes state and can bind methods                            |
| **State**                    | Data that can change during a component's lifetime                |
| **`setState()`**             | Updates state and triggers a re-render                            |
| **`render()`**               | Returns JSX to display                                            |
| **`componentDidMount()`**    | Runs after the component mounts                                   |
| **`componentDidUpdate()`**   | Runs after state/props updates                                    |
| **`componentWillUnmount()`** | Runs before the component is removed                              |

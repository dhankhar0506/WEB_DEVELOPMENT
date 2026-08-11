# React Interview Notes

## What is React?

React is an open-source JavaScript library developed by Facebook (Meta) for building interactive and dynamic user interfaces.

It follows a **component-based architecture**, where the UI is divided into small, independent, and reusable components. These components can be combined to build complex applications while making the code easier to maintain and reuse.

---

## Why React?

* Component-based architecture → Reusable UI
* Virtual DOM → Fast updates
* One-way data flow → Easy to manage data
* High performance
* Easy to build Single Page Applications (SPA)

---

## SPA vs MPA

### SPA — Single Page Application

An SPA loads one HTML page initially and updates the content dynamically without reloading the page.

### MPA — Multi Page Application

An MPA loads a new HTML page from the server every time the user navigates to another page.

---

## Virtual DOM vs Real DOM

* **Real DOM** → The actual HTML structure displayed in the browser.
* **Virtual DOM** → A lightweight JavaScript object that represents the Real DOM.

React compares the old and new Virtual DOM and updates only the changed parts of the Real DOM.

---

## JSX

**JSX (JavaScript XML)** is a syntax that allows us to write HTML-like code inside JavaScript.

It is transpiled into JavaScript before running in the browser.

---

## React Element

A **React Element** is just a plain JavaScript object.

It describes what you want to see on the screen, like a blueprint.

---

## React Component

A **React Component** is a reusable JavaScript function or class that returns JSX to display a part of the UI.

---

## Functional Component

A **Functional Component** is a JavaScript function that returns JSX.

It is the modern and recommended way to create components in React.

---

## Class Component

A **Class Component** is an ES6 class that extends `React.Component` and returns JSX using the `render()` method.

```jsx
class Home extends React.Component {
    render() {
        return <h1>Home Page</h1>;
    }
}
```

---

## Functional vs Class Component

| Functional Component      | Class Component             |
| ------------------------- | --------------------------- |
| JavaScript Function       | ES6 Class                   |
| Uses Hooks                | Uses Lifecycle Methods      |
| Simple and recommended    | Older approach              |
| Less code                 | More code                   |
| Preferred in modern React | Rarely used in new projects |

---

# How React Works Internally

```text
Write JSX
(Developer writes → Browser cannot understand)
        │
        ▼
Transpiling
(Vite + esbuild/Babel)
(Vite using esbuild/Babel converts JSX into JavaScript)
        │
        ▼
React.createElement()
(React creates a JavaScript object)
        │
        ▼
React Element
(JavaScript Object)
        │
        ▼
Virtual DOM Tree
(React combines all React Elements into a tree)
        │
        ▼
Render UI
(React converts the Virtual DOM into the Real DOM)
        │
        ▼
User Interaction
(User clicks → state changes)
        │
        ▼
State Change
(setState/useState)
        │
        ▼
Fiber Schedules
    ├── Update schedules rendering
    ├── Assigns priority
    ├── Can pause and resume rendering
    └── Keeps the UI responsive
        │
        ▼
Component Re-renders
(React executes the component again)
        │
        ▼
New Virtual DOM
        │
        ▼
Diffing Algorithm
(React compares with old diagram)
        │
        ▼
Update Only Changed Real DOM
        │
        ▼
Browser UI Updated
```

---

## What is Render?

Render means React prepares what should be displayed on the screen.

* **Render** → First time showing UI.
* **Re-render** → Updating the UI when state or props change.

---

# Library vs Framework

## Library

A library provides a specific functionality, such as building the UI.

The developer controls the application's flow and decides when, where, and how to use the library.

### Example: React

You decide:

* Routing
* API Calls
* State Management
* Folder Structure

React only helps build the UI.

## Framework

A framework provides a complete structure for building an application.

It defines the project structure, where your code should go, and controls the application's flow.

The developer writes code according to the framework's rules.

### Example: Angular

Angular already provides:

* Routing
* Forms
* HTTP Client
* Project Structure
* Build System

You write your code in the places defined by Angular.

---

# Components

## What is a Component?

A **Component** is a reusable and independent piece of UI that returns JSX.

We combine multiple components to build a complete application.

### Why do we use Components?

* Reusable
* Easy to maintain
* Independent
* Makes code modular

---

## Functional Component

A **Functional Component** is a JavaScript function that returns JSX.

It is the modern and recommended way to create components in React.

### Benefits

* Less code
* Easy to understand
* Uses Hooks (`useState`, `useEffect`, etc.)
* Recommended by React

---

## Class Component

A **Class Component** is an ES6 class that extends `React.Component` and returns JSX using the `render()` method.

---

# Props

**Props (Properties)** are read-only data passed from a parent component to a child component.

### Benefits

* Reuse components with different data
* ❌ Cannot be modified by child component

---

# State

**State** is a component's own data that can change over time.

When state changes, React re-renders the component.

---

## Props vs State

| Props                   | State                |
| ----------------------- | -------------------- |
| Passed by Parent        | Managed by Component |
| Read Only               | Can be Updated       |
| Parent → Child          | Inside Component     |
| Doesn't change in child | Changes using Setter |

---

# One-Way Data Flow

**One-Way Data Flow** means data always flows from the Parent Component to the Child Component through props.

### Why One-Way Data Flow?

* Easy to understand
* Predictable
* Easier debugging
* Better data management

---

# Props Drilling

**Prop Drilling** in React means passing props through multiple layers of components just to reach a deeply nested child, even when intermediate components don't use those props.

This often makes code:

* Harder to maintain
* Less reusable
* More complex

---

# Lifecycle Methods in Functional Components

### Q: In functional components, do we have lifecycle methods?

**No.**

Functional Components do not have lifecycle methods.

They use Hooks, mainly `useEffect`, to perform lifecycle-related tasks.

```text
Class Component
    │
    ├── componentDidMount()
    ├── componentDidUpdate()
    └── componentWillUnmount()

----------------------------

Functional Component
    │
    └── useEffect()
        │
        ├── Mount
        ├── Update
        └── Cleanup (Unmount)
```

---

# useState()

`useState` is a Hook used to store and update data inside a Functional Component.

When the state changes, React re-renders the component.

```jsx
const [count, setCount] = useState(0);
```

---

## Functional Update

A **Functional Update** is a way of updating state based on its previous value.

```jsx
setCount(prev => prev + 1);
```

---

# Batching

**Batching** is the process where React groups multiple state updates into a single re-render to improve performance.

---

# Update Queue

The **Update Queue** is an internal queue where React stores state updates during the current event and processes them together after the event finishes.

---

# useEffect()

`useEffect` is a Hook used to perform side effects after a component renders.

## What is a Side Effect?

A side effect is any operation that interacts with something outside the component rendering process.

> Any work outside rendering.

### Examples

* API Call
* Timer
* Event Listener
* Local Storage

```jsx
useEffect(() => {}, []);
```

`[]` → The dependency array controls when `useEffect` should execute.

---

# Cleanup Function

The cleanup function runs before the component unmounts or before the effect runs again.

It is used to clean resources like:

* Timers
* Event listeners

```jsx
useEffect(() => {
    const id = setInterval(() => {}, 1000);

    return () => {
        clearInterval(id);
    };
}, []);
```

> Runs only once after the component mounts.

---

# useRef()

`useRef` is a Hook used to store a mutable value or directly access a DOM element without causing a re-render.

## Why useRef?

* Focus input
* File Upload
* Store Timer ID
* Store Previous Value

---

# Controlled Component

A **Controlled Component** is an input whose value is managed by React state.

---

# Uncontrolled Component

An **Uncontrolled Component** is an input whose value is managed by the browser (DOM), and React accesses it using `useRef`.

---

# useMemo()

`useMemo` memoizes the result of an expensive calculation and recalculates it only when its dependencies change.

### Purpose

> Avoid expensive calculations on every render.

```jsx
const total = useMemo(() => {
    return calculateTotal();
}, [products]);
```

---

# useCallback()

`useCallback` memoizes a function so that the same function reference is reused between renders unless its dependencies change.

### Purpose

> Prevent unnecessary child re-renders.

```jsx
const handleClick = useCallback(() => {
}, []);
```

---

# React.memo()

`React.memo` prevents a component from re-rendering if its props have not changed.

```jsx
const Navbar = React.memo(function Navbar() {
    return <h1>Navbar</h1>;
});
```

---

# useMemo vs useCallback vs React.memo

| useMemo                          | useCallback                  | React.memo                               |
| -------------------------------- | ---------------------------- | ---------------------------------------- |
| Memoizes a **value**             | Memoizes a **function**      | Memoizes a **component**                 |
| Returns cached result            | Returns cached function      | Returns cached component                 |
| Prevents expensive recalculation | Prevents function recreation | Prevents unnecessary component re-render |

---

# Pure Function

A **Pure Function** is a function that always returns the same output for the same input and does not modify any external data (no side effects).

> Same input → Same output

```js
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5
```

---

# Impure Function

An **Impure Function** is a function whose output may change even if the input is the same, or it modifies external data (has side effects).

```js
let count = 0;

function increment() {
    count++;
    return count;
}

increment(); // 1
increment(); // 2
increment(); // 3
```

### API Call

An API-calling function is an impure function because:

* It depends on an external server.
* It can return different results each time.
* It performs a side effect (network request).

> Pure functions are preferred because they are predictable, easier to test, easier to debug, and always produce the same UI for the same props and state.

React components are designed to behave like pure functions.

---

## Should We Always Use Pure Functions?

**No.**

Pure functions are preferred because they are predictable and easy to test.

However, real-world applications require impure functions for tasks like:

* API calls
* File uploads
* Database operations
* Timers
* DOM manipulation

React encourages keeping rendering logic pure while handling side effects separately using Hooks like `useEffect`.

---

# Event Handling

**Event Handling** is the process of responding to user actions like:

* Clicking a button
* Typing in an input
* Submitting a form

## Common Events

| Event          | Purpose                                                              |
| -------------- | -------------------------------------------------------------------- |
| `onClick`      | Executes a function when the user clicks an element                  |
| `onChange`     | Executes whenever the value of an input, textarea, or select changes |
| `onSubmit`     | Executes when a form is submitted                                    |
| `onMouseEnter` | Executes when the mouse enters an element                            |
| `onMouseLeave` | Executes when the mouse leaves an element                            |
| `onKeyDown`    | Executes when a key is pressed                                       |

---

# Synthetic Event

A **Synthetic Event** is React's wrapper around the browser's native event.

It normalizes event behavior across different browsers, providing a consistent API.

> It makes sure events work the same way across all browsers, so you don't have to worry about differences.

---

# preventDefault()

`preventDefault()` prevents the browser's default behavior for an event.

---

# stopPropagation()

`stopPropagation()` stops an event from bubbling to its parent elements.

---

# Forms in React

A **Form** is a collection of input fields used to collect data from the user and submit it for processing.

### Examples

* Login Form
* Registration Form
* Contact Form
* Payment Form

```jsx
function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [city, setCity] = useState("");
    const [agree, setAgree] = useState(false);
    const [gender, setGender] = useState("");

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
            </select>

            <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
            />

            const [gender, setGender] = useState("");

            <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
            />

            Male

            <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
            />

            Female
        </>
    );
}
```

---

# File Upload

```jsx
function App() {
    function handleFile(e) {
        console.log(e.target.files[0]);
    }

    return (
        <input
            type="file"
            onChange={handleFile}
        />
    );
}
```

---

# Why Does a React Component Return Only One Root Element?

A React component must return a single root element because JSX is converted into a single JavaScript object (React Element), and a function can return only one value.

---

# Fragment

A **Fragment** is a special React component that groups multiple elements without adding an extra HTML element to the DOM.

---

## Why Does React Require One Parent Element?

> "Because every React component is a JavaScript function, and a function can return only one value. That one value is a single root React Element, which can have multiple children."

---

# Rendering

**Rendering** is the process in which React executes a component and prepares or updates the UI based on the current state and props.

## Conditional Rendering

Conditional Rendering means displaying different UI based on a condition.

### Ways to perform Conditional Rendering

* `if-else` → above the return statement
* Ternary Operator
* `&&` Operator

---

# Lists

Lists are used to display multiple items dynamically using the `map()` method.

```jsx
const users = ["Gourav", "Rahul", "Amit"];

return (
    <>
        {users.map((user) => (
            <h2>{user}</h2>
        ))}
    </>
);
```

---

# Keys

A **key** provides a unique identity for each list item.

It helps React compare the old and new Virtual DOM during reconciliation, so only the changed items are updated efficiently.

---

## Why NOT Use Index as Key?

Index should not be used as a key when list items can be added, removed, or reordered because the index changes, causing React to identify items incorrectly.

Because when items are added, removed, or reordered, their indexes change.

React may match the wrong items, causing:

* Incorrect UI updates
* Loss of component state
* Unnecessary re-renders

A **unique and stable ID** should be used instead.

---

# React Component Lifecycle

Lifecycle is the different stages a React component goes through from its creation until it is removed from the UI.

```text
Component Created
        │
        ▼
1. Mounting
   Component is created and displayed
   in the browser for the first time.
        │
        ▼
2. Updating
   Component re-renders because its
   state or props have changed.
        │
        ▼
3. Unmounting
   Component is removed from the UI.
```

### Example

```text
        Home Page
            ↓
        About Page

Home Component → Removed
                 (Unmounting happens)
```

The cleanup function runs before the component is removed.

```jsx
useEffect(() => {
    return () => {
        console.log("Unmount");
    };
}, []);
```

---

# Lifecycle in Functional Components

| Phase   | Hook                                 |
| ------- | ------------------------------------ |
| Mount   | `useEffect(() => {}, [])`            |
| Update  | `useEffect(() => {}, [dependency])`  |
| Unmount | `return () => {}` inside `useEffect` |

---

# Complete Example — Functional Component Lifecycle

```jsx
import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    // Mount
    useEffect(() => {
        console.log("Mounted");
    }, []);

    // Update
    useEffect(() => {
        console.log("Count Updated");
    }, [count]);

    // Unmount
    useEffect(() => {
        return () => {
            console.log("Component Removed");
        };
    }, []);

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

---

# Routing

**React Router** is a library used to navigate between different pages in a React application without reloading the browser.

---

## BrowserRouter

`BrowserRouter` enables routing in the React application.

It listens to the browser URL and informs React whenever the URL changes.

---

## Routes

`Routes` is a container that holds all `Route` components.

---

## Route

`Route` maps a URL to a React Component.

---

## Link

`Link` navigates between pages without refreshing the browser.

---

# useNavigate()

`useNavigate` is used for programmatic navigation.

### Real Use Case

```text
Login
   ↓
loginSuccess()
   ↓
navigate("/dashboard")
```

### Go Back

```js
navigate(-1);
```

### Forward

```js
navigate(1);
```

---

# useParams()

`useParams()` is a Hook used to read dynamic values from the URL path.

```jsx
<Route
    path="/product/:id"
    element={<Product />}
/>
```

Example:

```text
/product/20
```

```jsx
const { id } = useParams();
```

### Example

```text
Product 101
Product 102
Product 103
```

```jsx
<Route
    path="/product/:id"
    element={<Product />}
/>
```

OR

```jsx
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();

    return <h1>Product Id : {id}</h1>;
}
```

---

# useSearchParams()

`useSearchParams()` is a Hook used to read and update query parameters in the URL.

Example:

```text
/products?page=2
```

```jsx
import { useSearchParams } from "react-router-dom";

function Products() {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("page");

    return <h1>Page : {page}</h1>;
}
```

### Update Query Parameter

```jsx
setSearchParams({
    page: 5
});
```

---

# useLocation()

`useLocation()` is a React Router Hook that returns information about the current URL, such as:

* pathname
* query string
* hash
* state

Example:

```text
http://localhost:5173/product/101?page=2
```

```jsx
const location = useLocation();

console.log(location);
```

```js
{
    pathname: "/product/101",
    search: "?page=2",
    hash: "",
    state: null,
    key: "abc123"
}
```

---

# Outlet

`Outlet` renders child routes inside the parent component.

---

# Nested Routing

Nested Routing means rendering child routes inside parent routes.

---

# Dynamic Routing

Dynamic Routing uses URL parameters to load different data using the same component.

---

# Protected Routes

A **Protected Route** restricts access to authenticated users.

---

# Navigate Component

`Navigate` redirects the user to another route during rendering.

---

# 404 Page

If the URL doesn't exist:

```jsx
<Route
    path="*"
    element={<NotFound />}
/>
```

---

# children in React

`children` is a special prop in React that represents the content placed between the opening and closing tags of a component.

It allows components to wrap and render dynamic content without knowing what that content is in advance.

---

# Render vs Re-render

### Rendering

Rendering is the process in which React executes a component and prepares or updates the UI based on the current state and props.

### Re-render

When state, props, context, etc. cause an update, React may call the component again.

> Re-render does **NOT** mean the entire Real DOM is recreated.

It means React runs components again to calculate the next UI.

---

# Reconciliation

**Reconciliation** is the process React uses to update the UI efficiently when state or props change.

```text
State/Props change
        ↓
New Virtual DOM
        ↓
Compare with old Virtual DOM
        ↓
Update only required Real DOM
```

---

# Diffing

**Diffing** is part of the reconciliation process.

It is the comparison process where React compares the old Virtual DOM with the new Virtual DOM to find what actually changed.

| Reconciliation                        | Diffing                                      |
| ------------------------------------- | -------------------------------------------- |
| Complete process of updating UI       | Comparison step                              |
| Determines how React updates the DOM  | Finds differences between old & new UI trees |
| Diffing happens inside reconciliation | Part of reconciliation                       |

> **Reconciliation** is React's process of updating the UI, while **diffing** is the comparison step used to find what changed between the previous and new UI trees.

---

# React Fiber

**React Fiber** is React's internal reconciliation architecture that allows React to break rendering work into smaller units and prioritize, pause, resume, or discard work when needed.

---

## Why Was Fiber Introduced?

Before Fiber, rendering work was largely processed synchronously.

For large UI updates, this could block the main thread and make the app feel unresponsive.

---

# Batching

Batching is React's optimization of grouping multiple state updates and processing them together to reduce unnecessary rendering work.

---

# Update Queue

The **Update Queue** is React's internal mechanism for storing pending state updates until React processes them during rendering.

---

# Vite

**Vite** is a frontend build tool that provides a fast development server during development and creates an optimized production build of your frontend assets, including:

* JavaScript
* CSS
* etc.

---

# HMR — Hot Module Replacement

HMR is a development feature provided by Vite.

It is triggered when the developer changes and saves the source code.

HMR replaces only the modified module in the browser without refreshing the page.

---

# Bundling

**Bundling** is the process of combining application files and dependencies into optimized JavaScript files for the browser.

---

# Netlify / Vercel Deployment ⭐⭐⭐⭐

Netlify and Vercel are deployment/hosting platforms commonly used for frontend and web applications.

```text
Your Code
    ↓
GitHub
    ↓
Netlify / Vercel
    ↓
Install dependencies
    ↓
npm run build
    ↓
Production output
    ↓
Deploy to hosting/CDN
    ↓
User visits website
```

---

# StrictMode

**StrictMode** is a development-only React tool that helps identify potential problems and unsafe patterns in your components.

React Strict Mode is a development tool that performs extra checks and helps detect potential bugs, such as:

* Impure rendering
* Missing Effect cleanup

---

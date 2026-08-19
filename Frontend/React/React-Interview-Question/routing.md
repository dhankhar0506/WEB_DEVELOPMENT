<!-- ##  What is Routing?
-> Routing is the process of displaying different React components based on the URL path without reloading the entire webpage.
    /          → Home
    /about     → About
    /contact   → Contact
    /profile   → Profile

## . React Router 
React Router is a library used in React applications to handle navigation and routing between different pages/components without reloading the entire page.

## BrowserRouter
-> It provides/unable routing functionality to the application.
-> main.jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";

    import App from "./App";

    ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );



## Routes and Route
1. Route = A Route defines the relationship between a URL path and the component that should be rendered.
    <Route path="/dashboard" element={<Dashboard />} />

2. Routes  = Routes is a container that holds multiple <Route> components.

    import { Routes, Route } from "react-router-dom";
    
    function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
        </Routes>
        );
    }


## <Link>
-> Link is a React Router component used to navigate between routes without reloading the page.
    
    import { Link } from "react-router-dom";
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/orders">Orders</Link>

When you click:    
            Orders
                ↓
            URL changes to /orders
                ↓
            React Router detects /orders
                ↓
            Finds matching Route
                ↓
            <Orders /> is displayed


## Why not use <a>?
- Normal HTML:This normally causes a full page reload.

## <NavLink>
-> NavLink is similar to Link, but it provides information about whether the current route is active.

    <NavLink to="/orders"
        className={({ isActive }) =>isActive ? "active" : ""}>
            Orders
    </NavLink>

##  useNavigate()
-> useNavigate is a React Router hook used to programmatically navigate between routes.
    import { useNavigate } from "react-router-dom";
    function Login() {
        const navigate = useNavigate();

        const handleLogin = () => {
            // login logic

            navigate("/dashboard");
        };

        return (
            <button onClick={handleLogin}>
            Login
            </button>
        );
    }

## Route Properties
1. path tells React Router which URL to match.
2. element defines which component should be displayed when the path matches.
3. * means match anything after this path.

## Nested Routes
-> A nested route is a route placed inside another route

    <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    </Routes>

    /dashboard
    /dashboard/orders
    /dashboard/profile

## index
-> Used for the default child route in nested routing

## <Outlet />
-> <Outlet /> determines the place where the nested/child component will be displayed.

    function Dashboard() {
        return (
            <>
            <h1>Dashboard</h1>

            <Outlet />
            </>
        );
    }


## * (Wildcard) Definition
* is a wildcard that tells React Router to match any additional path after the specified path.


## How Does React Know / or /about?
When the URL changes, React Router gets the new path, finds the matching Route, and displays its component.

## What Happens When You Start the Application?
- Suppose you open: http://localhost:5173/
- Browser URL: pathname = "/"
- Router checks:
    <Route path="/" element={<Home />} />

## Dynamic Routing?
-> Dynamic routing is used to display different data using the same component, based on a dynamic parameter in the URL.
-> Dynamic routing means creating a route where part of the URL can change dynamically.
    <Route path="/users/:id" element={<User />} />
    Here :id is dynamic.

## How do we get the ID?
Use useParams(): useParams() is used to get dynamic parameters from the URL path.
    import { useParams } from "react-router-dom";

    function User() {
        const { id } = useParams();

        return <h1>User ID: {id}</h1>;
    }

## useSearchParams()
->  useSearchParams() is used to read and update query parameters in the URL, commonly for filtering, sorting, searching, and pagination.

    /products?category=mobile&page=2
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category");
    const page = searchParams.get("page");

    console.log(category); // "mobile"
    console.log(page);     // "2"

## 404
-> A 404 route is used to display a page when no defined route matches the URL.

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </Routes> -->

    # React Routing and React Router

## What is Routing?

> Routing is the process of displaying different React components based on the URL path without reloading the entire webpage.

### Example

```text
/          → Home
/about     → About
/contact   → Contact
/profile   → Profile
```

---

# React Router

> React Router is a library used in React applications to handle navigation and routing between different pages/components without reloading the entire page.

---

# BrowserRouter

> `BrowserRouter` provides routing functionality to the React application.

### main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

---

# Routes and Route

## 1. Route

> `Route` defines the relationship between a URL path and the component that should be rendered.

```jsx
<Route
    path="/dashboard"
    element={<Dashboard />}
/>
```

Meaning:

```text
/dashboard
     ↓
<Dashboard />
```

---

## 2. Routes

> `Routes` is a container that holds multiple `<Route>` components.

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />
        </Routes>
    );
}
```

---

# `<Link>`

> `Link` is a React Router component used to navigate between routes **without reloading the page**.

```jsx
import { Link } from "react-router-dom";

<Link to="/dashboard">Dashboard</Link>
<Link to="/orders">Orders</Link>
```

### What Happens When You Click?

```text
Orders
   ↓
URL changes to /orders
   ↓
React Router detects /orders
   ↓
Finds matching Route
   ↓
<Orders /> is displayed
```

---

# Why Not Use `<a>`?

A normal HTML anchor:

```html
<a href="/orders">Orders</a>
```

normally causes a **full page reload**.

React Router's `<Link>` performs client-side navigation instead.

```text
<Link>
   ↓
URL changes
   ↓
React Router handles navigation
   ↓
No full page reload
```

---

# `<NavLink>`

> `NavLink` is similar to `Link`, but it provides information about whether the current route is active.

### Example

```jsx
<NavLink
    to="/orders"
    className={({ isActive }) =>
        isActive ? "active" : ""
    }
>
    Orders
</NavLink>
```

If the current URL is `/orders`, `isActive` is `true`.

This is useful for:

* Active navigation links
* Navbar highlighting
* Sidebar highlighting

---

# `useNavigate()`

> `useNavigate` is a React Router hook used to **programmatically navigate** between routes.

### Example

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // login logic

        navigate("/dashboard");
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}
```

### Flow

```text
User clicks Login
      ↓
Login logic
      ↓
navigate("/dashboard")
      ↓
URL changes
      ↓
Dashboard displayed
```

---

# Route Properties

A `<Route>` commonly uses:

### 1. `path`

> `path` tells React Router which URL to match.

```jsx
<Route path="/dashboard" element={<Dashboard />} />
```

### 2. `element`

> `element` defines which component should be displayed when the path matches.

```jsx
<Route
    path="/dashboard"
    element={<Dashboard />}
/>
```

### 3. `*`

> `*` is a wildcard used to match paths that don't match a more specific route.

```jsx
<Route path="*" element={<NotFound />} />
```

---

# Nested Routes

> A nested route is a route placed inside another route.

### Example

```jsx
<Routes>
    <Route
        path="/dashboard"
        element={<Dashboard />}
    >
        <Route
            path="orders"
            element={<Orders />}
        />

        <Route
            path="profile"
            element={<Profile />}
        />
    </Route>
</Routes>
```

This creates:

```text
/dashboard
/dashboard/orders
/dashboard/profile
```

### Important Point

The child paths are written relative to the parent:

```jsx
path="orders"
```

not:

```jsx
path="/dashboard/orders"
```

---

# `index`

> `index` is used for the **default child route** in nested routing.

Example:

```jsx
<Routes>
    <Route
        path="/dashboard"
        element={<Dashboard />}
    >
        <Route
            index
            element={<DashboardHome />}
        />

        <Route
            path="orders"
            element={<Orders />}
        />
    </Route>
</Routes>
```

Here:

```text
/dashboard
      ↓
DashboardHome
```

is the default child route.

---

# `<Outlet />`

> `<Outlet />` determines the place where the nested/child component will be displayed.

### Example

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>

            <Outlet />
        </>
    );
}
```

### Flow

```text
/dashboard/orders
       ↓
Dashboard
       ↓
<Outlet />
       ↓
Orders
```

So the `Orders` component is rendered where `<Outlet />` is placed.

---

# `*` Wildcard Definition

> `*` is a wildcard that tells React Router to match any path that doesn't match the defined routes.

Example:

```jsx
<Route path="*" element={<NotFound />} />
```

If the user visits:

```text
/random-page
```

and no other route matches it, the wildcard route is selected.

---

# How Does React Know `/` or `/about`?

When the URL changes, React Router gets the new path, finds the matching `Route`, and displays its component.

### Example

```text
URL
 ↓
/about
 ↓
React Router checks Routes
 ↓
Finds path="/about"
 ↓
Renders <About />
```

---

# What Happens When You Start the Application?

Suppose you open:

```text
http://localhost:5173/
```

The browser URL has:

```text
pathname = "/"
```

React Router checks:

```jsx
<Route
    path="/"
    element={<Home />}
/>
```

The path matches, so React Router renders:

```jsx
<Home />
```

### Flow

```text
http://localhost:5173/
          ↓
pathname = "/"
          ↓
React Router
          ↓
<Route path="/" />
          ↓
<Home />
```

---

# Dynamic Routing

> Dynamic routing is used to display different data using the same component, based on a dynamic parameter in the URL.

> Dynamic routing means creating a route where part of the URL can change dynamically.

### Example

```jsx
<Route
    path="/users/:id"
    element={<User />}
/>
```

Here:

```text
:id
```

is a dynamic parameter.

These URLs can all match the same route:

```text
/users/1
/users/2
/users/100
/users/500
```

---

# How Do We Get the ID?

Use `useParams()`.

> `useParams()` is used to get dynamic parameters from the URL path.

### Example

```jsx
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();

    return <h1>User ID: {id}</h1>;
}
```

### Example

If the URL is:

```text
/users/25
```

Then:

```javascript
const { id } = useParams();
```

gives:

```text
id = "25"
```

---

# `useSearchParams()`

> `useSearchParams()` is used to read and update query parameters in the URL, commonly for **filtering, sorting, searching, and pagination**.

### Example URL

```text
/products?category=mobile&page=2
```

### Example

```jsx
const [searchParams, setSearchParams] = useSearchParams();

const category = searchParams.get("category");
const page = searchParams.get("page");

console.log(category); // "mobile"
console.log(page);     // "2"
```

### URL Structure

```text
/products?category=mobile&page=2
         └────────┬──────────┘
              Query Parameters
```

Here:

```text
category = mobile
page     = 2
```

---

# 404 Route / Not Found Route

> A 404 route is used to display a page when no defined route matches the URL.

### Example

```jsx
<Routes>
    <Route
        path="/"
        element={<Home />}
    />

    <Route
        path="/about"
        element={<About />}
    />

    <Route
        path="*"
        element={<NotFound />}
    />
</Routes>
```

If the user visits:

```text
/xyz
```

and no route matches `/xyz`:

```text
/xyz
 ↓
No matching route
 ↓
path="*"
 ↓
<NotFound />
```

---

# Complete Routing Flow

```text
User enters URL
       ↓
Browser URL changes
       ↓
React Router reads pathname
       ↓
Routes checks available routes
       ↓
Matching Route found
       ↓
Route's element rendered
       ↓
React updates the UI
```

---

# Quick Interview Summary

```text
Routing
→ Display different components based on URL

React Router
→ Library for routing in React

BrowserRouter
→ Provides routing functionality

Routes
→ Container for Route components

Route
→ Maps URL path to a component

Link
→ Navigate without full page reload

NavLink
→ Link + active route information

useNavigate()
→ Programmatic navigation

Nested Routes
→ Routes inside another route

index
→ Default child route

Outlet
→ Place where nested route renders

Dynamic Routing
→ URL contains a dynamic parameter

useParams()
→ Gets dynamic URL parameters

useSearchParams()
→ Gets/updates query parameters

*
→ Wildcard route

404 Route
→ Displays when no route matches
```

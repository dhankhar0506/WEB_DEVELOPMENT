# React Routing

## What is React Routing?

> Routing is the process of navigating between different pages/components in a React application without reloading the entire page.

### Without Routing

```text
Home
  ↓
Reload Browser
  ↓
About
```

### With Routing

```text
Home
  ↓
About
  ↓
No Page Reload
```

> This is why React applications are called **Single Page Applications (SPA)**.

---

# Installation

```bash
npm install react-router-dom
```

## Project Structure

```text
src/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
│
├── App.jsx
└── main.jsx
```

---

# Step 1: Wrap `BrowserRouter`

### `main.jsx`

```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

> **BrowserRouter** is the root component that enables navigation in a React app by syncing the UI with the browser's URL.

---

# Step 2: Create Routes

> **Routes** is a container that holds all `Route` components.

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}
```

---

# BrowserRouter

> **BrowserRouter** enables routing using the browser's History API. It should wrap the entire application.

```jsx
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

# Routes

> **Routes** is a container that holds all `Route` components and checks which `Route` matches the current URL.

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes>
```

---

# Route

> A **Route** maps a URL path to a React component.

```jsx
<Route path="/about" element={<About />} />
```

---

# Link

> **Link** is a React Router component used to navigate between pages when the user clicks on it, without reloading the browser.

```jsx
<Link to="/about">About</Link>
```

---

# Where Do We Use `Navbar.jsx`?

> `Navbar.jsx` is a reusable component that contains the navigation UI, such as the logo and links.

It is usually placed in `App.jsx` **outside the `Routes` component** so that it remains visible on every page, while only the page content inside `Routes` changes.

---

# `useNavigate()`

> `useNavigate` is a React Router Hook used to navigate programmatically using JavaScript, such as after a successful login, logout, or form submission.

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

# `useParams()`

> `useParams` returns dynamic values from the URL.

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

```js
const { id } = useParams();
```

Result:

```text
id = 20
```

---

# `useLocation()`

> `useLocation` returns information about the current URL.

```jsx
const location = useLocation();

console.log(location.pathname);
```

---

# `useSearchParams()`

> Used to read and update query parameters in the URL.

Example:

```text
/products?page=2
```

```jsx
const [searchParams] = useSearchParams();

searchParams.get("page");
```

### Update Parameters

```jsx
setSearchParams({
    page: 3
});
```

---

# Dynamic Routing

> **Dynamic Routing** is a routing technique where a part of the URL is dynamic (changes) so that the same component can display different data based on the URL value.

Instead of creating multiple routes:

```jsx
<Route path="/product1" element={<Product />} />
<Route path="/product2" element={<Product />} />
<Route path="/product3" element={<Product />} />
```

We create one dynamic route:

```jsx
<Route
    path="/product/:id"
    element={<Product />}
/>
```

---

# Protected Routes

> A **Protected Route** is a wrapper component that checks whether a user is authenticated before allowing access to a protected page.

* If the user is authenticated → renders the requested page.
* If the user is not authenticated → redirects the user to the Login page.

---

# Navigate Component

> `<Navigate />` is a React Router component used to redirect the user to another route during rendering.

It is mainly used for:

* Protected Routes
* Authentication
* Redirecting invalid URLs
* Redirecting after checking a condition

Example:

```jsx
<Navigate to="/login" />
```

---

# 404 Page

If the URL doesn't exist:

```jsx
<Route path="*" element={<NotFound />} />
```

---

# Complete Example

## `App.jsx`

```jsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
```

---

# `Navbar.jsx`

```jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <h2>My Website</h2>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    );
}

export default Navbar;
```

---

# `Login.jsx`

Here we'll use `useNavigate()`.

```jsx
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleLogin() {
        alert("Login Successful");
        navigate("/dashboard");
    }

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}

export default Login;
```

---

# Protected Routes

> `ProtectedRoute` is a wrapper component that checks whether the user is authenticated before rendering a protected page.

* If authentication succeeds → renders the requested page.
* Otherwise → redirects the user to the Login page.

## Protected Routes

```jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <Routes>

            {/* First page */}
            <Route path="/" element={<Login />} />

            {/* Protected page */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;
```

---

# `ProtectedRoute.jsx`

```jsx
function ProtectedRoute({ children }) {

    const token = localStorage.getItem("token");

    // Token doesn't exist
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Check with backend
    const isValid = verifyToken(token);

    if (!isValid) {
        return <Navigate to="/login" />;
    }

    return children;
}
```

---

# What is `children` in React?

> `children` is a special prop in React that represents the content placed between the opening and closing tags of a component.

It allows components to wrap and render dynamic content without knowing what that content is in advance.

Example:

```jsx
<ProtectedRoute>
    <Dashboard />
</ProtectedRoute>
```

Here:

```jsx
children
```

represents:

```jsx
<Dashboard />
```

---

# `useParams()`

> `useParams()` is a Hook used to read dynamic values from the URL path.

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

```js
const { id } = useParams();
```

### Example Products

```text
Product 101
Product 102
Product 103
```

### Dynamic Route

```jsx
<Route
    path="/product/:id"
    element={<Product />}
/>
```

### Product Component

```jsx
import { useParams } from "react-router-dom";

function Product() {

    const { id } = useParams();

    return <h1>Product Id : {id}</h1>;
}
```

---

# `useSearchParams()`

> `useSearchParams()` is a Hook used to read and update query parameters in the URL.

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

## Update Query Parameters

```jsx
setSearchParams({
    page: 5
});
```

### Multiple Query Parameters

Example:

```text
/products?category=mobile&sort=price&page=3
```

```jsx
const [searchParams] = useSearchParams();

const category = searchParams.get("category");
const sort = searchParams.get("sort");
const page = searchParams.get("page");
```

---

# Path Parameters vs Query Parameters

## Path Parameters

```text
/
```

Usually used for **Path Parameters (Resource Identifier)**.

Used to identify which specific resource you want.

Example:

```text
/product/101
```

Here:

```text
101
```

identifies a specific product.

---

## Query Parameters

```text
?
```

Used for **Query Parameters (Filters, Search, Options)**.

`useSearchParams()` is used for optional information like:

* Filtering
* Sorting
* Searching
* Pagination

Example:

```text
/products?category=mobile&sort=price&page=3
```

### Memory Trick

```text
/product/101
        ↑
Path Parameter
        ↓
Identifies a resource


/products?page=3
          ↑
Query Parameter
          ↓
Filter / Search / Sort / Pagination
```

---

# `useLocation()`

> `useLocation()` is a React Router Hook that returns information about the current URL, such as the pathname, query string, hash, and state.

Example URL:

```text
http://localhost:5173/product/101?page=2
```

```jsx
const location = useLocation();

console.log(location);
```

Output:

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

# Nested Routing

> **Nested Routing** is the process of defining child routes inside a parent route so that the child component is rendered within the parent component.

Example:

```text
Dashboard → Parent Route

Orders
Profile
   ↓
Child (Nested) Routes
```

```jsx
<Route
    path="/dashboard"
    element={<Dashboard />}
>
    <Route
        path="profile"
        element={<Profile />}
    />

    <Route
        path="orders"
        element={<Orders />}
    />
</Route>
```

---

# Dashboard Component

```jsx
function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>

            <Link to="profile">
                Profile
            </Link>

            <Link to="orders">
                Orders
            </Link>

            <Outlet />
        </>
    );
}
```

---

# `Outlet`

> `<Outlet />` is a placeholder inside the parent component where the matched child (nested) route is rendered.

Example:

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>

            <Link to="orders">
                Orders
            </Link>

            <Outlet />
        </>
    );
}
```

### Nested Routing Flow

```text
/dashboard
    ↓
Dashboard Component
    ↓
<Outlet />
    ↓
Child Route
    ↓
Profile / Orders
```

---

# React Router Quick Revision

| Concept               | Simple Meaning                          |
| --------------------- | --------------------------------------- |
| **BrowserRouter**     | Enables routing using the browser URL   |
| **Routes**            | Container for Route components          |
| **Route**             | Maps URL path to a component            |
| **Link**              | Navigates without full page reload      |
| **useNavigate()**     | Programmatically navigates              |
| **useParams()**       | Reads dynamic URL parameters            |
| **useLocation()**     | Gets current URL information            |
| **useSearchParams()** | Reads/updates query parameters          |
| **Navigate**          | Redirects to another route              |
| **Protected Route**   | Restricts access to authenticated users |
| **Dynamic Routing**   | Uses dynamic values in URL paths        |
| **Nested Routing**    | Routes inside another route             |
| **Outlet**            | Renders matched child route             |
| **children**          | Content passed between component tags   |
| `*` Route             | Handles unknown/404 URLs                |

---

# Complete Routing Mental Model

```text
Browser URL
     ↓
BrowserRouter
     ↓
Routes
     ↓
Find matching Route
     ↓
Render Component
     ↓
Component may use:
     │
     ├── useParams()
     │       ↓
     │   Path Parameters
     │
     ├── useSearchParams()
     │       ↓
     │   Query Parameters
     │
     ├── useLocation()
     │       ↓
     │   Current URL Information
     │
     └── useNavigate()
             ↓
        Programmatic Navigation
```

# Final Interview Crux

```text
BrowserRouter
     ↓
Enables routing

Routes
     ↓
Checks available routes

Route
     ↓
Matches URL → Component

Link
     ↓
Navigate without page reload

useNavigate()
     ↓
Navigate using JavaScript

useParams()
     ↓
Read /product/:id

useSearchParams()
     ↓
Read ?page=2

useLocation()
     ↓
Get current URL information

ProtectedRoute
     ↓
Check authentication

Navigate
     ↓
Redirect user

Nested Route
     ↓
Child route inside parent

Outlet
     ↓
Render child route inside parent
```

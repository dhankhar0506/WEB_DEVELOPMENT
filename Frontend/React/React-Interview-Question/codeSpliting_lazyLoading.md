<!-- ## Code Splitting
-> Code splitting means breaking your application's JavaScript bundle into smaller chunks instead of sending the entire application code to the browser at once.
-> Code splitting means dividing a large JavaScript bundle into smaller chunks that can be loaded when needed.
-> Normally, your application can be bundled into JavaScript files.

Without code splitting:
                    Browser opens app
                        ↓
                    Downloads ALL code
                        ↓
                    Home + Dashboard + Reports + Settings + Admin


# Lazy Loading
-> Lazy loading means loading a component/module only when it is actually needed instead of loading it immediately.

## React.lazy()
-> React.lazy() allows you to load a component only when it is needed, instead of loading it in the initial JavaScript bundle.


## Suspense
-> When a lazy component is being downloaded, React needs something to show while waiting.
While the JavaScript chunk is downloading, React needs something to show.
-> Suspense lets React show a fallback UI while some content is not ready yet.
->The fallback is the temporary UI shown while the content is waiting.

## example 
    import { lazy, Suspense } from "react";

    const Dashboard = lazy(() => import("./Dashboard"));
    const Profile = lazy(() => import("./Profile"));

    function App() {
        return (
            <>
                <h1>My App</h1>
                <Suspense fallback={<p>Loading...</p>}>
                    <Dashboard />
                </Suspense>
            </>
        );
    }

## Dynamic Imports
-> It is JS feature
-> Dynamic import allows JavaScript to load a module only when it is needed, instead of loading it when the application starts.
-> Dynamic import is a JavaScript feature that loads a module asynchronously at runtime when it is needed, helping reduce the initial JavaScript bundle and enabling code splitting.

## dynamic imports vs react.lazy()
    Dynamic import()
        → JavaScript feature
        → Load any module when needed

    React.lazy()
        → React feature
        → Lazy-load a React component
        → Uses dynamic import()


## What is Streaming?
-> Streaming means sending/rendering a page in pieces as different parts become ready instead of waiting for the entire page to be ready

## But Who Creates the Chunks?
- You don't manually create the chunks.Your build tool/bundler does it.
- example : Vite and Webpack

## Concurrent React?
Concurrent React allows React to interrupt rendering work and prioritize more important updates, helping keep the UI responsive. It uses Fiber and scheduling to pause, resume, or abandon render work when needed.


## Complete Example: Routing + Code Splitting + Lazy Loading
> Suppose our application has:
                            Home
                            Dashboard
                            Student Profile
                            Admin
We don't want the browser to download all page code when the user opens /.

> 1. Install React Router : npm install react-router-dom

> 2. Create Pages
    src/
    ├── pages/
    │   ├── Home.jsx
    │   ├── Dashboard.jsx
    │   ├── Profile.jsx
    │   └── Admin.jsx
    │
    ├── App.jsx
    └── main.jsx

- Home.jsx
    function Home() {
        return <h1>Home Page</h1>;
    }

    export default Home;

- Dashboard.jsx
    function Dashboard() {
        return <h1>Dashboard Page</h1>;
    }

    export default Dashboard;

- Profile.jsx
    function Profile() {
        return <h1>Student Profile</h1>;
    }

    export default Profile;

> Lazy Load the Pages : App.jsx
    import { lazy, Suspense } from "react";
    import { Routes, Route, Link } from "react-router-dom";

    const Home = lazy(() => import("./pages/Home"));
    const Dashboard = lazy(() => import("./pages/Dashboard"));
    const Profile = lazy(() => import("./pages/Profile"));

    function App() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="/dashboard">Dashboard</Link>{" "}
            <Link to="/profile">Profile</Link>
        </nav>

        <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Suspense>
        </>
    );
    }

    export default App;

> Wrap Router :main.jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";
    import App from "./App";

    ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ); -->

    # React Code Splitting, Lazy Loading, Suspense & Concurrent React

## Code Splitting

> Code splitting means breaking your application's JavaScript bundle into smaller chunks instead of sending the entire application code to the browser at once.

> Code splitting means dividing a large JavaScript bundle into smaller chunks that can be loaded when needed.

Normally, your application can be bundled into JavaScript files.

### Without Code Splitting

```text
Browser opens app
       ↓
Downloads ALL code
       ↓
Home + Dashboard + Reports + Settings + Admin
```

### With Code Splitting

```text
Browser opens app
       ↓
Downloads required code
       ↓
Home
       ↓
User opens Dashboard
       ↓
Dashboard chunk is downloaded
```

---

# Lazy Loading

> Lazy loading means loading a component/module only when it is actually needed instead of loading it immediately.

---

# React.lazy()

> `React.lazy()` allows you to load a component only when it is needed, instead of loading it in the initial JavaScript bundle.

---

# Suspense

When a lazy component is being downloaded, React needs something to show while waiting.

While the JavaScript chunk is downloading, React needs something to show.

> Suspense lets React show a fallback UI while some content is not ready yet.

> The fallback is the temporary UI shown while the content is waiting.

### Example

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));

function App() {
    return (
        <>
            <h1>My App</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <Dashboard />
            </Suspense>
        </>
    );
}
```

---

# Dynamic Imports

> Dynamic import is a JavaScript feature.

> Dynamic import allows JavaScript to load a module only when it is needed, instead of loading it when the application starts.

> Dynamic import is a JavaScript feature that loads a module asynchronously at runtime when it is needed, helping reduce the initial JavaScript bundle and enabling code splitting.

### Syntax

```javascript
import("./module.js");
```

---

# Dynamic Imports vs React.lazy()

```text
Dynamic import()
    ↓
JavaScript feature
    ↓
Load any module when needed


React.lazy()
    ↓
React feature
    ↓
Lazy-load a React component
    ↓
Uses dynamic import()
```

---

# What is Streaming?

> Streaming means sending/rendering a page in pieces as different parts become ready instead of waiting for the entire page to be ready.

```text
Page
 ↓
Part 1 ready → Send
 ↓
Part 2 ready → Send
 ↓
Part 3 ready → Send
```

---

# But Who Creates the Chunks?

* You don't manually create the chunks.
* Your build tool/bundler does it.
* Examples:

  * Vite
  * Webpack

```text
Source Code
     ↓
Build Tool / Bundler
     ↓
Code Splitting
     ↓
Multiple JavaScript Chunks
```

---

# Concurrent React

> Concurrent React allows React to interrupt rendering work and prioritize more important updates, helping keep the UI responsive.

It uses **Fiber** and **scheduling** to:

* Pause rendering work
* Resume rendering work
* Prioritize important updates
* Abandon unnecessary render work when needed

```text
Update
  ↓
React Scheduler
  ↓
Decides priority
  ↓
Fiber
  ↓
Rendering Work
  ↓
Pause → Resume → Continue
```

---

# Complete Example: Routing + Code Splitting + Lazy Loading

Suppose our application has:

```text
Home
Dashboard
Student Profile
Admin
```

We don't want the browser to download all page code when the user opens `/`.

---

## 1. Install React Router

```bash
npm install react-router-dom
```

---

## 2. Create Pages

```text
src/
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   └── Admin.jsx
│
├── App.jsx
└── main.jsx
```

---

## Home.jsx

```jsx
function Home() {
    return <h1>Home Page</h1>;
}

export default Home;
```

---

## Dashboard.jsx

```jsx
function Dashboard() {
    return <h1>Dashboard Page</h1>;
}

export default Dashboard;
```

---

## Profile.jsx

```jsx
function Profile() {
    return <h1>Student Profile</h1>;
}

export default Profile;
```

---

# 3. Lazy Load the Pages

### App.jsx

```jsx
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/dashboard">Dashboard</Link>{" "}
                <Link to="/profile">Profile</Link>
            </nav>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
```

---

# 4. Wrap Router

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

# Complete Flow

```text
User opens /
     ↓
React loads Home
     ↓
Home chunk is required
     ↓
User clicks Dashboard
     ↓
Dashboard chunk is downloaded
     ↓
Suspense shows "Loading..."
     ↓
Dashboard chunk finishes downloading
     ↓
Dashboard component renders
```

### Key Interview Summary

```text
Code Splitting
→ Break large bundle into smaller chunks

Lazy Loading
→ Load code only when needed

Dynamic import()
→ JavaScript feature for loading modules at runtime

React.lazy()
→ React API for lazy-loading components

Suspense
→ Shows fallback UI while lazy content is loading

Vite / Webpack
→ Build tools that create the chunks

Streaming
→ Send/render UI in pieces as they become ready

Concurrent React
→ React can prioritize, pause, resume, or abandon rendering work
```

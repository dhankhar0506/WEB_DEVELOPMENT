# React Code Splitting, Lazy Loading & Build Process

## First Understand the Problem

Suppose your React project has:

```text
Home        → 100 KB
Login       → 100 KB
Dashboard   → 100 KB
Profile     → 100 KB
Settings    → 100 KB
Admin       → 100 KB

Total → 600 KB
```

---

## Case 1: Without Code Splitting

```text
Browser
   ↓
Download
   ├── Home
   ├── Login
   ├── Dashboard
   ├── Profile
   ├── Settings
   └── Admin
   ↓
600 KB
```

> Even if the user only visits **Home**, the browser downloads everything.

> This increases the **initial loading time**.

---

## Case 2: With Code Splitting

With code splitting, components/pages can be downloaded **on demand**.

```text
Home.js
   ↓
100 KB

----------------

Dashboard.js
   ↓
120 KB

----------------

Profile.js
   ↓
80 KB

----------------

Settings.js
   ↓
90 KB
```

---

# Code Splitting

> **Code splitting** means dividing one large JavaScript bundle into smaller chunks so the browser only downloads the code when it is needed.

### Benefits

* Reduces the initial JavaScript bundle size.
* Improves initial loading performance.
* Loads code when it is actually needed.

Code splitting usually splits the application by:

* Routes / Pages
* Dynamically imported components

> It does **not** necessarily mean splitting every single component.

Suppose your application has:

```text
Home
About
Dashboard
Admin
Profile
```

With code splitting:

```text
Application
     ↓
  Split
     ↓
Many Files / Chunks
```

---

# What is Lazy Loading?

> **Lazy Loading** is a technique where a component or page is loaded only when it is actually needed.

```text
Load
  ↓
Only Required File
```

### Code Splitting vs Lazy Loading

> **Code Splitting creates the chunks. Lazy Loading decides when to load them.**

---

# Suspense

> **Suspense** displays a fallback UI while a lazy-loaded component is being downloaded.

Example:

```jsx
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Home />
        </Suspense>
    );
}
```

Here:

```text
lazy()
   ↓
Loads component dynamically
   ↓
Component is downloading
   ↓
Suspense shows fallback
   ↓
Download completes
   ↓
Component renders
```

---

# Complete Working

When we build a React application, tools like **Vite or Webpack** create a production build and we deploy it to a server such as **Netlify or Vercel**.

### Without Code Splitting

The entire application is bundled into one large JavaScript file.

```text
React Application
       ↓
Production Build
       ↓
Large JavaScript Bundle
       ↓
Browser downloads everything
```

Even if the user only visits the **Home** page, the browser downloads everything during the initial page load.

---

### With Code Splitting

The application is divided into smaller JavaScript chunks.

```text
React Application
       ↓
Code Splitting
       ↓
Multiple JavaScript Chunks
       ↓
Browser
```

When the user first opens the application:

```text
Application opens
      ↓
Home code downloaded
      ↓
Home page displayed
```

If the user later navigates to the **About** page:

```text
User clicks About
      ↓
React requests About chunk
      ↓
Chunk is downloading
      ↓
Suspense displays fallback
      ↓
Download completes
      ↓
About page renders
```

> The entire application does not need to reload.

---

# What is a Bundle?

> A **Bundle** is an optimized JavaScript file created from your React project so that the browser can execute it.

```text
Bundle = Combined JavaScript files
         ready for the browser
```

A **build tool** converts source code into optimized files that browsers can understand.

---

# What Happens Inside Build?

### 1. Convert JSX → JavaScript

```text
JSX
 ↓
JavaScript
```

### 2. Combine Files

Multiple application files and dependencies are processed into production-ready JavaScript files.

### 3. Remove Comments

Unnecessary comments can be removed from the production output.

### 4. Minify

> **Minification** removes unnecessary spaces, comments, and line breaks to reduce file size.

Before:

```js
function add(a, b) {
    return a + b;
}
```

After:

```js
function add(a,b){return a+b}
```

---

# What is Bundling?

> **Bundling** is the process of combining application files and dependencies into optimized JavaScript files for the browser.

```text
Multiple Source Files
        ↓
     Bundling
        ↓
Optimized JavaScript Files
        ↓
      Browser
```

---

# What is a Production Build?

> A **Production Build** is the final optimized application that we deploy to the server.

```text
Source Code
    ↓
Build
    ↓
Production Build
    ↓
Deploy
    ↓
Server / Hosting
```

---

# What is Transpiling?

> **Transpiling** is the process of converting modern JavaScript or JSX into browser-compatible JavaScript.

```text
Modern JavaScript / JSX
          ↓
      Transpiling
          ↓
Browser-Compatible JavaScript
```

---

# What is Tree Shaking?

> **Tree Shaking** removes unused code from the final bundle.

Example:

```js
import { add, subtract } from "./math";
```

If only `add` is used, the build tool may remove unused code such as `subtract` from the production output when supported by the module/build setup.

```text
Source Code
    ↓
Unused Code
    ↓
Tree Shaking
    ↓
Removed from final bundle
```

---

# What is the `dist` Folder?

> The `dist` folder contains the final production-ready files generated after running:

```bash
npm run build
```

These files can be deployed to hosting platforms like:

* Netlify
* Vercel

Typical flow:

```text
React Source Code
       ↓
npm run build
       ↓
dist/
       ↓
Production Files
       ↓
Deploy
```

---

# React Project Files vs Browser

Suppose your project has:

```text
App.jsx
Navbar.jsx
Footer.jsx
Login.jsx
Dashboard.jsx
Button.jsx
Card.jsx
```

These are separate source files.

> The browser does not directly understand a complete React project structure.

The browser understands:

* HTML
* CSS
* JavaScript

Therefore:

```text
React Files
    ↓
Build Tool (Vite)
    ↓
JavaScript Bundles
    ↓
Browser
```

---

# Transpiling

> **Transpiling** is the process of converting modern JavaScript or JSX into browser-compatible JavaScript.

```text
JSX / Modern JavaScript
          ↓
      Transpiler
          ↓
Browser-Compatible JavaScript
```

---

# What is HMR?

> **HMR (Hot Module Replacement)** is a development feature provided by Vite that updates only the modified module in the browser without refreshing the entire page, preserving the application state whenever possible.

Example:

```text
Developer changes code
        ↓
      Save File
        ↓
       HMR
        ↓
Modified module updated
        ↓
Browser updates
```

---

# HMR vs React State Update

| Developer Changes Code | User Clicks Button       |
| ---------------------- | ------------------------ |
| **HMR (Vite)**         | **React**                |
| Trigger = Save File    | Trigger = Event          |
| Updates source code    | Updates state            |
| Development only       | Development + Production |
| No page refresh        | No page refresh          |

---

# What is HMR?

> HMR is a development feature provided by Vite.

It is triggered when the **developer changes and saves the source code**.

```text
Developer Changes Code
        ↓
Save File
        ↓
HMR
        ↓
Only Modified Module Replaced
        ↓
Browser Updates
```

> HMR replaces only the modified module in the browser without refreshing the page.

---

# What is React State Update?

React state updates are different.

They are triggered by things such as:

* User clicks
* Input changes
* Other application events

Example:

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
    Increment
</button>
```

Flow:

```text
User Clicks Button
       ↓
setCount()
       ↓
State Changes
       ↓
React Re-renders Affected Components
       ↓
DOM Gets Updated
```

> React handles state updates by re-rendering the affected components and updating the DOM using its rendering and reconciliation process.

---

# 🔥 Quick Revision

| Topic                  | Simple Definition                                                       |
| ---------------------- | ----------------------------------------------------------------------- |
| **Code Splitting**     | Divides a large JavaScript bundle into smaller chunks                   |
| **Lazy Loading**       | Loads code only when it is needed                                       |
| **Suspense**           | Shows fallback UI while a lazy component is loading                     |
| **Bundle**             | Optimized JavaScript files prepared for the browser                     |
| **Bundling**           | Combining application files/dependencies into optimized files           |
| **Production Build**   | Final optimized application ready for deployment                        |
| **Transpiling**        | Converts modern JS/JSX into browser-compatible JavaScript               |
| **Tree Shaking**       | Removes unused code from the final bundle                               |
| **`dist`**             | Contains production-ready build files                                   |
| **HMR**                | Updates modified modules during development without a full page refresh |
| **React State Update** | Updates UI when application state changes                               |
| **Vite**               | Build tool/development tool commonly used with React                    |
